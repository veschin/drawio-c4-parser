(ns drawio-parser.web
  (:require [org.httpkit.server :as server]
            [reitit.ring :as reitit-ring]
            [cheshire.core :as json]
            [clojure.java.io :as io]
            [drawio-parser.core :as core])
  (:gen-class))

(defn- parse-handler [request]
  (let [xml-body (slurp (:body request))
        is-paste? (= "paste" (get-in request [:query-params "type"]))]
    (try
      (let [reader (if is-paste?
                     (core/decode-and-read xml-body)
                     (io/reader (.getBytes xml-body "UTF-8")))
            diagram (-> reader
                        (core/parse-diagram)
                        (core/enrich-with-containment))]
        {:status 200
         :headers {"Content-Type" "application/json"}
         :body (json/generate-string diagram)})
      (catch Exception e
        {:status 400
         :headers {"Content-Type" "application/json"}
         :body (json/generate-string {:error "Failed to parse XML"
                                      :message (.getMessage e)})}))))

(def app
  (reitit-ring/ring-handler
   (reitit-ring/router
    [["/parse/diagram" {:post {:handler parse-handler}}]])))

(defn -main [& args]
  (let [port (Integer/parseInt (or (System/getenv "PORT") "8080"))]
    (server/run-server app {:port port})
    (println (str "Server running on http://localhost:" port))))
