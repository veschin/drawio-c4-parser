(ns drawio-ui.ui-demo
  "UI Demo page for theme and component selection"
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [drawio-ui.components.ui.button :refer [button primary-button secondary-button outline-button ghost-button]]
            [drawio-ui.components.ui.card :refer [card card-header card-title card-description card-content card-footer]]
            [drawio-ui.components.ui.badge :refer [badge status-badge count-badge]]
            [drawio-ui.components.ui.input :refer [input labeled-input search-input textarea]]
            [drawio-ui.components.ui.switch :refer [switch labeled-switch]]
            [drawio-ui.components.demo.theme-selector :refer [theme-selector]]
            [drawio-ui.state.demo-state :as demo]))

(defn demo-section
  "Wrapper component for demo sections"
  [{:keys [title description class-name]} & children]
  [:div {:class (str "space-y-6 " class-name)}
   [:div {:class "space-y-2"}
    [:h2 {:class "text-3xl font-bold tracking-tight"} title]
    (when description
      [:p {:class "text-muted-foreground"} description])]
   [:div {:class "space-y-4"}
    children]])

(defn button-showcase []
  [demo-section {:title "Button Showcase" 
                 :description "Interactive buttons with click handlers and loading states"}
   
   ;; Variants section
   [:div {:class "space-y-4"}
    [:h3 {:class "text-xl font-semibold"} "Variants"]
    [:div {:class "flex flex-wrap gap-4"}
     [primary-button {:on-click #(rf/dispatch [::demo/show-notification "Default button clicked!"])} "Default"]
     [secondary-button {:on-click #(rf/dispatch [::demo/show-notification "Secondary button clicked!"])} "Secondary"]
     [outline-button {:on-click #(rf/dispatch [::demo/show-notification "Outline button clicked!"])} "Outline"]
     [ghost-button {:on-click #(rf/dispatch [::demo/show-notification "Ghost button clicked!"])} "Ghost"]
     [button {:variant "destructive" :on-click #(rf/dispatch [::demo/show-notification "Destructive action triggered!"])} "Destructive"]
     [button {:variant "link" :on-click #(rf/dispatch [::demo/show-notification "Link clicked!"])} "Link"]]]
   
   ;; Sizes section
   [:div {:class "space-y-4"}
    [:h3 {:class "text-xl font-semibold"} "Sizes"]
    [:div {:class "flex items-center gap-4"}
     [button {:size "sm" :on-click #(rf/dispatch [::demo/increment-counter])} "Small (+)"]
     [button {:size "default" :on-click #(rf/dispatch [::demo/increment-counter])} "Default (+)"]
     [button {:size "lg" :on-click #(rf/dispatch [::demo/increment-counter])} "Large (+)"]]]
   
   ;; Interactive states
   [:div {:class "space-y-4"}
    [:h3 {:class "text-xl font-semibold"} "States"]
    [:div {:class "flex flex-wrap gap-4"}
     [button {:disabled true} "Disabled"]
     [button {:on-click #(rf/dispatch [::demo/toggle-loading])} 
      (if @(rf/subscribe [::demo/loading?]) "Loading..." "Toggle Loading")]
     [button {:variant "outline"} 
      (str "Counter: " @(rf/subscribe [::demo/click-counter]))]]]])

(defn input-showcase []
  [demo-section {:title "Input Components"
                 :description "Various input types with live state management"}
   
   [:div {:class "grid grid-cols-1 md:grid-cols-2 gap-6"}
    ;; Regular inputs
    [:div {:class "space-y-4"}
     [:h3 {:class "text-xl font-semibold"} "Text Inputs"]
     [labeled-input {:label "Name" 
                     :description "Enter your full name"
                     :input-props {:placeholder "John Doe"
                                   :value @(rf/subscribe [::demo/form-field :name])
                                   :on-change #(rf/dispatch [::demo/update-form-field :name (-> % .-target .-value)])}}]
     
     [labeled-input {:label "Email" 
                     :input-props {:type "email"
                                   :placeholder "john@example.com"
                                   :value @(rf/subscribe [::demo/form-field :email])
                                   :on-change #(rf/dispatch [::demo/update-form-field :email (-> % .-target .-value)])}}]
     
     [search-input {:placeholder "Search components..."
                    :value @(rf/subscribe [::demo/form-field :search])
                    :on-change #(rf/dispatch [::demo/update-form-field :search (-> % .-target .-value)])}]]
    
    ;; Textarea and switches
    [:div {:class "space-y-4"}
     [:h3 {:class "text-xl font-semibold"} "Other Controls"]
     [:div {:class "space-y-3"}
      [:label {:class "text-sm font-medium"} "Description"]
      [textarea {:placeholder "Enter description..."
                 :rows 4
                 :value @(rf/subscribe [::demo/form-field :description])
                 :on-change #(rf/dispatch [::demo/update-form-field :description (-> % .-target .-value)])}]]
     
     [labeled-switch {:label "Enable notifications"
                      :description "Receive email updates"
                      :switch-props {:checked @(rf/subscribe [::demo/form-field :notifications])
                                     :on-change #(rf/dispatch [::demo/update-form-field :notifications %])}}]
     
     [labeled-switch {:label "Dark mode"
                      :description "Switch to dark theme"
                      :switch-props {:checked (= "dark" @(rf/subscribe [::demo/theme-mode]))
                                     :on-change #(rf/dispatch [::demo/set-theme-mode (if % "dark" "light")])}}]]]])

(defn badge-showcase []
  [demo-section {:title "Badges & Status"
                 :description "Various badge types and status indicators"}
   
   [:div {:class "space-y-6"}
    ;; Variant badges
    [:div {:class "space-y-4"}
     [:h3 {:class "text-xl font-semibold"} "Badge Variants"]
     [:div {:class "flex flex-wrap gap-3"}
      [badge {:variant "default"} "Default"]
      [badge {:variant "secondary"} "Secondary"]  
      [badge {:variant "destructive"} "Destructive"]
      [badge {:variant "outline"} "Outline"]]]
    
    ;; Status badges
    [:div {:class "space-y-4"}
     [:h3 {:class "text-xl font-semibold"} "Status Indicators"]
     [:div {:class "flex flex-wrap gap-3"}
      [status-badge {:status "success"} "Online"]
      [status-badge {:status "warning"} "Pending"]
      [status-badge {:status "error"} "Error"]
      [status-badge {:status "info"} "Info"]]]
    
    ;; Count badges
    [:div {:class "space-y-4"}
     [:h3 {:class "text-xl font-semibold"} "Interactive Counters"]
     [:div {:class "flex flex-wrap gap-4 items-center"}
      [:span "Notifications"]
      [count-badge {:count @(rf/subscribe [::demo/click-counter])}]
      [:span "Messages"]
      [count-badge {:count 99 :max 50}]
      [button {:variant "outline" :size "sm"
               :on-click #(rf/dispatch [::demo/increment-counter])} 
       "Add Notification"]]]]])

(defn card-showcase []
  [demo-section {:title "Card Showcase"
                 :description "Interactive cards with live data"}
   
   [:div {:class "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}
    
    ;; Live stats card
    [card {:class-name "bg-gradient-to-br from-primary/5 to-secondary/5"}
     [card-header {}
      [card-title {:class-name "flex items-center gap-2"} 
       "📊 Live Statistics"
       [count-badge {:count @(rf/subscribe [::demo/click-counter])}]]
      [card-description {} "Real-time interaction metrics and demo state"]]
     [card-content {}
      [:div {:class "space-y-4"}
       [:div {:class "grid grid-cols-2 gap-4"}
        [:div {:class "text-center p-3 bg-primary/10 rounded-lg"}
         [:div {:class "text-2xl font-bold text-primary"} @(rf/subscribe [::demo/click-counter])]
         [:div {:class "text-xs text-muted-foreground"} "Button Clicks"]]
        [:div {:class "text-center p-3 bg-secondary/10 rounded-lg"}
         [:div {:class "text-lg font-bold text-secondary-foreground capitalize"} @(rf/subscribe [::demo/theme-mode])]
         [:div {:class "text-xs text-muted-foreground"} "Theme Mode"]]]
       [:div {:class "flex justify-between items-center p-2 bg-muted/50 rounded"}
        [:span {:class "text-sm"} "System Status:"]
        [status-badge {:status (if @(rf/subscribe [::demo/loading?]) "warning" "success")}
         (if @(rf/subscribe [::demo/loading?]) "🔄 Processing" "✅ Ready")]]]]
     [card-footer {:class-name "pt-4"}
      [outline-button {:size "sm"
                       :on-click #(rf/dispatch [::demo/reset-counters])} "🔄 Reset Stats"]]]
    
    ;; Form preview card
    [card {:class-name "bg-gradient-to-br from-accent/5 to-muted/10"}
     [card-header {}
      [card-title {:class-name "flex items-center gap-2"} 
       "📝 Form State"
       [badge {:variant "secondary"} "Live"]]
      [card-description {} "Real-time form data synchronization"]]
     [card-content {}
      [:div {:class "space-y-3"}
       [:div {:class "grid gap-3"}
        [:div {:class "flex items-center justify-between p-2 bg-card rounded border"}
         [:span {:class "text-sm font-medium"} "👤 Name:"]
         [:span {:class "text-sm text-muted-foreground"} 
          (if-let [name @(rf/subscribe [::demo/form-field :name])]
            (if (empty? name) "Not set" name)
            "Not set")]]
        [:div {:class "flex items-center justify-between p-2 bg-card rounded border"}
         [:span {:class "text-sm font-medium"} "📧 Email:"]
         [:span {:class "text-sm text-muted-foreground"}
          (if-let [email @(rf/subscribe [::demo/form-field :email])]
            (if (empty? email) "Not set" email)
            "Not set")]]
        [:div {:class "flex items-center justify-between p-2 bg-card rounded border"}
         [:span {:class "text-sm font-medium"} "🔍 Search:"]
         [:span {:class "text-sm text-muted-foreground"}
          (if-let [search @(rf/subscribe [::demo/form-field :search])]
            (if (empty? search) "Not set" search)
            "Not set")]]
        [:div {:class "flex items-center justify-between p-2 bg-card rounded border"}
         [:span {:class "text-sm font-medium"} "🔔 Notifications:"]
         [badge {:variant (if @(rf/subscribe [::demo/form-field :notifications]) "default" "outline")}
          (if @(rf/subscribe [::demo/form-field :notifications]) "Enabled" "Disabled")]]]]]
     [card-footer {:class-name "pt-4"}
      [secondary-button {:size "sm"
                         :on-click #(rf/dispatch [::demo/clear-form])} "🗑️ Clear Form"]]]
    
    ;; Theme info card  
    [card {:class-name "bg-gradient-to-br from-secondary/5 to-primary/5 border-primary/20"}
     [card-header {}
      [card-title {:class-name "flex items-center gap-2"} 
       "🎨 Theme Configuration"
       [badge {:variant "outline"} "Active"]]
      [card-description {} "Current palette and visual settings"]]
     [card-content {}
      (let [palette-data @(rf/subscribe [::demo/current-palette-data])]
        [:div {:class "space-y-4"}
         [:div {:class "grid grid-cols-1 gap-3"}
          [:div {:class "flex items-center justify-between p-3 bg-primary/10 rounded-lg"}
           [:span {:class "text-sm font-medium"} "🎭 Palette:"]
           [:span {:class "font-semibold text-primary"} (:name palette-data "None")]]
          [:div {:class "flex items-center justify-between p-3 bg-secondary/10 rounded-lg"}
           [:span {:class "text-sm font-medium"} "🌙 Mode:"]
           [badge {:variant "secondary" :class-name "capitalize"} @(rf/subscribe [::demo/theme-mode])]]
          [:div {:class "flex items-center justify-between p-3 bg-accent/10 rounded-lg"}
           [:span {:class "text-sm font-medium"} "📐 Radius:"]
           [:span {:class "font-mono text-sm"} @(rf/subscribe [::demo/theme-radius])]]]
         [:div {:class "space-y-2"}
          [:span {:class "text-sm font-medium"} "🎨 Color Preview:"]
          [:div {:class "flex space-x-2"}
           (for [color-key [:primary :secondary :accent :muted]]
             (let [color-value (get (:colors palette-data {}) color-key "0 0% 50%")]
               ^{:key color-key}
               [:div {:class "flex flex-col items-center gap-1"}
                [:div {:class "w-8 h-8 rounded-lg border-2 border-border shadow-sm"
                       :style {:background-color (str "hsl(" color-value ")")}}]
                [:span {:class "text-xs text-muted-foreground capitalize"} (name color-key)]]))]]])]
     [card-footer {:class-name "pt-4"}
      [primary-button {:size "sm"
                       :on-click #(rf/dispatch [::demo/reset-to-defaults])} "🔄 Reset Theme"]]]]])

(defn notification-area []
  "Display notifications from user interactions"
  (let [notification @(rf/subscribe [::demo/current-notification])]
    (when notification
      [:div {:class "fixed top-4 right-4 z-50 transition-all duration-300"}
       [card {:class-name "w-80"}
        [card-header {:class-name "pb-2"}
         [card-title {:class-name "text-base flex items-center justify-between"}
          "Notification"
          [:button {:class "text-muted-foreground hover:text-foreground"
                    :on-click #(rf/dispatch [::demo/clear-notification])}
           "×"]]]
        [card-content {}
         [:p {:class "text-sm"} notification]]]])))

(defn demo-stats-bar []
  "Top stats bar showing live demo statistics"
  [:div {:class "bg-muted/30 border-b"}
   [:div {:class "container mx-auto px-4 py-3"}
    [:div {:class "flex items-center justify-between text-sm"}
     [:div {:class "flex items-center space-x-6"}
      [:div {:class "flex items-center space-x-2"}
       [:span {:class "text-muted-foreground"} "Clicks:"]
       [count-badge {:count @(rf/subscribe [::demo/click-counter])}]]
      [:div {:class "flex items-center space-x-2"}
       [:span {:class "text-muted-foreground"} "Theme:"]
       [badge {:variant "outline" :class-name "capitalize"} @(rf/subscribe [::demo/theme-mode])]]
      [:div {:class "flex items-center space-x-2"}
       [:span {:class "text-muted-foreground"} "Palette:"]
       [:span {:class "font-medium"} (:name @(rf/subscribe [::demo/current-palette-data]) "None")]]]
     [:div
      [button {:variant "ghost" :size "sm"
               :on-click #(rf/dispatch [::demo/reset-all-state])}
       "Reset All"]]]]])

(defn ui-demo-page []
  ;; Initialize Re-frame state on component mount
  (r/create-class
   {:component-did-mount
    (fn [] (rf/dispatch [::demo/initialize-demo-state]))
    
    :reagent-render
    (fn []
      [:div {:class "min-h-screen bg-background"}
       [:div {:style {:display "none"}} 
        (js/console.log "UI Demo page rendered!" (str "Counter: " @(rf/subscribe [::demo/click-counter])))]
       [notification-area]
       [demo-stats-bar]
       
       [:div {:class "container mx-auto px-4 py-8 space-y-16"}
        
        ;; Header
        [:div {:class "text-center space-y-6 py-8"}
         [:div {:class "space-y-4"}
          [:h1 {:class "text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"} 
           "UI Component Demo"]
          [:p {:class "text-xl text-muted-foreground max-w-3xl mx-auto"} 
           "Interactive showcase of shadcn/ui components with live theme selection. Choose your palette, customize settings, and see changes applied in real-time."]]
         [:div {:class "flex justify-center gap-4"}
          [primary-button {:size "lg"
                           :on-click #(rf/dispatch [::demo/toggle-export-modal])} 
           "🎨 Export Theme"]
          [outline-button {:size "lg"
                           :on-click #(rf/dispatch [::demo/show-notification "Import feature coming soon! 🚀"])} 
           "📥 Import Config"]
          [button {:variant "ghost" :size "lg"
                   :on-click #(rf/dispatch [::demo/show-notification "GitHub repository coming soon! ⭐"])}
           "⭐ Star on GitHub"]]]
        
        ;; Main Theme Selector
        [theme-selector]
        
        ;; Component Showcases
        [input-showcase]
        [badge-showcase] 
        [button-showcase]
        [card-showcase]]])}))