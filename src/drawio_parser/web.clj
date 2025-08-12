(ns drawio-parser.web
  (:require [org.httpkit.server :as server]
            [reitit.ring :as reitit-ring]
            [cheshire.core :as json]
            [clojure.java.io :as io]
            [drawio-parser.core :as core]
            [drawio-parser.png :as png]
            [drawio-parser.render :as render]
            )
  (:gen-class))

(defn- json-response 
  "Create JSON response with appropriate headers"
  ([data] (json-response 200 data))
  ([status data]
   {:status status
    :headers {"Content-Type" "application/json"}
    :body (json/generate-string data)}))

(defn- handle-parsing-request [body-str reader-fn]
  (try
    (->> body-str
         reader-fn
         core/parse-diagram
         core/enrich-with-containment
         json-response)
    (catch Exception e
      (json-response 400 {:error "Failed to parse input"
                          :message (.getMessage e)}))))

(defn- export-handler [request]
  (handle-parsing-request (slurp (:body request))
                          #(io/reader (.getBytes % "UTF-8"))))

(defn- paste-handler [request]
  (handle-parsing-request (slurp (:body request))
                          core/decode-and-read))

(defn- png-handler 
  "Handle PNG file upload with embedded Draw.io XML extraction"
  [request]
  (try
    (let [png-bytes (.readAllBytes (:body request))
          xml-data (png/extract-drawio-xml png-bytes)]
      (->> xml-data
           (#(.getBytes % "UTF-8"))
           io/reader
           core/parse-diagram
           core/enrich-with-containment
           json-response))
    (catch Exception e
      (json-response 400 {:error "Failed to parse PNG or extract Draw.io data"
                          :message (.getMessage e)}))))

(defn- render-png-handler 
  "Render Draw.io XML to PNG using headless Chrome"
  [request]
  (try
    (let [{:keys [xml] :as body} (json/parse-string (slurp (:body request)) true)
          options (select-keys body [:width :height :theme])]
      (->> (render/render-diagram-to-png xml options)
           json-response))
    (catch Exception e
      (json-response 500 {:error "Failed to render diagram"
                          :message (.getMessage e)}))))

(defn- render-svg-handler 
  "Render Draw.io XML to SVG using headless Chrome"
  [request]
  (try
    (let [{:keys [xml] :as body} (json/parse-string (slurp (:body request)) true)
          options (select-keys body [:width :height :theme])]
      (->> (render/render-diagram-to-svg xml options)
           json-response))
    (catch Exception e
      (json-response 500 {:error "Failed to render diagram"
                          :message (.getMessage e)}))))

(defn- health-handler 
  "Health check for rendering capabilities"
  [_request]
  (let [{:keys [status] :as health} (render/health-check)]
    (json-response (if (= :ok status) 200 503) health)))

(defn- spa-handler 
  "Serve index.html for SPA client-side routing"
  [_request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (slurp (io/resource "public/index.html"))})

(def app
  (reitit-ring/ring-handler
   (reitit-ring/router
    ["/api/v1"
     ["/parse/export" {:post {:handler export-handler}}]
     ["/parse/paste" {:post {:handler paste-handler}}]
     ["/parse/png" {:post {:handler png-handler}}]
     ["/render/png" {:post {:handler render-png-handler}}]
     ["/render/svg" {:post {:handler render-svg-handler}}]
     ["/health" {:get {:handler health-handler}}]
     ])))

(defn -main [& _args]
  (let [port (Integer/parseInt (or (System/getenv "DP_PORT") "8080"))]
    (server/run-server app {:port port})
    (println (str "Server running on http://localhost:" port))))