# _IA_CONTEXT — mrtooliaa-site

> Lee este archivo **antes** de cualquier tarea. Resume el proyecto, el stack, las convenciones y los puntos donde es fácil romper algo.

---

## 1. Qué es esto

Sitio estático con **3 landings** consolidadas en un solo repo, deployadas en Cloudflare Pages bajo `mrtooliaa.com`.

```
mrtooliaa.com/              → index.html              (empresa MR ToolIAA)
mrtooliaa.com/mediturno/    → mediturno/index.html    (MediTurno IA — agendamiento médico)
mrtooliaa.com/ferretquote/  → ferretquote/index.html  (Ferret-Quote Bot — cotizador ferretería)
```

Cada landing es **HTML estático autocontenido** que comparte `assets/tailwind.css` y los logos de `assets/`.

**Estado actual:** En proceso de migración a Astro (ver `docs/INFORME_REFACTOR.md`).

---

## 2. Stack

- **HTML estático** (migración a Astro en progreso).
- **Tailwind CSS compilado local** (`tailwindcss ^3.4.17`). NO hay CDN runtime — el CSS se commitea ya minificado en `assets/tailwind.css`.
- **Iconos:** SVG inline (estilo Lucide) en hot spots; emojis solo en zonas decorativas.
- **Tipografía:** Inter (self-hosted variable font en `assets/fonts/inter-latin{,-ext}.woff2`). NO usa Google Fonts CDN.
- **Deploy:** Cloudflare Pages, build command vacío, output `/`. Cada push a `main` despliega.

---

## 3. Estructura del repo

```
mrtooliaa-site/
├── index.html                        # Landing empresa
├── mediturno/index.html              # Landing MediTurno
├── ferretquote/index.html            # Landing FerretQuote
├── src/input.css                     # Fuente de Tailwind (tokens + @layer custom)
├── tailwind.config.js                # Tema extendido (colores brand, gradients, shadows)
├── assets/
│   ├── tailwind.css                  # ⚠️ Generado — NO editar a mano
│   ├── fonts/inter-latin*.woff2      # Inter self-hosted
│   ├── js/main.js                    # JS mínimo (nav scroll + logo)
│   ├── logo-mrtooliaa-*.{png,svg}
│   ├── logo-mediturno*.png
│   └── logo-ferretquote-icon.png
├── docs/                             # Documentación técnica
│   ├── INFORME_SEGURIDAD.md
│   ├── INFORME_REFACTOR.md
│   └── design-system/               # Handoff de Claude Design (referencia visual)
├── archive/                          # Material histórico
├── _headers, _redirects              # Config Cloudflare
├── robots.txt, sitemap.xml           # SEO
└── package.json                      # Solo build scripts de Tailwind
```

---

## 4. Comandos

```bash
npm install                # primera vez
npm run watch:css          # desarrollo — regenera assets/tailwind.css al guardar
npm run build:css          # build minificado one-shot (commitear el output)
python3 -m http.server 8787   # servir en http://localhost:8787
```

**Antes de commitear cambios visuales** corré `npm run build:css` y commiteá `assets/tailwind.css` junto con el HTML/`input.css`.

---

## 5. Design System — tokens clave

Definidos en `src/input.css` (CSS vars en `:root`) y replicados en `tailwind.config.js`. Si agregás un color, **actualizá ambos**.

### Paletas
- `navy` — base oscura corporativa (`navy-800` = #0d1a2d).
- `brand` — naranja MR ToolIAA (`brand-500` = #f97316).
- `medical` — azul MediTurno (`medical-500` = #0066CC).
- `wa` — verde WhatsApp (`wa-500` = #25d366).
- `hardware` — marrones FerretQuote.

### Gradients utilitarios
`gradient-hero`, `gradient-cta`, `gradient-medical`, `gradient-wa`, `gradient-section`.

### Tipografía semántica (clases custom)
`h-hero`, `h1`–`h4`, `eyebrow`, `lead`, `micro`, `accent`, `accent-green`, `accent-medical`.

### Shadows
`shadow-card`, `shadow-heavy`, `shadow-hover`, `shadow-orange`, `shadow-wa`.

> ⚠️ Estas clases están en el `safelist` de `tailwind.config.js`. Si renombrás o agregás clases dinámicas, actualizá el safelist o Tailwind las purgará.

---

## 6. Convenciones

- **Astro es el framework objetivo.** El proyecto migra de HTML estático a Astro.
- **No usar Tailwind por CDN.** Ya se migró a build local; revertir rompe el flujo.
- **Iconos en hot spots = SVG inline.** No usar fuentes de iconos ni CDN.
- **Contenido en español** (es-DO / es-LATAM).
- **Logos:** preferir SVG cuando exista (`logo-mrtooliaa-white.svg`); PNG como fallback.

---

## 7. Estado actual (2026-04-26)

- Rama: `main`
- Refactor en progreso: migrando a Astro con componentes reutilizables y datos centralizados.
- Documentación movida a `docs/`, material de handoff a `archive/`.

---

## 8. Antes de tocar algo

1. Si vas a cambiar colores/tipografía: editá `src/input.css` **y** `tailwind.config.js`, después `npm run build:css`.
2. Si agregás clases Tailwind dinámicas (concatenadas en JS o usadas solo en un atributo): añadilas al `safelist`.
3. Si agregás una landing nueva: añadí el path al `content` de `tailwind.config.js`, al `sitemap.xml` y al `_redirects` si corresponde.
4. Si tocás `_headers` o redirects: probá con `wrangler pages dev` antes de pushear.
5. **Si editás un bloque `<script type="application/ld+json">`**: el CSP en `_headers` lo allowlistea por hash SHA-256. Cualquier cambio (incluso un espacio) **invalida el hash y rompe el structured data**. Recomputá los 3 hashes con:
   ```bash
   python3 -c "
   import re, hashlib, base64, pathlib
   for f in ['index.html','mediturno/index.html','ferretquote/index.html']:
       html = pathlib.Path(f).read_text()
       for c in re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>', html, re.DOTALL):
           print(f, 'sha256-' + base64.b64encode(hashlib.sha256(c.encode()).digest()).decode())
   "
   ```
   Y reemplazá los 3 valores `'sha256-...'` en la línea `Content-Security-Policy:` de `_headers`.

---

## 9. Seguridad — estado y supuestos

- **CSP estricto**: `script-src 'self' + 3 hashes`. NO usar `'unsafe-inline'` para scripts. Si necesitás un script inline nuevo, movélo a `assets/js/` o calculá hash y agregálo al CSP.
- **JS ejecutable** vive en `assets/js/main.js`. NO añadir `<script>...</script>` ejecutable a los HTML.
- **Inter self-hosteado** en `assets/fonts/inter-latin{,-ext}.woff2` — variable font, cubre weights 100–900 en una sola declaración. NO volver a Google Fonts (rompe CSP `font-src 'self'` y `style-src 'self'`).
- **Headers críticos**: HSTS preload activo (1 año). Quitar `includeSubDomains` solo si vas a delegar subdominios a otros servicios sin HTTPS.
- Todos los `<a target="_blank">` deben llevar `rel="noopener noreferrer"`.
