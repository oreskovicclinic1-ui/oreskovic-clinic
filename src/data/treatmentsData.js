// ---- TREATMENT CONTENT DATA ---------------------------------------------
// One entry per treatment page. `pricingId` links to the matching entry
// in pricingData.js so the price section always stays in sync with the
// Cjenik page — never duplicate prices here.
//
// To add a new treatment later: add one object here (and a matching
// entry in pricingData.js if it doesn't exist yet), drop its hero photo
// in /public/treatments/{slug}.webp.

const genericFaq = [
  {
    question: 'Je li tretman bolan?',
    answer:
      'Ne. Svi naši tretmani su neinvazivni i bezbolni — većina pacijenata ih opisuje kao ugodne, slične masaži ili blagom zagrijavanju.',
  },
  {
    question: 'Koliko traje jedan tretman?',
    answer:
      'Ovisno o tretmanu, između 20 i 45 minuta. Tačno trajanje za vaš odabrani tretman saznat ćete na besplatnoj konsultaciji.',
  },
  {
    question: 'Kada su vidljivi prvi rezultati?',
    answer:
      'Kod većine tretmana prvi rezultati su vidljivi već nakon jednog do dva tretmana, dok se puni efekat postiže kroz preporučeni broj tretmana u paketu.',
  },
  {
    question: 'Postoji li period oporavka?',
    answer:
      'Ne — svi naši tretmani su neinvazivni, bez perioda oporavka. Možete se odmah vratiti svojim svakodnevnim aktivnostima.',
  },

];

export const treatments = {
  'test-intolerancija': {
    pricingId: 'test-intolerancija',
    slug: 'test-intolerancija',
    name: 'Test intolerancije na hranu',
    category: 'Zdravstvene usluge',
    heroImage: '/treatments/test-intolerancija.webp',
    shortBenefit: 'Saznajte koju hranu vaše tijelo ne podnosi — brzo, bezbolno, bez igle.',
    description:
      'Test intolerancije na hranu brzo i jednostavno otkriva koje namirnice biste trebali izbaciti iz prehrane kako biste smanjili umor, probavne smetnje, nadutost i manjak energije. Tretman izvodimo Bicom Body Check 2 aparatom, koji uz intolerancije pokazuje i koje vitamine i minerale vašem tijelu nedostaje. Postupak je potpuno neinvazivan — bez igala — a rezultati su gotovi već za 20 minuta.',
    highlights: [
      'Rezultati odmah nakon testiranja',
      'Test traje oko 20 minuta',
      'Potpuno bezbolan i neinvazivan postupak',
      'Analiza intolerancije na veliki broj namirnica',
      'Dostupno na više lokacija u Hrvatskoj',
    ],
    process: [
      {
        title: 'Priprema',
        text: 'Na tijelo se postavljaju elektrode, ili ih jednostavno držite u rukama.',
      },
      {
        title: 'Skeniranje',
        text: 'Uređaj skenira tijelo i detektira elektromagnetske frekvencije koje odgovaraju različitim namirnicama.',
      },
      {
        title: 'Rezultati i preporuke',
        text: 'Na temelju rezultata definiramo namirnice koje biste trebali izbaciti, kao i one koje biste trebali dodati u prehranu.',
      },
    ],
    forWhom:
      'Test intolerancije na hranu preporučuje se osobama koje pate od kroničnih probavnih problema, glavobolja, umora, kožnih osipa ili drugih nespecifičnih simptoma koji mogu biti povezani s intolerancijom na određene namirnice. Koristan je i za sve koji sumnjaju da im određena hrana negativno utječe na zdravlje, ali ne znaju koje namirnice su problematične.',
    extraSections: [
      {
        title: 'Gdje obavljamo testiranje?',
        text: 'Testiranje možete obaviti na više lokacija diljem Hrvatske: Zagreb, Opatija, Split, Osijek, Pula, Dubrovnik, Varaždin, Zadar, Šibenik.',
      },
    ],
    faq: genericFaq,
  },

  'test-alergije': {
    pricingId: 'test-alergije',
    slug: 'test-alergije',
    name: 'Test na alergije',
    category: 'Zdravstvene usluge',
    heroImage: '/treatments/test-alergije.webp',
    shortBenefit: 'Otkrijte na što vaše tijelo reagira — bez vađenja krvi, rezultati odmah.',
    description:
      'Test na alergije pomaže otkriti na koje tvari iz okoline ili prehrane vaše tijelo može reagirati, uzrokujući simptome poput kihanja, svrbeža očiju, začepljenog nosa, umora ili kožnih reakcija. Ako godinama imate simptome čiji uzrok ne znate, ovaj test daje konkretan uvid i jasne smjernice — bez vađenja krvi, u samo 20 minuta.',
    highlights: [
      'Testiranje obuhvaća više od 300 potencijalnih alergena',
      'Uključuje alergene iz okoline i prehrane',
      'Testiranje je potpuno bezbolno (bez vađenja krvi)',
      'Traje oko 20 minuta, rezultati su dostupni odmah',
      'Dobivate popis alergena i preporuke za vitamine i minerale',
    ],
    process: [
      { title: 'Priprema', text: 'Na tijelo se postavljaju elektrode koje detektiraju reakcije organizma.' },
      { title: 'Skeniranje', text: 'Uređaj testira reakciju vašeg tijela na preko 300 potencijalnih alergena.' },
      { title: 'Rezultati', text: 'Dobivate jasan popis alergena, kao i preporuke za vitamine i minerale.' },
    ],
    forWhom:
      'Test na alergije preporučujemo svima koji godinama imaju nespecifične simptome (kihanje, umor, kožne reakcije) bez jasnog uzroka, kao i onima koji žele preventivno provjeriti svoju osjetljivost na alergene iz okoline i prehrane.',
    faq: genericFaq,
  },

  'terapija-ozljeda': {
    pricingId: 'terapija-ozljeda',
    slug: 'terapija-ozljeda',
    name: 'Terapija ozljeda',
    category: 'Zdravstvene usluge',
    heroImage: '/treatments/terapija-ozljeda.webp',
    shortBenefit: 'Brži oporavak i manje boli, bez igala i bez perioda mirovanja.',
    description:
      'Više stotina zadovoljnih pacijenata prošlo je kroz naše ordinacije s raznim ozljedama — od petnog trna, teniskog lakta i skakačkog koljena, do uganuća, ruptura i istegnuća. Naš stručni tim individualnim pristupom pomaže u rješavanju širokog spektra ozljeda mekih tkiva i zglobova.',
    highlights: [
      'Individualan pristup svakom pacijentu',
      'Neinvazivan i bezbolan tretman',
      'Ubrzava proces oporavka',
      'Smanjuje bol i upalu',
      'Pogodno za sportaše i rekreativce',
      'Dostupno u više lokacija',
    ],
    process: [
      {
        title: 'Procjena',
        text: 'Analiziramo vašu ozljedu i definiramo najbolji pristup terapiji.',
      },
      {
        title: 'Terapija',
        text: 'Aparati elektromagnetnom frekvencijom mijenjaju staničnu strukturu tkiva, smanjujući bol, upale, otekline i hematome, dok se zarastanje tkiva ubrzava i do 75%.',
      },
      {
        title: 'Praćenje oporavka',
        text: 'Pratimo napredak kroz seriju tretmana dok se ne postigne puni oporavak.',
      },
    ],
    forWhom:
      'Bilo da ste profesionalni sportaš, aktivni vježbač, rekreativac, ili se uopće ne bavite sportom — koja god ozljeda vas mučila, u našim ordinacijama ćete dobiti pomoć na potpuno ugodan, neinvazivan način.',
    faq: genericFaq,
  },

  'vitaminske-infuzije': {
    pricingId: 'vitaminske-infuzije',
    slug: 'vitaminske-infuzije',
    name: 'Vitaminske infuzije',
    category: 'Zdravstvene usluge',
    heroImage: '/treatments/vitaminske-infuzije.webp',
    shortBenefit: 'Vitamini i minerali direktno u krvotok, uz 100% iskoristivost.',
    description:
      'Vitaminske infuzije direktno unose vitamine, minerale, aminokiseline i antioksidanse u krvotok, zaobilazeći probavni sustav. Za razliku od oralne primjene, intravenozni put omogućuje trenutnu apsorpciju i maksimalnu iskoristivost hranjivih tvari, uz istovremenu hidrataciju i ravnotežu elektrolita.',
    highlights: [
      'Brza apsorpcija vitamina i minerala',
      '100% iskoristivost hranjivih tvari',
      'Jačanje imuniteta',
      'Više energije i brži oporavak',
      'Individualan pristup svakom pacijentu',
      'Stručne konzultacije prije terapije',
    ],
    process: [
      { title: 'Konsultacija', text: 'Obavezna konsultacija (15–30 min) prije svakog tretmana, na koju je potrebno donijeti kompletan krvni status i biokemijski nalaz.' },
      { title: 'Priprema', text: 'Nakon dogovorenog termina, na tretman ponesite popunjen obrazac za IV terapiju, popis lijekova/suplemenata i kopiju posljednjeg krvnog nalaza (ne stariji od 3 mjeseca).' },
      { title: 'Infuzija', text: 'Infuzija sadrži B-kompleks, vitamin C, glutation i minerale poput cinka i magnezija, isporučene direktno u krvotok.' },
    ],
    forWhom:
      'Vitaminske infuzije namijenjene su osobama koje žele povećati razinu energije, ojačati imunitet, ubrzati oporavak nakon bolesti ili fizičkog napora, te nadoknaditi nedostatak vitamina i minerala. Posebno su korisne kod poteškoća s peroralnim unosom vitamina ili apsorpcijskih problema. Kandidati za terapiju su svi osim trudnica, bubrežnih i srčanih bolesnika te djece mlađe od 14 godina.',
    extraSections: [
      {
        title: 'Kako djeluje intravenozna terapija?',
        text: 'Infuzije sadrže B-kompleks (B1, B2, B3, B5, B6, B7, B9, B12), vitamin C, glutation te minerale poput natrija, kalcija, kalija, cinka i magnezija. Ključni benefiti uključuju bržu apsorpciju nutrijenata, jačanje imuniteta i detoksikaciju organizma, poboljšanje zdravlja kože, kose i noktiju, te podršku mentalnom zdravlju i regeneraciji. Idealno za oporavak nakon napora, sporta, viroza ili kroničnog umora, te preventivno u sezoni prehlada.',
      },
    ],
    faq: genericFaq,
  },

  dlacice: {
    pricingId: 'dlacice',
    slug: 'dlacice',
    name: 'Trajno uklanjanje dlačica',
    category: 'Tijelo',
    heroImage: '/treatments/dlacice.webp',
    shortBenefit: 'Zauvijek bez dlačica — potpuno bezbolno, za sve tipove kože.',
    description:
      'Tretmani trajnog uklanjanja dlačica u našim ordinacijama su potpuno bezbolni i ugodni. Nakon tretmana nema uraslih dlačica niti boli, koža je glađa i mekša, a većini pacijenata dlačice počinju otpadati već nakon prvog tretmana.',
    highlights: [
      'Potpuno bezbolno, za sve tipove kože',
      'Diodni laser sa tri valne duljine',
      'Uklanja i svijetle i tamne dlačice',
      'Nema uraslih dlačica nakon tretmana',
      'Pogodno i za osjetljiva područja',
    ],
    process: [
      {
        title: 'Tretman laserom',
        text: 'Izvodi se diodnim laserom koji radi na tri valne duljine, uklanjajući svijetle i tamne dlačice sa svih tipova kože.',
      },
      {
        title: 'Serija tretmana',
        text: 'Optimalno je 7 do 8 tretmana da bi dlačice bile uklonjene zauvijek — u ponudi imamo pakete 6+3 GRATIS.',
      },
    ],
    forWhom:
      'Lasersko uklanjanje dlačica idealno je za sve koji žele trajno smanjenje rasta dlačica, bez obzira imaju li tamne ili svijetle dlačice. Pogodan je za sve tipove kože, uključujući osjetljiva područja poput lica ili bikini zone, i prikladan je za tretmane tijekom cijele godine.',
    faq: genericFaq,
  },

  mrsavljenje: {
    pricingId: 'mrsavljenje',
    slug: 'mrsavljenje',
    name: 'Tretmani mršavljenja',
    category: 'Tijelo',
    heroImage: '/treatments/mrsavljenje.webp',
    shortBenefit: 'Do željene forme bez napora — rezultat garantiramo povratom novca.',
    description:
      'Sinergija naših aparata i jedinstvenih tehnika sigurno će vas dovesti do željene forme bez napora. Tretmani su potpuno bezbolni, ugodni, neinvazivni i bez nuspojava — zbog neinvazivnosti, u jednom danu se može odraditi i veći broj tretmana. Masne naslage i višak kože mogu se ukloniti sa svih dijelova tijela: trbuh, bokovi, donja leđa, noge, ruke.',
    highlights: [
      'Potpuno bezbolno i neinvazivno',
      'Bez perioda oporavka',
      'Djeluje na sve dijelove tijela',
      'Rezultat garantiran povratom novca',
    ],
    process: [
      {
        title: 'Tretman',
        text: 'Aparati elektromagnetnom frekvencijom mijenjaju staničnu strukturu masnih stanica, koje se potom izbacuju iz organizma prirodnim putem.',
      },
      {
        title: 'Zatezanje kože',
        text: 'Uz raspad masnih stanica, potiče se i proizvodnja kolagena, čime se koža zateže, a limfa i cirkulacija ubrzavaju.',
      },
    ],
    forWhom:
      'Tretman je najučinkovitiji kod osoba koje žele ciljati specifične dijelove tijela i postići skladniji izgled bez kirurških zahvata — od naprednih vježbača koji žele riješiti zadnje slojeve masti, do osoba koje se bore s prekomjernom težinom ili viškom kože nakon poroda.',
    faq: genericFaq,
  },

  celulit: {
    pricingId: 'celulit',
    slug: 'celulit',
    name: 'Anti celulitni tretmani',
    category: 'Tijelo',
    heroImage: '/treatments/celulit.webp',
    shortBenefit: 'Uklanjanje celulita i to posebice na području nogu i stražnjice jedan od najčešćih estetskih tretamana. Rezultat garantiramo povratom novca.',
    description:
      'Sinergija naših aparata i jedinstvenih tehnika sigurno će vas riješiti celulita, zategnuti kožu i podignuti stražnjicu. Tretmani su potpuno bezbolni, ugodni, neinvazivni i bez nuspojava, a rezultat garantiramo povratom novca.',
    highlights: [
      'Uklanja celulit i masne naslage',
      'Zateže kožu i podiže stražnjicu',
      'Bez nuspojava i perioda oporavka',
      'Rezultat garantiran povratom novca',
    ],
    process: [
      {
        title: 'Tretman',
        text: 'Aparati elektromagnetnom frekvencijom mijenjaju staničnu strukturu — celulit i masne stanice se izbacuju iz organizma, a koža se zateže uz poticanje proizvodnje kolagena.',
      },
      {
        title: 'Cirkulacija i tonus',
        text: 'Aparati dodatno ubrzavaju rad limfe, cirkulaciju i povećavaju mišićni tonus tretiranog područja.',
      },
    ],
    forWhom:
      'Tretman je namijenjen svima koji na određenom dijelu tijela imaju problema s pojavom celulita, najčešće na nogama i stražnjici. Rezultati su vidljivi nakon svakog tretmana, a uz kupljen paket garantiramo vidljivu razliku — manje celulita i masnih naslaga, podignutu stražnjicu, te mekšu i zategnutiju kožu.',
    faq: genericFaq,
  },

  'anti-age': {
    pricingId: 'anti-age',
    slug: 'anti-age',
    name: 'Anti age tretmani',
    category: 'Lice',
    heroImage: '/treatments/anti-age.webp',
    shortBenefit: 'Manje bora, više kolagena — mlađa, zategnuta koža bez igala.',
    description:
      'Koža se dubinski hidratizira, zateže i obnavlja. Uklanjaju se bore, podiže se tonus kože i potiče proizvodnja kolagena — sa svih dijelova lica, vrata i dekoltea. Tretman je potpuno bezbolan, ugodan, neinvazivan i bez nuspojava, dostupan u Zagrebu i Opatiji.',
    highlights: [
      'Dubinska hidratacija i zatezanje kože',
      'Uklanja bore na licu, vratu i dekolteu',
      'Potiče proizvodnju kolagena',
      'Bez nuspojava i perioda oporavka',
      'Uz paket, rezultat garantiran povratom novca',
    ],
    process: [
      {
        title: 'Prodiranje u kožu',
        text: 'Koristimo tehnologiju koja duboko prodire u slojeve kože, potičući hidrataciju, izgradnju kolagena i cirkulaciju.',
      },
      {
        title: 'Kombinacija aparata',
        text: 'Kombinacija dva aparata omogućuje uklanjanje bora uz poticanje kolagena, te dubinski kemijski piling i podizanje tonusa.',
      },
    ],
    forWhom:
      'Tretman je idealan za sve koji žele neinvazivne, bezbolne i učinkovite anti age tretmane, bez obzira na spol ili godine. Rezultat je hidratizirana, mekša, glatka i sjajnija koža, s manje bora.',
    faq: genericFaq,
  },

  podbradak: {
    pricingId: 'podbradak',
    slug: 'podbradak',
    name: 'Uklanjanje podbratka',
    category: 'Lice',
    heroImage: '/treatments/podbradak.webp',
    shortBenefit: 'Definisana kontura lica, bez igle i bez liposukcije.',
    description:
      'Indiba tretman uklanjanja podbratka, za razliku od liposukcije, predstavlja u potpunosti neinvazivan postupak bez igle. Sinergija naših aparata zateže kožu, uklanja masne naslage i bore na području podbratka i/ili dekoltea, uz rezultat garantiran povratom novca.',
    highlights: [
      'Potpuno neinvazivno, bez igle',
      'Zateže kožu i uklanja masne naslage',
      'Bez nuspojava i perioda oporavka',
      'Rezultat garantiran povratom novca',
    ],
    process: [
      {
        title: 'Priprema',
        text: 'Koža ispod brade se čisti i priprema za tretman.',
      },
      {
        title: 'Radiofrekventni tretman',
        text: 'Aplikator emitira radiofrekvencijske valove koji mijenjaju staničnu strukturu — masne stanice se izbacuju iz organizma, a koža se zateže uz poticanje kolagena.',
      },
    ],
    forWhom:
      'Povećan podbradak može biti rezultat povećanja tjelesne težine, genetike, starenja ili hormonalnih promjena. Tretman je idealan za sve koji žele poboljšati konturu lica i zategnuti kožu, za mlađi i vitkiji izgled.',
    faq: genericFaq,
  },

  podocnjaci: {
    pricingId: 'podocnjaci',
    slug: 'podocnjaci',
    name: 'Uklanjanje podočnjaka',
    category: 'Lice',
    heroImage: '/treatments/podocnjaci.webp',
    shortBenefit: 'Svježiji pogled — manje tamnih krugova i vrećica, bez igle.',
    description:
      'Indiba tretman pokazao se kao idealan neinvazivan odgovor na pitanje kako se riješiti podočnjaka. Bilo da vas muče vrećice ispod očiju, bore ili tamna boja, tretman je potpuno ugodan, neinvazivan, bezbolan i bez nuspojava, sa uspjehom kod 80% pacijenata.',
    highlights: [
      'Neinvazivno i bezbolno',
      'Uspjeh kod 80% pacijenata',
      'Uklanja tamne krugove, vrećice i bore',
      'Bez perioda oporavka',
    ],
    process: [
      {
        title: 'Čišćenje kože',
        text: 'Koža oko očiju se nježno čisti kako bi se uklonile nečistoće i tragovi proizvoda za njegu.',
      },
      {
        title: 'Tretman',
        text: 'Kombinacija zagrijavanja, stimulacije kolagena i poboljšanja mikrocirkulacije smanjuje oteklinu, tamne krugove i vrećice.',
      },
    ],
    forWhom:
      'Iako se podočnjaci najčešće povezuju s manjkom sna, mogu biti rezultat genetike, starenja, dehidracije, alergija ili životnog stila. Tretman pokazuje odlične rezultate svima koji se bore s tamnom bojom ili vrećicama ispod očiju, bez obzira na uzrok.',
    faq: genericFaq,
  },

  botox: {
    pricingId: 'botox',
    slug: 'botox',
    name: 'Tretmani botoksom',
    category: 'Lice',
    heroImage: '/treatments/botox.webp',
    shortBenefit: 'Glatka koža bez mimičnih bora, prirodan i suptilan rezultat.',
    description:
      'Aplikacija botoksa opušta ciljane mišiće lica, uklanjajući mimične bore (čelo, područje oko očiju, između obrva) uz prirodan, suptilan rezultat — bez "zamrznutog" izgleda. Cijena ovisi o broju tretiranih zona. (generički)',
    highlights: [
      'Brz zahvat — do 20 minuta',
      'Vidljiv rezultat nakon 3 do 7 dana',
      'Rezultati traju 4 do 6 mjeseci',
      'Minimalna nelagoda tijekom aplikacije',
    ],
    process: [
      { title: 'Konsultacija', text: 'Analiziramo vaše mimične bore i dogovaramo broj zona za tretman.' },
      { title: 'Aplikacija', text: 'Botoks se ubrizgava precizno u ciljane mišiće tankom iglom.' },
      { title: 'Kontrola', text: 'Kontrolni pregled nakon 2 tjedna radi provjere rezultata.' },
    ],
    forWhom:
      'Tretman je namijenjen svima koji žele ublažiti mimične bore i osvježiti izgled lica, uz prirodan i suptilan rezultat bez kirurškog zahvata. (generički)',
    faq: genericFaq,
  },

  'usne-fileri': {
    pricingId: 'usne-fileri',
    slug: 'usne-fileri',
    name: 'Povećavanje usana dermalnim filerima',
    category: 'Lice',
    heroImage: '/treatments/usne-fileri.webp',
    shortBenefit: 'Punije, hidratizirane usne, prirodnog oblika.',
    description:
      'Oblikovanje i hidratacija usana dermalnim filerima na bazi hijaluronske kiseline — prirodne tvari koju tijelo samo proizvodi. Rezultat je punija, simetrična i hidratizirana usna linija, prilagođena crtama vašeg lica. (generički)',
    highlights: [
      'Filer na bazi hijaluronske kiseline',
      'Trenutan vidljiv rezultat',
      'Rezultati traju 6 do 12 mjeseci',
      'Minimalna nelagoda, bez perioda oporavka',
    ],
    process: [
      { title: 'Konsultacija', text: 'Zajedno definiramo željeni oblik i volumen usana.' },
      { title: 'Aplikacija filera', text: 'Filer se precizno ubrizgava u ciljana područja usana.' },
      { title: 'Kontrola', text: 'Kontrolni pregled nakon 2 tjedna radi eventualne korekcije.' },
    ],
    forWhom:
      'Tretman je namijenjen svima koji žele punije ili simetričnije usne, uz prirodan izgled prilagođen crtama lica. (generički)',
    faq: genericFaq,
  },

  'jacanje-misica': {
    pricingId: 'jacanje-misica',
    slug: 'jacanje-misica',
    name: 'Tretmani jačanja mišića',
    category: 'Tijelo',
    heroImage: '/treatments/jacanje-misica.webp',
    shortBenefit: 'Jači, definisaniji mišići — bez sati u teretani.',
    description:
      'Elektromagnetna stimulacija potiče intenzivne mišićne kontrakcije koje se ne mogu postići voljnim vježbanjem, ubrzavajući izgradnju mišićne mase i definiciju tretiranog područja. (generički)',
    highlights: [
      'Ekvivalent tisućama kontrakcija u jednom tretmanu',
      'Bez napora i bez perioda oporavka',
      'Djeluje na trbuh, stražnjicu, ruke i noge',
      'Rezultati vidljivi nakon serije tretmana',
    ],
    process: [
      { title: 'Priprema', text: 'Aplikator se postavlja na ciljano mišićno područje.' },
      { title: 'Stimulacija', text: 'Elektromagnetni impulsi izazivaju intenzivne mišićne kontrakcije tijekom cijelog tretmana.' },
      { title: 'Serija tretmana', text: 'Za vidljive rezultate preporučuje se serija od nekoliko tretmana.' },
    ],
    forWhom:
      'Tretman je namijenjen osobama koje žele dodatno definisati i ojačati mišiće, kao nadopunu redovnoj fizičkoj aktivnosti ili kao alternativu za one s manjkom vremena za trening. (generički)',
    faq: genericFaq,
  },

  straznjica: {
    pricingId: 'straznjica',
    slug: 'straznjica',
    name: 'Tretmani podizanja i učvršćivanja stražnjice',
    category: 'Tijelo',
    heroImage: '/treatments/straznjica.webp',
    shortBenefit: 'Podignuta, oblikovana i učvršćena stražnjica, bez operacije.',
    description:
      'Kombinacija elektromagnetne stimulacije mišića i zatezanja kože oblikuje, podiže i učvršćuje stražnjicu, bez kirurškog zahvata i bez perioda oporavka. (generički)',
    highlights: [
      'Podiže i oblikuje stražnjicu',
      'Zateže kožu tretiranog područja',
      'Bez operacije i bez perioda oporavka',
      'Rezultati vidljivi kroz seriju tretmana',
    ],
    process: [
      { title: 'Priprema', text: 'Aplikator se postavlja na područje stražnjice.' },
      { title: 'Tretman', text: 'Kombinacija mišićne stimulacije i zatezanja kože oblikuje i podiže tretirano područje.' },
      { title: 'Serija tretmana', text: 'Za optimalne rezultate preporučuje se paket od više tretmana.' },
    ],
    forWhom:
      'Tretman je namijenjen svima koji žele podignutiju, oblikovaniju i učvršćeniju stražnjicu, bez operativnog zahvata. (generički)',
    faq: genericFaq,
  },
};

export function getTreatmentBySlug(slug) {
  return treatments[slug] || null;
}