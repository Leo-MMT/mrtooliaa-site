---
name: mrtooliaa-design
description: Use this skill to generate well-branded interfaces and assets for MR ToolIAA (and its products MediTurno IA and Ferret-Quote Bot), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files:

- `colors_and_type.css` — all color / type / shadow / radius tokens as CSS vars plus semantic helpers (`.h1`, `.eyebrow`, `.lead`, `.accent`, etc.)
- `assets/` — official MR ToolIAA / MediTurno / Ferret-Quote logos (PNG, multiple variants)
- `preview/` — small HTML cards for each design-system concept; read these to SEE the tokens applied
- `ui_kits/mrtooliaa/`, `ui_kits/mediturno/`, `ui_kits/ferretquote/` — React (Babel) UI kits for each product. Each has an `index.html` demoing an interactive click-thru, plus small, reusable JSX components.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (which product? which surface? what content?), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Key brand rules — do not forget:**
- Copy is **always Spanish (es_DO)** for public-facing surfaces.
- Use **Inter**, weights 400/500/600/700/800/900.
- Hero and footer live on **deep navy** (`#0d1a2d` / `#1e3a5f`); CTAs live on **brand orange** (`#f97316`).
- MediTurno swaps navy for **medical blue** (`#0066CC`) + **WhatsApp green** (`#00CC66`).
- Ferret-Quote uses **industrial gray** (`#1f2937`) + orange + hazard stripes.
- Cards are `rounded-2xl`, buttons are `rounded-full`. Mockups (phones, chats) are `rounded-3xl`.
- Every major CTA is a **WhatsApp link** to `+1 809 956-7956`.
- Emoji are used decoratively (never in body); inline SVGs are Lucide-style.
