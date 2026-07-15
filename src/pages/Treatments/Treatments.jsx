import { useEffect, useRef, useState } from 'react';
import './Treatments.css';

const treatments = [
  { name: 'Anti age tretmani', category: 'Lice', slug: 'anti-age' },
//   { name: 'Botox', category: 'Lice', slug: 'botox' },
//   { name: 'Dermalni fileri', category: 'Lice', slug: 'dermalni-fileri' },
//   { name: 'Skin boosteri', category: 'Lice', slug: 'skin-boosteri' },
//   { name: 'Hydrafacial', category: 'Lice', slug: 'hydrafacial' },
//   { name: 'Uklanjanje podočnjaka', category: 'Lice', slug: 'uklanjanje-podocnjaka' },
  { name: 'Uklanjanje podbratka', category: 'Lice', slug: 'uklanjanje-podbratka' },
  { name: 'Anti celulitni tretmani', category: 'Tijelo', slug: 'celulit' },
  { name: 'Tretmani mršavljenja', category: 'Tijelo', slug: 'mrsavljenje' },
  { name: 'Trajno uklanjanje dlačica', category: 'Tijelo', slug: 'uklanjanje-dlacica' },
  { name: 'Terapija ozljeda', category: 'Zdravstveni tretman', slug: 'terapija-ozljeda' },
  { name: 'Vitaminske infuzije', category: 'Zdravstveni tretman', slug: 'vitaminske-infuzije' },
  { name: 'Test intolerancije na hranu', category: 'Zdravstveni tretman', slug: 'intolerancija' },
  { name: 'Test na alergije', category: 'Zdravstveni tretman', slug: 'alergije' },
];

// Duplicated once so the strip can loop seamlessly: when it scrolls past
// the first full set, we silently jump back by exactly that width.
const loopTreatments = [...treatments, ...treatments];

const AUTOPLAY_SPEED = 0.6; // pixels per animation frame

export default function Treatments() {
  const trackRef = useRef(null);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId;

    function tick() {
      if (!isPausedRef.current && !isDraggingRef.current) {
        track.scrollLeft += AUTOPLAY_SPEED;

        const singleSetWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= singleSetWidth) {
          track.scrollLeft -= singleSetWidth;
        }
      }
      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  function handlePointerDown(e) {
    const track = trackRef.current;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, scrollLeft: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    if (!isDraggingRef.current) return;
    const track = trackRef.current;
    const delta = e.clientX - dragStartRef.current.x;
    track.scrollLeft = dragStartRef.current.scrollLeft - delta;
  }

  function handlePointerUp() {
    isDraggingRef.current = false;
    setIsDragging(false);
  }

  return (
    <section className="treatments section">
      <div className="container treatments-intro">
        <p className="treatments-kicker">TRETMANI</p>

        <h2 className="treatments-title">
          Dobrodošli u polikliniku koja kombinira medicinski pristup i naprednu tehnologiju
          kako bi pružila <em>konkretna</em> rješenja za vaše tegobe.
        </h2>

        <div className="treatments-focus">
          <span>Rehabilitacija i oporavak od ozljeda</span>
          <span>Funkcionalno zdravlje organizma</span>
          <span>Dijagnostika i testiranja</span>
          <span>Estetski tretmani s dugoročnim rezultatima</span>
        </div>
      </div>

      <div className="container">
        <div
          className={`treatments-track ${isDragging ? 'is-dragging' : ''}`}
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => (isPausedRef.current = false)}
        >
          {loopTreatments.map((treatment, index) => (
            <a
              href={`/tretmani/${treatment.slug}`}
              className="treatment-card"
              key={`${treatment.slug}-${index}`}
              draggable={false}
            >
              <img
                className="treatment-card-image"
                src={`/treatments/${treatment.slug}.webp`}
                alt={treatment.name}
                draggable={false}
              />
              <div className="treatment-card-overlay"></div>
              <span className="treatment-card-tag">{treatment.category}</span>
              <div className="treatment-card-footer">
                <span className="treatment-card-name">{treatment.name}</span>
                <span className="treatment-card-link">Više detalja →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}