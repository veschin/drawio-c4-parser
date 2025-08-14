(ns drawio-ui.state.comparison
  "Re-frame state management for diagram comparison features"
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [drawio-ui.diff :as diff]
            [drawio-ui.renderer :as renderer]))

;; Default state structure
(def default-comparison-state
  {:diagram-selector {:available-diagrams []
                     :selected-diagrams {:a nil :b nil}
                     :comparing? false
                     :upload-status {:a nil :b nil}}
   
   :diff-viewer {:diagrams {:a nil :b nil}
                :zoom {:a 1.0 :b 1.0}
                :pan {:a {:x 0 :y 0} :b {:x 0 :y 0}}
                :changes {:a [] :b []}
                :connections []
                :sync-enabled? true
                :selected-element nil
                :loading? false
                :error nil
                :fullscreen? false}
   
   :component-tree {:elements []
                   :changes nil
                   :search-query ""
                   :expanded-nodes #{}
                   :selected-element nil
                   :active-side :a
                   :loading? false}
   
   :stats-panel {:comparison-results nil
                :loading? false
                :error nil
                :insights []
                :source-complexity {:score 0 :elements 0 :relationships 0}
                :target-complexity {:score 0 :elements 0 :relationships 0}}
   
   :comparison {:current-comparison nil
              :history []
              :status :idle}}) ; :idle, :selecting, :comparing, :completed, :error

;; Events

;; Diagram Selector Events
(rf/reg-event-fx
  ::load-available-diagrams
  (fn [{:keys [db]} _]
    {:http-xhrio {:method :get
                  :uri "/api/v1/diagrams"
                  :response-format :json
                  :on-success [::load-diagrams-success]
                  :on-failure [::load-diagrams-failure]}
     :db (assoc-in db [:comparison :diagram-selector :loading?] true)}))

(rf/reg-event-db
  ::load-diagrams-success
  (fn [db [_ diagrams]]
    (-> db
        (assoc-in [:comparison :diagram-selector :available-diagrams] diagrams)
        (assoc-in [:comparison :diagram-selector :loading?] false))))

(rf/reg-event-db
  ::load-diagrams-failure
  (fn [db [_ error]]
    (-> db
        (assoc-in [:comparison :diagram-selector :loading?] false)
        (assoc-in [:comparison :diagram-selector :error] error))))

(rf/reg-event-db
  ::select-diagram
  (fn [db [_ side diagram]]
    (assoc-in db [:comparison :diagram-selector :selected-diagrams side] diagram)))

(rf/reg-event-fx
  ::upload-file
  (fn [{:keys [db]} [_ side file]]
    (let [form-data (js/FormData.)]
      (.append form-data "file" file)
      
      {:http-xhrio {:method :post
                    :uri "/api/v1/parse/upload"
                    :body form-data
                    :response-format :json
                    :on-success [::upload-success side]
                    :on-failure [::upload-failure side]}
       :db (-> db
               (assoc-in [:comparison :diagram-selector :upload-status side] :uploading))})))

(rf/reg-event-fx
  ::upload-success
  (fn [{:keys [db]} [_ side diagram-data]]
    {:db (-> db
             (assoc-in [:comparison :diagram-selector :upload-status side] :success)
             (assoc-in [:comparison :diagram-selector :selected-diagrams side] diagram-data))
     :dispatch [::load-available-diagrams]})) ; Refresh diagram list

(rf/reg-event-db
  ::upload-failure
  (fn [db [_ side error]]
    (-> db
        (assoc-in [:comparison :diagram-selector :upload-status side] :error)
        (assoc-in [:comparison :diagram-selector :error side] error))))

(rf/reg-event-fx
  ::start-comparison
  (fn [{:keys [db]} _]
    (let [diagram-a (get-in db [:comparison :diagram-selector :selected-diagrams :a])
          diagram-b (get-in db [:comparison :diagram-selector :selected-diagrams :b])]
      
      (when (and diagram-a diagram-b)
        {:db (-> db
                 (assoc-in [:comparison :diagram-selector :comparing?] true)
                 (assoc-in [:comparison :diff-viewer :loading?] true)
                 (assoc-in [:comparison :component-tree :loading?] true)
                 (assoc-in [:comparison :stats-panel :loading?] true)
                 (assoc-in [:comparison :status] :comparing))
         :dispatch [::perform-comparison diagram-a diagram-b]}))))

(rf/reg-event-fx
  ::perform-comparison
  (fn [{:keys [db]} [_ diagram-a diagram-b]]
    ;; Perform diff analysis
    (let [comparison-result (diff/compare-diagrams diagram-a diagram-b)]
      
      {:db (-> db
               (assoc-in [:comparison :current-comparison] comparison-result)
               (assoc-in [:comparison :stats-panel :comparison-results] comparison-result)
               (assoc-in [:comparison :diff-viewer :diagrams :a] diagram-a)
               (assoc-in [:comparison :diff-viewer :diagrams :b] diagram-b)
               (assoc-in [:comparison :component-tree :elements] (:elements diagram-b))
               (assoc-in [:comparison :component-tree :changes] (:element-analysis comparison-result))
               (assoc-in [:comparison :status] :completed))
       
       :dispatch-n [[::finalize-comparison]
                   [::generate-insights comparison-result]
                   [::calculate-complexity diagram-a diagram-b]]})))

(rf/reg-event-db
  ::finalize-comparison
  (fn [db _]
    (-> db
        (assoc-in [:comparison :diagram-selector :comparing?] false)
        (assoc-in [:comparison :diff-viewer :loading?] false)
        (assoc-in [:comparison :component-tree :loading?] false)
        (assoc-in [:comparison :stats-panel :loading?] false))))

;; Diff Viewer Events
(rf/reg-event-db
  ::zoom-in
  (fn [db [_ side]]
    (let [current-zoom (get-in db [:comparison :diff-viewer :zoom side])]
      (assoc-in db [:comparison :diff-viewer :zoom side] 
                (min 3.0 (* current-zoom 1.2))))))

(rf/reg-event-db
  ::zoom-out
  (fn [db [_ side]]
    (let [current-zoom (get-in db [:comparison :diff-viewer :zoom side])]
      (assoc-in db [:comparison :diff-viewer :zoom side] 
                (max 0.25 (* current-zoom 0.8))))))

(rf/reg-event-db
  ::zoom-reset
  (fn [db [_ side]]
    (assoc-in db [:comparison :diff-viewer :zoom side] 1.0)))

(rf/reg-event-db
  ::zoom-fit
  (fn [db [_ side]]
    ;; TODO: Calculate optimal zoom to fit diagram in viewport
    (assoc-in db [:comparison :diff-viewer :zoom side] 0.8)))

(rf/reg-event-db
  ::pan
  (fn [db [_ side dx dy]]
    (let [current-pan (get-in db [:comparison :diff-viewer :pan side])]
      (assoc-in db [:comparison :diff-viewer :pan side]
                {:x (+ (:x current-pan) dx)
                 :y (+ (:y current-pan) dy)}))))

(rf/reg-event-db
  ::toggle-sync
  (fn [db _]
    (update-in db [:comparison :diff-viewer :sync-enabled?] not)))

(rf/reg-event-db
  ::select-element
  (fn [db [_ element]]
    (assoc-in db [:comparison :diff-viewer :selected-element] element)))

(rf/reg-event-fx
  ::export-comparison
  (fn [{:keys [db]} _]
    (let [diagrams (get-in db [:comparison :diff-viewer :diagrams])]
      ;; TODO: Implement comparison export
      {:dispatch [::show-notification "Export feature coming soon!"]})))

(rf/reg-event-db
  ::toggle-fullscreen
  (fn [db _]
    (update-in db [:comparison :diff-viewer :fullscreen?] not)))

;; Component Tree Events
(rf/reg-event-db
  ::set-search
  (fn [db [_ query]]
    (assoc-in db [:comparison :component-tree :search-query] query)))

(rf/reg-event-db
  ::toggle-node
  (fn [db [_ node-id]]
    (let [expanded-nodes (get-in db [:comparison :component-tree :expanded-nodes])]
      (assoc-in db [:comparison :component-tree :expanded-nodes]
                (if (contains? expanded-nodes node-id)
                  (disj expanded-nodes node-id)
                  (conj expanded-nodes node-id))))))

(rf/reg-event-db
  ::expand-all
  (fn [db [_ elements]]
    (let [all-ids (set (map :id elements))]
      (assoc-in db [:comparison :component-tree :expanded-nodes] all-ids))))

(rf/reg-event-db
  ::collapse-all
  (fn [db _]
    (assoc-in db [:comparison :component-tree :expanded-nodes] #{})))

(rf/reg-event-fx
  ::select-element-tree
  (fn [{:keys [db]} [_ element]]
    {:db (assoc-in db [:comparison :component-tree :selected-element] element)
     :dispatch [::select-element element]})) ; Also select in diff viewer

(rf/reg-event-fx
  ::highlight-element
  (fn [{:keys [db]} [_ element]]
    ;; TODO: Implement element highlighting in diagram
    {:dispatch [::show-notification (str "Highlighting: " (:c4Name element))]}))

(rf/reg-event-db
  ::set-active-side
  (fn [db [_ side]]
    (assoc-in db [:comparison :component-tree :active-side] side)))

;; Stats Panel Events
(rf/reg-event-fx
  ::generate-insights
  (fn [{:keys [db]} [_ comparison-result]]
    (let [similarity (:similarity-percentage comparison-result)
          metrics (:metrics comparison-result)
          insights (cond-> []
                    (< similarity 50)
                    (conj {:id :major-changes
                          :title "⚠️ Major Changes Detected"
                          :description "Consider reviewing structural modifications"
                          :class "border-yellow-200 bg-yellow-50"})
                    
                    (> (:added-elements metrics) 5)
                    (conj {:id :growth
                          :title "📈 System Growth"
                          :description "Significant additions suggest feature expansion"
                          :class "border-blue-200 bg-blue-50"})
                    
                    (> (:removed-elements metrics) 3)
                    (conj {:id :refactoring
                          :title "🔄 Potential Refactoring" 
                          :description "Multiple removals indicate simplification"
                          :class "border-green-200 bg-green-50"}))]
      
      {:db (assoc-in db [:comparison :stats-panel :insights] insights)})))

(rf/reg-event-db
  ::calculate-complexity
  (fn [db [_ diagram-a diagram-b]]
    (let [calc-complexity (fn [diagram]
                           (let [elements (:elements diagram)
                                 relationships (:relationships diagram)
                                 element-count (count elements)
                                 rel-count (count relationships)
                                 ;; Simple complexity scoring
                                 score (+ (* element-count 2) rel-count)]
                             {:score score
                              :elements element-count
                              :relationships rel-count}))
          
          source-complexity (calc-complexity diagram-a)
          target-complexity (calc-complexity diagram-b)]
      
      (-> db
          (assoc-in [:comparison :stats-panel :source-complexity] source-complexity)
          (assoc-in [:comparison :stats-panel :target-complexity] target-complexity)))))

(rf/reg-event-fx
  ::export-stats
  (fn [{:keys [db]} [_ format]]
    (let [results (get-in db [:comparison :stats-panel :comparison-results])]
      ;; TODO: Implement stats export in different formats
      {:dispatch [::show-notification (str "Exporting stats as " (name format))]})))

;; Utility Events
(rf/reg-event-db
  ::show-notification
  (fn [db [_ message]]
    (assoc-in db [:ui :notification] message)))

(rf/reg-event-db
  ::clear-notification
  (fn [db _]
    (assoc-in db [:ui :notification] nil)))

(rf/reg-event-db
  ::reset-comparison-state
  (fn [db _]
    (assoc db :comparison default-comparison-state)))

;; Subscriptions

;; Diagram Selector Subscriptions
(rf/reg-sub
  ::available-diagrams
  (fn [db _]
    (get-in db [:comparison :diagram-selector :available-diagrams])))

(rf/reg-sub
  ::selected-diagram
  (fn [db [_ side]]
    (get-in db [:comparison :diagram-selector :selected-diagrams side])))

(rf/reg-sub
  ::comparing?
  (fn [db _]
    (get-in db [:comparison :diagram-selector :comparing?])))

(rf/reg-sub
  ::upload-status
  (fn [db [_ side]]
    (get-in db [:comparison :diagram-selector :upload-status side])))

;; Diff Viewer Subscriptions  
(rf/reg-sub
  ::diagram
  (fn [db [_ side]]
    (get-in db [:comparison :diff-viewer :diagrams side])))

(rf/reg-sub
  ::zoom
  (fn [db [_ side]]
    (get-in db [:comparison :diff-viewer :zoom side])))

(rf/reg-sub
  ::pan
  (fn [db [_ side]]
    (get-in db [:comparison :diff-viewer :pan side])))

(rf/reg-sub
  ::changes
  (fn [db [_ side]]
    (get-in db [:comparison :diff-viewer :changes side])))

(rf/reg-sub
  ::connections
  (fn [db _]
    (get-in db [:comparison :diff-viewer :connections])))

(rf/reg-sub
  ::sync-enabled?
  (fn [db _]
    (get-in db [:comparison :diff-viewer :sync-enabled?])))

(rf/reg-sub
  ::selected-element
  (fn [db _]
    (get-in db [:comparison :diff-viewer :selected-element])))

(rf/reg-sub
  ::diff-viewer-loading?
  (fn [db _]
    (get-in db [:comparison :diff-viewer :loading?])))

(rf/reg-sub
  ::diff-viewer-error
  (fn [db _]
    (get-in db [:comparison :diff-viewer :error])))

;; Component Tree Subscriptions
(rf/reg-sub
  ::tree-elements
  (fn [db _]
    (get-in db [:comparison :component-tree :elements])))

(rf/reg-sub
  ::tree-changes
  (fn [db _]
    (get-in db [:comparison :component-tree :changes])))

(rf/reg-sub
  ::search-query
  (fn [db _]
    (get-in db [:comparison :component-tree :search-query])))

(rf/reg-sub
  ::expanded-nodes
  (fn [db _]
    (get-in db [:comparison :component-tree :expanded-nodes])))

(rf/reg-sub
  ::tree-selected-element
  (fn [db _]
    (get-in db [:comparison :component-tree :selected-element])))

(rf/reg-sub
  ::active-side
  (fn [db _]
    (get-in db [:comparison :component-tree :active-side])))

(rf/reg-sub
  ::tree-loading?
  (fn [db _]
    (get-in db [:comparison :component-tree :loading?])))

;; Stats Panel Subscriptions
(rf/reg-sub
  ::comparison-results
  (fn [db _]
    (get-in db [:comparison :stats-panel :comparison-results])))

(rf/reg-sub
  ::stats-loading?
  (fn [db _]
    (get-in db [:comparison :stats-panel :loading?])))

(rf/reg-sub
  ::stats-error
  (fn [db _]
    (get-in db [:comparison :stats-panel :error])))

(rf/reg-sub
  ::insights
  (fn [db _]
    (get-in db [:comparison :stats-panel :insights])))

(rf/reg-sub
  ::source-complexity
  (fn [db _]
    (get-in db [:comparison :stats-panel :source-complexity])))

(rf/reg-sub
  ::target-complexity
  (fn [db _]
    (get-in db [:comparison :stats-panel :target-complexity])))

;; General Comparison Subscriptions
(rf/reg-sub
  ::comparison-status
  (fn [db _]
    (get-in db [:comparison :status])))

(rf/reg-sub
  ::current-comparison
  (fn [db _]
    (get-in db [:comparison :current-comparison])))

(rf/reg-sub
  ::notification
  (fn [db _]
    (get-in db [:ui :notification])))

;; Initialize comparison state
(rf/reg-event-db
  ::initialize
  (fn [db _]
    (assoc db :comparison default-comparison-state)))

;; Auto-initialize when namespace loads
(rf/dispatch [::initialize])