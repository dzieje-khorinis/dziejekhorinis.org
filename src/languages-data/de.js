const langItems = require('./langItems');
const { faqContent } = require('./en');
const lang = 'de';

module.exports = {
  lang,
  logo: '/index-files/logo-de.png',
  introText: `"Myrtana, die Insel Vaduz, nicht\n lange zuvor
die Schaffung einer magischen Barriere..."`,
  teamSoulfireLabel: 'SoulFire Mannschaft',
  homepageDescription: `
   <h2 class="navtext">Übersicht</h2>
   <span class="info-txt txt-shadow">„Die Geschichte von Khorinis“ ist eine unabhängige Erweiterung zur beliebten PC-Rollenspielreihe „Gothic“, welche die turbulenten Geschehnisse in der Zeit vor der Entstehung der magischen Barriere beleuchtet und die Geschichte 10 Jahre vor den Ereignissen des ersten Teils der Saga erzählt.
</span><br><br><span class="info-txt txt-shadow">Geplant ist das Projekt in zwei Teilen zu veröffentlichen - der erste Teil wird sich um die neue Insel „Vaduz“ drehen, wohingegen der zweite Teile auf der Insel Khorinis spielt.
</span><br><br>
   <h2 class="navtext">Handlung</h2>
   <span class="info-txt txt-shadow">Die Handlung von „Die Geschichte von Khorinis“ beginnt auf Vaduz, einer Insel im Königreich Myrtana und wichtiges Zentrum für Handel, Bergbau und Landwirtschaft.<br><br>Der Spieler schlüpft in die Rolle einer Figur namens Lars, dessen Leben sich durch eine geheimnisvolle Intrige drastisch ändert. Wie gewohnt hat der Spieler die freie Wahl sich einer Gilde anzuschließen und damit nicht nur über sein eigenes Schicksal, sondern auch über das seiner Feinde zu entscheiden. In der Spielwelt stoßen wir auf viele bekannte Gesichter aus dem Gothic-Universum und ergründen ihre Erlebnisse aus der Zeit vor der magischen Barriere.</span><br><br>
   <h2 class="navtext">Inhalt</h2>
   <ul class="txt-shadow">
            <li class="info-list">Das erste weltweite Fan-Projekt mit professioneller, schauspielerischer Synchronisation.
            </li><li class="info-list">Die Insel Vaduz – eine komplett neue Spielwelt, die deutlich größer ist als die der vorherigen Teile.
            </li><li class="info-list">Khorinis, das Minental und die alte Mine in einem völlig neuen Setting.
            </li><li class="info-list">Eine stringente Handlung unter genauer Berücksichtigung der Gothic-Saga.
            </li><li class="info-list">Dort existiereneine riesige Stadt, zahlreiche Bauernhöfe, Minen, Tavernen, rivalisierende Handelsgilden, Adanoskloster und viele andere atemberaubende Schauplätze, die darauf warten entdeckt zu werden.
            </li><li class="info-list">Nutzung von Schutzschilden möglich.
            </li><li class="info-list">Viele Schätze, die es zu entdecken gilt.
            </li><li class="info-list">Charaktere mit komplexen und originellen Nebenmotiven.
            </li><li class="info-list">Eine gute Portion Humor.
            </li><li class="info-list">Neue Gilden, Gegenstände und Rüstungen.
            </li><li class="info-list">Professioneller Soundtrack, der ausschließlich für den Modifikationsgebrauch komponiert wurde.
            </li><li class="info-list">Neue Fähigkeiten (erlernbares Schmiedehandwerk, Kochkunst etc.).
            </li><li class="info-list">Eine Vielzahl neuer Molekularelemente.
            </li><li class="info-list">Und vieles mehr...
        </li></ul>
  `,
  faqContent,
  videoProductionHeadline: 'Unsere Videoproduktion',
  footerTitle: `Website vom SoulFire Mannschaft entwickelt. ©${new Date().getFullYear()} SoulFire. Alle Rechte vorbehalten.`,
  footerBottomTitle: 'Alle hier veröffentlichten oder referenzierten Materialien sind Eigentum des SoulFire-Mannschaft.',
  directorChiefLabel: 'direktorin',
  programmingChiefLabel: 'programmierung',
  gameplayChiefLabel: 'programmieren des gameplays',
  levelDesignChiefLabel: 'level design',
  screenplayChiefLabel: 'drehbuch',
  PRChiefLabel: 'PR',
  wikiTeamChiefLabel: 'wiki team',
  productManagementName: 'Product Management',
  graphicsDepartmentName: 'Grafik',
  scenarioDepartmentName: 'Szenario',
  LDDepartmentName: 'Level Design',
  toolsDepartmentName: 'Programmierung von Werkzeugen',
  gameplayDepartmentName: 'Gameplay Skripte',
  soundDesignDepartmentName: 'Audiogestaltung',
  wikiTeamDepartmentName: 'Wiki Team',
  PRTeamDepartmentName: 'Öffentlichkeitsarbeit',
  distinguishedMembersDepartmentName: 'Sehr geehrte Mitglieder',
  header: {
    lang,
    langItems: langItems.items,
    informationsLabel: 'Informationen',
    recruitmentLabel: 'Rekrutierung',
    videosLabel: 'Videos',
    teamLabel: 'SoulFire Mannschaft',
    supportLabel: 'Unterstützung',
  },
  seo: {
    domain: 'https://historyofkhorinis.org',
    lang,
    recruitmentTitle: 'Rekrutierung',
    teamTitle: 'Team List',
    homeTitle: 'Zuhause',
    description: 'Die Geschichte von Khorinis - Vorläufer des gotischen Spiels'
  },
}
