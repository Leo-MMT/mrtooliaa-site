// Hero.jsx — MR ToolIAA hero with gradient background, split layout, Arsenal mockup card.
function Hero() {
  return (
    <section className="gradient-hero" style={{ minHeight: '100vh', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      {/* glow orbs */}
      <div style={{ position: 'absolute', top: 80, right: 0, width: 420, height: 420, background: 'rgba(249,115,22,.12)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 340, height: 340, background: 'rgba(59,130,246,.12)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 60, fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24 }}>
              Tu agente IA<br/><span style={{ color: '#f97316' }}>trabaja 24/7</span><br/>sin descanso
            </h1>
            <p style={{ color: 'rgba(255,255,255,.65)', fontSize: 19, lineHeight: 1.6, marginBottom: 32, maxWidth: 520 }}>
              Automatiza los procesos repetitivos de tu clínica o ferretería con agentes IA especializados en WhatsApp. Implementación en días. Sin café. Sin excusas.
            </p>
            <div style={{ display: 'flex', gap: 14, marginBottom: 40, flexWrap: 'wrap' }}>
              <a href="#" className="btn btn-cta" style={{ padding: '16px 28px', fontSize: 17 }}>Ver soluciones →</a>
              <a href="#" className="btn btn-ghost" style={{ padding: '16px 28px', fontSize: 17 }}>Hablar con un experto</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: 28 }}>
              <Stat val="24/7" label="Disponibilidad" />
              <Stat val="Días" label="Tiempo de impl." accent />
              <Stat val="100%" label="en Español" />
            </div>
          </div>
          <ArsenalCard />
        </div>
      </div>
    </section>
  );
}
function Stat({ val, label, accent }) {
  return (
    <div>
      <div style={{ fontSize: 30, fontWeight: 900, color: accent ? '#f97316' : '#fff' }}>{val}</div>
      <div style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, marginTop: 4 }}>{label}</div>
    </div>
  );
}
function ArsenalCard() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,.18)', borderRadius: 20, padding: 24, boxShadow: '0 25px 50px rgba(0,0,0,.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,.1)', marginBottom: 18 }}>
          <div style={{ width: 40, height: 40, background: '#f97316', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 15 }}>Arsenal MR ToolIAA</div>
            <div style={{ color: 'rgba(255,255,255,.5)', fontSize: 12 }}>13 agentes activos</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="pulse-dot"></span>
            <span style={{ color: '#4ade80', fontSize: 11, fontWeight: 500 }}>En línea</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <AgentRow icon="🏥" name="MediTurno IA" desc="Clínicas · Agendamiento WhatsApp" status="ACTIVO" tone="green" />
          <AgentRow icon="🔧" name="Ferret-Quote Bot" desc="Ferreterías · Cotizaciones PDF" status="ACTIVO" tone="green" />
          <AgentRow icon="🤖" name="Agente Custom" desc="Tu proceso · A la medida" status="SOLICITAR" tone="brand" />
        </div>
        <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,.1)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          <MiniStat val="0" label="Tareas fallidas" />
          <MiniStat val="∞" label="Escalabilidad" accent />
          <MiniStat val="RD" label="Localizado" />
        </div>
      </div>
      {/* Float notification */}
      <div style={{ position: 'absolute', bottom: -12, left: -28, background: '#fff', borderRadius: 18, boxShadow: '0 25px 50px rgba(0,0,0,.25)', padding: 14, display: 'flex', alignItems: 'center', gap: 10, width: 240 }}>
        <span style={{ width: 38, height: 38, borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#0d1a2d' }}>Cita confirmada</div>
          <div style={{ fontSize: 11, color: '#6b7280' }}>Paciente · Dr. Rodríguez · 3pm</div>
        </div>
      </div>
    </div>
  );
}
function AgentRow({ icon, name, desc, status, tone }) {
  const tones = {
    green: { bg: 'rgba(34,197,94,.2)', fg: '#4ade80' },
    brand: { bg: 'rgba(249,115,22,.2)', fg: '#fb923c' },
  };
  const t = tones[tone];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,.05)', borderRadius: 12, padding: 12 }}>
      <span style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>{name}</div>
        <div style={{ color: 'rgba(255,255,255,.5)', fontSize: 11 }}>{desc}</div>
      </div>
      <span style={{ background: t.bg, color: t.fg, fontSize: 10, fontWeight: 900, padding: '4px 9px', borderRadius: 999, letterSpacing: '.05em' }}>{status}</span>
    </div>
  );
}
function MiniStat({ val, label, accent }) {
  return (
    <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 10, padding: 10, textAlign: 'center' }}>
      <div style={{ color: accent ? '#f97316' : '#fff', fontWeight: 800, fontSize: 16 }}>{val}</div>
      <div style={{ color: 'rgba(255,255,255,.4)', fontSize: 10 }}>{label}</div>
    </div>
  );
}
window.Hero = Hero;
