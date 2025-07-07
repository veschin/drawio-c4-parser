# Draw.io C4 Diagram Parser Microservice

Этот проект представляет собой микросервис на Clojure для извлечения данных из C4-диаграмм, созданных в Draw.io (app.diagrams.net). Он предоставляет REST API для анализа XML-файлов и возвращает структурированные данные в формате JSON.

Сервис извлекает как явную информацию (элементы, связи), так и неявные иерархические связи, основанные на визуальном расположении элементов (вложенности).

## Функциональность

-   **REST API**: Предоставляет эндпоинт `POST /parse/diagram` для обработки XML-данных.
-   **Два формата**: Поддерживает как стандартный XML-экспорт, так и URL-encoded "paste" данные из Draw.io.
-   **Анализ геометрии**: Определяет вложенность элементов (например, контейнеры внутри системных границ) на основе их координат.
-   **Готовность к развертыванию**: Включает `Dockerfile` для легкой контейнеризации и развертывания.

## Использование

### Запуск через Docker (Рекомендуемый способ)

1.  **Сборка Docker-образа:**
    ```sh
    make docker-build
    ```

2.  **Запуск контейнера:**
    ```sh
    make docker-run
    ```
    Сервис будет доступен по адресу `http://localhost:8080`.

### Локальный запуск для разработки

1.  **Запуск тестов:**
    Тесты запускаются с помощью [Kaocha](https://github.com/lambdaisland/kaocha).
    ```sh
    make test
    ```

2.  **Запуск веб-сервера:**
    ```sh
    make run
    ```
    Сервер запустится на порту 8080.

### Сборка Uberjar

Для сборки standalone jar-файла выполните:
```sh
make uberjar
```
Результат будет сохранен в `target/space.veschin.drawio-parser-0.1.0-standalone.jar`.

## REST API

### `POST /parse/diagram`

Этот эндпоинт принимает XML-данные диаграммы в теле запроса и возвращает JSON-представление C4-модели.

-   **URL**: `/parse/diagram`
-   **Метод**: `POST`
-   **Headers**:
    -   `Content-Type`: `application/xml` (для стандартного экспорта) или `text/plain` (для "paste" данных).
-   **Query Params (опционально)**:
    -   `type=paste`: Укажите этот параметр, если вы отправляете URL-encoded "paste" данные.

#### Пример использования (cURL)

-   **Отправка стандартного XML-файла:**
    ```sh
    curl -X POST --header "Content-Type: application/xml" \
         --data-binary "@resources/drawio.drawio.xml" \
         http://localhost:8080/parse/diagram
    ```

-   **Отправка "paste" данных:**
    ```sh
    curl -X POST --header "Content-Type: text/plain" \
         --data-binary "@resources/drawio-paste.xml" \
         "http://localhost:8080/parse/diagram?type=paste"
    ```

## Структура выходных данных (JSON)

Сервис возвращает JSON-объект, содержащий два ключа: `elements` и `relationships`.

```json
{
  "elements": [
    {
      "id": "container-5",
      "name": "API",
      "type": "Container",
      "description": null,
      "technology": "Clojure",
      "application": null,
      "label": "...",
      "geometry": { "x": 150, "y": 150, "width": 150, "height": 100 },
      "parent-id": "boundary-1"
    }
  ],
  "relationships": [
    {
      "id": "rel-10",
      "source": "user-id",
      "target": "container-5",
      "description": null,
      "label": "...",
      "technology": "[JSON/HTTPS]"
    }
  ]
}
```

## Критерии выявления неявных связей (вложенности)

Неявная связь (принадлежность) определяется, когда один элемент визуально находится внутри другого. Для этого должны быть выполнены следующие условия:

1.  **Тип родителя**: Родительский элемент должен быть элементом-границей, то есть иметь тип (`c4Type`) `SystemScopeBoundary` или `ContainerScopeBoundary`.
2.  **Геометрическое вложение**: Прямоугольник, описывающий геометрию дочернего элемента, должен быть **полностью** содержаться внутри прямоугольника родительского элемента.

Если оба условия выполнены, дочернему элементу добавляется ключ `parent-id` со значением `id` родительского элемента.

```