(ns drawio-parser.render
  (:require [clj-http.client :as http]
            [cheshire.core :as json]
            [clojure.string :as str]))

(def ^:private renderer-config
  {:base-url (or (System/getenv "RENDERER_URL") "http://localhost:5000")
   :timeout 30000
   :convert-endpoint "/convert_file"})

(defn- build-convert-url
  "Build the convert_file endpoint URL with query parameters"
  [options]
  (let [base (str (:base-url renderer-config) (:convert-endpoint renderer-config))
        params (remove nil? [(when (:quality options) (str "quality=" (:quality options)))
                             (when (:transparent options) "transparent=true")
                             (when (:border options) (str "border=" (:border options)))
                             (when (:scale options) (str "scale=" (:scale options)))
                             (when (:width options) (str "width=" (:width options)))
                             (when (:height options) (str "height=" (:height options)))
                             (when (:crop options) "crop=true")])]
    (if (empty? params)
      base
      (str base "?" (str/join "&" params)))))

(defn- make-convert-request
  "Make HTTP request to the renderer service"
  [xml-data accept-header options]
  (try
    (http/post (build-convert-url options)
               {:body xml-data
                :headers {"Accept" accept-header
                          "Content-Type" "application/xml"}
                :timeout (:timeout renderer-config)
                :as :byte-array})
    (catch Exception e
      (throw (ex-info "Failed to communicate with renderer service" 
                      {:error (.getMessage e)} e)))))


(defn render-diagram-to-png
  "Convert Draw.io XML to PNG using Docker renderer service"
  [xml-data options]
  (let [response (make-convert-request xml-data "image/png" options)]
    (if (= 200 (:status response))
      {:format "png"
       :data (:body response)
       :size (count (:body response))}
      (throw (ex-info "PNG rendering failed"
                      {:status (:status response)
                       :message "Renderer service returned error"})))))

(defn render-diagram-to-svg
  "Convert Draw.io XML to SVG using Docker renderer service"
  [xml-data options]
  (let [response (make-convert-request xml-data "image/svg+xml; charset=utf-8" options)]
    (if (= 200 (:status response))
      {:format "svg"
       :data (String. (:body response) "UTF-8")
       :size (count (:body response))}
      (throw (ex-info "SVG rendering failed"
                      {:status (:status response)
                       :message "Renderer service returned error"})))))

(defn health-check
  "Check if renderer service is available"
  []
  (try
    (let [response (http/get (str (:base-url renderer-config) "/docs")
                             {:timeout 5000
                              :throw-exceptions false})]
      (if (= 200 (:status response))
        {:status :ok
         :message "Renderer service is available"
         :url (:base-url renderer-config)}
        {:status :error
         :message "Renderer service is not responding"
         :url (:base-url renderer-config)
         :http-status (:status response)}))
    (catch Exception e
      {:status :error
       :message "Cannot connect to renderer service"
       :url (:base-url renderer-config)
       :error (.getMessage e)})))

(comment
  ;; Usage examples:
  (health-check)
  
  (render-diagram-to-png 
    "<mxfile><diagram>...</diagram></mxfile>"
    {:width 1024 :height 768 :scale 1.0 :transparent true})
    
  (render-diagram-to-svg
    "<mxfile><diagram>...</diagram></mxfile>"
    {:border 10 :crop true}))