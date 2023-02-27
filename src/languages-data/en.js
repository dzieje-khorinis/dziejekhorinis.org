const lang = "en"
const langItems = require("./langItems")

module.exports = {
  lang,
  logo: "/index-files/logo-en.png",
  introText: `"Myrtana, Vaduz Island, shortly before\n creating the magical barrier..."`,
  teamSoulfireLabel: "Team SoulFire",
  homepageDescription: `
   <h2 class="navtext">Informations</h2>
   <span class="info-txt txt-shadow">The History of Khorinis is a free extension to the game Gothic II: Gold Edition, introducing a completely new story set in unsure times, over 10 years before the events of the first and second part of the Gothic series.<br />Our modification will be developed in two parts: „The History of Khorinis” happening on a new island - Vaduz and „The History of Khorinis II” on on a well-known and familiar Khorinis.
</span><br><br>
   <h2 class="navtext">Character and world</h2>
   <span class="info-txt txt-shadow">
   The action of „The History of Khorinis” takes place on Vaduz Island, forming part of the kingdom of Myrtana and its important trading, mining and agricultural center. On Vaduz we will find the city as the gateway to the rest of the island, farms, mines, taverns, rival merchant guilds, monastery of Adanos and many other places waiting to be discovered.
   <br/>
   In the game, we will have the opportunity to play the role of Lars, whose life is drastically changed due to a mysterious plot. The player will have the opportunity to join one of the influential factions - city guards or mercenaries in the services of the merchant guild - and will often decide the fate of himself and his enemies.
   <br/>
   During the game, we will meet many characters from the Gothic universe and we will know about their history from before the barrier was created. The second part of Lars' adventures will be a direct continuation of the first part, during which you will be able to travel to Khorinis - an island well known to every fan of the Gothic saga (will be show in its heyday).
   <br/>
   This project is distinguished by the highest compliance with the lore of the series, professional acting dubbing and unprecedented attention to detail.
   </span>
  <br><br>
   <h2 class="navtext">Features</h2>
   <ul class="txt-shadow">
      <li class="info-list">Professional acting dubbing and a unique proprietary soundtrack</li>
      <li class="info-list">Full compatibility with the Gothic series lore</li>
      <li class="info-list">A new main character and a new world - the Island of Vaduz</li>
      <li class="info-list">A multi-plot story and extensive side quests</li>
      <li class="info-list">New guilds, armor, items, textures and 3D models</li>
      <li class="info-list">And many others</li>
   </ul>
  `,
  faqContent: `<section class="cd-faq">
<ul class="cd-faq-categories">
<li><a class="selected" href="#basics">General</a></li>
<li><a href="#world">World </a></li>
<li><a href="#gameplay">Gameplay </a></li>
<li><a href="#other">Other</a></li>
</ul> 
<div class="cd-faq-items">
<ul id="basics" class="cd-faq-group">
<li class="cd-faq-title"><h2>General</h2></li>
<li>
<a class="cd-faq-trigger" href="#0"> What is "The History of Khorinis" and what is the nature of the project? </a>
<div class="cd-faq-content" style="display: block;">
<p>The History of Khorinis is the PREQUEL of the Gothic game, which takes place over 10 years before the events of the Gothic I and BEFORE the creation of the magic barrier.
<br/><br/>
The whole project is a NON-PROFIT - characterized by great attention to compliance with the plot of the Gothic 1-2 games saga and great attention to detail.
<br/><br/>
While creating the Story, we do not take into account Gothic 3, the third installment in the series.
Only events and characters from the following games are considered canonical: Gothic I, Gothic II and Gothic II: Night of the Raven.
<br/>
To know more about the project, check out the videos below.
</p>
<iframe style="width: 48%; height: 250px;" src="https://www.youtube.com/embed/zWJrjLYel-k" frameborder="0" allowfullscreen=""></iframe>
<iframe style="width: 48%; height: 250px;" src="https://www.youtube.com/embed/vnoVmUTamXM" frameborder="0" allowfullscreen=""></iframe>
</div>
</li>
<li>
  <a class="cd-faq-trigger" href="#0"> When is the premiere? </a>
  <div class="cd-faq-content">
  <p>Due to the COVID-19 epidemic and our dubbing and music recording sessions were blocked (and other problems with our team due to the pandemic), the release date was suspended until the situation normalized. We keep you updated on the situation on our social media, which we encourage you to follow.</p>
  </div>
  </li>
<li>
<a class="cd-faq-trigger" href="#0">At what local level is production currently taking place? </a>
<div class="cd-faq-content">
<p>Details of our progress are presented in the last summary of the work, you can watch it here:</p>
<div class="video-wrapper">
  <div class="video-holder">
      <iframe src="https://www.youtube.com/embed/fgiqs1Ukdtk" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">How many years has the project been created?  </a>
<div class="cd-faq-content">
<p>The project in its current form has been created since mid-2018, while its genesis and first concepts and ideas date back to 2008. In its current form, the game significantly differs from its original assumptions.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Are we planning to produce other mods for Gothic? </a>
<div class="cd-faq-content">
<p>Only the second part of the History of Khorinis modification is planned - it will be a direct continuation of the first part and takes place on the island of Khorinis in its heyday.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Are we going to release a demo of the mod?</a>
<div class="cd-faq-content">
<p>No, we only plan to publish the finished production.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will the modification be supported after the release?</a>
<div class="cd-faq-content">
<p>Yes, the modification will be supported as long as it is necessary.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be a multiplayer option in the History of Khorinis?</a>
<div class="cd-faq-content">
<p>It will not be possible because the nature of the project is focused only on the single-player mode.>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">How will the mod be installed?</a>
<div class="cd-faq-content">
<p>A dedicated launcher will be released for modification, which will install the modification itself. However, it will also be possible to install the modification manually - especially for Windows systems older than Windows 7. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Does Piranha Bytes know about your venture?</a>
<div class="cd-faq-content">
<p>They have not contacted us about this, but we can confirm that they know about the project. Among other things, their official Facebook profile liked ours in the past: </p>
<img width="100%" src="/PB_DK.png">
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be professional dubbing in the game? </a>
<div class="cd-faq-content">
<p>Yes, we will hear voice actors known from Gothic I and Gothic II: Night of the Raven. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will the modification be paid / free?</a>
<div class="cd-faq-content">
<p>It will be completely free and available for download from our website.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Do I need Gothic 2 to play?</a>
<div class="cd-faq-content">
<p>Yes, installation will require the full version of Gothic 2 with the Night of the Raven expansion pack.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be any graphic improvements? What will the hardware requirements be?</a>
<div class="cd-faq-content">
<p>The game will be somewhat improved compared to the original, but the hardware requirements will not change significantly. In a word - the modification can be launched on any equipment that has Gothic II: Night of the Raven without any problems.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will The History of Khorinis run on older hardware?</a>
<div class="cd-faq-content">
<p>You will play on any configuration that supports the basic Gothic II: Night of the Raven (in extreme cases, taking into account the lowering of the graphics settings of the game - f.e. the viewing distance of the area).</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">How many languages will the mod be released in?</a>
<div class="cd-faq-content">
<p>Initially, the modification will be released in Polish, then in English (several months after the Polish premiere). In turn, other translations (Czech, Italian, German and Russian) will be created on the basis of the English version.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Can I also play on Steam / GOG?</a>
<div class="cd-faq-content">
<p>Yes. Each version of Gothic, including the one from Steam / GOG, will be supported by the mod - however (for better stability) we recommend the version from GOG.com.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will the cheat console be locked?</a>
<div class="cd-faq-content">
<p>The codes will be blocked for about the first month after the release of the game - but we will restore it in one of the first post-release patches. </p>
</div>
</li>
</ul>
<ul id="world" class="cd-faq-group"> <li class="cd-faq-title"><h2>World </h2></li>
<li>
<a class="cd-faq-trigger" href="#0">How big will the world in the modification be?</a>
<div class="cd-faq-content">
<p>The surface of Vaduz Island is the size of Khorinis Island - excluding Jarkendar and Valley of Mines.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Is Vaduz canonical?</a>
<div class="cd-faq-content">
<p>The island of Vaduz is not canonical, although we keep the information contained therein as canonized and in good taste as much as possible.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">What is the climate of the island of Vaduz? </a>
<div class="cd-faq-content">
<p>The atmosphere is similar to that of Gothic 2, and it was Gothic 2 that was the 'design model' in creating the world of our production.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will we be able to visit the areas known to us from Gothic I or Gothic II: Night of Raven? </a>
<div class="cd-faq-content">
<p>Such a possibility will appear in the second part of modification - already taking place directly on the island of Khorinis.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be a Monastery of Fire / Water Mages on Vaduz? </a>
<div class="cd-faq-content">
<p>On the island of Vaduz, we will have the opportunity to visit the Adanos Monastery - which has a significant role in the plot of the game. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will we meet characters known from Gothic I and Gothic II Night of Raven on Vaduz Island? </a>
<div class="cd-faq-content">
<p>Yes, but apart from 12 mages, there will only be 2 other people.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there appear a character similar to the Mud?</a>
<div class="cd-faq-content">
<p>No, but there will be other characters - including one with an equally interesting personality.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will we add any new animals (f.e. a pig)?</a>
<div class="cd-faq-content">
<p>Pigs, hares and bears will definitely be added. Other animals are also contemplated.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Do giant monsters such as the black troll or dragons appear?</a>
<div class="cd-faq-content">
<p>Trolls will definitely appear, but we do not plan such creatures as dragons or black trolls.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">What is the political system in Vaduz?</a>
<div class="cd-faq-content">
<p>The western part of the island is governed by the governor appointed by the king, and the eastern part, Margrave - a feudal nobleman and owner of the eastern lands of Vaduz. Despite the division of the island, the margrave and the governor have the same range of powers and are equally accountable to the king (not being able to give orders to each other). </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">What ideologies will the people of Vaduz hold?</a>
<div class="cd-faq-content">
<p>Similar to those of the inhabitants of Khorinis in Gothic II: Night of Raven  - with a different view on the situation of the kingdom. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be different factions of the Paladin Order? </a>
<div class="cd-faq-content">
<p>No, the law was always one and the same. However, we have restored the feudal chivalry heard in Gothic. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Are there orcs living on Vaduz?</a>
<div class="cd-faq-content">
<p>We won't be able to meet orcs on Vaduz. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will goblin shamans emerge?</a>
<div class="cd-faq-content">
<p>Yes, they will appear, but in a completely new version.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be all kinds of Gothic I and Gothic II: Night of Raven plants?</a>
<div class="cd-faq-content">
<p>Those from Gothic II: Night of Raven will be extended with new models. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be closed underground locations like the old and new mine from the first part of Gothic series?</a>
<div class="cd-faq-content">
<p>Yes, there will be two large mines and a few smaller locations, but they will be integral parts of the world (so they, the loadings screens) will not appear .</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be dungeons full of undead in the modification?</a>
<div class="cd-faq-content">
<p>Yes, there will be places like this.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be a brothel on Vaduz?</a>
<div class="cd-faq-content">
<p>Yes, there will be one building on Vaduz with the same function as the famous Red Lantern in Khorinis.</p>
</div>
</li>
</ul>
<ul id="gameplay" class="cd-faq-group"> <li class="cd-faq-title"><h2>Gameplay </h2></li>
<li>
<a class="cd-faq-trigger" href="#0">How many main playable factions will there be?</a>
<div class="cd-faq-content">
<p>There will be two factions: the city guard and the mercenaries of the merchant guild. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will it be possible to become a water / fire mage / necromancer? </a>
<div class="cd-faq-content">
<p>No. The only type of magic intended for the player is teleportation scrolls and runes.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Why can't we become a magician?</a>
<div class="cd-faq-content">
<p>Lars is an ordinary human, not a chosen god like The Nameless One, so it would take much longer for him to master the magical arts. The second reason is that the possibility of becoming a mage would conflict with the story concept of the History of Khorinis.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be ways to move around the world faster?</a>
<div class="cd-faq-content">
<p>Yes, these will be teleportation runes that the main character can receive from other characters or buy back.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be side guilds?</a>
<div class="cd-faq-content">
<p>Yes, there will be two such guilds.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">What is the planned playing time?</a>
<div class="cd-faq-content">
<p>At the moment, it is not possible to provide such a value, it will be possible only after thorough testing. Nevertheless, we plan that it will last a similar amount of time as the story in the original Gothic II with the Night of the Raven expansion.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will the plot be divided into chapters?</a>
<div class="cd-faq-content">
<p>Yes, the game will be divided into chapters (acts), although they will function on slightly different principles than those we know from other parts of the series. For example, if you change an act, the killed monsters won't come back to life.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will the modification have multiple difficulty levels? How is the difficulty level different for genuine parts?</a>
<div class="cd-faq-content">
<p>At the moment, these questions cannot be answered, it depends on the results of internal testing and beta testing.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will the combat system change?</a>
<div class="cd-faq-content">
<p>No, we are not making any changes to the combat mechanics of the original Gothic II.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be a fight with two weapons, the so-called dual wielding?</a>
<div class="cd-faq-content">
<p>No, as we consider it unnecessary.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be more weapons?</a>
<div class="cd-faq-content">
<p>Yes, the player will have more weapons to choose from than in Gothic I and Gothic II: Night of the Raven.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be any new armor in the History of Khorinis? </a>
<div class="cd-faq-content">
<p>The number of available armor in the History of Khorinis will exceed a hundred, while most of it will not be available to the player.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be any armor from Gothic Sequel?</a>
<div class="cd-faq-content">
<p>Yes, because the official position of Piranha Bytes does not prohibit the use of any assets from the Gothic Sequel, the History of Khorinis will include, inter alia, armor of the Royal Guard from the same project.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be difficult moral choices in the game?</a>
<div class="cd-faq-content">
<p>Yes, but not too often.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be quests relating to the gods of Gothic? </a>
<div class="cd-faq-content">
<p>Regarding gods - yes - but the quests will not be "commissioned" by the gods as was the case in Gothic 3. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be investigative threads or any puzzles in the game?</a>
<div class="cd-faq-content">
<p>Yes, there will be both kinds of these activities. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will it be possible to move around the island of Vaduz without worrying about spoiling an important quest?</a>
<div class="cd-faq-content">
<p>Yes, the tasks will be written in such a way that they do not overlap - or that the death of an important character will not block the future plot (of course, only on the condition that the player will play 'fair').</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">How much will the dialogue options be developed?</a>
<div class="cd-faq-content">
<p>Naturally, in many cases, the main character will be able to answer questions or requests in more than one way. The ability to intimidate will only appear as it was in the original Gothic and Gothic II - but not as a skill.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be crafting using trophies obtained from animals (scales, fangs, claws)?</a>
<div class="cd-faq-content">
<p>Yes, but only available for crafting from specific NPCs.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be additional skills?</a>
<div class="cd-faq-content">
<p>Yes, but there won't be many of them.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will the NPCs react to our decisions made during the game or comment on them in a different way?</a>
<div class="cd-faq-content">
<p>This will look identical to the original Gothic and Gothic II.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be any additional interactions available to the player, such as mining for ore?</a>
<div class="cd-faq-content">
<p>There will be interactions like cooking, digging pits, and some other minor interactions.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will it be possible to use ladders without fear?</a>
<div class="cd-faq-content">
<p>Yes, none of the players will have to fear death due to their use anymore :D.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will alcohol have an effect on Lars, even in the form of an effect on the screen?</a>
<div class="cd-faq-content">
<p>Yes, there will even be a new dedicated animation.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will swamp herb appear in the modification?</a>
<div class="cd-faq-content">
<p>Yes, but only in the form of a plant for alchemical use. It will not be possible to prepare joins from it. Regular tobacco will be available for smoking.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be horse riding?</a>
<div class="cd-faq-content">
<p>There will be no such possibility.</p>
</div>
</li>
</ul>
<ul id="other" class="cd-faq-group"> <li class="cd-faq-title"><h2>Others </h2></li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be easter eggs related to future events in Gothic?</a>
<div class="cd-faq-content">
<p>There will be only single such references.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be a musical easter egg in the modification (such as the performance of In Extremo in Gothic)?</a>
<div class="cd-faq-content">
<p>There will be no In Extremo performance, but we are preparing some other musical easter eggs. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be focus stones in the modification?</a>
<div class="cd-faq-content">
<p>Yes, but we don't want to reveal any details about it.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will the Demon Hunters appear?</a>
<div class="cd-faq-content">
<p>Yes, but only as a curiosity.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Are there any curses in the History of Khorinis?</a>
<div class="cd-faq-content">
<p>We make every effort to ensure that the atmosphere of the History of Khorinis brings to mind the original Gothic game - that's why there will be curses, but limited only to those from the original series.. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will we hear the old Gothic soundtrack in the game? </a>
<div class="cd-faq-content">
<p>Yes, there will be both old cult songs from two parts of Gothic series, but there will also be brand new ones created for the History of Khorinis by our musicians. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Are we going to use unrealized ideas from original parts?</a>
<div class="cd-faq-content">
<p>Yes, some of them will be used in such a way as to fit the storyline of two parts of the Gothic series and the History of Khorinis. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be legendary lyrics like "Say, is that a face you have at the front of your head, or is it a butt?"</a>
<div class="cd-faq-content">
<p>Yes, but there will only be a few such references.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be any cutscenes during the game? Will there be animated intros?</a>
<div class="cd-faq-content">
<p>Both of these things will appear.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will the characters known to us from Gothic and Gothic II: Night of the Raven that we meet in The History of Khorinis look adequately younger?</a>
<div class="cd-faq-content">
<p>Yes, but it's only 10 years and the effect will not be noticeable (especially on such an old engine as ZenGin - the Gothic game engine).</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will you be able to influence the appearance of the hero? Change of hairstyle, tattoo, etc.? </a>
<div class="cd-faq-content">
<p>No, we consider it unnecessary and not appropriate to the nature of the modification.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will we see any new NPCs faces in the modification?</a>
<div class="cd-faq-content">
<p>Yes, at the moment we have over 300 new face textures ready - and over a dozen new, additional 3D models of heads.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be any changes compared to Gothic 2 in terms of city life? Any more interesting animations, new paths to move, diagrams during the day and night of the secondary and third-party characters?</a>
<div class="cd-faq-content">
<p>Yes, NPCs will have more new activities (e.g. moving crates or repairing flat surfaces such as roofs). NPCs will also have more elaborate routines, which will make their lives even more interesting.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be trialogues (conversations of more than two characters)?</a>
<div class="cd-faq-content">
<p>Yes, there will be times when more than two characters will talk to each other.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be throwing objects in the game?</a>
<div class="cd-faq-content">
<p>No - we considered this function redundant. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be new spells? Will Water Mages stop using fire magic?</a>
<div class="cd-faq-content">
<p>There will be new spells, while Water Mages will not stop using fire magic (because they used them in Gothic 1 and Night of the Raven for a reason - elemental magic was simply never closely related to their use by mages from specific circles).</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will the hero be able to have pets?</a>
<div class="cd-faq-content">
<p>No, it won't be possible.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will you improve on the poor agility system with Gothic and Gothic II? </a>
<div class="cd-faq-content">
<p>Yes, we are rebuilding this attribute in such a way that developing it brings more benefits.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will the record system be fixed? Will I still have to make multiple entries?</a>
<div class="cd-faq-content">
<p>The save system will be tweaked as much as possible, but making multiple saves will still be advisable.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Does the engine allow higher quality models to be placed than the original?</a>
<div class="cd-faq-content">
<p>It is possible, but due to the limitations of the ZenGin engine, we use it with caution, taking a correction for optimization aspects.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Will there be Linux support?</a>
<div class="cd-faq-content">
<p>Support for Linux is planned and the ability to run Gothic II and the History of Khorinis in native mode.</p>
</div>
</li>
</ul> 
</div> 
<a href="#0" class="cd-close-panel"></a>
</section>`,
  videoProductionHeadline: "Our video production",
  footerTitle: `Website developed by SoulFire Team. ©${new Date().getFullYear()} SoulFire. All rights reserved.`,
  footerBottomTitle: "All material published or referenced herein is the property of SoulFire Team.",
  directorChiefLabel: "director",
  programmingChiefLabel: "programming",
  gameplayChiefLabel: "gameplay scripting",
  levelDesignChiefLabel: "level Design",
  screenplayChiefLabel: "screenplay",
  PRChiefLabel: "PR",
  wikiTeamChiefLabel: "wiki team",
  productManagementName: "Product Management",
  graphicsDepartmentName: "Graphics",
  scenarioDepartmentName: "Scenario",
  LDDepartmentName: "Level Design",
  toolsDepartmentName: "Programming Of Tools",
  gameplayDepartmentName: "Gameplay Scripting",
  soundDesignDepartmentName: "Sound design",
  wikiTeamDepartmentName: "Wiki Team",
  PRTeamDepartmentName: "Public Relations",
  distinguishedMembersDepartmentName: "Distinguished Members",
  header: {
    lang,
    langItems: langItems.items,
    informationsLabel: "Informations",
    recruitmentLabel: "Recruitment",
    videosLabel: "Videos",
    teamLabel: "Team SoulFire",
    supportLabel: "Support"
  },
  seo: {
    domain: "https://historyofkhorinis.org",
    lang,
    recruitmentTitle: "Recruitment",
    teamTitle: "Team List",
    homeTitle: "Homepage",
    description: "The History Of Khorinis - GOTHIC PREQUEL"
  }
}
