(ns drawio-ui.diff
  "Diff analysis engine for C4 diagram comparison"
  (:require [clojure.string :as str]
            [clojure.set :as set]))

;; Forward declaration
(declare levenshtein-distance)

(defn normalize-element-id
  "Normalize element ID for comparison by removing whitespace and converting to lowercase"
  [id]
  (when id
    (-> id str/trim str/lower-case)))

(defn normalize-element-name
  "Normalize element name for fuzzy matching"
  [name]
  (when name
    (-> name 
        str/trim 
        str/lower-case
        (str/replace #"[^\w\s]" "")
        (str/replace #"\s+" " "))))

(defn text-similarity
  "Calculate text similarity between two strings using Levenshtein distance
   Returns score between 0 (no match) and 1 (perfect match)"
  [s1 s2]
  (if (and s1 s2)
    (let [s1 (normalize-element-name s1)
          s2 (normalize-element-name s2)
          max-len (max (count s1) (count s2))]
      (if (zero? max-len)
        1.0
        (let [distance (levenshtein-distance s1 s2)]
          (- 1.0 (/ distance max-len)))))
    0.0))

(defn levenshtein-distance
  "Calculate Levenshtein distance between two strings"
  [s1 s2]
  (let [len1 (count s1)
        len2 (count s2)
        ;; Use vector of vectors instead of 2D array for ClojureScript compatibility
        matrix (vec (for [i (range (inc len1))]
                     (vec (repeat (inc len2) 0))))]
    
    ;; Initialize matrix using atom for mutable updates
    (let [matrix-atom (atom matrix)]
      ;; Initialize first row and column
      (doseq [i (range (inc len1))]
        (swap! matrix-atom assoc-in [i 0] i))
      (doseq [j (range (inc len2))]
        (swap! matrix-atom assoc-in [0 j] j))
      
      ;; Fill the matrix
      (doseq [i (range 1 (inc len1))
              j (range 1 (inc len2))]
        (let [current-matrix @matrix-atom
              cost (if (= (nth s1 (dec i)) (nth s2 (dec j))) 0 1)
              deletion (inc (get-in current-matrix [(dec i) j]))
              insertion (inc (get-in current-matrix [i (dec j)]))
              substitution (+ (get-in current-matrix [(dec i) (dec j)]) cost)]
          (swap! matrix-atom assoc-in [i j] (min deletion insertion substitution))))
      
      (get-in @matrix-atom [len1 len2]))))

(defn element-similarity
  "Calculate overall similarity between two C4 elements"
  [elem1 elem2]
  (let [id-match (if (and (:id elem1) (:id elem2))
                   (if (= (normalize-element-id (:id elem1))
                          (normalize-element-id (:id elem2)))
                     1.0 0.0)
                   0.0)
        name-similarity (text-similarity (:c4Name elem1) (:c4Name elem2))
        type-match (if (= (:c4Type elem1) (:c4Type elem2)) 1.0 0.0)
        tech-similarity (text-similarity (:c4Technology elem1) (:c4Technology elem2))
        desc-similarity (text-similarity (:c4Description elem1) (:c4Description elem2))
        
        ;; Weighted scoring
        weights {:id 0.4 :name 0.3 :type 0.2 :tech 0.05 :desc 0.05}]
    
    (+ (* (:id weights) id-match)
       (* (:name weights) name-similarity)
       (* (:type weights) type-match)
       (* (:tech weights) tech-similarity)
       (* (:desc weights) desc-similarity))))

(defn geometry-similarity
  "Calculate geometric similarity between two elements based on position and size"
  [elem1 elem2]
  (let [x1 (or (:x elem1) 0) y1 (or (:y elem1) 0)
        w1 (or (:width elem1) 0) h1 (or (:height elem1) 0)
        x2 (or (:x elem2) 0) y2 (or (:y elem2) 0)
        w2 (or (:width elem2) 0) h2 (or (:height elem2) 0)
        
        ;; Calculate center points
        cx1 (+ x1 (/ w1 2)) cy1 (+ y1 (/ h1 2))
        cx2 (+ x2 (/ w2 2)) cy2 (+ y2 (/ h2 2))
        
        ;; Position distance (normalized by diagram size)
        pos-distance (Math/sqrt (+ (Math/pow (- cx2 cx1) 2) (Math/pow (- cy2 cy1) 2)))
        max-distance 1000 ; Assume max diagram size for normalization
        pos-similarity (max 0 (- 1 (/ pos-distance max-distance)))
        
        ;; Size similarity
        size-similarity (if (and (pos? w1) (pos? h1) (pos? w2) (pos? h2))
                         (let [area1 (* w1 h1)
                               area2 (* w2 h2)
                               size-ratio (/ (min area1 area2) (max area1 area2))]
                           size-ratio)
                         0.5)]
    
    (* 0.7 pos-similarity (+ 0.3 size-similarity))))

(defn find-best-match
  "Find the best matching element from target-elements for source-element"
  [source-element target-elements threshold]
  (when (seq target-elements)
    (let [matches (map (fn [target]
                        {:element target
                         :similarity (element-similarity source-element target)
                         :geo-similarity (geometry-similarity source-element target)})
                      target-elements)
          best-match (first (sort-by (fn [{:keys [similarity geo-similarity]}]
                                     (- (+ (* 0.8 similarity) (* 0.2 geo-similarity))))
                                   #(compare %2 %1) matches))
          combined-score (+ (* 0.8 (:similarity best-match))
                           (* 0.2 (:geo-similarity best-match)))]
      
      (when (>= combined-score threshold)
        (assoc best-match :combined-score combined-score)))))

(defn categorize-changes
  "Categorize changes based on similarity scores"
  [similarity-score]
  (cond
    (>= similarity-score 0.95) :unchanged
    (>= similarity-score 0.7) :modified-minor
    (>= similarity-score 0.4) :modified-major
    :else :different))

(defn analyze-element-changes
  "Analyze changes between two sets of C4 elements"
  [source-elements target-elements]
  (let [match-threshold 0.3
        source-by-id (group-by :id source-elements)
        target-by-id (group-by :id target-elements)
        used-targets (atom #{})
        
        ;; First pass: exact ID matches
        exact-matches (for [source source-elements
                           :let [target (first (get target-by-id (:id source)))]
                           :when target]
                       (do
                         (swap! used-targets conj target)
                         {:source source
                          :target target
                          :type :matched
                          :similarity (element-similarity source target)
                          :change-type (categorize-changes (element-similarity source target))}))
        
        remaining-sources (remove (fn [elem] 
                                  (some #(= (:id elem) (:id (:source %))) exact-matches))
                                source-elements)
        remaining-targets (remove @used-targets target-elements)
        
        ;; Second pass: fuzzy matching for remaining elements
        fuzzy-matches (loop [sources remaining-sources
                           targets remaining-targets
                           matches []]
                       (if (empty? sources)
                         matches
                         (let [source (first sources)
                               best-match (find-best-match source targets match-threshold)]
                           (if best-match
                             (recur (rest sources)
                                   (remove #(= % (:element best-match)) targets)
                                   (conj matches {:source source
                                                 :target (:element best-match)
                                                 :type :fuzzy-matched
                                                 :similarity (:combined-score best-match)
                                                 :change-type (categorize-changes (:combined-score best-match))}))
                             (recur (rest sources) targets matches)))))
        
        ;; Collect unmatched elements
        matched-source-ids (set (map (comp :id :source) (concat exact-matches fuzzy-matches)))
        matched-target-ids (set (map (comp :id :target) (concat exact-matches fuzzy-matches)))
        
        removed-elements (map (fn [elem] {:source elem :type :removed :change-type :removed})
                            (remove #(matched-source-ids (:id %)) source-elements))
        
        added-elements (map (fn [elem] {:target elem :type :added :change-type :added})
                          (remove #(matched-target-ids (:id %)) target-elements))]
    
    {:matches (concat exact-matches fuzzy-matches)
     :removed removed-elements
     :added added-elements
     :all-changes (concat exact-matches fuzzy-matches removed-elements added-elements)}))

(defn analyze-relationship-changes
  "Analyze changes in relationships between diagrams"
  [source-relationships target-relationships]
  (let [normalize-rel (fn [rel]
                       {:from (normalize-element-id (:from rel))
                        :to (normalize-element-id (:to rel))
                        :label (normalize-element-name (:c4Description rel))})
        
        source-normalized (map normalize-rel source-relationships)
        target-normalized (map normalize-rel target-relationships)
        
        source-set (set source-normalized)
        target-set (set target-normalized)
        
        unchanged (set/intersection source-set target-set)
        removed (set/difference source-set target-set)
        added (set/difference target-set source-set)]
    
    {:unchanged (count unchanged)
     :removed (count removed)
     :added (count added)
     :total-changes (+ (count removed) (count added))
     :removed-rels removed
     :added-rels added}))

(defn calculate-diagram-similarity
  "Calculate overall similarity between two diagrams"
  [source-diagram target-diagram]
  (let [element-analysis (analyze-element-changes (:elements source-diagram) (:elements target-diagram))
        rel-analysis (analyze-relationship-changes (:relationships source-diagram) (:relationships target-diagram))
        
        total-source-elements (count (:elements source-diagram))
        total-target-elements (count (:elements target-diagram))
        
        ;; Element similarity metrics
        matched-count (count (:matches element-analysis))
        unchanged-count (count (filter #(= (:change-type %) :unchanged) (:matches element-analysis)))
        minor-changes (count (filter #(= (:change-type %) :modified-minor) (:matches element-analysis)))
        major-changes (count (filter #(= (:change-type %) :modified-major) (:matches element-analysis)))
        
        ;; Calculate weighted similarity
        element-similarity (if (pos? (max total-source-elements total-target-elements))
                            (/ (+ unchanged-count (* 0.8 minor-changes) (* 0.4 major-changes))
                               (max total-source-elements total-target-elements))
                            1.0)
        
        ;; Relationship similarity
        total-relationships (max 1 (max (count (:relationships source-diagram))
                                       (count (:relationships target-diagram))))
        relationship-similarity (/ (:unchanged rel-analysis) total-relationships)
        
        ;; Overall similarity (weighted)
        overall-similarity (* 100 (+ (* 0.75 element-similarity) (* 0.25 relationship-similarity)))]
    
    {:similarity-percentage (Math/round overall-similarity)
     :element-analysis element-analysis
     :relationship-analysis rel-analysis
     :metrics {:total-source-elements total-source-elements
               :total-target-elements total-target-elements
               :matched-elements matched-count
               :unchanged-elements unchanged-count
               :modified-elements (+ minor-changes major-changes)
               :removed-elements (count (:removed element-analysis))
               :added-elements (count (:added element-analysis))
               :relationship-changes (:total-changes rel-analysis)}}))

(defn generate-diff-summary
  "Generate a human-readable summary of the changes"
  [diff-result]
  (let [metrics (:metrics diff-result)
        similarity (:similarity-percentage diff-result)]
    
    {:summary-text (cond
                    (>= similarity 95) "Diagrams are nearly identical with minimal changes"
                    (>= similarity 80) "Diagrams are very similar with minor modifications"
                    (>= similarity 60) "Diagrams have moderate differences"
                    (>= similarity 40) "Diagrams have significant differences"
                    :else "Diagrams are substantially different")
     :key-changes [(when (pos? (:added-elements metrics))
                    (str "Added " (:added-elements metrics) " new elements"))
                   (when (pos? (:removed-elements metrics))
                    (str "Removed " (:removed-elements metrics) " elements"))
                   (when (pos? (:modified-elements metrics))
                    (str "Modified " (:modified-elements metrics) " elements"))
                   (when (pos? (:relationship-changes (:relationship-analysis diff-result)))
                    (str "Changed " (:relationship-changes (:relationship-analysis diff-result)) " relationships"))]
     :metrics metrics}))

;; Public API functions

(defn compare-diagrams
  "Main function to compare two parsed C4 diagrams
   Returns comprehensive diff analysis including similarity score and detailed changes"
  [source-diagram target-diagram]
  (let [diff-result (calculate-diagram-similarity source-diagram target-diagram)
        summary (generate-diff-summary diff-result)]
    
    (merge diff-result summary)))

(defn get-change-color
  "Get CSS color class for change type"
  [change-type]
  (case change-type
    :added "text-green-600 bg-green-50 border-green-200"
    :removed "text-red-600 bg-red-50 border-red-200"
    :modified-minor "text-yellow-600 bg-yellow-50 border-yellow-200"
    :modified-major "text-orange-600 bg-orange-50 border-orange-200"
    :unchanged "text-gray-600 bg-gray-50 border-gray-200"
    "text-gray-600 bg-gray-50 border-gray-200"))

(defn get-change-icon
  "Get icon for change type"
  [change-type]
  (case change-type
    :added "+"
    :removed "−"
    :modified-minor "~"
    :modified-major "!"
    :unchanged "="
    "?"))