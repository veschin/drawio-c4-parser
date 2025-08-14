(ns drawio-ui.components.ui.icons
  "SVG icon components inspired by Lucide icons")

(defn upload-icon
  "Upload cloud icon"
  [{:keys [class size] :or {size "24"}}]
  [:svg
   {:class class
    :width size
    :height size
    :viewBox "0 0 24 24"
    :fill "none"
    :stroke "currentColor"
    :stroke-width "2"
    :stroke-linecap "round"
    :stroke-linejoin "round"}
   [:path {:d "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]
   [:polyline {:points "7,10 12,15 17,10"}]
   [:line {:x1 "12" :y1 "15" :x2 "12" :y2 "3"}]])

(defn file-icon
  "File document icon"
  [{:keys [class size] :or {size "24"}}]
  [:svg
   {:class class
    :width size
    :height size
    :viewBox "0 0 24 24"
    :fill "none"
    :stroke "currentColor"
    :stroke-width "2"
    :stroke-linecap "round"
    :stroke-linejoin "round"}
   [:path {:d "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}]
   [:polyline {:points "14,2 14,8 20,8"}]])

(defn clipboard-icon
  "Clipboard icon"
  [{:keys [class size] :or {size "24"}}]
  [:svg
   {:class class
    :width size
    :height size
    :viewBox "0 0 24 24"
    :fill "none"
    :stroke "currentColor"
    :stroke-width "2"
    :stroke-linecap "round"
    :stroke-linejoin "round"}
   [:rect {:x "8" :y "2" :width "8" :height "4" :rx "1" :ry "1"}]
   [:path {:d "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]])

(defn check-circle-icon
  "Success check circle"
  [{:keys [class size] :or {size "24"}}]
  [:svg
   {:class class
    :width size
    :height size
    :viewBox "0 0 24 24"
    :fill "none"
    :stroke "currentColor"
    :stroke-width "2"
    :stroke-linecap "round"
    :stroke-linejoin "round"}
   [:path {:d "M22 11.08V12a10 10 0 1 1-5.93-9.14"}]
   [:polyline {:points "22,4 12,14.01 9,11.01"}]])

(defn x-circle-icon
  "Error X circle"
  [{:keys [class size] :or {size "24"}}]
  [:svg
   {:class class
    :width size
    :height size
    :viewBox "0 0 24 24"
    :fill "none"
    :stroke "currentColor"
    :stroke-width "2"
    :stroke-linecap "round"
    :stroke-linejoin "round"}
   [:circle {:cx "12" :cy "12" :r "10"}]
   [:path {:d "m15 9-6 6"}]
   [:path {:d "m9 9 6 6"}]])

(defn x-icon
  "Close X icon"
  [{:keys [class size] :or {size "24"}}]
  [:svg
   {:class class
    :width size
    :height size
    :viewBox "0 0 24 24"
    :fill "none"
    :stroke "currentColor"
    :stroke-width "2"
    :stroke-linecap "round"
    :stroke-linejoin "round"}
   [:path {:d "m18 6-12 12"}]
   [:path {:d "m6 6 12 12"}]])

(defn loader-icon
  "Animated loading spinner"
  [{:keys [class size] :or {size "24"}}]
  [:svg
   {:class (str class " animate-spin")
    :width size
    :height size
    :viewBox "0 0 24 24"
    :fill "none"
    :stroke "currentColor"
    :stroke-width "2"
    :stroke-linecap "round"
    :stroke-linejoin "round"}
   [:line {:x1 "12" :y1 "2" :x2 "12" :y2 "6"}]
   [:line {:x1 "12" :y1 "18" :x2 "12" :y2 "22"}]
   [:line {:x1 "4.93" :y1 "4.93" :x2 "7.76" :y2 "7.76"}]
   [:line {:x1 "16.24" :y1 "16.24" :x2 "19.07" :y2 "19.07"}]
   [:line {:x1 "2" :y1 "12" :x2 "6" :y2 "12"}]
   [:line {:x1 "18" :y1 "12" :x2 "22" :y2 "12"}]
   [:line {:x1 "4.93" :y1 "19.07" :x2 "7.76" :y2 "16.24"}]
   [:line {:x1 "16.24" :y1 "7.76" :x2 "19.07" :y2 "4.93"}]])

(defn folder-open-icon
  "Open folder icon"
  [{:keys [class size] :or {size "24"}}]
  [:svg
   {:class class
    :width size
    :height size
    :viewBox "0 0 24 24"
    :fill "none"
    :stroke "currentColor"
    :stroke-width "2"
    :stroke-linecap "round"
    :stroke-linejoin "round"}
   [:path {:d "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}]])

(defn image-icon
  "Image/picture icon"
  [{:keys [class size] :or {size "24"}}]
  [:svg
   {:class class
    :width size
    :height size
    :viewBox "0 0 24 24"
    :fill "none"
    :stroke "currentColor"
    :stroke-width "2"
    :stroke-linecap "round"
    :stroke-linejoin "round"}
   [:rect {:x "3" :y "3" :width "18" :height "18" :rx "2" :ry "2"}]
   [:circle {:cx "9" :cy "9" :r "2"}]
   [:path {:d "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]])

(defn plus-icon
  "Plus/add icon"
  [{:keys [class size] :or {size "24"}}]
  [:svg
   {:class class
    :width size
    :height size
    :viewBox "0 0 24 24"
    :fill "none"
    :stroke "currentColor"
    :stroke-width "2"
    :stroke-linecap "round"
    :stroke-linejoin "round"}
   [:path {:d "M5 12h14"}]
   [:path {:d "M12 5v14"}]])