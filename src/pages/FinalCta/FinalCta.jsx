import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FinalCta.css';

export default function FinalCta() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="final-cta section" ref={sectionRef}>
      <div className="final-cta-glow"></div>

      <div className="container final-cta-content reveal">
        <p className="final-cta-kicker">SPREMNI STE?</p>

        <h2 className="final-cta-title">
          Vaš put do zdravlja i <em>samopouzdanja</em> počinje danas.
        </h2>

        <p className="final-cta-subtitle">
          Zakažite besplatnu konsultaciju i saznajte koji je tretman pravi izbor za vas.
        </p>

        <Link to="/rezervacija" className="final-cta-button">
          Rezervirajte termin
        </Link>

        <div className="final-cta-phones">
          <span className="final-cta-phones-label">ili nazovite:</span>
          <a href="tel:+385953702034" className="final-cta-phone">
            +385 95 3702 034
          </a>
          <span className="final-cta-phones-divider" aria-hidden="true">|</span>
          <a href="tel:+385916104690" className="final-cta-phone">
            +385 91 610 4690
          </a>
        </div>

        <div className="final-cta-divider"></div>

        <div className="final-cta-funding">
          <img
            src="/logos/eu-logo.webp"
            alt="Sufinancirano sredstvima Europske unije"
            className="final-cta-funding-logo"
          />
          <img
            src="/logos/hamag-logo.webp"
            alt="HAMAG-BICRO"
            className="final-cta-funding-logo"
          />
        </div>
      </div>
    </section>
  );
}