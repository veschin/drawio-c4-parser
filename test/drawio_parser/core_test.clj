(ns drawio-parser.core-test
  (:require [clojure.test :refer :all]
            [drawio-parser.core :refer [parse-diagram enrich-with-containment]]
            [clojure.java.io :as io]))

(deftest full-export-file-parsing-test
  (testing "Parsing and enrichment of the full drawio.drawio.xml file"
    (with-open [reader (io/reader (io/resource "drawio.drawio.xml"))]
      (let [raw-diagram (parse-diagram reader)
            diagram (enrich-with-containment raw-diagram)
            elements (:elements diagram)
            relationships (:relationships diagram)]

        (testing "Overall structure"
          (is (= 15 (count elements)) "Should parse all 15 C4 elements")
          (is (= 1 (count relationships)) "Should parse only the 1 valid relationship"))

        (testing "Specific Software System element (ID 8)"
          (let [system (first (filter #(= "8" (:id %)) elements))]
            (is (some? system) "System with ID 8 should exist")
            (is (= "System name" (:name system)))
            (is (= "Software System" (:type system)))
            (is (= "Description of software system." (:description system)))
            (is (nil? (:technology system)))
            (is (= {:x 200, :y 80, :width 240, :height 120} (:geometry system)))))

        (testing "Specific Relationship (ID 18)"
          (let [rel (first (filter #(= "18" (:id %)) relationships))]
            (is (some? rel) "Relationship with ID 18 should exist")
            (is (= "16" (:source rel)))
            (is (= "17" (:target rel)))
            (is (nil? (:description rel)))
            (is (= "[HTTP]" (:technology rel)))))

        (testing "Containment (implicit relationships)"
          (let [container1 (first (filter #(= "16" (:id %)) elements))
                container2 (first (filter #(= "17" (:id %)) elements))
                boundary (first (filter #(= "2" (:id %)) elements))]
            (is (some? boundary) "Boundary with ID 2 should exist")
            (is (= "SystemScopeBoundary" (:type boundary)))

            (is (some? container1) "Container with ID 16 should exist")
            (is (= (:id boundary) (:parent-id container1))
                "Container 16 should be inside boundary 2")

            (is (some? container2) "Container with ID 17 should exist")
            (is (= (:id boundary) (:parent-id container2))
                "Container 17 should be inside boundary 2")))))))
