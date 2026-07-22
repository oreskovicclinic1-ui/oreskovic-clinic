import { useEffect, useMemo, useRef, useState } from 'react';
import FinalCta from '../FinalCta/FinalCta';
import './CjenikPage.css';
import backgroundImage from '../../assets/cjenik-cover.webp';
import { categories, getStartingPrice, groupLabels } from '../../data/pricingData';
import { Link } from 'react-router-dom';

export default function CjenikPage() {
  const [query, setQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const menuRef = useRef(null);

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return categories;
    const q = query.toLowerCase();
    return categories.filter((c) => c.label.toLowerCase().includes(q));
  }, [query]);

  const selectedCategory = categories.find((c) => c.id === selectedId) || null;

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key === 'Escape') setIsMenuOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!selectedId) return;

    function handleEscape(e) {
      if (e.key === 'Escape') setSelectedId(null);
    }

    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedId]);

  function openCategory(id) {
    setSelectedId(id);
    setIsMenuOpen(false);
  }

  return (
    <>
      <section className="cjenik-page-hero">
        <img className="cjenik-page-hero-bg" src={backgroundImage} alt="" aria-hidden="true" fetchPriority="high" />
        <div className="cjenik-page-hero-wash"></div>

        <div className="cjenik-page-hero-blobs" aria-hidden="true">
          <span className="cjenik-blob cjenik-blob-1"></span>
          <span className="cjenik-blob cjenik-blob-2"></span>
        </div>

        <div className="container cjenik-page-hero-inner cjenik-fade-in">
          <h1 className="cjenik-page-title">
            Jasne cijene, <em>bez</em> skrivenih troškova
          </h1>
          <p className="cjenik-page-intro">
            Pregledajte cijene svih naših tretmana i usluga, pojedinačno ili u paketima. Plaćanje svim karticama na do 24 rate.
          </p>
        <Link to="/rezervacija" className="cjenik-page-hero-cta">
          Rezervirajte termin
        </Link>
        </div>
      </section>

      <section className="cjenik-page-browser section">
        <div className="container">
          <div className="cjenik-toolbar">
            <div className="cjenik-search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M11.5 11.5L15 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Pretraži tretmane..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="cjenik-menu-wrap" ref={menuRef}>
              <button className="cjenik-menu-toggle" onClick={() => setIsMenuOpen((o) => !o)}>
                Pregledaj kategorije
                <svg
                  className={`cjenik-menu-chevron ${isMenuOpen ? 'is-open' : ''}`}
                  width="12"
                  height="12"
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

              {isMenuOpen && (
                <div className="cjenik-mega-menu">
                  {Object.entries(groupLabels).map(([groupId, groupLabel]) => (
                    <div className="cjenik-mega-column" key={groupId}>
                      <span className="cjenik-mega-heading">{groupLabel}</span>
                      {categories
                        .filter((c) => c.group === groupId)
                        .map((c) => (
                          <button key={c.id} onClick={() => openCategory(c.id)}>
                            {c.label}
                          </button>
                        ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {isMenuOpen && <div className="cjenik-backdrop" onClick={() => setIsMenuOpen(false)}></div>}

          {filteredCategories.length === 0 ? (
            <p className="cjenik-empty">Nema tretmana koji odgovaraju pretrazi „{query}“.</p>
          ) : (
            <div className="cjenik-grid">
              {filteredCategories.map((category, index) => (
                <button
                  key={category.id}
                  className="cjenik-card cjenik-fade-in"
                  style={{ animationDelay: `${(index % 12) * 0.04}s` }}
                  onClick={() => openCategory(category.id)}
                >
                  <img src={`/treatments/${category.id}.webp`} alt={category.label} loading="lazy" className="cjenik-card-image" />
                  <div className="cjenik-card-overlay"></div>
                  {category.badge && <span className="cjenik-card-badge">{category.badge}</span>}
                  <div className="cjenik-card-footer">
                    <span className="cjenik-card-name">{category.label}</span>
                    <span className="cjenik-card-price">od {getStartingPrice(category)}€</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedCategory && (
        <div className="cjenik-detail-overlay" onClick={() => setSelectedId(null)}>
          <div className="cjenik-detail-panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="cjenik-detail-close"
              aria-label="Zatvori"
              onClick={() => setSelectedId(null)}
            >
              ✕
            </button>

            <div className="cjenik-detail-image">
              <img src={`/treatments/${selectedCategory.id}.webp`} alt={selectedCategory.label} />
            </div>

            <div className="cjenik-detail-content">
              {selectedCategory.badge && (
                <span className="cjenik-detail-badge">{selectedCategory.badge}</span>
              )}
              <h2 className="cjenik-detail-title">{selectedCategory.label}</h2>
              <p className="cjenik-detail-description">{selectedCategory.description}</p>

              {selectedCategory.kind === 'simple' && (
                <div className="cjenik-detail-tiers">
                  {selectedCategory.tiers.map((tier) => (
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

              {selectedCategory.kind === 'grouped' &&
                selectedCategory.groups.map((group) => (
                  <div className="cjenik-detail-group" key={group.groupLabel}>
                    <h3 className="cjenik-detail-group-title">{group.groupLabel}</h3>
                    <div className="cjenik-detail-tiers">
                      {group.items.map((item) => (
                        <div className="cjenik-tier-row" key={item.label}>
                          <span className="cjenik-tier-label">{item.label}</span>
                          <span className="cjenik-tier-price">
                            {item.oldPrice && (
                              <span className="cjenik-tier-old">{item.oldPrice}</span>
                            )}
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
      )}

      <FinalCta />
    </>
  );
}