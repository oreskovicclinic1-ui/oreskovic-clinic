import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo-black.png';

const t = {
  oKlinici: 'O klinici',
  tretmani: 'Tretmani',
  cjenik: 'Cjenik',
  rezultati: 'Rezultati',
  rezervacija: 'Rezervacija termina',
  estetski: 'Estetski tretmani',
  zdravstveni: 'Zdravstveni tretmani',
  lice: 'Lice',
  tijelo: 'Tijelo',
  antiAge: 'Anti age tretmani',
  botox: 'Botox',
  usneFileri: 'Povećavanje usana filerima',
  podocnjaci: 'Uklanjanje podočnjaka',
  podbradak: 'Uklanjanje podbratka',
  // estetikaKozmetologija: 'Estetika i kozmetologija',
  celulit: 'Anti celulitni tretmani',
  mrsavljenje: 'Tretmani mršavljenja',
  dlacice: 'Trajno uklanjanje dlačica',
  jacanjeMisica: 'Tretmani jačanja mišića',
  straznjica: 'Podizanje i učvršćivanje stražnjice',
  terapijaOzljeda: 'Terapija ozljeda',
  vitaminskeInfuzije: 'Vitaminske infuzije',
  testIntolerancije: 'Test intolerancije na hranu',
  // testAlergije: 'Test na alergije',
  // opcaMedicina: 'Opća medicina i dijagnostika',
  // medicinskeIntervencije: 'Medicinske intervencije i terapije',
  fizikalnaTerapija: 'Fizikalna i regenerativna terapija',
  // nutricionizam: 'Nutricionizam i savjetovanje',
};

export default function Header() {
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);

  function closeMenus() {
    setMobileOpen(false);
    setMobileTreatmentsOpen(false);
    setTreatmentsOpen(false);
  }

  return (
    <header className="site-header header-shake">
      <div className="header-bar">
        <a href="/" className="header-logo" onClick={closeMenus}>
          <img src={logo} alt="Orešković Clinic" />
        </a>

        <nav className="header-nav" aria-label="Glavna navigacija">
          <a href="/o-klinici">{t.oKlinici}</a>

          <div
            className="header-dropdown"
            onMouseEnter={() => setTreatmentsOpen(true)}
            onMouseLeave={() => setTreatmentsOpen(false)}
          >
            <button
              className="header-dropdown-trigger"
              aria-expanded={treatmentsOpen}
              onClick={() => setTreatmentsOpen((open) => !open)}
            >
              {t.tretmani}
            </button>

            {treatmentsOpen && (
              <div className="header-dropdown-bridge">
                <div className="header-dropdown-menu">
                  <div className="header-dropdown-column">
                    <span className="header-dropdown-heading">{t.estetski}</span>

                    <span className="header-dropdown-subheading">{t.lice}</span>
                    <a href="/tretmani/anti-age">{t.antiAge}</a>
                    <a href="/tretmani/botox">{t.botox}</a>
                    <a href="/tretmani/podocnjaci">{t.podocnjaci}</a>
                    <a href="/tretmani/podbradak">{t.podbradak}</a>
                    <a href="/tretmani/usne-fileri">{t.usneFileri}</a>
                    {/* <a href="/tretmani/estetika-kozmetologija">{t.estetikaKozmetologija}</a> */}

                    <span className="header-dropdown-subheading">{t.tijelo}</span>
                    <a href="/tretmani/celulit">{t.celulit}</a>
                    <a href="/tretmani/mrsavljenje">{t.mrsavljenje}</a>
                    <a href="/tretmani/dlacice">{t.dlacice}</a>
                    <a href="/tretmani/jacanje-misica">{t.jacanjeMisica}</a>
                    <a href="/tretmani/straznjica">{t.straznjica}</a>
                  </div>

                  <div className="header-dropdown-column">
                    <span className="header-dropdown-heading">{t.zdravstveni}</span>
                    <a href="/tretmani/terapija-ozljeda">{t.terapijaOzljeda}</a>
                    <a href="/tretmani/vitaminske-infuzije">{t.vitaminskeInfuzije}</a>
                    <a href="/tretmani/test-intolerancija">{t.testIntolerancije}</a>
                    {/* <a href="/tretmani/test-alergije">{t.testAlergije}</a> */}
                    {/* <a href="/tretmani/opca-medicina">{t.opcaMedicina}</a> */}
                    {/* <a href="/tretmani/medicinske-intervencije">{t.medicinskeIntervencije}</a> */}
                    <a href="/tretmani/fizikalna-terapija">{t.fizikalnaTerapija}</a>
                    {/* <a href="/tretmani/nutricionizam">{t.nutricionizam}</a> */}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="/cjenik">{t.cjenik}</a>
          <a href="/rezultati">{t.rezultati}</a>
        </nav>

        <div className="header-actions">
          
        <Link to="/kontakt" className="header-phone">Kontakt</Link>

          <a href="/rezervacija" className="header-cta">
            {t.rezervacija}
          </a>

          <button
            className={`header-burger ${mobileOpen ? 'is-open' : ''}`}
            aria-label="Otvori meni"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`header-mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
        <a href="/o-klinici" onClick={closeMenus}>{t.oKlinici}</a>

        <div className="header-mobile-accordion">
          <button
            className="header-mobile-accordion-trigger"
            aria-expanded={mobileTreatmentsOpen}
            onClick={() => setMobileTreatmentsOpen((open) => !open)}
          >
            {t.tretmani}
            <span className={`header-mobile-accordion-icon ${mobileTreatmentsOpen ? 'is-open' : ''}`}>+</span>
          </button>

          {mobileTreatmentsOpen && (
            <div className="header-mobile-accordion-panel">
              <span className="header-dropdown-heading">{t.estetski}</span>

              <span className="header-dropdown-subheading">{t.lice}</span>
              <a href="/tretmani/anti-age" onClick={closeMenus}>{t.antiAge}</a>
              <a href="/tretmani/botox" onClick={closeMenus}>{t.botox}</a>
              <a href="/tretmani/podocnjaci" onClick={closeMenus}>{t.podocnjaci}</a>
              <a href="/tretmani/podbradak" onClick={closeMenus}>{t.podbradak}</a>
              <a href="/tretmani/usne-fileri" onClick={closeMenus}>{t.usneFileri}</a>
              {/* <a href="/tretmani/estetika-kozmetologija" onClick={closeMenus}>{t.estetikaKozmetologija}</a> */}

              <span className="header-dropdown-subheading">{t.tijelo}</span>
              <a href="/tretmani/celulit" onClick={closeMenus}>{t.celulit}</a>
              <a href="/tretmani/mrsavljenje" onClick={closeMenus}>{t.mrsavljenje}</a>
              <a href="/tretmani/dlacice" onClick={closeMenus}>{t.dlacice}</a>
              <a href="/tretmani/jacanje-misica" onClick={closeMenus}>{t.jacanjeMisica}</a>
              <a href="/tretmani/straznjica" onClick={closeMenus}>{t.straznjica}</a>

              <span className="header-dropdown-heading">{t.zdravstveni}</span>
              <a href="/tretmani/terapija-ozljeda" onClick={closeMenus}>{t.terapijaOzljeda}</a>
              <a href="/tretmani/vitaminske-infuzije" onClick={closeMenus}>{t.vitaminskeInfuzije}</a>
              <a href="/tretmani/test-intolerancija" onClick={closeMenus}>{t.testIntolerancije}</a>
              {/* <a href="/tretmani/test-alergije" onClick={closeMenus}>{t.testAlergije}</a> */}
              {/* <a href="/tretmani/opca-medicina" onClick={closeMenus}>{t.opcaMedicina}</a> */}
              {/* <a href="/tretmani/medicinske-intervencije" onClick={closeMenus}>{t.medicinskeIntervencije}</a> */}
              <a href="/tretmani/fizikalna-terapija" onClick={closeMenus}>{t.fizikalnaTerapija}</a>
              {/* <a href="/tretmani/nutricionizam" onClick={closeMenus}>{t.nutricionizam}</a> */}
            </div>
          )}
        </div>

        <a href="/cjenik" onClick={closeMenus}>{t.cjenik}</a>
        <a href="/rezultati" onClick={closeMenus}>{t.rezultati}</a>
        <Link to="/kontakt" onClick={closeMenus}>Kontakt</Link>
        <a href="/rezervacija" className="header-cta" onClick={closeMenus}>
          {t.rezervacija}
        </a>
      </div>
    </header>
  );
}