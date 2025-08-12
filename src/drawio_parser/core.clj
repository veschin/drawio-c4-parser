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
    (let [{:keys [x y width height]} (:attrs geometry-node)]
      ;; Convert geometry values to numbers for easier calculations
      (try
        {:x (Integer/parseInt x)
         :y (Integer/parseInt y)
         :width (Integer/parseInt width)
         :height (Integer/parseInt height)}
        (catch Exception _ nil)))))

(defn- parse-element [element-xml]
  (let [{:keys [id c4Name c4Type c4Description c4Technology c4Application label]} 
        (:attrs element-xml)]
    {:id          id
     :name        c4Name
     :type        c4Type
     :description c4Description
     :technology  c4Technology
     :application c4Application
     :label       label
     :geometry    (parse-geometry element-xml)}))

(defn- parse-relationship [rel-object-xml edge-labels]
  (let [{:keys [id c4Description label]} (:attrs rel-object-xml)
        edge-cell (first (filter (complement string?) (:content rel-object-xml)))
        {:keys [source target]} (:attrs edge-cell)]
    (when (and source target)
      {:id          id
       :source      source
       :target      target
       :description c4Description
       :label       label
       :technology  (:value (edge-labels id))})))

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
        {c4-relationships true c4-elements false}
        (group-by #(= "Relationship" (:c4Type (:attrs %))) all-objects)]
    {:elements      (map parse-element c4-elements)
     :relationships (->> c4-relationships
                         (map #(parse-relationship % edge-labels))
                         (remove nil?)
                         vec)}))

;; --- New functionality for implicit relationships ---

(defn- rect-contains?
  "Checks if outer-rect fully contains inner-rect."
  [outer-rect inner-rect]
  (when (and outer-rect inner-rect)
    (let [{outer-x :x outer-y :y outer-w :width outer-h :height} outer-rect
          {inner-x :x inner-y :y inner-w :width inner-h :height} inner-rect]
      (and (>= inner-x outer-x)
           (>= inner-y outer-y)
           (<= (+ inner-x inner-w) (+ outer-x outer-w))
           (<= (+ inner-y inner-h) (+ outer-y outer-h))))))

(defn enrich-with-containment
  "Analyzes geometry to find which elements are contained within boundaries."
  [diagram-data]
  (let [{:keys [elements]} diagram-data
        boundaries (filter (fn [elem] 
                             (and (:geometry elem) 
                                  (#{"SystemScopeBoundary" "ContainerScopeBoundary"} (:type elem))))
                           elements)
        enriched-elements
        (map (fn [element]
               (if-let [parent-boundary 
                        (->> boundaries
                             (remove #(= element %))
                             (filter #(rect-contains? (:geometry %) (:geometry element)))
                             first)]
                 (assoc element :parent-id (:id parent-boundary))
                 element))
             elements)]
    (assoc diagram-data :elements enriched-elements)))