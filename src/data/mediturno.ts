// =============================================================
// MediTurno IA — Product landing data
// =============================================================
import { site, waLink } from './site';

export const mediturno = {
  name: 'MediTurno IA',
  slug: 'mediturno',
  tagline: 'Tu clínica llena, sin llamadas perdidas.',
  seo: {
    title: 'MediTurno IA — Agendamiento de Citas por WhatsApp para Clínicas',
    description: 'Tu clínica llena sin llamadas perdidas. MediTurno IA agenda citas por WhatsApp las 24 horas, elimina el 80% de los no-shows y libera a tu recepcionista.',
    keywords: 'agendamiento citas whatsapp, bot citas clínica, mediturno, citas médicas RD',
    canonical: `${site.domain}/mediturno/`,
    themeColor: '#0066CC',
    ogImage: `${site.domain}/assets/logo-mediturno.png`,
    ogTitle: 'MediTurno IA — Tu clínica llena, sin llamadas perdidas',
    ogDescription: 'Bot de WhatsApp que agenda citas automáticamente. Disponible 24/7.',
  },
  logos: { icon: '/assets/logo-mediturno-icon.png', full: '/assets/logo-mediturno.png' },
  hero: {
    badge: 'Disponible 24/7 en WhatsApp',
    title: { line1: 'Tu clínica llena,', accent: 'sin llamadas\nperdidas.' },
    subtitle: 'MediTurno IA agenda citas por WhatsApp automáticamente — las 24 horas, los 7 días. Tus pacientes confirman en 30 segundos.',
    ctaPrimary: { text: 'Prueba gratis 14 días' },
    ctaSecondary: { text: 'Ver cómo funciona →', href: '#como-funciona' },
    trialNote: 'Sin contrato. Sin tarjeta de crédito. Configura en 1 hora.',
  },
  wa: {
    demo: 'Hola, me interesa una demo de MediTurno IA',
    trial: 'Hola, quiero probar MediTurno IA gratis',
    basic: 'Hola, me interesa el Plan Básico de MediTurno IA',
    pro: 'Hola, me interesa el Plan Pro de MediTurno IA',
    enterprise: 'Hola, somos una cadena de clínicas y nos interesa MediTurno Enterprise',
    start: 'Hola! Quiero empezar a usar MediTurno IA en mi clínica',
  },
  jsonLd: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'MediTurno IA', applicationCategory: 'HealthApplication', operatingSystem: 'WhatsApp',
    description: 'Bot de IA para agendamiento de citas médicas por WhatsApp.',
    offers: [
      { '@type': 'Offer', name: 'Plan Básico', price: '3500', priceCurrency: 'DOP', billingPeriod: 'P1M' },
      { '@type': 'Offer', name: 'Plan Pro', price: '5500', priceCurrency: 'DOP', billingPeriod: 'P1M' },
    ],
    provider: { '@type': 'Organization', name: 'MR ToolIAA', url: site.domain },
  },
  stats: [
    { value: '80%', label: 'menos no-shows' },
    { value: '30s', label: 'para agendar una cita' },
    { value: '24/7', label: 'disponibilidad' },
    { value: '0', label: 'apps que instalar' },
  ],
  problems: [
    { icon: '📵', title: 'Llamadas perdidas', description: 'El 40% de las llamadas a clínicas se realizan fuera del horario de oficina.' },
    { icon: '🚫', title: 'No-shows frecuentes', description: 'Sin recordatorios automáticos, el 25-35% de los pacientes olvidan su cita.' },
    { icon: '⏰', title: 'Recepcionista saturada', description: 'Confirmar y recordar citas ocupa hasta 3 horas diarias de tu recepcionista.' },
  ],
  features: [
    { icon: '🤖', title: 'Agendamiento automático', description: 'Muestra horarios en tiempo real y confirma sin intervención humana.', gradient: 'from-medical-50 to-blue-50' },
    { icon: '🔔', title: 'Recordatorios automáticos', description: 'Mensaje 24h y 2h antes de cada cita.', gradient: 'from-green-50 to-emerald-50' },
    { icon: '📅', title: 'Agenda inteligente', description: 'Conecta con tu calendario. Sin doble-reservas.', gradient: 'from-purple-50 to-indigo-50' },
    { icon: '💬', title: 'Conversación natural', description: 'El paciente escribe como habla.', gradient: 'from-orange-50 to-amber-50' },
    { icon: '📊', title: 'Dashboard de control', description: 'Estadísticas de citas y no-shows desde cualquier dispositivo.', gradient: 'from-teal-50 to-cyan-50' },
    { icon: '🔧', title: 'Configuración en 1 hora', description: 'Sin técnicos, sin apps, sin complicaciones.', gradient: 'from-pink-50 to-rose-50' },
  ],
  benefits: [
    { icon: '📉', title: '80% menos no-shows', description: 'Los recordatorios eliminan el olvido.', bg: 'green' },
    { icon: '⏰', title: '3 horas menos de trabajo manual', description: 'Tu recepcionista se enfoca en pacientes presentes.', bg: 'blue' },
    { icon: '🌙', title: 'Citas fuera de horario', description: 'El 40% intenta agendar de noche o fin de semana.', bg: 'purple' },
    { icon: '💰', title: 'Más ingresos, misma agenda', description: 'Recupera RD$20,000-50,000/mes adicionales.', bg: 'orange' },
  ],
  targetAudience: [
    { icon: '🩺', title: 'Clínicas Médicas', description: 'Consultas generales, especialistas.' },
    { icon: '🦷', title: 'Clínicas Dentales', description: 'Limpieza, ortodoncia, implantes.' },
    { icon: '🐾', title: 'Clínicas Veterinarias', description: 'Consultas y vacunas para mascotas.' },
    { icon: '💆', title: 'Centros de Estética', description: 'Spa, fisioterapia, nutrición.' },
  ],
  pricing: {
    plans: [
      { name: 'Básico', price: 3500, priceUSD: '≈ USD $60/mes', period: '/mes', description: 'Clínicas pequeñas, 1 médico, hasta 200 citas/mes.', features: ['1 número WhatsApp','Hasta 200 citas/mes','1 médico','Recordatorios','Dashboard básico','Soporte WhatsApp'], variant: 'default' as const },
      { name: 'Pro', price: 5500, priceUSD: '≈ USD $100/mes', period: '/mes', popular: true, description: 'Clínicas en crecimiento, múltiples médicos.', features: ['1 número WhatsApp','Hasta 1,000 citas/mes','Hasta 5 médicos','Recordatorios inteligentes','Dashboard + reportes','Reprogramación automática','Encuesta post-cita','Soporte prioritario'], variant: 'popular' as const },
      { name: 'Enterprise', price: null, priceLabel: 'Contactar', priceUSD: 'Precio personalizado', period: '', description: 'Cadenas de clínicas, hospitales, grupos médicos.', features: ['Citas ilimitadas','Múltiples sucursales','Médicos ilimitados','Integración historias clínicas','API completo','SLA 99.9%','Gerente dedicado'], variant: 'dark' as const },
    ],
    trialNote: '14 días gratis · Sin tarjeta de crédito requerida',
  },
} as const;
