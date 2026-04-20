// ProblemSolution.jsx — three-up pain/bridge/result narrative cards
function ProblemSolution() {
  return (
    <section style={{ padding: '80px 0', background: '#fff' }} id="solution">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="eyebrow">El problema</span>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1e3a5f', marginTop: 8, marginBottom: 14 }}>
            Tu equipo merece hacer trabajo que <span style={{ color: '#f97316' }}>importa</span>
          </h2>
          <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
            Las horas que tu equipo gasta en tareas repetitivas son horas que no invierte en crecer tu negocio.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          <PSCard bg="#fef2f2" border="#fecaca" icon="⏰" iconBg="#fee2e2" title="Tu equipo pierde horas"
            text="Responder mensajes, agendar citas, buscar precios, generar cotizaciones — tareas manuales que se repiten cientos de veces al mes."
            badge="❌ Problema actual" badgeBg="#fee2e2" badgeFg="#dc2626" />
          <PSCard dark icon="🤖" title="Nuestros agentes IA"
            text="Ejecutan esas tareas automáticamente, 24 horas al día, 7 días a la semana, sin errores, sin descanso, sin excusas."
            badge="→ La solución" badgeBg="#f97316" badgeFg="#fff" />
          <PSCard bg="#f0fdf4" border="#bbf7d0" icon="🎯" iconBg="#dcfce7" title="Tú te enfocas en crecer"
            text="Tu equipo se libera de lo repetitivo y puede invertir su tiempo en ventas, servicio al cliente y decisiones estratégicas."
            badge="✅ Resultado" badgeBg="#dcfce7" badgeFg="#15803d" />
        </div>
      </div>
    </section>
  );
}
function PSCard({ bg, border, icon, iconBg, title, text, badge, badgeBg, badgeFg, dark }) {
  return (
    <div className="card-hover" style={{ textAlign: 'center', padding: 30, borderRadius: 20, background: dark ? '#1e3a5f' : bg, border: dark ? 'none' : `1px solid ${border}`, color: dark ? '#fff' : '#1f2937' }}>
      <div style={{ width: 64, height: 64, background: dark ? 'rgba(255,255,255,.18)' : iconBg, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 28 }}>{icon}</div>
      <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: dark ? '#fff' : '#111827' }}>{title}</h3>
      <p style={{ color: dark ? 'rgba(255,255,255,.75)' : '#6b7280', lineHeight: 1.6, fontSize: 14 }}>{text}</p>
      <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 6, background: badgeBg, color: badgeFg, fontSize: 11, fontWeight: 800, padding: '6px 14px', borderRadius: 999 }}>{badge}</div>
    </div>
  );
}
window.ProblemSolution = ProblemSolution;
