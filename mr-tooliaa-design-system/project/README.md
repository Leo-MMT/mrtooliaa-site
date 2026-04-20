# MR ToolIAA — Design System

> Design system extracted from the **MR ToolIAA** static site — a Dominican-Republic-based "AI agents as a service" company that sells WhatsApp automation to local businesses (clinics, hardware stores, and custom use-cases). Copy is **Spanish (es_DO)**, tone is confident and action-oriented, the visual language is **deep navy + vivid brand orange** with Inter across the whole stack.

## Sources used

All visual and content context was extracted from the attached codebase:

- **Codebase (read-only mount):** `mrtooliaa-site/`
  - `mrtooliaa-site/index.html` — MR ToolIAA corporate landing
  - `mrtooliaa-site/mediturno/index.html` — MediTurno IA product landing
  - `mrtooliaa-site/ferretquote/index.html` — Ferret-Quote Bot product landing
  - `mrtooliaa-site/tailwind.config.js` — source of truth for colors, fonts, shadows
  - `mrtooliaa-site/assets/*.png` — logos (company + two products)
- **Production site:** `https://mrtooliaa.com` — 3 landings deployed on Cloudflare Pages.

No Figma file was provided. No slide deck was provided — `slides/` is therefore **not** created in this system.

---

## Products represented

| Product | URL | What it does | Brand color |
|---|---|---|---|
| **MR ToolIAA** (corporate) | `/` | Umbrella "Arsenal of 13 AI agents" positioning | Navy `#0d1a2d` + orange `#f97316` |
| **MediTurno IA** | `/mediturno/` | WhatsApp bot that books clinic appointments 24/7 | Medical blue `#0066CC` + WhatsApp green `#00CC66` |
| **Ferret-Quote Bot** | `/ferretquote/` | WhatsApp bot that produces instant hardware-store quotes (PDF) | Industrial gray `#1f2937` + orange `#f97316` |

Each product shares the Inter font, WhatsApp CTA vocabulary, and overall layout rhythm, but has its own accent palette. The umbrella brand color (orange) appears consistently across all three as the primary CTA color.

---

## Index / manifest

| File / folder | What's in it |
|---|---|
| `README.md` | This file |
| `SKILL.md` | Skill manifest — makes this folder invocable as an Agent Skill |
| `colors_and_type.css` | All color, type, spacing, radius, shadow CSS variables + semantic helpers (`.h1`, `.eyebrow`, `.lead`, …) |
| `assets/` | Logos (full + icon + white + mono variants for MR ToolIAA; full + icon for MediTurno; icon for Ferret-Quote) |
| `preview/` | Small HTML cards for the Design System tab — one concept per card |
| `ui_kits/mrtooliaa/` | React (Babel) UI kit for the corporate landing |
| `ui_kits/mediturno/` | React (Babel) UI kit for the MediTurno product landing |
| `ui_kits/ferretquote/` | React (Babel) UI kit for the Ferret-Quote product landing |

---

## CONTENT FUNDAMENTALS

### Language
- **Spanish (Dominican Republic, `es_DO`)** throughout. All public copy is in Spanish — never English.
- Common Dominican / LATAM business vocabulary is used without translation: *ferretería*, *cita*, *paciente*, *RD$*, *cotización*.

### Voice & tone
Confident, direct, slightly punchy. Sounds like a competent operator talking to a small-business owner, not a Silicon Valley pitch. Three sharp tonal moves recur everywhere:

1. **Benefit-led headlines, blunt follow-ups.** Hero copy: *"Tu agente IA **trabaja 24/7** sin descanso."* Subhead immediately grounds it: *"Implementación en días. Sin café. Sin excusas."*
2. **Short, declarative rhythm.** Sentences pile up in threes: *"Sin contrato. Sin tarjeta de crédito. Configura en 1 hora."*
3. **Promise + proof pattern.** Every big claim is paired with a concrete number (*"24/7"*, *"7 días"*, *"RD$15,000/mes"*, *"500 interacciones/mes"*, *"20 horas/semana"*).

### Person
- **"Tú" (informal "you")** — never *usted*. *"Tu clínica llena"*, *"Tu negocio merece"*.
- First-person plural ("nosotros") when speaking as the team: *"Automatizamos los procesos repetitivos de tu empresa"*, *"Nuestros agentes IA ejecutan…"*.

### Casing
- Sentence case for headings; ALL-CAPS reserved for **eyebrow labels** (`EL PROBLEMA`, `PRODUCTOS`, `INVERSIÓN`, `PASO 1`, `MÁS POPULAR`) and badges.
- Product names keep their exact casing: **MR ToolIAA**, **MediTurno IA**, **Ferret-Quote Bot**.
- Spanish accents are used correctly (*cómo*, *español*, *República*).

### Emoji usage — **yes, intentionally and decoratively**
The corporate landing uses emoji liberally as visual punctuation inside cards and badges. Patterns:
- **In eyebrows / badges:** `❌ Problema actual`, `✅ Resultado`, `→ La solución`, `🚀`, `📅`.
- **As large decorative icons** (48–64px) inside colored rounded squares: `⏰` `💬` `⚙️` `🏗️` `📱` `⚡` `🇩🇴` `🗣️` `💰` `🤖` `🏥` `🔩`.
- **In chat/WhatsApp mockups:** `👋` `📅` `✅` `✓✓` — matching authentic WhatsApp message style.
- **Stars:** `★★★★★` for testimonials.

Emoji are **never** used in body paragraphs or headings — only in visual chrome and chat mockups. On MediTurno and Ferret-Quote, SVG icons are preferred over emoji for hero features, but emoji still appear in secondary sections.

### Examples (lifted verbatim)
- Hero title: *"Tu clínica llena, sin llamadas perdidas."* (MediTurno)
- Hero subhead: *"Automatiza los procesos repetitivos de tu clínica o ferretería con agentes IA especializados en WhatsApp. Implementación en días. Sin café. Sin excusas."*
- CTA (primary): *"Hablar con un experto"* / *"Prueba gratis 14 días"* / *"Agendar demo gratuita — sin compromiso"*
- Micro-reassurance under CTAs: *"Sin contrato. Sin tarjeta de crédito."* / *"Respuesta en menos de 2 horas · Lunes a viernes 8am–7pm AST"*
- Section eyebrows: `EL PROBLEMA`, `SOCIAL PROOF`, `INVERSIÓN`, `DIFERENCIADORES`, `PROCESO`

---

## VISUAL FOUNDATIONS

### Color system
Three layered palettes:

1. **Navy** (`#1e3a5f` / `#0d1a2d` / `#12233c`) — dominant dark surface. Used for the hero, footer, dark cards, the "bridge" card in problem→solution flows, primary text color on light backgrounds.
2. **Brand orange** (`#f97316`, `#ea6a08`, `#fb923c`) — **the** accent. Used for CTAs, eyebrow labels, accent words inside headings (`<span class="text-brand-500">`), active-state borders on product cards, section punctuation (the "POPULAR" badge, the underline-tick on testimonials).
3. **Product-specific accents** — only on the relevant product landing:
   - MediTurno: **medical blue** `#0066CC` (hero gradient base) + **WhatsApp green** `#00CC66` (CTA, accent words).
   - Ferret-Quote: **industrial gray** `#1f2937` + **orange** (stripes, CTAs) + **WhatsApp green**.

### Typography
- **Font**: Inter (Google Fonts), weights 400 / 500 / 600 / 700 / 800 / 900 loaded.
- **Headings lean into 800–900 (extrabold/black).** The hero uses `font-black` at 4xl–6xl sizes (`text-4xl sm:text-5xl lg:text-6xl font-black`).
- **Body** is mostly 400–500 weight at 16–18px with `leading-relaxed` (1.625).
- **Eyebrows** are `text-xs` / `text-sm`, uppercase, tracking-wider, orange, bold.
- Accent words inside headings are wrapped in `<span class="text-brand-500">` and keep the same weight — never italic, never a different font.

### Backgrounds
- **Gradients** are used purposefully, not everywhere:
  - `gradient-hero` — three-stop navy→blue diagonal (`135deg, #0d1a2d, #1e3a5f, #2a5298`). Used on hero and "CTA final" sections.
  - `gradient-cta` — orange diagonal (`#f97316 → #ea580c`) — only on CTA buttons.
  - `gradient-section` — subtle slate (`#f8fafc → #f1f5f9`) on alternating sections for rhythm.
  - `gradient-medical` — blue diagonal on MediTurno hero.
- **Full-bleed glow orbs** (blurred colored circles, `blur-3xl`) are layered inside dark hero sections for depth.
- **Industrial diagonal stripes** — the Ferret-Quote page uses a 45° orange hazard-stripe pattern for accents.
- **Subtle diagonal texture** — Ferret-Quote hero has a 2px repeating diagonal line at 1.5% opacity over a gray base.
- **No hand-drawn illustrations.** No repeating patterns outside the hazard stripe. No photography.

### Animation & interaction
- **Card hover lift**: `translateY(-4px)` + softer-to-heavier shadow transition (`0 20px 40px rgba(0,0,0,0.12)`), 200ms ease.
- **WhatsApp pulse ring** (`wa-pulse`) — keyframe that expands a green rgba halo around the CTA button.
- **Float animation** (`float-btn`) — gentle 5px vertical sine, 3s loop, used on the floating notification card in the hero.
- **Badge pulse** (opacity 1 → 0.7 → 1, 2s loop) for the "En línea" dot.
- **FAQ chevron** — 45° rotate on `details[open]`.
- **Navbar** scrolls from `transparent` → `rgba(14,26,45,0.97)` + 12px backdrop-blur + shadow at scrollY > 60px.
- All transitions are 150–300ms `ease`. No bounces. No spring physics. No long entrance animations.

### Hover & press states
- **Buttons (solid)**: background darkens one shade (`bg-brand-500` → `hover:bg-brand-600`). No scaling.
- **Buttons (gradient CTA)**: `hover:opacity-90` + shadow grows.
- **Cards**: lift + deeper shadow (the `.card-hover` pattern).
- **Nav links**: color fades from `white/80` → `white` (150ms).
- **Outlined buttons**: background fills with the brand color on hover (`hover:bg-navy-500 hover:text-white`).
- **Press states** are not explicitly styled — relies on browser `:active` default. The design language does **not** use shrink-on-press.

### Borders & rounding
- **Corner radii** are generous:
  - `rounded-xl` (0.75rem) — small inline cards, chips.
  - `rounded-2xl` (1rem) — **the default** for feature cards, product cards, testimonial cards, pricing cards, pain-point cards.
  - `rounded-3xl` (1.5rem) — phone/chat mockups only.
  - `rounded-full` — every button, every pill/badge, every circular avatar, navbar CTA.
- Borders are hairline (`border` = 1px) with soft greys (`border-gray-100`) or colored tints (`border-red-100`, `border-green-100`) matching the card's semantic state.
- The "POPULAR" pricing card uses a **2px solid orange border** + scale(1.05) + an absolute-positioned pill label above the card.
- Testimonial cards use a **4px left border** in brand orange (`border-left: 4px solid #f97316`) — the one place left-border-accent shows up in the system.

### Shadows
Two custom named shadows in the Tailwind config, plus liberal use of defaults:
- `shadow-card` = `0 4px 16px rgba(0,0,0,0.10)` — default card depth.
- `shadow-heavy` = `0 8px 32px rgba(0,0,0,0.18)` — feature cards & mockups.
- `shadow-xl` / `shadow-2xl` — hero-adjacent mockups, modal-like surfaces.
- **Colored shadows** on CTA buttons: `shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50`, `shadow-lg shadow-orange-200`, `shadow-wa` (green).
- **No inset shadows** anywhere.

### Transparency & blur
- **Glass surfaces** on dark hero backgrounds: `bg-white/10 backdrop-blur-sm border border-white/20` — the "Arsenal MR ToolIAA" mockup card.
- **Frosted navbar** on scroll (`backdrop-filter: blur(12px)`).
- **Inline chips** over glass: `bg-white/5 rounded-xl` nested inside a `white/10` parent.
- Background "glow orbs" use `blur-3xl` (64px) for ambient color washes.

### Imagery tone
Intentionally minimal. The company uses **no photography** and **no illustrations** — just logos (product marks), emoji, Lucide-style inline SVG icons, and chat mockups. When a "product visual" is needed, they render a fake dashboard card or a WhatsApp chat bubble instead of a stock photo.

### Layout rules
- **Page width**: `max-w-6xl` (1152px) container with `px-4 sm:px-6 lg:px-8`. Pricing narrows to `max-w-5xl`, CTA-final to `max-w-3xl`.
- **Section vertical rhythm**: `py-20` (5rem top + bottom) on every major section. Tighter on CTA finals.
- **Section header pattern**: centered three-line unit — orange uppercase eyebrow → 3xl/4xl black headline with an orange `<span>` mid-phrase → gray lead paragraph, `max-w-2xl mx-auto`.
- **Three-up card grids** are the workhorse (`grid md:grid-cols-3 gap-8`) — used for problem/solution, products, differentiators, testimonials, pricing.
- **Navbar** is fixed, 64–80px tall, transparent over hero then blurs on scroll.
- **Footer** is deep navy (`bg-navy-800`), 4-column grid (brand takes col-span-2, then products, then contact), hairline white/10 top border, subdued muted white text.

### What to avoid
- **Do not** use multiple gradients in a single surface — gradients here are either solid hero wash, solid CTA, or subtle section tint.
- **Do not** introduce serif or display fonts — Inter only.
- **Do not** use purple/pink/violet — they aren't in the palette.
- **Do not** soften the aggressive contrast: navy-on-white with punchy orange accents is the signature.

---

## ICONOGRAPHY

### Approach
MR ToolIAA uses a **mixed iconography strategy** — by their own admission in the repo README: *"Icons SVG inline (Lucide-style) en hot spots; emojis en zonas decorativas."*

- **Lucide-style inline SVGs** (stroke 2, rounded linecap/linejoin, 18–32px) for meaningful icons inside cards: clock, calendar, stethoscope, bot, phone, checkmark, wrench.
- **Emoji** as large decorative "feature icons" inside colored rounded squares in the corporate landing (`⏰ 💬 ⚙️ 🚀 🏗️ 📱 ⚡ 🇩🇴 🗣️ 💰 🤖 🏥 🔩`).
- **Unicode check/cross/star** glyphs for inline list items and testimonials: `✓`, `✅`, `❌`, `★`, `→`.
- **Brand logos as icons** — MediTurno icon, Ferret-Quote icon, MR ToolIAA M-mark — all served as raster PNGs from `/assets/`. No SVG logo files in the repo.

### Icon system for this design system
- **SVG library**: this design system adopts **Lucide Icons via CDN** as the canonical source. Inline SVGs in the original codebase all match Lucide's stroke style (`stroke="currentColor" stroke-width="2"`).
  - CDN: `https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js`
  - or individual SVGs from `https://lucide.dev/icons/`.
- **Emoji** are kept for decorative/brand-aligned usage (category cards, CTAs, stats). **Do not** introduce emoji inside new production body copy.
- **Logo PNGs** live in `assets/` — copy them into any design rather than re-drawing the marks.
- **No icon font.** No FontAwesome. No custom SVG sprite.

### Logos available in `assets/`
- `logo-mrtooliaa.png` — full color, horizontal lockup
- `logo-mrtooliaa-white.png` — white variant for dark backgrounds (navbar)
- `logo-mrtooliaa-mono.png` — monochrome variant
- `logo_mrtooliaa.png` — alternate size
- `logo-mediturno.png` — MediTurno IA full lockup (stethoscope + IA badge)
- `logo-mediturno-icon.png` — MediTurno icon only
- `logo-ferretquote-icon.png` — Ferret-Quote icon (wrench + chat bubble + lightning)

⚠️ **Font note**: Inter is loaded live from Google Fonts CDN in all three production pages — there are **no `.ttf` / `.woff` files committed to the repo**. This design system follows the same pattern (`@import` in `colors_and_type.css`). If you need offline fonts, grab Inter from `https://fonts.google.com/specimen/Inter`.
