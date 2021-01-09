const lang = 'sk';
const { faqContent } = require('./en');
const langItems = require('./langItems');

module.exports = {
  lang,
  logo: '/index-files/logo-sk.png',
  introText: `"Myrtana, ostrov Vaduz, krátko\n predtým
vytvorenie magickej bariéry..."`,
  teamSoulfireLabel: 'Tím SoulFire',
  homepageDescription: `
   <h2 class="navtext">Informácie</h2>
   <span class="info-txt txt-shadow">História Khorinisu je datadisk pre populárnu hru Gothic II, ktorý hovorí nový príbeh z búrlivých časov pred vytvorením Magickej bariéry, konkrétne desať rokov pred udalosťami prvej a druhej časti tejto ságy.<br><br>Vydanie projektu sa plánuje na dve časti – prvá sa bude odohrávať na novom ostrove Vaduz a druhá na ostrove Khorinis.</span><br><br>
   <h2 class="navtext">Úvod</h2>
   <span class="info-txt txt-shadow">Dej datadisku História Khorinisu je zasadený na ostrov Vaduz, ktorý je súčasťou Kráľovstva Myrtany, dôležitým centrom obchodu, ťažby a poľnohospodárstva. Na Vaduze môžme nájsť veľké mesto, mnoho fariem, doly, krčmy, súperiace cechy obchodníkov, Kláštor Adanosa a ďalšie zaujímavé miesta, čakajúce na objavenie.<br><br>Hlavnou postavou bude Lars, ktorého život sa drasticky zmení, kvôli vplyvu záhadných intríg. Hráč se bude môcť rozhodnúť, ku ktorej vplyvnej frakcií sa pridá a ovplyvní svoj osud a osud svojich nepriateľov. Behom hry sa stretnete z veľa známymi postavami zo sveta Gothic a stretnete sa z ich životom pred vytvorením Bariéry.<br><br>
   <h2 class="navtext">Čo tento mod ponúka?</h2>
   <ul class="txt-shadow">
            <li class="info-list">Prvý projekt fanúšikov na svete s profesionálnym dabingom!
            </li><li class="info-list">Ostrov Vaduz — úplne nový svet, ktorý je oveľa väčší ako tie v predchádzajúcich verziách.
            </li><li class="info-list">Khorinis, Banícke údolie a Stará baňa ako ste ju nikdy nevideli!
            </li><li class="info-list">Pozornosť na súdržnosť s príbehom ságy.
            </li><li class="info-list">Možnosť použiť štít.
            </li><li class="info-list">Množstvo pokladov na nájdenie.
            </li><li class="info-list">Vedľajšie úlohy.
            </li><li class="info-list">Humoristické elementy.
            </li><li class="info-list">Nové frakcie, veci a brnenia.
            </li><li class="info-list">Profesionálny hudobný doprovod, vytvorený špeciálne pre potreby tohto datadisku.
            </li><li class="info-list">Nové zručnosti (pokročilé kováčstvo, varenie atď.).
            </li><li class="info-list">Vysoké množstvo nových časticových efektov.
            </li><li class="info-list">A veľa ďalších vecí.
        </li></ul>
  `,
  faqContent,
  videoProductionHeadline: 'Naša video produkcia',
  footerTitle: `Web vyvinutý tímom SoulFire. ©${new Date().getFullYear()} SoulFire. Všetky práva vyhradené.`,
  footerBottomTitle: 'Všetky tu uverejnené materiály alebo odkazy na ne sú majetkom tímu SoulFire.',
  directorChiefLabel: 'riaditeľ',
  programmingChiefLabel: 'programovanie',
  gameplayChiefLabel: 'programovanie hry',
  levelDesignChiefLabel: 'level design',
  screenplayChiefLabel: 'scenár',
  PRChiefLabel: 'PR',
  wikiTeamChiefLabel: 'wiki tím',
  productManagementName: 'Manažment produktu',
  graphicsDepartmentName: 'Grafika',
  scenarioDepartmentName: 'Scenár',
  LDDepartmentName: 'Level Design',
  toolsDepartmentName: 'Programovanie nástrojov',
  gameplayDepartmentName: 'Skriptovanie hrateľnosti',
  soundDesignDepartmentName: 'Zvukový dizajn',
  wikiTeamDepartmentName: 'Tím Wiki',
  PRTeamDepartmentName: 'Vzťahy s verejnosťou',
  distinguishedMembersDepartmentName: 'Vážení členovia',
  header: {
    lang,
    langItems: langItems.items,
    informationsLabel: 'Informácie',
    recruitmentLabel: 'Nábor',
    videosLabel: 'Videá',
    teamLabel: 'Tím SoulFire',
    supportLabel: 'Podpora',
  },
  seo: {
    domain: 'https://historyofkhorinis.org',
    lang,
    recruitmentTitle: 'Nábor',
    teamTitle: 'Zoznam tímov',
    homeTitle: 'Domovská stránka',
    description: 'História Khorinisu - prequel Gothic hry'
  },
}
