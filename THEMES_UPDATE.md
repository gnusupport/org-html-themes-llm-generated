# Org-HTML-Themes: Complete Collection

## 🎉 Newest Themes: Executive & AI Graph!

### 🤖 AI Graph Theme (Interactive Force-Directed Graph)
**File**: `src/ai_graph_theme/css/ai-graph.css` (627 lines)

**Perfect for:**
- AI/ML documentation
- Technical projects with complex navigation
- Interactive content exploration
- Developer logs
- Tech portfolios

**Features:**
- 🌐 Force-directed graph visualization using D3.js
- 🔗 Click nodes to navigate to sections
- 🎯 Drag nodes to rearrange, scroll to zoom
- 📊 Two-column layout with optional sidebar navigation
- ✅ Enhanced TODO/DONE with prominent green backgrounds
- ⌨️ Keyboard shortcuts (Esc to reset view)
- 📱 Responsive design for all devices
- 🌌 Dark space aesthetic with neon accents

**Files:**
- ✅ `src/ai_graph_theme/css/ai-graph.css`
- ✅ `src/ai_graph_theme/js/ai-graph.js` (720 lines)
- ✅ `org/html-theme-ai_graph.setup`
- ✅ `org/html-theme-ai_graph-local.setup`
- ✅ `org/html-theme-ai_graph_left-local.setup`
- ✅ `test-ai_graph.org`
- ✅ `test-ai_graph.html`

---

### ⚡ Executive Theme (Business Professional)
**File**: `src/executive_theme/css/executive.css` (~1,200 lines)

**Perfect for:**
- Corporate documentation
- Business reports
- Professional presentations
- Technical documentation
- Formal writing

**Features:**
- 📊 Comprehensive CSS coverage (40+ selectors)
- 💼 Navy & gold professional color scheme
- 📝 Full Org-mode element support
- 📚 Left sidebar TOC with gold accents
- 🖼️ Enhanced code blocks and syntax highlighting
- 🎨 All admonitions styled (NOTE, WARNING, TIP, DANGER)
- 📐 Tables with professional styling
- 📄 Print-ready output
- 📱 Mobile responsive

**Complete Coverage:**
- ✅ Code blocks & examples
- ✅ All admonition types
- ✅ Text alignment (center, left, right)
- ✅ Verse & poetry
- ✅ Mathematical expressions
- ✅ Footnotes
- ✅ Tags & flagged items
- ✅ Inline tasks
- ✅ Heading links
- ✅ Definition lists
- ✅ Subtitles & underlines

**Files:**
- ✅ `src/executive_theme/css/executive.css`
- ✅ `org/html-theme-executive-local.setup`
- ✅ `org/html-theme-executive.setup`
- ✅ `test-executive.org`

---

## 🍼 Baby Theme

**File**: `src/baby_theme/css/baby.css` (13KB)

### Features:
- 🧸 Soft, pastel baby colors (pink, blue, yellow, purple)
- 🎀 Playful typography (Quicksand + Nunito fonts)
- 🎈 Cute emoji decorations floating around
- 🎨 Rounded corners everywhere (8px-30px radius)
- 📱 Left sidebar TOC with cute styling
- ✨ Animated sparkles on headings
- 🎀 Hover effects with ribbons
- 🍼 Colorful TODO/DONE items with bounce animation
- 🌈 Soft gradient backgrounds
- 💾 Drop cap for first paragraph
- 🎨 Mobile responsive

### Colors:
- Baby Pink: #ffb6c1
- Baby Blue: #b3e5fc
- Baby Yellow: #fff9c4
- Baby Purple: #e1bee7
- Baby Green: #c8e6c9
- Cream: #faf8f5

### Special Features:
- Floating emoji decorations (🧸 🎈 🧁 🐣 🌈)
- Sparkle animation on H1
- Bounce animation on TODO items
- Ribbon hover effect on links
- Cute scrollbar styling
- Floating decorations in content

---

## All Available Themes (20 Total)

### Professional & Editorial:
1. **📖 ReadTheOrg** - Standard documentation style
2. **📰 Magazine** - Professional editorial layout
3. **⚓ Sailor** - Nautical professional
4. **⚡ Executive** - Business professional (NEW!)

### Gaming & Tech:
5. **🎮 Neon** - Cyberpunk gaming style
6. **🌈 Cyberpunk** - Retro cyberpunk aesthetic
7. **🤖 AI Graph** - Interactive force-directed graph (NEW!)

### Calm & Natural:
8. **🌲 Forest** - Nature-focused green tones
9. **🌊 Ocean** - Marine blues, calming
10. **🏔️ Nord** - Arctic cool grays
11. **🌙 Midnight** - Dark mode alternative
12. **📄 Paper** - Classic paper tones
13. **🌅 Sunset** - Warm sunset colors

### Creative & Playful:
14. **🍼 Baby** - Soft, playful, adorable
15. **🎨 Solarized** - Colorful Solarized palette
16. **🌊 Glass** - Modern glassy effects

### Minimal:
17. **⚫ Mono** - Black & white minimal
18. **🔵 BigBlow** - Bold, presentation-focused

---

## Test Files

Each theme has corresponding test files:

| Theme | Test File | Content |
|-------|-----------|---------|
| **Executive** | `test-executive.org/html` | Business Professional Content |
| **AI Graph** | `test-ai_graph.org/html` | AI/ML Documentation |
| **Baby** | `test-baby.org/html` | Baby's First Milestones |
| **Magazine** | `test-magazine-new.org/html` | Life Operating System 2024 |
| **Neon** | `test-neon.org/html` | Neon Gaming Dashboard |
| **Sailor** | `test-sailor.org/html` | The Navigator's Log |

---

## Usage

### Local Preview:
```bash
# In your Org file:
#+SETUPFILE: org/html-theme-executive-local.setup

# Build:
emacs --batch --visit=your-file.org --funcall org-html-export-to-html
```

### Remote Use (GitHub Pages):
```bash
# In your Org file:
#+SETUPFILE: org/html-theme-executive.setup

# The CSS loads from:
# https://fniessen.github.io/org-html-themes/css/executive_theme/css/executive.css
```

---

## Theme Comparison: Executive vs AI Graph

| Feature | Executive | AI Graph |
|---------|-----------|----------|
| **Style** | Business Professional | Futuristic Interactive |
| **Navigation** | Table of Contents | Clickable Graph Nodes |
| **Color Scheme** | Navy/Gold | Deep Blue/Cyan/Purple |
| **Layout** | Traditional Sidebar | Full-page Graph or Two-Column |
| **Interactivity** | Standard | Drag, Zoom, Click Nodes |
| **Best For** | Corporate Docs | AI/Tech Projects |
| **Dependencies** | None | D3.js (CDN) |
| **CSS Selectors** | 40+ | ~35 |

---

## Theme Selection Guide

**Need professional?** → Executive, Magazine, Sailor, ReadTheOrg
**Want gaming vibe?** → Neon, Cyberpunk, AI Graph
**Looking for calm?** → Forest, Nord, Ocean, Paper, Midnight
**Seeking creativity?** → Baby, Solarized, Sunset, Glass
**Need readability?** → Sailor, Paper, ReadTheOrg, Executive
**Want fun?** → Baby, Neon
**Need interactive navigation?** → **AI Graph**
**Need comprehensive coverage?** → **Executive** (40+ selectors)

---

## Files Created Recently

### Executive Theme (Latest):
- ✅ `src/executive_theme/css/executive.css` (~1,200 lines)
- ✅ `org/html-theme-executive-local.setup`
- ✅ `org/html-theme-executive.setup`
- ✅ `test-executive.org`

### AI Graph Theme:
- ✅ `src/ai_graph_theme/css/ai-graph.css` (627 lines)
- ✅ `src/ai_graph_theme/js/ai-graph.js` (720 lines)
- ✅ `org/html-theme-ai_graph.setup`
- ✅ `org/html-theme-ai_graph-local.setup`
- ✅ `org/html-theme-ai_graph_left-local.setup`
- ✅ `test-ai_graph.org`
- ✅ `test-ai_graph.html`

### Baby Theme:
- ✅ `src/baby_theme/css/baby.css` (13KB)
- ✅ `org/html-theme-baby-local.setup`
- ✅ `org/html-theme-baby.setup`
- ✅ `test-baby.org`
- ✅ `test-baby.html` (12KB)

### Previous Themes:
- ✅ `src/magazine_theme/css/magazine.css`
- ✅ `src/neon_theme/css/neon.css`
- ✅ `src/sailor_theme/css/sailor.css`
- ✅ All other existing themes

---

**Total Themes**: 20
**Newly Added**: 2 (Executive & AI Graph)
**Last Updated**: April 2026
