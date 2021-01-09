const lang = 'ro';
const { faqContent } = require('./en');
const langItems = require('./langItems');

module.exports = {
  lang,
  logo: '/index-files/logo-ro.png',
  introText: `"Myrtana, Insula Vaduz, cu puțin timp înainte\n de crearea barierei magice..."`,
  teamSoulfireLabel: 'Echipa SoulFire',
  homepageDescription: `
   <h2 class="navtext">Informatie</h2>
   <span class="info-txt txt-shadow">Myrtana, Insula Vaduz, cu puțin timp înainte de crearea barierei magice si nu după mult timp de la începutul razboiului cu orcii. Datorită soartei, ducând o viață destul de monotonă, Lars devine participant întamplărilor care schimbă totul. În împrejurări misterioase, doisprezece dintre cei mai puternici magicieni ai regatului conduși de faimosul Magician de Foc, Xardas, ajung pe insulă. Nimeni nu știe ce fac acolo. Singurul lucru care se știe este că intenționează în curând să-și continue călătoria.
<br><br>Lars, după ce a ajutat magicienii, va primi o propunere de a călători cu ei pe Insula Khorinis. Magicienii vor crea o barieră magică pentru a izola prizonierii de lumea exterioară. Eroul nostru va primi diferite sarcini (nu numai de la magicieni), ceea ce poate fi o adevărată provocare pentru jucător.</span><br><br>
   <h2 class="navtext">Caracter și lume</h2>
   <span class="info-txt txt-shadow">Lars este un tânăr care, împreună cu tatăl său (fost soldat al armatei regale), are o mică fierărie lângă orașul Vaduz. Tatăl său, pe lângă faptul că-l învață profesia, îl ajuta si în luptă. Visul său este ca fiul lui să găsească o slujbă pașnică și că nu va lua parte în bătălii.
<br><br>El însuși, ca veteran al războaielor cu orci, nu se descurcă bine cu trauma. După variola și moartea soției sale bea foarte mult băgându-l în mai multe probleme. Totuși, așa cum se pare răul inca n-a venit ...<br><br>Magicienii ajung pe insulă și, după ce îndeplinești o sarcină dată de ei îți oferă o colaborare și mergi cu ei pe Insula Khorinis. Ce vei găsi acolo? Vechiul port din Gothic 2 va fi de nerecunoscut. Zeci de nave ancorate, marinari, negustori , paladini, prizonieri și călători vor umple întregul port. În afară de acestea, întregul oraș va fi revigorat și extins.Insula Khorinis va arăta diferit: toate casele arse și construcțiile distruse vor arăta la fel de noi, vor exista mai multe drumuri, mai multe persoane, mai multe gospodării, hanuri și alte obiecte interesante.<br><br>Valea Minelor va arăta diferit. Tabăra veche, odată în ruină o să arate ca nouă, Cetatea din Munte și minele prăbușite vor fi pline de viață. Vor exista câteva mine și nu numai în Valea Minelor, ci și în Khorinis. Desigur, accesul la Valea Minelor va fi restricționat, nimeni nu va putea intra. Ve-ti avea nevoie de un document pentru trecere.</span><br><br>
   <h2 class="navtext">Ce oferă acest mod?</h2>
   <ul class="txt-shadow">
            <li class="info-list">Primul proiect al fanilor din lume cu dublare profesională.
            </li><li class="info-list">Protagonist nou.
            </li><li class="info-list">Insula Vaduz: lume nouă, mult mai mare decât cele din versiunile anterioare!
            </li><li class="info-list">Khorinis, Valea Minelor și Vechea Mină așa cum nu a-ți mai văzut până acum!
            </li><li class="info-list">Atentie la acordul poveștii sagei.
            </li><li class="info-list">Noi modele 3D.
            </li><li class="info-list">Abilitatea de a folosi un scut.
            </li><li class="info-list">Multe comori pentru a fi găsite.
            </li><li class="info-list">Quest-uri secundare.
            </li><li class="info-list">Elemente umoristice.
            </li><li class="info-list">Obiecte noi.
            </li><li class="info-list">Texturi noi.
            </li><li class="info-list">Guild-uri și armuri noi.
            </li><li class="info-list">Coloana sonoră profesională compusă în special pentru nevoile acestei modificări.
            </li><li class="info-list">SFX nou.
            </li><li class="info-list">Numărul mare de PFX noi.
            </li><li class="info-list">și multe altele.
        </li></ul>
  `,
  faqContent,
  videoProductionHeadline: 'Producția noastră video',
  footerTitle: `Site web dezvoltat de echipa SoulFire. ©${new Date().getFullYear()} SoulFire. Toate drepturile rezervate.`,
  footerBottomTitle: 'Toate materialele publicate sau menționate aici sunt proprietatea echipei SoulFire.',
  directorChiefLabel: 'director',
  programmingChiefLabel: 'programare',
  gameplayChiefLabel: 'programarea jocului',
  levelDesignChiefLabel: 'level design',
  screenplayChiefLabel: 'scenariu',
  PRChiefLabel: 'PR',
  wikiTeamChiefLabel: 'wiki echipei',
  productManagementName: 'Management de produs',
  graphicsDepartmentName: 'Grafică',
  scenarioDepartmentName: 'Scenariu',
  LDDepartmentName: 'Level Design',
  toolsDepartmentName: 'Programarea instrumentelor',
  gameplayDepartmentName: 'Script de joc',
  soundDesignDepartmentName: 'Design sunet',
  wikiTeamDepartmentName: 'Echipa Wiki',
  PRTeamDepartmentName: 'Relatii publice',
  distinguishedMembersDepartmentName: 'Membri Distinși',
  header: {
    lang,
    langItems: langItems.items,
    informationsLabel: 'Informații',
    recruitmentLabel: 'Recrutare',
    videosLabel: 'Videoclipuri',
    teamLabel: 'Echipa SoulFire',
    supportLabel: 'A sustine',
  },
  seo: {
    domain: 'https://historyofkhorinis.org',
    lang,
    recruitmentTitle: 'Recrutare',
    teamTitle: 'Lista echipelor',
    homeTitle: 'Pagina principala',
    description: 'Istoria Khorinisului - prequel al jocului Gothic'
  },
}
