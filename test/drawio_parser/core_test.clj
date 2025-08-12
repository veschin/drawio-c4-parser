(ns drawio-parser.core-test
  (:require [clojure.test :refer :all]
            [drawio-parser.core :refer [parse-diagram enrich-with-containment decode-and-read]]
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

(deftest paste-xml-parsing-test
  (testing "Parsing of a pasted XML snippet from drawio"
    (let [encoded-xml (slurp (io/resource "drawio-paste.xml"))
          decoded-reader (decode-and-read encoded-xml)
          diagram (parse-diagram decoded-reader)
          elements (:elements diagram)
          relationships (:relationships diagram)]
      (is (= 15 (count elements)) "Should parse all 15 C4 elements from pasted XML")
      (is (= 1 (count relationships)) "Should parse the 1 valid relationship from pasted XML")

      (let [system (first (filter #(= "8" (:id %)) elements))]
        (is (some? system) "System with ID 8 should exist")
        (is (= "System name" (:name system)))
        (is (= "Software System" (:type system))))

      (let [rel (first (filter #(= "18" (:id %)) relationships))]
        (is (some? rel) "Relationship with ID 18 should exist")
        (is (= "16" (:source rel)))
        (is (= "17" (:target rel)))
        (is (= "[HTTP]" (:technology rel)))))))

(deftest error-handling-parsing-test
  (testing "Graceful handling of various error conditions during parsing"

    (testing "Malformed XML input"
      (with-open [reader (io/reader (io/resource "malformed-xml.xml"))]
        (is (thrown? Exception (parse-diagram reader))
            "Should throw an exception for malformed XML")))

    (testing "Valid XML that is not a Drawio diagram"
      (with-open [reader (io/reader (io/resource "not-a-diagram.xml"))]
        (let [diagram (parse-diagram reader)]
          (is (empty? (:elements diagram)))
          (is (empty? (:relationships diagram))))))

    (testing "Element with incomplete geometry"
      (with-open [reader (io/reader (io/resource "incomplete-geometry.xml"))]
        (let [diagram (parse-diagram reader)
              elements (:elements diagram)
              element-with-bad-geo (first (filter #(= "2" (:id %)) elements))]
          (is (= 1 (count elements)))
          (is (nil? (:geometry element-with-bad-geo))))))))
