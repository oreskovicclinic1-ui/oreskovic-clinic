import { useEffect, useRef } from 'react';
import FinalCta from '../FinalCta/Finalcta';
import './OKliniciPage.css';

const devices = [
  {
    id: 'indiba',
    name: 'Indiba Edna Pro Max',
    image: '/o-klinici/indiba.webp',
    description:
      'Radiofrekventna tehnologija koju koristimo za uklanjanje podbratka, podočnjaka i anti age tretmane — zateže kožu i potiče proizvodnju kolagena.',
  },
  {
    id: 'k-laser',
    name: 'K-Laser Cube 4',
    image: '/o-klinici/k-laser.webp',
    description:
      'Terapijski laser koji koristimo u rehabilitaciji i terapiji ozljeda — ubrzava zarastanje tkiva i smanjuje bol i upale.',
  },
  {
    id: 'hiemt',
    name: 'Tesla Hiemt Pro',
    image: '/o-klinici/hiemt.webp',
    description:
      'Elektromagnetna stimulacija mišića koju koristimo za jačanje mišića i podizanje stražnjice — intenzivne kontrakcije bez fizičkog napora.',
  },
  {
    id: 'vertona',
    name: 'Vertona Superior Laser',
    image: '/o-klinici/vertona.webp',
    description:
      'Diodni laser sa tri valne duljine koji koristimo za trajno uklanjanje dlačica, prilagođen svim tipovima kože.',
  },
  {
    id: 'bicom',
    name: 'Bicom Body Check 2',
    image: '/o-klinici/bbc.webp',
    description:
      'Uređaj koji koristimo za test intolerancije na hranu — detektira namirnice i nedostatak vitamina i minerala u organizmu.',
  },
];

export default function OKliniciPage() {
  const storyRef = useRef(null);
  const techRef = useRef(null);
  const locationsRef = useRef(null);

  useEffect(() => {
    const nodes = [storyRef.current, techRef.current, locationsRef.current].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO - same background/text as Rezervacija, two overlapping
          photos instead of a form */}
      <section className="oklinici-hero">
        <div className="oklinici-hero-blobs" aria-hidden="true">
          <span className="oklinici-blob oklinici-blob-1"></span>
          <span className="oklinici-blob oklinici-blob-2"></span>
        </div>

        <div className="container oklinici-grid">
          <div className="oklinici-content">
            <p className="oklinici-kicker">O KLINICI</p>
            <h1 className="oklinici-title">Medicina, tehnologija i stručnost na jednom mjestu</h1>
            <p className="oklinici-intro">
              Orešković Clinic je poliklinika koja spaja medicinski pristup, najnapredniju
              tehnologiju i stručni tim zdravstvenih djelatnika. Fokus nam je na rehabilitaciji,
              oporavku i zdravlju, ali i na estetskim tretmanima koji podržavaju dugoročno stanje
              kože i tijela.
            </p>

            <div className="oklinici-highlights">
              <span className="oklinici-highlight-chip">
                <span className="oklinici-highlight-check">✓</span>
                5 godina iskustva
              </span>
              <span className="oklinici-highlight-chip">
                <span className="oklinici-highlight-check">✓</span>
                Zagreb i Opatija
              </span>
            </div>
          </div>

          <div className="oklinici-hero-visual">
            <img
              className="oklinici-hero-image oklinici-hero-image-primary"
              src="/o-klinici/interior-1.webp"
              alt="Interijer Orešković Clinic"
            />
            <img
              className="oklinici-hero-image oklinici-hero-image-secondary"
              src="/o-klinici/interior-2.webp"
              alt="Interijer Orešković Clinic"
            />
          </div>
        </div>
      </section>

      {/* PRIČA KLINIKE - light background, text + photo */}
      <section className="oklinici-story section" ref={storyRef}>
        <div className="container oklinici-story-grid">
          <div className="oklinici-story-image reveal">
            <img src="/o-klinici/interior-3.webp" alt="Interijer Orešković Clinic" />
          </div>

          <div className="oklinici-story-content reveal reveal-2">
            <p className="oklinici-section-kicker">NAŠA PRIČA</p>
            <h2 className="oklinici-story-title">
              Kombinacijom znanja, iskustva i tehnologije pristupamo svakom problemu s ciljem
              njegovog <em>rješavanja</em>
            </h2>
            <p className="oklinici-story-text">
              Orešković Clinic osnovana je 11. siječnja 2022. godine, s jasnim ciljem — spojiti
              medicinsku stručnost i najnapredniju tehnologiju pod jednim krovom. Kroz 5 godina
              rada izgradili smo tim zdravstvenih djelatnika i proširili se na dvije lokacije,
              Zagreb i Opatiju, uvijek s istim pristupom: svakom pacijentu posvetiti pažnju koju
              zaslužuje, i svaki problem rješavati kombinacijom pravog znanja i prave tehnologije.
            </p>
          </div>
        </div>
      </section>

      {/* TEHNOLOGIJA */}
      <section className="oklinici-tech section" ref={techRef}>
        <div className="container">
          <p className="oklinici-section-kicker oklinici-section-kicker-center reveal">TEHNOLOGIJA</p>
          <h2 className="oklinici-tech-title reveal">Aparati koje koristimo</h2>

          <div className="oklinici-tech-grid reveal reveal-2">
            {devices.map((device) => (
              <div className="oklinici-tech-card" key={device.id}>
                {device.image ? (
                  <img
                    src={device.image}
                    alt={device.name}
                    loading="lazy"
                    className="oklinici-tech-image"
                  />
                ) : (
                  <div className="oklinici-tech-image oklinici-tech-image-placeholder"></div>
                )}
                <div className="oklinici-tech-overlay"></div>
                <div className="oklinici-tech-body">
                  <span className="oklinici-tech-tag">APARAT</span>
                  <h3 className="oklinici-tech-name">{device.name}</h3>
                  <p className="oklinici-tech-description">{device.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOKACIJE */}
      <section className="oklinici-locations section" ref={locationsRef}>
        <div className="container">
          <p className="oklinici-section-kicker oklinici-section-kicker-center reveal">LOKACIJE</p>
          <h2 className="oklinici-tech-title reveal">Posjetite nas</h2>

          <div className="oklinici-locations-grid reveal reveal-2">
            <div className="oklinici-location-card">
              <div className="oklinici-location-header">
                <span className="oklinici-location-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2C6.7 2 4 4.7 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <circle cx="10" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <h3 className="oklinici-location-name">Zagreb</h3>
              </div>
              <p className="oklinici-location-address">Adresa klinike, Zagreb</p>
              <a href="tel:+385953702034" className="oklinici-location-phone">
                +385 95 3702 034
              </a>
              <div className="oklinici-location-map">
                <iframe
                  title="Orešković Clinic Zagreb"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.393111935964!2d15.995430776011155!3d45.80338491074421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d731b207908d%3A0x9e5dfb2e744298c2!2zT3JlxaFrb3ZpxIcgQ2xpbmlj!5e0!3m2!1sen!2srs!4v1784562642479!5m2!1sen!2srs"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="oklinici-location-card">
              <div className="oklinici-location-header">
                <span className="oklinici-location-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2C6.7 2 4 4.7 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <circle cx="10" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <h3 className="oklinici-location-name">Opatija</h3>
              </div>
              <p className="oklinici-location-address">Adresa klinike, Opatija</p>
              <a href="tel:+385953702034" className="oklinici-location-phone">
                +385 95 3702 034
              </a>
              <div className="oklinici-location-map">
                <iframe
                  title="Orešković Clinic Opatija"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.864660779526!2d14.298964075985792!3d45.33135534229295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x619a51c17cdcc16f%3A0x574db439d6f185d8!2sOre%C5%A1kovi%C4%87%20Rehab%20%26%20Aesthetic!5e0!3m2!1sen!2srs!4v1784562763967!5m2!1sen!2srs"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}