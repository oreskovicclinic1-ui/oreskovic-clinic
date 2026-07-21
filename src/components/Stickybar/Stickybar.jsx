import { useEffect, useState } from 'react';
import './Stickybar.css';

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > window.innerHeight * 3.5);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <div className={`sticky-bar ${isVisible ? 'is-visible' : ''}`}>
      <div className="sticky-bar-inner">
        <div className="sticky-bar-text">
          <span className="sticky-bar-offer">Akcija: trajno uklanjanje dlačica za 1000€</span>
          <a href="tel:+385953702034" className="sticky-bar-phone">
            +385 95 3702 034
          </a>
        </div>

        <div className="sticky-bar-actions">
          <a href="/rezervacija" className="sticky-bar-cta">
            Rezervirajte termin
          </a>

          <button
            className="sticky-bar-close"
            aria-label="Zatvori traku"
            onClick={() => setIsDismissed(true)}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}