(ns drawio-parser.compare-test
  (:require [clojure.test :refer :all]
            [drawio-parser.compare :refer :all]
            [clojure.java.io :as io]))

(deftest png-file-detection-test
  (testing "PNG file detection by magic bytes"
    (let [png-bytes [-119 80 78 71 13 10 26 10] ; PNG signature
          non-png-bytes [60 63 120 109 108]] ; <?xml
      (is (true? (#'drawio-parser.compare/png-file? (byte-array (map byte png-bytes))))
          "Should detect PNG signature")
      (is (false? (#'drawio-parser.compare/png-file? (byte-array (map byte non-png-bytes))))
          "Should not detect PNG in XML bytes"))))

(deftest url-encoded-detection-test
  (testing "URL encoded content detection"
    (let [url-encoded-bytes (.getBytes "%3Cmx%3E" "UTF-8")
          xml-bytes (.getBytes "<mxGraphModel>" "UTF-8")
          empty-bytes (.getBytes "" "UTF-8")]
      (is (true? (#'drawio-parser.compare/url-encoded? url-encoded-bytes))
          "Should detect URL encoded content")
      (is (false? (#'drawio-parser.compare/url-encoded? xml-bytes))
          "Should not detect plain XML as URL encoded")
      (is (false? (#'drawio-parser.compare/url-encoded? empty-bytes))
          "Should not detect empty content as URL encoded"))))

(deftest detect-and-parse-test
  (testing "Auto-detection and parsing of different file types"
    (testing "XML export file parsing"
      (let [xml-content (slurp (io/resource "drawio.drawio.xml"))
            xml-bytes (.getBytes xml-content "UTF-8")
            result (detect-and-parse xml-bytes)]
        (is (map? result) "Should return a parsed diagram map")
        (is (contains? result :elements) "Should contain elements")
        (is (contains? result :relationships) "Should contain relationships")
        (is (= 15 (count (:elements result))) "Should parse all elements")
        (is (= 2 (count (:relationships result))) "Should parse all relationships")))
    
    (testing "URL encoded paste data parsing"
      (let [paste-content (slurp (io/resource "drawio-paste.xml"))
            paste-bytes (.getBytes paste-content "UTF-8")
            result (detect-and-parse paste-bytes)]
        (is (map? result) "Should return a parsed diagram map")
        (is (= 15 (count (:elements result))) "Should parse all elements from paste data")
        (is (= 2 (count (:relationships result))) "Should parse all relationships from paste data")))))

(deftest compare-diagrams-test
  (testing "Comparison of identical diagrams"
    (let [xml-content (slurp (io/resource "drawio.drawio.xml"))
          xml-bytes (.getBytes xml-content "UTF-8")
          diagram1 (detect-and-parse xml-bytes)
          diagram2 (detect-and-parse xml-bytes)
          comparison (compare-diagrams diagram1 diagram2)]
      (is (empty? (get-in comparison [:elements :added])) "No elements should be added")
      (is (empty? (get-in comparison [:elements :removed])) "No elements should be removed")
      (is (empty? (get-in comparison [:elements :modified])) "No elements should be modified")
      (is (empty? (get-in comparison [:relationships :added])) "No relationships should be added")
      (is (empty? (get-in comparison [:relationships :removed])) "No relationships should be removed")
      (is (empty? (get-in comparison [:relationships :modified])) "No relationships should be modified")
      (is (= 15 (get-in comparison [:summary :elements :unchanged])) "All elements should be unchanged")
      (is (= 2 (get-in comparison [:summary :relationships :unchanged])) "All relationships should be unchanged")))
  
  (testing "Comparison of different diagrams"
    (let [xml-content1 (slurp (io/resource "drawio.drawio.xml"))
          xml-content2 (slurp (io/resource "drawio-paste.xml"))
          diagram1 (detect-and-parse (.getBytes xml-content1 "UTF-8"))
          diagram2 (detect-and-parse (.getBytes xml-content2 "UTF-8"))
          comparison (compare-diagrams diagram1 diagram2)]
      (is (contains? comparison :elements) "Should contain elements comparison")
      (is (contains? comparison :relationships) "Should contain relationships comparison")
      (is (contains? comparison :summary) "Should contain summary")
      (is (every? keyword? (keys (:elements comparison))) "Element keys should be keywords")
      (is (every? keyword? (keys (:relationships comparison))) "Relationship keys should be keywords"))))

(deftest compare-files-test
  (testing "End-to-end file comparison"
    (let [xml-content1 (slurp (io/resource "drawio.drawio.xml"))
          xml-content2 (slurp (io/resource "drawio-paste.xml"))
          file1-bytes (.getBytes xml-content1 "UTF-8")
          file2-bytes (.getBytes xml-content2 "UTF-8")
          comparison (compare-files file1-bytes file2-bytes)]
      (is (map? comparison) "Should return a comparison map")
      (is (contains? comparison :elements) "Should contain elements comparison")
      (is (contains? comparison :relationships) "Should contain relationships comparison")
      (is (contains? comparison :summary) "Should contain summary")))
  
  (testing "Error handling for invalid files"
    (let [invalid-bytes (.getBytes "invalid content" "UTF-8")]
      (is (thrown? Exception (compare-files invalid-bytes invalid-bytes))
          "Should throw exception for invalid content"))))

(deftest element-enrichment-test
  (testing "Relationship enrichment with element names"
    (let [elements-map {"1" {:id "1" :name "ComponentA"}
                       "2" {:id "2" :label "ComponentB"}
                       "3" {:id "3"}}
          relationship {:id "r1" :source "1" :target "2"}
          enriched (#'drawio-parser.compare/enrich-relationship-with-names relationship elements-map)]
      (is (= "ComponentA" (:source-name enriched)) "Should use element name")
      (is (= "ComponentB" (:target-name enriched)) "Should use element label if no name")
      
      (let [relationship2 {:id "r2" :source "3" :target "4"}
            enriched2 (#'drawio-parser.compare/enrich-relationship-with-names relationship2 elements-map)]
        (is (= "3" (:source-name enriched2)) "Should use ID if no name/label")
        (is (= "4" (:target-name enriched2)) "Should use ID for unknown elements")))))