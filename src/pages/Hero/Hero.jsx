import './Hero.css';

import hero1 from '../../assets/hero1.jpg';

// Custom smooth scroll with a slower, controllable duration - CSS
// scroll-behavior:smooth doesn't let us control speed, browsers just
// pick something fast on their own.
function scrollToSection(e, targetId) {
  e.preventDefault();
  const target = document.getElementById(targetId);
  if (!target) return;

  const headerOffset = 100;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - headerOffset;
  const distance = targetY - startY;
  const duration = 1200; // ms - increase for slower, decrease for faster
  let startTime = null;

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function step(timestamp) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob hero-blob-1"></span>
        <span className="hero-blob hero-blob-2"></span>
        <span className="hero-blob hero-blob-3"></span>
      </div>

      <span className="hero-watermark" aria-hidden="true">NJEGA</span>

      <div className="container hero-grid">
        <div className="hero-content hero-enter">
          <p className="hero-kicker">ZAGREB • OPATIJA</p>

          <h1 className="hero-title">
            Orešković
            <span className="hero-title-line">
              Rehab &amp; <em>aesthetic</em> clinic
            </span>
          </h1>

          <p className="hero-description">
            Poliklinika koja povezuje medicinsku stručnost i najnoviju tehnologiju. Kroz
            cjelovitu rehabilitaciju i estetske tretmane donosimo dugoročna rješenja za vaše
            zdravlje i tijelo.
          </p>

          <div className="hero-actions">
            <a href="/rezervacija" className="hero-button hero-button-primary">
              Rezervirajte svoj termin
              <span className="hero-button-arrow">→</span>
            </a>
            <a
              href="#tretmani"
              className="hero-button hero-button-secondary"
              onClick={(e) => scrollToSection(e, 'tretmani')}
            >
              Istražite tretmane
            </a>
          </div>

          <p className="hero-trust">
            <strong>1000+</strong> zadovoljnih pacijenata
          </p>
        </div>

        <div className="hero-visual hero-enter hero-enter-2">
          <img src={hero1} alt="Orešković Clinic - njega i oporavak" />
        </div>
      </div>
    </section>
  );
}