import { useEffect, useRef } from 'react';
import './AboutClinic.css';
import pic0 from '../../assets/pic1.webp';
import pic1 from '/treatments/podbradak.webp';

function scrollToSection(e, targetId) {
  e.preventDefault();
  const target = document.getElementById(targetId);
  if (!target) return;

  const headerOffset = 100;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - headerOffset;
  const distance = targetY - startY;
  const duration = 1200; // ms - increase for slower, decrease for faster
  let startTime = null;

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function step(timestamp) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const features = [
  {
    title: 'Stručno i profesionalno osoblje',
    text: 'Tretmane provode stručni zdravstveni djelatnici.',
  },
  {
    title: 'Sigurno i udobno okruženje',
    text: 'Tretmani visoke kvalitete u sigurnom ordinacijskom okruženju.',
  },
  {
    title: 'Tretmani po mjeri',
    text: 'Prilagođeni tretmani koji će vam pomoći dobiti točno ono što želite.',
  },
];

export default function AboutClinic() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" ref={sectionRef}>
      <div className="container about-grid">
        <div className="about-content reveal reveal-1">
          <p className="about-kicker">O KLINICI</p>

          <h2 className="about-title">
            Naš pristup <em>zdravlju</em> i estetici.
          </h2>

          <p className="about-intro">
            Orešković Clinic je poliklinika koja spaja medicinsku stručnost, najnapredniju
            tehnologiju i individualan pristup svakom pacijentu. Njegujemo filozofiju rada
            koja povezuje rehabilitaciju, oporavak i estetske tretmane u jedinstveno iskustvo
            njege.
          </p>

          <div className="about-features">
            {features.map((feature) => (
              <div className="about-feature" key={feature.title}>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-text">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <a href="/o-klinici" className="about-button about-button-primary">
              Saznajte više o klinici
            </a>
            <a
              href="#tretmani"
              className="about-button about-button-secondary"
              onClick={(e) => scrollToSection(e, 'tretmani')}
            >
              Svi tretmani
            </a>
          </div>
        </div>

        <div className="about-visual reveal reveal-2">
          <img
            className="about-image about-image-primary"
            src={pic0}
            alt="Nega lica Orešković Clinic"
          />
          <img
            className="about-image about-image-secondary"
            src={pic1}
            alt="Depilacija u Orešković Clinic"
          />
        </div>
      </div>
    </section>
  );
}