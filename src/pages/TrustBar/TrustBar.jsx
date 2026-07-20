import { useEffect, useRef } from 'react';
import './TrustBar.css';
import team from '../../assets/team.webp';
import hero1 from '../../assets/hero1.jpg';

export default function TrustBar() {
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
    <section className="trust section" ref={sectionRef}>
      <div className="trust-background">
        <img src={hero1} alt="Orešković Clinic - njega i oporavak" />
        <div className="trust-overlay"></div>
      </div>

      <div className="container trust-content">
        <div className="trust-copy reveal">
          <p className="trust-kicker">TRADICIJA I POVJERENJE NAŠE KLINIKE</p>

          <h2 className="trust-title">
            Najbolja njega je ona koja se <em>vidi</em> i osjeća.
          </h2>

          <p className="trust-subtitle">
            Spojili smo vrhunsku medicinsku stručnost i najsuvremenije estetske tretmane kako
            bismo vam pružili sigurnost i rezultate koji traju.
          </p>
        </div>

        <div className="trust-stats reveal reveal-2">
          <div className="trust-stat">
            <span className="trust-stat-number">4+</span>
            <span className="trust-stat-label">Godina iskustva</span>
          </div>

          <div className="trust-stat">
            <span className="trust-stat-number">1000</span>
            <span className="trust-stat-label">Zadovoljnih pacijenata</span>
          </div>

          <div className="trust-stat">
            <span className="trust-stat-number">15+</span>
            <span className="trust-stat-label">Različitih tretmana</span>
          </div>

          <div className="trust-stat">
            <span className="trust-stat-number">2</span>
            <span className="trust-stat-label">Lokacije klinike</span>
          </div>

          <div className="trust-stat trust-stat-team">
            <img
              className="trust-stat-photo"
              src={team}
              alt="Stručni medicinski tim Orešković Clinic"
            />
            <span className="trust-stat-label">Stručni medicinski tim</span>
          </div>
        </div>
      </div>
    </section>
  );
}