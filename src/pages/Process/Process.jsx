import { useEffect, useRef } from 'react';
import './Process.css';

const steps = [
  { number: '01', title: 'Konzultacija', text: 'Razgovor i analiza vaših potreba.' },
  { number: '02', title: 'Procjena', text: 'Stručna procjena zdravstvenog stanja.' },
  { number: '03', title: 'Plan tretmana', text: 'Definiranje najbolje metode za vas.' },
  { number: '04', title: 'Izvođenje tretmana', text: 'Profesionalna, precizna procedura.' },
  { number: '05', title: 'Kontrola rezultata', text: 'Praćenje napretka i dugoročnog učinka.' },
];

export default function Process() {
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
    <section className="process section" ref={sectionRef}>
      <div className="container">
        <div className="process-intro reveal">
          <p className="process-kicker">KAKO IZGLEDA PROCES</p>
          <h2 className="process-title">
            Pet koraka do <em>rezultata</em> kojima možete vjerovati.
          </h2>
          <a href="/rezervacija" className="process-cta">
            Rezervirajte sad
          </a>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div
              className="process-step reveal"
              key={step.number}
              style={{ transitionDelay: `${0.15 + index * 0.08}s` }}
            >
              <div className="process-step-marker">
                <span className="process-step-number">{step.number}</span>
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}