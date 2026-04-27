# Informe de refactorizacion tecnica — mrtooliaa-site

**Proyecto:** `mrtooliaa-site`  
**Fecha original del diagnostico:** 2026-04-26  
**Actualizado:** 2026-04-27  
**Estado actual:** refactor principal ejecutado

---

## 1. Proposito de este documento

Este informe nacio como una evaluacion dura de la version previa del sitio, cuando las landings vivian como HTML monolitico y el mantenimiento ya se estaba encareciendo.

Hoy cumple dos funciones:

1. dejar registro del problema que existia
2. marcar que parte del plan ya fue ejecutada y que parte sigue pendiente

No debe leerse como descripcion del estado actual del repo sin esta nota de contexto.

---

## 2. Diagnostico original

La version anterior del proyecto tenia estos problemas principales:

- HTML monolitico en archivos enormes
- contenido y metadata acoplados al markup
- CTA y datos comerciales repetidos a mano
- estilos compartidos sin gobernar realmente el sitio
- documentacion y material de handoff mezclados con codigo productivo
- mantenimiento critico aun demasiado manual

La recomendacion central fue:

- migrar a Astro
- centralizar contenido
- crear layouts y componentes compartidos
- automatizar validaciones
- limpiar el repo

---

## 3. Estado de ejecucion del plan

### Fase 0 — Preparacion

**Estado:** Hecha en lo esencial

- se confirmo el inventario principal de contenido
- se definio el material historico a archivar

### Fase 1 — Higiene estructural

**Estado:** Mayormente hecha

- documentacion tecnica movida a `docs/`
- material historico movido a `archive/`
- handoff de design system separado del flujo productivo

### Fase 2 — Extraccion de contenido

**Estado:** Hecha

Contenido movido a:

- [src/data/site.ts](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/data/site.ts)
- [src/data/mrtooliaa.ts](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/data/mrtooliaa.ts)
- [src/data/mediturno.ts](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/data/mediturno.ts)
- [src/data/ferretquote.ts](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/data/ferretquote.ts)

### Fase 3 — Consolidacion del sistema visual compartido

**Estado:** Parcialmente hecha

- existe una base compartida real
- hay layout y componentes reutilizables
- aun puede afinarse la frontera entre Tailwind, `src/input.css` y `src/styles/global.css`

### Fase 4 — Migracion a componentes y layouts

**Estado:** Hecha

Implementado con:

- [src/layouts/BaseLayout.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/layouts/BaseLayout.astro)
- [src/components/layout/Navbar.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/components/layout/Navbar.astro)
- [src/components/layout/Footer.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/components/layout/Footer.astro)
- [src/components/seo/SEOHead.astro](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/components/seo/SEOHead.astro)
- paginas Astro en `src/pages/`

### Fase 5 — Automatizacion de validaciones

**Estado:** Hecha

Implementado con:

- [scripts/verify-csp-hashes.mjs](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/scripts/verify-csp-hashes.mjs)
- [scripts/verify-links.mjs](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/scripts/verify-links.mjs)
- scripts `verify:*` en [package.json](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/package.json)

### Fase 6 — Limpieza final

**Estado:** Parcial

Pendientes razonables:

- revisar basura oculta como `.DS_Store`
- afinar documentacion cuando cambie la arquitectura
- decidir si hace falta conservar todo el material de `docs/design-system/`

---

## 4. Lo que cambio de verdad

### Antes

- HTML grande y repetido
- cambios transversales manuales
- metadata dispersa
- deploy descrito como sitio HTML plano

### Ahora

- paginas modulares en Astro
- layout compartido
- metadata centralizada
- datos por producto
- verificaciones automatizadas
- salida estatica valida en `dist/`

---

## 5. Deuda restante real

El refactor fuerte ya paso. Lo que queda ahora no es una crisis estructural, sino una segunda ronda de calidad.

### Pendiente 1 — Frontera entre estilos

Todavia conviene aclarar mejor que vive en:

- `tailwind.config.js`
- `src/input.css`
- `src/styles/global.css`

### Pendiente 2 — Documentacion viva

La documentacion ya mostro que puede quedarse atras si no se actualiza junto con el codigo. Eso requiere disciplina, no otra migracion.

### Pendiente 3 — Limpieza de repo

Todavia hay material historico util, pero conviene decidir hasta que punto sigue aportando dentro del repo principal.

---

## 6. Veredicto actualizado

La evaluacion dura original era correcta para el estado anterior del proyecto.  
El cambio importante es que la parte mas pesada del plan ya fue ejecutada.

Hoy el proyecto ya no esta en la etapa de "hay que rescatar la arquitectura".  
Hoy esta en la etapa de "hay que cuidar la consistencia y no volver a caer en deriva documental o duplicacion innecesaria".

---

## 7. Recomendacion actual

No hace falta otro gran refactor.

Lo correcto ahora es:

1. mantener el flujo `npm run verify`
2. mantener README e informes alineados con la realidad del repo
3. hacer pequeños ajustes de limpieza y estilo cuando aporten claridad real

Ese es el punto donde un refactor deja de ser una reaccion al dolor y se convierte en mantenimiento sano.
