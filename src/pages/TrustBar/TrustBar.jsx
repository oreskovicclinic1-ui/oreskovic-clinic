import './TrustBar.css';
import team from '../../assets/team.webp';
import hero1 from '../../assets/hero1.jpg';

export default function TrustBar() {
  return (
    <section className="trust section">
      <div className="trust-background">
        <img src={hero1} alt="Orešković Clinic - njega i oporavak" />
        <div className="trust-overlay"></div>
      </div>

      <div className="container trust-content">
        <div className="trust-copy">
          <p className="trust-kicker">TRADICIJA I POVJERENJE NAŠE KLINIKE</p>

          <h2 className="trust-title">
            Najbolja njega je ona koja se <em>vidi</em> i osjeća.
          </h2>

          <p className="trust-subtitle">
            Spojili smo vrhunsku medicinsku stručnost i najsuvremenije estetske tretmane kako
            bismo vam pružili sigurnost i rezultate koji traju.
          </p>
        </div>

        <div className="trust-stats">
          <div className="trust-stat">
            <span className="trust-stat-number">15+</span>
            <span className="trust-stat-label">Godina iskustva</span>
          </div>

          <div className="trust-stat">
            <span className="trust-stat-number">10.000+</span>
            <span className="trust-stat-label">Zadovoljnih pacijenata</span>
          </div>

          <div className="trust-stat">
            <span className="trust-stat-number">50+</span>
            <span className="trust-stat-label">Različitih tretmana</span>
          </div>

          <div className="trust-stat">
            <span className="trust-stat-number">3</span>
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