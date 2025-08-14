# UI Demo & Style Selection Plan

## Цель

Создание интерактивной демо-страницы для выбора стиля UI с реальными shadcn/ui компонентами, экспортом конфигурации и автогенерацией UI guidelines. Демо позволит выбрать визуальный стиль для всего приложения и сохранить конфигурацию для последующего использования.

## Принципы дизайна

- **Минимализм** - Чистый интерфейс, сфокусированный на данных
- **Простота** - Интуитивная навигация и взаимодействие
- **Информативность** - Богатая визуальная обратная связь и четкие индикаторы
- **Наглядность** - Иконки, цвета и визуальная иерархия для быстрого понимания

## Структура демо-страницы

### Маршрут: `/ui-demo`
Отдельная страница в SPA для выбора стиля без влияния на основное приложение.

### Секции демо

#### 1. **Theme Selection**
**Цель**: Выбор базовой цветовой схемы

**Компоненты**:
- Сетка цветовых палитр: Zinc, Slate, Stone, Gray, Neutral, Green, Blue, Red
- Toggle для dark/light режима
- Live preview цветовых переменных
- Индикаторы активного выбора

**Функциональность**:
- Клик по палитре меняет все компоненты в реальном времени
- Предпросмотр всех оттенков (50-950)
- Отображение CSS переменных (background, foreground, muted, etc.)

#### 2. **Component Gallery**
**Цель**: Демонстрация всех основных компонентов с их вариантами

**Button showcase**:
- Варианты: default, secondary, destructive, outline, ghost, link
- Размеры: default, sm, lg, icon
- Состояния: normal, hover, disabled
- С иконками и без

**Card showcase**:
- Стили: default (с тенью), ghost (без границ), outline (только граница)
- С заголовком, контентом, footer
- Вложенные карточки

**Form Elements**:
- Input: default, с иконкой, с label, disabled
- Select: single, multi-select, с поиском
- Textarea: различные размеры
- Checkbox, Radio, Switch компоненты

**Navigation & Layout**:
- Badge варианты: default, secondary, destructive, outline
- Alert типы: default, destructive
- Tabs стили: default, underline, pills
- Breadcrumb, Pagination компоненты

**Interactive Elements**:
- Dialog, Drawer примеры
- Dropdown Menu, Context Menu
- Tooltip, Popover компоненты
- Command palette

#### 3. **Icons & Typography**
**Цель**: Настройка визуальных элементов

**Icon Settings**:
- Размеры: 16px, 20px, 24px
- Stroke width: 1, 1.5, 2
- Предпросмотр популярных Lucide иконок
- Иконки для C4 элементов (Person, System, Container, Component)

**Typography Scale**:
- Заголовки: h1-h6
- Текст: body, small, caption
- Code typography
- Line height настройки

#### 4. **Layout & Spacing**
**Цель**: Настройка пространственных параметров

**Border Radius**:
- Варианты: 0rem, 0.3rem, 0.5rem, 0.75rem, 1rem
- Live preview на кнопках и карточках

**Spacing Scale**:
- Padding/margin масштаб: xs, sm, md, lg, xl
- Grid gaps и layout spacing
- Демонстрация на реальных компонентах

**Layout Examples**:
- Grid и flex layouts
- Container размеры
- Responsive breakpoints preview

#### 5. **Application Preview**
**Цель**: Демонстрация выбранного стиля в контексте приложения

**Comparison Dashboard Mock**:
- Split-view diff viewer с выбранными цветами
- Component tree с выбранными иконками
- Stats panel с выбранными badges и progress bars
- Header navigation с выбранным стилем

**Mini Workflow Demo**:
- Upload area с выбранными input стилями
- File cards с выбранной темой
- Action buttons с выбранными вариантами

### Интерактивность

#### Live Preview
- Все изменения применяются мгновенно ко всем компонентам
- Синхронизация между секциями
- Индикаторы активного состояния

#### State Management
- Сохранение выбора в localStorage
- Восстановление состояния при перезагрузке
- Undo/Redo для изменений

#### Export/Import
- Кнопка "Export Configuration" → JSON файл
- Drag & drop импорт JSON конфигурации
- "Reset to Defaults" с подтверждением

## Технические детали

### Структура файлов

```
src/drawio_ui/
├── ui_demo.cljs              # Главная страница демо
├── components/
│   ├── ui/
│   │   ├── button.cljs       # shadcn Button обертка
│   │   ├── card.cljs         # shadcn Card обертка
│   │   ├── input.cljs        # shadcn Input обертка
│   │   └── ...               # Другие shadcn обертки
│   ├── demo/
│   │   ├── theme_picker.cljs # Выбор цветовой схемы
│   │   ├── component_gallery.cljs # Showcase компонентов
│   │   ├── icon_settings.cljs # Настройки иконок
│   │   └── export_panel.cljs # Export/Import панель
│   └── preview/
│       ├── dashboard_preview.cljs # Mock приложения
│       └── workflow_demo.cljs # Mini workflow
├── theme/
│   ├── config.cljs           # Конфигурация темы
│   ├── variables.cljs        # CSS переменные
│   └── utils.cljs            # Утилиты для темизации
└── demo_state.cljs           # Re-frame события и состояние
```

### NPM зависимости

**Основные shadcn/ui зависимости:**
```json
{
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.2.0",
  "lucide-react": "^0.303.0"
}
```

**Radix UI компоненты (по необходимости):**
```json
{
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-dropdown-menu": "^2.0.6",
  "@radix-ui/react-tabs": "^1.0.4",
  "@radix-ui/react-select": "^2.0.0",
  "@radix-ui/react-switch": "^1.0.3",
  "@radix-ui/react-toast": "^1.1.5",
  "@radix-ui/react-tooltip": "^1.0.7",
  "@radix-ui/react-card": "^1.0.0",
  "@radix-ui/react-progress": "^1.0.3"
}
```

**ClojureScript зависимости:**
```clojure
;; deps.edn
{:deps {org.clojure/clojure {:mvn/version "1.11.1"}
        org.clojure/clojurescript {:mvn/version "1.11.132"}
        thheller/shadow-cljs {:mvn/version "2.25.10"}
        reagent/reagent {:mvn/version "1.2.0"}
        re-frame/re-frame {:mvn/version "1.3.0"}
        cljs-local-storage/cljs-local-storage {:mvn/version "0.3.0"}}}
```

**Tailwind CSS настройка:**
```json
{
  "tailwindcss": "^3.4.0",
  "@tailwindcss/forms": "^0.5.7",
  "postcss": "^8.4.32",
  "autoprefixer": "^10.4.16"
}
```

### Shadow-CLJS конфигурация

**shadow-cljs.edn:**
```clojure
{:deps {:aliases [:cljs]}
 :builds
 {:app
  {:target :browser
   :output-dir "resources/public/js"
   :asset-path "/js"
   :modules {:main {:init-fn drawio-ui.core/init}}
   :devtools {:http-root "resources/public"
              :http-port 3000
              :preloads [devtools.preload]}}}
 :dev-http {3000 "resources/public"}}
```

**package.json для npm зависимостей:**
```json
{
  "name": "drawio-ui",
  "dependencies": {
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.303.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16"
  },
  "scripts": {
    "css-build": "tailwindcss -i ./src/input.css -o ./resources/public/css/output.css --watch",
    "dev": "concurrently \"npm run css-build\" \"npx shadow-cljs watch app\""
  }
}
```

**tailwind.config.js:**
```javascript
module.exports = {
  content: ["./src/**/*.cljs", "./resources/public/index.html"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
```

### shadcn/ui интеграция с Reagent

**Создание utility функций:**
```clojure
(ns drawio-ui.lib.utils
  (:require ["clsx" :as clsx]
            ["tailwind-merge" :refer [twMerge]]))

(defn cn [& inputs]
  "Utility для объединения Tailwind классов"
  (twMerge (clsx (clj->js inputs))))
```

**Button компонент обертка:**
```clojure
(ns drawio-ui.components.ui.button
  (:require [reagent.core :as r]
            ["lucide-react" :refer [Loader2]]
            [drawio-ui.lib.utils :refer [cn]]))

(defn button-variants [variant size]
  (cn "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
      (case variant
        "default" "bg-primary text-primary-foreground hover:bg-primary/90"
        "destructive" "bg-destructive text-destructive-foreground hover:bg-destructive/90"
        "outline" "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        "secondary" "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        "ghost" "hover:bg-accent hover:text-accent-foreground"
        "link" "text-primary underline-offset-4 hover:underline"
        "bg-primary text-primary-foreground hover:bg-primary/90")
      (case size
        "default" "h-10 px-4 py-2"
        "sm" "h-9 rounded-md px-3"
        "lg" "h-11 rounded-md px-8"
        "icon" "h-10 w-10"
        "h-10 px-4 py-2")))

(defn button [{:keys [variant size className disabled loading children] :as props}]
  [:button
   (merge (dissoc props :variant :size :className :loading :children)
          {:class (cn (button-variants (or variant "default") (or size "default")) className)
           :disabled (or disabled loading)})
   (when loading
     [:> Loader2 {:class "mr-2 h-4 w-4 animate-spin"}])
   children])

;; Использование:
[button {:variant "outline" :size "sm"} "Click me"]
```

**Card компонент:**
```clojure
(ns drawio-ui.components.ui.card
  (:require [reagent.core :as r]
            [drawio-ui.lib.utils :refer [cn]]))

(defn card [{:keys [className children] :as props}]
  [:div
   {:class (cn "rounded-lg border bg-card text-card-foreground shadow-sm" className)}
   children])

(defn card-header [{:keys [className children]}]
  [:div {:class (cn "flex flex-col space-y-1.5 p-6" className)} children])

(defn card-title [{:keys [className children]}]
  [:h3 {:class (cn "text-2xl font-semibold leading-none tracking-tight" className)} children])

(defn card-content [{:keys [className children]}]
  [:div {:class (cn "p-6 pt-0" className)} children])

;; Использование:
[card
 [card-header
  [card-title "Card Title"]]
 [card-content "Card content here"]]
```

## Workflow после выбора стиля

### 1. Export Configuration

При клике на "Export Configuration" создается JSON файл:

```json
{
  "theme": {
    "colorPalette": "slate",
    "mode": "light",
    "radius": "0.5rem"
  },
  "components": {
    "button": {
      "defaultVariant": "default",
      "defaultSize": "default"
    },
    "card": {
      "defaultStyle": "default"
    },
    "input": {
      "defaultStyle": "default"
    }
  },
  "icons": {
    "size": 20,
    "strokeWidth": 1.5,
    "c4Icons": {
      "person": "user",
      "system": "box",
      "container": "package",
      "component": "component"
    }
  },
  "spacing": {
    "scale": "comfortable"
  }
}
```

Файл сохраняется как `docs/ui-config.json`.

### 2. Generate Documentation

Автоматическая генерация `docs/UI-STYLE-GUIDE.md`:

**Содержание**:
- Выбранная цветовая палитра с HEX/HSL значениями
- Компоненты и их предпочтительные варианты
- Иконки и их использование
- Spacing и layout правила
- Примеры кода для Reagent
- CSS переменные для кастомизации

**Пример секции**:
```markdown
## Buttons

### Default Style: Outline
- Primary actions: `[button {:variant "default"} "Save"]`
- Secondary actions: `[button {:variant "outline"} "Cancel"]`
- Destructive actions: `[button {:variant "destructive"} "Delete"]`

### Colors
- Background: `hsl(215.4 16.3% 46.9%)`
- Foreground: `hsl(210 20% 98%)`
```

### 3. Generate Theme Code

Создание `src/drawio_ui/theme.cljs`:

```clojure
(ns drawio-ui.theme
  "Generated theme configuration based on UI demo selection")

(def css-variables
  {:--background "0 0% 100%"
   :--foreground "222.2 84% 4.9%"
   :--primary "221.2 83.2% 53.3%"
   ;; ... остальные переменные
   })

(defn apply-theme! []
  "Applies selected theme to document root"
  (let [root (.-documentElement js/document)]
    (doseq [[prop value] css-variables]
      (.setProperty (.-style root) (name prop) value))))

(def component-defaults
  {:button {:variant "outline" :size "default"}
   :card {:style "default"}
   :badge {:variant "secondary"}})
```

### 4. Apply to Application

**Re-frame state management для демо:**
```clojure
(ns drawio-ui.demo-state
  (:require [re-frame.core :as rf]
            [cljs-local-storage.core :as ls]))

;; События для управления выбором стиля
(rf/reg-event-fx
 ::set-theme
 (fn [{:keys [db]} [_ theme-config]]
   {:db (assoc db :selected-theme theme-config)
    ::ls/set {:ui-demo-theme theme-config}}))

(rf/reg-event-fx
 ::load-saved-theme
 [(rf/inject-cofx ::ls/get [:ui-demo-theme])]
 (fn [{:keys [db local-storage]}]
   {:db (assoc db :selected-theme (:ui-demo-theme local-storage))}))

(rf/reg-event-fx
 ::export-config
 (fn [{:keys [db]}]
   (let [config (:selected-theme db)
         blob (js/Blob. [(js/JSON.stringify (clj->js config) nil 2)]
                        #js {:type "application/json"})
         url (js/URL.createObjectURL blob)]
     (.click (doto (js/document.createElement "a")
              (set! -href url)
              (set! -download "ui-config.json"))))))

;; Подписки
(rf/reg-sub ::selected-theme (fn [db] (:selected-theme db)))
(rf/reg-sub ::theme-colors (fn [db] (get-in db [:selected-theme :colors])))
```

**Применение темы к CSS переменным:**
```clojure
(ns drawio-ui.theme.utils
  (:require [re-frame.core :as rf]))

(defn apply-css-variables! [theme-config]
  "Применяет CSS переменные темы к document root"
  (let [root (.-documentElement js/document)
        colors (:colors theme-config)]
    (doseq [[var-name value] colors]
      (.setProperty (.-style root) 
                    (str "--" (name var-name)) 
                    value))))

(defn get-theme-colors [palette-name]
  "Возвращает CSS переменные для выбранной палитры"
  (case palette-name
    "zinc" {:background "0 0% 100%"
            :foreground "240 10% 3.9%"
            :primary "240 9% 17%"
            :primary-foreground "0 0% 98%"}
    "slate" {:background "0 0% 100%"
             :foreground "222.2 84% 4.9%"
             :primary "215.4 16.3% 46.9%"
             :primary-foreground "210 20% 98%"}
    ;; ... остальные палитры
    ))

;; Автоматическое применение при изменении темы
(rf/reg-fx
 ::apply-theme
 (fn [theme-config]
   (apply-css-variables! theme-config)))

(rf/reg-event-fx
 ::set-theme
 (fn [{:keys [db]} [_ theme-config]]
   {:db (assoc db :selected-theme theme-config)
    ::ls/set {:ui-demo-theme theme-config}
    ::apply-theme theme-config}))
```

**Интеграция с основным приложением:**
```clojure
(ns drawio-ui.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [drawio-ui.demo-state]
            [drawio-ui.theme.utils]))

(defn init []
  ;; Загружаем сохраненную тему при инициализации
  (rf/dispatch [::demo-state/load-saved-theme])
  
  ;; Инициализируем приложение
  (rdom/render [app] (.getElementById js/document "app")))
```

## Post-Demo Development Strategy

### Этап 1: Реализация выбранного UI (Week 1)

**Приоритет**: Качественная реализация выбранных компонентов

1. **Component Library Setup**
   - Создание всех shadcn оберток
   - Применение выбранной темы
   - Тестирование в изоляции

2. **Layout System**
   - Настройка grid и spacing
   - Responsive breakpoints
   - Container компоненты

### Этап 2: Comparison Dashboard (Week 2-3)

**Приоритет**: Визуальное сравнение диаграмм

1. **Diagram Selector**
   - Upload interface с выбранным UI
   - Thumbnail preview с выбранными card стилями
   - File validation feedback

2. **Split Diff Viewer**
   - Side-by-side layout
   - Change highlighting с выбранными цветами
   - Zoom/pan controls

3. **Component Tree**
   - Hierarchical display с выбранными иконками
   - Expand/collapse с smooth анимациями
   - Change indicators с выбранными badges

### Этап 3: Statistics & Export (Week 4)

**Приоритет**: Информативность и полезность

1. **Stats Dashboard**
   - Metrics cards с выбранным стилем
   - Progress bars для similarity
   - Icon-based categories

2. **Export Features**
   - Comparison reports
   - Visual exports (PNG/SVG)
   - Настраиваемые templates

## Success Criteria

### UI Quality
- [ ] Все shadcn/ui компоненты правильно интегрированы
- [ ] Выбранная тема применена консистентно
- [ ] Smooth анимации и transitions
- [ ] Responsive design на desktop/tablet

### Demo Functionality
- [ ] Live preview работает для всех изменений
- [ ] Export/Import JSON конфигурации
- [ ] Сохранение состояния в localStorage
- [ ] Reset to defaults функциональность

### Code Generation
- [ ] Корректная генерация CSS переменных
- [ ] Правильные defaults для компонентов
- [ ] Исчерпывающая документация
- [ ] Готовый к использованию theme.cljs

### Application Integration
- [ ] Тема применена ко всем компонентам
- [ ] Consistent visual language
- [ ] Performance не пострадал
- [ ] Maintainable code structure

## Setup Instructions

### 1. Инициализация проекта
```bash
# Создаем package.json если его нет
npm init -y

# Устанавливаем основные зависимости
npm install class-variance-authority clsx tailwind-merge lucide-react
npm install tailwindcss @tailwindcss/forms postcss autoprefixer
npm install concurrently

# Устанавливаем Radix UI компоненты по необходимости  
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
```

### 2. Конфигурация Tailwind CSS
```bash
# Создаем tailwind конфигурацию
npx tailwindcss init -p

# Создаем input CSS файл
mkdir -p src/css && echo "@tailwind base; @tailwind components; @tailwind utilities;" > src/css/input.css
```

### 3. Shadow-CLJS настройка
```bash
# Добавляем в deps.edn ClojureScript зависимости
# re-frame, reagent, cljs-local-storage уже указаны выше

# Создаем shadow-cljs.edn с конфигурацией выше
```

### 4. Структура файлов
```bash
mkdir -p src/drawio_ui/{components/{ui,demo,preview},theme,lib}
mkdir -p resources/public/{css,js}
```

### 5. CSS переменные в globals.css
```css
/* resources/public/css/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }
}
```

## Risk Mitigation

### Technical Risks
- **shadcn интеграция**: Начинаем с базовых компонентов (Button, Card), тестируем adapt-react-class
- **CSS конфликты**: Используем Tailwind с CSS переменными, контролируем специфичность
- **Performance**: Lazy loading для демо компонентов, code splitting по маршрутам
- **npm/Shadow-CLJS интеграция**: Используем проверенные зависимости, следуем документации

### UX Risks  
- **Overwhelming choice**: Группировка в секции, прогрессивное раскрытие возможностей
- **Preview accuracy**: Используем реальные компоненты с реальными данными
- **Export complexity**: One-click export с автогенерацией JSON

### Development Risks
- **CSS переменные**: Проверяем поддержку браузеров, fallback значения
- **Re-frame complexity**: Простая структура стейта, минимальные события
- **localStorage**: Обработка квот, graceful degradation если недоступен

## Metrics для оценки

### Development Metrics
- Время интеграции одного shadcn компонента: < 30 минут
- Время генерации темы из выбора: < 5 секунд
- Размер bundle увеличения: < 200KB

### User Experience Metrics
- Время загрузки демо страницы: < 3 секунды
- Время отклика live preview: < 100ms
- Успешность экспорта конфигурации: 100%

---

*Этот документ определяет детальный план создания UI демо и последующего workflow. После реализации демо все дальнейшие UI решения будут базироваться на выбранном стиле.*