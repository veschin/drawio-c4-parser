(ns drawio-ui.lib.utils
  "Utility functions for UI components"
  (:require ["clsx" :as clsx]
            ["tailwind-merge" :refer [twMerge]]))

(defn cn 
  "Utility function to merge Tailwind CSS classes
  Combines clsx for conditional classes with tailwind-merge for deduplication"
  [& inputs]
  (twMerge (clsx (clj->js inputs))))

(defn class-names
  "Alternative name for cn function"
  [& inputs]
  (apply cn inputs))