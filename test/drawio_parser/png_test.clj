(ns drawio-parser.png-test
  (:require [clojure.test :refer :all]
            [drawio-parser.png :refer [extract-drawio-xml validate-drawio-png]]
            [clojure.java.io :as io]
            [clojure.data.xml :as xml]))

(deftest png-extraction-with-real-file-test
  (testing "Extraction of Draw.io XML from real PNG file with embedded data"
    (let [png-file (io/resource "drawio.drawio.png")
          png-bytes (with-open [is (io/input-stream png-file)]
                      (.readAllBytes is))]
      
      (testing "PNG validation should succeed"
        (is (true? (validate-drawio-png png-bytes))
            "PNG should be recognized as containing Draw.io data"))
      
      (testing "XML extraction should return valid XML"
        (let [extracted-xml (extract-drawio-xml png-bytes)]
          (is (some? extracted-xml) "XML should be extracted")
          (is (string? extracted-xml) "Extracted data should be string")
          (is (.contains extracted-xml "<mxGraphModel") 
              "Extracted XML should contain mxGraphModel element")
          (is (.contains extracted-xml "</mxGraphModel>") 
              "Extracted XML should be complete with closing tag"))))))

(deftest png-extraction-error-handling-test
  (testing "Error handling for various PNG scenarios"
    
    (testing "Invalid PNG bytes should return false for validation"
      (let [invalid-bytes (.getBytes "not a png file" "UTF-8")]
        (is (false? (validate-drawio-png invalid-bytes))
            "Invalid PNG should not validate")))
    
    (testing "Invalid PNG bytes should return nil on extraction"
      (let [invalid-bytes (.getBytes "not a png file" "UTF-8")]
        (is (nil? (extract-drawio-xml invalid-bytes))
            "Invalid PNG should return nil from extraction")))
    
    (testing "Valid PNG without Draw.io data should return false for validation"
      ;; Create a minimal valid PNG header but without our data
      (let [png-header (byte-array [0x89 0x50 0x4E 0x47 0x0D 0x0A 0x1A 0x0A])]
        (is (false? (validate-drawio-png png-header))
            "PNG without proper chunks should fail validation")))
    
    (testing "Empty byte array should return false and nil"
      (let [empty-bytes (byte-array 0)]
        (is (false? (validate-drawio-png empty-bytes))
            "Empty bytes should return false for validation")
        (is (nil? (extract-drawio-xml empty-bytes))
            "Empty bytes should return nil from extraction")))))

(deftest png-xml-parsing-integration-test
  (testing "Integration test: PNG extraction + XML parsing"
    (let [png-file (io/resource "drawio.drawio.png")
          png-bytes (with-open [is (io/input-stream png-file)]
                      (.readAllBytes is))
          extracted-xml (extract-drawio-xml png-bytes)]
      
      (testing "Extracted XML should be parseable"
        ;; Test that the XML can be used with our existing parser
        (let [xml-reader (io/reader (.getBytes extracted-xml "UTF-8"))]
          ;; This should not throw - validates XML structure
          (is (some? (xml/parse xml-reader))
              "Extracted XML should be valid and parseable"))))))