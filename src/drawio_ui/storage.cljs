(ns drawio-ui.storage
  (:require [cljs.reader :as reader]))

(def storage-keys
  {:diagrams "drawio-diagrams"
   :settings "drawio-app-settings"
   :comparison-cache "drawio-comparison-cache"})

(def default-settings
  {:storage {:max-versions-per-diagram 50
             :auto-cleanup-enabled true
             :max-total-storage-mb 50
             :thumbnail-size {:width 200 :height 150}}
   :ui {:default-comparison-view :side-by-side
        :show-statistics true
        :auto-save-editor true}})

(defn- get-storage-item [key]
  (when-let [data (.getItem js/localStorage key)]
    (try
      (reader/read-string data)
      (catch js/Error e
        (js/console.warn (str "Failed to parse localStorage item: " key) e)
        nil))))

(defn- set-storage-item [key data]
  (try
    (.setItem js/localStorage key (pr-str data))
    true
    (catch js/Error e
      (js/console.error (str "Failed to save to localStorage: " key) e)
      false)))


(defn get-diagrams []
  (or (get-storage-item (:diagrams storage-keys)) {}))

(defn get-settings []
  (merge default-settings 
         (get-storage-item (:settings storage-keys))))

(defn get-comparison-cache []
  (or (get-storage-item (:comparison-cache storage-keys)) {}))

(defn save-diagrams [diagrams]
  (set-storage-item (:diagrams storage-keys) diagrams))

(defn save-settings [settings]
  (set-storage-item (:settings storage-keys) settings))

(defn save-comparison-cache [cache]
  (set-storage-item (:comparison-cache storage-keys) cache))

(defn generate-diagram-id []
  (str "diagram-" (.getTime (js/Date.)) "-" (rand-int 10000)))

(defn generate-version-id []
  (str "v-" (.toISOString (js/Date.))))

(defn add-diagram [name xml-data parsed-json source-type & {:keys [filename description tags]}]
  (let [diagrams (get-diagrams)
        diagram-id (generate-diagram-id)
        version-id (generate-version-id)
        timestamp (.toISOString (js/Date.))
        version {:version-id version-id
                 :timestamp timestamp
                 :source-type source-type
                 :source-filename filename
                 :raw-xml xml-data
                 :parsed-json parsed-json
                 :thumbnail-data nil ; Will be populated by render service
                 :change-summary (if (= source-type :upload) "Initial upload" "New version")}
        diagram {:metadata {:name name
                           :created-at timestamp
                           :last-modified timestamp
                           :tags (or tags [])
                           :description (or description "")}
                :versions [version]
                :current-version version-id}
        updated-diagrams (assoc diagrams diagram-id diagram)]
    (when (save-diagrams updated-diagrams)
      diagram-id)))

(defn add-version [diagram-id xml-data parsed-json source-type & {:keys [filename change-summary]}]
  (let [diagrams (get-diagrams)]
    (when-let [diagram (get diagrams diagram-id)]
      (let [version-id (generate-version-id)
            timestamp (.toISOString (js/Date.))
            version {:version-id version-id
                     :timestamp timestamp
                     :source-type source-type
                     :source-filename filename
                     :raw-xml xml-data
                     :parsed-json parsed-json
                     :thumbnail-data nil
                     :change-summary (or change-summary "Updated version")}
            updated-versions (conj (:versions diagram) version)
            updated-diagram (-> diagram
                               (assoc :versions updated-versions)
                               (assoc :current-version version-id)
                               (assoc-in [:metadata :last-modified] timestamp))
            updated-diagrams (assoc diagrams diagram-id updated-diagram)]
        (when (save-diagrams updated-diagrams)
          version-id)))))

(defn get-diagram [diagram-id]
  (get (get-diagrams) diagram-id))

(defn get-version [diagram-id version-id]
  (when-let [diagram (get-diagram diagram-id)]
    (first (filter #(= version-id (:version-id %)) (:versions diagram)))))

(defn delete-diagram [diagram-id]
  (let [diagrams (get-diagrams)
        updated-diagrams (dissoc diagrams diagram-id)]
    (save-diagrams updated-diagrams)))

(defn cleanup-old-versions [diagram-id]
  (let [settings (get-settings)
        max-versions (get-in settings [:storage :max-versions-per-diagram])
        diagrams (get-diagrams)]
    (when-let [diagram (get diagrams diagram-id)]
      (let [versions (:versions diagram)
            sorted-versions (sort-by :timestamp #(compare %2 %1) versions)
            kept-versions (take max-versions sorted-versions)
            updated-diagram (assoc diagram :versions kept-versions)
            updated-diagrams (assoc diagrams diagram-id updated-diagram)]
        (save-diagrams updated-diagrams)))))

(defn get-storage-stats []
  (let [total-size (->> (.keys js/Object js/localStorage)
                       (map #(.length (.getItem js/localStorage %)))
                       (reduce +))
        diagram-count (count (get-diagrams))
        version-count (->> (get-diagrams)
                          vals
                          (map #(count (:versions %)))
                          (reduce +))]
    {:total-size-bytes total-size
     :total-size-mb (/ total-size 1024 1024)
     :diagram-count diagram-count
     :version-count version-count}))

(defn init! []
  ;; Initialize settings if not present
  (when-not (get-storage-item (:settings storage-keys))
    (save-settings default-settings))
  
  ;; Log storage stats
  (let [stats (get-storage-stats)]
    (js/console.log "Storage initialized:" (clj->js stats))))