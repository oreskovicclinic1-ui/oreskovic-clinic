import { useEffect, useState } from 'react';
import './Stickybar.css';
import { Link } from 'react-router-dom';

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > window.innerHeight * 1.5);
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
            <span className="sticky-bar-offer">Akcija: Test intolerancije na hranu + status vitamina i minerala + test na alergije za 240€</span>          <div className="sticky-bar-phones">
            <a href="tel:+385953702034" className="sticky-bar-phone">
              +385 95 3702 034
            </a>
            <span className="sticky-bar-phones-divider" aria-hidden="true">|</span>
            <a href="tel:+385916104690" className="sticky-bar-phone">
              +385 91 610 4690
            </a>
          </div>
        </div>

        <div className="sticky-bar-actions">
        <Link to="/rezervacija" className="sticky-bar-cta">
          Rezervirajte termin
        </Link>

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