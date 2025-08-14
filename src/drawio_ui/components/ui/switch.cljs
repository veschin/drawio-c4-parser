(ns drawio-ui.components.ui.switch
  "Switch component based on shadcn/ui design"
  (:require [reagent.core :as r]
            [drawio-ui.lib.utils :refer [cn]]))

(defn switch
  "Switch component for boolean toggle
  
  Props:
  - checked: boolean (controlled)
  - default-checked: boolean (uncontrolled)
  - disabled: boolean
  - on-change: function (checked, event) => void
  - class-name: additional CSS classes
  - id: element id"
  [{:keys [checked default-checked disabled on-change class-name id] :as props}]
  (let [local-state (r/atom (or default-checked false))
        is-controlled? (some? checked)
        current-checked (if is-controlled? checked @local-state)]
    
    (fn [{:keys [checked default-checked disabled on-change class-name id] :as props}]
      [:button
       (merge 
         (dissoc props :checked :default-checked :on-change :class-name :children)
         {:type "button"
          :role "switch"
          :aria-checked (str current-checked)
          :data-state (if current-checked "checked" "unchecked")
          :disabled disabled
          :id id
          :class (cn
                  "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
                  (if current-checked
                    "bg-primary"
                    "bg-input")
                  class-name)
          :on-click (fn [event]
                     (when (and (not disabled) on-change)
                       (let [new-checked (not current-checked)]
                         (when (not is-controlled?)
                           (reset! local-state new-checked))
                         (on-change new-checked event))))})
       [:span
        {:class (cn
                 "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform"
                 (if current-checked
                   "translate-x-5"
                   "translate-x-0"))}]])))

(defn labeled-switch
  "Switch with label
  
  Props:
  - label: string
  - description: string (optional)
  - switch-props: props to pass to switch component"
  [{:keys [label description switch-props class-name]}]
  [:div {:class (cn "flex items-center space-x-2" class-name)}
   [switch switch-props]
   [:div {:class "grid gap-1.5 leading-none"}
    [:label {:class "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
             :for (:id switch-props)}
     label]
    (when description
      [:p {:class "text-xs text-muted-foreground"}
       description])]])