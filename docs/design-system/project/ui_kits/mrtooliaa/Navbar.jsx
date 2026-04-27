// Navbar.jsx — MR ToolIAA top nav. Transparent over hero, navy-blur on scroll.
function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const bg = scrolled
    ? { background: 'rgba(14,26,45,0.97)', backdropFilter: 'blur(12px)', boxShadow: '0 2px 20px rgba(0,0,0,.3)' }
    : { background: 'transparent' };
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'all .3s', ...bg }}>
      <div className="container" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="../../assets/logo-mrtooliaa-white.png" alt="MR ToolIAA" style={{ height: 52, width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {['Soluciones', 'Productos', 'Cómo funciona', 'Precios'].map(l => (
            <a key={l} href="#" style={{ color: 'rgba(255,255,255,.8)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>{l}</a>
          ))}
          <a href="#" className="btn btn-nav">Hablar con un experto</a>
        </div>
      </div>
    </nav>
  );
}
window.Navbar = Navbar;
