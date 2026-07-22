import { useEffect, useRef, useState } from 'react';
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
  {
    name: 'Nikola Šaponja',
    location: 'Opatija',
    text: 'Nakon ozljede koja me je potpuno zaustavila u treninzima, došao sam u ovu kliniku jer nisam mogao normalno trenirati. Bolovi u ramenu i laktu bili su jaki i nisu prolazili. Od samog početka osjetio sam da sam na pravom mjestu. Stručan i srdačan tim. Već nakon nekoliko tretmana bol se značajno smanjila, a nakon završenog programa potpuno sam se oporavio. Danas treniram punom snagom, bez bola i s boljom pokretljivošću nego prije ozljede. Toplo preporučujem ovu kliniku!',
  },
  {
    name: 'Marko Hodak',
    location: 'Opatija',
    text: 'Odlična fizikalna ordinacija s vrhunskom opremom i izuzetno stručnim i ljubaznim osobljem. Već nakon prvog tretmana je vidna razlika u smanjenju otekline zgloba i napetosti u tetivi. Olakšanje u hodu je primjetno. Topla preporuka svima koji traže kvalitetnu i učinkovitu rehabilitaciju.',
  },
  {
    name: 'Martin Ribic',
    location: 'Opatija',
    text: 'Zbog teške ozljede koljena bio sam u situaciji da su mi preporučene čak dvije operacije. Na preporuku sam došao u Orešković clinic na INDIBA tretman – i to mi je bila najbolja odluka. Već nakon nekoliko tretmana osjetio sam veliko poboljšanje, koljeno je postalo stabilnije i pokretljivije, a najvažnije od svega – uspio sam se vratiti treninzima bez operacije. Stručnost, profesionalnost i pristup cijelog tima su na vrhunskoj razini.',
  },
  {
    name: 'Luka',
    location: 'Opatija',
    text: 'Preporučam svakome tko je imao nekakvu ozljedu ili operaciju poput mene. Mjesec i pol nakon kompleksne operacije ramena nisam mogao puno micat tom rukom. Nakon par tretmana imam osjecaj da sam operirao ruku pred pola godine. Preporuke svakome definitivno.',
  },
  {
    name: 'Lalaloopsy Psy',
    location: 'Opatija',
    text: 'Prezadovoljna sam rezultatima tretmana i stručnim te izuzetno ljubaznim osobljem koje mi je bilo posvećeno 110%. Izgledam 15 godina mlađe, od glave do pete - bez pretjerivanja. Hvala! Predivno iskustvo iz svakog aspekta.',
  },
  {
    name: 'Karla Baličevac',
    location: 'Opatija',
    text: 'Već mjesecima sam imala bolove u vratu i ramenima, najviše nakon posla. Već nakon nekoliko tretmana napetost se dosta smanjila, sve preporuke!',
  },
  {
    name: 'Noa Marijanović',
    location: 'Opatija',
    text: 'Odlična klinika u centru Opatije! Prostor je moderan i ugodan, osoblje izuzetno ljubazno i stručno. Tretmani su bezbolni, rezultati brzo vidljivi, a ponuda je stvarno raznolika – od estetskih do medicinskih. Definitivno mjesto koje bih preporučio svima!',
  },
  {
    name: 'Ivor Poljak',
    location: 'Opatija',
    text: 'Stručno i ljubazno osoblje, ugodan ambijent i vrhunski tretmani. Definitivno mjesto gdje ću se vratiti!',
  },
  {
    name: 'Ante Debeuc',
    location: 'Opatija',
    text: 'Nakon 20 odrađenih tretmana, izgubio sam 17cm obujma u struku. Svaka preporuka. Vlasnik je jako susretljiv i ljubazan.',
  },
  {
    name: 'Mia Miskovic',
    location: 'Opatija',
    text: 'Došla sam zbog strašnih bolova u leđima koji su me mučili svaki dan, pogotovo kad bih duže sjedila. Ovi tretmani su top, ako tražite nešto što fakat funkcionira, ne tražite dalje.',
  },
  {
    name: 'Patrik Neral',
    location: 'Opatija',
    text: 'Odlična usluga!',
  },
  {
    name: 'Matija',
    location: 'Zagreb',
    text: 'Odlično iskustvo! Klinika je izuzetno profesionalna, prostor je moderan i besprijekorno čist, a osoblje ljubazno i stručno. Sve su mi detaljno objasnili prije tretmana, što mi je ulilo dodatno povjerenje. Rezultati su stvarno iznad očekivanja – vidi se da koriste kvalitetne proizvode i najnovije metode. Definitivno preporučujem svima koji traže pouzdano mjesto za estetske i beauty tretmane.',
  },
  {
    name: 'Svetislav Josimovic',
    location: 'Zagreb',
    text: 'Izuzetno ugodno iskustvo u Orešković Clinic. Profesionalan pristup, ljubazno osoblje i vrhunska usluga od samog dolaska do završetka pregleda. Posebnu pohvalu zaslužuje djelatnica Lea koja je svojom susretljivošću, ljubaznošću i profesionalnošću učinila cijelo iskustvo još ugodnijim.',
  },
  {
    name: 'Lucija',
    location: 'Zagreb',
    text: 'Vrlo pozitivno iskustvo. Ugodan prostor, stručan tim i odlična atmosfera. Terapije su prilagođene mom stanju i stvarno djeluju. Nakon nekoliko dolazaka bol se značajno smanjila. Posebna pohvala mladoj djelatnici na pristupu, strpljenju i profesionalnosti :)',
  },
  {
    name: 'Ksenija',
    location: 'Zagreb',
    text: 'Svaka pohvala za sve djelatnice klinike Orešković jer su me oduševile svojim znanjem, pristupom, savjetima i profesionalnošću... sestra Sara, Lea, Monika, Mihaela... puno vam hvala za sve ostvarene rezultate i ciljeve koje sam zacrtala jer ste mi baš vi pomogle da to i ostvarim.',
  },
  {
    name: 'Ivana T',
    location: 'Zagreb',
    text: 'Izuzetno ljubazne i uslužne djelatnice tako da dok odrađujete tretman lijepo se i družite pa vrijeme brzo prođe. Jako sam zadovoljna s INDIBA i TESLA rezultatima, celulit se smanjio, a koža je glađa. Pohvale prvenstveno za cure i njihov pristup klijentima.',
  },
  {
    name: 'Lara M',
    location: 'Zagreb',
    text: 'Radila sam test intolerancije na hranu u Orešković Clinic i iskustvo je bilo odlično. Brz dogovor termina, sam test traje oko 20 minuta i odmah sam dobila rezultate i preporuke. Preporučujem svima koji žele saznati što im smeta u prehrani.',
  },
  {
    name: 'Ena Franja',
    location: 'Zagreb',
    text: 'Nakon puno različitih pretraga i odlazaka liječnicima, i dalje nisam znala zašto me stalno boli trbuh. Na kraju sam odlučila otići u Orešković clinic i tamo su mi napravili test intolerancije i napokon sam otkrila što mi zapravo smeta. Od kada sam dobila rezultate i prilagodila prehranu, bolovi su skroz nestali. Osoblje je ljubazno, sve su mi detaljno objasnili i stvarno se vidi da im je stalo do pacijenata.',
  },
  {
    name: 'Marko Crnobrnja',
    location: 'Zagreb',
    text: 'Odlična usluga, kvalitetan i stručan pristup od strane djelatnice. Hvala Lea na usluzi i savjetima!',
  },
  {
    name: 'Antonio Jozic',
    location: 'Zagreb',
    text: 'Odlična usluga, kvalitetan i stručan pristup od strane djelatnice. Hvala Lea na usluzi i savjetima!',
  },
  {
    name: 'Kristijan Stefanovski',
    location: 'Zagreb',
    text: 'Vec dva tjedna se hranim po rezultatima testa intolerancije koje sam dobio kod ovih finih ljudi, preporodio sam se, nisam više nadut i izgubio sam 6 kila. Zdravi i zivi bili.',
  },
  {
    name: 'Ana Bertic',
    location: 'Zagreb',
    text: 'Od trenutka kada sam kročila u Orešković Clinic, osjetila sam profesionalnost, jasnoću i toplinu koja čini razliku. Njihov tim je izuzetno ljubazan, stručan i pristupačan. Odmah sam znala da sam na pravom mjestu za tretmane ljepote i njege.',
  },
  {
    name: 'Marcela Sokac',
    location: 'Zagreb',
    text: 'Bila sam ovdje na vise tretmana, za celulit, za ublazavanje simptoma alergije, i nakon ozljede puknuca kosti na nozi. Svaki tretman mogu zasebno pohvaliti jer mi je svaki pomogao i pokazao jako dobre rezultate. Osoblje i vlasnik su ljubazni, pristupacni, otvoreni za sva pitanja. Sve preporuke.',
  },
  {
    name: 'Tara Redžepagić',
    location: 'Zagreb',
    text: 'Vječno sam zahvalna Orešković Clinic jer su u samo par tretmana napravili da se moj ožiljak od operacije crijeva u jako brzom roku oporavi, zaraste, posvjetli i da ne bude izbočen. Osim toga, mojoj mami su u samo 3 tretmana uspjeli oporaviti slomljeno stopalo da je mogla već krenuti hodati, a i tretmani za celulit su im vrhunski! Najiskrenije preporuke svima!',
  },
  {
    name: 'Jure Sunic',
    location: 'Zagreb',
    text: 'Jako zadovoljan tretmanom, osoblje jako ljubazno i pristupačno. Cijene prihvatljive i isplative. Za preporuku!',
  },
  {
    name: 'Raul Marincic',
    location: 'Zagreb',
    text: '5 od 5, ambijent, cistoca, osoblje, a efikasnost tretmana isto cista 5-ica, usao s bolovima u koljenu, a izasao kao novi covjek. Hvala!',
  },
  {
    name: 'Bruno Saftic',
    location: 'Zagreb',
    text: 'Samo riječi hvale za gospodina Zvonimira i odlicno osoblje klinike. Vidimo se opet!',
  },
  {
    name: 'Lina Digna',
    location: 'Zagreb',
    text: 'Pridrzavam se rezultata testa intolerancije na hranu vec 2 tjedna, osjecam se stvarno odlicno, imam puno vise energije.',
  },
];

// Duplicated once so the strip can loop seamlessly.
const loopTestimonials = [...testimonials, ...testimonials];

const AUTOPLAY_SPEED = 0.5; // pixels per animation frame
const DRAG_THRESHOLD = 5; // px of movement before a click becomes a drag

function Stars() {
  return (
    <span className="testimonial-stars" aria-label="5 od 5 zvjezdica">
      ★★★★★
    </span>
  );
}

export default function Testimonials() {
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
      { threshold: 0.15 }
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
  }

  function handlePointerMove(e) {
    const track = trackRef.current;
    const { x, scrollLeft, pointerId } = dragStartRef.current;
    if (pointerId === undefined) return;

    const delta = e.clientX - x;

    if (!isDraggingRef.current) {
      if (Math.abs(delta) < DRAG_THRESHOLD) return;
      isDraggingRef.current = true;
      setIsDragging(true);
      track.setPointerCapture(pointerId);
    }

    track.scrollLeft = scrollLeft - delta;
  }

  function handlePointerUp() {
    isDraggingRef.current = false;
    setIsDragging(false);
    dragStartRef.current.pointerId = undefined;
  }

  return (
    <section className="testimonials section" ref={sectionRef}>
      <div className="container testimonials-intro reveal">
        <p className="testimonials-kicker">RECENZIJE</p>
        <h2 className="testimonials-title">
          Što naši pacijenti <em>kažu</em>?
        </h2>
        <div className="testimonials-rating">
          <Stars />
          <span className="testimonials-rating-text">
            5/5 · Više od 1000 zadovoljnih pacijenata <br />
            Nije zabilježen nijedan slučaj da se nakon naših terapija bolovi nisu smanjili.
          </span>
        </div>
      </div>

      <div className="container reveal reveal-2">
        <div
          className={`testimonials-track ${isDragging ? 'is-dragging' : ''}`}
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => (isPausedRef.current = false)}
        >
          {loopTestimonials.map((review, index) => (
            <div className="testimonial-card" key={`${review.name}-${index}`}>
              <span className="testimonial-quote-badge" aria-hidden="true">
                <span className="testimonial-quote-mark">&ldquo;</span>
              </span>
              <Stars />
              <p className="testimonial-text">{review.text}</p>
              <div className="testimonial-footer">
                <span className="testimonial-name">{review.name}</span>
                {review.location && (
                  <span className="testimonial-location">{review.location}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}