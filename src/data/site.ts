// =============================================================
// MR ToolIAA — Global site configuration
// Single source of truth for contact info, branding, and shared data.
// =============================================================

export const site = {
  name: 'MR ToolIAA',
  tagline: 'Agentes IA como Servicio',
  description: 'Automatizamos los procesos repetitivos de tu empresa con agentes de inteligencia artificial.',
  phone: '+18099567956',
  phoneDisplay: '+1 (809) 956-7956',
  email: 'info@mrtooliaa.com',
  domain: 'https://mrtooliaa.com',
  locale: 'es_DO',
  country: 'DO',
  year: 2026,

  whatsapp: {
    base: 'https://wa.me/18099567956',
    defaultMessage: 'Hola, me interesa saber más sobre los agentes IA de MR ToolIAA',
  },

  logos: {
    main: '/assets/logo.webp',
    white: '/assets/logo-mrtooliaa-white.png',
    whiteSvg: '/assets/logo-mrtooliaa-white.svg',
    mono: '/assets/logo-mrtooliaa-mono.png',
  },

  fonts: {
    preload: '/assets/fonts/inter-latin.woff2',
  },

  css: '/assets/tailwind.css',

  company: {
    legal: 'MR ToolIAA',
    location: 'República Dominicana',
    model: 'Empresa 100% digital',
    serviceArea: ['DO', 'LATAM'],
    hours: 'Lunes a viernes 8am–7pm AST',
  },
} as const;

/** Helper: build a WhatsApp link with a custom message */
export function waLink(message?: string): string {
  const msg = message ?? site.whatsapp.defaultMessage;
  return `${site.whatsapp.base}?text=${encodeURIComponent(msg)}`;
}
