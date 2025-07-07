(ns drawio-parser.web-test
  (:require [clojure.test :refer :all]
            [drawio-parser.web :refer [app]]
            [cheshire.core :as json]
            [clojure.java.io :as io]))

(defn- slurp-resource [path]
  (slurp (io/resource path)))

(deftest web-api-tests
  (testing "API Endpoints"
    (testing "POST /api/v1/parse/export"
      (let [xml-data (slurp-resource "drawio.drawio.xml")
            request {:request-method :post
                     :uri "/api/v1/parse/export"
                     :headers {"content-type" "application/xml"}
                     :body (io/input-stream (.getBytes xml-data))}
            response (app request)]
        (is (= 200 (:status response)))
        (let [body (json/parse-string (:body response) true)]
          (is (= 15 (count (:elements body))))
          (is (= 1 (count (:relationships body)))))))

    (testing "POST /api/v1/parse/paste"
      (let [paste-data (slurp-resource "drawio-paste.xml")
            request {:request-method :post
                     :uri "/api/v1/parse/paste"
                     :headers {"content-type" "text/plain"}
                     :body (io/input-stream (.getBytes paste-data))}
            response (app request)]
        (is (= 200 (:status response)))
        (let [body (json/parse-string (:body response) true)]
          (is (= 15 (count (:elements body)))))))

    (testing "with invalid XML"
      (let [request {:request-method :post
                     :uri "/api/v1/parse/export"
                     :headers {"content-type" "application/xml"}
                     :body (io/input-stream (.getBytes "<invalid>"))}
            response (app request)]
        (is (= 400 (:status response)))))))