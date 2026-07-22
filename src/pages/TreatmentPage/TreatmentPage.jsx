import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FinalCta from '../FinalCta/FinalCta';
import { getTreatmentBySlug } from '../../data/treatmentsData';
import { getCategoryById, getStartingPrice } from '../../data/pricingData';
import './TreatmentPage.css';

function FaqItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`treatment-faq-item ${isOpen ? 'is-open' : ''}`}>
      <button className="treatment-faq-question" onClick={() => setIsOpen((o) => !o)}>
        <span className="treatment-faq-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="treatment-faq-question-text">{item.question}</span>
        <svg
          className="treatment-faq-icon"
          width="14"
          height="14"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="treatment-faq-answer-wrap">
        <p className="treatment-faq-answer">{item.answer}</p>
      </div>
    </div>
  );
}

export default function TreatmentPage() {
  const { slug } = useParams();
  const treatment = getTreatmentBySlug(slug);
  const pricing = treatment ? getCategoryById(treatment.pricingId) : null;

  useEffect(() => {
    if (!treatment) return;
    document.title = `${treatment.name} — Orešković Clinic`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', treatment.shortBenefit);
  }, [treatment]);

  if (!treatment) {
    return (
      <section className="treatment-not-found section">
        <div className="container">
          <h1>Tretman nije pronađen</h1>
          <p>Provjerite link, ili pogledajte sve tretmane.</p>
          <Link to="/" className="treatment-not-found-link">
            Nazad na početnu →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="treatment-hero section">
        <div className="treatment-hero-bg" aria-hidden="true">
          <span className="treatment-blob treatment-blob-1"></span>
          <span className="treatment-blob treatment-blob-2"></span>
        </div>

        <div className="container treatment-hero-grid">
          <div className="treatment-hero-content">
            <p className="treatment-kicker">{treatment.category}</p>

            <h1 className="treatment-title">{treatment.name}</h1>

            <p className="treatment-benefit">{treatment.shortBenefit}</p>

            <div className="treatment-hero-actions">
              <Link to="/rezervacija" className="treatment-cta treatment-cta-primary">
                Rezervirajte termin
                <span className="treatment-cta-arrow">→</span>
              </Link>
              <Link to="/cjenik" className="treatment-cta treatment-cta-secondary">
                Pogledajte cjenik
              </Link>
            </div>
          </div>

          <div className="treatment-hero-visual">
            <img src={treatment.heroImage} alt={treatment.name} fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* CIJENA - odmah ispod hero-a */}
      {pricing && (
        <section className="treatment-pricing section">
          <div className="container treatment-pricing-grid">
            <div className="treatment-pricing-image">
              <img
                src={treatment.pricingImage || treatment.heroImage}
                alt={treatment.name}
                loading="lazy"
              />
            </div>

            <div className="treatment-pricing-content">
              <p className="treatment-section-kicker treatment-section-kicker-left">CIJENA</p>
              <h2 className="treatment-pricing-title">
                Od <em>{getStartingPrice(pricing)}€</em>
              </h2>

              <div className="treatment-pricing-tiers">
                {pricing.kind === 'simple' &&
                  pricing.tiers.map((tier) => (
                    <div className="treatment-tier-row" key={tier.label}>
                      <span className="treatment-tier-label">{tier.label}</span>
                      <span className="treatment-tier-price">
                        {tier.oldPrice && (
                          <span className="treatment-tier-old">{tier.oldPrice}</span>
                        )}
                        <span className="treatment-tier-current">{tier.price}</span>
                      </span>
                    </div>
                  ))}

                {pricing.kind === 'grouped' && (
                  <p className="treatment-pricing-note">
                    Ovaj tretman ima više regija i paketa — pogledajte pun cjenik za detalje.
                  </p>
                )}
              </div>

              <div className="treatment-pricing-actions">
                <Link to="/cjenik" className="treatment-pricing-link">
                  Pogledajte pun cjenik →
                </Link>

              <Link to="/rezervacija" className="treatment-cta treatment-cta-primary">
                Rezervirajte termin
                <span className="treatment-cta-arrow">→</span>
              </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* O TRETMANU + KOME JE NAMIJENJENO */}
      <section className="treatment-about section">
        <div className="container treatment-about-grid">
          <div className="treatment-about-column">
            <p className="treatment-section-kicker treatment-section-kicker-left">O TRETMANU</p>
            <p className="treatment-description treatment-description-lead">
              {treatment.description}
            </p>

            {treatment.highlights && (
              <div className="treatment-highlights">
                {treatment.highlights.map((point) => (
                  <span className="treatment-highlight-chip" key={point}>
                    <span className="treatment-highlight-check">✓</span>
                    {point}
                  </span>
                ))}
              </div>
            )}
          </div>

          {treatment.forWhom && (
            <div className="treatment-about-column treatment-about-column-forwhom">
              <span className="treatment-quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="treatment-section-kicker treatment-section-kicker-left">
                KOME JE TRETMAN NAMIJENJEN?
              </p>
              <p className="treatment-description">{treatment.forWhom}</p>
            </div>
          )}
        </div>
      </section>

      {/* PROCES */}
      {treatment.process && (
        <section className="treatment-process section">
          <div className="container">
            <p className="treatment-section-kicker treatment-section-kicker-dark">
              KAKO IZGLEDA POSTUPAK?
            </p>

            <div className="treatment-process-steps">
              {treatment.process.map((step, index) => (
                <div className="treatment-process-step" key={step.title}>
                  <span className="treatment-process-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="treatment-process-title">{step.title}</h3>
                  <p className="treatment-process-text">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DODATNE SEKCIJE (varira po tretmanu) */}
      {treatment.extraSections?.map((section) => (
        <section className="treatment-extra section" key={section.title}>
          <div className="container treatment-extra-inner">
            <h3 className="treatment-extra-title">{section.title}</h3>
            <p className="treatment-extra-text">{section.text}</p>
          </div>
        </section>
      ))}

      {/* FAQ */}
      {treatment.faq && (
        <section className="treatment-faq-section section">
          <div className="container treatment-faq-inner">
            <p className="treatment-section-kicker">NAJČEŠĆA PITANJA</p>

            <div className="treatment-faq-list">
              {treatment.faq.map((item, index) => (
                <FaqItem item={item} index={index} key={item.question} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}