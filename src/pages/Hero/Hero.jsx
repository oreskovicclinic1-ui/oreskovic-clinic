import './Hero.css';

import hero from '../../assets/hero.webp';
import hero1 from '../../assets/hero1.jpg';

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
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
            <a href="/tretmani" className="hero-button hero-button-secondary">
              Istražite tretmane
            </a>
          </div>

          <p className="hero-trust">
            <strong>1000+</strong> zadovoljnih pacijenata
          </p>
        </div>

        <div className="hero-visual">
          <img src={hero1} alt="Orešković Clinic - njega i oporavak" />
        </div>
      </div>
    </section>
  );
}