import './Footer.css';

import logo from '../../assets/logo-white.png';
import { openCookieSettings } from '../../utils/privacyPreferences';
import { Link, useNavigate } from 'react-router-dom';

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
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

function scrollToIdWithRetry(id, attemptsLeft = 20) {
  const target = document.getElementById(id);
  if (target) {
    performScroll(id);
  } else if (attemptsLeft > 0) {
    setTimeout(() => scrollToIdWithRetry(id, attemptsLeft - 1), 50);
  }
}

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  function handleTretmaniClick(e) {
    e.preventDefault();
    if (window.location.pathname === '/') {
      performScroll('tretmani');
    } else {
      navigate('/');
      scrollToIdWithRetry('tretmani');
    }
  }

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-column footer-brand">
          <img src={logo} alt="Orešković Clinic" className="footer-logo" />
          <p className="footer-tagline">
            Rehabilitacija, oporavak i estetski tretmani u Zagrebu i Opatiji.
          </p>

          <div className="footer-social">
            <a href="https://www.facebook.com/p/Ore%C5%A1kovi%C4%87-Clinic-100076336251572/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/oreskovic_clinic/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Naše klinike</h4>
          <ul className="footer-list">
            <li>
              <a href="https://maps.app.goo.gl/8xQLi5Tjn6EMm8qT6" target="_blank" rel="noreferrer">
                Radnička cesta 32, 10000, Zagreb
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/Nk5RY9Esyxzdesuv9" target="_blank" rel="noreferrer">
                Ulica Maršala Tita 166, Opatija
              </a>
              <span className="footer-sublist-note">(Trgovački centar Slatina, 4. kat)</span>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Navigacija</h4>
          <ul className="footer-list">
            <li><a href="/o-klinici">O klinici</a></li>
            <li>
              <a href="/#tretmani" onClick={handleTretmaniClick}>
                Tretmani
              </a>
            </li>
            <li><a href="/cjenik">Cjenik</a></li>
            <li><a href="/rezultati">Rezultati</a></li>
            <li><a href="/rezervacija">Rezervacija termina</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Kontakt</h4>
          <ul className="footer-list">
            <li><a href="tel:+385953702034">+385 95 3702 034</a></li>
            <li><a href="mailto:hbc.zagreb@gmail.com">hbc.zagreb@gmail.com</a></li>
          </ul>

          <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Vaš email" className="footer-newsletter-input" required />
            <button type="submit" className="footer-newsletter-submit">
              Prijavi se
            </button>
          </form>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-copyright">© {year} Orešković Clinic. Sva prava pridržana.</p>

        <div className="footer-legal">
          <Link to="/politika-privatnosti">Politika privatnosti</Link>
          {/* <a href="/uvjeti-koristenja">Uvjeti korištenja</a> */}
          <Link to="/postavke-kolacica">Politika kolačića</Link>
          <button type="button" className="footer-cookie-button" onClick={openCookieSettings}>
            Postavke kolačića
          </button>
        </div>

        <a href='https://www.tyne.rs/' className="footer-credit">Izrada sajta: Tyne Agency</a>
      </div>
    </footer>
  );
}