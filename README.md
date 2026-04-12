# mrtooliaa-site

Sitio estático de MR ToolIAA — 3 landings consolidadas para deploy en Cloudflare Pages.

```
mrtooliaa.com/             → Landing empresa MR ToolIAA
mrtooliaa.com/mediturno    → Landing MediTurno IA
mrtooliaa.com/ferretquote  → Landing Ferret-Quote Bot
```

---

## Deploy en Cloudflare Pages

### 1. Conectar repo a Cloudflare Pages

1. Entra a [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages**
2. Click **Connect to Git** → autoriza GitHub → selecciona el repo `mrtooliaa-site`
3. Configuración de build:
   - **Framework preset:** None
   - **Build command:** *(dejar vacío — sitio estático puro)*
   - **Build output directory:** `/` *(raíz del repo)*
4. Click **Save and Deploy**

Cloudflare Pages despliega automáticamente en cada push a `main`.

---

### 2. Configurar dominio custom `mrtooliaa.com`

1. En Cloudflare Pages → tu proyecto → **Custom domains** → **Set up a custom domain**
2. Ingresa `mrtooliaa.com` → Click **Continue**
3. Cloudflare te mostrará los nameservers a configurar (ej: `ns1.cloudflare.com`, `ns2.cloudflare.com`)

---

### 3. Cambiar nameservers en Namecheap

1. Entra a [namecheap.com](https://namecheap.com) → **Domain List** → `mrtooliaa.com` → **Manage**
2. En **Nameservers**, selecciona **Custom DNS**
3. Ingresa los 2 nameservers que te dio Cloudflare (paso anterior)
4. Click **Save** ✓

La propagación toma entre 5 minutos y 48 horas (usualmente <30 min con Cloudflare).

---

### 4. SSL/HTTPS

Cloudflare genera el certificado SSL automáticamente una vez que los nameservers propagan. No requiere configuración manual.

Para forzar HTTPS: Cloudflare Dashboard → tu dominio → **SSL/TLS** → **Edge Certificates** → activar **Always Use HTTPS**.

---

## Estructura del repo

```
mrtooliaa-site/
├── index.html          ← Landing MR ToolIAA (raíz)
├── mediturno/
│   └── index.html      ← Landing MediTurno IA
├── ferretquote/
│   └── index.html      ← Landing Ferret-Quote Bot
├── assets/
│   ├── logo-mrtooliaa.png         ← Logo MR ToolIAA (color)
│   ├── logo-mrtooliaa-mono.png    ← Logo MR ToolIAA (B&W)
│   ├── logo-mediturno.png         ← Logo MediTurno (con texto)
│   ├── logo-mediturno-icon.png    ← Ícono MediTurno
│   └── logo-ferretquote-icon.png  ← Ícono Ferret-Quote
├── _headers            ← Headers HTTP (cache + seguridad)
└── README.md
```

## Verificación post-deploy

- [ ] `https://mrtooliaa.com` carga la landing empresa
- [ ] `https://mrtooliaa.com/mediturno` carga la landing MediTurno
- [ ] `https://mrtooliaa.com/ferretquote` carga la landing Ferret-Quote
- [ ] Links "← MR ToolIAA" en product pages vuelven a `/`
- [ ] Logos de producto cargan en las tarjetas (MediTurno, Ferret-Quote)
- [ ] Logo MR ToolIAA carga en navbar y footer
- [ ] HTTPS activo (candado verde en browser)
