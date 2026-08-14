import { Link, Navigate, useLocation } from 'react-router-dom';
import './KontaktUspjehPage.css';

export default function KontaktUspjehPage() {
  const location = useLocation();

  // Only reachable via the redirect from a successful form submission
  // (KontaktPage sets this state when it navigates here). Direct URL
  // access or a page refresh has no state, so it gets sent back.
  if (!location.state?.fromContact) {
    return <Navigate to="/kontakt" replace />;
  }

  return (
    <section className="kontakt-success-page section">
      <div className="container kontakt-success-inner">
        <span className="kontakt-success-icon">✓</span>

        <p className="kontakt-success-kicker">HVALA VAM</p>
        <h1 className="kontakt-success-title">Vaša poruka je uspješno poslana!</h1>
        <p className="kontakt-success-text">
          Javit ćemo vam se u najkraćem roku. Ako je vaš upit hitan, slobodno nas nazovite
          direktno.
        </p>

        <div className="kontakt-success-phones">
          <a href="tel:+385953702034" className="kontakt-success-phone">
            +385 95 3702 034
          </a>
          <span className="kontakt-success-phones-divider" aria-hidden="true">|</span>
          <a href="tel:+385916104690" className="kontakt-success-phone">
            +385 91 610 4690
          </a>
        </div>

        <div className="kontakt-success-actions">
          <Link to="/" className="kontakt-success-button kontakt-success-button-primary">
            Nazad na početnu
          </Link>
          <Link to="/cjenik" className="kontakt-success-button kontakt-success-button-secondary">
            Pogledajte cjenovnik
          </Link>
        </div>
      </div>
    </section>
  );
}