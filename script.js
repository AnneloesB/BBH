// ===== DATA =====

const faseNamen = ['Oriëntatie','Inzicht','Acceptatie','Verandering','Borging'];
const faseIconen = ['👁️','🔍','⚖️','🔄','🏛️'];
const faseBeschrijvingen = [
  'De zorgverlener is nog niet bekend met het beoogde zorgsysteem palliatieve zorg of ziet er geen aanleiding in om anders te werken.',
  'De zorgverlener heeft kennis nodig over de 4 kernelementen en moet inzicht krijgen in de eigen verlening van palliatieve zorg.',
  'De zorgverlener weegt voor- en nadelen af en moet overtuigd worden van de haalbaarheid.',
  'De zorgverlener is bereid maar ondervindt praktische belemmeringen bij het daadwerkelijk anders doen.',
  'Het nieuwe gedrag moet ingebed worden zodat terugval wordt voorkomen.'
];

// Alle do's
const alleDos = [
  {
    id: 'communicatie', icon: '📡',
    titel: 'Breng samen met je communicatieadviseur de kanalen in kaart',
    waarom: 'Korte, gerichte berichten via de juiste kanalen bereiken zorgverleners die je via directe weg niet bereikt. Een communicatieadviseur kent de interne en externe kanalen en doelgroepen van de organisatie.',
    fasen: [0],
    voorbeeld: 'Bespreek met je communicatieadviseur welke interne kanalen (nieuwsbrief, intranet, teamoverleg) en externe kanalen beschikbaar zijn om het thema palliatieve zorg onder de aandacht te brengen.'
  },
  {
    id: 'naar-zorgverlener', icon: '🚶',
    titel: 'Ga naar de zorgverlener toe',
    waarom: 'De zorgverlener hoeft niets extra\'s te doen. Het thema komt naar waar de professional al is.',
    fasen: [0,1],
    voorbeeld: 'Sluit met informatie over het beoogde zorgsysteem aan bij een scholing die de zorgverleners toch al volgen.'
  },
  {
    id: 'open-vraag', icon: '❓',
    titel: 'Stel de open vraag',
    waarom: 'Een goede vraag zet iemand aan het denken over eigen handelen zonder weerstand op te roepen. Informatie geven raakt de ander minder.',
    fasen: [0,1],
    voorbeeld: '\'Wanneer heb jij voor het laatst een patiënt gemarkeerd?\' of \'Hoe weet jij of een patiënt al een aanspreekpunt heeft?\''
  },
  {
    id: 'patientverhalen', icon: '💬',
    titel: 'Gebruik patiëntverhalen en naastesverhalen',
    waarom: 'Emotie opent wat ratio sluit. Herkenbare verhalen doorbreken verdedigingsmechanismen die abstracte informatie niet doorbreekt.',
    fasen: [0,1],
    voorbeeld: 'Deel het verhaal van een naaste die beschrijft hoe het gemis van een vast aanspreekpunt voelde. Gebruik materiaal uit \'Een kwestie van geluk\'.'
  },
  {
    id: 'spiegeldata', icon: '📈',
    titel: 'Bied spiegeldata aan op teamniveau',
    waarom: 'Concrete data over het eigen team maakt een probleem onmiskenbaar zonder persoonlijk aanvallend te zijn.',
    fasen: [1,2],
    voorbeeld: 'Laat zien hoeveel patiënten in dit team tijdig gemarkeerd zijn, afgezet tegen de regionale cijfers. Gebruik dit als gespreksopener, niet als aanklacht.'
  },
  {
    id: 'feedback', icon: '🤝',
    titel: 'Geef directe, veilige feedback na een concreet moment',
    waarom: 'Feedback op gedrag dat net heeft plaatsgevonden is het meest effectief. Veiligheid is voorwaarde: zonder veiligheid roept het weerstand op.',
    fasen: [1,3],
    voorbeeld: 'Na een MDO vraagt de transformatieaanjager: \'Ik zag dat patiënt X aan de orde was. Hoe kijk jij naar de fase waarin die patiënt zit?\''
  },
  {
    id: 'casuistiek', icon: '🩺',
    titel: 'Gebruik casuïstiek als leermiddel',
    waarom: 'Concrete casus over markering, PZP of casemanagement maken het beoogde zorgsysteem palliatieve zorg herkenbaar. Herkenning in de eigen praktijk werkt sterker dan theorie.',
    fasen: [1,2],
    voorbeeld: 'Breng in een MDO een casus in met de vraag: \'Op welk moment had hier de palliatieve fase gemarkeerd kunnen worden?\''
  },
  {
    id: 'rolmodel', icon: '🌟',
    titel: 'Zet een directe collega in als rolmodel',
    waarom: 'Identificatie en nabootsing: als iemand zoals ik het ook doet, moet er iets goeds in zitten.',
    fasen: [0,2],
    voorbeeld: 'Een huisarts vertelt hoe zij ertoe kwam PZP-gesprekken te voeren en wat dat opleverde voor haar patiënten.'
  },
  {
    id: 'ambassadeur', icon: '📣',
    titel: 'Activeer een lokale aandachtsvelder of ambassadeur',
    waarom: 'Een collega die structureel aanwezig is houdt palliatieve zorg levend in het team, ook als de transformatieaanjager er niet bij is.',
    fasen: [0,2],
    voorbeeld: 'Identificeer in een team de meest enthousiaste verpleegkundige over palliatieve zorg en ondersteun haar om die rol informeel op te pakken.'
  },
  {
    id: 'sociale-norm', icon: '📊',
    titel: 'Maak de sociale norm zichtbaar',
    waarom: 'Mensen willen niet afwijken van wat anderen zoals zij doen. Als de norm verschuift, verschuift het gedrag mee.',
    fasen: [2],
    voorbeeld: 'Deel in een teambijeenkomst welke organisaties in de regio al werken met een casemanager palliatieve zorg en wat dat oplevert.'
  },
  {
    id: 'waarden', icon: '🎯',
    titel: 'Verbind aan persoonlijk voordeel of waarden',
    waarom: 'Aansluitend bij wat de professional zelf belangrijk vindt verlaagt weerstand en verhoogt intrinsieke motivatie.',
    fasen: [2,3],
    voorbeeld: 'Benadruk hoe betere palliatieve zorg werkdruk verlaagt, werkvoldoening vergroot en onnodige spoedmomenten voorkomt.'
  },
  {
    id: 'groter-doel', icon: '🌿',
    titel: 'Verbind aan het grotere doel',
    waarom: 'Zorgverleners die zich verbinden aan een hoger doel zijn intrinsiek gemotiveerder en veerkrachtiger bij obstakels. Voor palliatieve zorg is dat: van kwestie van geluk naar staat van vertrouwen — betrouwbare palliatieve zorg voor alle inwoners van Midden-Nederland in 2030.',
    fasen: [2,3],
    voorbeeld: 'Sluit een gesprek af met: \'Waar doen we het eigenlijk voor?\' en koppel dat aan de centrale ambitie: van een kwestie van geluk naar een staat van vertrouwen.'
  },
  {
    id: 'routine', icon: '⚓',
    titel: 'Koppel nieuw gedrag aan een vaste routine',
    waarom: 'Gedrag gekoppeld aan een bestaand ritueel kost minder mentale energie en beklijft beter.',
    fasen: [3,4],
    voorbeeld: 'Spreek af dat in elk wekelijks teamoverleg één patiënt wordt besproken aan de hand van de surprise question.'
  },
  {
    id: 'drempel', icon: '🗺️',
    titel: 'Verlaag de zoek- en handelingsdrempel',
    waarom: 'Als het gewenste gedrag minder moeite kost, wordt het vaker vertoond, ook zonder sterke intrinsieke motivatie.',
    fasen: [3],
    voorbeeld: 'Zorg voor een eenvoudig vindbaar overzicht met het telefoonnummer van het PTMN, zodat raadplegen geen zoekwerk kost.'
  },
  {
    id: 'expertise', icon: '📞',
    titel: 'Zorg voor laagdrempelige toegang tot expertise',
    waarom: 'Zorgverleners die twijfelen schakelen geen hulp in als dat moeite kost. Drempelvrije consultatie verlaagt de actiedrempel.',
    fasen: [3],
    voorbeeld: 'Maak de consultatiemogelijkheid van het PTMN actief bekend in het team, niet via een mail maar via een concreet moment: \'Bel eens, ik ben er ook bij.\''
  },
  {
    id: 'structuur', icon: '🏗️',
    titel: 'Verankering in structuur en werkprocessen',
    waarom: 'Gedrag ingebed in structuur is minder afhankelijk van individuele motivatie. Denk aan vaste agendapunten voor PZP-gesprekken, inbedding van de surprise question in het EPD, of het structureel benoemen van een casemanager palliatieve zorg.',
    fasen: [3,4],
    voorbeeld: 'Zorg dat markering een vast onderdeel wordt van het opname- of overdrachtsformulier, zodat het standaard uitgevraagd wordt.'
  },
  {
    id: 'verantwoordelijke', icon: '👤',
    titel: 'Maak iemand verantwoordelijk voor het thema palliatieve zorg',
    waarom: 'Zonder een benoemd aanspreekpunt verwatert verantwoordelijkheid. Als één persoon het eigenaarschap draagt, blijft het thema op de agenda en is er altijd iemand die collega\'s aanspreekt, casuïstiek agendeert en de verbinding met externe partijen onderhoudt.',
    fasen: [4],
    voorbeeld: 'Geef een kwaliteitsadviseur de opdracht om palliatieve zorg blijvend te agenderen in kwaliteitsoverleggen, voortgangsgesprekken en beleidscycli — zodat het thema niet wegzakt na de implementatiefase.'
  },
];

// Voorbeelden uit de praktijk
const voorbeeldenData = [
  // Worden later toegevoegd. Structuur:
  // {
  //   id: 'v1',
  //   titel: 'Hoe we palliatieve zorg op de agenda kregen',
  //   instelling: 'Zorggroep X',
  //   type: 'inspirerend',          // of 'aandachtspunt'
  //   beschrijving: 'Wat er gebeurde en wat het opleverde.',
  //   fasen: [0, 1],                // indices in faseNamen
  //   strategieën: ['Korte berichten via alle kanalen'],
  // }
  {
    id: 'mockup-1',
    titel: 'Hier komt de titel van een inspirerend voorbeeld',
    instelling: 'Naam van de instelling — coming soon',
    type: 'inspirerend',
    beschrijving: 'Hier beschrijft een instelling wat ze hebben gedaan, wat het opleverde en wat anderen ervan kunnen leren. Dit voorbeeld wordt binnenkort toegevoegd.',
    fasen: [0],
    strategieën: ['Persoonlijke benadering'],
    email: '',
  },
  {
    id: 'mockup-2',
    titel: 'Hier komt de titel van een ander inspirerend voorbeeld',
    instelling: 'Naam van de instelling — coming soon',
    type: 'inspirerend',
    beschrijving: 'Hier beschrijft een instelling wat ze hebben gedaan, wat het opleverde en wat anderen ervan kunnen leren. Dit voorbeeld wordt binnenkort toegevoegd.',
    fasen: [1, 2],
    strategieën: ['Audit, peer review en feedback'],
    email: '',
  },
  {
    id: 'mockup-3',
    titel: 'Hier komt de titel van een voorbeeld met een leerpunt',
    instelling: 'Naam van de instelling — coming soon',
    type: 'aandachtspunt',
    beschrijving: 'Hier beschrijft een instelling wat er minder goed ging en wat ze ervan hebben geleerd. Dit voorbeeld wordt binnenkort toegevoegd.',
    fasen: [3],
    strategieën: ['Herinrichting van zorgprocessen'],
    email: '',
  },
  {
    id: 'mockup-4',
    titel: 'Hier komt de titel van een inspirerend borgingsvoorbeeld',
    instelling: 'Naam van de instelling — coming soon',
    type: 'inspirerend',
    beschrijving: 'Hier beschrijft een instelling wat ze hebben gedaan, wat het opleverde en wat anderen ervan kunnen leren. Dit voorbeeld wordt binnenkort toegevoegd.',
    fasen: [4],
    strategieën: ['Integratie in protocollen en zorgplannen'],
    email: '',
  },
  {
    id: 'v5',
    titel: 'Dit is even een testvoorbeeld',
    instelling: 'UMCU',
    type: 'inspirerend',
    beschrijving: 'Ik wil de even testen of dit goed werkt',
    fasen: [1],
    strategieën: ['Korte berichten via alle kanalen'],
    email: 'anneloes.bork@tpz-midden.nl',
  },
];

// Strategieën per fase, met gekoppelde do-id's
const fasenData = [
  {
    naam: 'Oriëntatie',
    barrières: ['Niet bekend met het beoogde zorgsysteem palliatieve zorg','Geen gevoel van urgentie voor het implementeren van het beoogd zorgsysteem'],
    strategieën: [
      { label: 'Korte berichten via alle kanalen', dos: ['communicatie'] },
      { label: 'Persoonlijke benadering', dos: ['naar-zorgverlener','ambassadeur','rolmodel'] },
      { label: 'Spiegel het eigen handelen', dos: ['open-vraag','patientverhalen'] },
    ]
  },
  {
    naam: 'Inzicht',
    barrières: ['Geen kennis of begrip','Geen zelfinzicht of overschatting van eigen verlening van het beoogd zorgsysteem'],
    strategieën: [
      { label: 'Heldere instructiematerialen en herhaling', dos: ['naar-zorgverlener','patientverhalen'] },
      { label: 'Audit, peer review en feedback', dos: ['spiegeldata','feedback','casuistiek'] },
    ]
  },
  {
    naam: 'Acceptatie',
    barrières: ['Negatieve houding of twijfel','Niet bereid of niet vertrouwend op eigen mogelijkheden'],
    strategieën: [
      { label: 'Lokale discussie en consensus', dos: ['sociale-norm','spiegeldata'] },
      { label: 'Betrek opinion leaders', dos: ['rolmodel','ambassadeur'] },
      { label: 'Demonstreer haalbaarheid via collega\'s', dos: ['waarden','groter-doel','sociale-norm'] },
    ]
  },
  {
    naam: 'Verandering',
    barrières: ['Geen tijd of vaardigheden','Het beoogd zorgsysteem past nog niet in het bestaande werkproces'],
    strategieën: [
      { label: 'Extra ondersteuning en training', dos: ['expertise','drempel','waarden'] },
      { label: 'Herinrichting van zorgprocessen', dos: ['structuur','routine'] },
      { label: 'Feedback en begeleiding', dos: ['feedback','groter-doel'] },
    ]
  },
  {
    naam: 'Borging',
    barrières: ['Terugval in oud gedrag','Het beoogd zorgsysteem nog niet structureel ingebed in de organisatie'],
    strategieën: [
      { label: 'Monitoring, feedback en reminders', dos: ['spiegeldata','feedback'] },
      { label: 'Integratie in protocollen en zorgplannen', dos: ['structuur','routine','verantwoordelijke'] },
    ]
  },
];

// ===== TABS =====
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
  if (id === 'theorie' && activeFase === null) toggleFase(0);
  if (id === 'voorbeelden') { returnFase = null; activeVbStrategie = null; activeVbType = null; renderVoorbeelden(); }
}

// ===== FASEN =====
let activeFase = null;
let activeVbStrategie = null;
let activeVbType = null;
let returnFase = null;
let returnScrollY = 0;

function toggleFase(idx) {
  const cards = document.querySelectorAll('.fase-card');
  const detail = document.getElementById('faseDetail');
  const hint = document.getElementById('detailHint');

  if (activeFase === idx) {
    cards[idx].classList.remove('active');
    detail.classList.remove('visible');
    hint.style.display = 'block';
    activeFase = null;
    return;
  }

  cards.forEach(c => c.classList.remove('active'));
  cards[idx].classList.add('active');
  activeFase = idx;

  const data = fasenData[idx];

  document.getElementById('barriereTags').innerHTML =
    data.barrières.map(b => `<span class="btag">${b}</span>`).join('');

  document.getElementById('strategieGroepen').innerHTML = data.strategieën.map(s => {
    const dosHtml = s.dos.map(doId => {
      const d = alleDos.find(x => x.id === doId);
      if (!d) return '';
      const faseBadges = d.fasen.map(f => `<span class="fase-badge">${faseIconen[f]} ${faseNamen[f]}</span>`).join('');
      return `
        <div class="do-kaart">
          <div class="do-kaart-header" onclick="toggleDoKaart(this.closest('.do-kaart'))">
            <div class="do-kaart-icon">${d.icon}</div>
            <div class="do-kaart-titel">${d.titel}</div>
            <div class="do-kaart-chevron">&#x25BC;</div>
          </div>
          <div class="do-kaart-body">
            <div class="do-kaart-waarom">${d.waarom}</div>
            <div class="do-kaart-fasen">${faseBadges}</div>
            <div class="do-kaart-voorbeeld-label">Voorbeeld</div>
            <div class="do-kaart-voorbeeld">${d.voorbeeld}</div>
          </div>
        </div>`;
    }).join('');
    const vbCount = voorbeeldenData.filter(v => v.strategieën && v.strategieën.includes(s.label)).length;
    const safeLabel = s.label.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    const vbLink = `<button class="vb-strategie-link" onclick="event.stopPropagation(); openVoorbeeldenVoorStrategie('${safeLabel}')">${vbCount > 0 ? vbCount + ' voorbeelden uit de praktijk' : 'Voorbeelden uit de praktijk'} →</button>`;
    return `
      <div class="dos-strategie-groep">
        <div class="dos-strategie-label">${s.label}${vbLink}</div>
        <div class="dos-kaarten">${dosHtml}</div>
      </div>`;
  }).join('');

  detail.classList.add('visible');
  hint.style.display = 'none';
}

function toggleDoKaart(kaart) {
  const isOpening = !kaart.classList.contains('open');
  kaart.classList.toggle('open');
  if (isOpening) {
    kaart.parentElement.querySelectorAll('.do-kaart').forEach(s => s.classList.add('open'));
  }
}

// ===== VOORBEELDEN =====
function renderVoorbeelden() {
  const filtersEl = document.getElementById('vbFilters');
  const gridEl = document.getElementById('vbGrid');
  if (!filtersEl || !gridEl) return;

  const types = [
    { key: null, label: 'Alle' },
    { key: 'inspirerend', label: 'Inspirerend' },
    { key: 'aandachtspunt', label: 'Aandachtspunt' },
  ];

  let filtersHtml = '<div class="vb-type-filters">' +
    types.map(t => `<button class="vb-filter-btn${activeVbType === t.key ? ' active' : ''}" onclick="setVbType(${t.key ? `'${t.key}'` : 'null'})">${t.label}</button>`).join('') +
    '</div>';

  if (activeVbStrategie) {
    filtersHtml += `<div class="vb-strategie-chip">Strategie: ${activeVbStrategie} <button class="vb-chip-sluit" onclick="activeVbStrategie=null; renderVoorbeelden()">✕</button></div>`;
  }
  filtersEl.innerHTML = (returnFase !== null ? '<button class="vb-terug-knop" onclick="gaTerug()">← Terug naar strategie</button>' : '') + filtersHtml;

  let resultaten = voorbeeldenData;
  if (activeVbStrategie) resultaten = resultaten.filter(v => v.strategieën && v.strategieën.includes(activeVbStrategie));
  if (activeVbType) resultaten = resultaten.filter(v => v.type === activeVbType);

  if (resultaten.length === 0) {
    const msg = activeVbStrategie
      ? `Nog geen voorbeelden beschikbaar voor <em>${activeVbStrategie}</em>.`
      : 'Nog geen voorbeelden beschikbaar.';
    gridEl.innerHTML = `<div class="vb-leeg">${msg}<br><span>Gebruik de knop hieronder om een voorbeeld in te sturen.</span></div>`;
  } else {
    gridEl.innerHTML = resultaten.map(v => {
      const faseBadges = (v.fasen || []).map(f => `<span class="fase-badge">${faseIconen[f]} ${faseNamen[f]}</span>`).join('');
      return `<div class="vb-kaart ${v.type}">
        <div class="vb-kaart-balk"></div>
        <div class="vb-kaart-body">
          <span class="vb-badge ${v.type}">${v.type === 'inspirerend' ? '✓ Inspirerend' : '! Aandachtspunt'}</span>
          <div class="vb-titel">${v.titel}</div>
          <div class="vb-instelling">${v.instelling}</div>
          <div class="vb-beschrijving">${v.beschrijving}</div>
          <div class="vb-kaart-fasen">${faseBadges}</div>
          ${v.email ? `<a class="vb-contact-btn" href="mailto:${v.email}">Neem contact op</a>` : ''}
        </div>
      </div>`;
    }).join('');
  }
}

function setVbType(type) {
  activeVbType = type;
  renderVoorbeelden();
}

function openVoorbeeldenVoorStrategie(strategieLabel) {
  const savedFase = activeFase;
  const savedScroll = window.scrollY;
  const btn = document.querySelectorAll('.tab-btn')[2];
  activeVbStrategie = null;
  activeVbType = null;
  switchTab('voorbeelden', btn);
  returnFase = savedFase;
  returnScrollY = savedScroll;
  activeVbStrategie = strategieLabel;
  renderVoorbeelden();
}

function gaTerug() {
  const faseOmTerug = returnFase;
  const scrollOmTerug = returnScrollY;
  returnFase = null;
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-theorie').classList.add('active');
  document.querySelectorAll('.tab-btn')[1].classList.add('active');
  activeFase = null;
  if (faseOmTerug !== null) toggleFase(faseOmTerug);
  window.scrollTo({ top: scrollOmTerug, behavior: 'instant' });
}

function toggleVbForm() {
  document.getElementById('vbForm').classList.toggle('open');
}

function verstuurVoorbeeldMail() {
  const titel = document.getElementById('vbTitel').value.trim();
  const instelling = document.getElementById('vbInstelling').value.trim();
  const email = document.getElementById('vbEmail').value.trim();
  const type = document.querySelector('input[name="vbType"]:checked')?.value || '';
  const fase = document.getElementById('vbFase').value;
  const strategie = document.getElementById('vbStrategie').value.trim();
  const beschrijving = document.getElementById('vbBeschrijving').value.trim();

  const body = [
    `Titel: ${titel}`,
    `Instelling: ${instelling}`,
    `E-mailadres: ${email || '(niet ingevuld)'}`,
    `Type: ${type}`,
    `Fase: ${fase}`,
    `Strategie: ${strategie}`,
    ``,
    `Beschrijving:`,
    beschrijving,
  ].join('\n');

  window.location.href = `mailto:anneloes.bork@tpz-midden.nl?subject=${encodeURIComponent('nieuw voorbeeld BBH')}&body=${encodeURIComponent(body)}`;
  document.getElementById('vbForm').classList.remove('open');
}

function vulStrategieDropdown() {
  const sel = document.getElementById('vbStrategie');
  if (!sel) return;
  sel.innerHTML = '<option value="">Kies een strategie...</option>';
  fasenData.forEach((fase, i) => {
    const groep = document.createElement('optgroup');
    groep.label = `Fase ${i + 1} — ${fase.naam}`;
    fase.strategieën.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.label;
      opt.textContent = s.label;
      groep.appendChild(opt);
    });
    sel.appendChild(groep);
  });
}

document.addEventListener('DOMContentLoaded', vulStrategieDropdown);

// ===== GROEPEN =====
const groepData = {
  innovator: { titel: 'Aanpak voor vroege vernieuwers', items: ['Bied goede informatie en betrouwbare wetenschappelijke bronnen','Gebruik geschreven materialen en onderbouwde documentatie','Sluit aan bij hun intrinsieke motivatie en professionele nieuwsgierigheid'] },
  middle: { titel: 'Aanpak voor de brede middengroep', items: ['Zet vertrouwde collega\'s en informele voortrekkers in','Organiseer activiteiten met collega\'s en faciliteer terugkoppeling van collega\'s','Houd lokale bijeenkomsten om gezamenlijk tot afspraken te komen'] },
  laggard: { titel: 'Aanpak voor achterblijvers', items: ['Stel duidelijke regelgeving en onderlinge afspraken op','Werk met beloningen en consequenties','Bied praktische ondersteuning en zorg voor duidelijk leiderschap'] },
  mix: { titel: 'Aanpak voor een gemengde groep', items: ['Zet voor vroege vernieuwers in op informatie en bronnen','Gebruik voor de brede middengroep vertrouwde collega\'s en lokale bijeenkomsten','Geef achterblijvers duidelijke kaders, ondersteuning en consequenties','Differentieer je strategie en pas de inzet aan per subgroep'] }
};
let activeVraagBtn = null;

function selectGroep(type, el) {
  document.querySelectorAll('.groep-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function beantwoordVraag(type, btn) {
  if (activeVraagBtn) activeVraagBtn.classList.remove('actief');
  if (activeVraagBtn === btn) {
    activeVraagBtn = null;
    document.getElementById('vraagResultaat').classList.remove('visible');
    document.querySelectorAll('.groep-card').forEach(c => c.classList.remove('selected'));
    return;
  }
  btn.classList.add('actief'); activeVraagBtn = btn;
  document.querySelectorAll('.groep-card').forEach(c => c.classList.remove('selected'));
  if (type !== 'mix') { const k = document.querySelector('.groep-card.' + type); if (k) k.classList.add('selected'); }
  else document.querySelectorAll('.groep-card').forEach(c => c.classList.add('selected'));
  const data = groepData[type];
  document.getElementById('resultaatTitel').textContent = data.titel;
  document.getElementById('resultaatLijst').innerHTML = data.items.map(i => `<li>${i}</li>`).join('');
  document.getElementById('vraagResultaat').classList.add('visible');
}

