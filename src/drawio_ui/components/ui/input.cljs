(ns drawio-ui.components.ui.input
  "Input component based on shadcn/ui design"
  (:require [reagent.core :as r]
            [drawio-ui.lib.utils :refer [cn]]))

(defn input
  "Input component with shadcn/ui styling
  
  Props:
  - type: input type (text, email, password, etc.)
  - placeholder: placeholder text
  - disabled: boolean
  - class-name: additional CSS classes
  - value: controlled value
  - default-value: uncontrolled default value
  - on-change: change handler function
  - All other HTML input props"
  [{:keys [type placeholder disabled class-name value default-value on-change] :as props}]
  [:input 
   (merge 
     (dissoc props :class-name)
     {:type (or type "text")
      :class (cn
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              class-name)
      :placeholder placeholder
      :disabled disabled
      :value value
      :default-value default-value
      :on-change on-change})])

(defn labeled-input
  "Input with label and optional description
  
  Props:
  - label: string
  - description: string (optional)
  - error: string (optional error message)
  - input-props: props to pass to input component"
  [{:keys [label description error input-props class-name]}]
  [:div {:class (cn "grid w-full max-w-sm items-center gap-1.5" class-name)}
   [:label {:class "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            :for (:id input-props)}
    label]
   [input input-props]
   (when description
     [:p {:class "text-xs text-muted-foreground"}
      description])
   (when error
     [:p {:class "text-xs text-destructive"}
      error])])

(defn search-input
  "Search input with search icon
  
  Props:
  - Same as input component"
  [props]
  [:div {:class "relative"}
   [:div {:class "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"}
    [:svg {:class "h-4 w-4 text-muted-foreground"
           :fill "none"
           :stroke "currentColor"
           :view-box "0 0 24 24"}
     [:path {:stroke-linecap "round"
             :stroke-linejoin "round"
             :stroke-width "2"
             :d "m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}]]]
   [input (merge props {:class-name (cn "pl-10" (:class-name props))})]])

(defn textarea
  "Textarea component with shadcn/ui styling
  
  Props:
  - placeholder: placeholder text
  - disabled: boolean
  - class-name: additional CSS classes
  - rows: number of rows
  - value: controlled value
  - default-value: uncontrolled default value
  - on-change: change handler function"
  [{:keys [placeholder disabled class-name rows value default-value on-change] :as props}]
  [:textarea 
   (merge 
     (dissoc props :class-name)
     {:class (cn
              "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              class-name)
      :placeholder placeholder
      :disabled disabled
      :rows rows
      :value value
      :default-value default-value
      :on-change on-change})])