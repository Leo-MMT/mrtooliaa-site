# Informe de seguridad — mrtooliaa-site

**Proyecto:** `mrtooliaa-site`  
**Fecha auditoria:** 2026-04-27  
**Estado auditado:** arquitectura Astro actual, con salida estatica en `dist/`  
**Alcance:** `src/pages/`, `src/components/seo/SEOHead.astro`, `public/_headers`, `public/_redirects`, scripts de verificacion, dependencias y flujo de build.

---

## Resumen ejecutivo

El sitio tiene una postura de seguridad fuerte para su categoria:

- sin formularios propios
- sin cookies de aplicacion
- sin runtime complejo en cliente
- con CSP estricta
- con recursos propios en vez de CDNs de terceros

El cambio mas importante respecto al estado anterior es que la seguridad ya no depende de HTML manual en raiz, sino de una arquitectura Astro con datos centralizados y verificaciones automatizadas.

### Evaluacion general

- Riesgo general: **Muy bajo**
- Security headers esperables: **A / A+**
- Riesgo operativo principal: **deriva documental o errores manuales fuera del flujo `npm run verify`**

---

## 1. Superficie revisada

### Render y metadata

- [src/pages/index.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/pages/index.astro)
- [src/pages/mediturno.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/pages/mediturno.astro)
- [src/pages/ferretquote.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/pages/ferretquote.astro)
- [src/components/seo/SEOHead.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/components/seo/SEOHead.astro)

### Seguridad de plataforma

- [public/_headers](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/public/_headers)
- [public/_redirects](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/public/_redirects)

### Verificaciones

- [scripts/verify-csp-hashes.mjs](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/scripts/verify-csp-hashes.mjs)
- [scripts/verify-links.mjs](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/scripts/verify-links.mjs)
- [package.json](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/package.json)

---

## 2. Hallazgos y estado

### H-01 — CSP estricta con hashes para JSON-LD

**Severidad:** Media  
**Estado:** Resuelto y automatizado

Los bloques JSON-LD ya no dependen de scripts inline escritos a mano en HTML raiz. Se renderizan desde [SEOHead.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/components/seo/SEOHead.astro:55) y se validan contra `public/_headers` con [verify-csp-hashes.mjs](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/scripts/verify-csp-hashes.mjs:1).

### H-02 — Reverse tabnabbing

**Severidad:** Media  
**Estado:** Resuelto

Las paginas generadas validan `target="_blank"` con `rel="noopener"` o `rel="noopener noreferrer"` a traves de [verify-links.mjs](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/scripts/verify-links.mjs:38).

### H-03 — Dependencia de fuentes externas

**Severidad:** Baja  
**Estado:** Resuelto

Inter se sirve localmente y se precarga desde assets propios. No hay dependencia de Google Fonts en el flujo actual.

### H-04 — Headers de endurecimiento

**Severidad:** Mejora  
**Estado:** Resuelto

Se mantienen:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security`
- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Resource-Policy: same-origin`

### H-05 — Riesgo operativo residual

**Severidad:** Baja  
**Estado:** Aceptado con mitigacion

El principal riesgo remanente no es una vulnerabilidad tecnica, sino saltarse el flujo de verificacion antes de deploy. La mitigacion actual es ejecutar `npm run verify`.

---

## 3. Controles actuales

### En build

```bash
npm run build
```

Genera las tres paginas estaticas en `dist/`.

### Verificacion CSP

```bash
npm run verify:csp
```

Comprueba que cada hash de JSON-LD generado exista en `public/_headers`.

### Verificacion de enlaces y assets

```bash
npm run verify:links
```

Comprueba:

- telefono correcto en `wa.me`
- `rel` en enlaces con `target="_blank"`
- existencia de assets referenciados en el HTML generado

### Verificacion completa

```bash
npm run verify
```

Ejecuta build + validaciones.

---

## 4. Headers esperados

La fuente de verdad es [public/_headers](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/public/_headers).

Los controles clave esperados son:

- `default-src 'self'`
- `script-src 'self'` mas hashes SHA-256 para JSON-LD
- `style-src 'self' 'unsafe-inline'`
- `font-src 'self'`
- `img-src 'self' data:`
- `frame-ancestors 'none'`
- `form-action 'self' https://wa.me`

---

## 5. Mantenimiento correcto

### Si cambias contenido SEO o JSON-LD

1. Edita los datos en `src/data/`.
2. Ejecuta:

```bash
npm run verify:csp
```

3. Si falla, actualiza los hashes de `public/_headers` segun el flujo automatizado o el valor reportado.

### Si cambias enlaces o assets

Ejecuta:

```bash
npm run verify:links
```

### Si cambias la estructura del sitio

Ejecuta:

```bash
npm run verify
```

---

## 6. Riesgos residuales aceptados

| Riesgo | Motivo | Mitigacion |
|---|---|---|
| `style-src 'unsafe-inline'` | Hay estilos inline y clases generadas que aun no justifican endurecimiento extra | Podria refactorizarse mas adelante |
| Enlaces repetidos a WhatsApp | Es el principal canal de conversion | Verificados automaticamente |
| Material historico en `archive/` | No afecta runtime, pero si el repo | Mantenerlo fuera del camino operativo |

---

## 7. Validacion post-deploy

1. Ejecutar localmente:

```bash
npm run verify
```

2. Verificar produccion:

```bash
curl -I https://mrtooliaa.com
```

3. Confirmar:

- presencia de CSP y HSTS
- carga correcta de las tres landings
- ausencia de errores de consola relacionados con CSP
- `robots.txt` y `sitemap.xml` accesibles

---

## 8. Conclusion

La seguridad del proyecto esta bien resuelta para su superficie real. La mejora mas importante no fue solo endurecer headers, sino mover el sitio a una arquitectura donde la metadata, los datos y las validaciones pueden mantenerse sin depender de edicion manual dispersa.

El riesgo principal ya no esta en la configuracion tecnica, sino en no seguir el flujo de verificacion antes de desplegar.
