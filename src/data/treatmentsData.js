// ---- TREATMENT CONTENT DATA ----------
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
    pricingImage: '/treatments/test-intolerancija-pricing.webp',
    shortBenefit:
      'Saznajte koju hranu vaše tijelo ne podnosi — brzo, bezbolno i bez igle. Test traje samo 20 minuta, a rezultati su gotovi odmah. Uz to dobivate i uvid u status vitamina i minerala u organizmu.',
    description:
      'Test intolerancije na hranu brzo i jednostavno otkriva koje namirnice biste trebali izbaciti iz prehrane kako biste smanjili umor, probavne smetnje, nadutost i manjak energije. Uz test intolerancije, u istom pregledu obavlja se i test na alergije, kao i provjera statusa vitamina i minerala. Tretman izvodimo Bicom Body Check 2 aparatom, koji uz intolerancije i alergije pokazuje i koje vitamine i minerale vašem tijelu nedostaje. Postupak je potpuno neinvazivan — bez igala — a rezultati su gotovi već za 20 minuta.',
    highlights: [
      'Rezultati odmah nakon testiranja',
      'Test traje oko 20 minuta',
      'Potpuno bezbolan i neinvazivan postupak',
      'Analiza intolerancije na veliki broj namirnica',
      'Uključuje i test na alergije te status vitamina i minerala',
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

  // 'test-alergije': {
  //   pricingId: 'test-alergije',
  //   slug: 'test-alergije',
  //   name: 'Test na alergije',
  //   category: 'Zdravstvene usluge',
  //   heroImage: '/treatments/test-alergije.webp',
  //   pricingImage: '/treatments/test-alergije-pricing.webp',
  //   shortBenefit:
  //     'Otkrijte na što vaše tijelo reagira — bez vađenja krvi, potpuno bezbolno. Testiranje obuhvaća preko 300 potencijalnih alergena iz okoline i prehrane. Rezultati su dostupni odmah, uz jasne preporuke za dalje korake.',
  //   description:
  //     'Test na alergije pomaže otkriti na koje tvari iz okoline ili prehrane vaše tijelo može reagirati, uzrokujući simptome poput kihanja, svrbeža očiju, začepljenog nosa, umora ili kožnih reakcija. Ako godinama imate simptome čiji uzrok ne znate, ovaj test daje konkretan uvid i jasne smjernice — bez vađenja krvi, u samo 20 minuta.',
  //   highlights: [
  //     'Testiranje obuhvaća više od 300 potencijalnih alergena',
  //     'Uključuje alergene iz okoline i prehrane',
  //     'Testiranje je potpuno bezbolno (bez vađenja krvi)',
  //     'Traje oko 20 minuta, rezultati su dostupni odmah',
  //     'Dobivate popis alergena i preporuke za vitamine i minerale',
  //   ],
  //   process: [
  //     { title: 'Priprema', text: 'Na tijelo se postavljaju elektrode koje detektiraju reakcije organizma.' },
  //     { title: 'Skeniranje', text: 'Uređaj testira reakciju vašeg tijela na preko 300 potencijalnih alergena.' },
  //     { title: 'Rezultati', text: 'Dobivate jasan popis alergena, kao i preporuke za vitamine i minerale.' },
  //   ],
  //   forWhom:
  //     'Test na alergije preporučujemo svima koji godinama imaju nespecifične simptome (kihanje, umor, kožne reakcije) bez jasnog uzroka, kao i onima koji žele preventivno provjeriti svoju osjetljivost na alergene iz okoline i prehrane.',
  //   faq: genericFaq,
  // },

'terapija-ozljeda': {
    pricingId: 'terapija-ozljeda',
    slug: 'terapija-ozljeda',
    name: 'Terapija ozljeda',
    category: 'Zdravstvene usluge',
    heroImage: '/treatments/terapija-ozljeda.webp',
    pricingImage: '/treatments/terapija-ozljeda-pricing.webp',
    shortBenefit:
      'Brži oporavak i manje boli, bez igala i bez perioda mirovanja. Individualnim pristupom pomažemo kod širokog spektra ozljeda mekih tkiva i zglobova. Pogodno je i za profesionalne sportaše i za rekreativce.',
    description:
      'Više stotina zadovoljnih pacijenata prošlo je kroz naše ordinacije s raznim ozljedama — od petnog trna, teniskog lakta i skakačkog koljena, do uganuća, ruptura i istegnuća. Naš stručni tim individualnim pristupom pomaže u rješavanju širokog spektra ozljeda mekih tkiva i zglobova.',
    highlights: [
      'Individualan pristup svakom pacijentu',
      'Neinvazivan i bezbolan tretman',
      'Ubrzava proces oporavka',
      'Smanjuje bol i upalu',
      'Paket uključuje 6 terapija Indiba + 6 terapija K-Laser',
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
    pricingImage: '/treatments/vitaminske-infuzije-pricing.webp',
    shortBenefit:
      'Vitamini i minerali direktno u krvotok, uz 100% iskoristivost hranjivih tvari. Idealno za brži oporavak, jačanje imuniteta i više energije. Svaka terapija prilagođena je individualnim potrebama, uz stručnu konzultaciju prije tretmana.',
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
    pricingImage: '/treatments/dlacice-pricing.webp',
    shortBenefit:
      'Zauvijek bez dlačica — potpuno bezbolno, za sve tipove kože. Diodni laser sa tri valne duljine uklanja i svijetle i tamne dlačice. Većini pacijenata dlačice počinju otpadati već nakon prvog tretmana.',
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
    pricingImage: '/treatments/mrsavljenje-pricing.webp',
    shortBenefit:
      'Do željene forme bez napora — potpuno bezbolno i neinvazivno. Masne naslage uklanjamo sa svih dijelova tijela, bez perioda oporavka. Rezultat garantiramo povratom novca.',
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
    pricingImage: '/treatments/celulit-pricing.webp',
    shortBenefit:
      'Uklanjanje celulita, posebice na području nogu i stražnjice — jedan od naših najtraženijih estetskih tretmana. Uz zatezanje kože i podizanje stražnjice, rezultat garantiramo povratom novca.',
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
    pricingImage: '/treatments/anti-age-pricing.webp',
    shortBenefit:
      'Manje bora, više kolagena — mlađa, zategnuta koža bez igala. Djeluje na lice, vrat i dekolte, uz dubinsku hidrataciju kože. Dostupno u Zagrebu i Opatiji, uz rezultat garantiran povratom novca.',
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
    pricingImage: '/treatments/podbradak-pricing.webp',
    shortBenefit:
      'Definisana kontura lica, bez igle i bez liposukcije. Zatežemo kožu i uklanjamo masne naslage na području podbratka i dekoltea. Potpuno neinvazivno, bez perioda oporavka.',
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
    pricingImage: '/treatments/podocnjaci-pricing.webp',
    shortBenefit:
      'Svježiji pogled — manje tamnih krugova i vrećica, bez igle. Kombinacija zagrijavanja i stimulacije kolagena smanjuje oteklinu i tamne krugove. Uspjeh bilježimo kod čak 80% naših pacijenata.',
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
    pricingImage: '/treatments/botox-pricing.webp',
    shortBenefit:
      'Glatka koža bez mimičnih bora, uz prirodan i suptilan rezultat. Zahvat traje do 20 minuta, a prvi efekti vidljivi su već za nekoliko dana. Rezultati traju 4 do 6 mjeseci. (generički)',
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
    pricingImage: '/treatments/usne-fileri-pricing.webp',
    shortBenefit:
      'Punije, hidratizirane usne prirodnog oblika. Koristimo filere na bazi hijaluronske kiseline, uz trenutno vidljiv rezultat. Efekat traje 6 do 12 mjeseci. (generički)',
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
    pricingImage: '/treatments/jacanje-misica-pricing.webp',
    shortBenefit:
      'Jači, definisaniji mišići — bez sati provedenih u teretani. Elektromagnetna stimulacija izaziva kontrakcije koje se ne mogu postići voljnim vježbanjem. Djeluje na trbuh, stražnjicu, ruke i noge. (generički)',
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
    pricingImage: '/treatments/straznjica-pricing.webp',
    shortBenefit:
      'Podignuta, oblikovana i učvršćena stražnjica, bez operativnog zahvata. Kombinacija mišićne stimulacije i zatezanja kože daje vidljive rezultate kroz seriju tretmana. Bez perioda oporavka, odmah se vraćate svakodnevnim aktivnostima. (generički)',
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

  'estetika-kozmetologija': {
    pricingId: 'estetika-kozmetologija',
    slug: 'estetika-kozmetologija',
    name: 'Estetika i kozmetologija (generic)',
    category: 'Lice',
    heroImage: '/treatments/estetika-kozmetologija.webp',
    pricingImage: '/treatments/estetika-kozmetologija-pricing.webp',
    shortBenefit:
      'Kompletna njega lica na jednom mjestu — od laserske epilacije do dubinske hidratacije. Kombiniramo provjerene metode za zdraviju, sjajniju kožu. Svaki tretman prilagođavamo individualno vašem tipu kože.',
    description:
      'Pregled naših najtraženijih estetskih i kozmetoloških tretmana — od laserske epilacije, preko Hydrafaciala i skin-boostera, do hidro-dermoabrazije i radiofrekventne njege kože. Svaki tretman biramo i prilagođavamo prema potrebama vaše kože.',
    highlights: [
      'Više tretmana na jednom mjestu',
      'Prilagođeno tipu i stanju kože',
      'Moderna oprema i provjerene metode',
      'Bez dugog perioda oporavka',
    ],
    process: [
      { title: 'Konsultacija', text: 'Analiziramo stanje vaše kože i predlažemo najprikladniji tretman.' },
      { title: 'Tretman', text: 'Odabrani tretman provodimo prilagođenom tehnikom i opremom.' },
      { title: 'Njega nakon tretmana', text: 'Dajemo preporuke za njegu kože kod kuće radi dužeg trajanja rezultata.' },
    ],
    forWhom:
      'Namijenjeno svima koji žele unaprijediti izgled i zdravlje kože, bez obzira na tip kože ili specifičan problem koji žele riješiti.',
    faq: genericFaq,
  },

  'opca-medicina': {
    pricingId: 'opca-medicina',
    slug: 'opca-medicina',
    name: 'Opća medicina i dijagnostika (generic)',
    category: 'Zdravstvene usluge',
    heroImage: '/treatments/opca-medicina.webp',
    pricingImage: '/treatments/opca-medicina-pricing.webp',
    shortBenefit:
      'Pregledi, dijagnostika i osnovna zdravstvena skrb na jednom mjestu. Od redovnih kontrola do hitnih pregleda, brzo i bez čekanja. Naš tim opće medicine uvijek vam je dostupan.',
    description:
      'Nudimo kompletan raspon usluga opće medicine — od prvih i kontrolnih pregleda, preko dijagnostike (EKG, mjerenje tlaka, uzorkovanje krvi), do izdavanja medicinske dokumentacije i recepata. Dostupni smo i za pregled u kući.',
    highlights: [
      'Prvi i kontrolni pregledi',
      'Dijagnostika i laboratorijske pretrage',
      'Mogućnost pregleda u kući',
      'Brzo izdavanje dokumentacije i recepata',
    ],
    process: [
      { title: 'Zakazivanje', text: 'Dogovaramo termin prema vašim potrebama i hitnosti.' },
      { title: 'Pregled', text: 'Liječnik opće medicine obavlja pregled i po potrebi dijagnostiku.' },
      { title: 'Nalaz i preporuke', text: 'Dobivate nalaz, preporuke i, po potrebi, terapiju ili recept.' },
    ],
    forWhom:
      'Namijenjeno svima kojima je potreban pregled liječnika opće medicine — redovna kontrola, hitno stanje, ili dijagnostička pretraga.',
    faq: genericFaq,
  },

  'medicinske-intervencije': {
    pricingId: 'medicinske-intervencije',
    slug: 'medicinske-intervencije',
    name: 'Medicinske intervencije i terapije (generic)',
    category: 'Zdravstvene usluge',
    heroImage: '/treatments/medicinske-intervencije.webp',
    pricingImage: '/treatments/medicinske-intervencije-pricing.webp',
    shortBenefit:
      'Brza i stručna pomoć za manje medicinske intervencije. Od infuzija do zbrinjavanja rana, sve u sigurnom ordinacijskom okruženju. Profesionalno osoblje, bez čekanja.',
    description:
      'Pružamo manje medicinske intervencije i terapije — intravenske i intramuskularne injekcije, previjanje rana, zaustavljanje krvarenja, tamponadu nosa i uklanjanje stranih tijela. Sve u sigurnom, kontroliranom okruženju.',
    highlights: [
      'Stručno osoblje i sterilno okruženje',
      'Brza intervencija bez čekanja',
      'Širok raspon manjih zahvata',
      'Pogodno i za hitne situacije',
    ],
    process: [
      { title: 'Procjena', text: 'Kratka procjena stanja i potrebne intervencije.' },
      { title: 'Intervencija', text: 'Intervencija se izvodi stručno i uz maksimalnu pažnju za vašu udobnost.' },
      { title: 'Upute za dalje', text: 'Dobivate upute za njegu i eventualnu kontrolu.' },
    ],
    forWhom:
      'Namijenjeno svima kojima je potrebna manja medicinska intervencija — od injekcija do zbrinjavanja manjih ozljeda.',
    faq: genericFaq,
  },

  'fizikalna-terapija': {
    pricingId: 'fizikalna-terapija',
    slug: 'fizikalna-terapija',
    name: 'Fizikalna i regenerativna terapija (generic)',
    category: 'Zdravstvene usluge',
    heroImage: '/treatments/fizikalna-terapija.webp',
    pricingImage: '/treatments/fizikalna-terapija-pricing.webp',
    shortBenefit:
      'Ubrzajte oporavak i smanjite bol uz moderne fizikalne terapije. Djelujemo na cirkulaciju, regeneraciju tkiva i mišićni tonus. Bez lijekova, bez perioda mirovanja.',
    description:
      'Nudimo širok raspon fizikalnih i regenerativnih terapija — od radiofrekventne regeneracije tkiva, preko limfne drenaže, do neuromuskularne stimulacije. Terapije potiču cirkulaciju, smanjuju upalu i ubrzavaju oporavak tkiva.',
    highlights: [
      'Ubrzava regeneraciju tkiva',
      'Smanjuje bol i upalu',
      'Poboljšava cirkulaciju i mišićni tonus',
      'Bez lijekova i bez perioda mirovanja',
    ],
    process: [
      { title: 'Procjena', text: 'Analiziramo vaše stanje i biramo najprikladniju terapiju.' },
      { title: 'Terapija', text: 'Terapija se provodi ciljano na tretirano područje.' },
      { title: 'Praćenje napretka', text: 'Pratimo napredak kroz seriju terapija do željenog rezultata.' },
    ],
    forWhom:
      'Namijenjeno svima koji se bore s bolovima, upalama, slabom cirkulacijom ili žele ubrzati oporavak nakon napora ili ozljede.',
    faq: genericFaq,
  },

  nutricionizam: {
    pricingId: 'nutricionizam',
    slug: 'nutricionizam',
    name: 'Nutricionizam i savjetovanje (generic)',
    category: 'Zdravstvene usluge',
    heroImage: '/treatments/nutricionizam.webp',
    pricingImage: '/treatments/nutricionizam-pricing.webp',
    shortBenefit:
      'Personalizovan plan ishrane baziran na stvarnoj analizi vašeg tijela. Stručno savjetovanje za mršavljenje, energiju i opće zdravlje. Konkretan plan, ne generički savjeti.',
    description:
      'Kroz tjelesnu analizu i stručno nutricionističko savjetovanje kreiramo plan ishrane prilagođen vašim ciljevima — bilo da je riječ o mršavljenju, više energije, ili općem poboljšanju zdravlja.',
    highlights: [
      'Detaljna tjelesna analiza s tumačenjem',
      'Individualno prilagođen plan ishrane',
      'Stručno vođeno savjetovanje',
      'Fokus na dugoročne, održive rezultate',
    ],
    process: [
      { title: 'Analiza', text: 'Provodimo tjelesnu analizu i razgovor o vašim ciljevima.' },
      { title: 'Plan', text: 'Kreiramo personalizovan plan ishrane prilagođen vašem stilu života.' },
      { title: 'Praćenje', text: 'Pratimo napredak i po potrebi prilagođavamo plan.' },
    ],
    forWhom:
      'Namijenjeno svima koji žele mršaviti, poboljšati energiju, ili jednostavno razumjeti kako ishrana utječe na njihovo zdravlje.',
    faq: genericFaq,
  },
};

export function getTreatmentBySlug(slug) {
  return treatments[slug] || null;
}