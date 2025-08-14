# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Clojure microservice that parses Draw.io C4 diagrams and extracts elements and relationships as JSON. It provides REST API endpoints for both standard Draw.io XML exports and URL-encoded paste data.

## Core Architecture

### Main Namespaces
- `drawio-parser.core` - Core parsing logic for XML processing, element extraction, and geometry-based containment detection
- `drawio-parser.web` - HTTP server and API endpoints using http-kit and reitit

### Key Functions
- `parse-diagram` - Main parsing function that extracts C4 elements and relationships from XML
- `enrich-with-containment` - Analyzes element geometry to detect parent-child relationships (SystemScopeBoundary/ContainerScopeBoundary containment)
- `decode-and-read` - URL-decodes paste data from Draw.io before parsing

## Development Commands

### Running Tests
```bash
make test
# Or directly: clj -M:test
```

### Building
```bash
make uberjar
# Or directly: clj -T:build uber
```

### Running Locally
```bash
make run
# Or directly: clj -M -m drawio-parser.web
```

### Docker Operations
```bash
make docker-build    # Build image
make docker-run      # Run with endpoint testing
make docker-stop     # Stop container
```

## Testing Framework

- Uses Kaocha test runner configured in `tests.edn`
- Test files follow `-test` suffix pattern
- Main test file: `test/drawio_parser/core_test.clj`
- Tests include full file parsing, paste data parsing, and error handling scenarios

## Configuration

- Environment variable `DP_PORT` controls server port (default: 8080)
- Use `.env` file for local development configuration

## API Endpoints

- `POST /api/v1/parse/export` - Accepts standard Draw.io XML export
- `POST /api/v1/parse/paste` - Accepts URL-encoded paste data from Draw.io

## Key Dependencies

- `org.clojure/data.xml` - XML parsing
- `http-kit/http-kit` - HTTP server
- `metosin/reitit` - Routing
- `cheshire/cheshire` - JSON handling
- `lambdaisland/kaocha` - Testing (test alias only)

## Parsing Logic

The parser extracts C4 elements from `<object>` tags with C4-specific attributes (`c4Name`, `c4Type`, `c4Technology`, etc.) and relationships from objects with `c4Type="Relationship"`. It performs geometry-based analysis to detect implicit parent-child relationships when elements are contained within boundary objects.