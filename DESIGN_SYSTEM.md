## EcoQuick UI System

This file describes the visual system for EcoQuick so new pages can be implemented consistently without restating design choices each time.

### 1. Foundations

- **Font family**
  - Primary: `Raleway` (wired via `app/layout.tsx` and `globals.css`).
  - Usage:
    - `font-sans` / default body copy.
    - `font-black` or `font-extrabold` for headings and key labels.

- **Brand colors**
  - Primary (ink + brand): `#3e0074` (`.text-primary`, `.bg-primary`, `.border-primary`).
  - Accent: `#ff9b16` (`.text-accent`, `.bg-accent`, `.border-accent`).
  - Backgrounds:
    - Base: `#ffffff`.
    - Muted: `#fafafa` / `#f8f6fa` (`--color-surface-muted` / `--color-surface-softer`).
  - Neutral ink:
    - Main body text: `#151018` / `text-slate-900`.
    - Secondary: `text-slate-500`–`text-slate-600`.

- **Letter-spacing tokens**
  - Navigation / pills: `tracking-[0.22em]`.
  - Tiny labels / chips: `tracking-[0.25em]`.
  - Editorial headings: `tracking-tight` or `tracking-[-0.05em]` (for big titles).

### 2. Typography conventions

- **Headings**
  - Landing/marketing titles: uppercase, `font-black`, `tracking-tight` or slight negative tracking.
  - Section labels: small caps using `text-[10px] font-black uppercase tracking-[0.22em] text-slate-400`.

- **Body text**
  - Regular copy: `text-sm text-slate-600` or `text-xs text-slate-500` depending on density.
  - Emphasized values: bump weight to `font-bold` and use `text-primary` or `text-accent`.

### 3. Buttons

- **Shape**
  - All interactive `<button>` elements are **pill-shaped** by default:
    - Global style: `border-radius: 9999px` (see `globals.css`).

- **Primary button**
  - Example:
    - `className="bg-primary text-white px-7 py-3 text-xs font-black uppercase tracking-[0.22em] hover:bg-black transition"`
  - Use for main CTAs (Start now, Track order, Save changes, etc.).

- **Secondary button**
  - Example:
    - Outline: `border border-primary bg-white text-primary px-7 py-3 text-xs font-black uppercase tracking-[0.22em] hover:bg-primary hover:text-white transition`.
  - Use for secondary actions (View invoice, Export data, etc.).

- **Accent button**
  - For “highlighted” actions (Repeat order, Popular tag):
    - `bg-accent text-white` (or `text-primary` on darker backgrounds).

### 4. Icons

- **Icon set**
  - Use `Material Symbols Outlined` (already loaded in `app/layout.tsx`).
  - Base style: `className="material-symbols-outlined"` plus size and color:
    - Small inline: `text-sm`.
    - Navigation / header: `text-lg`–`text-xl`.

- **Color rules**
  - Brand icons (nav, key actions): `text-accent` or `text-primary`.
  - Status icons (success): `text-emerald-500`/`text-emerald-600`.
  - Muted / decorative: `text-slate-400`.

### 5. Cards & surfaces

- **Standard card**
  - `bg-white border border-slate-200 p-6` (or `p-8` for larger).
  - Rounded: default Tailwind radius; use `.sharp-edge` only when we explicitly want square edges.

- **Emphasis band / hero card**
  - Background tint: `bg-primary/5` or `bg-[rgba(62,0,116,0.15)]`.
  - Border accent: `border-l-4 border-primary` or gradient bar `bg-gradient-to-r from-primary to-accent`.

### 6. Layout patterns

- **Page shell (customer pages)**
  - Background: `bg-white`.
  - Constrain content: `max-w-6xl` or `max-w-7xl mx-auto px-6` / `px-8`.
  - Use sticky headers with subtle borders:
    - `className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4"`.

- **Dashboard shell**
  - Left sidebar for navigation (`lg:flex`), main content with `lg:ml-64`.
  - Mobile bottom nav for key routes.

### 7. Decorative utilities

- **Architectural grid**
  - Add subtle background grid:
    - Use `className="architectural-grid"` on an absolutely-positioned div.

- **Map-style background**
  - For map/telemetry views:
    - `className="map-bg"` on the section container.

- **Timeline**
  - Use the `.timeline-line` and `.timeline-dot` / `.active` / `.pending` classes defined in `globals.css`.

### 8. Interactive states

- **Hover & active**
  - Primary CTAs: darker on hover (`hover:bg-black` or `hover:bg-[#2f005a]`).
  - Outline buttons: fill with primary on hover.
  - Cards: `hover:bg-primary/5` or `hover:border-primary` for subtle emphasis.

- **Focus**
  - Inputs: `focus:border-primary focus:outline-none focus:ring-0`.
  - High-density inputs: optional box-shadow accent:
    - See `.high-density-input` in account settings for reference.

### 9. Usage guidelines for new pages

When building a new page:

- Use **Raleway** for all text and follow the heading/label styles above.
- Pick button variants based on importance:
  - Primary CTA: `bg-primary`.
  - Secondary: bordered or `bg-accent` when calling out a special action.
- Use **primary** (`text-primary`, `bg-primary`) for structure and headings, **accent** (`text-accent`, `bg-accent`) to highlight metrics, statuses, and small icons/dots.
- For icons, default to **Material Symbols Outlined** with the sizes/colors above.
- Keep all buttons pill-shaped; avoid ad-hoc `rounded` classes unless a very different style is required.
- For new dashboard-style views, reuse:
  - Sidebar pattern from `dashboard/page.tsx`.
  - Content width and padding from existing customer pages (`max-w-[1400px]`, `px-6`/`px-8`).

Refer back to this file plus `globals.css` when in doubt; any new shared patterns we introduce should be added here.

