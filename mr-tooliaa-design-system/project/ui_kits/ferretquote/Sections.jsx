// Ferret-Quote sections: HowItWorks, Pricing, Footer
function HowItWorks() {
  const steps = [
    { n: '01', icon: '📱', title: 'Cliente pregunta', text: 'Por WhatsApp, voz o lista escrita.' },
    { n: '02', icon: '🤖', title: 'Bot entiende', text: 'Identifica productos y cantidades con IA.' },
    { n: '03', icon: '💰', title: 'Cotiza al instante', text: 'Precios de tu Excel o POS. Con stock.' },
    { n: '04', icon: '📄', title: 'PDF enviado', text: 'Con tu logo, RNC y términos. Listo para aprobar.' },
  ];
  return (
    <section style={{ padding: '100px 0', background: '#f9fafb' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ color: '#f97316', fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.08em' }}>Cómo funciona</span>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: '#111827', marginTop: 8, letterSpacing: '-.02em' }}>De pregunta a cotización, en <span style={{ color: '#f97316' }}>8 segundos.</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, position: 'relative' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, padding: 22, position: 'relative', border: '1px solid #e5e7eb' }}>
              <div style={{ position: 'absolute', top: -14, left: 18, background: '#111827', color: '#f97316', fontSize: 11, fontWeight: 900, padding: '4px 10px', borderRadius: 6, letterSpacing: '.1em' }}>{s.n}</div>
              <div style={{ fontSize: 36, marginBottom: 10 }}>{s.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: '#111827', marginBottom: 6 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const basic = ['Hasta 500 productos', '1 número WhatsApp', 'PDF con tu logo', 'Alertas al dueño', 'Soporte en español'];
  const pro = ['Productos ilimitados', 'Múltiples números', 'Sincronización POS', 'Reportes semanales', 'API para tu web', 'Soporte prioritario 24/7'];
  return (
    <section style={{ padding: '100px 0', background: '#111827', color: '#fff' }}>
      <div className="container" style={{ maxWidth: 980 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ color: '#f97316', fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.08em' }}>Inversión</span>
          <h2 style={{ fontSize: 40, fontWeight: 900, marginTop: 8 }}>Paga menos de lo que vende un empleado en un día.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <PTier tier="Básico" price="8,000" features={basic} />
          <PTier tier="Pro" price="15,000" popular features={pro} />
        </div>
      </div>
    </section>
  );
}

function PTier({ tier, price, features, popular }) {
  return (
    <div style={{ background: popular ? '#fff' : '#1f2937', color: popular ? '#111827' : '#fff', borderRadius: 18, padding: 32, position: 'relative', border: popular ? '3px solid #f97316' : '1px solid #374151', transform: popular ? 'scale(1.02)' : 'none' }}>
      {popular && <div style={{ position: 'absolute', top: -14, right: 24, background: '#f97316', color: '#fff', padding: '5px 14px', borderRadius: 6, fontSize: 11, fontWeight: 900, letterSpacing: '.08em' }}>POPULAR</div>}
      <div style={{ fontSize: 13, fontWeight: 900, color: popular ? '#f97316' : '#f97316', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>{tier}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 24 }}>
        <span style={{ fontSize: 13, opacity: .6 }}>RD$</span>
        <span style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-.02em' }}>{price}</span>
        <span style={{ fontSize: 13, opacity: .6 }}>/mes</span>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28 }}>
        {features.map((f, i) => <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 14 }}><span style={{ color: '#f97316', fontWeight: 900 }}>✓</span>{f}</li>)}
      </ul>
      <a href="#" className={popular ? 'btn btn-orange' : 'btn btn-dark'} style={{ width: '100%', justifyContent: 'center' }}>Empezar ahora →</a>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#030712', color: '#9ca3af', padding: '48px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 24, borderBottom: '1px solid #1f2937', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, background: '#f97316', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🔧</div>
            <span style={{ fontSize: 16, fontWeight: 900, color: '#fff' }}>Ferret<span style={{ color: '#f97316' }}>-Quote</span></span>
          </div>
          <div style={{ fontSize: 13 }}>📞 +1 809 956 7956 · Santo Domingo, RD</div>
        </div>
        <div style={{ fontSize: 12, color: '#6b7280', textAlign: 'center' }}>© 2025 Ferret-Quote · Producto de MR ToolIAA</div>
      </div>
      <a href="#" className="wa-float">💬 Habla con un humano</a>
    </footer>
  );
}

window.HowItWorks = HowItWorks; window.Pricing = Pricing; window.Footer = Footer;
