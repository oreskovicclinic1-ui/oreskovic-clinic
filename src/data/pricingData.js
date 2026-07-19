// ---- PRICING DATA -------------------------------------------------------
// Single source of truth for all prices on the site (Cjenik page +
// individual treatment pages both import from here).
//
// To add a new category later: add one object here, and drop its photo
// in /public/pricing/{id}.webp. `kind: 'simple'` is a flat tier list
// (label + price). `kind: 'grouped'` is used only for hair removal,
// where items are split into sub-groups (Tijelo / Lice / Paketi).

export const categories = [
  {
    id: 'mrsavljenje',
    group: 'estetski',
    label: 'Tretmani mršavljenja',
    description:
      'Tretman osigurava brze rezultate u svim područjima tijela (trbuh, bokovi, ruke, noge i leđa).',
    kind: 'simple',
    tiers: [
      { label: '1 tretman', price: '65€' },
      { label: 'Paket 10+2 GRATIS (Gubitak do 10cm)', price: '650€' },
      { label: 'Paket 14+6 GRATIS (Gubitak do 20cm)', price: '950€' },
      { label: 'Paket 30+10 GRATIS (Gubitak do 30cm)', price: '1950€' },
    ],
  },
  {
    id: 'celulit',
    group: 'estetski',
    label: 'Anti celulitni tretmani',
    description:
      'Uklanjanje celulita, posebice na području nogu i stražnjice — jedan od najčešćih estetskih tretmana.',
    kind: 'simple',
    tiers: [
      { label: '1 tretman', price: '65€' },
      { label: 'Paket 10+2 GRATIS', price: '650€' },
      { label: 'Paket 14+6 GRATIS', price: '950€' },
      { label: 'Paket 30+10 GRATIS', price: '1950€' },
    ],
  },
  {
    id: 'dlacice',
    group: 'estetski',
    label: 'Trajno uklanjanje dlačica',
    badge: '50% OFF',
    description:
      'Svaki tretman moguće je odraditi pojedinačno ili unutar paketa. Najbolji rezultati vidljivi su nakon 6 do 8 tretmana — uz kupnju paketa rezultate garantiramo povratom novca. Dodatnih 20% popusta na kupnju paketa za dodatnu regiju.',
    kind: 'grouped',
    groups: [
      {
        groupLabel: 'Tijelo',
        items: [
          { label: 'Bikini', price: '80€', oldPrice: '160€' },
          { label: 'Prepone', price: '60€', oldPrice: '120€' },
          { label: 'Pazusi', price: '60€', oldPrice: '120€' },
          { label: 'Potkoljenice', price: '125€', oldPrice: '250€' },
          { label: 'Natkoljenice', price: '125€', oldPrice: '250€' },
          { label: 'Podlaktice', price: '80€', oldPrice: '160€' },
          { label: 'Grudi', price: '100€', oldPrice: '200€' },
          { label: 'Prsa (muškarci)', price: '125€', oldPrice: '250€' },
          { label: 'Trbuh', price: '125€', oldPrice: '250€' },
          { label: 'Stražnjica', price: '100€', oldPrice: '200€' },
          { label: 'Leđa (cijela)', price: '160€', oldPrice: '320€' },
          { label: 'Leđa (donja)', price: '110€', oldPrice: '220€' },
          { label: 'Leđa (gornja)', price: '110€', oldPrice: '220€' },
          { label: 'Trtica', price: '30€', oldPrice: '60€' },
          { label: 'Crta ispod pupka', price: '50€', oldPrice: '100€' },
          { label: 'Ramena', price: '110€', oldPrice: '220€' },
          { label: 'Vrat', price: '75€', oldPrice: '150€' },
          { label: 'Prsti', price: '25€', oldPrice: '50€' },
        ],
      },
      {
        groupLabel: 'Lice',
        items: [
          { label: 'Brada', price: '50€', oldPrice: '100€' },
          { label: 'Obrazi', price: '50€', oldPrice: '100€' },
          { label: 'Nausnice', price: '40€', oldPrice: '80€' },
          { label: 'Zalisci', price: '25€', oldPrice: '50€' },
          { label: 'Uši', price: '25€', oldPrice: '50€' },
          { label: 'Prostor između obrva', price: '25€', oldPrice: '50€' },
        ],
      },
      {
        groupLabel: 'Paketi za više regija',
        items: [
          { label: 'Cijelo lice', price: '100€', oldPrice: '200€' },
          { label: 'Cijele ruke', price: '125€', oldPrice: '250€' },
          { label: 'Cijele noge', price: '200€', oldPrice: '400€' },
          { label: 'Cijelo tijelo (ruke, noge, bikini, pazusi)', price: '400€', oldPrice: '800€' },
          { label: 'Bikini + pazusi', price: '100€', oldPrice: '200€' },
          { label: 'Ruke + pazusi', price: '150€', oldPrice: '300€' },
          { label: 'Noge + prepone + bikini', price: '250€', oldPrice: '500€' },
        ],
      },
    ],
  },
  {
    id: 'podbradak',
    group: 'estetski',
    label: 'Uklanjanje podbratka',
    description:
      'Indiba tretman uklanjanja podbratka, za razliku od liposukcije, predstavlja u potpunosti neinvazivan postupak bez igle.',
    kind: 'simple',
    tiers: [
      { label: '1 tretman', price: '65€' },
      { label: 'Paket 10+2 GRATIS', price: '650€' },
      { label: 'Paket 14+6 GRATIS', price: '950€' },
    ],
  },
  {
    id: 'podocnjaci',
    group: 'estetski',
    label: 'Uklanjanje podočnjaka',
    description:
      'Indiba tretman uklanjanja podočnjaka, za razliku od blefaroplastike, predstavlja u potpunosti neinvazivan postupak bez igle.',
    kind: 'simple',
    tiers: [
      { label: '1 tretman', price: '65€' },
      { label: 'Paket 10+2 GRATIS', price: '650€' },
    ],
  },
  {
    id: 'anti-age',
    group: 'estetski',
    label: 'Anti age tretmani',
    description:
      'Koža se dubinski hidratizira, zateže i obnavlja. Uklanjaju se bore, podiže se tonus kože i potiče proizvodnja kolagena. Bore se mogu uklanjati sa svih dijelova lica, vrata i dekoltea.',
    kind: 'simple',
    tiers: [
      { label: '1 tretman', price: '65€' },
      { label: 'Paket 10+2 GRATIS', price: '650€' },
      { label: '1 tretman PREMIUM', price: '120€' },
      { label: 'Paket 6+2 GRATIS PREMIUM tretmana', price: '720€' },
    ],
  },
  {
    id: 'estetika-kozmetologija',
    group: 'estetski',
    label: 'Estetika i kozmetologija',
    description: 'Pregled naših najtraženijih estetskih i kozmetoloških tretmana. (genericki) ',
    kind: 'simple',
    tiers: [
      { label: 'Laserska epilacija', price: '100€' },
      { label: 'Hydrafacial', price: '90€' },
      { label: 'Aplikacija botoxa', price: '120€ / 200€ / 270€' },
      { label: 'Skin-booster', price: '240€' },
      { label: 'Hydro-dermoabrazija', price: '90€' },
      { label: 'Indiba radiofrekventna terapija — estetska primjena', price: '65€' },
    ],
  },
  {
    id: 'botox',
    group: 'estetski',
    label: 'Tretmani botoksom',
    description: 'Aplikacija botoksa za uklanjanje bora, ovisno o broju tretiranih zona. (genericki) ',
    kind: 'simple',
    tiers: [
      { label: '1 zona', price: '120€' },
      { label: '2 zone', price: '200€' },
      { label: '3 zone', price: '270€' },
    ],
  },
  {
    id: 'usne-fileri',
    group: 'estetski',
    label: 'Povećavanje usana dermalnim filerima',
    description: 'Oblikovanje i hidratacija usana dermalnim filerima na bazi hijaluronske kiseline. (generički)',
    kind: 'simple',
    tiers: [
      { label: '1 ml filera', price: '250€' },
      { label: '2 ml filera (paket)', price: '450€' },
    ],
  },
  {
    id: 'jacanje-misica',
    group: 'estetski',
    label: 'Tretmani jačanja mišića',
    description:
      'Elektromagnetna stimulacija koja potiče kontrakcije mišića i ubrzava izgradnju mišićne mase. (generički)',
    kind: 'simple',
    tiers: [
      { label: '1 tretman', price: '75€' },
      { label: 'Paket 6 tretmana', price: '400€' },
      { label: 'Paket 10 tretmana', price: '650€' },
    ],
  },
  {
    id: 'straznjica',
    group: 'estetski',
    label: 'Tretmani podizanja i učvršćivanja stražnjice',
    description:
      'Kombinacija elektromagnetne stimulacije i zatezanja kože za podizanje i oblikovanje stražnjice. (generički)',
    kind: 'simple',
    tiers: [
      { label: '1 tretman', price: '75€' },
      { label: 'Paket 10+2 GRATIS', price: '750€' },
    ],
  },
  {
    id: 'terapija-ozljeda',
    group: 'zdravstveni',
    label: 'Terapije ozljeda',
    description:
      'U našim ordinacijama koristimo samo najkvalitetniju aparaturu i najučinkovitije tehnike kako bismo riješili vaše bolove.',
    kind: 'simple',
    tiers: [
      { label: '1 tretman', price: '40€' },
      { label: 'Paket 10+2 GRATIS', price: '400€' },
    ],
  },
  {
    id: 'vitaminske-infuzije',
    group: 'zdravstveni',
    label: 'Vitaminske infuzije',
    description:
      'U našim ordinacijama koristimo samo najkvalitetniju aparaturu i najučinkovitije tehnike za vašu vitalnost i oporavak.',
    kind: 'simple',
    tiers: [
      { label: '1 tretman', price: '135€' },
      { label: 'Paket 6 infuzija', price: '710€', oldPrice: '810€' },
      { label: 'Paket 12 infuzija', price: '1320€', oldPrice: '1620€' },
    ],
  },
  {
    id: 'test-alergije',
    group: 'zdravstveni',
    label: 'Test na alergije + status vitamina i minerala',
    description:
      'Brzo i jednostavno saznajte na što vaše tijelo reagira — simptomi poput kihanja, svrbeža očiju, začepljenog nosa, umora ili kožnih reakcija.',
    kind: 'simple',
    tiers: [{ label: '1 test', price: '240€', oldPrice: '360€' }],
  },
  {
    id: 'test-intolerancija',
    group: 'zdravstveni',
    label: 'Test intolerancije na hranu + status vitamina i minerala',
    description: 'Brzo i jednostavno saznajte koju biste hranu trebali izbaciti iz prehrane.',
    kind: 'simple',
    tiers: [{ label: '1 test', price: '240€', oldPrice: '360€' }],
  },
  {
    id: 'opca-medicina',
    group: 'zdravstveni',
    label: 'Opća medicina i dijagnostika',
    description: 'Pregledi, dijagnostika i osnovne medicinske usluge.',
    kind: 'simple',
    tiers: [
      { label: 'Prvi pregled liječnika opće medicine', price: '30€' },
      { label: 'Kontrolni pregled', price: '20€' },
      { label: 'Prvi pregled u kući', price: '50€' },
      { label: 'Kontrolni pregled u kući', price: '30€' },
      { label: 'Hitni pregled', price: '30€' },
      { label: 'Kontrola kroničnih bolesnika', price: '35€' },
      { label: 'Mjerenje krvnog tlaka, pulsa i saturacije', price: '5€' },
      { label: 'EKG (snimanje elektrokardiograma)', price: '25€' },
      { label: 'Uzorkovanje krvi', price: '10€' },
      { label: 'Bris nosa / grla / kože', price: '10€' },
      { label: 'Medicinsko mišljenje', price: '20€' },
      { label: 'Izdavanje potvrde', price: '10€' },
      { label: 'Izdavanje ispričnice', price: '5€' },
      { label: 'Izdavanje recepta', price: '5€' },
      { label: 'Izdavanje medicinske dokumentacije', price: '10€' },
      { label: 'Lijekovi (diklofenak, tramadol)', price: '8€' },
    ],
  },
  {
    id: 'medicinske-intervencije',
    group: 'zdravstveni',
    label: 'Medicinske intervencije i terapije',
    description: 'Hitne i manje medicinske intervencije u ordinaciji.',
    kind: 'simple',
    tiers: [
      { label: 'Intravenska infuzija', price: '130€' },
      { label: 'Intramuskularna injekcija', price: '30€' },
      { label: 'Aplikacija injekcije', price: '10€' },
      { label: 'Previjanje rane', price: '15€' },
      { label: 'Zaustavljanje manjeg krvarenja', price: '20€' },
      { label: 'Zaustavljanje velikog krvarenja', price: '35€' },
      { label: 'Tamponada nosa', price: '20€' },
      { label: 'Uklanjanje stranog tijela', price: '20€' },
    ],
  },
  {
    id: 'fizikalna-terapija',
    group: 'zdravstveni',
    label: 'Fizikalna i regenerativna terapija',
    description: 'Terapije usmjerene na regeneraciju tkiva, cirkulaciju i olakšanje boli.',
    kind: 'simple',
    tiers: [
      { label: 'Regeneracija tkiva i fibroblasta', price: '40€ / 65€' },
      { label: 'Terapija regeneracije tkiva — dubinska RF', price: '40€ / 65€' },
      { label: 'Terapija mikrocirkulacije i limfnog sustava', price: '40€ / 65€' },
      { label: 'Terapija limfne cirkulacije', price: '40€ / 65€' },
      { label: 'Limfna drenaža', price: '65€' },
      { label: 'Radiofrekventna terapija dubinskih struktura', price: '40€ / 65€' },
      { label: 'Terapijska modulacija upalnog procesa', price: '40€' },
      { label: 'Terapija kronične boli mekih tkiva', price: '40€' },
      { label: 'Neuromuskularna stimulacija za stabilizaciju trupa', price: '40€' },
      { label: 'Terapijska mišićna aktivacija', price: '40€' },
      { label: 'Terapijska neuromuskularna stimulacija', price: '40€' },
    ],
  },
  {
    id: 'nutricionizam',
    group: 'zdravstveni',
    label: 'Nutricionizam i savjetovanje',
    description: 'Analiza tijela i personalizovani planovi ishrane.',
    kind: 'simple',
    tiers: [
      { label: 'Tjelesna analiza s tumačenjem', price: '150€' },
      { label: 'Zdravstveno-nutricionističko savjetovanje', price: '150€' },
      { label: 'Savjetovanje za mršavljenje + plan', price: '150€' },
    ],
  },
];

export function extractNumber(priceString) {
  const match = priceString.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : Infinity;
}

export function getStartingPrice(category) {
  const allPrices =
    category.kind === 'grouped'
      ? category.groups.flatMap((g) => g.items.map((i) => extractNumber(i.price)))
      : category.tiers.map((t) => extractNumber(t.price));
  return Math.min(...allPrices);
}

export function getCategoryById(id) {
  return categories.find((c) => c.id === id) || null;
}

export const groupLabels = {
  estetski: 'Estetski tretmani',
  zdravstveni: 'Zdravstvene usluge',
};