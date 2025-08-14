(ns drawio-ui.theme.parser
  "Parser for color palettes from text files"
  (:require [clojure.string :as str]))

(defn hex-to-hsl
  "Convert hex color to HSL values for CSS custom properties"
  [hex]
  ;; Простая заглушка - возвращаем нейтральные значения
  ;; В реальном проекте здесь была бы конвертация hex -> HSL
  (case hex
    "f8f9fa" "210 17% 98%"
    "e9ecef" "210 16% 93%"
    "dee2e6" "210 14% 89%"
    "ced4da" "210 14% 83%"
    "adb5bd" "210 11% 71%"
    "6c757d" "208 7% 46%"
    "495057" "210 9% 31%"
    "343a40" "210 10% 23%"
    "212529" "210 11% 15%"
    ;; Дефолтные значения для других цветов
    "210 50% 50%"))

(defn parse-hex-colors
  "Parse hex colors from array format like [\"f8f9fa\",\"e9ecef\",...]"
  [text]
  (let [array-line (some #(when (str/starts-with? % "[\"") %) (str/split-lines text))]
    (when array-line
      (-> array-line
          (str/replace #"[\[\]\"]" "")
          (str/split #",")
          (as-> colors (map str/trim colors))))))

(defn create-light-theme-from-whitegray
  "Create light theme using whitegray palette"
  [colors]
  (let [[lightest very-light light medium-light medium dark medium-dark very-dark darkest] colors]
    {:name "Light Steel"
     :description "Clean light theme with steel gray accents"
     :colors
     {:background (hex-to-hsl lightest)           ; f8f9fa - самый светлый фон
      :foreground (hex-to-hsl darkest)            ; 212529 - самый темный текст
      :card (hex-to-hsl lightest)
      :card-foreground (hex-to-hsl darkest)
      :popover (hex-to-hsl lightest)
      :popover-foreground (hex-to-hsl darkest)
      :primary (hex-to-hsl dark)                  ; 6c757d - средне-темный для акцентов
      :primary-foreground (hex-to-hsl lightest)
      :secondary (hex-to-hsl very-light)          ; e9ecef - очень светлый для вторичных элементов
      :secondary-foreground (hex-to-hsl darkest)
      :muted (hex-to-hsl light)                   ; dee2e6 - приглушенный фон
      :muted-foreground (hex-to-hsl medium-dark)  ; 495057 - приглушенный текст
      :accent (hex-to-hsl very-light)
      :accent-foreground (hex-to-hsl darkest)
      :destructive "0 84.2% 60.2%"               ; красный для ошибок
      :destructive-foreground (hex-to-hsl lightest)
      :border (hex-to-hsl medium-light)           ; ced4da - границы
      :input (hex-to-hsl medium-light)
      :ring (hex-to-hsl dark)}}))

(defn create-dark-theme-from-whitegray
  "Create dark theme using whitegray palette (inverted)"
  [colors]
  (let [[lightest very-light light medium-light medium dark medium-dark very-dark darkest] colors]
    {:name "Dark Steel"
     :description "Modern dark theme with steel gray accents"
     :colors
     {:background (hex-to-hsl darkest)            ; 212529 - самый темный фон
      :foreground (hex-to-hsl lightest)           ; f8f9fa - самый светлый текст
      :card (hex-to-hsl very-dark)                ; 343a40 - чуть светлее фон для карточек
      :card-foreground (hex-to-hsl lightest)
      :popover (hex-to-hsl very-dark)
      :popover-foreground (hex-to-hsl lightest)
      :primary (hex-to-hsl medium)                ; adb5bd - светлый акцент
      :primary-foreground (hex-to-hsl darkest)
      :secondary (hex-to-hsl medium-dark)         ; 495057 - темно-серый для вторичных
      :secondary-foreground (hex-to-hsl lightest)
      :muted (hex-to-hsl medium-dark)
      :muted-foreground (hex-to-hsl medium)       ; adb5bd - приглушенный светлый текст
      :accent (hex-to-hsl medium-dark)
      :accent-foreground (hex-to-hsl lightest)
      :destructive "0 62.8% 30.6%"               ; темно-красный для ошибок
      :destructive-foreground (hex-to-hsl lightest)
      :border (hex-to-hsl medium-dark)            ; 495057 - границы
      :input (hex-to-hsl medium-dark)
      :ring (hex-to-hsl medium)}}))

(defn parse-palette-file
  "Parse a palette file and return color array"
  [file-content]
  (parse-hex-colors file-content))