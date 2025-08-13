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

    (testing "POST /api/v1/parse/png"
      (let [png-file (io/resource "drawio.drawio.png")
            png-bytes (with-open [is (io/input-stream png-file)]
                        (.readAllBytes is))
            request {:request-method :post
                     :uri "/api/v1/parse/png"
                     :headers {"content-type" "image/png"}
                     :body (io/input-stream png-bytes)}
            response (app request)]
        (is (= 200 (:status response)))
        (let [body (json/parse-string (:body response) true)]
          (is (some? (:elements body)) "Should have elements")
          (is (some? (:relationships body)) "Should have relationships")
          (is (vector? (:elements body)) "Elements should be a vector")
          (is (vector? (:relationships body)) "Relationships should be a vector"))))

    (testing "PNG endpoint with invalid PNG"
      (let [invalid-png (.getBytes "not a png file" "UTF-8")
            request {:request-method :post
                     :uri "/api/v1/parse/png"
                     :headers {"content-type" "image/png"}
                     :body (io/input-stream invalid-png)}
            response (app request)]
        (is (= 400 (:status response)))
        (let [body (json/parse-string (:body response) true)]
          (is (:error body) "Should have error field")
          (is (:message body) "Should have error message"))))

    (testing "GET /api/v1/health - render service health check"
      (let [request {:request-method :get
                     :uri "/api/v1/health"}
            response (app request)]
        (is (contains? #{200 503} (:status response)) "Should return 200 if service available or 503 if not")
        (let [body (json/parse-string (:body response) true)]
          (is (contains? #{"ok" "error"} (name (:status body))) "Should show ok or error status")
          (is (:message body) "Should have explanatory message"))))

    (testing "POST /api/v1/render/png - render service integration"
      (let [xml-data (slurp-resource "drawio.drawio.xml")
            request-body (json/generate-string {:xml xml-data :width 800 :height 600})
            request {:request-method :post
                     :uri "/api/v1/render/png"
                     :headers {"content-type" "application/json"}
                     :body (io/input-stream (.getBytes request-body))}
            response (app request)]
        (is (contains? #{200 500} (:status response)) "Should return 200 if service available or 500 if not")
        (let [body (json/parse-string (:body response) true)]
          (if (= 200 (:status response))
            (do (is (:format body) "Should have format field")
                (is (:data body) "Should have data field"))
            (is (:error body) "Should have error field if service unavailable")))))

    (testing "POST /api/v1/render/svg - render service integration"
      (let [xml-data (slurp-resource "drawio.drawio.xml")
            request-body (json/generate-string {:xml xml-data :width 800 :height 600})
            request {:request-method :post
                     :uri "/api/v1/render/svg"
                     :headers {"content-type" "application/json"}
                     :body (io/input-stream (.getBytes request-body))}
            response (app request)]
        (is (contains? #{200 500} (:status response)) "Should return 200 if service available or 500 if not")
        (let [body (json/parse-string (:body response) true)]
          (if (= 200 (:status response))
            (do (is (:format body) "Should have format field")
                (is (:data body) "Should have data field"))
            (is (:error body) "Should have error field if service unavailable")))))

    (testing "with invalid XML"
      (let [request {:request-method :post
                     :uri "/api/v1/parse/export"
                     :headers {"content-type" "application/xml"}
                     :body (io/input-stream (.getBytes "<invalid>"))}
            response (app request)]
        (is (= 400 (:status response)))))))