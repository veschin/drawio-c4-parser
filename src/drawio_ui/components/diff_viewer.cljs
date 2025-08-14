(ns drawio-ui.components.diff-viewer
  "Split diff viewer for side-by-side diagram comparison"
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [drawio-ui.components.ui.card :refer [card card-header card-title card-content]]
            [drawio-ui.components.ui.button :refer [button outline-button ghost-button]]
            [drawio-ui.components.ui.badge :refer [badge]]
            [drawio-ui.lib.utils :refer [cn]]
            [drawio-ui.diff :as diff]))

(defn zoom-controls
  "Zoom and pan controls"
  [{:keys [zoom on-zoom-in on-zoom-out on-zoom-reset on-zoom-fit]}]
  [:div {:class "flex items-center gap-1 bg-card border rounded-lg p-1"}
   [ghost-button {:size "sm" :on-click on-zoom-out :disabled (< zoom 0.25)}
    "−"]
   [:span {:class "text-sm font-mono px-2"} (str (Math/round (* zoom 100)) "%")]
   [ghost-button {:size "sm" :on-click on-zoom-in :disabled (> zoom 3.0)}
    "+"]
   [:div {:class "w-px h-4 bg-border mx-1"}]
   [ghost-button {:size "sm" :on-click on-zoom-fit} "Fit"]
   [ghost-button {:size "sm" :on-click on-zoom-reset} "100%"]])

(defn diagram-overlay
  "SVG overlay for highlighting changes"
  [{:keys [changes diagram-bounds]}]
  [:svg {:class "absolute inset-0 w-full h-full pointer-events-none z-10"
         :viewBox (str "0 0 " (:width diagram-bounds) " " (:height diagram-bounds))}
   
   ;; Draw change highlights
   (for [{:keys [element change-type bounds]} changes]
     ^{:key (:id element)}
     [:g
      ;; Highlight rectangle
      [:rect {:x (:x bounds) :y (:y bounds) 
              :width (:width bounds) :height (:height bounds)
              :fill "none"
              :stroke (case change-type
                       :added "#22c55e"
                       :removed "#ef4444" 
                       :modified-minor "#f59e0b"
                       :modified-major "#f97316"
                       "#6b7280")
              :stroke-width "3"
              :stroke-dasharray (when (= change-type :removed) "5,5")
              :opacity "0.8"}]
      
      ;; Change indicator badge
      [:circle {:cx (+ (:x bounds) (:width bounds) -10)
                :cy (+ (:y bounds) 10)
                :r "8"
                :fill (case change-type
                       :added "#22c55e"
                       :removed "#ef4444"
                       :modified-minor "#f59e0b" 
                       :modified-major "#f97316"
                       "#6b7280")}]
      
      [:text {:x (+ (:x bounds) (:width bounds) -10)
              :y (+ (:y bounds) 15)
              :text-anchor "middle"
              :fill "white"
              :font-size "10"
              :font-weight "bold"}
       (diff/get-change-icon change-type)]])])

(defn diagram-viewer
  "Single diagram viewer panel"
  [{:keys [diagram title side zoom pan changes selected-element on-element-select]}]
  (let [container-ref (r/atom nil)
        dragging? (r/atom false)
        last-mouse (r/atom {:x 0 :y 0})]
    
    (fn [{:keys [diagram title side zoom pan changes selected-element on-element-select]}]
      [:div {:class "flex-1 flex flex-col border rounded-lg bg-card"}
       
       ;; Header
       [:div {:class "flex items-center justify-between p-3 border-b bg-card-header"}
        [:div {:class "flex items-center gap-2"}
         [badge {:variant (if (= side :a) "secondary" "default")}
          (str/upper-case (name side))]
         [:span {:class "font-medium"} title]]
        
        [:div {:class "text-sm text-muted-foreground"}
         (str (:element-count diagram 0) " elements")]]
       
       ;; Diagram content area
       [:div {:class "flex-1 relative overflow-hidden bg-background"
              :ref #(reset! container-ref %)}
        
        ;; SVG diagram display
        [:div {:class "absolute inset-0"
               :style {:transform (str "scale(" zoom ") translate(" (:x pan 0) "px, " (:y pan 0) "px)")
                      :transform-origin "0 0"
                      :cursor (if @dragging? "grabbing" "grab")}
               :on-mouse-down (fn [e]
                               (reset! dragging? true)
                               (reset! last-mouse {:x (.-clientX e) :y (.-clientY e)}))
               :on-mouse-move (fn [e]
                               (when @dragging?
                                 (let [dx (- (.-clientX e) (:x @last-mouse))
                                       dy (- (.-clientY e) (:y @last-mouse))]
                                   (rf/dispatch [:diff-viewer/pan side dx dy])
                                   (reset! last-mouse {:x (.-clientX e) :y (.-clientY e)}))))
               :on-mouse-up #(reset! dragging? false)
               :on-mouse-leave #(reset! dragging? false)}
         
         ;; Render diagram SVG here (placeholder for now)
         [:div {:class "w-full h-96 border-2 border-dashed border-border rounded-lg flex items-center justify-center m-4"}
          [:div {:class "text-center space-y-2"}
           [:div {:class "text-6xl text-muted-foreground"} "📊"]
           [:div {:class "text-lg font-medium text-muted-foreground"} "Diagram Rendering"]
           [:div {:class "text-sm text-muted-foreground"} "SVG will be rendered here"]]]]
        
        ;; Change overlay
        (when changes
          [diagram-overlay {:changes changes
                           :diagram-bounds {:width 800 :height 600}}])
        
        ;; Element selection overlay
        (when selected-element
          [:div {:class "absolute border-2 border-primary bg-primary/10 rounded"
                 :style {:left (:x selected-element)
                        :top (:y selected-element)
                        :width (:width selected-element)
                        :height (:height selected-element)}}])]])))

(defn change-legend
  "Legend showing change types and colors"
  []
  [:div {:class "flex items-center gap-4 text-sm"}
   [:span {:class "font-medium"} "Changes:"]
   
   (for [{:keys [type label color]} [{:type :added :label "Added" :color "bg-green-500"}
                                    {:type :removed :label "Removed" :color "bg-red-500"}
                                    {:type :modified-minor :label "Minor" :color "bg-yellow-500"}
                                    {:type :modified-major :label "Major" :color "bg-orange-500"}]]
     ^{:key type}
     [:div {:class "flex items-center gap-1"}
      [:div {:class (str color " w-3 h-3 rounded")}]
      [:span label]])])

(defn viewer-controls
  "Controls for the diff viewer"
  [{:keys [zoom-a zoom-b on-sync-zoom on-export on-fullscreen sync-enabled?]}]
  [:div {:class "flex items-center justify-between p-3 bg-muted/30 border-b"}
   [:div {:class "flex items-center gap-4"}
    [change-legend]
    [:div {:class "flex items-center gap-2"}
     [:input {:type "checkbox" 
              :id "sync-zoom"
              :checked sync-enabled?
              :on-change #(rf/dispatch [:diff-viewer/toggle-sync])}]
     [:label {:for "sync-zoom" :class "text-sm"} "Sync zoom & pan"]]]
   
   [:div {:class "flex items-center gap-2"}
    [outline-button {:size "sm" :on-click on-export}
     "📤 Export"]
    [outline-button {:size "sm" :on-click on-fullscreen}
     "⛶ Fullscreen"]]])

(defn connection-lines
  "Draw lines connecting related elements between diagrams"
  [{:keys [connections visible?]}]
  (when visible?
    [:svg {:class "absolute inset-0 w-full h-full pointer-events-none z-5"
           :style {:left "50%" :transform "translateX(-50%)"}}
     
     (for [{:keys [from to type]} connections]
       ^{:key (str (:id from) "-" (:id to))}
       [:line {:x1 (+ (:x from) (:width from))
               :y1 (+ (:y from) (/ (:height from) 2))
               :x2 (:x to)
               :y2 (+ (:y to) (/ (:height to) 2))
               :stroke (case type
                        :matched "#6b7280"
                        :fuzzy-matched "#f59e0b"
                        "#6b7280")
               :stroke-width "2"
               :stroke-dasharray (when (= type :fuzzy-matched) "3,3")
               :opacity "0.6"}])]))

(defn minimap
  "Minimap for navigation in large diagrams"
  [{:keys [diagram zoom pan viewport-bounds on-navigate]}]
  [:div {:class "absolute bottom-4 right-4 w-48 h-32 bg-card border rounded-lg shadow-lg overflow-hidden"}
   [:div {:class "w-full h-full bg-muted relative cursor-pointer"
          :on-click (fn [e]
                     (let [rect (.getBoundingClientRect (.-currentTarget e))
                           x (- (.-clientX e) (.-left rect))
                           y (- (.-clientY e) (.-top rect))]
                       (on-navigate x y)))}
    
    ;; Minimap content (simplified diagram representation)
    [:div {:class "absolute inset-1 border border-border rounded"}
     ;; Viewport indicator
     [:div {:class "absolute border-2 border-primary bg-primary/20 rounded"
            :style {:left (* (:x viewport-bounds 0) 0.2)
                   :top (* (:y viewport-bounds 0) 0.2)
                   :width (* (:width viewport-bounds 100) 0.2)
                   :height (* (:height viewport-bounds 100) 0.2)}}]]]])

(defn diff-viewer
  "Main split diff viewer component"
  []
  (let [diagram-a @(rf/subscribe [:diff-viewer/diagram :a])
        diagram-b @(rf/subscribe [:diff-viewer/diagram :b])
        zoom-a @(rf/subscribe [:diff-viewer/zoom :a])
        zoom-b @(rf/subscribe [:diff-viewer/zoom :b])
        pan-a @(rf/subscribe [:diff-viewer/pan :a])
        pan-b @(rf/subscribe [:diff-viewer/pan :b])
        changes-a @(rf/subscribe [:diff-viewer/changes :a])
        changes-b @(rf/subscribe [:diff-viewer/changes :b])
        connections @(rf/subscribe [:diff-viewer/connections])
        sync-enabled? @(rf/subscribe [:diff-viewer/sync-enabled?])
        selected-element @(rf/subscribe [:diff-viewer/selected-element])]
    
    [:div {:class "h-full flex flex-col bg-background"}
     
     ;; Controls header
     [viewer-controls {:zoom-a zoom-a
                      :zoom-b zoom-b
                      :sync-enabled? sync-enabled?
                      :on-export #(rf/dispatch [:diff-viewer/export-comparison])
                      :on-fullscreen #(rf/dispatch [:diff-viewer/toggle-fullscreen])}]
     
     ;; Main comparison area
     [:div {:class "flex-1 relative flex gap-4 p-4"}
      
      ;; Left diagram (A)
      [:div {:class "flex-1 relative"}
       [diagram-viewer {:diagram diagram-a
                       :title (:name diagram-a "Diagram A")
                       :side :a
                       :zoom zoom-a
                       :pan pan-a
                       :changes changes-a
                       :selected-element selected-element
                       :on-element-select #(rf/dispatch [:diff-viewer/select-element %])}]
       
       ;; Zoom controls for A
       [:div {:class "absolute bottom-4 left-4"}
        [zoom-controls {:zoom zoom-a
                       :on-zoom-in #(rf/dispatch [:diff-viewer/zoom-in :a])
                       :on-zoom-out #(rf/dispatch [:diff-viewer/zoom-out :a])
                       :on-zoom-reset #(rf/dispatch [:diff-viewer/zoom-reset :a])
                       :on-zoom-fit #(rf/dispatch [:diff-viewer/zoom-fit :a])}]]
       
       ;; Minimap for A
       [minimap {:diagram diagram-a
                :zoom zoom-a
                :pan pan-a
                :viewport-bounds {:x 0 :y 0 :width 100 :height 100}
                :on-navigate #(rf/dispatch [:diff-viewer/navigate :a %1 %2])}]]
      
      ;; Connection lines between diagrams
      [connection-lines {:connections connections
                        :visible? true}]
      
      ;; Right diagram (B)
      [:div {:class "flex-1 relative"}
       [diagram-viewer {:diagram diagram-b
                       :title (:name diagram-b "Diagram B")
                       :side :b
                       :zoom zoom-b
                       :pan pan-b
                       :changes changes-b
                       :selected-element selected-element
                       :on-element-select #(rf/dispatch [:diff-viewer/select-element %])}]
       
       ;; Zoom controls for B
       [:div {:class "absolute bottom-4 left-4"}
        [zoom-controls {:zoom zoom-b
                       :on-zoom-in #(rf/dispatch [:diff-viewer/zoom-in :b])
                       :on-zoom-out #(rf/dispatch [:diff-viewer/zoom-out :b])
                       :on-zoom-reset #(rf/dispatch [:diff-viewer/zoom-reset :b])
                       :on-zoom-fit #(rf/dispatch [:diff-viewer/zoom-fit :b])}]]
       
       ;; Minimap for B  
       [minimap {:diagram diagram-b
                :zoom zoom-b
                :pan pan-b
                :viewport-bounds {:x 0 :y 0 :width 100 :height 100}
                :on-navigate #(rf/dispatch [:diff-viewer/navigate :b %1 %2])}]]]]))

(defn diff-viewer-loading
  "Loading state for diff viewer"
  []
  [:div {:class "h-96 flex items-center justify-center"}
   [:div {:class "text-center space-y-4"}
    [:div {:class "animate-spin text-4xl"} "⏳"]
    [:div {:class "text-lg font-medium"} "Analyzing diagrams..."]
    [:div {:class "text-sm text-muted-foreground"} "Computing differences and similarities"]]])

(defn diff-viewer-error
  "Error state for diff viewer"
  [{:keys [error on-retry]}]
  [:div {:class "h-96 flex items-center justify-center"}
   [:div {:class "text-center space-y-4"}
    [:div {:class "text-4xl text-red-500"} "⚠️"]
    [:div {:class "text-lg font-medium text-red-600"} "Comparison Failed"]
    [:div {:class "text-sm text-muted-foreground"} (str error)]
    [button {:variant "outline" :on-click on-retry}
     "Try Again"]]])

(defn diff-viewer-container
  "Container that handles loading and error states"
  []
  (let [loading? @(rf/subscribe [:diff-viewer/loading?])
        error @(rf/subscribe [:diff-viewer/error])]
    
    (cond
      loading? [diff-viewer-loading]
      error [diff-viewer-error {:error error
                               :on-retry #(rf/dispatch [:diff-viewer/retry-comparison])}]
      :else [diff-viewer])))