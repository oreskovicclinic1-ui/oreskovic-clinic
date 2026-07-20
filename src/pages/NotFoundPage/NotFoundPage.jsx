import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <section className="notfound-page section">
      <div className="container notfound-inner">
        <span className="notfound-number">404</span>

        <p className="notfound-kicker">STRANICA NIJE PRONAĐENA</p>
        <h1 className="notfound-title">Izgleda da ste zalutali</h1>
        <p className="notfound-text">
          Stranica koju tražite ne postoji, ili je premještena. Provjerite link, ili se vratite
          na jednu od stranica ispod.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="notfound-button notfound-button-primary">
            Nazad na početnu
          </Link>
          <Link to="/cjenik" className="notfound-button notfound-button-secondary">
            Pogledajte cjenik
          </Link>
        </div>

        <a href="tel:+385953702034" className="notfound-phone">
          ili nazovite: +385 95 3702 034
        </a>
      </div>
    </section>
  );
}