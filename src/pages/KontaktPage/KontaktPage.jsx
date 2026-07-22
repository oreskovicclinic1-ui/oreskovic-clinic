import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KontaktPage.css';

const WEB3FORMS_ACCESS_KEY = 'd2bbe892-cc18-44af-b59d-d3b76c8c7f6b';

async function sendContactMessage(formData) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'Nova poruka sa kontakt forme',
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Nije navedeno',
      message: formData.message,
    }),
  });

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || 'Web3Forms submission failed');
  }
}

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function KontaktPage() {
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

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Molimo popunite ime, email i poruku.');
      return;
    }

    setIsSubmitting(true);
    try {
      await sendContactMessage(form);
      navigate('/kontakt-uspeh', { state: { fromContact: true } });
    } catch {
      setError('Došlo je do greške. Molimo pokušajte ponovo, ili nas nazovite direktno.');
      setIsSubmitting(false);
    }
  }

  return (
    <section className="kontakt-hero">
      <div className="kontakt-hero-blobs" aria-hidden="true">
        <span className="kontakt-blob kontakt-blob-1"></span>
        <span className="kontakt-blob kontakt-blob-2"></span>
      </div>

      <div className="container kontakt-grid">
        <div className="kontakt-content">
          <p className="kontakt-kicker">KONTAKT</p>
          <h1 className="kontakt-title">Javite nam se</h1>
          <p className="kontakt-intro">
            Imate pitanje, prijedlog, ili vam jednostavno treba dodatna informacija? Popunite
            formu i naš tim će vam odgovoriti u najkraćem roku.
          </p>

          <div className="kontakt-highlights">
            <span className="kontakt-highlight-chip">
              <span className="kontakt-highlight-check">✓</span>
              Odgovaramo u roku 24h
            </span>
            <span className="kontakt-highlight-chip">
              <span className="kontakt-highlight-check">✓</span>
              Zagreb i Opatija
            </span>
          </div>

          <div className="kontakt-phones">
            <span className="kontakt-phones-label">ili nazovite:</span>
            <a href="tel:+385953702034" className="kontakt-phone">
              +385 95 3702 034
            </a>
            <span className="kontakt-phones-divider" aria-hidden="true">|</span>
            <a href="tel:+385916104690" className="kontakt-phone">
              +385 91 610 4690
            </a>
          </div>
        </div>

        <div className="kontakt-form-card">
          <form onSubmit={handleSubmit} className="kontakt-form">
            {/* Honeypot - hidden from real users via CSS, bots that
                auto-fill every field will fill this too. If it's
                filled, Web3Forms silently treats it as spam. */}
            <input
              type="checkbox"
              name="botcheck"
              className="kontakt-honeypot"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="kontakt-field">
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

            <div className="kontakt-field">
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

            <div className="kontakt-field">
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

            <div className="kontakt-field">
              <label htmlFor="message">Poruka *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Recite nam kako vam možemo pomoći..."
                required
              />
            </div>

            {error && <p className="kontakt-error">{error}</p>}

            <button type="submit" className="kontakt-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Šaljem...' : 'Pošaljite poruku'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}