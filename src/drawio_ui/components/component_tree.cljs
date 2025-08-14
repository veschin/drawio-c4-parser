(ns drawio-ui.components.component-tree
  "Component tree navigator for C4 elements with change visualization"
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [drawio-ui.components.ui.card :refer [card card-header card-title card-content]]
            [drawio-ui.components.ui.button :refer [button ghost-button]]
            [drawio-ui.components.ui.badge :refer [badge]]
            [drawio-ui.components.ui.input :refer [input]]
            [drawio-ui.lib.utils :refer [cn]]
            [drawio-ui.diff :as diff]))

(defn c4-type-icon
  "Get icon for C4 element type"
  [c4-type]
  (case c4-type
    "Person" "👤"
    "ExternalPerson" "👥"
    "System" "⬛"
    "ExternalSystem" "⬜"
    "Container" "📦" 
    "Component" "🔧"
    "SystemScopeBoundary" "🔲"
    "ContainerScopeBoundary" "📋"
    "Relationship" "↔️"
    "🔹"))

(defn c4-type-color
  "Get color class for C4 element type"
  [c4-type]
  (case c4-type
    "Person" "text-blue-600 bg-blue-50"
    "ExternalPerson" "text-blue-400 bg-blue-50"
    "System" "text-purple-600 bg-purple-50"
    "ExternalSystem" "text-purple-400 bg-purple-50"
    "Container" "text-green-600 bg-green-50"
    "Component" "text-orange-600 bg-orange-50"
    "SystemScopeBoundary" "text-gray-600 bg-gray-50"
    "ContainerScopeBoundary" "text-gray-600 bg-gray-50"
    "text-gray-600 bg-gray-50"))

(defn change-indicator
  "Visual indicator for element changes"
  [{:keys [change-type similarity]}]
  (when change-type
    [:div {:class "flex items-center gap-1"}
     [:span {:class (cn "inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full"
                        (diff/get-change-color change-type))}
      (diff/get-change-icon change-type)]
     
     (when (and similarity (not= change-type :added) (not= change-type :removed))
       [:span {:class "text-xs text-muted-foreground"}
        (str (Math/round (* similarity 100)) "%")])]))

(defn tree-node
  "Single tree node for a C4 element"
  [{:keys [element change-info expanded? has-children? level on-toggle on-select on-highlight selected?]}]
  (let [indent (* level 16)]
    
    [:div {:class (cn "flex items-center gap-2 py-1 px-2 rounded hover:bg-accent/50 cursor-pointer transition-colors"
                     (when selected? "bg-primary/10 border border-primary/20"))}
     
     ;; Indentation
     [:div {:style {:width (str indent "px")}}]
     
     ;; Expand/collapse toggle
     (if has-children?
       [ghost-button {:size "sm" 
                     :class-name "w-6 h-6 p-0"
                     :on-click on-toggle}
        [:span {:class (str "transition-transform " (if expanded? "rotate-90" ""))}
         "▶"]]
       [:div {:class "w-6"}])
     
     ;; Element type icon
     [:div {:class (cn "w-8 h-8 rounded flex items-center justify-center text-lg" 
                      (c4-type-color (:c4Type element)))}
      (c4-type-icon (:c4Type element))]
     
     ;; Element details
     [:div {:class "flex-1 min-w-0 flex items-center gap-2"
            :on-click on-select}
      [:div {:class "flex-1 min-w-0"}
       [:div {:class "font-medium text-sm truncate"}
        (or (:c4Name element) (:id element) "Unnamed")]
       
       (when (:c4Technology element)
         [:div {:class "text-xs text-muted-foreground truncate"}
          (:c4Technology element)])]
      
      ;; Change indicator
      (when change-info
        [change-indicator change-info])
      
      ;; Element type badge
      [badge {:variant "outline" :class-name "text-xs"}
       (:c4Type element)]]
     
     ;; Actions
     [:div {:class "flex items-center gap-1"}
      [ghost-button {:size "sm"
                    :class-name "w-6 h-6 p-0 opacity-0 group-hover:opacity-100"
                    :on-click on-highlight}
       "🎯"]]]))

(defn build-tree-structure
  "Build hierarchical tree structure from flat C4 elements based on containment"
  [elements changes-by-id]
  (let [;; Group elements by their parent relationships
        elements-by-id (group-by :id elements)
        
        ;; Find root elements (no parents or parents not in this diagram)
        root-elements (filter (fn [elem]
                               (or (not (:parent elem))
                                   (not (get elements-by-id (:parent elem)))))
                             elements)
        
        ;; Build children map
        children-map (group-by :parent elements)]
    
    (letfn [(build-node [element]
              (let [children (get children-map (:id element) [])
                    change-info (get changes-by-id (:id element))]
                {:element element
                 :change-info change-info
                 :children (map build-node (sort-by :c4Name children))
                 :has-children? (seq children)}))]
      
      (map build-node (sort-by :c4Name root-elements)))))

(defn tree-view
  "Recursive tree view component"
  [{:keys [nodes expanded-nodes selected-element level on-toggle on-select on-highlight]}]
  [:div {:class "space-y-1"}
   (for [node nodes]
     (let [element-id (:id (:element node))
           expanded? (contains? expanded-nodes element-id)
           selected? (= element-id (:id selected-element))]
       
       ^{:key element-id}
       [:div
        ;; Node itself
        [tree-node {:element (:element node)
                   :change-info (:change-info node)
                   :expanded? expanded?
                   :has-children? (:has-children? node)
                   :level level
                   :selected? selected?
                   :on-toggle #(on-toggle element-id)
                   :on-select #(on-select (:element node))
                   :on-highlight #(on-highlight (:element node))}]
        
        ;; Children (if expanded)
        (when (and expanded? (:has-children? node))
          [tree-view {:nodes (:children node)
                     :expanded-nodes expanded-nodes
                     :selected-element selected-element
                     :level (inc level)
                     :on-toggle on-toggle
                     :on-select on-select
                     :on-highlight on-highlight}])]))])

(defn search-elements
  "Search/filter elements by name or type"
  [elements query]
  (if (str/blank? query)
    elements
    (let [query-lower (str/lower-case query)]
      (filter (fn [elem]
               (or (str/includes? (str/lower-case (or (:c4Name elem) "")) query-lower)
                   (str/includes? (str/lower-case (or (:c4Type elem) "")) query-lower)
                   (str/includes? (str/lower-case (or (:c4Technology elem) "")) query-lower)))
             elements))))

(defn tree-header
  "Header with search and controls"
  [{:keys [search-query on-search-change total-elements filtered-elements 
           expanded-all? on-expand-all on-collapse-all on-export]}]
  [:div {:class "space-y-3 pb-3 border-b"}
   ;; Search input
   [input {:placeholder "Search elements..."
           :value search-query
           :on-change #(on-search-change (.. % -target -value))
           :class-name "w-full"}]
   
   ;; Controls row
   [:div {:class "flex items-center justify-between"}
    [:div {:class "text-sm text-muted-foreground"}
     (str filtered-elements " / " total-elements " elements")]
    
    [:div {:class "flex items-center gap-2"}
     [ghost-button {:size "sm" :on-click (if expanded-all? on-collapse-all on-expand-all)}
      (if expanded-all? "Collapse All" "Expand All")]
     [ghost-button {:size "sm" :on-click on-export}
      "Export"]]]])

(defn element-details-panel
  "Details panel for selected element"
  [{:keys [element change-info on-close]}]
  (when element
    [:div {:class "absolute inset-x-0 bottom-0 bg-card border-t rounded-t-lg shadow-lg z-10"}
     [:div {:class "p-4 space-y-3"}
      ;; Header
      [:div {:class "flex items-center justify-between"}
       [:div {:class "flex items-center gap-2"}
        [:div {:class (cn "w-6 h-6 rounded flex items-center justify-center text-sm"
                         (c4-type-color (:c4Type element)))}
         (c4-type-icon (:c4Type element))]
        [:span {:class "font-semibold"} (or (:c4Name element) (:id element))]
        (when change-info
          [change-indicator change-info])]
       
       [ghost-button {:size "sm" :on-click on-close} "×"]]
      
      ;; Details
      [:div {:class "grid grid-cols-1 md:grid-cols-2 gap-3 text-sm"}
       [:div {:class "space-y-2"}
        [:div
         [:span {:class "font-medium text-muted-foreground"} "Type: "]
         [:span (:c4Type element)]]
        
        (when (:c4Technology element)
          [:div
           [:span {:class "font-medium text-muted-foreground"} "Technology: "]
           [:span (:c4Technology element)]])
        
        (when (:id element)
          [:div
           [:span {:class "font-medium text-muted-foreground"} "ID: "]
           [:span {:class "font-mono text-xs"} (:id element)]])]
       
       (when (:c4Description element)
         [:div
          [:span {:class "font-medium text-muted-foreground"} "Description: "]
          [:span (:c4Description element)]])]]]))

(defn change-summary
  "Summary of changes in the tree"
  [{:keys [total-changes added removed modified-minor modified-major]}]
  (when (pos? total-changes)
    [:div {:class "p-3 bg-muted/30 rounded-lg space-y-2"}
     [:div {:class "text-sm font-medium"} "Changes Summary"]
     [:div {:class "flex flex-wrap gap-2 text-xs"}
      (when (pos? added)
        [badge {:variant "default" :class-name "bg-green-100 text-green-800"}
         (str "+" added " added")])
      (when (pos? removed)
        [badge {:variant "default" :class-name "bg-red-100 text-red-800"}
         (str "−" removed " removed")])
      (when (pos? modified-minor)
        [badge {:variant "default" :class-name "bg-yellow-100 text-yellow-800"}
         (str "~" modified-minor " minor")])
      (when (pos? modified-major)
        [badge {:variant "default" :class-name "bg-orange-100 text-orange-800"}
         (str "!" modified-major " major")])]]))

(defn component-tree
  "Main component tree navigator"
  []
  (let [elements @(rf/subscribe [:component-tree/elements])
        changes @(rf/subscribe [:component-tree/changes])
        search-query @(rf/subscribe [:component-tree/search-query])
        expanded-nodes @(rf/subscribe [:component-tree/expanded-nodes])
        selected-element @(rf/subscribe [:component-tree/selected-element])
        
        ;; Process data
        changes-by-id (when changes (group-by (comp :id :element) (:all-changes changes)))
        filtered-elements (search-elements elements search-query)
        tree-nodes (build-tree-structure filtered-elements changes-by-id)
        
        ;; Calculate change summary
        change-counts (when changes
                       {:total-changes (count (:all-changes changes))
                        :added (count (:added changes))
                        :removed (count (:removed changes))
                        :modified-minor (count (filter #(= (:change-type %) :modified-minor) (:matches changes)))
                        :modified-major (count (filter #(= (:change-type %) :modified-major) (:matches changes)))})]
    
    [card {:class-name "h-full flex flex-col"}
     [card-header {:class-name "pb-3"}
      [card-title {} "Component Tree"]
      (when change-counts
        [change-summary change-counts])]
     
     [card-content {:class-name "flex-1 overflow-hidden flex flex-col space-y-0 p-0"}
      ;; Header with search and controls
      [:div {:class "p-4"}
       [tree-header {:search-query search-query
                    :on-search-change #(rf/dispatch [:component-tree/set-search %])
                    :total-elements (count elements)
                    :filtered-elements (count filtered-elements)
                    :expanded-all? (>= (count expanded-nodes) (count filtered-elements))
                    :on-expand-all #(rf/dispatch [:component-tree/expand-all filtered-elements])
                    :on-collapse-all #(rf/dispatch [:component-tree/collapse-all])
                    :on-export #(rf/dispatch [:component-tree/export-tree])}]]
      
      ;; Tree view (scrollable)
      [:div {:class "flex-1 overflow-y-auto px-4 pb-4"}
       (if (seq tree-nodes)
         [tree-view {:nodes tree-nodes
                    :expanded-nodes expanded-nodes
                    :selected-element selected-element
                    :level 0
                    :on-toggle #(rf/dispatch [:component-tree/toggle-node %])
                    :on-select #(rf/dispatch [:component-tree/select-element %])
                    :on-highlight #(rf/dispatch [:component-tree/highlight-element %])}]
         
         [:div {:class "text-center py-8 text-muted-foreground"}
          [:div {:class "text-4xl mb-2"} "🔍"]
          [:p "No elements found"]
          (when-not (str/blank? search-query)
            [:p {:class "text-sm"} "Try adjusting your search query"])])]
      
      ;; Element details panel (if element selected)
      (when selected-element
        [element-details-panel {:element selected-element
                               :change-info (get changes-by-id (:id selected-element))
                               :on-close #(rf/dispatch [:component-tree/deselect-element])}])]]))

;; Convenience components for different tree modes

(defn component-tree-comparison
  "Component tree for comparison mode (shows both diagrams)"
  []
  (let [diagram-a @(rf/subscribe [:component-tree/diagram :a])
        diagram-b @(rf/subscribe [:component-tree/diagram :b])
        active-side @(rf/subscribe [:component-tree/active-side])]
    
    [:div {:class "h-full flex flex-col"}
     ;; Side selector
     [:div {:class "flex p-2 bg-muted/30 rounded-t-lg border-b"}
      [button {:variant (if (= active-side :a) "default" "ghost")
               :size "sm"
               :class-name "flex-1"
               :on-click #(rf/dispatch [:component-tree/set-active-side :a])}
       "Diagram A"]
      [button {:variant (if (= active-side :b) "default" "ghost")
               :size "sm" 
               :class-name "flex-1"
               :on-click #(rf/dispatch [:component-tree/set-active-side :b])}
       "Diagram B"]]
     
     ;; Tree for active side
     [:div {:class "flex-1"}
      [component-tree]]]))

(defn component-tree-loading
  "Loading state for component tree"
  []
  [:div {:class "h-64 flex items-center justify-center"}
   [:div {:class "text-center space-y-2"}
    [:div {:class "animate-pulse text-2xl"} "🌳"]
    [:div {:class "text-sm text-muted-foreground"} "Loading component tree..."]]])

(defn component-tree-empty
  "Empty state when no elements are available"
  []
  [:div {:class "h-64 flex items-center justify-center"}
   [:div {:class "text-center space-y-2"}
    [:div {:class "text-4xl text-muted-foreground"} "📊"]
    [:div {:class "font-medium"} "No Elements Found"]
    [:div {:class "text-sm text-muted-foreground"} "Upload and parse a diagram to see the component tree"]]])

(defn component-tree-container
  "Container that handles different states"
  []
  (let [loading? @(rf/subscribe [:component-tree/loading?])
        elements @(rf/subscribe [:component-tree/elements])]
    
    (cond
      loading? [component-tree-loading]
      (empty? elements) [component-tree-empty]
      :else [component-tree])))