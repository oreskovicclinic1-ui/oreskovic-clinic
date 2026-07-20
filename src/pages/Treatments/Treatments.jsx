import { useEffect, useRef, useState } from 'react';
import './Treatments.css';

const treatments = [
  { name: 'Anti age tretmani', category: 'Lice', slug: 'anti-age' },
  { name: 'Botox', category: 'Lice', slug: 'botox' },
  { name: 'Uklanjanje podočnjaka', category: 'Lice', slug: 'podocnjaci' },
  { name: 'Uklanjanje podbratka', category: 'Lice', slug: 'podbradak' },
  { name: 'Povećavanje usana filerima', category: 'Lice', slug: 'usne-fileri' },
  { name: 'Estetika i kozmetologija', category: 'Lice', slug: 'estetika-kozmetologija' },
  { name: 'Anti celulitni tretmani', category: 'Tijelo', slug: 'celulit' },
  { name: 'Tretmani mršavljenja', category: 'Tijelo', slug: 'mrsavljenje' },
  { name: 'Trajno uklanjanje dlačica', category: 'Tijelo', slug: 'dlacice' },
  { name: 'Tretmani jačanja mišića', category: 'Tijelo', slug: 'jacanje-misica' },
  { name: 'Podizanje i učvršćivanje stražnjice', category: 'Tijelo', slug: 'straznjica' },
  { name: 'Terapija ozljeda', category: 'Zdravstveni tretman', slug: 'terapija-ozljeda' },
  { name: 'Vitaminske infuzije', category: 'Zdravstveni tretman', slug: 'vitaminske-infuzije' },
  { name: 'Test intolerancije na hranu', category: 'Zdravstveni tretman', slug: 'test-intolerancija' },
  { name: 'Test na alergije', category: 'Zdravstveni tretman', slug: 'test-alergije' },
  { name: 'Opća medicina i dijagnostika', category: 'Zdravstveni tretman', slug: 'opca-medicina' },
  { name: 'Medicinske intervencije i terapije', category: 'Zdravstveni tretman', slug: 'medicinske-intervencije' },
  { name: 'Fizikalna i regenerativna terapija', category: 'Zdravstveni tretman', slug: 'fizikalna-terapija' },
  { name: 'Nutricionizam i savjetovanje', category: 'Zdravstveni tretman', slug: 'nutricionizam' },
];

const loopTreatments = [...treatments, ...treatments];

const AUTOPLAY_SPEED = 0.6; // pixels per animation frame
const DRAG_THRESHOLD = 5; // px of movement before a click becomes a drag

export default function Treatments() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0, pointerId: null });
  const [isDragging, setIsDragging] = useState(false);

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
    dragStartRef.current = { x: e.clientX, scrollLeft: track.scrollLeft, pointerId: e.pointerId };
    hasDraggedRef.current = false;
  }

  function handlePointerMove(e) {
    const track = trackRef.current;
    const { x, scrollLeft, pointerId } = dragStartRef.current;
    if (pointerId === null) return;

    const delta = e.clientX - x;

    if (!isDraggingRef.current) {
      if (Math.abs(delta) < DRAG_THRESHOLD) return;
      isDraggingRef.current = true;
      hasDraggedRef.current = true;
      setIsDragging(true);
      track.setPointerCapture(pointerId);
    }

    track.scrollLeft = scrollLeft - delta;
  }

  function handlePointerUp() {
    isDraggingRef.current = false;
    setIsDragging(false);
    dragStartRef.current.pointerId = null;
  }

  function handleClickCapture(e) {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedRef.current = false;
    }
  }

  return (
    <section className="treatments section" ref={sectionRef} id="tretmani">
      <div className="container treatments-intro reveal">
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

      <div className="container reveal reveal-2">
        <div
          className={`treatments-track ${isDragging ? 'is-dragging' : ''}`}
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onClickCapture={handleClickCapture}
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