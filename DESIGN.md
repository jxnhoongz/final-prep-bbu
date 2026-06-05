# Design

Visual system for Final Exam Prep. Source of truth: [app/globals.css](app/globals.css).
Register: **product** (a study tool; chrome recedes, content leads). All color is
authored in **OKLCH**; neutrals are tinted toward the blue brand anchor (hue ~256),
deliberately avoiding the warm cream/beige AI default.

## Theme

Calm, high-contrast, single light theme. The page is a cool near-white; surfaces
are white; one subject accent (blue / green / purple) is set per page via
`body[data-subject]` and carries borders, active nav, and focus. Content is the
only thing that competes for attention.

## Color palette (OKLCH)

### Neutral ramp (tinted toward hue 256)
| Token | Value | Use |
|---|---|---|
| `--ink` | `oklch(0.27 0.020 256)` | primary text (14.4:1 on bg) |
| `--ink-soft` | `oklch(0.38 0.022 256)` | secondary text / leads |
| `--muted` | `oklch(0.50 0.024 256)` | tertiary text (5.7:1, AA) |
| `--bg` | `oklch(0.984 0.004 256)` | page background |
| `--panel` | `oklch(1 0 0)` | cards, tables, drills |
| `--panel-2` | `oklch(0.975 0.005 256)` | inset / striped rows |
| `--line` | `oklch(0.915 0.007 256)` | hairline borders |
| `--code` / `--code-ink` | `oklch(0.22 0.02 264)` / `oklch(0.92 0.015 256)` | code blocks |

### Subject hues + accent set
Each subject sets `--accent` (vivid: borders/fills/active nav, tuned so white text
hits AA), `--accent-ink` (darker: AA-safe text on `--accent-soft`), and
`--accent-soft` (tint for concept boxes / pills). `--net/-ink`, `--cyber/-ink`,
`--mobile/-ink` drive the home cards (vivid for the large icon, `-ink` for the
small `.meta` label so it stays ≥4.5:1).

- **net** (Internetworking): accent `oklch(0.56 0.18 256)`, ink `oklch(0.46 0.16 256)`
- **cyber** (Cyber Security): accent `oklch(0.55 0.13 158)`, ink `oklch(0.43 0.11 158)`
- **mobile** (Mobile): accent `oklch(0.55 0.22 295)`, ink `oklch(0.46 0.19 295)`

### Status
`--good` (green), `--warn` (amber) + `--warn-soft`, `--danger` (red) + `--danger-soft`.
Each "soft" pairs with its full shade for label text (all ≥5:1).

**Contrast:** every text/background pair is verified ≥4.5:1 (WCAG AA). Text on a
tint always uses a darker shade of that same hue (`-ink`), never gray-on-color.

## Typography

- **Latin:** system sans stack (`--font-sans`); permitted in product register and
  avoids webfont cost. **Khmer:** Noto Sans Khmer via `next/font` (`--font-khmer`),
  applied on `html[lang="km"]` with `font-size: 1.03em` and `line-height: 1.9`
  (Khmer reads small/cramped at Latin metrics). **Mono:** `--font-mono` for code.
- **Fixed rem scale** (product register, no fluid clamp), ratio ~1.2:
  `--text-xs .75` · `--text-sm .8125` · `--text-base 1` · `--text-lg 1.125` ·
  `--text-xl 1.375` · `--text-2xl 1.625` · `--text-3xl 2`rem.
- h1/h2/h3 use `text-wrap: balance`; body prose uses `text-wrap: pretty`, capped at
  ~70ch. Headings use negative tracking only at the top end (`-0.02em` on h1).

## Spacing & radii

- Spacing scale `--space-1`…`--space-20` (0.25rem base). No ad-hoc px gaps.
- Radii: `--radius-sm 6` · `--radius 10` · `--radius-lg 14` · `--radius-pill`.
- Elevation: `--shadow-sm`, `--shadow-md` (low, calm). z-index is a named scale.

## Components

- **Sidebar** (fixed, dark tinted panel): brand, section labels, nav links,
  per-page topic list, control cluster (language switch, reveal/hide all, print).
- **Recall drill**: disclosure control. Click **or keyboard** (Enter/Space);
  exposed as `role="button"` + `aria-expanded`, `:focus-within` ring, hover tint.
- **Teaching boxes**: `.concept` (accent tint), `.why` (amber), `.danger` (red),
  `.plain` (neutral) — full hairline borders, **no side-stripes**.
- **Home cards**: subject launcher, `repeat(auto-fit, minmax(240px,1fr))`, top
  border + icon chip in subject hue, lift on hover/focus.
- **Buttons** (`.btn`, `.btn.primary`): full state set — hover, active, disabled,
  `:focus-visible` ring.

## Layout

- Fixed 240px sidebar + fluid content; collapses to stacked at ≤820px (structural,
  not fluid type). Touch targets ≥44px on small screens. Print stylesheet hides
  chrome and auto-reveals answers for handwriting practice.

## Motion

- Tokenized: `--dur 180ms`, `--ease-out` (exponential ease-out; **no bounce**).
- Used only for state (hover/focus/disclosure), never page-load choreography.
- `@media (prefers-reduced-motion: reduce)` collapses all transitions/transforms
  and disables smooth scroll. Smooth scroll is opt-in via `no-preference`.

## Accessibility

WCAG AA contrast throughout (verified by computation). Consistent `:focus-visible`
ring on every interactive element. Keyboard-operable drills. Reduced-motion
honored. Bi-script legibility tuned per language.
