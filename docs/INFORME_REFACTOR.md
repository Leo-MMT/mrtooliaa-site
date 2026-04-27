# Informe de refactorizacion tecnica — mrtooliaa-site

**Proyecto:** `mrtooliaa-site`  
**Fecha:** 2026-04-26  
**Objetivo del informe:** evaluar con criterio estricto la mantenibilidad, escalabilidad y calidad estructural del sitio, y definir un plan de refactor exacto por fases.

---

## 1. Resumen ejecutivo

El proyecto esta bien resuelto en su capa visible: comunica bien, vende bien, tiene identidad propia, una postura de seguridad seria y un despliegue simple. No parece un sitio improvisado.

El problema no esta en la cara publica del proyecto, sino en su arquitectura de mantenimiento. La implementacion actual esta optimizada para construir rapido y lanzar, pero ya no esta optimizada para iterar sin friccion.

La deuda principal no es de performance ni de seguridad. La deuda principal es de estructura:

- HTML demasiado monolitico.
- Contenido mezclado con presentacion.
- Repeticion manual de CTA, metadata y fragmentos de branding.
- Estilos compartidos a medio consolidar.
- Artefactos de diseno y material de handoff mezclados con el sitio productivo.
- Mecanismos criticos de mantenimiento que aun dependen de pasos manuales.

### Veredicto corto

El proyecto se ve mas maduro de lo que es internamente.  
Por fuera convence.  
Por dentro ya empezo a cobrar intereses.

---

## 2. Alcance evaluado

Se revisaron principalmente estos archivos y areas:

- [index.html](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/index.html)
- [mediturno/index.html](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/mediturno/index.html)
- [ferretquote/index.html](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/ferretquote/index.html)
- [src/input.css](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/input.css)
- [tailwind.config.js](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/tailwind.config.js)
- [assets/js/main.js](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/assets/js/main.js)
- [_headers](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/_headers)
- [_redirects](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/_redirects)
- [README.md](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/README.md)
- [INFORME_SEGURIDAD.md](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/INFORME_SEGURIDAD.md)
- `mr-tooliaa-design-system/`
- `MR ToolIAA Design System-handoff.zip`

---

## 3. Lo que esta bien y debe conservarse

Antes de entrar duro al refactor, hay que dejar claro que no todo pide cambio.

### 3.1 Direccion visual y comercial

La propuesta visual tiene personalidad, se siente intencional y no parece una plantilla generica. Cada landing empuja una oferta concreta y la narrativa comercial es clara.

Esto se conserva:

- Separacion por landings segun producto.
- Mensaje comercial enfocado por audiencia.
- Branding general de MR ToolIAA.
- Estilo visual principal de cada landing.

### 3.2 Seguridad y hardening

La configuracion de seguridad actual esta por encima de la media para un sitio estatico y no debe simplificarse por comodidad.

Esto se conserva:

- CSP con hashes en [_headers](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/_headers)
- HSTS, COOP, CORP
- Fuentes self-hosted
- `rel="noopener noreferrer"` en enlaces externos
- Politica de cache actual

### 3.3 Eleccion tecnologica base

El problema del proyecto no es que sea estatico. De hecho, eso es una ventaja.

Esto se conserva:

- Sitio estatico
- Tailwind como capa utilitaria
- Build simple y deploy en Cloudflare Pages
- JS minimo en cliente

### 3.4 Complejidad de runtime

No hay motivo para introducir React u otra capa pesada solo para resolver problemas de composicion. El problema actual es de arquitectura de contenido, no de interactividad.

---

## 4. Hallazgos criticos

## 4.1 `P1` HTML monolitico y fragil de mantener

Los tres HTML principales ya son demasiado grandes para seguir siendo mantenidos a mano sin costo creciente:

- `index.html`: 1005 lineas
- `mediturno/index.html`: 695 lineas
- `ferretquote/index.html`: 1243 lineas

### Por que es un problema

- Cualquier cambio transversal obliga a tocar varios archivos manualmente.
- Navbar, footer, CTAs, pricing, mensajes de WhatsApp y metadata se corrigen por repeticion.
- El riesgo de inconsistencias entre paginas ya es alto.
- La edicion deja de ser semantica y se vuelve mecanica.

### Consecuencia real

Hoy cambiar una decision de negocio pequena no es un cambio puntual. Es una ronda de inspeccion manual.

### Recomendacion

Migrar la composicion del sitio a componentes y layouts. Astro es la opcion natural para este repo por su modelo estatico, su encaje con Tailwind y su capacidad para separar contenido, estructura y reutilizacion sin meter complejidad innecesaria.

---

## 4.2 `P1` Contenido, estructura y metadata estan acoplados

Precios, features, mensajes de WhatsApp, copy comercial, datos para OpenGraph y JSON-LD viven incrustados directamente en cada HTML.

Ejemplos visibles:

- [mediturno/index.html](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/mediturno/index.html:72)
- [ferretquote/index.html](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/ferretquote/index.html:40)
- [index.html](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/index.html:164)

### Por que es un problema

- Cambiar un precio implica revisar UI, CTA y structured data por separado.
- Se favorece la divergencia entre lo que se muestra y lo que se publica para SEO.
- Multiplica el costo de edicion de contenido comercial.

### Recomendacion

Crear una fuente unica por producto para:

- nombre
- descripcion
- precios
- CTAs
- logos
- metadata SEO
- JSON-LD
- beneficios
- preguntas frecuentes

Idealmente en `src/data/` si se migra a Astro.

---

## 4.3 `P1` El sistema de estilos compartidos existe, pero no gobierna el proyecto

En [src/input.css](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/input.css:31) ya hay tokens, variables, helpers tipograficos y utilidades comunes. Sin embargo, las paginas siguen declarando estilos importantes inline en bloques `<style>`.

Casos claros:

- [index.html](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/index.html:33)
- [mediturno/index.html](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/mediturno/index.html:33)
- [ferretquote/index.html](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/ferretquote/index.html:83)

### Por que es un problema

- La fuente de verdad del sistema visual queda difusa.
- Se repiten patrones que ya deberian vivir en una capa compartida.
- El mantenimiento visual se fragmenta.

### Recomendacion

Definir una politica clara:

- Todo patron reutilizable va a `src/input.css` o a componentes.
- Todo estilo exclusivo y no repetible puede vivir localmente.
- Todo gradiente, shadow, badge, card state, CTA state y utility frecuente sale de los HTML.

---

## 4.4 `P1` Reutilizacion baja para piezas de alto cambio

La implementacion actual repite manualmente piezas que cambian con frecuencia:

- CTA de WhatsApp
- enlaces de conversion
- textos de contacto
- bloques de pricing
- footers
- metadata basica

Ejemplo: el mismo telefono y multiples variantes del enlace a `wa.me` aparecen repartidos por muchos puntos del sitio.

### Por que es un problema

- Cambiar un numero, copy o tracking no es atomico.
- La repeticion manual es una fuente clasica de errores silenciosos.
- El costo de prueba despues de cada ajuste sube innecesariamente.

### Recomendacion

Modelar componentes y helpers como:

- `ProductCTA`
- `SiteFooter`
- `ProductHero`
- `PricingTable`
- `SEOHead`

Y parametrizarlos por producto.

---

## 4.5 `P1` El repo mezcla codigo vivo con material de proceso

El sitio productivo comparte repo raiz con:

- `mr-tooliaa-design-system/`
- `MR ToolIAA Design System-handoff.zip`
- documentacion operativa puntual

El repo pesa aproximadamente `29M`, donde hay varios megas de material que no forma parte del runtime productivo.

### Por que es un problema

- Aumenta el ruido cognitivo del proyecto.
- Vuelve mas dificil distinguir que forma parte del producto y que es archivo historico.
- Hace mas torpe el onboarding tecnico.
- Favorece que material de handoff termine tratado como fuente operativa.

### Recomendacion

Separar claramente:

- `site/` o raiz productiva
- `docs/`
- `archive/` o mover el handoff fuera del repo

Si el design system va a quedarse, debe quedarse como artefacto vivo y con rol claro. Si no, debe salir del camino.

---

## 4.6 `P2` La documentacion ya muestra deriva respecto al codigo real

[README.md](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/README.md:17) todavia menciona Google Fonts con `preconnect`, pero el proyecto ya usa fuentes self-hosted.  
[README.md](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/README.md:110) habla de una CSP con whitelist a Google Fonts que ya no refleja el estado real.

### Por que es un problema

- Un nuevo colaborador aprende una arquitectura que ya no existe.
- Las decisiones correctas quedan mal documentadas.
- Se erosiona la confianza en la documentacion tecnica.

### Recomendacion

Actualizar el README al estado real del proyecto y dividir la documentacion por temas:

- desarrollo local
- deploy
- seguridad
- arquitectura
- mantenimiento

---

## 4.7 `P2` La CSP esta bien, pero el mantenimiento sigue siendo manual

El enfoque actual de hashes en `_headers` es correcto desde seguridad. El problema no es tecnico, sino operativo: depende de que alguien recuerde regenerar hashes cada vez que se toque un bloque JSON-LD.

El propio [INFORME_SEGURIDAD.md](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/INFORME_SEGURIDAD.md:71) ya reconoce ese punto.

### Por que es un problema

- El fallo no rompe visualmente la pagina.
- El error puede pasar a produccion sin que nadie lo note.
- El structured data puede quedar invalidado en silencio.

### Recomendacion

Automatizar:

- generacion de hashes
- validacion de coincidencia con `_headers`
- chequeo previo a deploy

Con un script dedicado y un comando `npm run verify:security` o similar.

---

## 4.8 `P3` Tailwind y CSS custom estan mezclados sin una frontera lo bastante clara

En [tailwind.config.js](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/tailwind.config.js) hay tokens, sombras, colores y una `safelist`. En [src/input.css](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/src/input.css) hay variables CSS, componentes y utilidades semanticamente similares.

### Por que es un problema

- El sistema visual no tiene una unica gramatica.
- Un colaborador no sabe rapido si agregar algo en Tailwind, en `@layer`, o inline.
- Se empieza a duplicar conocimiento en dos sitios.

### Recomendacion

Definir reglas:

- Tokens base en Tailwind o en variables CSS, pero con roles bien delimitados.
- Componentes reutilizables en `@layer components`.
- Utilidades compartidas en `@layer utilities`.
- Estilos de pagina solo cuando no haya proposito real de reutilizacion.

---

## 5. Lo que NO refactorizaria ahora

No todo lo mejorable merece entrar en la primera fase.

### 5.1 `assets/js/main.js`

El JS actual en [assets/js/main.js](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/assets/js/main.js) es pequeno, claro y de bajo riesgo. No justifica una reescritura temprana.

Se queda como esta por ahora.

### 5.2 SVG inline del logo y elementos decorativos complejos

Hay SVG largos dentro del HTML, especialmente en la home. Eso ensucia la lectura, pero no es el principal problema estructural hoy.

Se puede postergar su encapsulacion hasta que exista una capa de componentes.

### 5.3 Pipeline actual de build

El build de Tailwind funciona y es suficientemente simple para la escala actual. No es el cuello de botella principal.

No conviene rehacer pipeline antes de rehacer composicion.

### 5.4 Estrategia de landings separadas

No hay que fusionar las tres landings ni convertir esto en una unica pagina enorme. La separacion por producto tiene sentido comercial y SEO.

---

## 6. Recomendaciones de arquitectura objetivo

## 6.1 Stack objetivo recomendado

- Astro
- Tailwind
- sitio estatico
- datos por producto en archivos separados
- componentes compartidos
- layouts para head, navbar y footer

## 6.2 Estructura objetivo sugerida

```text
mrtooliaa-site/
├── public/
│   ├── assets/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── _headers
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── marketing/
│   │   ├── pricing/
│   │   ├── seo/
│   │   └── shared/
│   ├── data/
│   │   ├── site.ts
│   │   ├── mrtooliaa.ts
│   │   ├── mediturno.ts
│   │   └── ferretquote.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── mediturno.astro
│   │   └── ferretquote.astro
│   └── styles/
│       └── global.css
├── docs/
│   ├── INFORME_SEGURIDAD.md
│   └── INFORME_REFACTOR.md
├── scripts/
│   └── verify-csp-hashes.mjs
├── package.json
└── README.md
```

---

## 7. Plan de refactor exacto por fases

Este plan esta ordenado por retorno sobre esfuerzo y por reduccion de riesgo.

## Fase 0 — Congelacion operativa breve

### Objetivo

Preparar el terreno antes de mover arquitectura.

### Tareas

1. Congelar cambios visuales mayores durante el refactor.
2. Hacer inventario de:
   - CTAs
   - telefonos
   - enlaces `wa.me`
   - precios
   - bloques JSON-LD
   - metadata SEO
3. Definir la fuente oficial de branding y logos.
4. Decidir que material de `mr-tooliaa-design-system/` sigue vivo y que material pasa a archivo.

### Entregables

- checklist de contenido fuente
- criterio de ownership del design system

### Riesgo que elimina

Evita migrar basura duplicada a la nueva arquitectura.

---

## Fase 1 — Higiene estructural sin cambiar la UI

### Objetivo

Reducir ruido y preparar el repo para el refactor sin tocar el look and feel.

### Tareas

1. Limpiar estructura del repo:
   - mover informes a `docs/`
   - mover o archivar `MR ToolIAA Design System-handoff.zip`
   - separar claramente material vivo de material historico
2. Actualizar [README.md](/Users/lmmt/Desktop/Reguero/Proyecto/mrtooliaa-site/README.md) al estado real.
3. Documentar decisiones activas:
   - fuentes self-hosted
   - CSP con hashes
   - politica de componentes
4. Normalizar nombres de assets duplicados si no son necesarios.

### Entregables

- repo menos ruidoso
- documentacion alineada
- ownership mas claro

### Riesgo que elimina

Reduce confusiones de mantenimiento antes de mover codigo productivo.

---

## Fase 2 — Extraccion de contenido y configuracion

### Objetivo

Separar datos de markup sin cambiar aun de framework si no se desea hacerlo de inmediato.

### Tareas

1. Crear archivos de datos por producto.
2. Mover a estos archivos:
   - nombre de producto
   - subtitulo
   - precio
   - CTA principal
   - CTA secundarios
   - preguntas frecuentes
   - beneficios
   - claims
   - metadata SEO
   - JSON-LD
3. Crear una capa de configuracion global para:
   - telefono principal
   - enlaces base de contacto
   - brand assets
   - datos de empresa

### Entregables

- una unica fuente de verdad por producto

### Riesgo que elimina

Evita inconsistencias entre UI, SEO y conversion.

---

## Fase 3 — Consolidacion del sistema visual compartido

### Objetivo

Hacer que el design system realmente gobierne el sitio.

### Tareas

1. Mover patrones reutilizables desde los `<style>` inline a CSS compartido.
2. Consolidar:
   - gradientes
   - sombras
   - hover states
   - badges
   - FAQ styles
   - pricing highlight
   - CTA states
3. Definir reglas de estilo:
   - que va en Tailwind
   - que va en `@layer components`
   - que va en `@layer utilities`
   - que puede quedarse local
4. Reducir la `safelist` a lo estrictamente necesario.

### Entregables

- menor CSS repetido
- sistema visual mas coherente

### Riesgo que elimina

Evita que cada landing evolucione visualmente por su cuenta.

---

## Fase 4 — Migracion a componentes y layouts

### Objetivo

Eliminar el HTML monolitico y pasar a una arquitectura reusable.

### Tareas

1. Introducir Astro.
2. Crear `BaseLayout.astro`.
3. Crear componentes compartidos:
   - `SEOHead`
   - `Navbar`
   - `Footer`
   - `WhatsAppCTA`
   - `PricingCard`
   - `FAQList`
   - `StatsStrip`
4. Crear componentes por dominio:
   - home corporativa
   - producto clinico
   - producto retail
5. Reescribir:
   - `index.html` -> `src/pages/index.astro`
   - `mediturno/index.html` -> `src/pages/mediturno.astro`
   - `ferretquote/index.html` -> `src/pages/ferretquote.astro`

### Entregables

- markup modular
- cambios transversales realmente reutilizables

### Riesgo que elimina

Convierte cambios repetitivos en cambios atomicos.

---

## Fase 5 — Automatizacion de validaciones

### Objetivo

Sacar del mantenimiento humano los pasos faciles de olvidar.

### Tareas

1. Crear script para validar hashes CSP contra JSON-LD.
2. Crear script para verificar links criticos:
   - canonicals
   - `wa.me`
   - logos
3. Crear comandos de verificacion:
   - `npm run build`
   - `npm run verify:csp`
   - `npm run verify:links`
   - `npm run verify`
4. Dejar checklist de deploy minima y automatizable.

### Entregables

- validaciones repetibles
- menos dependencia de memoria humana

### Riesgo que elimina

Reduce errores silenciosos en produccion.

---

## Fase 6 — Refinamiento y limpieza final

### Objetivo

Cerrar deuda residual despues de la migracion.

### Tareas

1. Eliminar archivos obsoletos.
2. Revisar assets duplicados.
3. Consolidar naming.
4. Revisar si `mr-tooliaa-design-system/` sigue siendo necesario dentro del repo.
5. Medir Lighthouse y corregir regresiones menores.

### Entregables

- repo mas limpio
- menos material muerto
- menos ambiguedad para futuros cambios

---

## 8. Orden exacto de ejecucion recomendado

Si esto se va a ejecutar de forma pragmatica, el orden correcto es este:

1. Fase 0
2. Fase 1
3. Fase 2
4. Fase 3
5. Fase 4
6. Fase 5
7. Fase 6

### Orden que NO recomiendo

No recomiendo:

- rehacer visuales antes de extraer datos
- cambiar a Astro sin antes ordenar contenido
- endurecer mas seguridad sin automatizar mantenimiento
- tocar pipeline antes de modular el sitio

---

## 9. Prioridad real de trabajo

Si hubiera que recortar, estas son las prioridades reales:

### Imprescindible

- modularizar contenido
- eliminar HTML monolitico
- centralizar CTA y metadata
- consolidar estilos compartidos

### Muy recomendable

- limpiar repo
- corregir documentacion
- automatizar verificacion de CSP

### Puede esperar

- encapsular SVG grandes
- rehacer animaciones menores
- optimizaciones finas del build

---

## 10. Resultado esperado despues del refactor

Si el plan se ejecuta bien, el proyecto deberia quedar asi:

- una sola fuente de verdad por producto
- cambios transversales en un solo lugar
- menos repeticion manual
- documentacion creible
- seguridad igual de fuerte
- visual intacta
- menor costo por iteracion comercial

En otras palabras: mantener la calidad visible actual, pero con una base interna que deje de pelear contra el crecimiento.

---

## 11. Conclusion final

Este proyecto no necesita un rediseño.  
Necesita disciplina estructural.

La buena noticia es que la parte dificil ya existe:

- hay identidad
- hay mensaje
- hay criterio visual
- hay enfoque comercial
- hay seguridad

La parte que falta es convertir todo eso en una base de trabajo que no dependa de editar HTML largo a mano y recordar pasos operativos de memoria.

La recomendacion final es clara:

1. No rehacer desde cero.
2. No meter complejidad innecesaria.
3. Refactorizar por fases, manteniendo la UI actual.
4. Llevar el proyecto a una arquitectura estatica basada en componentes y datos.

Ese cambio es el que convierte este sitio de una buena entrega puntual en un activo serio que se puede iterar sin desgaste.
