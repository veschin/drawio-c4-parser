(ns drawio-ui.renderer
  "SVG renderer and cache for Draw.io diagrams"
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [ajax.core :as ajax]))

;; Cache atom for rendered SVGs
(defonce svg-cache (r/atom {}))
(defonce thumbnail-cache (r/atom {}))

;; Cache configuration
(def cache-config
  {:max-entries 50
   :ttl-ms (* 15 60 1000) ; 15 minutes
   :thumbnail-max-size 200})

(defn cache-key
  "Generate cache key from diagram data and options"
  [diagram-data options]
  (let [content-hash (hash (select-keys diagram-data [:xml :elements :relationships]))
        options-hash (hash options)]
    (str content-hash "-" options-hash)))

(defn cache-put!
  "Put item in cache with TTL"
  [cache key value]
  (let [entry {:value value
               :timestamp (js/Date.now)
               :ttl cache-config}]
    (swap! cache assoc key entry)))

(defn cache-get
  "Get item from cache if not expired"
  [cache key]
  (when-let [entry (get @cache key)]
    (let [now (js/Date.now)
          age (- now (:timestamp entry))]
      (if (< age (:ttl-ms cache-config))
        (:value entry)
        (do
          ;; Remove expired entry
          (swap! cache dissoc key)
          nil)))))

(defn cache-cleanup!
  "Remove expired entries from cache"
  [cache]
  (let [now (js/Date.now)
        expired-keys (for [[k v] @cache
                          :when (> (- now (:timestamp v)) (:ttl-ms cache-config))]
                      k)]
    (swap! cache #(apply dissoc % expired-keys))))

(defn cache-size-limit!
  "Enforce cache size limit by removing oldest entries"
  [cache]
  (when (> (count @cache) (:max-entries cache-config))
    (let [sorted-entries (sort-by (comp :timestamp second) @cache)
          keep-count (:max-entries cache-config)
          entries-to-remove (take (- (count @cache) keep-count) sorted-entries)
          keys-to-remove (map first entries-to-remove)]
      (swap! cache #(apply dissoc % keys-to-remove)))))

(defn maintain-cache!
  "Perform cache maintenance (cleanup + size limit)"
  []
  (cache-cleanup! svg-cache)
  (cache-cleanup! thumbnail-cache)
  (cache-size-limit! svg-cache)
  (cache-size-limit! thumbnail-cache))

;; Schedule periodic cache maintenance
(defonce cache-maintenance-timer
  (js/setInterval maintain-cache! (* 5 60 1000))) ; Every 5 minutes

(defn xml-to-svg
  "Convert Draw.io XML to SVG (calls backend API)"
  [xml-data options callback]
  (ajax/POST "/api/v1/render/svg"
    {:params {:xml xml-data
              :options (merge {:format "svg"
                             :background "white"
                             :scale 1.0}
                            options)}
     :format :json
     :response-format :text
     :handler (fn [svg-content]
                (callback {:success true :svg svg-content}))
     :error-handler (fn [response]
                     (callback {:success false 
                               :error (get-in response [:response :message] "SVG rendering failed")}))}))

(defn create-thumbnail
  "Create thumbnail from full SVG"
  [svg-content max-size]
  (try
    (let [parser (js/DOMParser.)
          svg-doc (.parseFromString parser svg-content "image/svg+xml")
          svg-element (.querySelector svg-doc "svg")]
      
      (when svg-element
        (let [view-box (.getAttribute svg-element "viewBox")
              [x y width height] (when view-box (map js/parseFloat (str/split view-box #"\s+")))
              aspect-ratio (if (and width height (pos? height)) (/ width height) 1)
              
              ;; Calculate thumbnail dimensions maintaining aspect ratio
              thumb-width (if (> aspect-ratio 1) max-size (* max-size aspect-ratio))
              thumb-height (if (> aspect-ratio 1) (/ max-size aspect-ratio) max-size)]
          
          ;; Clone and modify SVG for thumbnail
          (let [thumb-svg (.cloneNode svg-element true)]
            (.setAttribute thumb-svg "width" (str thumb-width))
            (.setAttribute thumb-svg "height" (str thumb-height))
            (.setAttribute thumb-svg "class" "thumbnail-svg")
            
            ;; Simplify styles for thumbnail
            (let [style-elem (.createElement js/document "style")]
              (set! (.-textContent style-elem) 
                    ".thumbnail-svg { font-size: 8px; } 
                     .thumbnail-svg text { font-size: 8px; }
                     .thumbnail-svg .small-text { display: none; }")
              (.appendChild thumb-svg style-elem))
            
            (.-outerHTML thumb-svg)))))
    (catch :default e
      (js/console.error "Thumbnail creation failed:" e)
      nil)))

(defn render-diagram
  "Render diagram to SVG with caching"
  [{:keys [diagram-data options on-success on-error]}]
  (let [key (cache-key diagram-data options)
        cached-svg (cache-get svg-cache key)]
    
    (if cached-svg
      ;; Return cached result
      (on-success cached-svg)
      
      ;; Render new SVG
      (xml-to-svg (:xml diagram-data) options
                  (fn [result]
                    (if (:success result)
                      (let [svg-content (:svg result)]
                        ;; Cache the result
                        (cache-put! svg-cache key svg-content)
                        
                        ;; Generate and cache thumbnail
                        (when-let [thumbnail (create-thumbnail svg-content (:thumbnail-max-size cache-config))]
                          (cache-put! thumbnail-cache key thumbnail))
                        
                        (on-success svg-content))
                      
                      (on-error (:error result))))))))

(defn render-thumbnail
  "Render diagram thumbnail with caching"
  [{:keys [diagram-data on-success on-error]}]
  (let [key (cache-key diagram-data {:thumbnail true})
        cached-thumb (cache-get thumbnail-cache key)]
    
    (if cached-thumb
      ;; Return cached thumbnail
      (on-success cached-thumb)
      
      ;; Generate thumbnail via full render
      (render-diagram
        {:diagram-data diagram-data
         :options {:thumbnail true}
         :on-success (fn [svg-content]
                      (if-let [thumbnail (create-thumbnail svg-content (:thumbnail-max-size cache-config))]
                        (do
                          (cache-put! thumbnail-cache key thumbnail)
                          (on-success thumbnail))
                        (on-error "Failed to generate thumbnail")))
         :on-error on-error}))))

(defn preload-diagrams
  "Preload multiple diagrams for faster comparison"
  [diagram-list]
  (doseq [diagram diagram-list]
    ;; Render in background for caching
    (render-diagram
      {:diagram-data diagram
       :options {:background "white" :scale 1.0}
       :on-success #(js/console.log "Preloaded diagram:" (:name diagram))
       :on-error #(js/console.warn "Failed to preload diagram:" (:name diagram) %)})))

(defn svg-to-data-url
  "Convert SVG string to data URL for embedding"
  [svg-content]
  (let [encoded (js/encodeURIComponent svg-content)]
    (str "data:image/svg+xml," encoded)))

(defn download-svg
  "Download SVG content as file"
  [svg-content filename]
  (let [blob (js/Blob. #js [svg-content] #js {:type "image/svg+xml"})
        url (js/URL.createObjectURL blob)
        link (.createElement js/document "a")]
    
    (set! (.-href link) url)
    (set! (.-download link) (or filename "diagram.svg"))
    (.appendChild (.-body js/document) link)
    (.click link)
    (.removeChild (.-body js/document) link)
    (js/URL.revokeObjectURL url)))

(defn svg-to-canvas
  "Convert SVG to canvas for PNG export"
  [svg-content width height callback]
  (let [canvas (.createElement js/document "canvas")
        ctx (.getContext canvas "2d")
        img (js/Image.)
        svg-url (svg-to-data-url svg-content)]
    
    (set! (.-width canvas) width)
    (set! (.-height canvas) height)
    
    (set! (.-onload img)
          (fn []
            (.drawImage ctx img 0 0 width height)
            (callback canvas)))
    
    (set! (.-onerror img)
          (fn [e]
            (js/console.error "Failed to convert SVG to canvas:" e)
            (callback nil)))
    
    (set! (.-src img) svg-url)))

(defn export-as-png
  "Export SVG as PNG file"
  [svg-content width height filename]
  (svg-to-canvas svg-content width height
    (fn [canvas]
      (when canvas
        (let [link (.createElement js/document "a")]
          (set! (.-href link) (.toDataURL canvas "image/png"))
          (set! (.-download link) (or filename "diagram.png"))
          (.appendChild (.-body js/document) link)
          (.click link)
          (.removeChild (.-body js/document) link))))))

;; React components for SVG rendering

(defn svg-viewer
  "React component for displaying SVG diagrams"
  [{:keys [diagram-data width height class-name on-load on-error scale pan]}]
  (let [svg-content (r/atom nil)
        loading? (r/atom true)
        error-msg (r/atom nil)]
    
    (r/create-class
      {:component-did-mount
       (fn []
         (render-diagram
           {:diagram-data diagram-data
            :options {:width width :height height :scale (or scale 1.0)}
            :on-success (fn [svg]
                         (reset! svg-content svg)
                         (reset! loading? false)
                         (when on-load (on-load svg)))
            :on-error (fn [error]
                       (reset! error-msg error)
                       (reset! loading? false)
                       (when on-error (on-error error)))}))
       
       :component-did-update
       (fn [this [_ old-props]]
         (let [new-props (r/props this)]
           (when (not= (:diagram-data old-props) (:diagram-data new-props))
             ;; Diagram changed, re-render
             (reset! loading? true)
             (reset! error-msg nil)
             (render-diagram
               {:diagram-data (:diagram-data new-props)
                :options {:width width :height height :scale (or scale 1.0)}
                :on-success (fn [svg]
                             (reset! svg-content svg)
                             (reset! loading? false)
                             (when on-load (on-load svg)))
                :on-error (fn [error]
                           (reset! error-msg error)
                           (reset! loading? false)
                           (when on-error (on-error error)))}))))
       
       :reagent-render
       (fn [{:keys [class-name]}]
         [:div {:class (str "svg-viewer " class-name)}
          (cond
            @loading?
            [:div {:class "flex items-center justify-center h-64"}
             [:div {:class "text-center space-y-2"}
              [:div {:class "animate-spin text-2xl"} "⏳"]
              [:div {:class "text-sm text-muted-foreground"} "Rendering diagram..."]]]
            
            @error-msg
            [:div {:class "flex items-center justify-center h-64"}
             [:div {:class "text-center space-y-2 text-red-600"}
              [:div {:class "text-2xl"} "⚠️"]
              [:div {:class "font-medium"} "Rendering Failed"]
              [:div {:class "text-sm"} @error-msg]]]
            
            @svg-content
            [:div {:class "w-full h-full overflow-hidden"}
             [:div {:style {:transform (when (and scale pan)
                                       (str "scale(" scale ") translate(" (:x pan 0) "px, " (:y pan 0) "px)"))
                           :transform-origin "0 0"}}
              [:div {:dangerouslySetInnerHTML {:__html @svg-content}}]]]
            
            :else
            [:div {:class "flex items-center justify-center h-64"}
             [:div {:class "text-muted-foreground"} "No content"]])])})))

(defn thumbnail-viewer
  "React component for displaying diagram thumbnails"
  [{:keys [diagram-data class-name on-load on-error]}]
  (let [thumbnail-content (r/atom nil)
        loading? (r/atom true)
        error-msg (r/atom nil)]
    
    (r/create-class
      {:component-did-mount
       (fn []
         (render-thumbnail
           {:diagram-data diagram-data
            :on-success (fn [thumb]
                         (reset! thumbnail-content thumb)
                         (reset! loading? false)
                         (when on-load (on-load thumb)))
            :on-error (fn [error]
                       (reset! error-msg error)
                       (reset! loading? false)
                       (when on-error (on-error error)))}))
       
       :reagent-render
       (fn [{:keys [class-name]}]
         [:div {:class (str "thumbnail-viewer " class-name)}
          (cond
            @loading?
            [:div {:class "w-full h-24 bg-muted rounded flex items-center justify-center"}
             [:div {:class "animate-pulse text-muted-foreground"} "📊"]]
            
            @error-msg
            [:div {:class "w-full h-24 bg-red-50 border border-red-200 rounded flex items-center justify-center"}
             [:div {:class "text-red-600 text-sm"} "Failed"]]
            
            @thumbnail-content
            [:div {:class "w-full h-full"}
             [:div {:dangerouslySetInnerHTML {:__html @thumbnail-content}}]])])})))

;; Cache management functions

(defn get-cache-stats
  "Get statistics about current cache usage"
  []
  {:svg-cache {:size (count @svg-cache)
               :max-size (:max-entries cache-config)}
   :thumbnail-cache {:size (count @thumbnail-cache)
                    :max-size (:max-entries cache-config)}})

(defn clear-cache!
  "Clear all cached content"
  []
  (reset! svg-cache {})
  (reset! thumbnail-cache {}))

(defn invalidate-diagram!
  "Invalidate cached content for specific diagram"
  [diagram-data]
  (let [svg-keys (filter #(str/starts-with? % (str (hash diagram-data))) (keys @svg-cache))
        thumb-keys (filter #(str/starts-with? % (str (hash diagram-data))) (keys @thumbnail-cache))]
    (swap! svg-cache #(apply dissoc % svg-keys))
    (swap! thumbnail-cache #(apply dissoc % thumb-keys))))

;; Export functions

(defn batch-export-diagrams
  "Export multiple diagrams in different formats"
  [diagrams format options]
  (doseq [{:keys [diagram-data filename] :as diagram} diagrams]
    (render-diagram
      {:diagram-data diagram-data
       :options options
       :on-success (fn [svg-content]
                    (case format
                      :svg (download-svg svg-content (str filename ".svg"))
                      :png (export-as-png svg-content 
                                         (or (:width options) 1200)
                                         (or (:height options) 800)
                                         (str filename ".png"))))
       :on-error (fn [error]
                  (js/console.error "Failed to export diagram" filename error))})))