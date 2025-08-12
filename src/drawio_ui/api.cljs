(ns drawio-ui.api
  (:require [ajax.core :as ajax]
            [cljs.core.async :as async :refer [chan put! <!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def api-base "/api/v1")

(defn- api-url [endpoint]
  (str api-base endpoint))

(defn- handle-response [response-chan]
  (fn [response]
    (put! response-chan {:success true :data response})))

(defn- handle-error [response-chan]
  (fn [error]
    (let [message (or (get-in error [:response :message])
                      (get-in error [:response :error])
                      "Unknown error occurred")]
      (put! response-chan {:success false :error message}))))

(defn parse-export 
  "Parse Draw.io XML export data"
  [xml-data]
  (let [response-chan (chan)]
    (ajax/POST (api-url "/parse/export")
               {:body xml-data
                :format :raw
                :response-format :json
                :keywords? true
                :handler (handle-response response-chan)
                :error-handler (handle-error response-chan)})
    response-chan))

(defn parse-paste 
  "Parse Draw.io paste data (URL-encoded)"
  [paste-data]
  (let [response-chan (chan)]
    (ajax/POST (api-url "/parse/paste")
               {:body paste-data
                :format :raw
                :response-format :json
                :keywords? true
                :handler (handle-response response-chan)
                :error-handler (handle-error response-chan)})
    response-chan))

(defn parse-png 
  "Parse PNG file with embedded Draw.io data"
  [png-file]
  (let [response-chan (chan)
        form-data (js/FormData.)]
    (.append form-data "file" png-file)
    (ajax/POST (api-url "/parse/png")
               {:body png-file
                :format :raw
                :response-format :json
                :keywords? true
                :handler (handle-response response-chan)
                :error-handler (handle-error response-chan)})
    response-chan))

(defn render-png 
  "Render Draw.io XML to PNG using headless Chrome"
  [xml-data options]
  (let [response-chan (chan)
        body {:xml xml-data
              :width (:width options 800)
              :height (:height options 600)
              :theme (:theme options "white")}]
    (ajax/POST (api-url "/render/png")
               {:params body
                :format :json
                :response-format :json
                :keywords? true
                :handler (handle-response response-chan)
                :error-handler (handle-error response-chan)})
    response-chan))

(defn render-svg 
  "Render Draw.io XML to SVG using headless Chrome"
  [xml-data options]
  (let [response-chan (chan)
        body {:xml xml-data
              :width (:width options 800)
              :height (:height options 600)
              :theme (:theme options "white")}]
    (ajax/POST (api-url "/render/svg")
               {:params body
                :format :json
                :response-format :json
                :keywords? true
                :handler (handle-response response-chan)
                :error-handler (handle-error response-chan)})
    response-chan))

(defn health-check 
  "Check API and rendering service health"
  []
  (let [response-chan (chan)]
    (ajax/GET (api-url "/health")
              {:response-format :json
               :keywords? true
               :handler (handle-response response-chan)
               :error-handler (handle-error response-chan)})
    response-chan))

(defn upload-and-parse 
  "Upload file and parse based on type"
  [file source-type]
  (go
    (try
      (let [file-content (if (= source-type :png)
                          file
                          (<! (js/Promise. (fn [resolve reject]
                                           (let [reader (js/FileReader.)]
                                             (set! (.-onload reader)
                                                   #(resolve (.. % -target -result)))
                                             (set! (.-onerror reader) reject)
                                             (.readAsText reader file))))))
            response-chan (case source-type
                           :png (parse-png file)
                           :export (parse-export file-content)
                           :paste (parse-paste file-content))
            result (<! response-chan)]
        (if (:success result)
          {:success true 
           :data (:data result)
           :raw-content (if (= source-type :png) nil file-content)}
          result))
      (catch js/Error e
        {:success false :error (str "File processing failed: " (.-message e))}))))

(defn generate-thumbnail 
  "Generate thumbnail image for diagram"
  [xml-data]
  (go
    (let [response-chan (render-png xml-data {:width 200 :height 150 :theme "white"})
          result (<! response-chan)]
      (if (:success result)
        (:data result)
        nil))))