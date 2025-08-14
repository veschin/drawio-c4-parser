# Draw.io C4 Diagram Comparison Web UI - Sprint Implementation Plan

## Overview
A web UI for managing, comparing, and versioning Draw.io C4 diagrams with embedded editor, timeline comparison, and programmatic rendering capabilities.

## Technology Stack

### Backend: Clojure + Enhanced API
- **Static file serving**: New endpoint for SPA hosting
- **PNG metadata validation**: Extract XML from PNG zTXT sections
- **Headless rendering**: Chrome automation for SVG/PNG generation
- **Bidirectional conversion**: JSON ↔ Draw.io XML

### Frontend: Reagent + Shadow-CLJS
- **Simplified structure**: Namespace-based organization
- **shadcn/ui integration**: Via Reagent interop (`adapt-react-class`)
- **Draw.io embedding**: `https://embed.diagrams.net` with HTML5 messaging
- **Version management**: localStorage with timeline support

## Core Features

### Diagram Input & Management
- Upload PNG+XML files (validate embedded metadata)
- Paste diagrams from Draw.io clipboard
- **Timeline versioning**: Store diagrams with timestamps
- **Embedded editor**: iframe integration with Draw.io
- **Automatic comparison**: Latest vs previous version
- Search/filter diagrams by name, date, content

### Advanced Comparison Engine
- **Multi-version selection**: Compare any two versions
- **Deep JSON diff**: Element and relationship analysis
- **Change categorization**: Added/removed/modified with reasons
- **Similarity scoring**: Fuzzy matching for renamed elements
- **Containment analysis**: Parent-child relationship evolution
- **Infinite versioning**: Continuous timeline expansion

### Visualization & Dashboard
- **Side-by-side comparison**: Visual diff highlighting
- **Statistics panel**: Quantified differences (% similarity, counts)
- **Timeline UI**: Version navigation and selection
- **Change history**: Visual timeline of diagram evolution
- **Component rendering**: Thumbnails and previews

### Export & Reporting
- **Headless rendering**: Programmatic PNG/SVG generation
- **Comparison reports**: JSON/CSV export
- **Version snapshots**: Historical diagram exports
- **Dashboard printing**: Comparison summaries

## Project Structure

```
drawio-parser/
├── src/drawio_parser/
│   ├── web.clj              # Enhanced with static serving
│   ├── core.clj             # Existing parsing logic
│   ├── png.clj              # New: PNG metadata extraction
│   └── render.clj           # New: Headless rendering
├── web-ui/                  # New frontend
│   ├── shadow-cljs.edn
│   ├── deps.edn
│   ├── package.json
│   ├── src/drawio_ui/
│   │   ├── core.cljs        # Main entry + routing
│   │   ├── storage.cljs     # localStorage + versioning
│   │   ├── comparison.cljs  # Diff algorithms
│   │   ├── embed.cljs       # Draw.io iframe integration
│   │   ├── render.cljs      # Headless rendering calls
│   │   └── timeline.cljs    # Version management UI
│   └── resources/public/
│       ├── index.html
│       └── css/
├── docs/
│   └── UI-SPRINT.md         # This document
└── resources/
    └── test-diagrams/       # Sample files
```

## Implementation Phases

### Phase 1: Foundation Setup (Week 1-2)

#### Backend Extensions
1. **Static file serving endpoint**
   - Add route for serving SPA files
   - Handle client-side routing (catch-all)
   
2. **PNG metadata validation** 
   - Research existing tools: `drawio-read`, `pzl/drawio-read`
   - Implement zTXT section parsing
   - Validate embedded XML extraction

3. **Headless rendering research**
   - Evaluate approaches: Java Selenium, Chrome CLI, Node.js bridge
   - Prototype SVG/PNG generation from XML
   - Test performance and reliability

#### Frontend Setup
1. **Shadow-CLJS + Reagent project**
   - Initialize build configuration
   - Basic SPA with client-side routing
   - Hot reload development setup

2. **localStorage schema design**
   - Version timeline data structure
   - Diagram metadata storage
   - Performance considerations for large datasets

### Phase 2: Core Functionality (Week 3-4)

#### Diagram Management
1. **Enhanced upload system**
   - PNG+XML validation and extraction
   - XML/paste data processing
   - File type detection and validation

2. **Version timeline implementation**
   - Automatic versioning on save/upload
   - Timeline UI component
   - Version selection and navigation

3. **Embedded Draw.io editor**
   - iframe integration with `embed.diagrams.net`
   - HTML5 messaging API implementation
   - Save-to-timeline functionality
   - Error handling and fallbacks

#### Basic Comparison Engine
1. **JSON diff algorithms**
   - Element-level comparison
   - Relationship change detection
   - Basic similarity scoring

2. **Simple diff visualization**
   - Side-by-side layout
   - Change highlighting
   - Statistics summary

### Phase 3: Advanced Features (Week 5-6)

#### Enhanced Comparison
1. **Multi-version timeline UI**
   - Version picker interface
   - Visual timeline component
   - Comparison matrix for multiple versions

2. **Advanced diff analysis**
   - Change reason categorization
   - Fuzzy matching for renamed elements
   - Containment relationship tracking
   - Performance optimization for large diagrams

3. **Dashboard components**
   - Statistics visualization (charts/graphs)
   - Change summary panels
   - Export/sharing options

#### Rendering Integration
1. **Headless SVG/PNG generation**
   - Backend service integration
   - API endpoints for rendering
   - Thumbnail generation for timeline

2. **Component-level rendering**
   - Selective diagram part rendering
   - Comparison view integration
   - Performance optimization

### Phase 4: Polish & Advanced Features (Week 7+)

#### UX Improvements
1. **shadcn/ui integration**
   - Component library setup
   - Consistent design system
   - Accessibility improvements

2. **Performance optimization**
   - Large file handling
   - Efficient diff algorithms
   - localStorage management
   - Lazy loading strategies

#### Advanced Export
1. **Multiple export formats**
   - PDF generation
   - Interactive HTML reports
   - Version comparison documents

2. **Integration features**
   - API endpoints for external tools
   - Webhook support for automated workflows
   - Batch processing capabilities

## Research & Investigation Areas

### Critical Technical Research
1. **PNG metadata extraction**
   - zTXT section parsing implementation
   - Validation of embedded XML
   - Error handling for corrupted files

2. **Headless rendering feasibility**
   - Chrome automation options (Selenium vs CLI)
   - Performance benchmarks
   - Resource usage optimization
   - Alternative approaches (Node.js bridge)

3. **shadcn/ui + Reagent integration**
   - Component wrapping patterns
   - Event handling translation
   - Styling integration
   - Performance implications

4. **Bidirectional parsing**
   - Existing tool evaluation (drawio-parser-go, C4 libraries)
   - JSON → Draw.io XML generation
   - Template-based diagram creation

### UX/UI Research
1. **Timeline interface design**
   - Version navigation patterns
   - Comparison selection UI
   - Visual diff representation

2. **Large diagram handling**
   - Performance optimization strategies
   - Progressive loading
   - Viewport management

3. **Component-level rendering**
   - Technical feasibility
   - User experience design
   - Performance trade-offs

## Success Metrics

### Technical Milestones
- [ ] PNG+XML validation working reliably
- [ ] Timeline version management functional
- [ ] Embedded Draw.io editor integrated
- [ ] Basic headless rendering operational
- [ ] Multi-version comparison dashboard complete

### User Experience Goals
- [ ] Intuitive version navigation
- [ ] Fast comparison loading (<3 seconds)
- [ ] Reliable diagram parsing (>95% success rate)
- [ ] Mobile-responsive interface
- [ ] Accessible design (WCAG 2.1 AA)

### Performance Targets
- [ ] Handle diagrams up to 10MB
- [ ] Support 100+ versions per diagram
- [ ] Comparison results in <5 seconds
- [ ] localStorage efficiency (<50MB typical usage)
- [ ] Headless rendering <10 seconds per diagram

## Risk Assessment & Mitigation

### High-Risk Areas
1. **Headless rendering complexity**
   - *Risk*: Chrome automation unreliable
   - *Mitigation*: Fallback to static image generation, external service option

2. **PNG metadata extraction**
   - *Risk*: zTXT parsing fails for some files
   - *Mitigation*: Multiple parsing libraries, graceful degradation

3. **Performance with large diagrams**
   - *Risk*: Browser performance issues
   - *Mitigation*: Progressive loading, virtualization, worker threads

### Medium-Risk Areas
1. **shadcn/ui integration**
   - *Risk*: Component wrapping complexity
   - *Mitigation*: Start with basic components, gradual integration

2. **localStorage limitations**
   - *Risk*: Storage quota exceeded
   - *Mitigation*: Data compression, cleanup strategies, external storage option

## Future Enhancements

### Post-MVP Features
- Real-time collaboration on comparisons
- Integration with Git workflows
- Automated regression testing for diagrams
- AI-powered change summarization
- Team sharing and permissions
- REST API for external integrations
- Plugin system for custom analyzers

### Scalability Considerations
- Server-side storage option
- Database integration for enterprise use
- Microservice architecture
- Containerization and deployment automation
- Performance monitoring and analytics

---

*This document serves as the master plan for implementing the Draw.io C4 diagram comparison web UI. It will be updated as research findings and implementation details evolve.*