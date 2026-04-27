# mrtooliaa-site

Sitio estatico de MR ToolIAA desplegado en Cloudflare Pages, con tres landings renderizadas con Astro:

```text
mrtooliaa.com/              -> Landing empresa MR ToolIAA
mrtooliaa.com/mediturno/    -> Landing MediTurno IA
mrtooliaa.com/ferretquote/  -> Landing Ferret-Quote Bot
```

---

## Stack actual

- Astro 5
- Tailwind CSS 3
- Sitio estatico con salida en `dist/`
- Contenido centralizado en `src/data/`
- Componentes compartidos en `src/components/`
- Deploy en Cloudflare Pages

---

## Desarrollo local

### 1. Instalar dependencias

```bash
npm install
```

### 2. Levantar el proyecto

```bash
npm run dev
```

Astro sirve el sitio localmente con recarga en caliente.

### 3. Build de produccion

```bash
npm run build
```

La salida se genera en `dist/`.

### 4. Verificaciones integradas

```bash
npm run verify
```

Ese comando ejecuta:

- `npm run build`
- `npm run verify:csp`
- `npm run verify:links`

---

## Deploy en Cloudflare Pages

### Configuracion recomendada

1. En Cloudflare Pages, conecta el repo `mrtooliaa-site`.
2. Usa esta configuracion:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`

Si prefieres no usar el preset de Astro, tambien funciona con:

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`

### Archivos estaticos de plataforma

Los siguientes archivos se copian desde `public/` al build final:

- `public/_headers`
- `public/_redirects`
- `public/robots.txt`
- `public/sitemap.xml`

### Dominio y HTTPS

Cloudflare gestiona el dominio custom y el certificado SSL. Mantener activado:

- custom domain `mrtooliaa.com`
- `Always Use HTTPS`

---

## Estructura del repo

```text
mrtooliaa-site/
├── public/
│   ├── _headers
│   ├── _redirects
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── input.css
├── scripts/
│   ├── verify-csp-hashes.mjs
│   └── verify-links.mjs
├── docs/
│   ├── INFORME_REFACTOR.md
│   ├── INFORME_SEGURIDAD.md
│   └── design-system/
├── archive/
│   └── MR ToolIAA Design System-handoff.zip
├── astro.config.mjs
├── tailwind.config.js
├── package.json
└── README.md
```

---

## Arquitectura

### Paginas

- [src/pages/index.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/pages/index.astro)
- [src/pages/mediturno.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/pages/mediturno.astro)
- [src/pages/ferretquote.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/pages/ferretquote.astro)

### Layouts y componentes compartidos

- [src/layouts/BaseLayout.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/layouts/BaseLayout.astro)
- [src/components/layout/Navbar.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/components/layout/Navbar.astro)
- [src/components/layout/Footer.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/components/layout/Footer.astro)
- [src/components/seo/SEOHead.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/components/seo/SEOHead.astro)

### Datos centralizados

- [src/data/site.ts](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/data/site.ts)
- [src/data/mrtooliaa.ts](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/data/mrtooliaa.ts)
- [src/data/mediturno.ts](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/data/mediturno.ts)
- [src/data/ferretquote.ts](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/data/ferretquote.ts)

---

## Seguridad

La politica de seguridad vive en [public/_headers](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/public/_headers).

Incluye:

- CSP estricta con hashes para JSON-LD
- HSTS
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Resource-Policy: same-origin`

### Importante

Los bloques `<script type="application/ld+json">` se renderizan desde datos. Si se modifican, hay que verificar los hashes CSP con:

```bash
npm run verify:csp
```

Mas contexto en [docs/INFORME_SEGURIDAD.md](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/docs/INFORME_SEGURIDAD.md).

---

## SEO

- Canonicals por pagina
- OpenGraph y Twitter Card por landing
- JSON-LD por landing
- `robots.txt` y `sitemap.xml`
- URLs limpias con trailing slash en producto

---

## Documentacion relacionada

- [docs/INFORME_SEGURIDAD.md](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/docs/INFORME_SEGURIDAD.md)
- [docs/INFORME_REFACTOR.md](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/docs/INFORME_REFACTOR.md)

---

## Verificacion post-deploy

- [ ] `https://mrtooliaa.com/` carga correctamente
- [ ] `https://mrtooliaa.com/mediturno/` carga correctamente
- [ ] `https://mrtooliaa.com/ferretquote/` carga correctamente
- [ ] `npm run verify` pasa en limpio
- [ ] `curl -I https://mrtooliaa.com` devuelve CSP y HSTS
- [ ] `https://mrtooliaa.com/sitemap.xml` responde
- [ ] Lighthouse >= 95 en las 3 landings
