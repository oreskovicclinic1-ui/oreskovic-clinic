import offer from '../../assets/offer.webp';
import './Offer.css';

export default function Offer() {
  return (
    <section className="offer section">
      <img className="offer-image" src={offer} alt="Trajno uklanjanje dlačica - Orešković Clinic" />
      <div className="offer-gradient"></div>

      <div className="container offer-layout">
        <div className="offer-text-block">
          <h2 className="offer-headline">
            Riješite se <em>zauvijek</em> svih dlačica na tijelu.
          </h2>

          <div className="offer-price-row">
            <span className="offer-price">1000€</span>
            <span className="offer-price-note">(cijena paketa)</span>
          </div>

          <p className="offer-subnote">Ograničena ponuda. Potpuno bezbolno.</p>

          <a href="/rezervacija" className="offer-cta">
            Zakažite svoj termin
          </a>

          <p className="offer-urgency">Ne propustite ovu ekskluzivnu priliku!</p>
        </div>
      </div>
    </section>
  );
}