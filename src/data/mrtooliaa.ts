// =============================================================
// MR ToolIAA — Corporate landing data
// =============================================================

import { site, waLink } from './site';

export const mrtooliaa = {
  seo: {
    title: 'MR ToolIAA — Agentes IA como Servicio para tu negocio',
    description: 'Automatizamos los procesos repetitivos de tu empresa con agentes de inteligencia artificial. Implementación en días, soporte en español, enfocados en República Dominicana y LATAM.',
    keywords: 'agentes IA, automatización empresarial, inteligencia artificial RD, WhatsApp bot, automatización dominicana, MR ToolIAA',
    canonical: `${site.domain}/`,
    themeColor: '#0d1a2d',
    ogImage: `${site.domain}/assets/logo-mrtooliaa.png`,
    ogTitle: 'MR ToolIAA — Agentes IA como Servicio',
    ogDescription: 'Automatizamos lo repetitivo para que te enfoques en crecer. Agentes IA especializados para clínicas, ferreterías y cualquier negocio en RD.',
    twitterTitle: 'MR ToolIAA — Agentes IA como Servicio',
    twitterDescription: 'Automatizamos lo repetitivo para que te enfoques en crecer.',
  },

  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MR ToolIAA',
    description: 'Agentes IA como Servicio para empresas en República Dominicana y LATAM',
    url: site.domain,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-809-956-7956',
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
    areaServed: ['DO', 'LATAM'],
    knowsAbout: ['Inteligencia Artificial', 'Automatización', 'WhatsApp Bots', 'Agentes IA'],
  },

  hero: {
    title: { line1: 'Tu agente IA', accent: 'trabaja 24/7', line3: 'sin descanso' },
    subtitle: 'Automatiza los procesos repetitivos de tu clínica o ferretería con agentes IA especializados en WhatsApp. Implementación en días. Sin café. Sin excusas.',
    ctaPrimary: { text: 'Ver soluciones →', href: '#products' },
    ctaSecondary: { text: 'Hablar con un experto', href: waLink() },
    stats: [
      { value: '24/7', label: 'Disponibilidad' },
      { value: 'Días', label: 'Tiempo de impl.', accent: true },
      { value: '100%', label: 'en Español' },
    ],
  },

  problems: [
    {
      icon: '⏰',
      title: 'Tu equipo pierde horas',
      description: 'Responder mensajes, agendar citas, buscar precios, generar cotizaciones — tareas manuales que se repiten cientos de veces al mes.',
      badge: '❌ Problema actual',
      variant: 'red' as const,
    },
    {
      icon: 'bot',
      title: 'Nuestros agentes IA',
      description: 'Ejecutan esas tareas automáticamente, 24 horas al día, 7 días a la semana, sin errores, sin descanso, sin excusas.',
      badge: '→ La solución',
      variant: 'navy' as const,
    },
    {
      icon: 'target',
      title: 'Tú te enfocas en crecer',
      description: 'Tu equipo se libera de lo repetitivo y puede invertir su tiempo en ventas, servicio al cliente y decisiones estratégicas.',
      badge: '✅ Resultado',
      variant: 'green' as const,
    },
  ],

  roiCallout: {
    value: '20',
    unit: 'horas/semana',
    description: 'Recupera tiempo de tu equipo. Sin errores, sin descanso, sin excusas.',
    cta: { text: 'Calcular mi ROI →', href: waLink() },
  },

  products: [
    {
      name: 'MediTurno IA',
      slug: 'mediturno',
      audience: 'Para Clínicas',
      audienceColor: 'blue',
      description: 'Agendamiento inteligente para clínicas vía WhatsApp. Sin app, sin web — solo WhatsApp. Tu recepcionista virtual que trabaja 24/7.',
      logo: '/assets/logo-mediturno-icon.png',
      features: [
        'Agenda y confirma citas automáticamente',
        'Reduce no-shows con recordatorios',
        'Múltiples doctores y especialidades',
        'Integración con tu calendario actual',
      ],
      cta: { text: 'Conocer MediTurno →', href: '/mediturno' },
      variant: 'active' as const,
    },
    {
      name: 'Ferret-Quote Bot',
      slug: 'ferretquote',
      audience: 'Para Ferreterías',
      audienceColor: 'orange',
      description: 'Cotizaciones instantáneas para ferreterías por WhatsApp. Tu cliente pregunta el precio, el bot cotiza en segundos con PDF profesional.',
      logo: '/assets/logo-ferretquote-icon.png',
      features: [
        'Cotiza desde tu inventario en tiempo real',
        'Genera PDF con logo y precios',
        'Alertas al dueño por cada cotización',
        'Sincroniza con Excel o tu sistema',
      ],
      cta: { text: 'Conocer Ferret-Quote →', href: '/ferretquote' },
      variant: 'default' as const,
    },
    {
      name: 'Agente IA Custom',
      slug: 'custom',
      audience: 'A la medida',
      audienceColor: 'white',
      description: '¿Tu negocio tiene procesos repetitivos únicos? Diseñamos e implementamos un agente IA completamente personalizado para ti.',
      logo: null,
      features: [
        'Análisis de tus procesos actuales',
        'Diseño a medida de tu operación',
        'Integración con tus sistemas',
        'Soporte continuo en español',
      ],
      cta: { text: 'Solicitar consulta →', href: waLink() },
      variant: 'dark' as const,
    },
  ],

  process: [
    {
      step: 1,
      icon: '💬',
      title: 'Nos cuentas tu proceso',
      description: 'Una sesión de 30 minutos donde nos explicas qué tareas quieres automatizar y cómo funciona tu negocio actualmente.',
      color: 'brand',
    },
    {
      step: 2,
      icon: '⚙️',
      title: 'Diseñamos tu agente IA',
      description: 'Nuestro equipo configura y personaliza el agente para tu industria, tu inventario, tu horario y tus reglas de negocio.',
      color: 'navy',
    },
    {
      step: 3,
      icon: '🚀',
      title: 'Lo desplegamos en tu negocio',
      description: 'Conectamos el agente a tu WhatsApp o sistema existente. Tu equipo recibe capacitación. Empiezan las automatizaciones.',
      color: 'green',
    },
  ],

  timeline: [
    { day: 'Día 1', title: 'Sesión de diagnóstico', subtitle: 'Entendemos tu proceso' },
    { day: 'Días 2–4', title: 'Configuración', subtitle: 'Personalizamos el agente' },
    { day: 'Día 5', title: 'Pruebas', subtitle: 'Validamos con tu equipo' },
    { day: 'Día 7', title: '🚀 En producción', subtitle: 'El agente ya trabaja', accent: true },
  ],

  differentiators: [
    { icon: '🏗️', title: 'Arsenal completo de agentes', description: 'Más de 13 agentes especializados trabajando juntos: investigación, marketing, operaciones, desarrollo y más.' },
    { icon: '📱', title: 'WhatsApp nativo', description: 'Tus clientes ya usan WhatsApp. Nuestros agentes viven donde tus clientes están — sin fricción, sin apps nuevas.' },
    { icon: '⚡', title: 'Implementación en días', description: 'Mientras otros tardan meses en desarrollar, nosotros desplegamos en 7 días. Tu negocio empieza a ahorrar tiempo esta semana.' },
    { icon: '🇩🇴', title: 'Enfocados en RD y LATAM', description: 'Entendemos el mercado dominicano: precios en RD$, horarios locales, terminología del sector, contexto cultural.' },
    { icon: '🗣️', title: 'Soporte en español', description: 'Sin barreras de idioma. Nuestro equipo habla tu idioma, entiende tu negocio y responde rápido cuando lo necesitas.' },
    { icon: '💰', title: 'ROI desde el primer mes', description: 'El costo del agente es menor que el salario que ahorra. La mayoría de clientes recuperan la inversión en menos de 30 días.', highlight: true },
  ],

  testimonials: [
    {
      quote: '"Antes atendíamos citas por teléfono y nuestras recepcionistas estaban saturadas. Ahora el 70% de las citas llegan por WhatsApp automáticamente. Nuestra ocupación subió 35%."',
      name: 'Dra. Marte',
      role: 'Clínica dental · Santo Domingo',
      initials: 'DM',
      color: 'navy',
    },
    {
      quote: '"Mis empleados perdían 3 horas al día buscando precios en el sistema. Con el bot, el cliente recibe su cotización en segundos. Ya cerramos ventas que antes se perdían por demora."',
      name: 'Rafael C.',
      role: 'Ferretería · Santiago',
      initials: 'RC',
      color: 'brand',
    },
    {
      quote: '"Lo que más me sorprendió fue la velocidad. En una semana ya teníamos el agente funcionando. El equipo de MR ToolIAA nos guió en todo y el soporte ha sido excelente."',
      name: 'Luis G.',
      role: 'Empresa de servicios · RD',
      initials: 'LG',
      color: 'green',
    },
  ],

  pricing: {
    setup: { price: 10000, currency: 'DOP', note: 'Setup único de RD$10,000 no incluido en el mensual' },
    plans: [
      {
        name: 'Starter',
        price: 15000,
        currency: 'DOP',
        period: 'por mes',
        features: [
          '1 agente IA especializado',
          '1 canal (WhatsApp)',
          'Hasta 500 interacciones/mes',
          'Dashboard básico',
          'Soporte por WhatsApp',
        ],
        cta: { text: 'Empezar →', href: waLink() },
        variant: 'default' as const,
      },
      {
        name: 'Pro',
        price: 35000,
        currency: 'DOP',
        period: 'por mes',
        popular: true,
        features: [
          'Múltiples agentes IA',
          'Todos los canales (WA + más)',
          'Interacciones ilimitadas',
          'Integraciones personalizadas',
          'Reportes avanzados',
          'Soporte prioritario',
        ],
        cta: { text: 'Empezar →', href: waLink() },
        variant: 'popular' as const,
      },
      {
        name: 'Enterprise',
        price: null,
        priceLabel: 'Cotización',
        currency: 'DOP',
        period: 'personalizada',
        features: [
          'Arsenal completo de agentes',
          'Desarrollos a medida',
          'SLA garantizado',
          'Gerente de cuenta dedicado',
          'Capacitación del equipo',
        ],
        cta: { text: 'Agendar demo →', href: waLink() },
        variant: 'dark' as const,
      },
    ],
  },

  ctaFinal: {
    title: { line1: 'Tu negocio merece', accent: 'más inteligente', prefix: 'trabajar' },
    subtitle: 'Únete a las empresas dominicanas que ya automatizan sus procesos con agentes IA. La consulta inicial es gratis y sin compromiso.',
    cta: { text: '💬 Hablar por WhatsApp ahora', href: waLink() },
    note: 'Sin ventas presionadas · Solo soluciones para tu negocio',
  },

  footer: {
    products: [
      { name: '🏥 MediTurno IA', href: '/mediturno' },
      { name: '🔩 Ferret-Quote Bot', href: '/ferretquote' },
      { name: '🤖 Agente Custom', href: '#' },
    ],
  },
} as const;
