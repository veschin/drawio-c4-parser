(ns drawio-ui.theme.palettes
  "Color palettes for theme system"
  (:require [drawio-ui.theme.parser :as parser]))

(def theme-palettes
  "Map of theme palettes with their color definitions"
  {:light
   {:name "Light Steel"
    :description "Clean light theme with steel gray accents"
    :colors
    {:background "210 17% 98%"    ; f8f9fa
     :foreground "210 11% 15%"    ; 212529
     :card "210 17% 98%"
     :card-foreground "210 11% 15%"
     :popover "210 17% 98%"
     :popover-foreground "210 11% 15%"
     :primary "208 7% 46%"        ; 6c757d
     :primary-foreground "210 17% 98%"
     :secondary "210 16% 93%"     ; e9ecef  
     :secondary-foreground "210 11% 15%"
     :muted "210 14% 89%"         ; dee2e6
     :muted-foreground "210 9% 31%"  ; 495057
     :accent "210 16% 93%"
     :accent-foreground "210 11% 15%"
     :destructive "0 84.2% 60.2%"
     :destructive-foreground "210 17% 98%"
     :border "210 14% 83%"        ; ced4da
     :input "210 14% 83%"
     :ring "208 7% 46%"}}

   :dark
   {:name "Dark Steel" 
    :description "Modern dark theme with steel gray accents"
    :colors
    {:background "210 11% 15%"    ; 212529
     :foreground "210 17% 98%"    ; f8f9fa
     :card "210 10% 23%"          ; 343a40
     :card-foreground "210 17% 98%"
     :popover "210 10% 23%"
     :popover-foreground "210 17% 98%"
     :primary "210 11% 71%"       ; adb5bd
     :primary-foreground "210 11% 15%"
     :secondary "210 9% 31%"      ; 495057
     :secondary-foreground "210 17% 98%"
     :muted "210 9% 31%"
     :muted-foreground "210 11% 71%"
     :accent "210 9% 31%"
     :accent-foreground "210 17% 98%"
     :destructive "0 62.8% 30.6%"
     :destructive-foreground "210 17% 98%"
     :border "210 9% 31%"
     :input "210 9% 31%"
     :ring "210 11% 71%"}}

   :zinc
   {:name "Zinc"
    :description "Modern zinc gray palette"
    :colors
    {:background "0 0% 100%"
     :foreground "240 10% 3.9%"
     :card "0 0% 100%"
     :card-foreground "240 10% 3.9%"
     :popover "0 0% 100%"
     :popover-foreground "240 10% 3.9%"
     :primary "240 9% 17%"
     :primary-foreground "0 0% 98%"
     :secondary "240 4.8% 95.9%"
     :secondary-foreground "240 5.9% 10%"
     :muted "240 4.8% 95.9%"
     :muted-foreground "240 3.8% 46.1%"
     :accent "240 4.8% 95.9%"
     :accent-foreground "240 5.9% 10%"
     :destructive "0 84.2% 60.2%"
     :destructive-foreground "0 0% 98%"
     :border "240 5.9% 90%"
     :input "240 5.9% 90%"
     :ring "240 10% 3.9%"}}

   :slate
   {:name "Slate"
    :description "Cool slate blue-gray palette"
    :colors
    {:background "0 0% 100%"
     :foreground "222.2 84% 4.9%"
     :card "0 0% 100%"
     :card-foreground "222.2 84% 4.9%"
     :popover "0 0% 100%"
     :popover-foreground "222.2 84% 4.9%"
     :primary "215.4 16.3% 46.9%"
     :primary-foreground "210 20% 98%"
     :secondary "210 40% 96%"
     :secondary-foreground "222.2 84% 4.9%"
     :muted "210 40% 96%"
     :muted-foreground "215.4 16.3% 46.9%"
     :accent "210 40% 96%"
     :accent-foreground "222.2 84% 4.9%"
     :destructive "0 84.2% 60.2%"
     :destructive-foreground "210 40% 98%"
     :border "214.3 31.8% 91.4%"
     :input "214.3 31.8% 91.4%"
     :ring "215.4 16.3% 46.9%"}}

   :stone
   {:name "Stone"
    :description "Warm stone beige palette"
    :colors
    {:background "0 0% 100%"
     :foreground "28 25% 5.9%"
     :card "0 0% 100%"
     :card-foreground "28 25% 5.9%"
     :popover "0 0% 100%"
     :popover-foreground "28 25% 5.9%"
     :primary "25 5.3% 44.7%"
     :primary-foreground "60 9.1% 97.8%"
     :secondary "60 4.8% 95.9%"
     :secondary-foreground "24 9.8% 10%"
     :muted "60 4.8% 95.9%"
     :muted-foreground "25 5.3% 44.7%"
     :accent "60 4.8% 95.9%"
     :accent-foreground "24 9.8% 10%"
     :destructive "0 84.2% 60.2%"
     :destructive-foreground "60 9.1% 97.8%"
     :border "20 5.9% 90%"
     :input "20 5.9% 90%"
     :ring "25 5.3% 44.7%"}}

   :blue
   {:name "Blue"
    :description "Vibrant blue primary palette"
    :colors
    {:background "0 0% 100%"
     :foreground "222.2 84% 4.9%"
     :card "0 0% 100%"
     :card-foreground "222.2 84% 4.9%"
     :popover "0 0% 100%"
     :popover-foreground "222.2 84% 4.9%"
     :primary "221.2 83.2% 53.3%"
     :primary-foreground "210 40% 98%"
     :secondary "210 40% 96%"
     :secondary-foreground "222.2 84% 4.9%"
     :muted "210 40% 96%"
     :muted-foreground "215.4 16.3% 46.9%"
     :accent "210 40% 96%"
     :accent-foreground "222.2 84% 4.9%"
     :destructive "0 84.2% 60.2%"
     :destructive-foreground "210 40% 98%"
     :border "214.3 31.8% 91.4%"
     :input "214.3 31.8% 91.4%"
     :ring "221.2 83.2% 53.3%"}}

   :green
   {:name "Green"
    :description "Natural green primary palette"
    :colors
    {:background "0 0% 100%"
     :foreground "240 10% 3.9%"
     :card "0 0% 100%"
     :card-foreground "240 10% 3.9%"
     :popover "0 0% 100%"
     :popover-foreground "240 10% 3.9%"
     :primary "142.1 76.2% 36.3%"
     :primary-foreground "355.7 100% 97.3%"
     :secondary "210 40% 96%"
     :secondary-foreground "222.2 84% 4.9%"
     :muted "210 40% 96%"
     :muted-foreground "215.4 16.3% 46.9%"
     :accent "210 40% 96%"
     :accent-foreground "222.2 84% 4.9%"
     :destructive "0 84.2% 60.2%"
     :destructive-foreground "210 40% 98%"
     :border "214.3 31.8% 91.4%"
     :input "214.3 31.8% 91.4%"
     :ring "142.1 76.2% 36.3%"}}

   ;; Трендовые палитры на основе Coolors.co
   :blue-serenity
   {:name "Blue Serenity"
    :description "Calm blue gradient palette"
    :colors
    {:background "219 64% 96%"    ; edf2fb - Alice Blue
     :foreground "222.2 84% 4.9%"
     :card "219 64% 96%"
     :card-foreground "222.2 84% 4.9%"
     :popover "219 64% 96%"
     :popover-foreground "222.2 84% 4.9%"
     :primary "222 100% 84%"      ; abc4ff - Jordy Blue
     :primary-foreground "0 0% 12%"
     :secondary "222 86% 92%"     ; d7e3fc - Lavender
     :secondary-foreground "222.2 84% 4.9%"
     :muted "222 81% 94%"         ; e2eafc - Lavender
     :muted-foreground "215.4 16.3% 46.9%"
     :accent "222 86% 92%"
     :accent-foreground "222.2 84% 4.9%"
     :destructive "0 84.2% 60.2%"
     :destructive-foreground "210 40% 98%"
     :border "222 92% 90%"        ; ccdbfd - Periwinkle
     :input "222 92% 90%"
     :ring "222 100% 84%"}}

   :green-earth
   {:name "Green Earth"
    :description "Natural earthy green tones"
    :colors
    {:background "88 57% 91%"     ; e9f5db - Nyanza
     :foreground "222.2 84% 4.9%"
     :card "88 57% 91%"
     :card-foreground "222.2 84% 4.9%"
     :popover "88 57% 91%"
     :popover-foreground "222.2 84% 4.9%"
     :primary "83 21% 42%"        ; 718355 - Reseda green
     :primary-foreground "88 57% 91%"
     :secondary "86 30% 70%"      ; b5c99a - Olivine
     :secondary-foreground "222.2 84% 4.9%"
     :muted "87 40% 80%"          ; cfe1b9 - Tea green
     :muted-foreground "82 18% 51%"
     :accent "86 30% 70%"
     :accent-foreground "222.2 84% 4.9%"
     :destructive "0 84.2% 60.2%"
     :destructive-foreground "210 40% 98%"
     :border "84 21% 57%"         ; 97a97c - Olivine
     :input "84 21% 57%"
     :ring "83 21% 42%"}}

   :lavender-dream  
   {:name "Lavender Dream"
    :description "Soft lavender and warm tones"
    :colors
    {:background "248 100% 98%"   ; f8f7ff - Ghost white
     :foreground "222.2 84% 4.9%"
     :card "248 100% 98%"
     :card-foreground "222.2 84% 4.9%"
     :popover "248 100% 98%"
     :popover-foreground "222.2 84% 4.9%"
     :primary "249 100% 75%"      ; 9381ff - Tropical indigo
     :primary-foreground "248 100% 98%"
     :secondary "240 100% 86%"    ; b8b8ff - Periwinkle
     :secondary-foreground "222.2 84% 4.9%"
     :muted "30 100% 93%"         ; ffeedd - Antique white
     :muted-foreground "215.4 16.3% 46.9%"
     :accent "240 100% 86%"
     :accent-foreground "222.2 84% 4.9%"
     :destructive "0 84.2% 60.2%"
     :destructive-foreground "210 40% 98%"
     :border "24 100% 87%"        ; ffd8be - Apricot
     :input "24 100% 87%"
     :ring "249 100% 75%"}}})

(defn get-palette
  "Get a specific theme palette by key"
  [palette-key]
  (get theme-palettes palette-key))

(defn get-all-palettes
  "Get all available theme palettes"
  []
  theme-palettes)

(defn get-palette-names
  "Get list of palette names for UI selection"
  []
  (map (fn [[key palette]]
         {:key key
          :name (:name palette)
          :description (:description palette)
          :colors (:colors palette)})
       theme-palettes))