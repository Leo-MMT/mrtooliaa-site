// Footer.jsx
function Footer() {
  return (
    <footer style={{ background: '#0d1a2d', color: '#fff', padding: '56px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
          <div>
            <img src="../../assets/logo-mrtooliaa-white.png" style={{ height: 44, marginBottom: 16 }} />
            <p style={{ color: 'rgba(255,255,255,.5)', lineHeight: 1.6, marginBottom: 12, maxWidth: 360, fontSize: 14 }}>
              Automatizamos los procesos repetitivos de tu empresa con agentes de inteligencia artificial especializados.
            </p>
            <p style={{ color: 'rgba(255,255,255,.35)', fontSize: 12, lineHeight: 1.6, marginBottom: 20, maxWidth: 360 }}>
              Empresa 100% digital con base en Rep. Dominicana. Atendemos en todo RD y LATAM de forma remota.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#16a34a', color: '#fff', fontSize: 13, fontWeight: 800, padding: '8px 14px', borderRadius: 999, textDecoration: 'none' }}>📱 WhatsApp</a>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,.1)', color: '#fff', fontSize: 13, padding: '8px 14px', borderRadius: 999, textDecoration: 'none' }}>✉️ Email</a>
            </div>
          </div>
          <FCol title="Productos" items={['🏥 MediTurno IA', '🔩 Ferret-Quote Bot', '🤖 Agente Custom']} />
          <FCol title="Contacto" items={['📱 +1 (809) 956-7956', '✉️ contacto@mrtooliaa.com', '🌐 100% digital · RD y LATAM']} />
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,.3)', fontSize: 13 }}>
          <span>© 2026 MR ToolIAA. Todos los derechos reservados.</span>
          <span>Hecho en 🇩🇴 República Dominicana</span>
        </div>
      </div>
    </footer>
  );
}
function FCol({ title, items }) {
  return (
    <div>
      <h4 style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.05em', color: 'rgba(255,255,255,.4)', marginBottom: 16 }}>{title}</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((it, i) => <li key={i} style={{ color: 'rgba(255,255,255,.65)', fontSize: 13, marginBottom: 10 }}>{it}</li>)}
      </ul>
    </div>
  );
}
window.Footer = Footer;
