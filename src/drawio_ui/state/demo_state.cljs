(ns drawio-ui.state.demo-state
  "Re-frame state management for UI demo"
  (:require [re-frame.core :as rf]
            [drawio-ui.theme.palettes :as palettes]))

;; -- Default State --

(def default-theme-config
  {:current-palette :light
   :radius "0.5rem"
   :mode "light"  ; light, dark, system
   :custom-colors {}})

(def default-component-config
  {:button {:variant "default" :size "default"}
   :card {:style "default"}
   :badge {:variant "default"}})

(def default-db
  {:demo {:theme-config default-theme-config
          :component-config default-component-config
          :current-section :theme-selection  ; theme-selection, components, playground
          :export-modal-open? false
          :import-modal-open? false
          :click-counter 0
          :loading? false
          :notification nil
          :form-data {:name ""
                      :email ""
                      :search ""
                      :description ""
                      :notifications false}}})

;; -- Events --

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   default-db))

(rf/reg-event-fx
 ::initialize-demo-state
 (fn [_ _]
   {:db default-db
    :dispatch-later [{:ms 100 :dispatch [::apply-initial-theme]}]}))

;; Theme Events
(rf/reg-event-fx
 ::set-theme-palette
 (fn [{:keys [db]} [_ palette-key]]
   (let [new-db (assoc-in db [:demo :theme-config :current-palette] palette-key)]
     {:db new-db
      ::apply-theme-to-document (get-in new-db [:demo :theme-config])})))

(rf/reg-event-db
 ::set-theme-radius
 (fn [db [_ radius]]
   (assoc-in db [:demo :theme-config :radius] radius)))

(rf/reg-event-db
 ::set-theme-mode
 (fn [db [_ mode]]
   (assoc-in db [:demo :theme-config :mode] mode)))

;; Component Events  
(rf/reg-event-db
 ::set-component-prop
 (fn [db [_ component-type prop-key prop-value]]
   (assoc-in db [:demo :component-config component-type prop-key] prop-value)))

;; UI Events
(rf/reg-event-db
 ::set-current-section
 (fn [db [_ section]]
   (assoc-in db [:demo :current-section] section)))

(rf/reg-event-db
 ::toggle-export-modal
 (fn [db _]
   (update-in db [:demo :export-modal-open?] not)))

(rf/reg-event-db
 ::toggle-import-modal
 (fn [db _]
   (update-in db [:demo :import-modal-open?] not)))

;; Export/Import Events
(rf/reg-event-fx
 ::export-config
 (fn [{:keys [db]} _]
   (let [config {:theme (get-in db [:demo :theme-config])
                 :components (get-in db [:demo :component-config])}]
     {::download-json-file {:filename "ui-theme-config.json"
                           :content config}})))

(rf/reg-event-fx
 ::import-config
 (fn [{:keys [db]} [_ config]]
   (let [theme-config (get config :theme default-theme-config)
         component-config (get config :components default-component-config)]
     {:db (-> db
              (assoc-in [:demo :theme-config] theme-config)
              (assoc-in [:demo :component-config] component-config))
      ::apply-theme-to-document theme-config})))

(rf/reg-event-fx
 ::reset-to-defaults
 (fn [_ _]
   {:db default-db
    ::apply-theme-to-document default-theme-config}))

;; Interactive Demo Events
(rf/reg-event-db
 ::increment-counter
 (fn [db _]
   (update-in db [:demo :click-counter] inc)))

(rf/reg-event-db
 ::reset-counters
 (fn [db _]
   (assoc-in db [:demo :click-counter] 0)))

(rf/reg-event-db
 ::toggle-loading
 (fn [db _]
   (update-in db [:demo :loading?] not)))

(rf/reg-event-db
 ::show-notification
 (fn [db [_ message]]
   (assoc-in db [:demo :notification] message)))

(rf/reg-event-db
 ::clear-notification
 (fn [db _]
   (assoc-in db [:demo :notification] nil)))

;; Form Events
(rf/reg-event-db
 ::update-form-field
 (fn [db [_ field-key value]]
   (assoc-in db [:demo :form-data field-key] value)))

(rf/reg-event-db
 ::clear-form
 (fn [db _]
   (assoc-in db [:demo :form-data] {:name ""
                                    :email ""
                                    :search ""
                                    :description ""
                                    :notifications false})))

(rf/reg-event-db
 ::reset-all-state
 (fn [_ _]
   default-db))

(rf/reg-event-fx
 ::apply-initial-theme
 (fn [{:keys [db]} _]
   (let [theme-config (get-in db [:demo :theme-config])]
     {::apply-theme-to-document theme-config})))

;; -- Effects --

(rf/reg-fx
 ::apply-theme-to-document
 (fn [theme-config]
   (let [{:keys [current-palette radius mode]} theme-config
         palette (palettes/get-palette current-palette)
         colors (:colors palette)
         root (.-documentElement js/document)]
     
     (js/console.log "Applying theme:" (clj->js {:palette current-palette :colors colors}))
     
     ;; Apply CSS custom properties
     (when colors
       (doseq [[prop value] colors]
         (.setProperty (.-style root) (str "--" (name prop)) value)))
     
     ;; Apply radius
     (.setProperty (.-style root) "--radius" radius)
     
     ;; Apply dark class if needed
     (if (= mode "dark")
       (.add (.-classList (.-documentElement js/document)) "dark")
       (.remove (.-classList (.-documentElement js/document)) "dark")))))

(rf/reg-fx
 ::download-json-file
 (fn [{:keys [filename content]}]
   (let [json-str (js/JSON.stringify (clj->js content) nil 2)
         blob (js/Blob. [json-str] #js {"type" "application/json"})
         url (js/URL.createObjectURL blob)
         link (js/document.createElement "a")]
     (set! (.-href link) url)
     (set! (.-download link) filename)
     (.appendChild js/document.body link)
     (.click link)
     (.removeChild js/document.body link)
     (js/URL.revokeObjectURL url))))

;; -- Subscriptions --

(rf/reg-sub
 ::theme-config
 (fn [db _]
   (get-in db [:demo :theme-config])))

(rf/reg-sub
 ::current-palette
 (fn [db _]
   (get-in db [:demo :theme-config :current-palette])))

(rf/reg-sub
 ::current-palette-data
 (fn [db _]
   (let [palette-key (get-in db [:demo :theme-config :current-palette])]
     (palettes/get-palette palette-key))))

(rf/reg-sub
 ::theme-radius
 (fn [db _]
   (get-in db [:demo :theme-config :radius])))

(rf/reg-sub
 ::theme-mode
 (fn [db _]
   (get-in db [:demo :theme-config :mode])))

(rf/reg-sub
 ::component-config
 (fn [db _]
   (get-in db [:demo :component-config])))

(rf/reg-sub
 ::component-prop
 (fn [db [_ component-type prop-key]]
   (get-in db [:demo :component-config component-type prop-key])))

(rf/reg-sub
 ::current-section
 (fn [db _]
   (get-in db [:demo :current-section])))

(rf/reg-sub
 ::export-modal-open?
 (fn [db _]
   (get-in db [:demo :export-modal-open?])))

(rf/reg-sub
 ::import-modal-open?
 (fn [db _]
   (get-in db [:demo :import-modal-open?])))

(rf/reg-sub
 ::available-palettes
 (fn [_ _]
   (palettes/get-palette-names)))

;; Interactive Demo Subscriptions
(rf/reg-sub
 ::click-counter
 (fn [db _]
   (get-in db [:demo :click-counter])))

(rf/reg-sub
 ::loading?
 (fn [db _]
   (get-in db [:demo :loading?])))

(rf/reg-sub
 ::current-notification
 (fn [db _]
   (get-in db [:demo :notification])))

;; Form Subscriptions
(rf/reg-sub
 ::form-field
 (fn [db [_ field-key]]
   (get-in db [:demo :form-data field-key])))