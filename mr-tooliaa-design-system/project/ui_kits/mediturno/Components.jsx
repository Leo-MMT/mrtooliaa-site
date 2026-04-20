// Nav + Hero + ChatMockup for MediTurno
function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255,255,255,.96)', backdropFilter: 'blur(6px)', borderBottom: '1px solid #f3f4f6', boxShadow: '0 1px 2px rgba(0,0,0,.04)' }}>
      <div className="container" style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="../../assets/logo-mediturno-icon.png" style={{ height: 44 }} />
          <span style={{ fontSize: 18, fontWeight: 800, color: '#0066CC' }}>MediTurno <span style={{ color: '#1f2937' }}>IA</span></span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 14 }}>
          <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>← MR ToolIAA</a>
          <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>Cómo funciona</a>
          <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>Beneficios</a>
          <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>Precios</a>
          <a href="#" className="btn btn-wa" style={{ padding: '8px 16px', fontSize: 13, borderRadius: 999, animation: 'none', boxShadow: 'none' }}>
            <WaIcon size={14}/> Agenda una demo
          </a>
        </div>
      </div>
    </nav>
  );
}

function WaIcon({ size = 22 }) {
  return <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 2C6.48 2 2 6.48 2 12c0 1.89.52 3.66 1.42 5.17L2 22l4.95-1.3A9.953 9.953 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>;
}

function Hero() {
  return (
    <section className="gradient-med" style={{ paddingTop: 120, paddingBottom: 80, color: '#fff' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <span className="chip-online"><span className="dot-pulse"></span>Disponible 24/7 en WhatsApp</span>
          <h1 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.05, marginTop: 20, marginBottom: 22 }}>
            Tu clínica llena,<br/><span style={{ color: '#4ade80' }}>sin llamadas<br/>perdidas.</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: '#cfe3ff', marginBottom: 28 }}>
            MediTurno IA agenda citas por WhatsApp automáticamente — las 24 horas, los 7 días. Tus pacientes confirman en 30 segundos. Tú dejas de perder tiempo en el teléfono.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-wa" style={{ padding: '16px 26px', fontSize: 17 }}><WaIcon/> Prueba gratis 14 días</a>
            <a href="#" className="btn btn-ghost" style={{ padding: '16px 26px', fontSize: 17 }}>Ver cómo funciona →</a>
          </div>
          <p style={{ color: '#bfdbfe', fontSize: 13, marginTop: 16 }}>Sin contrato. Sin tarjeta de crédito. Configura en 1 hora.</p>
        </div>
        <ChatMockup />
      </div>
    </section>
  );
}

function ChatMockup() {
  const [step, setStep] = React.useState(5);
  const msgs = [
    { me: true, text: 'Hola, quiero agendar una cita con el Dr. Pérez', t: '9:05 AM ✓✓' },
    { me: false, text: '¡Hola! 👋 Con gusto te ayudo. ¿Para cuándo necesitas la cita?', t: '9:05 AM' },
    { me: true, text: 'Mañana por la mañana', t: '9:06 AM ✓✓' },
    { me: false, text: <>Perfecto. Tengo estos horarios disponibles:<div style={{marginTop:6}}>📅 <b>Martes 29/03</b><br/>• 8:00 AM<br/>• 9:30 AM<br/>• 11:00 AM</div><div style={{marginTop:4}}>¿Cuál prefieres?</div></>, t: '9:06 AM' },
    { me: true, text: '9:30 AM ✅', t: '9:07 AM ✓✓' },
    { me: false, text: <>✨ <b>Cita confirmada</b><br/>Dr. Pérez · Martes 29/03, 9:30 AM<br/>Te enviaré un recordatorio 24h antes.</>, t: '9:07 AM' },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 25px 50px rgba(0,0,0,.25)', overflow: 'hidden', maxWidth: 360, margin: '0 auto' }}>
      <div style={{ background: '#075E54', padding: '10px 16px', display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#4ade80', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 16 }}>M</div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>MediTurno IA 🏥</div>
          <div style={{ color: '#bbf7d0', fontSize: 11 }}>En línea ahora</div>
        </div>
      </div>
      <div style={{ background: '#ECE5DD', padding: 14, display: 'flex', flexDirection: 'column', gap: 8, minHeight: 400 }}>
        {msgs.slice(0, step).map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.me ? 'flex-end' : 'flex-start' }}>
            <div style={{ background: m.me ? '#DCF8C6' : '#fff', padding: '8px 12px', borderRadius: 14, borderTopRightRadius: m.me ? 2 : 14, borderTopLeftRadius: m.me ? 14 : 2, maxWidth: 240, boxShadow: '0 1px 1px rgba(0,0,0,.08)' }}>
              <div style={{ color: '#1f2937', fontSize: 13, lineHeight: 1.4 }}>{m.text}</div>
              <div style={{ color: '#9ca3af', fontSize: 10, textAlign: 'right', marginTop: 3 }}>{m.t}</div>
            </div>
          </div>
        ))}
        <button onClick={() => setStep(s => s >= msgs.length ? 1 : s + 1)} style={{ marginTop: 'auto', alignSelf: 'center', background: '#0066CC', color: '#fff', border: 0, borderRadius: 999, padding: '6px 14px', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
          {step >= msgs.length ? '↻ Reiniciar' : 'Siguiente mensaje →'}
        </button>
      </div>
    </div>
  );
}

window.Navbar = Navbar; window.Hero = Hero; window.WaIcon = WaIcon;
