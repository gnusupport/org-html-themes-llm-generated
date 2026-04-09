# Org-HTML-Themes: Expanded Theme Collection

## Summary
This fork of the original org-html-themes project has been significantly expanded with
20+ professional HTML themes for Org-mode. Themes were developed with assistance from
an LLM (Qwen3.5-35B-A3B-UD-Q4_K_M.gguf) to create diverse, high-quality designs.

**Latest additions**: Executive Theme (business professional) and AI Graph Theme
(interactive navigation) - April 2026

---

## ⚡ Executive Theme (Business Professional)
**File**: `src/executive_theme/css/executive.css` (~1,200 lines)

**Perfect for:**
- Corporate documentation
- Business reports
- Professional presentations
- Technical documentation
- Formal writing

### Features:
- 📊 Comprehensive CSS coverage (40+ selectors)
- 💼 Navy & gold professional color scheme
- 📝 Full Org-mode element support
- 📚 Left sidebar TOC with gold accents
- 🖼️ Enhanced code blocks and syntax highlighting
- 🎨 All admonitions styled (NOTE, WARNING, TIP, DANGER)
- 📐 Tables with professional styling
- 📄 Print-ready output
- 📱 Mobile responsive

### Complete Coverage:
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

### Colors:
- Navy Blue: #1a2936 (primary)
- Gold: #c9a227 (accent)
- Cream: #faf9f6 (background)
- Warm Gray: #2d3748 (text)

### Files:
- ✅ `src/executive_theme/css/executive.css`
- ✅ `org/html-theme-executive-local.setup`
- ✅ `org/html-theme-executive.setup`
- ✅ `test-executive.org`

---

## 🤖 AI Graph Theme (Interactive Force-Directed Graph)
**File**: `src/ai_graph_theme/css/ai-graph.css` (627 lines)

**Perfect for:**
- AI/ML documentation
- Technical projects with complex navigation
- Interactive content exploration
- Developer logs
- Tech portfolios

### Features:
- 🌐 Force-directed graph visualization using D3.js
- 🔗 Click nodes to navigate to sections
- 🎯 Drag nodes to rearrange, scroll to zoom
- 📊 Two-column layout with optional sidebar navigation
- ✅ Enhanced TODO/DONE with prominent green backgrounds
- ⌨️ Keyboard shortcuts (Esc to reset view)
- 📱 Responsive design for all devices
- 🌌 Dark space aesthetic with neon accents

### Key Components:
- **CSS**: `ai-graph.css` (627 lines) - Full-page graph layout, two-column support, enhanced TODO/DONE styling
- **JavaScript**: `ai-graph.js` (720 lines) - D3.js force-directed graph, node navigation, drag/zoom, dynamic sidebar
- **Setup Files**: Main theme setup and left sidebar variant
- **Test Files**: Complete test document with AI/ML content

### Colors:
- Deep Blue: #0a0a1a (background)
- Cyan: #00ffff (accents)
- Purple: #9b59b6 (highlights)
- Green: #2ecc71 (DONE items)

### Files:
- ✅ `src/ai_graph_theme/css/ai-graph.css`
- ✅ `src/ai_graph_theme/js/ai-graph.js`
- ✅ `src/lib/js/org-keyboard-shortcuts.js`
- ✅ `org/html-theme-ai_graph.setup`
- ✅ `org/html-theme-ai_graph-local.setup`
- ✅ `org/html-theme-ai_graph_left-local.setup`
- ✅ `test-ai_graph.org`
- ✅ `test-ai_graph.html`

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

### Files:
- ✅ `org/html-theme-baby-local.setup`
- ✅ `org/html-theme-baby.setup`
- ✅ `test-baby.org`
- ✅ `test-baby.html`

---

## 📰 Magazine Theme (Professional Layout)
**File**: `src/magazine_theme/css/magazine.css`

### Features:
- Left sidebar TOC with elegant navigation
- Beautiful typography (Playfair Display + Inter fonts)
- Warm, readable color palette (cream background, navy headings, gold accents)
- Sticky sidebar navigation
- Drop cap on first paragraph
- Mobile responsive design

### Colors:
- Primary: #1a2936 (deep navy)
- Accent: #c9a227 (gold)
- Background: #faf9f6 (cream)
- Text: #2d3748 (warm gray)

### Files:
- `org/html-theme-magazine-local.setup`
- `org/html-theme-magazine.setup`

---

## 🎮 Neon Theme (Gaming/Cyberpunk)
**File**: `src/neon_theme/css/neon.css`

### Features:
- Dark background with vibrant neon colors
- Glowing effects on headings and elements
- Highly visible TODO/DONE items with animations
- Cyberpunk aesthetic
- Pulsing effects on active tasks
- Left sidebar TOC

### Colors:
- Neon Pink: #ff00ff
- Neon Cyan: #00ffff
- Neon Green: #00ff00
- Dark Background: #0a0a0f

### Special Features:
- TODO items pulse with red glow
- DOING items pulse with cyan glow
- Syntax highlighting with neon colors
- Glowing borders on tables and code blocks

### Files:
- `org/html-theme-neon-local.setup`
- `org/html-theme-neon.setup`

---

## ⚓ Sailor Theme (Nautical Blue & White)
**File**: `src/sailor_theme/css/sailor.css`

### Features:
- Extremely readable left sidebar TOC
- Beautiful serif headings (Merriweather)
- Clean nautical blue and white color scheme
- Border around entire page (double border)
- Large, readable text
- Professional maritime aesthetic

### Colors:
- Navy Blue: #002147
- Ocean Blue: #0056b3
- Pure White: #ffffff
- Off White: #f8f9fa

### Special Features:
- Double border frame (8px navy + 2px white)
- Centered TOC heading
- Drop cap styling
- Soft shadows for depth

### Files:
- `org/html-theme-sailor-local.setup`
- `org/html-theme-sailor.setup`

---

## Test Files Created

Each theme has a corresponding test file:

| Theme | Test File | Content |
|-------|-----------|---------|
| **Executive** | `test-executive.org/html` | Business Professional Content |
| **AI Graph** | `test-ai_graph.org/html` | AI/ML Documentation |
| **Baby** | `test-baby.org/html` | Baby's First Milestones |
| **Magazine** | `test-magazine-new.org/html` | Life Operating System 2024 |
| **Neon** | `test-neon.org/html` | Neon Gaming Dashboard |
| **Sailor** | `test-sailor.org/html` | The Navigator's Log |

---

## Theme Comparison: Latest Additions

### Executive vs AI Graph

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

## Usage Instructions

### Local Preview:
1. Use `#+SETUPFILE: org/html-theme-<theme>-local.setup` in your Org file
2. Build with: `emacs --batch --visit=your-file.org --funcall org-html-export-to-html`
3. Open generated `.html` file in browser

### Remote Use (on GitHub):
1. Use `#+SETUPFILE: org/html-theme-<theme>.setup` in your Org file
2. Build with same command
3. Theme CSS will be loaded from the GitHub pages URL

---

## All Themes in Repository

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

**Total Themes Available**: 20
**Newly Added**: Executive & AI Graph (April 2026)
**Previous Additions**: Baby (December 2024), Magazine/Neon/Sailor (2024)
