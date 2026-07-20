import { Link, Navigate, useLocation } from 'react-router-dom';
import './UspjesnaRezervacijaPage.css';

export default function UspjesnaRezervacijaPage() {
  const location = useLocation();

  if (!location.state?.fromReservation) {
    return <Navigate to="/rezervacija" replace />;
  }

  return (
    <section className="success-page section">
      <div className="container success-inner">
        <span className="success-icon">✓</span>

        <p className="success-kicker">HVALA VAM</p>
        <h1 className="success-title">Vaš upit je uspješno poslan!</h1>
        <p className="success-text">
          Javit ćemo vam se u najkraćem roku kako bismo dogovorili termin. Ako je vaš upit
          hitan, slobodno nas nazovite direktno.
        </p>

        <a href="tel:+385953702034" className="success-phone">
          +385 95 3702 034
        </a>

        <div className="success-actions">
          <Link to="/" className="success-button success-button-primary">
            Nazad na početnu
          </Link>
          <Link to="/cjenik" className="success-button success-button-secondary">
            Pogledajte cjenovnik
          </Link>
        </div>
      </div>
    </section>
  );
}