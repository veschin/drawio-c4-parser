# Draw.io C4 Diagram Parser

Этот проект представляет собой парсер на Clojure для извлечения данных из C4-диаграмм, созданных в Draw.io (app.diagrams.net). Он анализирует XML-файлы, экспортированные из Draw.io, и преобразует их в структурированные данные в формате Clojure.

Парсер извлекает как явную информацию (элементы, связи), так и неявные иерархические связи, основанные на визуальном расположении элементов (вложенности).

## Ожидаемые входные данные

Парсер ожидает на вход XML-файл, соответствующий формату экспорта Draw.io. Ключевая информация должна храниться в тегах `<object>`, которые содержат специальные C4-атрибуты (`c4Name`, `c4Type` и т.д.).

### Пример входных данных (фрагмент XML)

```xml
<root>
  <!-- Boundary Element -->
  <object c4Name="My System" c4Type="SystemScopeBoundary" id="boundary-1">
    <mxCell vertex="1" parent="1">
      <mxGeometry x="100" y="100" width="400" height="300" as="geometry" />
    </mxCell>
  </object>

  <!-- Contained Element -->
  <object c4Name="API" c4Type="Container" c4Technology="Clojure" id="container-5">
    <mxCell vertex="1" parent="1">
      <mxGeometry x="150" y="150" width="150" height="100" as="geometry" />
    </mxCell>
  </object>

  <!-- Relationship -->
  <object c4Type="Relationship" id="rel-10">
    <mxCell edge="1" source="user-id" target="container-5" parent="1"/>
  </object>
  <mxCell id="rel-label-11" value="[JSON/HTTPS]" parent="rel-10"/>
</root>
```

## Структура выходных данных

Парсер возвращает Clojure-мапу, содержащую два ключа: `:elements` и `:relationships`. После обогащения данных некоторые элементы в списке `:elements` также могут содержать ключ `:parent-id`.

### Пример выходных данных (Clojure Hash Map)

```clojure
{:elements
 [{:id "boundary-1",
   :name "My System",
   :type "SystemScopeBoundary",
   :description nil,
   :technology nil,
   :application nil,
   :label nil,
   :geometry {:x 100, :y 100, :width 400, :height 300}}
  {:id "container-5",
   :name "API",
   :type "Container",
   :description nil,
   :technology "Clojure",
   :application nil,
   :label nil,
   :geometry {:x 150, :y 150, :width 150, :height 100},
   :parent-id "boundary-1"}] ; <-- Неявная связь

 :relationships
 [{:id "rel-10",
   :source "user-id",
   :target "container-5",
   :description nil,
   :label nil,
   :technology "[JSON/HTTPS]"}]}
```

## Сопоставление данных

### Элементы

| Ключ в Clojure | Откуда извлекается в XML                                                   |
|:---------------|:---------------------------------------------------------------------------|
| `:id`          | Атрибут `id` тега `<object>`                                               |
| `:name`        | Атрибут `c4Name` тега `<object>`                                           |
| `:type`        | Атрибут `c4Type` тега `<object>`                                           |
| `:description` | Атрибут `c4Description` тега `<object>`                                    |
| `:technology`  | Атрибут `c4Technology` тега `<object>`                                     |
| `:application` | Атрибут `c4Application` тега `<object>`                                    |
| `:label`       | Атрибут `label` тега `<object>`                                            |
| `:geometry`    | Атрибуты `x`, `y`, `width`, `height` дочернего тега `<mxGeometry>`         |
| `:parent-id`   | **(Неявный)** `id` родительского элемента, вычисляется на основе геометрии |

### Связи

| Ключ в Clojure | Откуда извлекается в XML                                                       |
|:---------------|:-------------------------------------------------------------------------------|
| `:id`          | Атрибут `id` тега `<object>` с `c4Type="Relationship"`                         |
| `:source`      | Атрибут `source` дочернего тега `<mxCell>`                                     |
| `:target`      | Атрибут `target` дочернего тега `<mxCell>`                                     |
| `:description` | Атрибут `c4Description` тега `<object>`                                        |
| `:label`       | Атрибут `label` тега `<object>`                                                |
| `:technology`  | Атрибут `value` связанного тега `<mxCell>` (который является меткой для ребра) |

## Критерии выявления неявных связей (вложенности)

Неявная связь (принадлежность) определяется, когда один элемент визуально находится внутри другого. Для этого должны быть выполнены следующие условия:

1.  **Тип родителя**: Родительский элемент должен быть элементом-границей, то есть иметь тип (`c4Type`) `SystemScopeBoundary` или `ContainerScopeBoundary`.
2.  **Геометрическое вложение**: Прямоугольник, описывающий геометрию дочернего элемента (его `bounding box`), должен быть **полностью** содержаться внутри прямоугольника родительского элемента.

Если оба условия выполнены, дочернему элементу добавляется ключ `:parent-id` со значением `id` родительского элемента.

## Использование

### Запуск тестов

Для проверки корректности работы парсера выполните:
```sh
make test
```

### Запуск приложения

Для запуска парсера и вывода результата в консоль выполните:
```sh
make run
```
Приложение обработает файл `resources/drawio.drawio.xml` и выведет распарсенные и обогащенные данные.
