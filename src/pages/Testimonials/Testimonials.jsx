import { useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Monika Mamić',
    text: 'Tretmani bezbolni, hvala sto ste mi omogucili ljeto bez celulita ♥️♥️ sve preporuke!',
  },
  {
    name: 'Ines Senecic',
    text: 'Top ordinacija, tretmani su top, Zvonimir je super u svom poslu sa puno znanja. Atmosfera je ugodna i opuštena! 🙂',
  },
  {
    name: 'Tomo Bulić',
    text: 'Osoblje profesionalno, usluga na nivou, sve pohvale!',
  },
  {
    name: 'Tihana Kordić',
    text: 'Fantastični tretmani, odnosno rezultati i još bolje osoblje! 🥂',
  },
  {
    name: 'Marko Osmakcic',
    text: 'Profesionalni liječnički team i odlični tretmani. Prezadovoljan sam!',
  },
  {
    name: 'Dragica Mihaljević',
    text: 'Doktor presimpatičan, odlična usluga uz vidljive rezultate! U svakom slučaju, sve preporuke, isplati se 👍',
  },
];

function Stars() {
  return (
    <span className="testimonial-stars" aria-label="5 od 5 zvjezdica">
      ★★★★★
    </span>
  );
}

export default function Testimonials() {
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
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials section" ref={sectionRef}>
      <div className="container testimonials-intro reveal">
        <p className="testimonials-kicker">RECENZIJE</p>
        <h2 className="testimonials-title">
          Što naši pacijenti <em>kažu</em>?
        </h2>
        <div className="testimonials-rating">
          <Stars />
          <span className="testimonials-rating-text">5/5 · Više od 1000 zadovoljnih pacijenata</span>
        </div>
      </div>

      <div className="container">
        <div className="testimonials-grid">
          {testimonials.map((review, index) => (
            <div
              className="testimonial-card reveal"
              key={review.name}
              style={{ transitionDelay: `${0.1 + index * 0.06}s` }}
            >
              <Stars />
              <p className="testimonial-text">{review.text}</p>
              <span className="testimonial-name">{review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}