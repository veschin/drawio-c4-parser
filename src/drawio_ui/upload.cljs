(ns drawio-ui.upload
  (:require [reagent.core :as r]
            [cljs.core.async :as async :refer [<!]]
            [drawio-ui.api :as api]
            [drawio-ui.storage :as storage])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defonce upload-state (r/atom {:status :idle ; :idle :uploading :success :error
                               :message ""
                               :progress 0
                               :result nil}))

(defn- reset-upload-state! []
  (reset! upload-state {:status :idle :message "" :progress 0 :result nil}))

(defn- set-upload-status! [status & {:keys [message progress result]}]
  (swap! upload-state assoc 
         :status status
         :message (or message (:message @upload-state))
         :progress (or progress (:progress @upload-state))
         :result (or result (:result @upload-state))))

(defn- get-file-type [file]
  (let [name (.-name file)
        type (.-type file)]
    (cond
      (.endsWith name ".xml") :export
      (.endsWith name ".drawio") :export
      (= type "image/png") :png
      :else :unknown)))

(defn- handle-file-upload [file diagram-name]
  (go
    (set-upload-status! :uploading :message "Processing file...")
    
    (let [file-type (get-file-type file)]
      (if (= file-type :unknown)
        (set-upload-status! :error :message "Unsupported file type. Please upload PNG, XML, or .drawio files.")
        (do
          (set-upload-status! :uploading :message "Parsing diagram..." :progress 25)
          
          (let [result (<! (api/upload-and-parse file file-type))]
            (if (:success result)
              (do
                (set-upload-status! :uploading :message "Saving to storage..." :progress 75)
                
                ;; Generate thumbnail if we have XML data
                (let [xml-data (or (:raw-content result) 
                                  (get-in result [:data :raw-xml]))
                      thumbnail (<! (api/generate-thumbnail xml-data))
                      diagram-id (storage/add-diagram 
                                   diagram-name
                                   xml-data
                                   (:data result)
                                   file-type
                                   :filename (.-name file)
                                   :description "Uploaded diagram")]
                  
                  (if diagram-id
                    (set-upload-status! :success 
                                       :message (str "Successfully uploaded: " diagram-name)
                                       :progress 100
                                       :result {:diagram-id diagram-id 
                                              :thumbnail thumbnail})
                    (set-upload-status! :error :message "Failed to save diagram to storage"))))
              
              (set-upload-status! :error :message (:error result)))))))))

(defn- handle-paste-upload [paste-data diagram-name]
  (go
    (set-upload-status! :uploading :message "Processing paste data...")
    
    (let [result (<! (api/parse-paste paste-data))]
      (if (:success result)
        (do
          (set-upload-status! :uploading :message "Saving to storage..." :progress 75)
          
          (let [thumbnail (<! (api/generate-thumbnail paste-data))
                diagram-id (storage/add-diagram 
                             diagram-name
                             paste-data
                             (:data result)
                             :paste
                             :description "Pasted diagram")]
            
            (if diagram-id
              (set-upload-status! :success 
                                 :message (str "Successfully saved: " diagram-name)
                                 :progress 100
                                 :result {:diagram-id diagram-id :thumbnail thumbnail})
              (set-upload-status! :error :message "Failed to save diagram to storage"))))
        
        (set-upload-status! :error :message (:error result))))))

(defn file-upload-area []
  (let [dragging? (r/atom false)
        file-input (r/atom nil)]
    (fn []
      [:div.upload-area
       {:class (when @dragging? "dragging")
        :on-drag-enter #(do (.preventDefault %) (reset! dragging? true))
        :on-drag-leave #(do (.preventDefault %) (reset! dragging? false))
        :on-drag-over #(.preventDefault %)
        :on-drop (fn [e]
                   (.preventDefault e)
                   (reset! dragging? false)
                   (let [files (.. e -dataTransfer -files)]
                     (when (> (.-length files) 0)
                       (reset! file-input (aget files 0)))))}
       
       [:div.upload-content
        [:div.upload-icon "📁"]
        [:h3 "Drop files here or click to browse"]
        [:p "Supports: PNG with embedded Draw.io data, XML exports, .drawio files"]
        
        [:input.file-input
         {:type "file"
          :accept ".png,.xml,.drawio"
          :on-change #(reset! file-input (aget (.. % -target -files) 0))}]
        
        (when @file-input
          [:div.selected-file
           [:p (str "Selected: " (.-name @file-input))]
           [:button.btn.btn-secondary 
            {:on-click #(reset! file-input nil)} 
            "Clear"]])]])))

(defn paste-upload-area []
  (let [paste-data (r/atom "")]
    (fn []
      [:div.paste-area
       [:h3 "Or paste Draw.io data"]
       [:textarea.paste-input
        {:placeholder "Paste URL-encoded Draw.io data here..."
         :value @paste-data
         :on-change #(reset! paste-data (.. % -target -value))}]
       [:button.btn.btn-secondary
        {:disabled (empty? @paste-data)
         :on-click #(reset! paste-data "")}
        "Clear"]])))

(defn upload-form []
  (let [diagram-name (r/atom "")
        file-input (r/atom nil)
        paste-data (r/atom "")]
    (fn []
      [:form.upload-form
       {:on-submit (fn [e]
                     (.preventDefault e)
                     (cond
                       @file-input
                       (handle-file-upload @file-input @diagram-name)
                       
                       (seq @paste-data)
                       (handle-paste-upload @paste-data @diagram-name)
                       
                       :else
                       (set-upload-status! :error :message "Please select a file or paste data")))}
       
       [:div.form-group
        [:label.form-label "Diagram Name"]
        [:input.form-input
         {:type "text"
          :placeholder "Enter diagram name..."
          :value @diagram-name
          :on-change #(reset! diagram-name (.. % -target -value))}]]
       
       [file-upload-area file-input]
       [paste-upload-area paste-data]
       
       [:div.form-actions
        [:button.btn.btn-primary
         {:type "submit"
          :disabled (or (= :uploading (:status @upload-state))
                       (empty? @diagram-name)
                       (and (nil? @file-input) (empty? @paste-data)))}
         (if (= :uploading (:status @upload-state))
           "Processing..."
           "Upload Diagram")]
        
        [:button.btn.btn-secondary
         {:type "button"
          :on-click reset-upload-state!}
         "Reset"]]])))

(defn upload-status []
  (let [{:keys [status message progress result]} @upload-state]
    (when (not= status :idle)
      [:div.upload-status {:class (name status)}
       (case status
         :uploading [:div.progress
                    [:div.progress-bar {:style {:width (str progress "%")}}]
                    [:div.progress-text message]]
         :success [:div.success-message
                  [:div.success-icon "✅"]
                  [:div.success-text message]
                  (when result
                    [:div.success-actions
                     [:a.btn.btn-primary 
                      {:href (str "/diagram/" (:diagram-id result))}
                      "View Diagram"]])]
         :error [:div.error-message
                [:div.error-icon "❌"]
                [:div.error-text message]])])))

(defn upload-component []
  [:div.upload-component
   [:div.upload-header
    [:h2 "Upload Draw.io Diagram"]
    [:p "Upload PNG files with embedded Draw.io data, XML exports, or paste clipboard data"]]
   
   [upload-form]
   [upload-status]])