(ns drawio-ui.components.ui.button
  "Button component based on shadcn/ui design"
  (:require [reagent.core :as r]
            [drawio-ui.lib.utils :refer [cn]]))

(defn get-button-styles
  "Returns button styles based on variant and size"
  [variant size]
  (cn
    ;; Base styles
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    ;; Variant styles
    (case (or variant "default")
      "default" "bg-primary text-primary-foreground hover:bg-primary/90"
      "destructive" "bg-destructive text-destructive-foreground hover:bg-destructive/90"
      "outline" "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      "secondary" "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      "ghost" "hover:bg-accent hover:text-accent-foreground"
      "link" "text-primary underline-offset-4 hover:underline"
      ;; default case
      "bg-primary text-primary-foreground hover:bg-primary/90")
    
    ;; Size styles
    (case (or size "default")
      "default" "h-10 px-4 py-2"
      "sm" "h-9 rounded-md px-3"
      "lg" "h-11 rounded-md px-8"
      "icon" "h-10 w-10"
      ;; default case
      "h-10 px-4 py-2")))

(defn button
  "Button component with shadcn/ui styling
  
  Props:
  - variant: default | destructive | outline | secondary | ghost | link
  - size: default | sm | lg | icon
  - class-name: additional CSS classes
  - disabled: boolean
  - on-click: click handler function
  - children: button content"
  [{:keys [variant size class-name disabled on-click children] :as props}]
  [:button 
   (merge 
     (dissoc props :variant :size :class-name :children)
     {:class (cn (get-button-styles variant size) class-name)
      :disabled disabled
      :on-click on-click})
   children])

;; Convenience components
(defn primary-button [props children]
  [button (assoc props :variant "default") children])

(defn secondary-button [props children]
  [button (assoc props :variant "secondary") children])

(defn outline-button [props children]
  [button (assoc props :variant "outline") children])

(defn ghost-button [props children]
  [button (assoc props :variant "ghost") children])