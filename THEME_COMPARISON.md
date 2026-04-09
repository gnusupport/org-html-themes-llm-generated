# Theme CSS Coverage Comparison

## Acknowledgments

This fork of org-html-themes was developed with assistance from an LLM
(Qwen3.5-35B-A3B-UD-Q4_K_M.gguf), expanding the original project significantly
with 20+ professional themes while maintaining the spirit of the Four Software
Freedoms.

## Executive Theme - Before vs After

### Before (Incomplete Coverage)
- **CSS Selectors**: 18 classes
- **Missing Critical Org Elements**:
  - ❌ Code blocks (`.codeblock`, `.literal-block`)
  - ❌ Admonitions (`.note`, `.warning`, `.tip`, etc.)
  - ❌ Alignment (`.center`, `.left`, `.right`)
  - ❌ Verse/poetry (`.verse`)
  - ❌ Math expressions (`.math`)
  - ❌ Footnotes (`.footnote`, `.footnum`)
  - ❌ Tags & flags (`.tag`, `.FLAGGED`)
  - ❌ Inline tasks (`.inlinetask`)
  - ❌ Header links (`.headerlink`)
  - ❌ Definition lists (`.dt`, `.dd`)

### After (Comprehensive Coverage)
- **CSS Selectors**: 40 classes
- **Fully Supported Org Elements**:
  - ✅ Code blocks & examples
  - ✅ All admonition types (NOTE, WARNING, TIP, DANGER, CAUTION, etc.)
  - ✅ Text alignment (center, left, right)
  - ✅ Verse & poetry formatting
  - ✅ Mathematical expressions
  - ✅ Footnotes with proper styling
  - ✅ Tags & flagged items
  - ✅ Inline tasks
  - ✅ Heading links (hover to reveal)
  - ✅ Definition lists
  - ✅ Subtitles
  - ✅ Underline styling
  - ✅ List enhancements

## Comparison with Established Themes

| Theme | CSS Lines | Classes | Coverage | Key Features |
|-------|-----------|---------|----------|-------------|
| **readtheorg** | 1,150 | 43 | Baseline (professional docs) | Gold standard for documentation |
| **bigblow** | 761 | ~35 | Good coverage | Bold, presentation-focused |
| **executive (new)** | ~1,200 | 40 | ✅ Full readtheorg compatibility | Navy/gold, business professional |
| **baby** | 825 | ~25 | Basic coverage | Pastel, playful, family-friendly |
| **neon** | ~900 | ~30 | Gaming-focused | Cyberpunk, dark theme, glowing |
| **sailor** | ~750 | ~28 | Good coverage | Nautical, clean, maritime |
| **forest** | ~800 | ~26 | Nature-focused | Green tones, eco-friendly |
| **ai_graph** | ~630 | ~35 | Full + Interactive | D3.js graph, two-column layout |

## What This Means

The **Executive Theme** now provides:
1. **Same element support** as readtheorg (the gold standard)
2. **Professional business aesthetic** with navy/gold color scheme
3. **All modern Org-mode features** properly styled
4. **Mobile responsive** design
5. **Print-ready** output

## Test Content Created

The `test-executive.org` file now includes examples of:
- Basic content (headings, paragraphs, lists)
- Tables with various statuses
- TODO/DONE tasks with color coding
- Code blocks (Bash, Python)
- Admonitions (NOTE, WARNING, TIP, DANGER)
- Verse/poetry formatting
- Mathematical expressions
- Footnotes
- Tags and flagged items
- Inline tasks
- Definition lists
- Emphasis (bold, italic, underline)
- Center/right/left alignment

## Usage

1. Open `test-executive.org` in Emacs
2. Run `M-x org-html-export-to-html`
3. Open the generated HTML to see all features
4. Or use: `emacs --visit test-executive.org --evaluate '(org-html-export-to-html "test-executive.org")'`

## Visual Highlights

- **Dark Navy Sidebar** with gold "TABLE OF CONTENTS" header
- **Professional Code Blocks** with syntax-friendly dark background
- **Color-Coded Admonitions** (blue, orange, green, red)
- **Bold Section Numbers** with gold/blue/gold accents
- **Clean Corporate Tables** with gold headers
- **Responsive Design** that works on all devices

---

## 🤖 AI Graph Theme - Visual Comparison

The **AI Graph Theme** takes a different approach:

- **Interactive Navigation**: Force-directed graph with clickable nodes
- **Dark Space Aesthetic**: Deep blue/black background with neon accents
- **Two-Column Layout**: Optional sidebar navigation
- **Enhanced TODO/DONE**: Prominent green backgrounds with glow effects
- **D3.js Powered**: Real-time physics-based node positioning
- **Modern Tech Vibe**: Orbitron fonts, glowing effects, futuristic UI

### Comparison with Executive Theme:

| Feature | Executive | AI Graph |
|---------|-----------|----------|
| Style | Business Professional | Futuristic Interactive |
| Navigation | Table of Contents | Clickable Graph Nodes |
| Color Scheme | Navy/Gold | Deep Blue/Cyan/Purple |
| Layout | Traditional Sidebar | Full-page Graph or Two-Column |
| Interactivity | Standard | Drag, Zoom, Click Nodes |
| Best For | Corporate Docs | AI/Tech Projects |
| Dependencies | None | D3.js (CDN) |

---

## Important Note: Org Properties Drawers

**Properties drawers** (`:PROPERTIES:` ... `:END:`) in Org mode are primarily used for:
- Internal Org tracking (IDs, timestamps, repeat settings)
- Link targets and custom IDs
- Agenda filtering and categorization

**They are NOT exported to HTML by default** in Org mode's standard behavior.

### If You Want to Display Metadata in HTML:

1. **Use Regular Headings with Formatting:**
   ```org
   *** Coffee Recipe (V60)
   :PROPERTIES:
   :RATING: ★★★★★
   :PREPTIME: 5 min
   :END:
   
   Brew the perfect cup...
   ```
   → Will display the heading, but properties remain hidden

2. **Convert to Visible Elements:**
   ```org
   *** Coffee Recipe (V60)
   
   :RATING: ★★★★★ :: 5 stars
   :PREPTIME: 5 min :: Brewing time
   ```
   → Renders as regular text (visible)

3. **Use Custom HTML Elements:**
   ```org
   *** Coffee Recipe (V60)
   
   #+HTML: <div class="metadata">
   #+HTML: <span class="rating">★★★★★</span>
   #+HTML: <span class="time">5 min</span>
   #+HTML: </div>
   ```
   → Fully customizable display

4. **Use Blockquotes for Metadata:**
   ```org
   *** Coffee Recipe (V60)
   
   > RATING: ★★★★★ | PREPTIME: 5 min | CUSTOMID: v60-recipe
   ```
   → Shows as styled quote block

### Current Executive Theme Support:

The `.properties` CSS class is included in case you use custom export filters or want to display properties manually. The styling includes:
- Dark navy background
- Gold accent border
- Monospace font
- Pre-formatted display

