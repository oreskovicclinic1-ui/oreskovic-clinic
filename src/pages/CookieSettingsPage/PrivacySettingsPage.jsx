import { openCookieSettings } from '../../utils/privacyPreferences';
import './PrivacySettingsPage.css';

export default function PrivacySettingsPage() {
  return (
    <main className="cookie-page">
      <div className="container cookie-page-inner">
        <p className="cookie-page-kicker">PRAVNE INFORMACIJE</p>
        <h1 className="cookie-page-title">Postavke kolačića</h1>

        <button className="cookie-page-manage-btn" onClick={openCookieSettings}>
          Upravljajte postavkama kolačića
        </button>

        <section className="cookie-page-section">
          <h2>Što su kolačići i druge slične tehnologije?</h2>
          <p>Kolačići nam pomažu da vam pružimo bolje i brže online iskustvo.</p>
          <p>
            Kolačići i tehnologije za mrežnu pohranu koji omogućavaju lokalnu i sesijsku pohranu
            („kolačiće“) olakšavaju vam interakciju s našim mrežnim mjestom. Obično je riječ o
            malim tekstualnim datotekama koje na uređaj preuzima vaš internetski preglednik
            prilikom posjete našem mrežnom mjestu. Kolačiće također postavljamo na vaš uređaj
            prilikom vaše interakcije s mrežnim tehnologijama pružatelja usluga trećih strana,
            poput skripti, piksela i oznaka, koje integriramo na našu stranicu.
          </p>
          <p>
            Dalje u tekstu navodimo kako koristimo te tehnologije i kako možete mijenjati
            postavke kolačića ovisno o tome što vama više odgovara.
          </p>
        </section>

        <section className="cookie-page-section">
          <h2>Zašto koristimo kolačiće?</h2>

          <h3>Kako bismo mjerili online iskustvo korisnika</h3>
          <p>
            Kolačići imaju različite funkcije koje nam pomažu da vaše online iskustvo napravimo
            boljim.
          </p>
          <p>
            Neki kolačići smatraju se nužnima za vođenje i održavanje ove stranice te nam
            omogućavaju da vam pružimo:
          </p>
          <ul>
            <li>pristup uslugama i funkcionalnostima u bilo koje doba;</li>
            <li>dosljedne i ažurne informacije;</li>
            <li>najbolje online iskustvo.</li>
          </ul>

          <h3>Kako bi nam pomogli da poboljšamo naša mrežna mjesta</h3>
          <p>
            Kolačići nam omogućavaju da poboljšamo naša mrežna mjesta tako što analiziramo kako
            ih posjetitelji koriste. Mi pratimo koji je sadržaj popularan i koristimo tu
            informaciju za predviđanje toga što bi još posjetiteljima moglo biti zanimljivo ili
            korisno. To nam pomaže da:
          </p>
          <ul>
            <li>
              razumijemo kako posjetitelji koriste naša mrežna mjesta u svrhu njihova
              poboljšavanja, kao i posjetiteljeva iskustva;
            </li>
            <li>
              iskušamo različite ideje i prikažemo sadržaj koji je najrelevantniji za
              pojedinačnog posjetitelja.
            </li>
          </ul>
          <p>
            Kolačići nam također pomažu da razumijemo vašu interakciju i kako komunicirate s
            našim mrežnim mjestom tako da nam to ne morate ponavljati svaki put kada ih
            posjetite. Mogu se koristiti, na primjer, za pamćenje vaših preferencija i
            korisničkih oznaka prilikom vašeg posjećivanja.
          </p>
        </section>

        <section className="cookie-page-section">
          <h2>Koje kolačiće koristimo?</h2>
          <p>
            Kolačići prve strane oni su koje postavlja Orešković Clinic na web stranicama na
            kojima ste upravo i s kojima ste u interakciji kada posjećujete ovu stranicu.
          </p>
          <p>
            Koristimo se uslugama trećih strana kako bismo objavili oglase koji se temelje na
            interesima korisnika koji su prethodno posjetili stranicu, a koji se utvrđuju
            temeljem njihovog internetskog pretraživanja. Ti kolačići prikupljaju demografske
            podatke i/ili podatke na stranicama koje su korisnici posjetili, proizvode koje su
            pogledali i konverzije koje su napravili kao rezultat oglašivačkih kampanja.

          </p>

          <div className="cookie-table-wrapper">
            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Pružatelj usluge</th>
                  <th>Kolačići</th>
                  <th>Trajanje</th>
                  <th>Pravila privatnosti</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Analytics</td>
                  <td>_ga</td>
                  <td>uklanja se nakon dvije godine</td>
                  <td>
                    <a
                      href="https://www.google.com/intl/hr/policies/privacy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pravila
                    </a>{' '}
                    ·{' '}
                    <a
                      href="https://adssettings.google.com/anonymous?hl=hr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pristanak
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Facebook (Facebook Pixel)</td>
                  <td>fr, impression.php/#, tr</td>
                  <td>
                    fr do 3 mjeseca; impression.php/# i tr se uklanjaju po zatvaranju
                    preglednika
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/privacy/explanation"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pravila
                    </a>{' '}
                    ·{' '}
                    <a
                      href="https://www.facebook.com/ads/preferences/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pristanak
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="cookie-page-section">
          <h2>Što se događa ako odbijem kolačiće?</h2>
          <p>
            Ako odlučite odbiti kolačiće za koje je potrebna vaša prethodna privola, nećemo
            koristiti takve kolačiće. Također, možete odbiti analitičke kolačiće. U tom slučaju
            moći ćemo manje naučiti o tome što vam se sviđa ili ne na našem mrežnom mjestu, a
            čemu je svrha njegovo poboljšavanje.
          </p>
          <p>
            Ne možemo brisati kolačiće trećih strana. Ako želite izbrisati sve kolačiće trećih
            strana, trebat ćete to napraviti u postavkama vašeg preglednika.
          </p>
        </section>

        <section className="cookie-page-section">
          <h2>Kako upravljati korištenjem kolačića?</h2>
          <p>
            Većina internetskih preglednika automatski prihvaća kolačiće, ali pruža kontrole
            koje vam omogućuju blokiranje ili brisanje. Isključivanjem kolačića odlučujete hoćete
            li dopustiti pohranjivanje kolačića na vašem uređaju.
          </p>
          <p>
            Više informacija o upravljanju kolačićima potražite na stranicama preglednika kojim
            se koristite (Chrome, Firefox, Safari, Edge...), kao i na sljedećim poveznicama:
          </p>
          <ul>
            <li>
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer">
                www.allaboutcookies.org
              </a>
            </li>
            <li>
              <a href="https://www.youronlinechoices.com" target="_blank" rel="noreferrer">
                www.youronlinechoices.com
              </a>
            </li>
            <li>
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
                Google Analytics Opt-out
              </a>
            </li>
          </ul>
        </section>

        <section className="cookie-page-section">
          <h2>Tko je zakonski odgovoran za uporabu kolačića?</h2>
          <p>
            Kolačići opisani u ovoj Politici kolačića koriste se za stranicu koja je u vlasništvu
            i pod kontrolom <strong>Bellpax Maximus d.o.o.</strong>, Ulica Matice hrvatske 2,
            Zagreb.
          </p>
          <p>
            Ako imate pitanja ili nedoumice vezane za Politiku kolačića, možete nas kontaktirati
            na{' '}
            <a href="mailto:info@oreskovicclinic.com">info@oreskovicclinic.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}