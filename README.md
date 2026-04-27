# mrtooliaa-site

Sitio estático de MR ToolIAA — 3 landings consolidadas para deploy en Cloudflare Pages.

```
mrtooliaa.com/              → Landing empresa MR ToolIAA
mrtooliaa.com/mediturno/    → Landing MediTurno IA
mrtooliaa.com/ferretquote/  → Landing Ferret-Quote Bot
```

---

## Stack actual

- HTML estático + Tailwind CSS **compilado** (sin CDN runtime)
- Icons SVG inline (Lucide-style) en hot spots; emojis en zonas decorativas
- Fuentes: Inter (self-hosted variable font en `assets/fonts/`)
- Deploy: Cloudflare Pages (build step opcional — ver más abajo)

---

## Desarrollo local

### 1. Instalar dependencias

```bash
npm install
```

### 2. Compilar Tailwind

```bash
npm run build:css     # One-shot: src/input.css → assets/tailwind.css (minified)
npm run watch:css     # Watch mode durante desarrollo
```

La salida queda en `assets/tailwind.css` y ya está commiteada — así el deploy en Cloudflare Pages no necesita ejecutar un build step.

### 3. Servir localmente

```bash
python3 -m http.server 8787
# abre http://localhost:8787
```

---

## Deploy en Cloudflare Pages

### 1. Conectar repo a Cloudflare Pages

1. Entra a [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages**
2. Click **Connect to Git** → autoriza GitHub → selecciona el repo `mrtooliaa-site`
3. Configuración de build:
   - **Framework preset:** None
   - **Build command:** *(vacío — el CSS ya está compilado en `assets/tailwind.css`)*
   - **Build output directory:** `/`

Cloudflare Pages despliega automáticamente en cada push a `main`.

> **Nota:** si prefieres que CF compile el CSS en el servidor, usa:
> - Build command: `npm install && npm run build:css`
> - Build output: `/`

### 2. Configurar dominio custom `mrtooliaa.com`

1. En Cloudflare Pages → tu proyecto → **Custom domains** → **Set up a custom domain**
2. Ingresa `mrtooliaa.com` → Click **Continue**

### 3. Cambiar nameservers en Namecheap

1. Entra a [namecheap.com](https://namecheap.com) → **Domain List** → `mrtooliaa.com` → **Manage**
2. En **Nameservers**, selecciona **Custom DNS** e ingresa los que Cloudflare te dio
3. Propagación: 5 min – 48 h

### 4. SSL/HTTPS

Cloudflare genera el certificado SSL automáticamente. Para forzar HTTPS: Dashboard → SSL/TLS → Edge Certificates → **Always Use HTTPS**.

---

## Estructura del repo

```
mrtooliaa-site/
├── index.html              ← Landing MR ToolIAA (raíz)
├── mediturno/
│   └── index.html          ← Landing MediTurno IA
├── ferretquote/
│   └── index.html          ← Landing Ferret-Quote Bot
├── assets/
│   ├── fonts/              ← Inter variable font (self-hosted)
│   ├── js/main.js          ← JS mínimo (nav scroll + logo)
│   ├── logo-*.png          ← Logos
│   └── tailwind.css        ← CSS compilado (commited)
├── src/
│   └── input.css           ← Fuente Tailwind (@tailwind directives + tokens)
├── tailwind.config.js      ← Colores, fonts, safelist
├── package.json            ← Scripts build/watch
├── _headers                ← CSP, HSTS, cache, security
├── _redirects              ← Canonical URLs, trailing slash
├── sitemap.xml             ← SEO
├── robots.txt              ← SEO
├── docs/                   ← Documentación técnica e informes
│   ├── INFORME_SEGURIDAD.md
│   ├── INFORME_REFACTOR.md
│   └── design-system/      ← Handoff del design system (referencia)
├── archive/                ← Material histórico
│   └── MR ToolIAA Design System-handoff.zip
└── README.md
```

---

## Seguridad

El archivo `_headers` aplica (vía Cloudflare Pages):

- **CSP** estricta (`default-src 'self'`, `script-src 'self' + hashes SHA-256` para JSON-LD, `font-src 'self'`)
- **HSTS** `max-age=31536000; includeSubDomains; preload`
- `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` restrictiva (cámara, micrófono, geo, FLoC desactivados)
- `Cross-Origin-Opener-Policy: same-origin`, `Cross-Origin-Resource-Policy: same-origin`
- Cache-Control diferenciado: immutable para assets, revalidate para HTML

> **Nota sobre CSP:** Los bloques `<script type="application/ld+json">` están allowlisteados por hash SHA-256. Cualquier edición en estos bloques requiere regenerar los hashes. Ver `docs/INFORME_SEGURIDAD.md` §6.

---

## SEO

- Sitemap XML en `/sitemap.xml`
- `robots.txt` con referencia al sitemap
- OpenGraph + Twitter Card tags completos en las 3 landings
- Canonical URLs
- Schema.org JSON-LD: `Organization` (home), `SoftwareApplication` (MediTurno, Ferret-Quote)
- `theme-color` por landing (navy / medical / primary)

---

## Roadmap — migración a Astro

El sitio está en proceso de migración a [Astro](https://astro.build):

1. **Componentes**: las 3 landings comparten navbar, footer y CTA WhatsApp → `<Navbar />`, `<Footer />`, `<WhatsAppCTA />`.
2. **Layouts**: un `BaseLayout.astro` envuelve los `<head>` (OG, preconnect, CSP-compatible script tags).
3. **Contenido**: textos de producto y features → TS data files → map en componentes.
4. **Tailwind**: ya está en v3 con config compartida — `@astrojs/tailwind` lo lee directamente.
5. **Deploy**: CF Pages soporta Astro out-of-the-box — solo cambia build command a `npm run build`.

Archivos que **NO** requieren cambio en la migración: `_headers`, `sitemap.xml`, `robots.txt`, `assets/*.png`.

---

## Verificación post-deploy

- [ ] `https://mrtooliaa.com` carga la landing empresa
- [ ] `https://mrtooliaa.com/mediturno/` carga la landing MediTurno
- [ ] `https://mrtooliaa.com/ferretquote/` carga la landing Ferret-Quote
- [ ] Links "← MR ToolIAA" en product pages vuelven a `/`
- [ ] Logos de producto cargan en las tarjetas (MediTurno, Ferret-Quote)
- [ ] Logo MR ToolIAA carga en navbar y footer
- [ ] HTTPS activo (candado verde en browser)
- [ ] `curl -I https://mrtooliaa.com` devuelve CSP + HSTS headers
- [ ] `https://mrtooliaa.com/sitemap.xml` accesible
- [ ] Lighthouse score ≥ 95 en las 3 landings (Performance + SEO + Best Practices)
