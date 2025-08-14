# Phase 2: Core UI & Comparison Dashboard - Implementation Plan

## Implementation Status Summary

**Focus Areas:**
- Quality UI with shadcn/ui components integrated into Reagent
- Visual diagram comparison with fancy diff visualization
- Component tree navigation for C4 elements
- SVG pre-rendering for efficient diagram display
- Minimalist design: simplicity, informativeness, visual clarity

**Design Principles:**
- **Минимализм** - Clean, uncluttered interface focused on data
- **Простота** - Intuitive navigation and interaction patterns
- **Информативность** - Rich visual feedback and clear status indicators
- **Наглядность** - Icons, colors, and visual hierarchy for quick comprehension

---

## UI Foundation

### 1. shadcn/ui Integration (`src/drawio_ui/components/`)
**Status: NOT STARTED**

**Components to implement:**
- `ui.cljs` - shadcn component wrappers using `adapt-react-class`
- `icons.cljs` - Lucide React icons integration
- `theme.cljs` - Design tokens and CSS variables
- `layout.cljs` - Core layout components (Header, Sidebar, Main)

**Key shadcn components needed:**
- Card, Button, Badge, Tabs - Basic UI elements
- Tree, Collapsible - Component hierarchy navigation
- Progress, Separator - Visual feedback elements
- Tooltip, Popover - Contextual information

### 2. Design System (`resources/public/css/`)
**Status: NOT STARTED**

**Design tokens:**
- Color scheme for diff visualization (success/destructive/warning)
- C4 element type colors (System/Container/Component/Person)
- Typography scale and spacing system
- Icon sizes and visual weights

**Diff color scheme:**
- Added elements: `hsl(142.1 76.2% 36.3%)` (green)
- Removed elements: `hsl(346.8 77.2% 49.8%)` (red)
- Modified elements: `hsl(47.9 95.8% 53.1%)` (yellow)
- Unchanged elements: `hsl(210 40% 70%)` (muted)

---

## Core Comparison Components

### 3. Diagram Selector (`src/drawio_ui/components/diagram_selector.cljs`)
**Status: NOT STARTED**

**Features:**
- Dual-panel selection interface for A/B comparison
- SVG thumbnail previews with caching
- Drag & drop file upload zones
- Recent diagrams quick access
- File format validation (PNG+XML, XML, paste data)

**UI Elements:**
- Upload areas with drag-over states
- Thumbnail grids with selection indicators
- File info badges (size, date, format)
- Loading states with progress indicators

### 4. Split Diff Viewer (`src/drawio_ui/components/diff_viewer.cljs`)
**Status: NOT STARTED**

**Core functionality:**
- Side-by-side diagram comparison
- Synchronized scrolling and zoom
- SVG overlay highlighting for changes
- Pan/zoom controls for large diagrams
- Fullscreen toggle

**Visual features:**
- Change highlighting with color coding
- Connecting lines between related elements
- Minimap for navigation in large diagrams
- Export comparison view as PNG/SVG

### 5. Component Tree Navigator (`src/drawio_ui/components/component_tree.cljs`)
**Status: NOT STARTED**

**Tree structure:**
- Hierarchical C4 element display
- Type-based icons (Person, System, Container, Component)
- Expand/collapse with smooth animations
- Change indicators (badges, colors, icons)

**Interaction features:**
- Click to highlight in diagram viewer
- Search/filter by element name or type
- Bulk expand/collapse controls
- Export tree structure as JSON

### 6. Statistics Dashboard (`src/drawio_ui/components/stats_panel.cljs`)
**Status: NOT STARTED**

**Metrics display:**
- Similarity percentage with progress bar
- Element count changes (added/removed/modified)
- Relationship change summary
- Complexity score comparison

**Visual elements:**
- Minimalist metric cards
- Icon-based category indicators
- Trend visualization (arrows, colors)
- Quick summary badges

---

## Comparison Engine (UI-Focused)

### 7. Diff Analysis (`src/drawio_ui/diff.cljs`)
**Status: NOT STARTED**

**Algorithms:**
- Element-level comparison with similarity scoring
- Relationship change detection
- Geometry-based change analysis (position, size)
- Fuzzy matching for renamed elements

**Output format:**
- Structured diff data for UI consumption
- Change categorization (semantic types)
- Confidence scores for fuzzy matches
- Visual positioning data for overlay rendering

### 8. SVG Renderer & Cache (`src/drawio_ui/renderer.cljs`)
**Status: NOT STARTED**

**Rendering features:**
- SVG generation from Draw.io XML
- Thumbnail creation with aspect ratio preservation
- Change overlay generation (highlights, annotations)
- Caching strategy for performance

**Performance optimizations:**
- Lazy loading for large diagrams
- Progressive rendering for complex diagrams
- Memory-efficient caching with LRU eviction
- Worker-based rendering for non-blocking UI

### 9. State Management (`src/drawio_ui/state.cljs`)
**Status: NOT STARTED**

**State structure:**
- Selected diagrams for comparison
- Diff results and visualization state
- UI state (zoom, pan, selected elements)
- Cache management and invalidation

**Events:**
- Diagram selection and loading
- Diff computation triggers
- UI interaction handling
- Cache updates and cleanup

---

## Integration Points

### 10. Backend API Enhancement
**Status: EXISTING - NEEDS EXTENSION**

**Required endpoints:**
- Thumbnail generation via `/api/v1/render/svg`
- Batch processing for multiple diagram comparison
- SVG optimization for web display
- Metadata extraction for quick previews

### 11. Frontend Routing (`src/drawio_ui/core.cljs`)
**Status: EXISTING - NEEDS EXTENSION**

**New routes:**
- `/compare` - Main comparison interface
- `/compare/:id1/:id2` - Direct comparison link
- `/diagram/:id/versions` - Version timeline view
- `/settings` - UI preferences and cache management

---

## Success Criteria

### UI Quality
- [ ] shadcn/ui components properly integrated with Reagent
- [ ] Consistent design system with proper theming
- [ ] Responsive layout working on desktop and tablet
- [ ] Smooth animations for state transitions
- [ ] Icon-based visual hierarchy throughout

### Comparison Features
- [ ] Side-by-side diagram comparison functional
- [ ] Component tree navigation with change highlighting
- [ ] Statistics dashboard showing meaningful metrics
- [ ] SVG pre-rendering for fast diagram display
- [ ] Export capabilities for comparison results

### Performance
- [ ] Diagram loading under 3 seconds for typical files
- [ ] Smooth zoom/pan interactions (60fps)
- [ ] Efficient memory usage with caching
- [ ] Responsive UI during diff computation
- [ ] Progressive loading for large diagrams

### User Experience
- [ ] Intuitive drag-and-drop file handling
- [ ] Clear visual feedback for all operations
- [ ] Keyboard shortcuts for power users
- [ ] Helpful tooltips and contextual information
- [ ] Error states with actionable guidance

---

## Technical Research Areas

### shadcn/ui + Reagent Integration
- Component wrapping patterns with `adapt-react-class`
- Event handling translation between React and Reagent
- Styling integration (CSS variables, Tailwind classes)
- Performance implications and optimization strategies

### SVG Rendering Optimization
- Efficient SVG generation from Draw.io XML
- Change overlay techniques (masks, filters, layers)
- Memory management for large diagram collections
- Web worker integration for non-blocking rendering

### Diff Algorithm Refinement
- Visual similarity scoring beyond text comparison
- Geometric change detection (moved, resized, rotated)
- Relationship mapping between diagram versions
- Performance optimization for complex diagrams

---

## Risk Assessment

### High-Risk Areas
1. **shadcn/ui integration complexity**
   - *Risk*: Component wrapping breaks or performs poorly
   - *Mitigation*: Start with basic components, test thoroughly, fallback options

2. **SVG rendering performance**
   - *Risk*: Large diagrams cause browser performance issues
   - *Mitigation*: Progressive loading, virtualization, worker threads

### Medium-Risk Areas
1. **Diff visualization clarity**
   - *Risk*: Complex changes hard to visualize effectively
   - *Mitigation*: User testing, iterative design, multiple view modes

2. **State management complexity**
   - *Risk*: Complex UI state becomes hard to manage
   - *Mitigation*: Clear state structure, event-driven architecture

---

## Implementation Priority

### Week 1: Foundation
1. shadcn/ui component integration setup
2. Basic design system and theming
3. Diagram selector component
4. SVG rendering research and prototyping

### Week 2: Core Features
1. Split diff viewer implementation
2. Component tree navigator
3. Basic diff algorithm
4. Statistics dashboard

### Week 3: Polish & Integration
1. Performance optimization
2. Visual refinements
3. Export capabilities
4. Error handling and edge cases

### Week 4: Advanced Features
1. Advanced diff visualization
2. Keyboard shortcuts
3. Settings and preferences
4. Documentation and cleanup

---

*This document focuses on UI/UX excellence with minimalist design principles. Frontend testing is deliberately excluded to maintain implementation velocity and focus on visual quality.*