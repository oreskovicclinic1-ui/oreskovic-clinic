import { Link } from 'react-router-dom';
import './PricingDetailModal.css';

export default function PricingDetailModal({ category, onClose }) {
  if (!category) return null;

  return (
    <div className="cjenik-detail-overlay" onClick={onClose}>
      <div className="cjenik-detail-panel" onClick={(e) => e.stopPropagation()}>
        <button className="cjenik-detail-close" aria-label="Zatvori" onClick={onClose}>
          ✕
        </button>

        <div className="cjenik-detail-image">
          <img src={`/treatments/${category.id}.webp`} alt={category.label} />
        </div>

        <div className="cjenik-detail-content">
          {category.badge && <span className="cjenik-detail-badge">{category.badge}</span>}
          <h2 className="cjenik-detail-title">{category.label}</h2>
          <p className="cjenik-detail-description">{category.description}</p>

          {category.kind === 'simple' && (
            <div className="cjenik-detail-tiers">
              {category.tiers.map((tier) => (
                <div className="cjenik-tier-row" key={tier.label}>
                  <span className="cjenik-tier-label">{tier.label}</span>
                  <span className="cjenik-tier-price">
                    {tier.oldPrice && <span className="cjenik-tier-old">{tier.oldPrice}</span>}
                    <span className="cjenik-tier-current">{tier.price}</span>
                  </span>
                </div>
              ))}
            </div>
          )}

          {category.kind === 'grouped' &&
            category.groups.map((group) => (
              <div className="cjenik-detail-group" key={group.groupLabel}>
                <h3 className="cjenik-detail-group-title">{group.groupLabel}</h3>
                <div className="cjenik-detail-tiers">
                  {group.items.map((item) => (
                    <div className="cjenik-tier-row" key={item.label}>
                      <span className="cjenik-tier-label">{item.label}</span>
                      <span className="cjenik-tier-price">
                        {item.oldPrice && <span className="cjenik-tier-old">{item.oldPrice}</span>}
                        <span className="cjenik-tier-current">{item.price}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          <Link to="/rezervacija" className="cjenik-detail-cta">
            Rezervirajte termin
          </Link>
        </div>
      </div>
    </div>
  );
}