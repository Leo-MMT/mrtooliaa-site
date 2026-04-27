// Ferret-Quote: Nav, Hero, PDF demo, Pricing, Footer
function Navbar() {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(17,24,39,.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
      <div className="container" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 40, height: 40, background: '#f97316', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🔧</div>
          <span style={{ fontSize: 18, fontWeight: 900, color: '#fff', letterSpacing: '-.01em' }}>Ferret<span style={{ color: '#f97316' }}>-Quote</span></span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 14 }}>
          <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>← MR ToolIAA</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none' }}>Cómo funciona</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none' }}>Precios</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none' }}>FAQ</a>
          <a href="#" className="btn btn-orange" style={{ padding: '8px 16px', fontSize: 13 }}>Demo gratis</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-bg" style={{ color: '#fff', padding: '80px 0 100px', position: 'relative', overflow: 'hidden' }}>
      <div className="stripe-accent" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6 }}></div>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 56, alignItems: 'center' }}>
        <div>
          <span className="badge">⚡ Cotiza en 8 segundos</span>
          <h1 style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.02, marginTop: 20, marginBottom: 22, letterSpacing: '-.02em' }}>
            Tu ferretería<br/>cotiza <span style={{ color: '#f97316' }}>sola.</span>
          </h1>
          <p style={{ fontSize: 19, color: '#9ca3af', lineHeight: 1.55, marginBottom: 30, maxWidth: 480 }}>
            El cliente pregunta por WhatsApp. El bot responde al instante con precios, stock y un PDF profesional. Tú sigues atendiendo en mostrador.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-orange" style={{ padding: '16px 28px', fontSize: 16 }}>Probar 14 días gratis →</a>
            <a href="#" className="btn btn-outline" style={{ padding: '16px 28px', fontSize: 16 }}>Ver demo en vivo</a>
          </div>
          <div style={{ display: 'flex', gap: 32, marginTop: 36, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.08)' }}>
            <Stat n="500+" l="Productos/minuto" />
            <Stat n="8s" l="Respuesta promedio" />
            <Stat n="24/7" l="Siempre activo" />
          </div>
        </div>
        <PdfDemo />
      </div>
    </section>
  );
}
function Stat({ n, l }) {
  return <div><div style={{ fontSize: 28, fontWeight: 900, color: '#f97316' }}>{n}</div><div style={{ fontSize: 12, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.05em' }}>{l}</div></div>;
}

function PdfDemo() {
  return (
    <div style={{ position: 'relative' }}>
      {/* phone layer */}
      <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 30px 60px rgba(0,0,0,.5)', overflow: 'hidden', maxWidth: 320 }}>
        <div style={{ background: '#075E54', padding: '10px 14px', display: 'flex', gap: 10, alignItems: 'center', color: '#fff' }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>F</div>
          <div><div style={{ fontSize: 13, fontWeight: 800 }}>Ferret-Quote 🔧</div><div style={{ fontSize: 10, color: '#bbf7d0' }}>Cotizando…</div></div>
        </div>
        <div style={{ background: '#ECE5DD', padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Bubble me>Buenas. Precio y stock de: 10 sacos cemento tipo I, 50 blocks 6", 2 galones pintura blanca</Bubble>
          <Bubble>¡Saludos! 👋 Cotización lista:
            <div style={{ marginTop:6, fontSize:12, lineHeight:1.5 }}>
              • Cemento tipo I · 10 sacos → <b>RD$3,950</b><br/>
              • Block 6" · 50u → <b>RD$1,750</b><br/>
              • Pintura blanca gal · 2u → <b>RD$2,200</b><br/>
              <b style={{ color:'#ea580c' }}>Total: RD$7,900</b>
            </div>
          </Bubble>
          <Bubble compact>📄 Cotización_2847.pdf · 84 KB</Bubble>
        </div>
      </div>
      {/* pdf card floating */}
      <div style={{ position: 'absolute', right: -30, bottom: 30, width: 220, background: '#fff', color: '#111', borderRadius: 12, boxShadow: '0 20px 40px rgba(0,0,0,.35)', padding: 14, transform: 'rotate(6deg)', border: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 26, height: 32, background: '#f97316', borderRadius: 3, color: '#fff', fontSize: 9, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>PDF</div>
          <div style={{ fontSize: 11, fontWeight: 800 }}>Cotización #2847</div>
        </div>
        <div style={{ fontSize: 10, color: '#6b7280', borderTop: '1px dashed #e5e7eb', paddingTop: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Cemento ×10</span><b>3,950</b></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Block 6" ×50</span><b>1,750</b></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Pintura ×2</span><b>2,200</b></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, paddingTop: 6, borderTop: '2px solid #f97316', fontSize: 12, color: '#ea580c' }}><b>TOTAL</b><b>RD$7,900</b></div>
        </div>
      </div>
    </div>
  );
}
function Bubble({ children, me, compact }) {
  return (
    <div style={{ display: 'flex', justifyContent: me ? 'flex-end' : 'flex-start' }}>
      <div style={{ background: me ? '#DCF8C6' : '#fff', padding: compact ? '6px 10px' : '8px 12px', borderRadius: 14, borderTopLeftRadius: me ? 14 : 2, borderTopRightRadius: me ? 2 : 14, maxWidth: 240, color: '#1f2937', fontSize: 13, lineHeight: 1.4, boxShadow: '0 1px 1px rgba(0,0,0,.08)' }}>{children}</div>
    </div>
  );
}

window.Navbar = Navbar; window.Hero = Hero;
