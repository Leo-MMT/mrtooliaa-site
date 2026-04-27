// =============================================================
// Ferret-Quote Bot — Product landing data
// =============================================================
import { site, waLink } from './site';

export const ferretquote = {
  name: 'Ferret-Quote Bot',
  slug: 'ferretquote',
  tagline: 'Tu ferretería cotiza en segundos por WhatsApp.',
  seo: {
    title: 'Ferret-Quote Bot — Tu ferretería cotiza en segundos por WhatsApp',
    description: 'Bot de cotización automática por WhatsApp para ferreterías en República Dominicana. Responde precios al instante, genera PDFs profesionales.',
    keywords: 'cotización ferretería whatsapp, bot ferretería, ferret-quote, automatización ferretería RD',
    canonical: `${site.domain}/ferretquote/`,
    themeColor: '#f97316',
    ogImage: `${site.domain}/assets/logo-ferretquote-icon.png`,
    ogTitle: 'Ferret-Quote Bot — Cotizaciones automáticas por WhatsApp',
    ogDescription: 'Tu ferretería cotiza en segundos. El bot responde con PDF profesional al instante.',
  },
  logos: { icon: '/assets/logo-ferretquote-icon.png' },
  wa: {
    interest: 'Hola, me interesa Ferret-Quote Bot para mi ferretería',
    question: 'Hola, tengo una pregunta sobre Ferret-Quote Bot',
    activate: 'Hola, quiero activar Ferret-Quote Bot en mi ferretería',
  },
  jsonLd: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Ferret-Quote Bot', applicationCategory: 'BusinessApplication', operatingSystem: 'WhatsApp',
    description: 'Agente IA de cotización automática por WhatsApp para ferreterías en República Dominicana.',
    offers: [
      { '@type': 'Offer', name: 'Plan Básico', price: '8000', priceCurrency: 'DOP', billingIncrement: 'P1M', description: 'Hasta 500 productos, 1 número WhatsApp' },
      { '@type': 'Offer', name: 'Plan Pro', price: '15000', priceCurrency: 'DOP', billingIncrement: 'P1M', description: 'Productos ilimitados, múltiples números, reportes' },
    ],
    provider: { '@type': 'Organization', name: 'MR ToolIAA', addressCountry: 'DO' },
    areaServed: { '@type': 'Country', name: 'Dominican Republic' },
    featureList: ['Cotización instantánea por WhatsApp','Generación de PDF profesional con logo','Sincronización con inventario Excel o POS','Alertas al dueño por cada cotización','Disponibilidad 24/7'],
  },
  stats: [
    { value: '24/7', label: 'Disponible' },
    { value: '< 5 seg', label: 'Tiempo de respuesta' },
    { value: 'PDF', label: 'Cotización profesional' },
    { value: 'RD$', label: 'Precios locales' },
  ],
  problems: [
    { icon: '⏱️', title: '20 minutos para responder un precio', description: 'El cliente pregunta por WhatsApp y tardas 20 minutos en responder porque hay que buscar en la lista.', badge: '🔴 El cliente ya perdió la paciencia', badgeColor: 'red' },
    { icon: '🏃', title: 'Cuando respondes, ya compró en la competencia', description: 'El cliente no espera. Mientras buscas el precio, tu competencia ya respondió y cerró la venta.', badge: '🟠 Venta perdida cada vez', badgeColor: 'orange' },
    { icon: '📉', title: 'Tu empleado pierde horas buscando precios', description: 'Tu vendedor pasa el día respondiendo WhatsApp en vez de atender en el mostrador.', badge: '🟡 Horas desperdiciadas diariamente', badgeColor: 'yellow' },
  ],
  bridgeCallout: {
    text: 'Una ferretería dominicana promedio pierde',
    accent: '3 a 8 ventas diarias',
    suffix: 'solo por tardanza en cotizar.',
  },
  features: [
    { icon: '💬', title: 'Cotización instantánea por WhatsApp', description: 'El cliente pregunta el precio — el bot responde en menos de 5 segundos.', badge: '⚡ Instantáneo', badgeColor: 'green' },
    { icon: '📋', title: 'PDF profesional con tu marca', description: 'Cotizaciones con tu logo, listado de productos, precios y totales en RD$ e ITBIS.', badge: '📄 PDF', badgeColor: 'blue' },
    { icon: '📦', title: 'Inventario siempre sincronizado', description: 'Se conecta a tu Excel, sistema POS, o base de datos. Cero inconsistencias.', badge: '🔄 Sincronizado', badgeColor: 'purple' },
    { icon: '🔔', title: 'Alertas al dueño por cada cotización', description: 'Notificación con nombre del cliente, productos y monto para hacer follow-up.', badge: '🔔 Alertas', badgeColor: 'orange' },
    { icon: '🕐', title: 'Disponible 24/7 — incluyendo feriados', description: 'Cotiza a las 11 PM de un Semana Santa. Tu competencia está cerrada.', badge: '🌙 24/7', badgeColor: 'gray' },
  ],
  process: [
    { step: 1, icon: '📱', title: 'Tu cliente escribe al WhatsApp de tu ferretería', description: 'El mismo número que ya tienes publicado.' },
    { step: 2, icon: '💬', title: 'Pide precio en lenguaje natural', description: '"¿Cuánto está el cemento gris?", "Dame precio de varilla 1/2 y bloque 6"' },
    { step: 3, icon: '⚙️', title: 'El bot busca en tu inventario y genera el PDF', description: 'En segundos, consulta tu lista, calcula totales e ITBIS, genera la cotización.' },
    { step: 4, icon: '🎉', title: 'El cliente recibe la cotización — tú recibes la alerta', description: 'El cliente tiene su PDF profesional. Tú recibes la notificación.' },
  ],
  pricing: {
    setup: { price: 5000, features: ['Carga de inventario desde Excel','Configuración del número WhatsApp','Diseño de plantilla PDF con tu logo','Capacitación y entrega funcionando','Soporte de lanzamiento 7 días'] },
    plans: [
      { name: 'Plan Básico', price: 8000, period: '/mes', description: 'Para ferreterías pequeñas', features: ['Hasta 500 productos','1 número WhatsApp','Cotizaciones PDF ilimitadas','Alertas al dueño','Soporte WhatsApp'], excluded: ['Múltiples números','Reportes de ventas'], variant: 'default' as const },
      { name: 'Plan Pro', price: 15000, period: '/mes', popular: true, description: 'Para ferreterías medianas y grandes', features: ['Productos ilimitados','Múltiples números WhatsApp','Cotizaciones PDF ilimitadas','Alertas al dueño y gerentes','Reportes semanales','Integración con POS','Soporte prioritario 7 días/semana'], variant: 'popular' as const },
    ],
    freeWeek: 'Empezar ahora — primera semana gratis',
    note: '* Todos los precios en pesos dominicanos (RD$) · ITBIS incluido · Sin cargos ocultos',
  },
  faq: [
    { q: '¿Necesito cambiar mi número de WhatsApp?', a: 'No. Usamos tu número actual de WhatsApp Business o te asignamos uno nuevo dedicado.' },
    { q: '¿Cómo cargo mis productos e inventario?', a: 'Simple: nos envías tu lista en Excel y nosotros la configuramos. La carga está incluida en el setup de RD$5,000.' },
    { q: '¿Qué pasa si el cliente pide algo que no tengo?', a: 'El bot responde amablemente que no está disponible y te envía una alerta con el producto solicitado.' },
    { q: '¿Puedo cambiar los precios cuando quiera?', a: 'Sí, tú tienes el control total. En Plan Pro, la sincronización con tu POS es automática y en tiempo real.' },
    { q: '¿Funciona con mi sistema de inventario actual?', a: 'Sí. Nos integramos con Excel, Google Sheets, sistemas POS, bases de datos SQL, y APIs de facturación.' },
  ],
  trustBadges: [
    { icon: '🔒', text: 'Sin contrato largo' },
    { icon: '🎁', text: '1 semana gratis' },
    { icon: '⚡', text: 'Activación en 48h' },
    { icon: '🇩🇴', text: 'Soporte en español RD' },
  ],
} as const;
