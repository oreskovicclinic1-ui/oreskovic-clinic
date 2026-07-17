import { useEffect, useRef, useState } from 'react';
import FinalCta from '../FinalCta/Finalcta';
import './ResultsPage.css';
import backgroundImage from '../../assets/results-cover.webp';

// To add a new category later: just add one line here, and drop images
// in /public/results/{id}/1.jpg, 2.jpg, etc. up to {count}.
const categories = [
  { id: 'podbradak', label: 'Uklanjanje podbratka', count: 3 },
  { id: 'podocnjaci', label: 'Uklanjanje podočnjaka', count: 4 },
  { id: 'mrsavljenje', label: 'Tretmani mršavljenja', count: 8 },
  { id: 'celulit', label: 'Uklanjanje celulita', count: 4 },
  { id: 'bore', label: 'Uklanjanje bora', count: 4 },
  { id: 'terapija-ozljeda', label: 'Terapija ozljeda', count: 3 },
];

function buildImages() {
  const images = [];
  categories.forEach((category) => {
    for (let i = 1; i <= category.count; i++) {
      images.push({
        src: `/results/${category.id}/${i}.webp`,
        categoryId: category.id,
        categoryLabel: category.label,
      });
    }
  });
  return images;
}

const allImages = buildImages();
const PAGE_SIZE = 12;

export default function ResultsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const filterRef = useRef(null);

  const filteredImages =
    activeCategory === 'all'
      ? allImages
      : allImages.filter((image) => image.categoryId === activeCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const activeCategoryLabel =
    activeCategory === 'all'
      ? 'Filter po tretmanu'
      : categories.find((c) => c.id === activeCategory)?.label;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((i) => (i + 1) % filteredImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, filteredImages.length]);

  // Close the filter dropdown on outside click or Escape.
  useEffect(() => {
    if (!isFilterOpen) return;

    function handleClickOutside(e) {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setIsFilterOpen(false);
      }
    }

    function handleEscape(e) {
      if (e.key === 'Escape') setIsFilterOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isFilterOpen]);

  function selectCategory(id) {
    setActiveCategory(id);
    setIsFilterOpen(false);
  }

  return (
    <>
      <section className="results-page-hero">
        <img
        className="results-page-hero-bg"
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        />        
        <div className="results-page-hero-wash"></div>

        <div className="results-page-hero-blobs" aria-hidden="true">
          <span className="results-blob results-blob-1"></span>
          <span className="results-blob results-blob-2"></span>
        </div>

        <div className="container results-page-hero-inner results-fade-in">
          <h1 className="results-page-title">
            Rezultati koji <em>govore</em> sami za sebe
          </h1>

          <p className="results-page-intro">
            Pogledajte stvarne rezultate naših pacijenata, po tretmanu. Svaka fotografija je
            stvaran ishod, ne stock materijal.
          </p>

          <a href="/rezervacija" className="results-page-hero-cta">
            Rezervirajte termin
          </a>
        </div>
      </section>

      <section className="results-page-gallery section">
        <div className="container">
          <div className="results-filter-bar">
            <button
              className={`results-filter-pill ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => selectCategory('all')}
            >
              Svi rezultati
            </button>

            <div className="results-filter-dropdown-wrap" ref={filterRef}>
              <button
                className={`results-filter-pill results-filter-toggle ${
                  activeCategory !== 'all' ? 'is-active' : ''
                }`}
                onClick={() => setIsFilterOpen((open) => !open)}
              >
                <span className="results-filter-toggle-label">{activeCategoryLabel}</span>
                <svg
                  className={`results-filter-chevron ${isFilterOpen ? 'is-open' : ''}`}
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

              {isFilterOpen && (
                <div className="results-filter-dropdown">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`results-filter-option ${
                        activeCategory === category.id ? 'is-active' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        selectCategory(category.id);
                      }}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {isFilterOpen && (
            <div
              className="results-filter-backdrop"
              onClick={() => setIsFilterOpen(false)}
            ></div>
          )}

          <div className="results-grid">
            {visibleImages.map((image, index) => (
              <button
                className="results-grid-item results-fade-in"
                key={image.src}
                style={{ animationDelay: `${(index % PAGE_SIZE) * 0.04}s` }}
                onClick={() => setLightboxIndex(index)}
              >
                <img src={image.src} alt={image.categoryLabel} loading="lazy" />
                {activeCategory === 'all' && (
                  <span className="results-grid-item-label">{image.categoryLabel}</span>
                )}
              </button>
            ))}
          </div>

          {hasMore && (
            <div className="results-load-more">
              <button
                className="results-load-more-btn"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              >
                Prikaži još
              </button>
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="results-lightbox" onClick={() => setLightboxIndex(null)}>
          <button
            className="results-lightbox-close"
            aria-label="Zatvori"
            onClick={() => setLightboxIndex(null)}
          >
            ✕
          </button>

          <button
            className="results-lightbox-nav results-lightbox-prev"
            aria-label="Prethodna slika"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);
            }}
          >
            ‹
          </button>

          <div className="results-lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <img
              className="results-lightbox-image"
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].categoryLabel}
              key={filteredImages[lightboxIndex].src}
            />
            <p className="results-lightbox-caption">
              {filteredImages[lightboxIndex].categoryLabel} · {lightboxIndex + 1} /{' '}
              {filteredImages.length}
            </p>
          </div>

          <button
            className="results-lightbox-nav results-lightbox-next"
            aria-label="Sljedeća slika"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i + 1) % filteredImages.length);
            }}
          >
            ›
          </button>
        </div>
      )}

      <FinalCta />
    </>
  );
}