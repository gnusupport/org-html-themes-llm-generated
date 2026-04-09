# AI Graph Theme - Complete Implementation

## Summary

The AI Graph theme has been fully developed with LLM assistance (Qwen3.5-35B-A3B-UD-Q4_K_M.gguf) and committed locally.
It represents the latest addition to the expanded org-html-themes collection.

## Development Note

This theme, along with the Executive theme and others in this fork, was developed using an LLM to create
professional, diverse designs that honor the GNU Project's Four Software Freedoms and Richard Stallman's
vision for free software.

## What Was Done

### 1. Core Theme Files
- **src/ai_graph_theme/css/ai-graph.css** - Complete CSS styling (627 lines)
  - Full-page graph canvas layout
  - Two-column layout with sidebar
  - Enhanced TODO/DONE items with prominent backgrounds
  - Responsive design for all screen sizes
  - Dark AI/tech aesthetic with neon colors

- **src/ai_graph_theme/js/ai-graph.js** - Interactive graph functionality (720 lines)
  - D3.js force-directed graph visualization
  - Node navigation, dragging, and zooming
  - Two-column layout toggle
  - Dynamic sidebar navigation generation
  - Keyboard shortcuts support

### 2. Org Mode Setup Files
- **org/html-theme-ai_graph.setup** - Main theme setup (3220 bytes)
- **org/html-theme-ai_graph-local.setup** - Local customization (764 bytes)
- **org/html-theme-ai_graph_left-local.setup** - Left sidebar variant (774 bytes)

### 3. Test Files
- **test-ai_graph.org** - Test document with AI/ML content (2955 bytes)
- **test-ai_graph.html** - Pre-exported test HTML (12231 bytes)

### 4. Shared Library
- **src/lib/js/org-keyboard-shortcuts.js** - Keyboard shortcuts utility

## Development Approach

This theme and the expanded theme collection were developed with assistance from an LLM
(Qwen3.5-35B-A3B-UD-Q4_K_M.gguf), following these principles:

1. **Preserve Original Spirit**: Maintain compatibility with Fabrice Niessen's original themes
2. **Enhance Diversity**: Create 20+ unique themes covering various use cases
3. **Maintain Quality**: Ensure all themes are professional, accessible, and well-tested
4. **Honor Freedom**: Keep everything GPL-3.0 licensed, respecting the Four Software Freedoms

## Local Commit

The changes have been committed locally with commit hash: `8b3b483`

**Commit message:**
```
Add AI Graph theme - Interactive force-directed graph navigation

Add new AI Graph theme with D3.js force-directed graph visualization:
- src/ai_graph_theme/: CSS and JavaScript for interactive graph
- org/html-theme-ai_graph.setup: Main Org mode setup file
- org/html-theme-ai_graph-local.setup: Local customization file
- org/html-theme-ai_graph_left-local.setup: Left sidebar variant
- test-ai_graph.org: Test document with AI/ML content
- test-ai_graph.html: Pre-exported test HTML
- src/lib/js/org-keyboard-shortcuts.js: Shared keyboard shortcuts library

Features:
- Interactive force-directed graph navigation using D3.js
- Click nodes to navigate to sections
- Drag nodes to rearrange, scroll to zoom
- Two-column layout option with sidebar navigation
- Enhanced TODO/DONE item styling with prominent backgrounds
- Responsive design for all screen sizes
- Dark AI/tech aesthetic with neon colors
- Full-page graph background with content overlay
```

## Files Staged/Committed

```
A  org/html-theme-ai_graph-local.setup
A  org/html-theme-ai_graph.setup
A  org/html-theme-ai_graph_left-local.setup
A  src/ai_graph_theme/css/ai-graph.css
A  src/ai_graph_theme/js/ai-graph.js
A  src/lib/js/org-keyboard-shortcuts.js
A  test-ai_graph.html
A  test-ai_graph.org
```

## How to Push

### Option 1: Using GitHub CLI (Recommended)

```bash
# Install GitHub CLI if not already installed
# https://cli.github.com/

# Authenticate with GitHub
gh auth login

# Push to gnu-support repository
git remote add gnu-support https://github.com/gnusupport/org-html-themes.git
git push gnu-support HEAD:master
```

### Option 2: Using SSH

```bash
# Add SSH remote
git remote add gnu-support git@github.com:gnusupport/org-html-themes.git

# Push
git push gnu-support HEAD:master
```

### Option 3: Create Pull Request Manually

1. Go to: https://github.com/gnusupport/org-html-themes
2. Click "Fork" to create your own fork
3. Clone your fork: `git clone https://github.com/YOUR_USERNAME/org-html-themes.git`
4. Add original as upstream: `git remote add upstream https://github.com/gnusupport/org-html-themes.git`
5. Copy files from this repository to your fork
6. Create a pull request from your fork to gnu-support

## Theme Features

### Interactive Graph
- Force-directed graph visualization using D3.js
- Click nodes to navigate to document sections
- Drag nodes to rearrange
- Scroll to zoom in/out
- Keyboard shortcuts (Esc to reset view)

### Two-Column Layout
- Left sidebar with auto-generated navigation
- Toggle button (⊞) to switch between layouts
- Responsive design adapts to screen size

### Enhanced TODO/DONE Items
- TODO: Blue background with checkbox icon
- DONE: Green gradient background with glowing checkbox
- "COMPLETED" badge on finished items
- Hover effects with animation

### Aesthetics
- Dark space-themed background
- Neon colors (purple, cyan, green)
- Glowing effects on interactive elements
- Modern Orbitron and Exo 2 fonts

## Testing

To test the theme locally:

```bash
emacs --batch --visit=test-ai_graph.org --funcall=org-html-export-to-html
```

Then open `test-ai_graph.html` in a browser.

## Next Steps

1. Push to gnu-support repository using one of the methods above
2. Test the pushed version on the repository
3. Update documentation if needed
4. Consider adding theme examples and screenshots
