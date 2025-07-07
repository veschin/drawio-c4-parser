(ns drawio-parser.core
  (:require [clojure.data.xml :as xml]
            [clojure.java.io :as io])
  (:import [java.net URLDecoder]))

(defn decode-and-read
  "Decodes a URL-encoded XML string and returns a reader for it."
  [encoded-xml-string]
  (-> encoded-xml-string
      (URLDecoder/decode "UTF-8")
      (.getBytes "UTF-8")
      (io/input-stream)
      (io/reader)))

(defn- find-nodes [xml-tree pred]
  (filter pred (tree-seq :content :content xml-tree)))

(defn- parse-geometry [element-xml]
  (when-let [geometry-node (first (find-nodes element-xml #(= :mxGeometry (:tag %))))]
    (let [attrs (:attrs geometry-node)]
      ;; Convert geometry values to numbers for easier calculations
      (try
        {:x (Integer/parseInt (:x attrs))
         :y (Integer/parseInt (:y attrs))
         :width (Integer/parseInt (:width attrs))
         :height (Integer/parseInt (:height attrs))}
        (catch Exception _ nil)))))

(defn- parse-element [element-xml]
  (let [attrs (:attrs element-xml)]
    {:id          (:id attrs)
     :name        (:c4Name attrs)
     :type        (:c4Type attrs)
     :description (:c4Description attrs)
     :technology  (:c4Technology attrs)
     :application (:c4Application attrs)
     :label       (:label attrs)
     :geometry    (parse-geometry element-xml)}))

(defn- parse-relationship [rel-object-xml edge-labels]
  (let [rel-attrs (:attrs rel-object-xml)
        rel-id    (:id rel-attrs)
        edge-cell (first (filter (complement string?) (:content rel-object-xml)))
        edge-attrs (:attrs edge-cell)]
    (when (and edge-attrs (:source edge-attrs) (:target edge-attrs))
      {:id          rel-id
       :source      (:source edge-attrs)
       :target      (:target edge-attrs)
       :description (:c4Description rel-attrs)
       :label       (:label rel-attrs)
       :technology  (:value (edge-labels rel-id))})))

(defn parse-diagram [xml-stream]
  (let [parsed-xml (xml/parse xml-stream {:skip-whitespace true})
        all-nodes (find-nodes parsed-xml some?)
        all-objects (filter #(= :object (:tag %)) all-nodes)
        all-mxcells (filter #(= :mxCell (:tag %)) all-nodes)
        edge-labels (->> all-mxcells
                         (filter (comp :parent :attrs))
                         (map :attrs)
                         (reduce (fn [acc {:keys [parent value]}]
                                   (assoc acc parent {:value value}))
                                 {}))
        c4-elements (remove #(= "Relationship" (:c4Type (:attrs %))) all-objects)
        c4-relationships (filter #(= "Relationship" (:c4Type (:attrs %))) all-objects)]
    {:elements      (map parse-element c4-elements)
     :relationships (->> (map #(parse-relationship % edge-labels) c4-relationships)
                         (remove nil?)
                         (vec))}))

;; --- New functionality for implicit relationships ---

(defn- rect-contains?
  "Checks if outer-rect fully contains inner-rect."
  [outer-rect inner-rect]
  (and outer-rect inner-rect
       (>= (:x inner-rect) (:x outer-rect))
       (>= (:y inner-rect) (:y outer-rect))
       (<= (+ (:x inner-rect) (:width inner-rect))
           (+ (:x outer-rect) (:width outer-rect)))
       (<= (+ (:y inner-rect) (:height inner-rect))
           (+ (:y outer-rect) (:height outer-rect)))))

(defn enrich-with-containment
  "Analyzes geometry to find which elements are contained within boundaries."
  [diagram-data]
  (let [elements (:elements diagram-data)
        boundaries (filter #(and (:geometry %)
                                 (or (= "SystemScopeBoundary" (:type %))
                                     (= "ContainerScopeBoundary" (:type %))))
                           elements)]
    (let [enriched-elements
          (map (fn [element]
                 (if-let [parent-boundary (first (filter #(rect-contains? (:geometry %) (:geometry element))
                                                         (remove #(= element %) boundaries)))]
                   (assoc element :parent-id (:id parent-boundary))
                   element))
               elements)]
      (assoc diagram-data :elements enriched-elements))))