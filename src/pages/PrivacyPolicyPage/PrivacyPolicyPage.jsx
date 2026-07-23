import './PrivacyPolicyPage.css';

export default function PrivacyPolicyPage() {
  return (
    <main className="policy-page">
      <div className="container policy-page-inner">
        <p className="policy-page-kicker">PRAVNE INFORMACIJE</p>
        <h1 className="policy-page-title">Politika privatnosti</h1>
        <p className="policy-page-updated">Zadnje ažurirano: srpanj 2026.</p>

        <section className="policy-page-section">
          <h2>Tko je voditelj obrade podataka?</h2>
          <p>
            Voditelj obrade osobnih podataka prikupljenih putem ove stranice je{' '}
            <strong>Bellpax Maximus d.o.o.</strong>, Ulica Matice hrvatske 2, Zagreb (u daljnjem
            tekstu: „mi", „nas", „Orešković Clinic"). Za sva pitanja vezana uz obradu osobnih
            podataka možete nas kontaktirati na{' '}
            <a href="mailto:info@oreskovicclinic.com">info@oreskovicclinic.com</a>.
          </p>
        </section>

        <section className="policy-page-section">
          <h2>Koje podatke prikupljamo?</h2>

          <h3>Podaci koje nam dajete izravno</h3>
          <ul>
            <li>
              <strong>Rezervacija termina:</strong> ime i prezime, broj telefona, email adresa, i
              odabrani tretman/lokacija koju odaberete prilikom zakazivanja.
            </li>
            <li>
              <strong>Newsletter prijava:</strong> email adresa, ako se dobrovoljno prijavite za
              primanje novosti i akcija.
            </li>
            <li>
              <strong>Komunikacija:</strong> podaci koje nam pošaljete putem emaila, telefona ili
              kontakt forme.
            </li>
          </ul>

          <h3>Podaci koje prikupljamo automatski</h3>
          <ul>
            <li>
              Podaci o korištenju stranice (posjećene stranice, vrijeme provedeno na stranici,
              uređaj i preglednik) putem Google Analytics kolačića, ako ste dali privolu.
            </li>
            <li>
              Podaci za oglašavanje putem Facebook Pixel-a i Google Ads oznaka, ako ste dali
              privolu za marketinške kolačiće.
            </li>
          </ul>
          <p>
            Detaljan popis kolačića koje koristimo, njihovo trajanje, i kako upravljati svojim
            izborom pronaći ćete na stranici{' '}
            <a href="/postavke-kolacica">Politika kolačića</a>.
          </p>

          <div className="policy-page-note">
            <strong>Napomena o zdravstvenim podacima:</strong> ako prilikom rezervacije ili
            komunikacije s nama podijelite podatke o svom zdravstvenom stanju ili razlogu
            posjete (npr. u napomeni uz rezervaciju), takvi podaci smatraju se posebnom
            kategorijom osobnih podataka prema članku 9. GDPR-a. Takve podatke obrađujemo
            isključivo uz vaš izričit pristanak i samo u svrhu pružanja zatraženog tretmana ili
            konzultacije.
          </div>
        </section>

        <section className="policy-page-section">
          <h2>Zašto obrađujemo vaše podatke?</h2>
          <ul>
            <li>Zaprimanje i potvrda rezervacije termina, te komunikacija vezana uz nju.</li>
            <li>Odgovaranje na vaše upite i pružanje informacija o tretmanima.</li>
            <li>Slanje newslettera i informacija o akcijama, ako ste to izričito zatražili.</li>
            <li>
              Analiza i poboljšanje rada stranice, na temelju anonimiziranih/pseudonimiziranih
              statističkih podataka.
            </li>
            <li>
              Prikaz relevantnih oglasa putem Google Ads i Meta (Facebook/Instagram) platformi, uz
              vašu privolu.
            </li>
            <li>Ispunjavanje zakonskih obveza (npr. računovodstvenih, poreznih).</li>
          </ul>
        </section>

        <section className="policy-page-section">
          <h2>Na kojoj pravnoj osnovi obrađujemo podatke?</h2>
          <ul>
            <li>
              <strong>Izvršenje ugovora/poduzimanje koraka prije sklapanja ugovora</strong> — za
              obradu rezervacije termina i pružanje tretmana.
            </li>
            <li>
              <strong>Privola</strong> — za newsletter, marketinške i analitičke kolačiće, te
              obradu posebnih kategorija podataka (zdravstveni podaci).
            </li>
            <li>
              <strong>Legitimni interes</strong> — za osnovno funkcioniranje i sigurnost stranice.
            </li>
            <li>
              <strong>Zakonska obveza</strong> — kada je obrada propisana važećim zakonima.
            </li>
          </ul>
        </section>

        <section className="policy-page-section">
          <h2>Koliko dugo čuvamo vaše podatke?</h2>
          <p>
            Podatke o rezervacijama čuvamo onoliko dugo koliko je potrebno radi pružanja usluge i
            ispunjavanja zakonskih (npr. računovodstvenih) obveza, standardno do 11 godina za
            financijsku dokumentaciju prema hrvatskim propisima. Email adrese prikupljene za
            newsletter čuvamo dok se ne odjavite. Podatke iz analitičkih kolačića čuvamo prema
            rokovima navedenima u{' '}
            <a href="/postavke-kolacica">Politici kolačića</a>.
          </p>
        </section>

        <section className="policy-page-section">
          <h2>S kim dijelimo vaše podatke?</h2>
          <p>Vaše podatke ne prodajemo. Dijelimo ih samo s pouzdanim pružateljima usluga:</p>
          <ul>
            <li>Google (Google Analytics, Google Ads) — ako ste dali privolu za kolačiće.</li>
            <li>Meta/Facebook (Facebook Pixel) — ako ste dali privolu za kolačiće.</li>
            <li>Pružatelji usluga hostinga i email/rezervacijskih sustava koje koristimo.</li>
          </ul>
          <p>
            Neki od ovih pružatelja usluga mogu obrađivati podatke izvan Europske unije (npr. u
            SAD-u). U tim slučajevima oslanjaju se na standardne ugovorne klauzule ili druge
            mehanizme koje EU zakon priznaje kao adekvatnu zaštitu.
          </p>
        </section>

        <section className="policy-page-section">
          <h2>Koja su vaša prava?</h2>
          <p>Prema GDPR-u, imate pravo:</p>
          <ul>
            <li>zatražiti pristup svojim osobnim podacima koje obrađujemo;</li>
            <li>zatražiti ispravak netočnih ili nepotpunih podataka;</li>
            <li>zatražiti brisanje svojih podataka ("pravo na zaborav");</li>
            <li>zatražiti ograničenje obrade;</li>
            <li>uložiti prigovor na obradu temeljenu na legitimnom interesu;</li>
            <li>zatražiti prenosivost podataka;</li>
            <li>povući privolu u bilo kojem trenutku, bez utjecaja na zakonitost prethodne obrade.</li>
          </ul>
          <p>
            Za ostvarivanje bilo kojeg od ovih prava, kontaktirajte nas na{' '}
            <a href="mailto:info@oreskovicclinic.com">info@oreskovicclinic.com</a>.
          </p>
        </section>

        <section className="policy-page-section">
          <h2>Pravo na prigovor nadzornom tijelu</h2>
          <p>
            Ako smatrate da obrada vaših osobnih podataka krši GDPR, imate pravo podnijeti
            prigovor Agenciji za zaštitu osobnih podataka (AZOP), Selska cesta 136, 10000 Zagreb,{' '}
            <a href="https://azop.hr" target="_blank" rel="noreferrer">
              azop.hr
            </a>
            .
          </p>
        </section>

        <section className="policy-page-section">
          <h2>Sigurnost podataka</h2>
          <p>
            Poduzimamo razumne tehničke i organizacijske mjere kako bismo zaštitili vaše podatke
            od neovlaštenog pristupa, gubitka ili zloupotrebe. Ipak, nijedan prijenos podataka
            putem interneta nije 100% siguran, te ne možemo jamčiti apsolutnu sigurnost.
          </p>
        </section>

        <section className="policy-page-section">
          <h2>Izmjene ove politike</h2>
          <p>
            Ovu politiku privatnosti možemo povremeno ažurirati. Datum zadnje izmjene naveden je
            pri vrhu stranice. Preporučujemo da je povremeno pregledate.
          </p>
        </section>

        <section className="policy-page-section">
          <h2>Kontakt</h2>
          <p>
            Za sva pitanja vezana uz ovu politiku privatnosti ili obradu vaših osobnih podataka,
            kontaktirajte nas na{' '}
            <a href="mailto:info@oreskovicclinic.com">info@oreskovicclinic.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}