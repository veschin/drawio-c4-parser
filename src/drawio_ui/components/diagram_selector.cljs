(ns drawio-ui.components.diagram-selector
  "Diagram selector component for A/B comparison"
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [drawio-ui.components.ui.card :refer [card card-header card-title card-content card-footer]]
            [drawio-ui.components.ui.button :refer [button outline-button]]
            [drawio-ui.components.ui.badge :refer [badge]]
            [drawio-ui.lib.utils :refer [cn]]))

(defn file-format-badge
  "Badge showing file format"
  [format]
  [badge {:variant (case format
                    "png" "default"
                    "xml" "secondary"
                    "paste" "outline"
                    "outline")
          :class-name "text-xs"}
   (str/upper-case (name format))])

(defn diagram-thumbnail
  "Thumbnail display for a diagram"
  [{:keys [diagram selected? on-select]}]
  [:div {:class (cn "relative group cursor-pointer border-2 rounded-lg p-2 transition-all duration-200"
                   (if selected? 
                     "border-primary bg-primary/5 shadow-md"
                     "border-border hover:border-primary/50 hover:bg-accent/50"))
         :on-click on-select}
   
   ;; Thumbnail image/placeholder
   [:div {:class "w-full h-32 bg-muted rounded border flex items-center justify-center mb-2"}
    (if (:thumbnail diagram)
      [:img {:src (:thumbnail diagram) 
             :alt (:name diagram)
             :class "max-w-full max-h-full object-contain"}]
      [:div {:class "text-muted-foreground text-sm text-center p-2"}
       [:div "📊"]
       [:div "Diagram Preview"]])]
   
   ;; Diagram info
   [:div {:class "space-y-1"}
    [:div {:class "flex items-center justify-between"}
     [:span {:class "font-medium text-sm truncate"} (:name diagram)]
     [file-format-badge (:format diagram)]]
    
    [:div {:class "flex items-center justify-between text-xs text-muted-foreground"}
     [:span (str (:element-count diagram 0) " elements")]
     [:span (:date diagram "Unknown")]]
    
    (when (:description diagram)
      [:p {:class "text-xs text-muted-foreground line-clamp-2"} (:description diagram)])]
   
   ;; Selection indicator
   (when selected?
     [:div {:class "absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center"}
      [:span {:class "text-primary-foreground text-xs"} "✓"]])])

(defn drag-drop-zone
  "Drag and drop zone for file upload"
  [{:keys [on-file-select active? side]}]
  (let [drag-over? (r/atom false)
        file-input-ref (r/atom nil)]
    
    (fn [{:keys [on-file-select active? side]}]
      [:div {:class (cn "border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200"
                       (if @drag-over?
                         "border-primary bg-primary/10"
                         "border-border hover:border-primary/50"))
             :on-drag-over (fn [e]
                            (.preventDefault e)
                            (reset! drag-over? true))
             :on-drag-leave (fn [e]
                             (.preventDefault e)
                             (reset! drag-over? false))
             :on-drop (fn [e]
                       (.preventDefault e)
                       (reset! drag-over? false)
                       (let [files (.-files (.-dataTransfer e))]
                         (when (> (.-length files) 0)
                           (on-file-select (aget files 0) side))))}
       
       ;; Upload icon and text
       [:div {:class "space-y-4"}
        [:div {:class "text-6xl text-muted-foreground"} "📁"]
        [:div {:class "space-y-2"}
         [:h3 {:class "text-lg font-semibold"} 
          (str "Drop diagram " (str/upper-case (name side)) " here")]
         [:p {:class "text-muted-foreground"} 
          "Supports PNG with embedded XML, XML files, or paste data"]]
        
        [:div {:class "flex flex-col items-center gap-2"}
         [:input {:type "file"
                  :ref #(reset! file-input-ref %)
                  :accept ".png,.xml,.drawio"
                  :style {:display "none"}
                  :on-change (fn [e]
                              (let [file (-> e .-target .-files (aget 0))]
                                (when file
                                  (on-file-select file side))))}]
         
         [outline-button {:on-click #(.click @file-input-ref)}
          "Browse Files"]
         
         [:div {:class "text-sm text-muted-foreground"}
          "or"
          [:button {:class "ml-1 text-primary hover:underline"
                    :on-click #(rf/dispatch [:diagram-selector/show-paste-modal side])}
           "paste Draw.io data"]]]]]))

(defn diagram-grid
  "Grid of available diagrams"
  [{:keys [diagrams selected-diagram on-select side]}]
  (if (seq diagrams)
    [:div {:class "grid grid-cols-2 lg:grid-cols-3 gap-4"}
     (for [diagram diagrams]
       ^{:key (:id diagram)}
       [diagram-thumbnail {:diagram diagram
                          :selected? (= (:id diagram) (:id selected-diagram))
                          :on-select #(on-select diagram)}])]
    
    [:div {:class "text-center py-8 text-muted-foreground"}
     [:div {:class "text-4xl mb-2"} "📊"]
     [:p "No diagrams uploaded yet"]
     [:p {:class "text-sm"} "Upload your first diagram to get started"]]))

(defn selector-panel
  "Single selector panel for A or B side"
  [{:keys [side title selected-diagram available-diagrams on-select on-file-upload]}]
  [card {:class-name "h-full"}
   [card-header {}
    [card-title {:class-name "flex items-center justify-between"}
     [:div {:class "flex items-center gap-2"}
      [:span title]
      [badge {:variant (if selected-diagram "default" "outline")}
       (if selected-diagram "Selected" "Choose")]]
     
     (when selected-diagram
       [button {:variant "ghost" :size "sm"
                :on-click #(on-select nil)}
        "Clear"])]]
   
   [card-content {:class-name "space-y-4"}
    ;; Current selection display
    (when selected-diagram
      [:div {:class "p-3 bg-primary/5 border border-primary/20 rounded-lg"}
       [:div {:class "flex items-center gap-3"}
        [:div {:class "w-12 h-12 bg-muted rounded border flex items-center justify-center text-2xl"}
         "📊"]
        [:div {:class "flex-1 min-w-0"}
         [:div {:class "font-medium truncate"} (:name selected-diagram)]
         [:div {:class "text-sm text-muted-foreground"}
          (str (:element-count selected-diagram 0) " elements • "
               (:relationship-count selected-diagram 0) " relationships")]]]
       
       [:div {:class "mt-2 flex items-center gap-2"}
        [file-format-badge (:format selected-diagram)]
        [:span {:class "text-xs text-muted-foreground"} (:date selected-diagram)]]])
    
    ;; Upload zone when nothing selected
    (when-not selected-diagram
      [drag-drop-zone {:on-file-select on-file-upload
                      :side side}])
    
    ;; Recent diagrams section
    [:div {:class "space-y-2"}
     [:h4 {:class "text-sm font-medium text-muted-foreground"} "Recent Diagrams"]
     [diagram-grid {:diagrams (take 6 available-diagrams) ; Show only recent 6
                   :selected-diagram selected-diagram
                   :on-select on-select
                   :side side}]]]])

(defn comparison-controls
  "Controls for the comparison (compare button, etc.)"
  [{:keys [diagram-a diagram-b on-compare comparing?]}]
  [:div {:class "flex items-center justify-center p-6"}
   [:div {:class "text-center space-y-4"}
    ;; Comparison indicator
    [:div {:class "flex items-center justify-center gap-4 text-2xl"}
     [:div {:class (cn "w-12 h-12 rounded-full border-2 flex items-center justify-center"
                      (if diagram-a "border-primary bg-primary text-primary-foreground" "border-border text-muted-foreground"))}
      (if diagram-a "A" "?")]
     [:span {:class "text-muted-foreground"} "vs"]
     [:div {:class (cn "w-12 h-12 rounded-full border-2 flex items-center justify-center"
                      (if diagram-b "border-primary bg-primary text-primary-foreground" "border-border text-muted-foreground"))}
      (if diagram-b "B" "?")]]
    
    ;; Compare button
    [button {:variant "default" 
             :size "lg"
             :disabled (or comparing? (not diagram-a) (not diagram-b))
             :on-click on-compare
             :class-name "px-8"}
     (cond
       comparing? "Analyzing..."
       (and diagram-a diagram-b) "Compare Diagrams"
       :else "Select Two Diagrams")]
    
    (when (and diagram-a diagram-b)
      [:p {:class "text-sm text-muted-foreground"}
       "Ready to analyze differences between your diagrams"])]])

(defn diagram-selector
  "Main diagram selector component for A/B comparison"
  []
  (let [diagram-a @(rf/subscribe [:diagram-selector/selected-diagram :a])
        diagram-b @(rf/subscribe [:diagram-selector/selected-diagram :b])
        available-diagrams @(rf/subscribe [:diagram-selector/available-diagrams])
        comparing? @(rf/subscribe [:diagram-selector/comparing?])]
    
    [:div {:class "space-y-6"}
     ;; Selection panels
     [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
      [selector-panel {:side :a
                      :title "Diagram A (Before)"
                      :selected-diagram diagram-a
                      :available-diagrams available-diagrams
                      :on-select #(rf/dispatch [:diagram-selector/select-diagram :a %])
                      :on-file-upload #(rf/dispatch [:diagram-selector/upload-file :a %1])}]
      
      [selector-panel {:side :b
                      :title "Diagram B (After)"
                      :selected-diagram diagram-b
                      :available-diagrams available-diagrams
                      :on-select #(rf/dispatch [:diagram-selector/select-diagram :b %])
                      :on-file-upload #(rf/dispatch [:diagram-selector/upload-file :b %1])}]]
     
     ;; Comparison controls
     [comparison-controls {:diagram-a diagram-a
                          :diagram-b diagram-b
                          :comparing? comparing?
                          :on-compare #(rf/dispatch [:diagram-selector/start-comparison])}]])))