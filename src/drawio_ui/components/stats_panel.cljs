(ns drawio-ui.components.stats-panel
  "Statistics dashboard for diagram comparison metrics"
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [drawio-ui.components.ui.card :refer [card card-header card-title card-content]]
            [drawio-ui.components.ui.button :refer [button outline-button]]
            [drawio-ui.components.ui.badge :refer [badge]]
            [drawio-ui.lib.utils :refer [cn]]
            [drawio-ui.diff :as diff]))

(defn similarity-gauge
  "Circular progress gauge for similarity percentage"
  [{:keys [percentage size stroke-width]}]
  (let [size (or size 100)
        stroke-width (or stroke-width 8)
        radius (- (/ size 2) stroke-width)
        circumference (* 2 Math/PI radius)
        progress (* circumference (/ percentage 100))
        remaining (- circumference progress)]
    
    [:div {:class "relative inline-flex items-center justify-center"}
     [:svg {:width size :height size :class "transform -rotate-90"}
      ;; Background circle
      [:circle {:cx (/ size 2)
                :cy (/ size 2)
                :r radius
                :fill "none"
                :stroke "currentColor"
                :stroke-width stroke-width
                :class "text-muted/30"}]
      
      ;; Progress circle
      [:circle {:cx (/ size 2)
                :cy (/ size 2)
                :r radius
                :fill "none"
                :stroke "currentColor"
                :stroke-width stroke-width
                :stroke-linecap "round"
                :stroke-dasharray (str progress " " remaining)
                :class (cond
                        (>= percentage 90) "text-green-500"
                        (>= percentage 70) "text-blue-500"
                        (>= percentage 50) "text-yellow-500"
                        :else "text-red-500")
                :style {:transition "stroke-dasharray 0.3s ease-in-out"}}]]
     
     ;; Percentage text
     [:div {:class "absolute inset-0 flex items-center justify-center"}
      [:div {:class "text-center"}
       [:div {:class "text-xl font-bold"} (str percentage "%")]
       [:div {:class "text-xs text-muted-foreground"} "Similar"]]]]))

(defn metric-card
  "Card for displaying a single metric"
  [{:keys [title value subtitle icon color-class trend-value trend-icon description]}]
  [:div {:class (cn "p-4 rounded-lg border bg-card transition-all hover:shadow-sm" color-class)}
   [:div {:class "flex items-center justify-between mb-2"}
    [:div {:class "flex items-center gap-2"}
     (when icon
       [:span {:class "text-lg"} icon])
     [:span {:class "text-sm font-medium text-muted-foreground"} title]]
    
    (when trend-value
      [:div {:class "flex items-center gap-1 text-xs"}
       (when trend-icon
         [:span trend-icon])
       [:span {:class (if (pos? trend-value) "text-green-600" "text-red-600")}
        (str (when (pos? trend-value) "+") trend-value)]])]
   
   [:div {:class "space-y-1"}
    [:div {:class "text-2xl font-bold"} value]
    (when subtitle
      [:div {:class "text-sm text-muted-foreground"} subtitle])
    (when description
      [:div {:class "text-xs text-muted-foreground mt-2"} description])]])

(defn change-breakdown-chart
  "Simple horizontal bar chart for change types"
  [{:keys [data total]}]
  (when (pos? total)
    [:div {:class "space-y-2"}
     (for [{:keys [label count color percentage]} data
           :when (pos? count)]
       ^{:key label}
       [:div {:class "flex items-center gap-3"}
        [:div {:class "w-16 text-sm text-muted-foreground text-right"} label]
        [:div {:class "flex-1 bg-muted rounded-full h-2 relative overflow-hidden"}
         [:div {:class (str "h-full rounded-full " color)
                :style {:width (str percentage "%")
                       :transition "width 0.3s ease-in-out"}}]]
        [:div {:class "w-8 text-sm font-medium text-right"} count]])]))

(defn complexity-indicator
  "Visual indicator for diagram complexity"
  [{:keys [score max-score elements relationships]}]
  (let [complexity-level (cond
                          (<= score (* 0.3 max-score)) :low
                          (<= score (* 0.6 max-score)) :medium
                          (<= score (* 0.8 max-score)) :high
                          :else :very-high)
        level-config (case complexity-level
                      :low {:label "Low" :color "text-green-600 bg-green-50" :icon "🟢"}
                      :medium {:label "Medium" :color "text-blue-600 bg-blue-50" :icon "🟡"}
                      :high {:label "High" :color "text-orange-600 bg-orange-50" :icon "🟠"}
                      :very-high {:label "Very High" :color "text-red-600 bg-red-50" :icon "🔴"})]
    
    [:div {:class "flex items-center gap-3"}
     [:div {:class (cn "px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium"
                      (:color level-config))}
      [:span (:icon level-config)]
      [:span (:label level-config)]]
     [:div {:class "text-sm text-muted-foreground"}
      (str elements " elements, " relationships " relationships")]]))

(defn stats-overview
  "Main overview section with key metrics"
  [{:keys [similarity-percentage element-metrics relationship-metrics]}]
  [:div {:class "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"}
   
   ;; Similarity gauge card
   [:div {:class "md:col-span-2 lg:col-span-1"}
    [card {:class-name "h-full"}
     [card-content {:class-name "flex flex-col items-center justify-center p-6"}
      [similarity-gauge {:percentage similarity-percentage}]
      [:div {:class "mt-2 text-center text-sm text-muted-foreground"}
       "Overall Similarity"]]]]
   
   ;; Element changes
   [metric-card {:title "Elements Changed"
                :value (str (:modified-elements element-metrics 0))
                :subtitle (str "out of " (max (:total-source-elements element-metrics 0)
                                             (:total-target-elements element-metrics 0)))
                :icon "📦"
                :description "Modified elements between versions"}]
   
   ;; Added elements
   [metric-card {:title "Added Elements" 
                :value (str (:added-elements element-metrics 0))
                :icon "➕"
                :color-class "border-green-200 bg-green-50/50"
                :description "New elements in the target diagram"}]
   
   ;; Removed elements
   [metric-card {:title "Removed Elements"
                :value (str (:removed-elements element-metrics 0)) 
                :icon "➖"
                :color-class "border-red-200 bg-red-50/50"
                :description "Elements present in source but not target"}]])

(defn detailed-breakdown
  "Detailed breakdown of changes by category"
  [{:keys [element-analysis relationship-analysis]}]
  [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
   
   ;; Element changes breakdown
   [card {}
    [card-header {}
     [card-title {} "Element Changes"]]
    [card-content {}
     (let [total-changes (count (:all-changes element-analysis))
           change-data [{:label "Added" 
                        :count (count (:added element-analysis))
                        :color "bg-green-500"
                        :percentage (* 100 (/ (count (:added element-analysis)) (max 1 total-changes)))}
                       {:label "Removed"
                        :count (count (:removed element-analysis))
                        :color "bg-red-500" 
                        :percentage (* 100 (/ (count (:removed element-analysis)) (max 1 total-changes)))}
                       {:label "Modified"
                        :count (count (:matches element-analysis))
                        :color "bg-blue-500"
                        :percentage (* 100 (/ (count (:matches element-analysis)) (max 1 total-changes)))}]]
       
       (if (pos? total-changes)
         [change-breakdown-chart {:data change-data :total total-changes}]
         [:div {:class "text-center py-4 text-muted-foreground"}
          [:div {:class "text-2xl mb-1"} "✅"]
          [:div "No element changes detected"]]))]]
   
   ;; Relationship changes
   [card {}
    [card-header {}
     [card-title {} "Relationship Changes"]]
    [card-content {}
     (let [rel-stats relationship-analysis]
       [:div {:class "space-y-4"}
        [metric-card {:title "Unchanged"
                     :value (str (:unchanged rel-stats 0))
                     :icon "↔️"
                     :color-class "border-green-200 bg-green-50/50"}]
        [metric-card {:title "Added"
                     :value (str (:added rel-stats 0))
                     :icon "➕"
                     :color-class "border-blue-200 bg-blue-50/50"}]
        [metric-card {:title "Removed"
                     :value (str (:removed rel-stats 0))
                     :icon "➖" 
                     :color-class "border-red-200 bg-red-50/50"}]])]]])

(defn complexity-comparison
  "Compare complexity between diagrams"
  [{:keys [source-complexity target-complexity]}]
  [card {}
   [card-header {}
    [card-title {} "Complexity Analysis"]]
   [card-content {}
    [:div {:class "space-y-4"}
     [:div
      [:h4 {:class "text-sm font-medium mb-2"} "Source Diagram"]
      [complexity-indicator source-complexity]]
     [:div
      [:h4 {:class "text-sm font-medium mb-2"} "Target Diagram"] 
      [complexity-indicator target-complexity]]
     
     (let [score-diff (- (:score target-complexity 0) (:score source-complexity 0))]
       [:div {:class "pt-2 border-t"}
        [:div {:class "flex items-center justify-between text-sm"}
         [:span "Complexity Change:"]
         [:span {:class (cond
                         (> score-diff 5) "text-red-600"
                         (< score-diff -5) "text-green-600"
                         :else "text-muted-foreground")}
          (cond
            (> score-diff 5) (str "+" score-diff " (More Complex)")
            (< score-diff -5) (str score-diff " (Simplified)")
            :else "Minimal Change")]]])]]])

(defn export-controls
  "Controls for exporting statistics"
  [{:keys [on-export-json on-export-csv on-export-pdf]}]
  [:div {:class "flex items-center gap-2"}
   [outline-button {:size "sm" :on-click on-export-json}
    "📄 Export JSON"]
   [outline-button {:size "sm" :on-click on-export-csv}
    "📊 Export CSV"]
   [outline-button {:size "sm" :on-click on-export-pdf}
    "📑 Export Report"]])

(defn quick-insights
  "Quick insights and recommendations panel"
  [{:keys [similarity-percentage element-metrics insights]}]
  [card {:class-name "bg-gradient-to-br from-primary/5 to-secondary/5"}
   [card-header {}
    [card-title {:class-name "flex items-center gap-2"}
     [:span "💡"]
     [:span "Key Insights"]]]
   [card-content {}
    [:div {:class "space-y-3"}
     
     ;; Auto-generated insights based on metrics
     (when (< similarity-percentage 50)
       [:div {:class "p-3 bg-yellow-50 border border-yellow-200 rounded-lg"}
        [:div {:class "font-medium text-yellow-800"} "⚠️ Significant Changes Detected"]
        [:div {:class "text-sm text-yellow-700"} "The diagrams show substantial differences. Consider reviewing major structural changes."]])
     
     (when (> (:added-elements element-metrics 0) (* 0.2 (:total-source-elements element-metrics 1)))
       [:div {:class "p-3 bg-blue-50 border border-blue-200 rounded-lg"}
        [:div {:class "font-medium text-blue-800"} "📈 Growth Pattern"]
        [:div {:class "text-sm text-blue-700"} "Many new elements added. This suggests system expansion or feature additions."]])
     
     (when (> (:removed-elements element-metrics 0) (* 0.1 (:total-source-elements element-metrics 1)))
       [:div {:class "p-3 bg-red-50 border border-red-200 rounded-lg"}
        [:div {:class "font-medium text-red-800"} "🔄 Refactoring Detected"]
        [:div {:class "text-sm text-red-700"} "Elements have been removed. This might indicate refactoring or simplification."]])
     
     ;; Custom insights if provided
     (for [insight insights]
       ^{:key (:id insight)}
       [:div {:class (str "p-3 rounded-lg " (:class insight))}
        [:div {:class "font-medium"} (:title insight)]
        [:div {:class "text-sm"} (:description insight)]])]]])

(defn stats-panel
  "Main statistics dashboard panel"
  []
  (let [comparison-results @(rf/subscribe [:stats-panel/comparison-results])
        loading? @(rf/subscribe [:stats-panel/loading?])
        error @(rf/subscribe [:stats-panel/error])]
    
    (cond
      loading?
      [:div {:class "h-64 flex items-center justify-center"}
       [:div {:class "text-center space-y-2"}
        [:div {:class "animate-pulse text-2xl"} "📊"]
        [:div {:class "text-sm text-muted-foreground"} "Calculating statistics..."]]]
      
      error
      [:div {:class "h-64 flex items-center justify-center"}
       [:div {:class "text-center space-y-2"}
        [:div {:class "text-2xl text-red-500"} "⚠️"]
        [:div {:class "font-medium text-red-600"} "Analysis Failed"]
        [:div {:class "text-sm text-muted-foreground"} (str error)]
        [button {:variant "outline" :on-click #(rf/dispatch [:stats-panel/retry])}
         "Retry"]]]
      
      (not comparison-results)
      [:div {:class "h-64 flex items-center justify-center"}
       [:div {:class "text-center space-y-2"}
        [:div {:class "text-4xl text-muted-foreground"} "📈"]
        [:div {:class "font-medium"} "No Comparison Data"]
        [:div {:class "text-sm text-muted-foreground"} "Run a diagram comparison to see statistics"]]]
      
      :else
      [:div {:class "space-y-6"}
       ;; Header with export controls
       [:div {:class "flex items-center justify-between"}
        [:h2 {:class "text-2xl font-bold"} "Comparison Statistics"]
        [export-controls {:on-export-json #(rf/dispatch [:stats-panel/export :json])
                         :on-export-csv #(rf/dispatch [:stats-panel/export :csv])
                         :on-export-pdf #(rf/dispatch [:stats-panel/export :pdf])}]]
       
       ;; Overview metrics
       [stats-overview {:similarity-percentage (:similarity-percentage comparison-results)
                       :element-metrics (:metrics comparison-results)
                       :relationship-metrics (:relationship-analysis comparison-results)}]
       
       ;; Detailed breakdown
       [detailed-breakdown {:element-analysis (:element-analysis comparison-results)
                           :relationship-analysis (:relationship-analysis comparison-results)}]
       
       ;; Bottom row with insights and complexity
       [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-6"}
        [quick-insights {:similarity-percentage (:similarity-percentage comparison-results)
                        :element-metrics (:metrics comparison-results)
                        :insights @(rf/subscribe [:stats-panel/insights])}]
        
        [complexity-comparison {:source-complexity @(rf/subscribe [:stats-panel/source-complexity])
                               :target-complexity @(rf/subscribe [:stats-panel/target-complexity])}]]])))

(defn stats-panel-mini
  "Compact version for sidebars"
  []
  (let [comparison-results @(rf/subscribe [:stats-panel/comparison-results])]
    
    (if comparison-results
      [card {:class-name "bg-gradient-to-br from-accent/5 to-secondary/5"}
       [card-header {:class-name "pb-2"}
        [card-title {:class-name "text-base"} "Quick Stats"]]
       [card-content {:class-name "space-y-3"}
        ;; Similarity gauge (smaller)
        [:div {:class "flex items-center justify-center"}
         [similarity-gauge {:percentage (:similarity-percentage comparison-results)
                           :size 60
                           :stroke-width 6}]]
        
        ;; Key metrics in compact format
        [:div {:class "grid grid-cols-3 gap-2 text-center"}
         [:div {:class "space-y-1"}
          [:div {:class "text-lg font-bold text-green-600"} 
           (str (:added-elements (:metrics comparison-results) 0))]
          [:div {:class "text-xs text-muted-foreground"} "Added"]]
         [:div {:class "space-y-1"}
          [:div {:class "text-lg font-bold text-red-600"}
           (str (:removed-elements (:metrics comparison-results) 0))]
          [:div {:class "text-xs text-muted-foreground"} "Removed"]]
         [:div {:class "space-y-1"}
          [:div {:class "text-lg font-bold text-blue-600"}
           (str (:modified-elements (:metrics comparison-results) 0))]
          [:div {:class "text-xs text-muted-foreground"} "Modified"]]]]]
      
      [:div {:class "h-32 flex items-center justify-center text-muted-foreground text-sm"}
       "No comparison data"])))

(defn stats-panel-container
  "Container component that manages state"
  []
  [stats-panel])