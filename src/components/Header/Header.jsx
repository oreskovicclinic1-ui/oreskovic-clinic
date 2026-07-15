import { useState } from 'react';
import logo from '../../assets/logo.png'
import './Header.css';

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
  dermalniFileri: 'Dermalni fileri',
  skinBoosteri: 'Skin boosteri',
  hydrafacial: 'Hydrafacial',
  podocnjaci: 'Uklanjanje podočnjaka',
  podbradak: 'Uklanjanje podbratka',
  celulit: 'Anti celulitni tretmani',
  mrsavljenje: 'Tretmani mršavljenja',
  dlacice: 'Trajno uklanjanje dlačica',
  terapijaOzljeda: 'Terapija ozljeda',
  vitaminskeInfuzije: 'Vitaminske infuzije',
  testIntolerancije: 'Test intolerancije na hranu',
  testAlergije: 'Test na alergije',
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
    <header className="site-header">
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
                    <a href="/tretmani/dermalni-fileri">{t.dermalniFileri}</a>
                    <a href="/tretmani/skin-boosteri">{t.skinBoosteri}</a>
                    <a href="/tretmani/hydrafacial">{t.hydrafacial}</a>
                    <a href="/tretmani/uklanjanje-podocnjaka">{t.podocnjaci}</a>
                    <a href="/tretmani/uklanjanje-podbratka">{t.podbradak}</a>

                    <span className="header-dropdown-subheading">{t.tijelo}</span>
                    <a href="/tretmani/celulit">{t.celulit}</a>
                    <a href="/tretmani/mrsavljenje">{t.mrsavljenje}</a>
                    <a href="/tretmani/uklanjanje-dlacica">{t.dlacice}</a>
                  </div>

                  <div className="header-dropdown-column">
                    <span className="header-dropdown-heading">{t.zdravstveni}</span>
                    <a href="/tretmani/terapija-ozljeda">{t.terapijaOzljeda}</a>
                    <a href="/tretmani/vitaminske-infuzije">{t.vitaminskeInfuzije}</a>
                    <a href="/tretmani/intolerancija">{t.testIntolerancije}</a>
                    <a href="/tretmani/alergije">{t.testAlergije}</a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="/cjenik">{t.cjenik}</a>
          <a href="/rezultati">{t.rezultati}</a>
        </nav>

        <div className="header-actions">
          <a href="tel:+385953702034" className="header-phone">
            +385 95 3702 034
          </a>

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
              <a href="/tretmani/dermalni-fileri" onClick={closeMenus}>{t.dermalniFileri}</a>
              <a href="/tretmani/skin-boosteri" onClick={closeMenus}>{t.skinBoosteri}</a>
              <a href="/tretmani/hydrafacial" onClick={closeMenus}>{t.hydrafacial}</a>
              <a href="/tretmani/uklanjanje-podocnjaka" onClick={closeMenus}>{t.podocnjaci}</a>
              <a href="/tretmani/uklanjanje-podbratka" onClick={closeMenus}>{t.podbradak}</a>

              <span className="header-dropdown-subheading">{t.tijelo}</span>
              <a href="/tretmani/celulit" onClick={closeMenus}>{t.celulit}</a>
              <a href="/tretmani/mrsavljenje" onClick={closeMenus}>{t.mrsavljenje}</a>
              <a href="/tretmani/uklanjanje-dlacica" onClick={closeMenus}>{t.dlacice}</a>

              <span className="header-dropdown-heading">{t.zdravstveni}</span>
              <a href="/tretmani/terapija-ozljeda" onClick={closeMenus}>{t.terapijaOzljeda}</a>
              <a href="/tretmani/vitaminske-infuzije" onClick={closeMenus}>{t.vitaminskeInfuzije}</a>
              <a href="/tretmani/intolerancija" onClick={closeMenus}>{t.testIntolerancije}</a>
              <a href="/tretmani/alergije" onClick={closeMenus}>{t.testAlergije}</a>
            </div>
          )}
        </div>

        <a href="/cjenik" onClick={closeMenus}>{t.cjenik}</a>
        <a href="/rezultati" onClick={closeMenus}>{t.rezultati}</a>
        <a href="tel:+385953702034">+385 95 3702 034</a>
        <a href="/rezervacija" className="header-cta" onClick={closeMenus}>
          {t.rezervacija}
        </a>
      </div>
    </header>
  );
}