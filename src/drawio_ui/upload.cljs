(ns drawio-ui.upload
  (:require [reagent.core :as r]
            [cljs.core.async :as async :refer [<!]]
            [drawio-ui.api :as api]
            [drawio-ui.storage :as storage]
            [drawio-ui.components.ui.button :as button]
            [drawio-ui.components.ui.card :as card]
            [drawio-ui.components.ui.input :as input]
            [drawio-ui.components.ui.icons :as icons]
            [drawio-ui.lib.utils :refer [cn]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;;; State
(defonce upload-state (r/atom {:modal-visible? false
                               :status :idle ; :idle :uploading :success :error
                               :message ""
                               :progress 0
                               :result nil
                               :tab :file ; :file :paste
                               :selected-files []
                               :diagram-name ""
                               :paste-data ""}))

(defonce file-input-ref (r/atom nil))

;;; Internal helpers
(defn- reset-upload-state! []
  (reset! upload-state {:modal-visible? false
                        :status :idle :message "" :progress 0 :result nil
                        :tab :file :selected-files [] :diagram-name "" :paste-data ""}))

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

(defn- format-file-size [bytes]
  (cond
    (< bytes 1024) (str bytes " B")
    (< bytes (* 1024 1024)) (str (.toFixed (/ bytes 1024) 1) " KB")
    :else (str (.toFixed (/ bytes 1024 1024) 1) " MB")))

(defn- get-file-type-label [file-type]
  (case file-type
    :export "Draw.io file"
    :png "PNG with Draw.io data"
    :paste "Paste data"
    "Unknown format"))

(defn- handle-file-selection [files]
  (let [file-array (if (array? files) files [files])
        valid-files (filter #(not= (get-file-type %) :unknown) file-array)]
    (swap! upload-state assoc :selected-files (vec valid-files))))

(defn- trigger-file-input []
  (when-let [input @file-input-ref]
    (.click input)))

;;; Upload processing
(defn- process-file [file]
  (let [diagram-name (:diagram-name @upload-state)]
    (go
      (let [file-type (get-file-type file)]
        (if (= file-type :unknown)
          (set-upload-status! :error :message "Unsupported file type")
          (do
            (set-upload-status! :uploading :message "Processing...")
            (let [result (<! (api/upload-and-parse file file-type))]
              (if (:success result)
                (let [xml-data (or (:raw-content result) (get-in result [:data :raw-xml]))
                      diagram-id (storage/add-diagram diagram-name xml-data (:data result) file-type
                                                      :filename (.-name file))]
                  (if diagram-id
                    (set-upload-status! :success :message (str "Successfully uploaded " diagram-name "!"))
                    (set-upload-status! :error :message "Failed to save")))
                (set-upload-status! :error :message (:error result))))))))))

(defn- process-paste [paste-data]
  (let [diagram-name (:diagram-name @upload-state)]
    (go
      (let [result (<! (api/parse-paste paste-data))]
        (if (:success result)
          (let [diagram-id (storage/add-diagram diagram-name paste-data (:data result) :paste)]
            (if diagram-id
              (set-upload-status! :success :message (str "Successfully imported " diagram-name "!"))
              (set-upload-status! :error :message "Failed to save")))
          (set-upload-status! :error :message (:error result)))))))

;;; UI Components
(defn upload-tabs []
  (let [current-tab (:tab @upload-state)]
    [:div {:class "border-b mb-6"}
     [:div {:class "flex gap-1"}
      [button/button
       {:variant (if (= current-tab :file) "default" "ghost")
        :size "sm"
        :class-name "rounded-b-none"
        :on-click #(swap! upload-state assoc :tab :file)}
       [:div {:class "flex items-center gap-2"}
        [icons/file-icon {:size "16"}]
        "File Upload"]]

      [button/button
       {:variant (if (= current-tab :paste) "default" "ghost")
        :size "sm"
        :class-name "rounded-b-none"
        :on-click #(swap! upload-state assoc :tab :paste)}
       [:div {:class "flex items-center gap-2"}
        [icons/clipboard-icon {:size "16"}]
        "Paste Data"]]]]))

(defn selected-file-item [file on-remove]
  [:div {:class "flex items-center justify-between p-3 bg-muted/20 border border-border rounded-lg"}
   [:div {:class "flex items-center gap-3"}
    [:div {:class "flex-shrink-0"}
     [icons/file-icon {:size "24" :class "text-blue-500"}]]
    [:div {:class "min-w-0 flex-1"}
     [:p {:class "text-sm font-medium truncate"} (.-name file)]
     [:p {:class "text-xs text-muted-foreground"}
      (str (format-file-size (.-size file)) " • " (get-file-type-label (get-file-type file)))]]]
   [button/button
    {:variant "ghost"
     :size "sm"
     :class-name "flex-shrink-0"
     :on-click on-remove}
    [icons/x-icon {:size "16"}]]])

(defn file-upload-panel []
  (let [dragging? (r/atom false)
        selected-files (:selected-files @upload-state)]
    [:div {:class "space-y-4"}
     ;; Drop zone
     [:div {:class (cn "border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200"
                       (if @dragging?
                         "border-primary bg-primary/10 scale-105"
                         "border-muted-foreground/25 hover:border-primary/50 hover:bg-primary/5"))
            :on-drag-enter #(do (.preventDefault %) (reset! dragging? true))
            :on-drag-over #(.preventDefault %)
            :on-drag-leave #(reset! dragging? false)
            :on-drop (fn [e]
                       (.preventDefault e)
                       (reset! dragging? false)
                       (let [files (.. e -dataTransfer -files)]
                         (handle-file-selection files)))}
      [:div {:class "space-y-3"}
       [:div {:class "mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10"}
        [icons/upload-icon {:size "32" :class "text-primary"}]]
       [:div
        [:h3 {:class "text-lg font-medium"} "Drop your files here"]
        [:p {:class "text-sm text-muted-foreground mt-1"}
         "or"]]
       [button/button
        {:variant "outline"
         :on-click trigger-file-input}
        [icons/folder-open-icon {:size "16" :class "mr-2"}]
        "Browse Files"]]]

     ;; File list
     (if (seq selected-files)
       [:div {:class "space-y-3"}
        (doall
         (map-indexed
          (fn [idx file]
            ^{:key idx}
            [selected-file-item file
             #(swap! upload-state update :selected-files
                     (fn [files] (vec (concat (take idx files) (drop (inc idx) files)))))])
          selected-files))

        [button/button
         {:variant "ghost"
          :size "sm"
          :on-click trigger-file-input}
         [icons/plus-icon {:size "16" :class "mr-2"}]
         "Add more files"]]
       [:div])

     [:p {:class "text-xs text-muted-foreground"}
      "Supported formats: PNG with Draw.io data, XML, .drawio files"]

     ;; Hidden file input
     [:input {:type "file"
              :multiple true
              :accept ".png,.xml,.drawio"
              :class "hidden"
              :ref #(reset! file-input-ref %)
              :on-change (fn [e]
                           (let [files (.. e -target -files)]
                             (handle-file-selection files)
                             (set! (.. e -target -value) "")))}]]))

(defn paste-upload-panel []
  (let [paste-data (r/atom "")]
    (fn []
      [:div {:class "space-y-4"}
       [:div
        [:label {:class "block text-sm font-medium mb-2"}
         "Paste your Draw.io data"]
        [:textarea
         {:class "w-full h-32 p-3 border border-input rounded-md resize-none text-sm"
          :placeholder "Paste URL-encoded Draw.io data here..."
          :value @paste-data
          :on-change #(do
                        (reset! paste-data (.. % -target -value))
                        (swap! upload-state assoc :paste-data (.. % -target -value)))}]]

       [:div {:class "flex justify-between items-center text-xs text-muted-foreground"}
        [:span "Paste the clipboard data from Draw.io export"]
        [:span (str (count @paste-data) " characters")]]])))

(defn loading-state [{:keys [message]}]
  [:div {:class "text-center py-8 space-y-4"}
   [icons/loader-icon {:size "48" :class "mx-auto text-primary"}]
   [:div
    [:h3 {:class "text-lg font-medium"} "Processing..."]
    [:p {:class "text-sm text-muted-foreground"} message]]])

(defn success-state [{:keys [message]}]
  [:div {:class "text-center py-8 space-y-4"}
   [icons/check-circle-icon {:size "48" :class "mx-auto text-green-500"}]
   [:div
    [:h3 {:class "text-lg font-medium text-green-600"} "Success!"]
    [:p {:class "text-sm text-muted-foreground"} message]]
   [button/button
    {:on-click reset-upload-state!}
    "Close"]])

(defn error-state [{:keys [message]}]
  [:div {:class "text-center py-8 space-y-4"}
   [icons/x-circle-icon {:size "48" :class "mx-auto text-destructive"}]
   [:div
    [:h3 {:class "text-lg font-medium text-destructive"} "Upload Failed"]
    [:p {:class "text-sm text-muted-foreground"} message]]
   [button/button
    {:variant "outline"
     :on-click #(swap! upload-state assoc :status :idle :message "")}
    "Try Again"]])

(defn upload-modal []
  (let [{:keys [modal-visible? tab status message selected-files diagram-name paste-data]} @upload-state]
    (if modal-visible?
      [:div {:class "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"}
       [card/card {:class-name "w-full max-w-2xl max-h-[90vh] overflow-hidden"}
        ;; Header
        [card/card-header {:class-name "pb-4"}
         [:div {:class "flex items-center justify-between"}
          [:h2 {:class "text-2xl font-semibold"} "Upload Draw.io Diagram"]
          [button/button
           {:variant "ghost"
            :size "icon"
            :on-click reset-upload-state!}
           [icons/x-icon {:size "20"}]]]]

        ;; Content
        [card/card-content {:class-name "space-y-6 overflow-y-auto"}
         (cond
           (= status :uploading)
           [loading-state {:message message}]

           (= status :success)
           [success-state {:message message}]

           (= status :error)
           [error-state {:message message}]

           :else
           [:div {:class "space-y-6"}
            ;; Diagram name input - always visible
            [:div {:class "space-y-2"}
             [:label {:class "text-sm font-medium"} "Diagram Name"]
             [:input {:type "text"
                      :class "w-full px-3 py-2 border border-input rounded-md text-sm"
                      :placeholder "Enter diagram name..."
                      :value diagram-name
                      :on-change #(swap! upload-state assoc :diagram-name (.. % -target -value))}]]

            ;; Tabs
            [upload-tabs]

            ;; Tab content
            (case tab
              :file [file-upload-panel]
              :paste [paste-upload-panel]
              [file-upload-panel])

            ;; Action buttons
            [:div {:class "flex gap-3 pt-4 border-t"}
             [button/button
              {:variant "outline"
               :on-click reset-upload-state!}
              "Cancel"]

             [button/button
              {:disabled (or (= status :uploading)
                             (empty? diagram-name)
                             (and (= tab :file) (empty? selected-files))
                             (and (= tab :paste) (empty? paste-data)))
               :on-click (fn []
                           (if (= tab :file)
                             (when (seq selected-files)
                               (process-file (first selected-files)))
                             (when (seq paste-data)
                               (process-paste paste-data))))}
              (if (= tab :file) "Upload" "Import")]]])]]]
      [:div])))

;;; Main component with trigger
(defn upload-button []
  [button/button
   {:on-click #(swap! upload-state assoc :modal-visible? true)}
   [icons/upload-icon {:size "16" :class "mr-2"}]
   "Upload Diagram"])

(defn upload-component []
  [:div
   [upload-button]
   [upload-modal]])
