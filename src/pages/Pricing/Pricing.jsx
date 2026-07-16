
import pricing1 from '../../assets/pricing1.webp';
import pricing2 from '../../assets/pricing2.webp';
import pricing1mobile from '../../assets/pricing1mobile.png';
import pricing2mobile from '../../assets/pricing2mobile.png';
import './Pricing.css';

// To add/edit treatments or prices later: just edit these two arrays.
// Each treatment can have one or more tiers (single session, packages).
// oldPrice is optional - only set it when the tier is on sale.

const healthTherapies = {
  title: 'Zdravstvene terapije',
  imageMobile: pricing1mobile,
  imageDesktop: pricing1,
  moreInfoHref: '/tretmani/terapija-ozljeda',
  treatments: [
    {
      name: 'Test intolerancije na hranu + status vitamina i minerala',
      tiers: [{ label: '1 test', price: '240€', oldPrice: '360€' }],
    },
    {
      name: 'Test na alergije + status vitamina i minerala',
      tiers: [{ label: '1 test', price: '240€', oldPrice: '360€' }],
    },
    {
      name: 'Terapija ozljeda',
      tiers: [
        { label: '1 tretman', price: '40€' },
        { label: 'Paket 10+2 GRATIS', price: '400€' },
      ],
    },
    {
      name: 'Vitaminske infuzije',
      tiers: [
        { label: '1 tretman', price: '135€' },
        { label: 'Paket 12 infuzija', price: '1320€', oldPrice: '1620€' },
      ],
    },
  ],
};

const aestheticTreatments = {
  title: 'Estetski tretmani',
  imageMobile: pricing2mobile,
  imageDesktop: pricing2,
  moreInfoHref: '/tretmani/uklanjanje-podbratka',
  treatments: [
    {
      name: 'Uklanjanje podbratka',
      tiers: [
        { label: '1 tretman', price: '65€' },
        { label: 'Paket 10+2 GRATIS', price: '650€' },
        { label: 'Paket 14+6 GRATIS', price: '950€' },
      ],
    },
    {
      name: 'Tretmani mršavljenja',
      tiers: [
        { label: '1 tretman', price: '65€' },
        { label: 'Paket 10+2 GRATIS', price: '650€' },
        { label: 'Paket 14+6 GRATIS', price: '950€' },
      ],
    },
  ],
};

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

        <a href={category.moreInfoHref} className="pricing-panel-link">
          Više informacija →
        </a>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="pricing section">
      <div className="container pricing-intro">
        <p className="pricing-kicker">CJENIK</p>
        <h2 className="pricing-title">
          Jasne cijene, <em>bez</em> skrivenih troškova.
        </h2>
          <p className="trust-subtitle">
            Za točnu ponudu i konzultacije, slobodno nas kontaktirajte – rado ćemo vas uputiti na najbolji tretman za vas!
          </p>
      </div>

      <div className="container pricing-grid">
        <PricingPanel category={healthTherapies} imageSide="left" />
        <PricingPanel category={aestheticTreatments} imageSide="right" />
      </div>

      <div className="container pricing-footer">
        <a href="/cjenik" className="pricing-cta">
          Pogledajte cijene svih tretmana
        </a>
      </div>
    </section>
  );
}