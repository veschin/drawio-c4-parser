(ns drawio-ui.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [bidi.bidi :as bidi]
            [drawio-ui.storage :as storage]
            [drawio-ui.upload :as upload]
            [drawio-ui.ui-demo :as ui-demo]
            [drawio-ui.components.diagram-selector :as diagram-selector]
            [drawio-ui.components.diff-viewer :as diff-viewer]
            [drawio-ui.components.component-tree :as component-tree]
            [drawio-ui.components.stats-panel :as stats-panel]
            [drawio-ui.state.demo-state]
            [drawio-ui.state.comparison :as comparison]))

(defonce current-route (r/atom {:handler :home :route-params {}}))

(def routes
  ["/" {"" :home
        "upload" :upload
        "diagrams" :diagrams
        "compare" :compare
        "ui-demo" :ui-demo
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
  [:header {:class "bg-background shadow-sm border-b border-border"}
   [:div {:class "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}
    [:div {:class "flex justify-between items-center h-16"}
     [:h1 {:class "text-2xl font-semibold text-foreground"} "Draw.io C4 Diagram Comparison"]
     [:nav {:class "flex space-x-4"}
      [:a {:href "/" :class "text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"} "Home"]
      [:a {:href "/upload" :class "text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"} "Upload"]
      [:a {:href "/diagrams" :class "text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"} "Diagrams"]
      [:a {:href "/compare" :class "text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"} "Compare"]
      [:a {:href "/ui-demo" :class "text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"} "UI Demo"]]]]])

(defn home-page []
  [:div {:class "min-h-screen bg-background"}
   [:div {:class "container mx-auto px-4 py-8"}
    [:div {:class "max-w-4xl mx-auto text-center space-y-8"}
     [:div {:class "space-y-4"}
      [:h2 {:class "text-4xl font-bold tracking-tight text-foreground"} "Welcome to Draw.io C4 Diagram Comparison"]
      [:p {:class "text-xl text-muted-foreground"} "Upload your Draw.io diagrams and compare versions with advanced diff analysis."]]

     [:div {:class "grid grid-cols-1 md:grid-cols-3 gap-6 py-8"}
      [:div {:class "p-6 rounded-lg border bg-card text-card-foreground shadow-sm"}
       [:h3 {:class "text-lg font-semibold mb-2"} "Upload & Parse"]
       [:p {:class "text-muted-foreground"} "Support for PNG with embedded XML, raw XML, and paste data from Draw.io"]]
      [:div {:class "p-6 rounded-lg border bg-card text-card-foreground shadow-sm"}
       [:h3 {:class "text-lg font-semibold mb-2"} "Version Timeline"]
       [:p {:class "text-muted-foreground"} "Automatic versioning with timestamp-based history"]]
      [:div {:class "p-6 rounded-lg border bg-card text-card-foreground shadow-sm"}
       [:h3 {:class "text-lg font-semibold mb-2"} "Advanced Comparison"]
       [:p {:class "text-muted-foreground"} "Deep diff analysis with similarity scoring and change categorization"]]]

     [:div {:class "flex justify-center gap-4"}
      [:a {:href "/compare"
           :class "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"}
       "Compare Diagrams"]
      [:a {:href "/upload"
           :class "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"}
       "Upload"]
      [:a {:href "/ui-demo"
           :class "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"}
       "UI Demo"]]]]])

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

(defn comparison-page []
  "Main comparison page with diagram selector, diff viewer, and analytics"
  (r/create-class
   {:component-did-mount
    (fn []
      (rf/dispatch [::comparison/initialize])
      (rf/dispatch [::comparison/load-available-diagrams]))

    :reagent-render
    (fn []
      (let [comparison-status @(rf/subscribe [::comparison/comparison-status])]
        [:div {:class "min-h-screen bg-background"}
         [:div {:class "container mx-auto px-4 py-6"}
          [:div {:class "space-y-6"}

           ;; Page header
           [:div {:class "text-center space-y-2"}
            [:h1 {:class "text-3xl font-bold tracking-tight"} "Diagram Comparison"]
            [:p {:class "text-muted-foreground"}
             "Select two diagrams to analyze differences and similarities"]]

           (case comparison-status
             :idle
             [:div {:class "space-y-6"}
              [diagram-selector/diagram-selector]]

             :selecting
             [:div {:class "space-y-6"}
              [diagram-selector/diagram-selector]]

             :comparing
             [:div {:class "space-y-6"}
              [diagram-selector/diagram-selector]
              [:div {:class "h-64 flex items-center justify-center"}
               [:div {:class "text-center space-y-4"}
                [:div {:class "animate-spin text-4xl"} "⏳"]
                [:div {:class "text-lg font-medium"} "Analyzing differences..."]
                [:div {:class "text-sm text-muted-foreground"} "This may take a few moments"]]]]

             :completed
             [:div {:class "space-y-6"}
              [:div {:class "bg-muted/30 rounded-lg p-4"}
               [:div {:class "flex items-center justify-between mb-4"}
                [:h3 {:class "text-lg font-semibold"} "Selected Diagrams"]
                [:button {:class "text-sm text-primary hover:underline"
                          :on-click #(rf/dispatch [::comparison/reset-comparison-state])}
                 "Select Different Diagrams"]]
               [:div {:class "grid grid-cols-1 md:grid-cols-2 gap-4"}
                (let [diagram-a @(rf/subscribe [::comparison/selected-diagram :a])
                      diagram-b @(rf/subscribe [::comparison/selected-diagram :b])]
                  [:<>
                   [:div {:class "flex items-center gap-3 p-3 bg-card rounded border"}
                    [:div {:class "w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold"} "A"]
                    [:div {:class "flex-1 min-w-0"}
                     [:div {:class "font-medium truncate"} (:name diagram-a)]
                     [:div {:class "text-sm text-muted-foreground"}
                      (str (:element-count diagram-a 0) " elements")]]]

                   [:div {:class "flex items-center gap-3 p-3 bg-card rounded border"}
                    [:div {:class "w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold"} "B"]
                    [:div {:class "flex-1 min-w-0"}
                     [:div {:class "font-medium truncate"} (:name diagram-b)]
                     [:div {:class "text-sm text-muted-foreground"}
                      (str (:element-count diagram-b 0) " elements")]]]])]]

              [:div {:class "grid grid-cols-1 xl:grid-cols-4 gap-6"}
               [:div {:class "xl:col-span-1 space-y-6"}
                [component-tree/component-tree-container]
                [stats-panel/stats-panel-mini]]

               [:div {:class "xl:col-span-3"}
                [diff-viewer/diff-viewer-container]]]

              [:div {:class "bg-muted/20 rounded-lg p-6"}
               [stats-panel/stats-panel-container]]]

             :error
             [:div {:class "space-y-6"}
              [diagram-selector/diagram-selector]
              [:div {:class "h-64 flex items-center justify-center"}
               [:div {:class "text-center space-y-4"}
                [:div {:class "text-4xl text-red-500"} "⚠️"]
                [:div {:class "text-lg font-medium text-red-600"} "Comparison Failed"]
                [:div {:class "text-sm text-muted-foreground"} "Please try selecting different diagrams"]
                [:button {:class "inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent px-4 py-2"
                          :on-click #(rf/dispatch [::comparison/reset-comparison-state])}
                 "Try Again"]]]]

             [:div {:class "space-y-6"}
              [diagram-selector/diagram-selector]])

           (when-let [notification @(rf/subscribe [::comparison/notification])]
             [:div {:class "fixed top-4 right-4 z-50"}
              [:div {:class "bg-card border rounded-lg shadow-lg p-4 max-w-sm"}
               [:div {:class "flex items-center justify-between"}
                [:span {:class "text-sm"} notification]
                [:button {:class "text-muted-foreground hover:text-foreground ml-2"
                          :on-click #(rf/dispatch [::comparison/clear-notification])}
                 "×"]]]])]]]))}))

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
      :compare [comparison-page]
      :diagram [diagram-page]
      :ui-demo [ui-demo/ui-demo-page]
      [not-found-page])]])

(defn ^:export init []
  ;; Initialize Re-frame
  (rf/dispatch-sync [::drawio-ui.state.demo-state/initialize-db])

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
