# Parsing Draw.io C4 Diagrams

This document outlines the rules for parsing C4 diagram information from Draw.io XML files.

## Parsing `drawio.drawio.xml` (Exported File)

The `drawio.drawio.xml` file is a standard XML file that can be parsed using any XML parsing library.

### 1. Identifying Components

C4 components are defined by `<object>` tags. Each component has a set of attributes that describe it.

-   **Component Name:** The `c4Name` attribute of the `<object>` tag.
-   **Component Type:** The `c4Type` attribute of the `<object>` tag (e.g., "System", "Container", "Component", "Person").
-   **Component Description:** The `c4Description` attribute of the `<object>` tag.
-   **Technology:** The `c4Technology` attribute of the `<object>` tag.

**Example:**

```xml
<object placeholders="1" c4Name="Container name" c4Type="Container" c4Technology="e.g. SpringBoot, ElasticSearch, etc." c4Description="Description of container role/responsibility." label="..." id="3">
    <mxCell style="..." vertex="1" parent="1">
    <mxGeometry x="490" y="470" width="240" height="120" as="geometry" />
    </mxCell>
</object>
```

From this example, we can extract the following information:

-   **Name:** "Container name"
-   **Type:** "Container"
-   **Description:** "Description of container role/responsibility."
-   **Technology:** "e.g. SpringBoot, ElasticSearch, etc."

### 2. Identifying Relationships

Relationships between components are defined by `<mxCell>` tags that have an `edge="1"` attribute. The `source` and `target` attributes of the `<mxCell>` tag reference the `id` of the connected components.

The description of the relationship is stored in the `value` attribute of a child `<mxCell>` of the edge. The technology used for the connection is often included in the `value` as well, enclosed in square brackets (e.g., `[HTTP]`).

**Example:**

```xml
<object placeholders="1" c4Type="Relationship" id="18">
    <mxCell style="..." edge="1" source="16" target="17" parent="1">
    <mxGeometry width="240" relative="1" as="geometry">
        <mxPoint x="550" y="1000" as="sourcePoint" />
        <mxPoint x="550" y="1260" as="targetPoint" />
    </mxGeometry>
    </mxCell>
</object>
<mxCell id="19" value="[HTTP]" style="edgeLabel;..." vertex="1" connectable="0" parent="18">
    <mxGeometry x="-0.0286" y="-2" relative="1" as="geometry">
    <mxPoint as="offset" />
    </mxGeometry>
</mxCell>
```

From this example, we can extract the following relationship:

-   **Source Component ID:** "16"
-   **Target Component ID:** "17"
-   **Description:** The description can be extracted from the `label` of the `<object>` tag with `c4Type="Relationship"`.
-   **Technology:** "[HTTP]" (from the `value` attribute of the child `mxCell` with `parent="18"`)

To get the full picture of the relationship, you need to look up the components with `id="16"` and `id="17"`.

## Parsing `drawio-paste.xml`

The `drawio-paste.xml` file contains URL-encoded XML data. To parse it, you need to perform the following steps:

1.  **URL Decode:** Decode the content of the file.
2.  **Parse XML:** The decoded content is an XML string that can be parsed using the same rules as for `drawio.drawio.xml`.

The structure of the XML within `drawio-paste.xml` is identical to `drawio.drawio.xml`, but it is contained within a single line and requires decoding. This makes it more difficult to inspect manually, but programmatically it is a simple two-step process.
