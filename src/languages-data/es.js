const lang = 'es';
const { faqContent } = require('./en');
const langItems = require('./langItems');

module.exports = {
  lang,
  logo: '/index-files/logo-es.png',
  introText: `"Myrtana, la Isla Vaduz, no mucho antes\n de la creación de la barrera mágica..."`,
  teamSoulfireLabel: 'Equipo SoulFire',
  homepageDescription: `
   <h2 class="navtext">Informations</h2>
   <span class="info-txt txt-shadow">Myrtana, la Isla Vaduz, no mucho antes de la creación de la barrera mágica y no mucho despues del inicio de la guerra con los orcos. Gracias al destino, llevando una vida bastante monótona, Lars se convierte en un participante en el evento que lo cambia todo. En misteriosas circunstancias, 12 de los más poderosos magos del reino liderados por el famoso "Gran maestro de fuego" Xardas, llegan a la isla. Nadie sabe que están haciendo ahi. Lo unico que se sabe es que planean continuar su viaje.<br><br>Lars, despues de ayudar a los magos, recibira una proposición para viajar con ellos a la Isla de Khorinis. Los magos crearán alli una barrera magica para aislar a los prisioneros del mundo exterior, al menos eso es lo que ellos dicen. Nuestro héroe recibira distintas tareas (no solo de los magos), que podrán ser un gran reto para el jugador.</span><br><br>
   <h2 class="navtext">Personaje y el mundo</h2>
   <span class="info-txt txt-shadow">Lars en un hombre joven, que junto a su padre (un ex soldado del ejército real),tiene una pequeńa herrería cerca de la ciudad de Vaduz. Su padre, aparte de enseńarle su profesión,le ayuda en sus habilidades de combate. Su sueńo es que su hijo encuentre un trabajo pacifico y que no se meta en ninguna batalla.<br><br>El mismo, como veterano en las guerras de orcos, no puede lidiar con el trauma. Después de la viruela y la muerte de su esposa, bebe mucho y se mete en más problemas. Sin embargo, como parece, lo peor está por venir ...<br><br>Los magos llegan a la isla y despues de que finalizar una de sus tareas, te ofrecen una colaboración e ir con ellos a la Isla de Khorinis. żQué encontraremos allí? El antiguo puerto de Gothic 2 será irreconocible. Docenas de barcos amarrados, marineros, comerciantes, caballeros, prisioneros y viajeros llenarán todo el vecindario del puerto. Aparte de eso, toda la ciudad será renovada y ampliada. La isla de Khorinis también se verá diferente: todas las casas quemadas y las construcciones destruidas se verán como nuevas, habrá más carreteras, a veces más personas, más casas, posadas y otros objetos interesantes.<br><br>El Valle de Minas también se verá diferente. El antiguo campamento, que estaba en ruinas, ahora se verá como nuevo, la fortaleza de la montańa y las minas colapsadas estarán llenas de vida. Habrá algunas minas y no solo en el Valle de Minas, sino también en Khorinis. Por supuesto, el acceso al Valle de Minas estará restringido, nadie podrá ingresar. Se necesitará un pase de seguridad.</span><br><br>
   <h2 class="navtext">Qué ofrece este mod?</h2>
   <ul class="txt-shadow">
            <li class="info-list">El primer proyecto del mundo de fans con doblaje profesional.
            </li><li class="info-list">Nuevo personaje principal.
            </li><li class="info-list">Isla Vaduz: ˇnuevo mundo mucho más grande que los de versiones anteriores!
            </li><li class="info-list">Khorinis, El Valle de Minas y la Vieja Mina como nunca antes habías visto!
            </li><li class="info-list">Atención al cumplimiento de la historia de la saga.
            </li><li class="info-list">Nuevos modelos 3D.
            </li><li class="info-list">Posibilidad de usar un escudo.
            </li><li class="info-list">Muchos tesoros por ser encontrados.
            </li><li class="info-list">Misiones secundarias.
            </li><li class="info-list">Elementos humorísticos
            </li><li class="info-list">Objetos nuevos            
            </li><li class="info-list">Nuevas texturas.
            </li><li class="info-list">Nuevos campamentos y armaduras.
            </li><li class="info-list">Banda sonora profesional compuesta especialmente para las necesidades de esta modificación.
            </li><li class="info-list">Nuevo SFX.
            </li><li class="info-list">Gran número de nuevos PFX.
            </li><li class="info-list">Y muchos muchos mas.
        </li></ul>
  `,
  faqContent,
  videoProductionHeadline: 'Nuestra producción de video',
  footerTitle: `Sitio web desarrollado por el equipo de SoulFire. ©${new Date().getFullYear()} SoulFire. Todos los derechos reservados.`,
  footerBottomTitle: 'Todo el material publicado o referenciado en este documento es propiedad del equipo de SoulFire.',
  directorChiefLabel: 'director',
  programmingChiefLabel: 'programación',
  gameplayChiefLabel: 'juego de programación',
  levelDesignChiefLabel: 'level design',
  screenplayChiefLabel: 'guión',
  PRChiefLabel: 'PR',
  wikiTeamChiefLabel: 'equipo wiki',
  productManagementName: 'Gestión de productos',
  graphicsDepartmentName: 'Gráficos',
  scenarioDepartmentName: 'Guión',
  LDDepartmentName: 'Level Design',
  toolsDepartmentName: 'Programación de herramientas',
  gameplayDepartmentName: 'Scripting de juego',
  soundDesignDepartmentName: 'Diseño de sonido',
  wikiTeamDepartmentName: 'Equipo Wiki',
  PRTeamDepartmentName: 'Relaciones públicas',
  distinguishedMembersDepartmentName: 'Miembros distinguidos',
  header: {
    lang,
    langItems: langItems.items,
    informationsLabel: 'Informaciones',
    recruitmentLabel: 'Reclutamiento',
    videosLabel: 'Videos',
    teamLabel: 'Equipo SoulFire',
    supportLabel: 'Apoyo',
  },
  seo: {
    domain: 'https://historyofkhorinis.org',
    lang,
    recruitmentTitle: 'Reclutamiento',
    teamTitle: 'Lista de equipos',
    homeTitle: 'Página principal',
    description: 'La Historia De Khorinis - precuela del juego Gothic'
  },
}
