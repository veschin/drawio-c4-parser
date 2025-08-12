(ns drawio-ui.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [bidi.bidi :as bidi]
            [drawio-ui.storage :as storage]
            [drawio-ui.upload :as upload]))

(defonce current-route (r/atom {:handler :home :route-params {}}))

(def routes
  ["/" {"" :home
        "upload" :upload
        "diagrams" :diagrams
        ["diagram/" :id] :diagram}])

(defn- parse-url [url]
  (let [match (bidi/match-route routes url)]
    (or match {:handler :home :route-params {}})))

(defn- set-route! [route]
  (reset! current-route route))

(defn- handle-route-change []
  (let [path (.. js/window -location -pathname)
        route (parse-url path)]
    (set-route! route)))

(defn header []
  [:header.header
   [:div.container
    [:h1.title "Draw.io C4 Diagram Comparison"]
    [:nav.nav
     [:a.nav-link {:href "/"} "Home"]
     [:a.nav-link {:href "/upload"} "Upload"]
     [:a.nav-link {:href "/diagrams"} "Diagrams"]]]])

(defn home-page []
  [:div.page
   [:div.container
    [:h2 "Welcome to Draw.io C4 Diagram Comparison"]
    [:p "Upload your Draw.io diagrams and compare versions with advanced diff analysis."]
    [:div.features
     [:div.feature
      [:h3 "Upload & Parse"]
      [:p "Support for PNG with embedded XML, raw XML, and paste data from Draw.io"]]
     [:div.feature
      [:h3 "Version Timeline"]
      [:p "Automatic versioning with timestamp-based history"]]
     [:div.feature
      [:h3 "Advanced Comparison"]
      [:p "Deep diff analysis with similarity scoring and change categorization"]]]
    [:div.actions
     [:a.btn.btn-primary {:href "/upload"} "Start Uploading"]]]])

(defn upload-page []
  [:div.page
   [:div.container
    [:h2 "Upload Diagram"]
    [upload/upload-component]]])

(defn diagrams-page []
  [:div.page
   [:div.container
    [:h2 "Your Diagrams"]
    [:p "Diagram list will be implemented here"]]])

(defn diagram-page []
  (let [{:keys [id]} (:route-params @current-route)]
    [:div.page
     [:div.container
      [:h2 (str "Diagram: " id)]
      [:p "Diagram details and comparison view will be implemented here"]]]))

(defn not-found-page []
  [:div.page
   [:div.container
    [:h2 "Page Not Found"]
    [:p "The page you're looking for doesn't exist."]
    [:a.btn {:href "/"} "Go Home"]]])

(defn app []
  [:div.app
   [header]
   [:main.main
    (case (:handler @current-route)
      :home [home-page]
      :upload [upload-page]
      :diagrams [diagrams-page]
      :diagram [diagram-page]
      [not-found-page])]])

(defn ^:export init []
  ;; Initialize storage
  (storage/init!)
  
  ;; Set up routing
  (handle-route-change)
  (.addEventListener js/window "popstate" handle-route-change)
  
  ;; Override link clicks for SPA routing
  (.addEventListener js/document "click"
    (fn [e]
      (let [target (.-target e)
            href (.getAttribute target "href")]
        (when (and href
                   (= "A" (.-tagName target))
                   (not (.getAttribute target "target"))
                   (.startsWith href "/"))
          (.preventDefault e)
          (.pushState js/history nil "" href)
          (handle-route-change)))))
  
  ;; Render app
  (rdom/render [app] (.getElementById js/document "app"))
  
  (println "Draw.io UI initialized!"))