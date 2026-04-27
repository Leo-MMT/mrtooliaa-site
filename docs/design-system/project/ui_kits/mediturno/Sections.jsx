// Benefits + Pricing + Footer for MediTurno
function Benefits() {
  const items = [
    { icon: '📅', title: 'Agenda 24/7', text: 'El bot atiende mientras tu clínica duerme. Citas confirmadas a las 3am.' },
    { icon: '🔔', title: 'Recordatorios automáticos', text: 'Reduce no-shows en 80%. El paciente recibe recordatorio 24h antes.' },
    { icon: '👥', title: 'Múltiples doctores', text: 'Cada especialista con su calendario, bloqueos y reglas propias.' },
    { icon: '📊', title: 'Reportes semanales', text: 'Ocupación, cancelaciones, nuevos pacientes — directo a tu WhatsApp.' },
  ];
  return (
    <section style={{ padding: '80px 0', background: '#fff' }} id="beneficios">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ color: '#0066CC', fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.05em' }}>Beneficios</span>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#003d7a', marginTop: 8, marginBottom: 12 }}>Todo lo que hace por tu clínica</h2>
          <p style={{ color: '#6b7280', fontSize: 17 }}>Sin apps nuevas. Sin capacitación larga. Solo WhatsApp.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {items.map((it, i) => (
            <div key={i} style={{ background: '#f8fafc', borderRadius: 18, padding: 22, textAlign: 'center', transition: 'all .2s', border: '1px solid #f1f5f9' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,102,204,.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{it.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: '#003d7a', marginBottom: 8 }}>{it.title}</h3>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section style={{ padding: '80px 0', background: 'linear-gradient(180deg,#f8fafc,#f1f5f9)' }} id="pricing">
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ color: '#0066CC', fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.05em' }}>Inversión</span>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#003d7a', marginTop: 8 }}>Un precio, transparente</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'center' }}>
          <PCard tier="Básico" price="RD$2,500" features={['1 doctor · 1 especialidad', 'Hasta 300 citas/mes', 'Recordatorios automáticos', 'Soporte WhatsApp']} />
          <PCard tier="Pro" price="RD$5,000" popular features={['Múltiples doctores', 'Citas ilimitadas', 'Integración con calendario', 'Reportes avanzados', 'Soporte prioritario']} />
        </div>
      </div>
    </section>
  );
}

function PCard({ tier, price, features, popular }) {
  return (
    <div style={{ background: popular ? '#003d7a' : '#fff', color: popular ? '#fff' : '#003d7a', borderRadius: 20, padding: 28, border: popular ? '3px solid #00CC66' : '1px solid #e5e7eb', transform: popular ? 'scale(1.03)' : 'none', position: 'relative', boxShadow: popular ? '0 20px 40px rgba(0,204,102,.2)' : '0 4px 12px rgba(0,0,0,.06)' }}>
      {popular && <span style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#00CC66', color: '#fff', fontSize: 10, fontWeight: 900, padding: '4px 12px', borderRadius: 999, letterSpacing: '.1em' }}>MÁS POPULAR</span>}
      <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.08em', opacity: .7, marginBottom: 6 }}>{tier}</div>
      <div style={{ fontSize: 30, fontWeight: 900, marginBottom: 4 }}>{price}</div>
      <div style={{ fontSize: 12, opacity: .6, marginBottom: 20 }}>por mes</div>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: 24 }}>
        {features.map((f, i) => <li key={i} style={{ display: 'flex', gap: 8, fontSize: 13, marginBottom: 8 }}><span style={{ color: '#00CC66', fontWeight: 800 }}>✓</span>{f}</li>)}
      </ul>
      <a href="#" className="btn btn-wa" style={{ display: 'flex', justifyContent: 'center', width: '100%', animation: 'none' }}><WaIcon size={16}/> Probar ahora</a>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#003d7a', color: '#fff', padding: '40px 0', textAlign: 'center' }}>
      <div className="container">
        <img src="../../assets/logo-mediturno.png" style={{ height: 48, marginBottom: 12, filter: 'brightness(1.8) contrast(1.1)' }} />
        <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14 }}>MediTurno IA — un producto MR ToolIAA · +1 809 956 7956</p>
      </div>
    </footer>
  );
}

window.Benefits = Benefits; window.Pricing = Pricing; window.Footer = Footer;
