(ns drawio-parser.web-test
  (:require [clojure.test :refer :all]
            [drawio-parser.web :refer [app]]
            [cheshire.core :as json]
            [clojure.java.io :as io]))

(defn- slurp-resource [path]
  (slurp (io/resource path)))

(deftest web-api-tests
  (testing "POST /parse/diagram endpoint"

    (testing "with standard export XML"
      (let [xml-data (slurp-resource "drawio.drawio.xml")
            request {:request-method :post
                     :uri "/parse/diagram"
                     :headers {"content-type" "application/xml"}
                     :body (io/input-stream (.getBytes xml-data))}
            response (app request)]
        (is (= 200 (:status response)))
        (let [body (json/parse-string (:body response) true)]
          (is (= 15 (count (:elements body))))
          (is (= 1 (count (:relationships body))))
          (let [container16 (first (filter #(= "16" (:id %)) (:elements body)))]
            (is (= "2" (:parent-id container16)))))))

    (testing "with URL-encoded paste XML"
      (let [paste-data (slurp-resource "drawio-paste.xml")
            request {:request-method :post
                     :uri "/parse/diagram"
                     :query-params {"type" "paste"}
                     :headers {"content-type" "text/plain"}
                     :body (io/input-stream (.getBytes paste-data))}
            response (app request)]
        (is (= 200 (:status response)))
        (let [body (json/parse-string (:body response) true)]
          (is (= 15 (count (:elements body))))
          (is (= 1 (count (:relationships body)))))))

    (testing "with invalid XML"
      (let [request {:request-method :post
                     :uri "/parse/diagram"
                     :headers {"content-type" "application/xml"}
                     :body (io/input-stream (.getBytes "<invalid>"))}
            response (app request)]
        (is (= 400 (:status response)))
        (let [body (json/parse-string (:body response) true)]
          (is (= "Failed to parse XML" (:error body))))))))
