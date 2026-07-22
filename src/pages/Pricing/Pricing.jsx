import { useEffect, useRef } from 'react';
import pricing1 from '../../assets/pricing1.webp';
import pricing2 from '../../assets/pricing2.webp';
import pricing1mobile from '../../assets/pricing1mobile.webp';
import pricing2mobile from '../../assets/pricing2mobile.webp';
import { getCategoryById } from '../../data/pricingData';
import './Pricing.css';
import { Link } from 'react-router-dom';

const healthIds = ['test-intolerancija', 'terapija-ozljeda', 'vitaminske-infuzije'];
const aestheticIds = ['podbradak', 'mrsavljenje'];

function buildPanel({ title, imageMobile, imageDesktop, ids }) {
  const categories = ids.map((id) => getCategoryById(id)).filter(Boolean);

  return {
    title,
    imageMobile,
    imageDesktop,
    moreInfoHref: `/tretmani/${ids[0]}`,
    treatments: categories.map((category) => ({
      name: category.label,
      tiers: category.kind === 'simple' ? category.tiers : [],
    })),
  };
}

const healthTherapies = buildPanel({
  title: 'Zdravstvene terapije',
  imageMobile: pricing1mobile,
  imageDesktop: pricing1,
  ids: healthIds,
});

const aestheticTreatments = buildPanel({
  title: 'Estetski tretmani',
  imageMobile: pricing2mobile,
  imageDesktop: pricing2,
  ids: aestheticIds,
});

function PricingPanel({ category, imageSide }) {
  return (
    <div className={`pricing-panel pricing-panel-${imageSide}`}>
      <div className="pricing-panel-image">
        <picture>
          <source media="(min-width: 900px)" srcSet={category.imageDesktop} />
          <img src={category.imageMobile} alt={category.title} />
        </picture>
      </div>

      <div className="pricing-panel-content">
        <h3 className="pricing-panel-title">{category.title}</h3>

        <div className="pricing-treatments">
          {category.treatments.map((treatment) => (
            <div className="pricing-treatment" key={treatment.name}>
              <h4 className="pricing-treatment-name">{treatment.name}</h4>

              {treatment.tiers.map((tier) => (
                <div className="pricing-tier" key={tier.label}>
                  <span className="pricing-tier-label">{tier.label}</span>
                  <span className="pricing-tier-price">
                    {tier.oldPrice && <span className="pricing-tier-old">{tier.oldPrice}</span>}
                    <span className="pricing-tier-current">{tier.price}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* <Link to={category.moreInfoHref} className="pricing-panel-link">
          Više informacija →
        </Link> */}
      </div>
    </div>
  );
}

export default function Pricing() {
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
    <section className="pricing section" ref={sectionRef}>
      <div className="container pricing-intro reveal">
        <p className="pricing-kicker">CJENIK</p>
        <h2 className="pricing-title">
          Jasne cijene, <em>bez</em> skrivenih troškova.
        </h2>
        <p className="pricing-subtitle">
          Za točnu ponudu i konzultacije, slobodno nas kontaktirajte – rado ćemo vas uputiti na
          najbolji tretman za vas!
        </p>
      </div>

      <div className="container pricing-grid reveal reveal-2">
        <PricingPanel category={healthTherapies} imageSide="left" />
        <PricingPanel category={aestheticTreatments} imageSide="right" />
      </div>

      <div className="container pricing-footer">
      <Link to="/cjenik" className="pricing-cta">
        Pogledajte cijene svih tretmana
      </Link>
      </div>
    </section>
  );
}