(ns drawio-ui.components.demo.theme-selector
  "Theme selector component for UI demo"
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [drawio-ui.lib.utils :refer [cn]]
            [drawio-ui.components.ui.button :refer [button]]
            [drawio-ui.components.ui.card :refer [card card-header card-title card-content]]
            [drawio-ui.components.ui.switch :refer [switch labeled-switch]]
            [drawio-ui.state.demo-state :as demo]))

(defn palette-preview-card
  "Preview card for a color palette"
  [{:keys [palette-key palette selected? on-select]}]
  (let [{:keys [name description colors]} palette
        is-selected? (= palette-key selected?)]
    [card {:class-name (cn
                        "cursor-pointer transition-all hover:shadow-md"
                        (if is-selected?
                          "ring-2 ring-primary ring-offset-2"
                          "hover:border-muted-foreground/50"))
           :on-click #(on-select palette-key)}
     [card-header {:class-name "pb-2"}
      [card-title {:class-name "text-base flex items-center justify-between"}
       name
       (when is-selected?
         [:div {:class "w-2 h-2 rounded-full bg-primary"}])]]
     [card-content {}
      [:div {:class "space-y-3"}
       [:p {:class "text-xs text-muted-foreground"} description]
       ;; Color swatches
       [:div {:class "grid grid-cols-5 gap-1"}
        (for [color-key [:primary :secondary :muted :border :accent]]
          (let [hsl-value (get colors color-key "0 0% 50%")]
            ^{:key color-key}
            [:div {:class "w-6 h-6 rounded-sm border border-border/50"
                   :style {:background-color (str "hsl(" hsl-value ")")}}]))]
       ;; Quick stats
       [:div {:class "text-xs text-muted-foreground"}
        (str (count colors) " colors")]]]]))

(defn theme-mode-toggle
  "Toggle for light/dark/system mode"
  []
  (let [current-mode @(rf/subscribe [::demo/theme-mode])]
    [:div {:class "space-y-4"}
     [:h3 {:class "text-sm font-medium"} "Theme Mode"]
     [:div {:class "flex space-x-2"}
      (for [mode ["light" "dark" "system"]]
        ^{:key mode}
        [button {:variant (if (= current-mode mode) "default" "outline")
                 :size "sm"
                 :class-name "capitalize"
                 :on-click #(rf/dispatch [::demo/set-theme-mode mode])}
         mode])]]))

(defn radius-selector
  "Selector for border radius"
  []
  (let [current-radius @(rf/subscribe [::demo/theme-radius])]
    [:div {:class "space-y-4"}
     [:h3 {:class "text-sm font-medium"} "Border Radius"]
     [:div {:class "grid grid-cols-5 gap-2"}
      (for [radius ["0rem" "0.3rem" "0.5rem" "0.75rem" "1rem"]]
        ^{:key radius}
        [:button {:class (cn
                          "p-3 rounded border-2 text-xs font-medium transition-colors"
                          (if (= current-radius radius)
                            "border-primary bg-primary/10"
                            "border-border hover:border-muted-foreground"))
                  :on-click #(rf/dispatch [::demo/set-theme-radius radius])}
         [:div {:class "w-full h-4 bg-foreground rounded"
                :style {:border-radius radius}}]
         [:div {:class "mt-1"} radius]])]]))

(defn live-preview
  "Live preview of current theme"
  []
  (let [current-palette-data @(rf/subscribe [::demo/current-palette-data])]
    [:div {:class "space-y-4"}
     [:h3 {:class "text-sm font-medium"} "Live Preview"]
     [:div {:class "p-4 rounded-lg border"}
      [:div {:class "space-y-3"}
       ;; Sample UI elements
       [:div {:class "flex items-center justify-between"}
        [:span {:class "text-sm font-medium"} "Sample Interface"]
        [button {:variant "default" :size "sm"} "Primary"]]
       
       [:div {:class "h-px bg-border"}]
       
       [:div {:class "grid grid-cols-2 gap-4"}
        [:div {:class "space-y-2"}
         [:div {:class "text-xs text-muted-foreground"} "Colors"]
         [:div {:class "flex space-x-1"}
          [:div {:class "w-4 h-4 rounded bg-primary"}]
          [:div {:class "w-4 h-4 rounded bg-secondary"}]
          [:div {:class "w-4 h-4 rounded bg-muted"}]]]
        
        [:div {:class "space-y-2"}
         [:div {:class "text-xs text-muted-foreground"} "Elements"]
         [:div {:class "text-xs p-2 bg-secondary rounded"} "Card"]]]
       
       [:div {:class "text-xs text-muted-foreground"}
        (str "Palette: " (:name current-palette-data))]]]]))

(defn theme-selector
  "Main theme selector component"
  []
  (let [available-palettes @(rf/subscribe [::demo/available-palettes])
        current-palette @(rf/subscribe [::demo/current-palette])]
    
    [:div {:class "space-y-8"}
     ;; Header
     [:div {:class "text-center space-y-2"}
      [:h2 {:class "text-2xl font-bold"} "Choose Your Theme"]
      [:p {:class "text-muted-foreground"} 
       "Select a color palette and customize settings to match your design preferences"]]
     
     ;; Palette Grid
     [:div {}
      [:h3 {:class "text-lg font-semibold mb-4"} "Color Palettes"]
      [:div {:class "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}
       (for [{:keys [key] :as palette-info} available-palettes]
         ^{:key key}
         [palette-preview-card {:palette-key key
                                :palette palette-info
                                :selected? current-palette
                                :on-select #(rf/dispatch [::demo/set-theme-palette %])}])]]
     
     ;; Settings Row
     [:div {:class "grid grid-cols-1 md:grid-cols-3 gap-6"}
      [theme-mode-toggle]
      [radius-selector]
      [live-preview]]
     
     ;; Action Buttons
     [:div {:class "flex justify-center space-x-4"}
      [button {:variant "outline"
               :on-click #(rf/dispatch [::demo/reset-to-defaults])}
       "Reset to Defaults"]
      [button {:variant "default"
               :on-click #(rf/dispatch [::demo/toggle-export-modal])}
       "Export Theme"]]]))