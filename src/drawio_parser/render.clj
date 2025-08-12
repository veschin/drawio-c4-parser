(ns drawio-parser.render
  (:require [clj-chrome-devtools.core :as chrome]
            [clj-chrome-devtools.commands.page :as page]
            [clj-chrome-devtools.commands.runtime :as runtime]
            [clojure.string :as str]))

(def ^:private chrome-config
  {:host "localhost"
   :port 9222
   :timeout 30000})

(defn- start-chrome-if-needed
  "Start headless Chrome if not already running"
  []
  (try
    (chrome/connect (:host chrome-config) (:port chrome-config))
    (catch Exception _
      ;; Chrome not running, attempt to start it
      (let [pb (ProcessBuilder. ["google-chrome"
                                 "--headless" 
                                 "--no-sandbox"
                                 "--disable-gpu"
                                 "--disable-dev-shm-usage"
                                 (str "--remote-debugging-port=" (:port chrome-config))])]
        (.start pb)
        ;; Wait a moment for Chrome to start
        (Thread/sleep 2000)
        (chrome/connect (:host chrome-config) (:port chrome-config))))))

(defn- escape-js-string
  "Escape string for JavaScript injection"
  [s]
  (-> s
      (str/replace "\\" "\\\\")
      (str/replace "\"" "\\\"")
      (str/replace "\n" "\\n")
      (str/replace "\r" "\\r")))

(defn- wait-for-condition
  "Wait for JavaScript condition to be true"
  [connection condition-js timeout-ms]
  (let [start-time (System/currentTimeMillis)
        check-interval 500]
    (loop []
      (let [result (runtime/evaluate connection {:expression condition-js})
            elapsed (- (System/currentTimeMillis) start-time)]
        (cond
          (get-in result [:result :value]) :success
          (> elapsed timeout-ms) :timeout
          :else (do (Thread/sleep check-interval) (recur)))))))

(defn render-diagram-to-png
  "Convert Draw.io XML to PNG using headless Chrome automation"
  [xml-data options]
  (let [connection (start-chrome-if-needed)
        {:keys [width height theme] 
         :or {width 800 height 600 theme "white"}} options]
    (try
      ;; Navigate to Draw.io embed interface
      (page/navigate connection {:url "https://embed.diagrams.net"})
      
      ;; Wait for page load - use simple sleep as load-event-fired doesn't exist
      (Thread/sleep 3000)
      
      ;; Wait for Draw.io to be ready
      (wait-for-condition connection 
                          "typeof EditorUi !== 'undefined'" 
                          10000)
      
      ;; Load the XML data
      (let [escaped-xml (escape-js-string xml-data)
            load-script (str "
              try {
                var ui = EditorUi.prototype;
                window.postMessage({
                  event: 'configure',
                  config: {theme: '" theme "'}
                }, '*');
                
                window.postMessage({
                  event: 'load',
                  xml: '" escaped-xml "'
                }, '*');
                
                window.diagramLoaded = true;
              } catch(e) {
                console.error('Load error:', e);
                window.diagramLoadError = e.message;
              }")]
        (runtime/evaluate connection {:expression load-script}))
      
      ;; Wait for diagram to load
      (wait-for-condition connection
                          "window.diagramLoaded === true || window.diagramLoadError"
                          5000)
      
      ;; Check for load errors
      (let [error-check (runtime/evaluate connection 
                                          {:expression "window.diagramLoadError"})]
        (when (get-in error-check [:result :value])
          (throw (ex-info "Failed to load diagram in Draw.io" 
                         {:error (get-in error-check [:result :value])}))))
      
      ;; Export as PNG
      (let [export-script (str "
              try {
                window.postMessage({
                  event: 'export',
                  format: 'png',
                  w: " width ",
                  h: " height ",
                  bg: '" (if (= theme "dark") "#2a2a2a" "#ffffff") "'
                }, '*');
                window.exportRequested = true;
              } catch(e) {
                window.exportError = e.message;
              }")]
        (runtime/evaluate connection {:expression export-script}))
      
      ;; Wait for export completion and get result
      (wait-for-condition connection
                          "window.exportResult || window.exportError"
                          10000)
      
      (let [result (runtime/evaluate connection 
                                     {:expression "window.exportResult"})
            error (runtime/evaluate connection 
                                   {:expression "window.exportError"})]
        (cond
          (get-in error [:result :value])
          (throw (ex-info "Export failed" 
                         {:error (get-in error [:result :value])}))
          
          (get-in result [:result :value])
          {:format "png"
           :data (get-in result [:result :value])
           :width width
           :height height}
          
          :else
          (throw (ex-info "Export timeout or unknown error" {}))))
      
      (catch Exception e
        (throw (ex-info "Rendering failed" 
                       {:error (.getMessage e)} e))))))

(defn render-diagram-to-svg
  "Convert Draw.io XML to SVG using headless Chrome automation"
  [xml-data options]
  ;; Similar implementation but with format: 'svg'
  (let [png-result (render-diagram-to-png xml-data 
                                          (assoc options :format "svg"))]
    (assoc png-result :format "svg")))

(defn health-check
  "Check if headless Chrome is available"
  []
  (try
    (chrome/connect (:host chrome-config) (:port chrome-config))
    {:status :ok :chrome-version "headless"}
    (catch Exception e
      {:status :error :message (.getMessage e)})))

(comment
  ;; Usage examples:
  (health-check)
  
  (render-diagram-to-png 
    "<mxfile><diagram>...</diagram></mxfile>"
    {:width 1024 :height 768 :theme "white"}))