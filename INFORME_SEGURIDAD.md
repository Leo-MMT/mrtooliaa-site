# Informe de seguridad — mrtooliaa-site

**Proyecto:** `mrtooliaa-site` (3 landings estáticas en Cloudflare Pages)
**Fecha auditoría:** 2026-04-26
**Auditor:** Claude (Opus 4.7)
**Alcance:** `index.html`, `mediturno/index.html`, `ferretquote/index.html`, `_headers`, `_redirects`, dependencias, configuración de deploy.

---

## Resumen ejecutivo

| | Antes | Después |
|---|---|---|
| Riesgo general | Bajo–Medio | **Muy bajo** |
| Headers de seguridad | 7/10 | **10/10** |
| CSP `script-src` | `'self' 'unsafe-inline'` | `'self' + hashes` |
| Fuentes externas | Google Fonts CDN | **Self-hosted** |
| Reverse-tabnabbing | 19 enlaces vulnerables | **0** |
| Cookies / tracking / forms | Ninguno | Ninguno |
| Secretos en repo | Ninguno | Ninguno |

Esperable en [securityheaders.com](https://securityheaders.com): **A+** (vs. B/A anterior).

---

## 1. Metodología

Se revisaron los siguientes vectores típicos de la OWASP Top 10 para sitios estáticos:

- **Headers HTTP de seguridad** (`_headers`).
- **Content Security Policy** — directivas, fuentes permitidas, nivel de strictness.
- **HTTPS / HSTS** — preload, includeSubDomains.
- **Clickjacking** — `X-Frame-Options` y CSP `frame-ancestors`.
- **Reverse tabnabbing** — `target="_blank"` sin `rel="noopener noreferrer"`.
- **Recursos de terceros** — CDN externos, SRI, privacidad.
- **Inline scripts / event handlers** — riesgo de XSS si futuro contenido se refleja.
- **Fugas de información** — sourcemaps, comentarios, archivos `.env`, secretos hardcoded.
- **Mixed content / upgrade-insecure-requests**.
- **MIME sniffing** y `Referrer-Policy`.
- **Configuración de Cloudflare Pages** — caché, redirects, canonical.

---

## 2. Hallazgos

### 🟡 H-01 — Reverse tabnabbing en 19 enlaces externos
**Severidad:** Media · **Estado:** ✅ Resuelto

Los enlaces con `target="_blank"` permiten que la pestaña abierta acceda a `window.opener` y manipule la URL del sitio origen.

| Archivo | Antes | Después |
|---|---|---|
| `index.html` | 12 vulnerables | 12/12 con `rel="noopener noreferrer"` |
| `mediturno/index.html` | 7 vulnerables | 7/7 con `rel="noopener noreferrer"` |
| `ferretquote/index.html` | 0 (ya correcto) | 11/11 |

Refuerzo adicional: header `Cross-Origin-Opener-Policy: same-origin` aísla el contexto del browsing context.

---

### 🟡 H-02 — CSP permitía `'unsafe-inline'` en `script-src`
**Severidad:** Media · **Estado:** ✅ Resuelto

`'unsafe-inline'` permite ejecutar cualquier `<script>` inline. En un sitio estático sin inputs de usuario el riesgo real es teórico, pero rompe el principio de defensa en profundidad y bloquea Lighthouse / observatory.

**Solución aplicada:**
1. JS ejecutable extraído de `index.html` → `assets/js/main.js` (cargado vía `<script src="..." defer>`).
2. Bloques `<script type="application/ld+json">` (1 por landing) allowlisteados por **hash SHA-256**.
3. CSP ahora usa: `script-src 'self' 'sha256-...' 'sha256-...' 'sha256-...'`.

> ⚠️ Mantenimiento: cualquier edición en JSON-LD invalida su hash. Procedimiento de regeneración documentado en `_IA_CONTEXT.MD` (sección 8.5) y replicado abajo en sección 6.

---

### 🟢 H-03 — Google Fonts (privacidad + CSP)
**Severidad:** Baja · **Estado:** ✅ Resuelto

Cada visitante hacía requests a `fonts.googleapis.com` y `fonts.gstatic.com`, exponiendo IP y user-agent a Google. Además impedía endurecer CSP.

**Solución aplicada:**
- Inter descargada como **variable font** (woff2) y self-hosteada en `assets/fonts/`.
- 2 archivos cubren todos los pesos 100–900 (deduplicación tras detectar archivos byte-idénticos en CDN).
- Tamaños: `inter-latin.woff2` (47KB), `inter-latin-ext.woff2` (83KB) → total **130KB** (vs. ~800KB si se hubiera bajado un archivo por peso).
- `@font-face` declaradas en `src/input.css`, compiladas a `assets/tailwind.css`.
- `<link>` a Google Fonts removidos de las 3 landings.
- Preload local agregado: `<link rel="preload" href="/assets/fonts/inter-latin.woff2" as="font" crossorigin>`.
- CSP endurecido: `font-src 'self'`, `style-src 'self' 'unsafe-inline'` (ya sin Google).

---

### 🟢 H-04 — Header `X-XSS-Protection` obsoleto
**Severidad:** Informativa · **Estado:** ✅ Resuelto

`X-XSS-Protection: 1; mode=block` está deprecado (Chrome lo removió, Firefox nunca lo soportó) y en algunos casos puede introducir vulnerabilidades. La mitigación moderna es CSP.

**Solución aplicada:** header eliminado del `_headers`.

---

### 🟢 H-05 — Hardening adicional
**Severidad:** Mejora · **Estado:** ✅ Resuelto

Headers cross-origin agregados como defensa en profundidad:

- `Cross-Origin-Opener-Policy: same-origin` — aísla `window.opener`.
- `Cross-Origin-Resource-Policy: same-origin` — bloquea hotlink de assets desde otros sitios.

`_redirects` creado para canonicalizar URLs (apex vs www, trailing slash, ocultar `/index.html`).

---

## 3. Cambios aplicados (resumen)

### Archivos modificados

| Archivo | Cambio |
|---|---|
| `_headers` | +COOP/CORP, –X-XSS-Protection, CSP endurecido (hashes, sin Google Fonts) |
| `_redirects` | **nuevo** — canonical apex, trailing slash, oculta index.html |
| `index.html` | rel=noopener, JS externalizado, preload Inter local |
| `mediturno/index.html` | rel=noopener, preload Inter local |
| `ferretquote/index.html` | preload Inter local |
| `src/input.css` | `@font-face` Inter self-hosted |
| `assets/tailwind.css` | recompilado |
| `assets/js/main.js` | **nuevo** — scroll handler + magnetic logo |
| `assets/fonts/inter-latin.woff2` | **nuevo** — 47KB |
| `assets/fonts/inter-latin-ext.woff2` | **nuevo** — 83KB |

### `_IA_CONTEXT.MD` (local, gitignored)

Sección 8 ampliada con:
- Procedimiento de regeneración de hashes CSP.
- Política: nunca volver a Google Fonts CDN.
- Política: JS ejecutable solo en `assets/js/`, no inline.
- Política: todos los `target="_blank"` requieren `rel="noopener noreferrer"`.

---

## 4. Headers finales (`_headers`)

```http
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
Content-Security-Policy: default-src 'self';
                         script-src 'self'
                                    'sha256-KhQvt2MC/0QlFyNruv0+cPrMHRVx/EBkHpfkmREsgvg='
                                    'sha256-NWMyw0W/DNP+SoQg8wgNpi55UcsJTRkzygZ7vreAuQE='
                                    'sha256-VacjrFqhICsdoRj96DP8Zr/mJ+CGh3KZ2a2IYBQRrYg=';
                         style-src 'self' 'unsafe-inline';
                         font-src 'self';
                         img-src 'self' data:;
                         connect-src 'self';
                         frame-ancestors 'none';
                         base-uri 'self';
                         form-action 'self' https://wa.me;
                         upgrade-insecure-requests
```

> El CSP en el archivo real va en una sola línea. Acá se formatea para legibilidad.

---

## 5. `_redirects`

```
https://www.mrtooliaa.com/*  https://mrtooliaa.com/:splat  301!
/index.html              /                301
/mediturno/index.html    /mediturno/      301
/ferretquote/index.html  /ferretquote/    301
/mediturno     /mediturno/     301
/ferretquote   /ferretquote/   301
```

---

## 6. Mantenimiento — gotchas críticos

### Editar JSON-LD invalida CSP

Cualquier cambio (incluso un espacio) en un bloque `<script type="application/ld+json">` rompe el structured data en producción (no falla visualmente, pero Google deja de verlo).

**Procedimiento:**

```bash
python3 - <<'PY'
import re, hashlib, base64, pathlib
for f in ['index.html','mediturno/index.html','ferretquote/index.html']:
    html = pathlib.Path(f).read_text()
    for c in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL):
        h = base64.b64encode(hashlib.sha256(c.encode()).digest()).decode()
        print(f"{f}: 'sha256-{h}'")
PY
```

Reemplazá los 3 valores `'sha256-...'` en `_headers`.

### Agregar JS ejecutable

**No** poner `<script>...</script>` con código en HTML. Opciones válidas:
- Agregar al archivo existente: `assets/js/main.js`.
- Crear nuevo archivo en `assets/js/` y referenciarlo: `<script src="/assets/js/X.js" defer></script>`.

`'self'` ya cubre cualquier JS bajo el dominio.

### Volver a Google Fonts (no hacerlo)

Si necesitás otro peso/familia de Inter o agregar otra fuente, **descargála y self-hosteála** en `assets/fonts/`. Volver al CDN romperá:
- `font-src 'self'` (CSP)
- `style-src 'self' 'unsafe-inline'` (CSP — necesitaría agregar `https://fonts.googleapis.com`)

Y reintroduce el leak de privacidad.

---

## 7. Validación post-deploy

1. **[securityheaders.com](https://securityheaders.com/?q=mrtooliaa.com)** → grade objetivo **A+**.
2. **[Mozilla Observatory](https://observatory.mozilla.org/analyze/mrtooliaa.com)** → grade objetivo **A+**.
3. **DevTools → Console** → 0 errores de CSP. Si hay alguno, anotá el hash/source que reporta y agregálo.
4. **DevTools → Network** → confirmá:
   - `inter-latin.woff2` carga desde `mrtooliaa.com`, NO de `gstatic.com`.
   - `main.js` carga desde `/assets/js/`.
   - Sin requests a `fonts.googleapis.com` ni `fonts.gstatic.com`.
5. **[Google Rich Results Test](https://search.google.com/test/rich-results)** → estructura JSON-LD válida en las 3 landings.
6. **[hstspreload.org](https://hstspreload.org)** → confirmar elegibilidad para HSTS preload (si querés que Chrome/Firefox precarguen el dominio).

---

## 8. Riesgos residuales aceptados

Estos puntos NO son vulnerabilidades activas pero conviene tenerlos en mente:

| Riesgo | Por qué se acepta | Mitigación opcional |
|---|---|---|
| `mailto:info@mrtooliaa.com` en texto plano | Necesario para CTA de contacto | Reemplazar por form con Turnstile + Worker |
| Número WhatsApp `+18099567956` en 30+ enlaces | Es el canal principal de leads | Rotar a número WA Business dedicado al sitio si llega spam |
| `style-src 'unsafe-inline'` | Hay `style="..."` inline en navbar y WhatsApp button | Refactor a clases Tailwind / CSS externo (~30 min) |
| Cache `immutable` en `assets/tailwind.css` | Acelera carga; pero requiere rotar nombre al cambiar | Renombrar a `tailwind.[hash].css` en build |
| Comentarios HTML revelan estructura | Cero impacto técnico, solo cosmético | HTML minifier en pipeline si se quiere |

---

## 9. Pendientes (decisión del propietario)

- [ ] Commit y push de los cambios (10 archivos).
- [ ] Validación post-deploy con las 6 herramientas listadas en sección 7.
- [ ] (Opcional) Submit a [hstspreload.org](https://hstspreload.org).
- [ ] (Opcional) Reemplazar `mailto:` por form con Turnstile.
- [ ] (Opcional) Refactor de inline `style=` para eliminar `'unsafe-inline'` de `style-src`.

---

## Apéndice — comandos útiles

```bash
# Rebuild CSS (correr siempre que se toque src/input.css o tailwind.config.js)
npm run build:css

# Servir local (verificar que CSP no rompa nada antes de pushear)
python3 -m http.server 8787

# Desarrollo con hot-rebuild de CSS
npm run watch:css

# Verificar headers reales del deploy
curl -sI https://mrtooliaa.com/ | grep -iE 'content-security-policy|strict-transport|x-frame|cross-origin'

# Recomputar hashes JSON-LD (ver sección 6)
```
