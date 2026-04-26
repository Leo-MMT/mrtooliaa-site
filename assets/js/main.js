(() => {
  'use strict';

  const nav = document.getElementById('navbar');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) nav.classList.add('nav-scrolled');
      else nav.classList.remove('nav-scrolled');
    }, { passive: true });
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const link = document.getElementById('navLogoLink');
    const logo = document.getElementById('navLogo');
    if (link && logo) {
      link.addEventListener('mousemove', (e) => {
        const r = link.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        logo.style.transform = `translate(${dx * 6}px, ${dy * 6}px)`;
      });
      link.addEventListener('mouseleave', () => { logo.style.transform = ''; });
    }
  }
})();
