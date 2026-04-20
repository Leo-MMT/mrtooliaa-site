// ProductCards.jsx — the 3 product offerings
function ProductCards() {
  return (
    <section style={{ padding: '80px 0' }} className="gradient-section" id="products">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="eyebrow">Productos</span>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1e3a5f', marginTop: 8, marginBottom: 14 }}>
            Un Arsenal de agentes, <span style={{ color: '#f97316' }}>un solo socio</span>
          </h2>
          <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 620, margin: '0 auto' }}>
            Cada producto es una instancia especializada del mismo concepto: automatización inteligente para un sector específico.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          <ProdCard
            icon={<img src="../../assets/logo-mediturno-icon.png" style={{ width: 58, height: 58, objectFit: 'contain' }} />}
            iconBg="#e6f2ff"
            tag="Para Clínicas"
            tagBg="#dbeafe" tagFg="#1d4ed8"
            title="MediTurno IA"
            desc="Agendamiento inteligente para clínicas vía WhatsApp. Sin app, sin web — solo WhatsApp. Tu recepcionista virtual que trabaja 24/7."
            bullets={['Agenda y confirma citas automáticamente', 'Reduce no-shows con recordatorios', 'Múltiples doctores y especialidades', 'Integración con tu calendario actual']}
            cta="Conocer MediTurno →"
            ctaCls="btn-navy"
            active
          />
          <ProdCard
            icon={<img src="../../assets/logo-ferretquote-icon.png" style={{ width: 58, height: 58, objectFit: 'contain' }} />}
            iconBg="#ffedd5"
            tag="Para Ferreterías"
            tagBg="#ffedd5" tagFg="#c2410c"
            title="Ferret-Quote Bot"
            desc="Cotizaciones instantáneas para ferreterías por WhatsApp. Tu cliente pregunta el precio, el bot cotiza en segundos con PDF profesional."
            bullets={['Cotiza desde tu inventario en tiempo real', 'Genera PDF con logo y precios', 'Alertas al dueño por cada cotización', 'Sincroniza con Excel o tu sistema']}
            cta="Conocer Ferret-Quote →"
            ctaCls="btn-cta"
          />
          <ProdCard
            dark
            icon={<span style={{ fontSize: 30 }}>🤖</span>}
            iconBg="rgba(255,255,255,.15)"
            tag="A la medida"
            tagBg="rgba(255,255,255,.2)" tagFg="#fff"
            title="Agente IA Custom"
            desc="¿Tu negocio tiene procesos repetitivos únicos? Diseñamos e implementamos un agente IA completamente personalizado para ti."
            bullets={['Análisis de tus procesos actuales', 'Diseño a medida de tu operación', 'Integración con tus sistemas', 'Soporte continuo en español']}
            cta="Solicitar consulta →"
            ctaCls="btn-cta"
          />
        </div>
      </div>
    </section>
  );
}
function ProdCard({ icon, iconBg, tag, tagBg, tagFg, title, desc, bullets, cta, ctaCls, active, dark }) {
  const bg = dark ? '#1e3a5f' : '#fff';
  const txt = dark ? '#fff' : '#1e3a5f';
  const descCol = dark ? 'rgba(255,255,255,.7)' : '#6b7280';
  const checkCol = dark ? '#fb923c' : '#16a34a';
  const border = active ? '2px solid #f97316' : '1px solid #f3f4f6';
  const shadow = active ? '0 16px 32px rgba(249,115,22,.12)' : '0 4px 16px rgba(0,0,0,.06)';
  return (
    <div className="card-hover" style={{ background: bg, borderRadius: 20, padding: 30, border, boxShadow: shadow }}>
      <div style={{ width: 70, height: 70, background: iconBg, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, overflow: 'hidden' }}>{icon}</div>
      <span style={{ display: 'inline-block', background: tagBg, color: tagFg, fontSize: 11, fontWeight: 800, padding: '4px 12px', borderRadius: 999, marginBottom: 14 }}>{tag}</span>
      <h3 style={{ fontSize: 24, fontWeight: 900, color: txt, marginBottom: 10 }}>{title}</h3>
      <p style={{ color: descCol, lineHeight: 1.6, marginBottom: 22, fontSize: 14 }}>{desc}</p>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: dark ? 'rgba(255,255,255,.8)' : '#4b5563', marginBottom: 8 }}>
            <span style={{ color: checkCol, fontWeight: 800 }}>✓</span> {b}
          </li>
        ))}
      </ul>
      <a href="#" className={`btn ${ctaCls}`} style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '12px 0', borderRadius: 12, fontWeight: 800 }}>{cta}</a>
    </div>
  );
}
window.ProductCards = ProductCards;
