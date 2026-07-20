import { useEffect, useRef, useState } from 'react';
import './Results.css';

const results = [
  { title: 'Uklanjanje podočnjaka', image: '/results/01.webp' },
  { title: 'Tretmani mršavljenja', image: '/results/02.webp' },
  { title: 'Bore na čelu', image: '/results/03.webp' },
  { title: 'Tretmani mršavljenja', image: '/results/04.webp' },
  { title: 'Uklanjanje celulita', image: '/results/05.webp' },
  { title: 'Tretmani mršavljenja', image: '/results/06.webp' },
];

const loopResults = [...results, ...results];

const AUTOPLAY_SPEED = 0.6;

export default function Results() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
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
    <section className="results section" ref={sectionRef}>
      <div className="container results-intro reveal">
        <p className="results-kicker">REZULTATI</p>
        <h2 className="results-title">
          Rezultati koji <em>govore</em> sami za sebe.
        </h2>
        <p className="results-subtitle">
          Stvarni pacijenti, stvarne promjene — pogledajte kako izgledaju naši tretmani u praksi.
        </p>
      </div>

      <div className="container">
        <div
          className={`results-track ${isDragging ? 'is-dragging' : ''}`}
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => (isPausedRef.current = false)}
        >
          {loopResults.map((result, index) => (
            <div className="result-card" key={`${result.title}-${index}`}>
              <img
                className="result-card-image"
                src={result.image}
                alt={result.title}
                draggable={false}
              />
              <span className="result-card-title">{result.title}</span>
            </div>
          ))}
        </div>

        <a href="/rezultati" className="results-cta">
          Pogledajte sve rezultate →
        </a>
      </div>
    </section>
  );
}