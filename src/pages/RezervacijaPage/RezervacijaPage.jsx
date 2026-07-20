import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/pricingData';
import './RezervacijaPage.css';

function sendReservation(formData) {
  return new Promise((resolve) => {
    console.log('Reservation submitted (not yet wired to a real backend):', formData);
    setTimeout(resolve, 400);
  });
}

const initialForm = {
  name: '',
  email: '',
  phone: '',
  inquiryType: 'rezervacija',
  treatment: '',
  message: '',
};

export default function RezervacijaPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError('Molimo popunite ime, email i broj telefona.');
      return;
    }

    setIsSubmitting(true);
    try {
      await sendReservation(form);
      navigate('/uspesna-rezervacija');
    } catch {
      setError('Došlo je do greške. Molimo pokušajte ponovo, ili nas nazovite direktno.');
      setIsSubmitting(false);
    }
  }

  return (
    <section className="rezervacija-hero">
      <div className="rezervacija-hero-blobs" aria-hidden="true">
        <span className="rezervacija-blob rezervacija-blob-1"></span>
        <span className="rezervacija-blob rezervacija-blob-2"></span>
      </div>

      <div className="container rezervacija-grid">
        <div className="rezervacija-content">
          <p className="rezervacija-kicker">REZERVACIJA</p>
          <h1 className="rezervacija-title">Rezervirajte svoj termin</h1>
          <p className="rezervacija-intro">
            Popunite formu i naš tim će vam se javiti u najkraćem roku kako bismo dogovorili
            termin koji vam odgovara. Ako radije razgovarate direktno, slobodno nas nazovite.
          </p>

          <div className="rezervacija-highlights">
            <span className="rezervacija-highlight-chip">
              <span className="rezervacija-highlight-check">✓</span>
              Odgovaramo u roku 24h
            </span>
            <span className="rezervacija-highlight-chip">
              <span className="rezervacija-highlight-check">✓</span>
              Besplatna konsultacija
            </span>
            <span className="rezervacija-highlight-chip">
              <span className="rezervacija-highlight-check">✓</span>
              Zagreb i Opatija
            </span>
          </div>

          <a href="tel:+385953702034" className="rezervacija-phone">
            ili nazovite: +385 95 3702 034
          </a>
        </div>

        <div className="rezervacija-form-card">
          <form onSubmit={handleSubmit} className="rezervacija-form">
            <div className="rezervacija-field">
              <label htmlFor="name">Ime i prezime *</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Vaše ime i prezime"
                required
              />
            </div>

            <div className="rezervacija-field">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="vas@email.com"
                required
              />
            </div>

            <div className="rezervacija-field">
              <label htmlFor="phone">Broj telefona *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+385 9X XXX XXXX"
                required
              />
            </div>

            <div className="rezervacija-field">
              <label>Vrsta upita</label>
              <div className="rezervacija-toggle">
                <button
                  type="button"
                  className={`rezervacija-toggle-option ${
                    form.inquiryType === 'rezervacija' ? 'is-active' : ''
                  }`}
                  onClick={() => setForm((prev) => ({ ...prev, inquiryType: 'rezervacija' }))}
                >
                  Rezervacija termina
                </button>
                <button
                  type="button"
                  className={`rezervacija-toggle-option ${
                    form.inquiryType === 'upit' ? 'is-active' : ''
                  }`}
                  onClick={() => setForm((prev) => ({ ...prev, inquiryType: 'upit' }))}
                >
                  Opći upit
                </button>
              </div>
            </div>

            {form.inquiryType === 'rezervacija' && (
              <div className="rezervacija-field">
                <label htmlFor="treatment">Koja usluga vas zanima? (opcionalno)</label>
                <select
                  id="treatment"
                  name="treatment"
                  value={form.treatment}
                  onChange={handleChange}
                >
                  <option value="">Nisam siguran/na — posavjetujte me</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.label}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="rezervacija-field">
              <label htmlFor="message">Poruka (opcionalno)</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Recite nam nešto više — željeni termin, pitanja, napomene..."
              />
            </div>

            {error && <p className="rezervacija-error">{error}</p>}

            <button type="submit" className="rezervacija-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Šaljem...' : 'Pošaljite upit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}