(ns drawio-ui.components.ui.card
  "Card components based on shadcn/ui design"
  (:require [drawio-ui.lib.utils :refer [cn]]))

(defn card 
  "Main card container component"
  [{:keys [class-name children] :as props}]
  [:div 
   (merge 
     (dissoc props :class-name :children)
     {:class (cn "rounded-lg border bg-card text-card-foreground shadow-sm" class-name)})
   children])

(defn card-header
  "Card header section"
  [{:keys [class-name children] :as props}]
  [:div 
   (merge 
     (dissoc props :class-name :children)
     {:class (cn "flex flex-col space-y-1.5 p-6" class-name)})
   children])

(defn card-title
  "Card title component"
  [{:keys [class-name children] :as props}]
  [:h3 
   (merge 
     (dissoc props :class-name :children)
     {:class (cn "text-2xl font-semibold leading-none tracking-tight" class-name)})
   children])

(defn card-description
  "Card description component"
  [{:keys [class-name children] :as props}]
  [:p 
   (merge 
     (dissoc props :class-name :children)
     {:class (cn "text-sm text-muted-foreground" class-name)})
   children])

(defn card-content
  "Card main content area"
  [{:keys [class-name children] :as props}]
  [:div 
   (merge 
     (dissoc props :class-name :children)
     {:class (cn "p-6 pt-0" class-name)})
   children])

(defn card-footer
  "Card footer section"
  [{:keys [class-name children] :as props}]
  [:div 
   (merge 
     (dissoc props :class-name :children)
     {:class (cn "flex items-center p-6 pt-0" class-name)})
   children])