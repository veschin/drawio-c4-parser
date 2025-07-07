(ns drawio-parser.web
  (:require [org.httpkit.server :as server]
            [reitit.ring :as reitit-ring]
            [cheshire.core :as json]
            [clojure.java.io :as io]
            [drawio-parser.core :as core])
  (:gen-class))

(defn- handle-parsing-request [body-str reader-fn]
  (try
    (let [diagram (-> (reader-fn body-str)
                      (core/parse-diagram)
                      (core/enrich-with-containment))]
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string diagram)})
    (catch Exception e
      {:status 400
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string {:error "Failed to parse input"
                                    :message (.getMessage e)})})))

(defn- export-handler [request]
  (handle-parsing-request (slurp (:body request))
                          #(io/reader (.getBytes % "UTF-8"))))

(defn- paste-handler [request]
  (handle-parsing-request (slurp (:body request))
                          core/decode-and-read))

(def app
  (reitit-ring/ring-handler
   (reitit-ring/router
    ["/api/v1"
     ["/parse/export" {:post {:handler export-handler}}]
     ["/parse/paste" {:post {:handler paste-handler}}]])))

(defn -main [& args]
  (let [port (Integer/parseInt (or (System/getenv "DP_PORT") "8080"))]
    (server/run-server app {:port port})
    (println (str "Server running on http://localhost:" port))))