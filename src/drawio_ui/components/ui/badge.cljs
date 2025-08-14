(ns drawio-ui.components.ui.badge
  "Badge component based on shadcn/ui design"
  (:require [drawio-ui.lib.utils :refer [cn]]))

(defn get-badge-styles
  "Returns badge styles based on variant"
  [variant]
  (cn
    ;; Base styles
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    
    ;; Variant styles
    (case (or variant "default")
      "default" "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
      "secondary" "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
      "destructive" "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
      "outline" "text-foreground"
      ;; default case
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80")))

(defn badge
  "Badge component with shadcn/ui styling
  
  Props:
  - variant: default | secondary | destructive | outline
  - class-name: additional CSS classes
  - children: badge content"
  [{:keys [variant class-name children] :as props}]
  [:div 
   (merge 
     (dissoc props :variant :class-name :children)
     {:class (cn (get-badge-styles variant) class-name)})
   children])

;; Convenience components
(defn primary-badge [props children]
  [badge (assoc props :variant "default") children])

(defn secondary-badge [props children]
  [badge (assoc props :variant "secondary") children])

(defn destructive-badge [props children]
  [badge (assoc props :variant "destructive") children])

(defn outline-badge [props children]
  [badge (assoc props :variant "outline") children])

;; Status badges
(defn status-badge
  "Badge for status indication
  
  Props:
  - status: success | warning | error | info
  - children: badge content"
  [{:keys [status children] :as props}]
  (let [variant (case status
                  "success" "default"
                  "warning" "secondary"
                  "error" "destructive"
                  "info" "outline"
                  "default")]
    [badge (assoc props :variant variant) children]))

(defn count-badge
  "Badge for displaying counts
  
  Props:
  - count: number
  - max: maximum count to display (shows 'max+' if exceeded)"
  [{:keys [count max] :as props}]
  (let [display-count (if (and max (> count max))
                       (str max "+")
                       (str count))]
    [badge (merge props {:variant "secondary"}) display-count]))