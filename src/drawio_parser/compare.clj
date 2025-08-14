(ns drawio-parser.compare
  (:require [drawio-parser.core :as core]
            [drawio-parser.png :as png]
            [clojure.java.io :as io]
            [clojure.set :as set]))

(defn- png-file? 
  "Check if bytes start with PNG magic number"
  [file-bytes]
  (and (>= (count file-bytes) 4)
       (= (vec (take 4 file-bytes)) [-119 80 78 71]))) ; 0x89 0x50 0x4E 0x47

(defn- url-encoded? 
  "Check if content appears to be URL-encoded"
  [file-bytes]
  (try
    (let [content (String. file-bytes "UTF-8")]
      (and (.startsWith content "%")
           (.contains content "%3C") ; Encoded '<'
           (.contains content "%3E"))) ; Encoded '>'
    (catch Exception _ false)))

(defn detect-and-parse
  "Auto-detect file type and parse using existing functions"
  [file-bytes]
  (cond
    (png-file? file-bytes)
    (-> file-bytes
        png/extract-drawio-xml
        (.getBytes "UTF-8")
        io/reader
        core/parse-diagram
        core/enrich-with-containment)
    
    (url-encoded? file-bytes)
    (-> (String. file-bytes "UTF-8")
        core/decode-and-read
        core/parse-diagram
        core/enrich-with-containment)
    
    :else
    (-> file-bytes
        (#(io/reader (java.io.ByteArrayInputStream. %)))
        core/parse-diagram
        core/enrich-with-containment)))

(defn- element-by-id
  "Create a map of elements indexed by ID"
  [elements]
  (into {} (map #(vector (:id %) %) elements)))

(defn- relationship-by-id
  "Create a map of relationships indexed by ID"
  [relationships]
  (into {} (map #(vector (:id %) %) relationships)))

(defn- find-element-name
  "Get element name by ID from element map"
  [elements-map id]
  (or (:name (get elements-map id))
      (:label (get elements-map id))
      id))

(defn- compare-properties
  "Compare properties of two objects, return changes map"
  [old-obj new-obj exclude-keys]
  (let [old-props (apply dissoc old-obj exclude-keys)
        new-props (apply dissoc new-obj exclude-keys)
        all-keys (set/union (set (keys old-props)) (set (keys new-props)))
        changes (reduce (fn [acc key]
                         (let [old-val (get old-props key)
                               new-val (get new-props key)]
                           (if (not= old-val new-val)
                             (assoc acc key {:old old-val :new new-val})
                             acc)))
                       {}
                       all-keys)]
    (when (seq changes)
      changes)))

(defn- enrich-relationship-with-names
  "Add source-name and target-name to relationship"
  [relationship elements-map]
  (assoc relationship
         :source-name (find-element-name elements-map (:source relationship))
         :target-name (find-element-name elements-map (:target relationship))))

(defn compare-diagrams
  "Compare two parsed diagrams and return structured diff"
  [diagram1 diagram2]
  (let [elements1 (element-by-id (:elements diagram1))
        elements2 (element-by-id (:elements diagram2))
        relationships1 (relationship-by-id (:relationships diagram1))
        relationships2 (relationship-by-id (:relationships diagram2))
        
        ;; Element comparison
        element-ids1 (set (keys elements1))
        element-ids2 (set (keys elements2))
        added-element-ids (set/difference element-ids2 element-ids1)
        removed-element-ids (set/difference element-ids1 element-ids2)
        common-element-ids (set/intersection element-ids1 element-ids2)
        
        ;; Find modified elements
        modified-elements (keep (fn [id]
                                 (let [old-elem (get elements1 id)
                                       new-elem (get elements2 id)
                                       changes (compare-properties old-elem new-elem [:id])]
                                   (when changes
                                     {:id id
                                      :name (or (:name new-elem) (:label new-elem) id)
                                      :type (:type new-elem)
                                      :changes changes})))
                               common-element-ids)
        
        ;; Relationship comparison
        rel-ids1 (set (keys relationships1))
        rel-ids2 (set (keys relationships2))
        added-rel-ids (set/difference rel-ids2 rel-ids1)
        removed-rel-ids (set/difference rel-ids1 rel-ids2)
        common-rel-ids (set/intersection rel-ids1 rel-ids2)
        
        ;; Find modified relationships
        modified-relationships (keep (fn [id]
                                    (let [old-rel (get relationships1 id)
                                          new-rel (get relationships2 id)
                                          changes (compare-properties old-rel new-rel [:id :source-name :target-name])]
                                      (when changes
                                        (-> {:id id
                                             :changes changes}
                                            (enrich-relationship-with-names elements2)))))
                                  common-rel-ids)]
    
    {:elements {:added (map (fn [id] (get elements2 id)) added-element-ids)
                :removed (map (fn [id] (get elements1 id)) removed-element-ids)
                :modified modified-elements}
     :relationships {:added (map (fn [id] 
                                  (enrich-relationship-with-names 
                                   (get relationships2 id) elements2))
                                added-rel-ids)
                     :removed (map (fn [id]
                                   (enrich-relationship-with-names
                                    (get relationships1 id) elements1))
                                  removed-rel-ids)
                     :modified modified-relationships}
     :summary {:elements {:added (count added-element-ids)
                         :removed (count removed-element-ids)
                         :modified (count modified-elements)
                         :unchanged (- (count common-element-ids) (count modified-elements))}
               :relationships {:added (count added-rel-ids)
                              :removed (count removed-rel-ids)
                              :modified (count modified-relationships)
                              :unchanged (- (count common-rel-ids) (count modified-relationships))}}}))

(defn compare-files
  "Compare two files, auto-detecting their types"
  [file1-bytes file2-bytes]
  (try
    (let [diagram1 (detect-and-parse file1-bytes)
          diagram2 (detect-and-parse file2-bytes)]
      (compare-diagrams diagram1 diagram2))
    (catch Exception e
      (throw (ex-info "Failed to compare files" 
                      {:error (.getMessage e)} e)))))