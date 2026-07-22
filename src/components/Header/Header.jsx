import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo-black.png';

const t = {
  oKlinici: 'O klinici',
  tretmani: 'Tretmani',
  cjenik: 'Cjenik',
  rezultati: 'Rezultati',
  recenzije: 'Recenzije',
  rezervacija: 'Rezervacija termina',
  estetski: 'Estetski tretmani',
  zdravstveni: 'Zdravstveni tretmani',
  lice: 'Lice',
  tijelo: 'Tijelo',
  antiAge: 'Anti age tretmani',
  // botox: 'Botox',
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
  // fizikalnaTerapija: 'Fizikalna i regenerativna terapija',
  // nutricionizam: 'Nutricionizam i savjetovanje',
};

// Custom smooth scroll with a slower, controllable duration - CSS
// scroll-behavior:smooth doesn't let us control speed, browsers just
// pick something fast on their own.
function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function performScroll(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const headerOffset = 100;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - headerOffset;
  const distance = targetY - startY;
  const duration = 1200; // ms
  let startTime = null;

  function step(timestamp) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// After navigating to a different page, the target section doesn't
// exist in the DOM yet until the new page finishes rendering - this
// polls briefly until it appears, then scrolls.
function scrollToIdWithRetry(id, attemptsLeft = 20) {
  const target = document.getElementById(id);
  if (target) {
    performScroll(id);
  } else if (attemptsLeft > 0) {
    setTimeout(() => scrollToIdWithRetry(id, attemptsLeft - 1), 50);
  }
}

export default function Header() {
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const navigate = useNavigate();

  function closeMenus() {
    setMobileOpen(false);
    setMobileTreatmentsOpen(false);
    setTreatmentsOpen(false);
  }

  function handleRecenzijeClick(e) {
    e.preventDefault();
    closeMenus();
    if (window.location.pathname === '/') {
      performScroll('recenzije');
    } else {
      navigate('/');
      scrollToIdWithRetry('recenzije');
    }
  }

  return (
    <header className="site-header header-shake">
      <div className="header-bar">
        <Link to="/" className="header-logo" onClick={closeMenus}>
          <img src={logo} alt="Orešković Clinic" />
        </Link>

        <nav className="header-nav" aria-label="Glavna navigacija">
          <Link to="/o-klinici">{t.oKlinici}</Link>

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
                    <Link to="/tretmani/anti-age">{t.antiAge}</Link>
                    {/* <a href="/tretmani/botox">{t.botox}</a> */}
                    <Link to="/tretmani/podocnjaci">{t.podocnjaci}</Link>
                    <Link to="/tretmani/podbradak">{t.podbradak}</Link>
                    <Link to="/tretmani/usne-fileri">{t.usneFileri}</Link>
                    {/* <a href="/tretmani/estetika-kozmetologija">{t.estetikaKozmetologija}</a> */}

                    <span className="header-dropdown-subheading">{t.tijelo}</span>
                    <Link to="/tretmani/celulit">{t.celulit}</Link>
                    <Link to="/tretmani/mrsavljenje">{t.mrsavljenje}</Link>
                    <Link to="/tretmani/dlacice">{t.dlacice}</Link>
                    <Link to="/tretmani/jacanje-misica">{t.jacanjeMisica}</Link>
                    <Link to="/tretmani/straznjica">{t.straznjica}</Link>
                  </div>

                  <div className="header-dropdown-column">
                    <span className="header-dropdown-heading">{t.zdravstveni}</span>
                    <Link to="/tretmani/terapija-ozljeda">{t.terapijaOzljeda}</Link>
                    <Link to="/tretmani/vitaminske-infuzije">{t.vitaminskeInfuzije}</Link>
                    <Link to="/tretmani/test-intolerancija">{t.testIntolerancije}</Link>
                    {/* <a href="/tretmani/test-alergije">{t.testAlergije}</a> */}
                    {/* <a href="/tretmani/opca-medicina">{t.opcaMedicina}</a> */}
                    {/* <a href="/tretmani/medicinske-intervencije">{t.medicinskeIntervencije}</a> */}
                    {/* <Link to="/tretmani/fizikalna-terapija">{t.fizikalnaTerapija}</Link> */}
                    {/* <a href="/tretmani/nutricionizam">{t.nutricionizam}</a> */}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/cjenik">{t.cjenik}</Link>
          <Link to="/rezultati">{t.rezultati}</Link>
          <a href="/#recenzije" onClick={handleRecenzijeClick}>
            {t.recenzije}
          </a>
        </nav>

        <div className="header-actions">

        <Link to="/kontakt" className="header-phone">Kontakt</Link>

          <Link to="/rezervacija" className="header-cta">
            {t.rezervacija}
          </Link>

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
        <Link to="/o-klinici" onClick={closeMenus}>{t.oKlinici}</Link>

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
              <Link to="/tretmani/anti-age" onClick={closeMenus}>{t.antiAge}</Link>
              {/* <a href="/tretmani/botox" onClick={closeMenus}>{t.botox}</a> */}
              <Link to="/tretmani/podocnjaci" onClick={closeMenus}>{t.podocnjaci}</Link>
              <Link to="/tretmani/podbradak" onClick={closeMenus}>{t.podbradak}</Link>
              <Link to="/tretmani/usne-fileri" onClick={closeMenus}>{t.usneFileri}</Link>
              {/* <a href="/tretmani/estetika-kozmetologija" onClick={closeMenus}>{t.estetikaKozmetologija}</a> */}

              <span className="header-dropdown-subheading">{t.tijelo}</span>
              <Link to="/tretmani/celulit" onClick={closeMenus}>{t.celulit}</Link>
              <Link to="/tretmani/mrsavljenje" onClick={closeMenus}>{t.mrsavljenje}</Link>
              <Link to="/tretmani/dlacice" onClick={closeMenus}>{t.dlacice}</Link>
              <Link to="/tretmani/jacanje-misica" onClick={closeMenus}>{t.jacanjeMisica}</Link>
              <Link to="/tretmani/straznjica" onClick={closeMenus}>{t.straznjica}</Link>

              <span className="header-dropdown-heading">{t.zdravstveni}</span>
              <Link to="/tretmani/terapija-ozljeda" onClick={closeMenus}>{t.terapijaOzljeda}</Link>
              <Link to="/tretmani/vitaminske-infuzije" onClick={closeMenus}>{t.vitaminskeInfuzije}</Link>
              <Link to="/tretmani/test-intolerancija" onClick={closeMenus}>{t.testIntolerancije}</Link>
              {/* <a href="/tretmani/test-alergije" onClick={closeMenus}>{t.testAlergije}</a> */}
              {/* <a href="/tretmani/opca-medicina" onClick={closeMenus}>{t.opcaMedicina}</a> */}
              {/* <a href="/tretmani/medicinske-intervencije" onClick={closeMenus}>{t.medicinskeIntervencije}</a> */}
              {/* <Link to="/tretmani/fizikalna-terapija" onClick={closeMenus}>{t.fizikalnaTerapija}</Link> */}
              {/* <a href="/tretmani/nutricionizam" onClick={closeMenus}>{t.nutricionizam}</a> */}
            </div>
          )}
        </div>

        <Link to="/cjenik" onClick={closeMenus}>{t.cjenik}</Link>
        <Link to="/rezultati" onClick={closeMenus}>{t.rezultati}</Link>
        <a href="/#recenzije" onClick={handleRecenzijeClick}>
          {t.recenzije}
        </a>
        <Link to="/kontakt" onClick={closeMenus}>Kontakt</Link>
        <Link to="/rezervacija" className="header-cta" onClick={closeMenus}>
          {t.rezervacija}
        </Link>
      </div>
    </header>
  );
}