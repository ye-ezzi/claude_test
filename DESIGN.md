---
version: 1.0
name: AI-Network-Enterprise-Design-Kit
description: >
  A light-canvas enterprise AI product interface anchored on a layered blue-gray surface system
  (BG 0 pure white → BG 4 #DAE0E7), with a single vivid purple brand accent (#6E19DE) reserved
  for primary CTAs and selected states. The system is built for AI agent chat products — sidebar
  navigation, threaded conversations, and an input area with tool chips. Typography is exclusively
  Pretendard Variable across all weights, used in both Korean and English. The design voice is
  calm, professional, and unobtrusive: surfaces do the hierarchy work, not shadows or gradients.

colors:
  # Brand / Accent
  primary: "#6e19de"
  primary-hover: "#8a38f5"
  primary-light: "#ebe2fd"
  primary-deep: "#422aa0"
  on-primary: "#ffffff"

  # Background surface ladder (light → dark)
  canvas: "#ffffff"
  bg-1: "#f5f7fa"
  bg-2: "#eef2f7"
  bg-3: "#e6ecf4"
  bg-4: "#e3eaf2"
  bg-sidebar: "#eef2f7"

  # Hover / Interactive states
  hover: "#e3eaf2"
  hover-2: "#ededf4"

  # Text hierarchy
  text-1: "#323234"
  text-2: "#44484c"
  text-3: "#8d97a5"
  text-placeholder: "#8d97a5"
  text-on-dark: "#ffffff"

  # Borders / Lines
  line: "#bdc6d1"
  line-2: "#dae0e7"
  line-input: "#dae0e7"

  # Semantic colors
  purple: "#8a38f5"
  purple-bg: "#eae2fd"
  purple-dark: "#422aa0"
  blue: "#366dec"
  blue-bg: "#cde4fb"
  blue-dark: "#0e3a91"
  green: "#2fd77b"
  green-bg: "#e0fbcd"
  green-dark: "#0e8252"
  orange: "#e68b3c"
  orange-bg: "#fbe2cd"
  orange-dark: "#914b0e"
  pink: "#f34cbb"
  pink-bg: "#ffe0f6"
  pink-dark: "#a0277e"
  yellow: "#f9d947"
  yellow-bg: "#fbf8cd"
  yellow-dark: "#916a0e"
  red: "#e85555"

typography:
  # Display / Hero (UI)
  display-lg:
    fontFamily: "Pretendard Variable"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  display-md:
    fontFamily: "Pretendard Variable"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  display-sm:
    fontFamily: "Pretendard Variable"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0

  # Markdown content hierarchy
  mark-h1:
    fontFamily: "Pretendard Variable"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 2.0
    letterSpacing: 0
  mark-h2:
    fontFamily: "Pretendard Variable"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0
  mark-h3:
    fontFamily: "Pretendard Variable"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0
  mark-h4:
    fontFamily: "Pretendard Variable"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  mark-h5:
    fontFamily: "Pretendard Variable"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  mark-h6:
    fontFamily: "Pretendard Variable"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  mark-normal-16:
    fontFamily: "Pretendard Variable"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  mark-normal-14:
    fontFamily: "Pretendard Variable"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  mark-small-12:
    fontFamily: "Pretendard Variable"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0

  # UI text styles
  ui-16-medium:
    fontFamily: "Pretendard Variable"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  ui-16-regular:
    fontFamily: "Pretendard Variable"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  ui-14-semibold:
    fontFamily: "Pretendard Variable"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  ui-14-medium:
    fontFamily: "Pretendard Variable"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  ui-14-regular:
    fontFamily: "Pretendard Variable"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  ui-12-medium:
    fontFamily: "Pretendard Variable"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  ui-12-regular:
    fontFamily: "Pretendard Variable"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 8px
  md: 10px
  lg: 16px
  xl: 20px
  pill: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 10px
  lg: 12px
  xl: 16px
  xxl: 20px
  section: 24px

shadows:
  input: "0px 1px 5px #e6eaef"
  card: "none"

components:
  # Buttons
  btn-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui-16-medium}"
    rounded: "{rounded.sm}"
    height: 40px
    padding: 12px 20px
  btn-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui-16-medium}"
    rounded: "{rounded.sm}"
    height: 40px
  btn-secondary:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.text-2}"
    typography: "{typography.ui-16-medium}"
    rounded: "{rounded.sm}"
    height: 40px
    padding: 12px 20px
  btn-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-2}"
    typography: "{typography.ui-16-medium}"
    rounded: "{rounded.sm}"
    border: "1px solid {colors.line}"
    height: 40px
    padding: 12px 20px

  # Icon buttons
  btn-icon-40:
    size: 40px
    rounded: "{rounded.pill}"
    backgroundColor: "{colors.bg-2}"
    variants:
      submit:
        icon: "Arrow Upward (MD3 Material Symbols Outlined)"
        iconColor: "{colors.text-2}"
        description: "Send / submit a message"
      voice-input:
        icon: "Keyboard Voice (MD3 Material Symbols Outlined)"
        iconColor: "{colors.text-2}"
        description: "Start voice input"
      add-file:
        icon: "Add (MD3 Material Symbols Outlined)"
        iconColor: "{colors.text-2}"
        description: "Attach a file"
      new-message:
        icon: "Edit Square (MD3 Material Symbols Outlined)"
        iconSvgPath: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"
        iconViewBox: "0 -960 960 960"
        iconColor: "{colors.text-2}"
        backgroundColor: "{colors.bg-2}"
        hover: "{colors.bg-3}"
        description: "Edit or compose a new message"
  btn-icon-32:
    size: 32px
    rounded: "{rounded.pill}"
    backgroundColor: "{colors.bg-2}"
  btn-icon-28:
    size: 28px
    rounded: "{rounded.pill}"
    backgroundColor: "transparent"

  # Chip (tool selector)
  chip-default:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    typography: "{typography.ui-14-semibold}"
    rounded: "{rounded.xl}"
    height: 40px
    padding: 0 12px 0 8px
  chip-hover:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.text-2}"
    typography: "{typography.ui-14-semibold}"
    rounded: "{rounded.xl}"
    height: 40px
  chip-hover2:
    backgroundColor: "{colors.hover}"
    textColor: "{colors.text-2}"
    typography: "{typography.ui-14-semibold}"
    rounded: "{rounded.xl}"
    height: 40px
  chip-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui-14-semibold}"
    rounded: "{rounded.xl}"
    height: 40px
  chip-selected-light:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.ui-14-semibold}"
    rounded: "{rounded.xl}"
    height: 40px

  # Input area
  input-area-slim:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-1}"
    typography: "{typography.ui-16-regular}"
    rounded: "{rounded.lg}"
    border: "1px solid {colors.line-2}"
    shadow: "{shadows.input}"
    height: 60px
    padding: 10px
  input-area-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-1}"
    typography: "{typography.ui-16-regular}"
    rounded: "{rounded.lg}"
    border: "1px solid {colors.line-2}"
    shadow: "{shadows.input}"
    padding: 16px 10px 10px 10px
    maxWidth: 760px
  input-placeholder:
    textColor: "{colors.text-placeholder}"
    typography: "{typography.ui-16-regular}"

  # Cards
  card:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.text-1}"
    rounded: "{rounded.lg}"
    padding: 16px
  card-title:
    typography: "{typography.ui-14-semibold}"
    textColor: "{colors.text-1}"
  card-body:
    typography: "{typography.ui-12-regular}"
    textColor: "{colors.text-1}"

  # Tag / Badge
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    typography: "{typography.ui-12-medium}"
    border: "1px solid {colors.text-3}"
    rounded: "{rounded.md}"
    height: 20px
    padding: 2px 10px

  # Navigation sidebar
  sidebar:
    backgroundColor: "{colors.bg-sidebar}"
    width: 240px
  sidebar-item-default:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    typography: "{typography.ui-14-medium}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  sidebar-item-hover:
    backgroundColor: "{colors.hover}"
    textColor: "{colors.text-2}"
    typography: "{typography.ui-14-medium}"
    rounded: "{rounded.sm}"
  sidebar-item-selected:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary}"
    typography: "{typography.ui-14-semibold}"
    rounded: "{rounded.sm}"

  # Thread / conversation item
  thread-item:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.text-1}"
    rounded: "{rounded.lg}"
    padding: 16px
    gap: 12px
  thread-title:
    typography: "{typography.ui-16-medium}"
  thread-meta:
    typography: "{typography.ui-14-regular}"
    textColor: "{colors.text-3}"

  # Navigation bar
  top-nav:
    backgroundColor: "{colors.canvas}"
    height: 56px
    borderBottom: "1px solid {colors.line-2}"
---

## Overview

AI Network Enterprise Design Kit is a **light-canvas, blue-gray surface system** designed for enterprise AI agent products — primarily chat interfaces, document collaboration, and agent orchestration dashboards.

The canvas is pure white (`{colors.canvas}`), with four ascending surface levels (`{colors.bg-1}` → `{colors.bg-4}`) providing hierarchy through tint rather than shadow. The single vivid brand accent is **deep purple** (`{colors.primary}` #6E19DE) — used exclusively for primary CTAs, selected states, and active navigation. Secondary interactive states use a soft purple tint (`{colors.primary-light}` #EBE2FD).

Typography is **Pretendard Variable** exclusively — a humanist sans-serif variable font with full Korean and Latin support. Body type defaults to Regular 400 and Medium 500; only headings and labels reach SemiBold 600 or Bold 700. Display sizes top out at 36px Bold.

The product targets enterprise users reading dense AI-generated content (reports, analysis, markdown documents), so the markdown typography system is carefully specified: H1 carries an unusually open line-height of 2.0 for scannability in long documents.

**Key characteristics:**
- White canvas with four-level blue-gray surface ladder — no dark mode defined.
- Purple brand accent used sparingly: primary button, selected chip, active nav item only.
- Pretendard Variable is the sole typeface — all weights 100–900 available.
- Input area is the focal UI component: three variants (slim, default, text-input) with tool chip and icon button compositions.
- Shadow system is minimal: only the input area carries a subtle `0px 1px 5px` shadow.
- Border radius is consistent: 8px for buttons, 16px for cards and inputs, 20px for chips and icon buttons.

---

## Colors

### Brand & Accent

- **Primary Purple** (`{colors.primary}`): The system's single chromatic accent. Used on primary buttons, selected chip states, and active navigation. Never used as a background fill for content areas.
- **Primary Hover** (`{colors.primary-hover}`): Lighter purple (#8A38F5) for hover states on primary elements.
- **Primary Light** (`{colors.primary-light}`): Pale purple tint (#EBE2FD) for secondary buttons and selected-light states. Pairs with `{colors.primary-deep}` for legible purple-on-purple.
- **Primary Deep** (`{colors.primary-deep}`): Dark purple (#422AA0) for text on `{colors.primary-light}` backgrounds.

### Surface Ladder

| Token | Hex | Role |
|---|---|---|
| `{colors.canvas}` | #FFFFFF | Default page background |
| `{colors.bg-1}` | #F5F7FA | Subtle surface lift — section backgrounds |
| `{colors.bg-2}` | #EEF2F7 | Cards, sidebar background, thread items |
| `{colors.bg-3}` | #E6ECF4 | Hover states on bg-2 surfaces |
| `{colors.bg-4}` | #E3EAF2 | Active/pressed states, deep hover |

The sidebar uses `{colors.bg-sidebar}` (#EEF2F7 = bg-2) as its background, creating a clear visual separation from the white main content area.

### Text

- **Text 1** (`{colors.text-1}` #323234): Primary content — all headings, body copy, and values.
- **Text 2** (`{colors.text-2}` #44484C): Secondary labels — button labels, sidebar items, tags.
- **Text 3** (`{colors.text-3}` #8D97A5): Muted — placeholders, metadata, disabled states.

### Semantic Tag Colors

Each semantic color has a vivid base, a pale background tint, and a dark text variant:

| Name | Base | Background | Dark |
|---|---|---|---|
| Purple | #8A38F5 | #EAE2FD | #422AA0 |
| Blue | #366DEC | #CDE4FB | #0E3A91 |
| Green | #2FD77B | #E0FBCD | #0E8252 |
| Orange | #E68B3C | #FBE2CD | #914B0E |
| Pink | #F34CBB | #FFE0F6 | #A0277E |
| Yellow | #F9D947 | #FBF8CD | #916A0E |

Use base on white/light backgrounds for icons or accents. Use background tint + dark text for readable tag pills.

---

## Typography

### Font Family

**Pretendard Variable** is the sole typeface. It is a variable font supporting weights 100–900 with full Latin and Korean (한글) coverage. No secondary or mono typeface is specified in this design kit.

- Download: [github.com/orioncactus/pretendard](https://github.com/orioncactus/pretendard)
- CSS: `font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif`

### Markdown Content Hierarchy

Used inside AI-generated content blocks, chat responses, and document views:

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.mark-h1}` | 24px | 700 | 2.0 | Document title, report heading |
| `{typography.mark-h2}` | 20px | 700 | 1.6 | Section heading |
| `{typography.mark-h3}` | 16px | 700 | 1.6 | Subsection heading |
| `{typography.mark-h4}` | 14px | 600 | 1.5 | Table header, minor heading |
| `{typography.mark-h5}` | 12px | 600 | 1.2 | Small heading |
| `{typography.mark-h6}` | 10px | 500 | 1.2 | Micro label |
| `{typography.mark-normal-16}` | 16px | 400 | 1.6 | Body paragraph |
| `{typography.mark-normal-14}` | 14px | 400 | 1.5 | Table body, secondary body |
| `{typography.mark-small-12}` | 12px | 400 | 1.2 | Chart index, captions |

H1's line-height of 2.0 is intentionally generous — enterprise reports have dense headings that need breathing room for scan readability.

### UI Text Hierarchy

Used in navigation, buttons, chips, cards, and all chrome elements:

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-lg}` | 36px | 700 | 1.25 | Page hero title |
| `{typography.display-md}` | 32px | 500 | 1.25 | Section display title |
| `{typography.display-sm}` | 28px | 500 | 1.25 | Modal title, welcome heading |
| `{typography.ui-16-medium}` | 16px | 500 | 1.5 | Button labels, card subtitles |
| `{typography.ui-16-regular}` | 16px | 400 | 1.5 | Input text, thread titles |
| `{typography.ui-14-semibold}` | 14px | 600 | 1.25 | Chip labels, emphasized UI |
| `{typography.ui-14-medium}` | 14px | 500 | 1.5 | Sidebar items, card titles |
| `{typography.ui-14-regular}` | 14px | 400 | 1.5 | Thread timestamps, meta text |
| `{typography.ui-12-medium}` | 12px | 500 | 1.5 | Tags, badges |
| `{typography.ui-12-regular}` | 12px | 400 | 1.5 | Card body, captions |

---

## Layout

### Spacing Scale

Base unit is 2px. Primary tokens:

`{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 10px · `{spacing.lg}` 12px · `{spacing.xl}` 16px · `{spacing.xxl}` 20px · `{spacing.section}` 24px

- Gap between icon and label in chips/buttons: `{spacing.xs}` 4px
- Inner padding for cards and thread items: `{spacing.xl}` 16px
- Gap between card title and body: `{spacing.sm}` 8px
- Input area inner padding: 16px top · 10px sides/bottom

### Grid & Structure

- Sidebar width: 240px (fixed)
- Input area max-width: 760px (centered in content area)
- Top navigation height: 56px
- Content area: fluid, filling remaining space after sidebar

### Whitespace Philosophy

Surfaces define space. The blue-gray surface ladder acts as whitespace — `{colors.bg-2}` cards on a `{colors.canvas}` white background create separation without margins. Use surface lift as the primary spacing tool between major sections; reserve explicit gap values for within-component spacing only.

---

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Body text, sidebar background, page sections |
| 1 (surface lift) | `{colors.bg-2}` background | Cards, thread items, sidebar |
| 2 (bordered) | `{colors.canvas}` + 1px `{colors.line-2}` border | Input area at rest |
| 3 (shadowed) | `{colors.canvas}` + 1px `{colors.line-2}` + `{shadows.input}` | Input area with focus shadow |

The system uses **surface tint over shadow** — cards are bg-2 on white canvas. Only the input area carries a shadow (`0px 1px 5px #E6EAEF`) to draw the user's attention as the primary interactive element.

---

## Components

### Buttons

**`btn-primary`** — Deep purple CTA. The single primary action per view.
- Background `{colors.primary}`, text `{colors.on-primary}`, 40px height, 8px radius.
- Hover: background shifts to `{colors.primary-hover}` (#8A38F5).
- Supports `text` and `icon+text` variants (24px icon + 4px gap + label).

**`btn-secondary`** — Soft purple tint. Secondary actions alongside a primary.
- Background `{colors.primary-light}`, text `{colors.text-2}`, same dimensions as primary.

**`btn-outline`** — White with border. Tertiary / ghost actions.
- Background `{colors.canvas}`, 1px `{colors.line}` border, text `{colors.text-2}`.

### Icon Buttons

**`btn-icon-40`** / **`btn-icon-32`** / **`btn-icon-28`** — Circular icon-only buttons.
- 40px: submit, voice, add-file actions inside input area. Circular (`{rounded.pill}`).
- 28px: contextual menu trigger (more-vert) inside cards. Transparent background.

**`btn-icon-40` variants:**

| Variant | MD3 Icon | 용도 |
|---|---|---|
| `submit` | Arrow Upward | 메시지 전송 |
| `voice-input` | Keyboard Voice | 음성 입력 시작 |
| `add-file` | Add | 파일 첨부 |

### Chips

**`chip-default`** / **`chip-hover`** / **`chip-hover2`** / **`chip-selected`** / **`chip-selected-light`**

Chips are tool/filter selectors in the input area toolbar. Always 40px height, pill-rounded (20px radius).
- Default: transparent background, `{colors.text-2}` label.
- Hover: `{colors.bg-2}` background.
- Selected (primary): `{colors.primary}` background, white label.
- Selected (light): `{colors.primary-light}` background, `{colors.primary-deep}` label — used for multi-select states.
- Icon (28px) + label layout with 4px gap; or text-only with 16px horizontal padding.

### Input Area

The **primary interactive component** of the product. Three variants:

**Slim** (`input-area-slim`): 60px fixed height. Single line. Used in secondary contexts (sidebar search, inline prompts).

**Default** (`input-area-default`): Variable height, min ~88px. Empty state shows placeholder text in the text zone and an icon button group (add-file + chip) in the toolbar row.

**Text-input** (active state): Same structure as default, but text zone contains user's draft text (`{colors.text-1}`) and the toolbar right side shows voice + submit icon buttons.

All variants: white background, 1px `{colors.line-2}` border, 16px radius, `{shadows.input}` shadow, max-width 760px.

### Cards

**`card`**: bg-2 (#EEF2F7) background, 16px radius, 16px padding. Used for thread/document items in the main content area.
- Header row: 32px profile avatar + tag pill + icon-28 menu button.
- Title: `{typography.ui-14-semibold}`.
- Body: `{typography.ui-12-regular}`.

### Tags / Badges

**`tag`**: Small pill with text and border. 20px height, 10px radius.
- Default: transparent fill, 1px `{colors.text-3}` border, `{colors.text-2}` label.
- Semantic variants: use semantic color backgrounds (e.g., `{colors.purple-bg}`) with `{typography.ui-12-medium}`.

### Sidebar Navigation

Left panel at 240px width, `{colors.bg-sidebar}` background.
- Item height: ~40px, 8px radius, 8px vertical / 12px horizontal padding.
- Default: transparent background.
- Hover: `{colors.hover}` (#E3EAF2) background.
- Selected: `{colors.primary-light}` background, `{colors.primary}` text.

---

## Do's and Don'ts

### Do

- Use `{colors.primary}` (#6E19DE) **only** for: primary button, selected chip, active nav indicator, focus ring.
- Use the surface ladder (`bg-1` → `bg-4`) to establish visual hierarchy on the white canvas.
- Apply `{rounded.lg}` (16px) to all cards, input areas, and modal containers.
- Use `{rounded.xl}` (20px) for chips and icon buttons — the pill family.
- Pair `{typography.mark-h1}` (line-height 2.0) with dense AI-generated text for scannability.
- Use `{shadows.input}` **only** on the input area — it draws the user's eye to the primary interaction point.
- Use semantic color bg + dark text for tag pills (e.g., `{colors.purple-bg}` + `{colors.purple-dark}`).
- Keep the sidebar at `{colors.bg-2}` to maintain a clear content vs. chrome boundary.

### Don't

- Don't use `{colors.primary}` as a section fill, card background, or decorative element.
- Don't introduce shadows on cards — surface tint handles elevation.
- Don't use font-weight above 700 (Bold). Weight 800/900 is available in Pretendard but not part of this design system.
- Don't add a second chromatic accent color to the chrome. Semantic tag colors are for content labels only — not for UI chrome.
- Don't mix rounded values — 8px for buttons, 16px for containers, 20px for pills. No other values.
- Don't reduce the input area width below 600px on desktop — it degrades the chat experience.
- Don't use placeholder-colored text (`{colors.text-3}`) for anything other than placeholders and disabled states.

---

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop | 1280px+ | Sidebar visible (240px), content area fluid |
| Tablet | 768px–1279px | Sidebar collapses to icon-only (56px) or overlay |
| Mobile | < 768px | Sidebar hidden (hamburger menu), input area full-width |

### Touch Targets

- All buttons and chips: minimum 40px height (already in spec).
- Icon buttons (btn-icon-40): 40px × 40px — meets WCAG AA 44px guideline at ±4px tolerance.
- Sidebar items: minimum 40px height on touch.

### Collapsing Strategy

- **Sidebar**: Icon rail (56px) at tablet. Full overlay drawer at mobile.
- **Input area**: Stretches to full available width on mobile; max-width 760px removed.
- **Card grids**: 2-up at tablet, 1-up at mobile.
- **Typography**: Display sizes (36px/32px) scale down one level on mobile (32px/28px).

---

## Agent Prompt Guide

### Quick Reference

```
Primary brand color: #6E19DE (purple)
Canvas: #FFFFFF | Cards: #EEF2F7 | Sidebar: #EEF2F7
Text: #323234 (primary) / #44484C (secondary) / #8D97A5 (muted)
Font: Pretendard Variable — Bold 700, SemiBold 600, Medium 500, Regular 400
Border radius: 8px (buttons) / 16px (cards, inputs) / 20px (chips, icon buttons)
Border: 1px solid #DAE0E7
Shadow (input only): 0px 1px 5px #E6EAEF
```

### Prompt Starters

- "Build a chat input component matching the AI Network design system: white background, 1px #DAE0E7 border, 16px border-radius, 0px 1px 5px #E6EAEF shadow. Include a tool chip (#EEF2F7 background, 20px radius, 14px SemiBold Pretendard label) and a 40px circular submit button."
- "Create a sidebar navigation using the AI Network kit: #EEF2F7 background, 240px wide, items 40px tall with 8px radius. Active item: #EBE2FD background, #6E19DE text. Hover: #E3EAF2 background."
- "Design a content card with bg-2 (#EEF2F7) surface, 16px radius, 16px padding. Header row with 32px avatar, tag pill (1px #8D97A5 border, 10px radius, 12px SemiBold Pretendard), and a 28px icon menu button."
- "Implement a markdown document view using AI Network typography: H1 at 24px Bold line-height 2.0, H2 at 20px Bold line-height 1.6, body at 16px Regular line-height 1.6. Text color #323234, font Pretendard Variable."
