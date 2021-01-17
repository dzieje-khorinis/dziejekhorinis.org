const lang = 'cz';
const langItems = require('./langItems');

module.exports = {
  lang,
  logo: '/index-files/logo-cz.png',
  introText: `"Myrtana, ostrov Vaduz, nedlouho\n před
vytvoření magické bariéry..."`,
  teamSoulfireLabel: 'Tým SoulFire',
  homepageDescription: `
   <h2 class="navtext">Informace</h2>
   <span class="info-txt txt-shadow">Historie Khorinisu je datadisk pro populární hru Gothic II, jež vypráví nový příběh z bouřlivých časů před stvořením Magické bariéry, konkrétně deset let před událostmi první a druhé části této ságy.
<br><br>Vydání projektů se plánuje ve dvou částech – první se bude odehrávat na novém ostrově Vaduz a druhá na ostrově Khorinis.</span><br><br>
   <h2 class="navtext">Úvod</h2>
   <span class="info-txt txt-shadow">Děj datadisku Historie Khorinisu je zasazen na ostrov Vaduz, který je součástí království Myrtana, a je důležitým centrem pro obchod, těžbu a zemědělství. Na ostrově Vaduz najdeme obrovské město, spoustu farem, dolů, hospod, soupeřící cechy obchodníků, klášter Adanose a mnoho dalších zajímavých míst, která jen čekají na objevení.<br><br>Hlavní postavou bude Lars, jehož život se vlivem záhadných intrik dramaticky změní. Hráč se bude moci rozhodnout, ke které vlivné guildě se přidá a jak ovlivní osud nepřátel. Během hry se setkáte se spoustu postav ze světa ságy Gothic a poznáte jejich život před stvořením Bariéry.<br><br>
   <h2 class="navtext">Vlastnosti hry</h2>
   <ul class="txt-shadow">
            <li class="info-list">První fanouškovský projekt na světě s profesionálním dabingem!
            </li><li class="info-list">Ostrov Vaduz – zbrusu nový svět, jenž je mnohem větší, než ty v původních hrách!
            </li><li class="info-list">Khorinis, Hornické údolí a Starý důl, jak jej neznáte!
            </li><li class="info-list">Důraz na soudržnost s příběhem ságy.
            </li><li class="info-list">Možnost používat štít.
            </li><li class="info-list">Spousta pokladů k nalezení.
            </li><li class="info-list">Vedlejší úkoly.
            </li><li class="info-list">Zábavné prvky.
            </li><li class="info-list">Nové guildy, předměty a zbroje.
            </li><li class="info-list">Profesionální hudební doprovod složený výhradně pro tento datadisk.
            </li><li class="info-list">Nové dovednosti (pokročilé kovářství, vaření atd.)
            </li><li class="info-list">Velké množství nových částicových efektů.
            </li><li class="info-list">A mnoho dalšího.

        </li></ul>
  `,
  faqContent: `<section class="cd-faq">
<ul class="cd-faq-categories">
<li><a class="selected" href="#basics">Nejnovější </a></li>
<li><a href="#world">Svět </a></li>
<li><a href="#gameplay">Gameplay </a></li>
<li><a href="#other">Jiné </a></li>
</ul> 
<div class="cd-faq-items">
<ul id="basics" class="cd-faq-group">
<li class="cd-faq-title"><h2> Nejnovější </h2></li>
<li class="content-visible">
<a class="cd-faq-trigger" href="#0">Jaká je historie Khorinisu?</a>
<div class="cd-faq-content" style="display: none;">
    <p>Tento projekt je herním předchůdcem, 10 let před příběhem hry a PŘED vznikem magické bariéry. Vše v tomto projektu je neziskové, takže za práci nezískáváme žádné peníze. Díky ochotným přátelům máme přístup k <b>profesionálním</b> nahrávacím studiím. <br><br>Celý projekt je charakterizován <b>maximální</b> kompatibilitou se světem hry Gothic <br><br> Ještě než začnete číst, podívejte se na kanále na videa, to je nejdůležitější: <br><br></p>
<iframe style="width: 48%; height: 250px;" src="https://www.youtube.com/embed/zWJrjLYel-k" frameborder="0" allowfullscreen=""></iframe>
<iframe style="width: 48%; height: 250px;" src="https://www.youtube.com/embed/vnoVmUTamXM" frameborder="0" allowfullscreen=""></iframe>
</div> 
</li>
<li>
<a class="cd-faq-trigger" href="#0">Kdy bude Historie Khorinisu vydána?</a>
<div class="cd-faq-content">
    <p>Bohužel, <b>NEMŮŽEME</b> v této chvíli odhadnout datum vydání. Pracujeme tvrdě, dolaďujeme všechny detaily a stále zbývá 50 herců, kteří připravují dabing. Domlouváme se s nahrávacími studiemi - které nám zdarma pomáhají v našem projektu - individuálně. To stejné platí pro všechny lidi, kteří nám pomáhají. Problémem je, že velká společnost si může najmout nahrávací studio a herce na měsíc. Takže je NEMOŽNÉ odhadnout opravdové datum vydání, protože NIKDO ještě neudělal neziskový projekt v tak velkém měřítku.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude toto rozšíření za peníze/zdarma?</a>
<div class="cd-faq-content">
    <p>Rozšíření bude <b>NAPROSTO</b> zdarma a bude k dispozici ke stažení na naší stránce.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Potřebuji originální hru Gothic, abych mohl hrát?</a>
<div class="cd-faq-content">
    <p>Ano. Musíte vlastnit Gothic 2 Noc Havrana.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Ví o tom Piranha Bytes?</a>
<div class="cd-faq-content">
    <p>Ano, olajkovali náš oficiální facebookový profil! <br><img width="100%" src="/PB_DK.png"></p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">V jaké fázi se nachází herní rozšíření?</a>
<div class="cd-faq-content">
    <p>Naše rozšíření je ve fázi dávání dohromady všech prvků - přepisujeme skripty do herního kódu, do dokončeného světa umisťujeme postavy a přidáváme zároveň jejich dabing. Nezveřejňujeme žádné datum vydání, protože nevíme, zda to bude trvat dva nebo osm měsíců. Existují přibližná data, ale je zde spoustu věcí, které není možné odhadnout.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde nějaké grafické vylepšení?</a>
<div class="cd-faq-content">
    <p>Chceme, aby i hráči s low-endovým hardwarem byli schopni se bavit díky našemu rozšíření, proto zpřístupníme možnost zvolit DirectX 11 v instalaci herního rozšíření. Navíc, vytváříme naše dílo, aby vypadalo minimálně lépe, než \\"klasický\\" Gothic, ale zároveň pracujeme na grafice, která podporuje DirectX 11, takže to nám dovoluje vytvořit lepší efekty.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Kolik let je již tento projekt ve vývoji?</a>
<div class="cd-faq-content">
    <p>Koncept na Historii Khorinisu vyvstal poprvé na mysli v roce 2008, nicméně projekt měl být původně jiný, než jaký je teď. V podstatě NEEXISTUJE NIC, co by od té doby bylo použitelné. Historie Khorinisu, která je právě ve vývoji, je vytvářena v podstatě z NULY až skoro po DOBU 2 LET! Momentálně se nacházíme na nejlepší cestě, abychom projekt dokončili.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Přeložíme herní rozšíření i do dalších jazyků?</a>
<div class="cd-faq-content">
    <p>Ano, plánujeme využít komunitní překlad, lidi, kterým poskytneme nástroje na překládání a budeme je sdílet s každým, kdo nám chce pomoci. Momentálně můžeme potvrdit překlady do <b>polský</b>, <b>angličtiny</b>, <b>němčiny</b>, <b>ruštiny</b> a <b>italštiny</b>.</p>
</div>
</li>
<li><a class="cd-faq-trigger" href="#0">Máte již zkušenosti s podobnými projekty?</a>
    <div class="cd-faq-content">
        <p>Někteří členové týmu pracují, nebo pracovali v největším polském a celosvětovém IT oboru, filmových a elektronických společností, jako je například <b>Microsoft</b>, <b>Nokia</b>, <b> Autodesk </b> nebo <b>Polské Filmové Asociaci</b></p>
    </div>
</li>  
<li>
<a class="cd-faq-trigger" href="#0">Mohu to hrát na Steamu/GOGu?</a>
<div class="cd-faq-content">
        <p>Ano. Každá Gothic verze, včetně Steamu/GOGu je podporována.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Co zde bude za frakce/spolky?</a>
<div class="cd-faq-content">
        <p><b>Městská Stráž</b> a <b> Žoldák Obchodního Cechu </b>. Mágové nebudou frakcí, do které se můžete připojit.</p>
</div>
</li>
</ul>
<ul id="world" class="cd-faq-group"> <li class="cd-faq-title"><h2>Svět </h2></li>
<li>
<a class="cd-faq-trigger" href="#0">Jak velký je nový ostrov v porovnání s Khoriniským ostrovem?</a>
<div class="cd-faq-content">
        <p>Jak ostrov, tak město Vaduz, jsou 2x rovné velikosti Khorinisu.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde nějaký sněžný biom na Vaduze?</a>
<div class="cd-faq-content">
        <p>Ne, ostrov je celý zelený ;)</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">A co hrad v Hornickém Údolí?</a>
<div class="cd-faq-content">
<p>Hradu bude navrácena jeho původní sláva, už žádné rozpadlé věže!</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde nějaký mágský klášter na ostrově?</a>
<div class="cd-faq-content">
        <p>Na Vaduze se uctívá Adanos, takže je tu jeden klášter, který mu je zasvěcen.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude klášter v Hornickém Údolí vypadat o něco zachovalejší?</a>
<div class="cd-faq-content">
        <p>Ano, ruiny budou určitě upraveny.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde možnost prozkoumat Jharkendar?</a>
<div class="cd-faq-content">
        <p>Ano, a bude velice podrobně vysvětlen. Samozřejmě, portál nepoužíváme!</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">A co inubův hrob poblíž Onarovy farmy?</a>
<div class="cd-faq-content">
        <p>Pravděpodobně žádné zásadní změny nebudou provedeny na tomto místě.</p>
</div>
</li>
</ul>
<ul id="gameplay" class="cd-faq-group"> <li class="cd-faq-title"><h2>Gameplay </h2></li>
<li>
<a class="cd-faq-trigger" href="#0">Jak to, že není přístupná cesta mága?</a>
<div class="cd-faq-content">
        <p>Tím, že bychom vytvářeli oddělený příběh pro další cestu, akorát bychom byli zavaleni prací navíc na vyvažování, které by jenom oddálilo vydání našeho módu.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Kolik hodin herního času zde bude?</a>
<div class="cd-faq-content">
        <p>Přibližně stejné množství jako bylo v G2 s datadiskem.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude možnost stát se mágem/nekromancerem?</a>
<div class="cd-faq-content">
        <p>Ne, jediná magie, která bude hráči přístupná, budou kouzelné svitky.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude se měnit vizáž postavy s tím, jak bude sílit?</a>
<div class="cd-faq-content">
        <p>Ne.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Plánujete přidat vládnutí dvěma zbraněmi do módu?</a>
<div class="cd-faq-content">
        <p>Ne, bude zde pouze bojový systém štítem, nazvaný \\"USWT\\" (Universal Shield Fighting System), vytvořený našim kamarádem, Gotherem.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Jak bude fungovat systém vaření?</a>
<div class="cd-faq-content">
        <p>Převedením ingrediencí jako bobulí, sýru, medu, jablek, masa do větších jídel, které obnoví více zdraví (alternativa pro lektvary). Recepty budete nacházet ve hře.\\n</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou NPCčka reagovat/komentovat naše činy ve hře?</a>
<div class="cd-faq-content">
        <p>Samozřejmě!</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">A co těžba rudy? Vypadala velice nedokončeně v G2.</a>
<div class="cd-faq-content">
        <p>Bude zde spoustu věcí, které se budou dát těžit v našem módu!</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou zde nějaké úkoly, které budou odstartovány např. přečtením poznámky někde v dole?</a>
<div class="cd-faq-content">
        <p>Ano, nebudete zklamáni.</p>
</div>
</li>
</ul>
<ul id="other" class="cd-faq-group"> <li class="cd-faq-title"><h2>Jiné </h2></li>
<li>
<a class="cd-faq-trigger" href="#0">Jaké jsou systémové nároky?</a>
<div class="cd-faq-content">
        <p>Ještě jsme hru nedokončili, takže by nebylo moudré to odhadovat. Mód bude potřebovat asi kolem 2GB volného místa, ale budete schopni hru rozjet na jakémkoliv PC, který dokáže zvládnout Gothic 2 Noc Havrana.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Kolik prostoru bude potřeba na pevném disku?</a>
<div class="cd-faq-content">
        <p>Znovu - okolo 2 GB.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Vráti se nám Mud?</a>
<div class="cd-faq-content">
        <p>Ano.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde část, která bude k Leeově dramatu?</a>
<div class="cd-faq-content">
        <p>Je celkem jisté, že tyto události se staly až po vytvoření magické bariéry, takže ne.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou přidány nové cut scény?</a>
<div class="cd-faq-content">
<p>Ano.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou zde piráti?</a>
<div class="cd-faq-content">
<p>Ano.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Jaký druh atmosféry bude Vaduz mít - víc z G1 nebo G2?</a>
<div class="cd-faq-content">
        <p>Atmosféra bude velice podobná ze známé atmosféry G2.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude možno zaslechnout sprostou mluvu v dialozích?</a>
<div class="cd-faq-content">
        <p>Nic víc drastičtějšího, než v G1/G2 vulgarismy.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde na Vaduze nevěstinec?</a>
<div class="cd-faq-content">
        <p>Bude zde něco velice podobné Červené Lucerně z Khoriniského přístavu.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde multiplayerový mód v Historii Khorinisu?</a>
<div class="cd-faq-content">
<p>Ne.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude Khoriniský přístav obnoven?</a>
<div class="cd-faq-content">
<p>Ano.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou zde na Vaduze ženy s různými profesemi? Alchymistky, čarodějky atd.</a>
<div class="cd-faq-content">
        <p>Žádné takové ženy zde nebudou ze stejného důvodu, jako nebyly žádné ženy paladinkami v G2. Jsou tu NĚJAKÉ důležité ženy na Vaduze, ale nic radikálního.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde nějaká neutrální zbroj vůči frakcím (jako kožená zbroj nebo zbroj z důlních červů)?</a>
<div class="cd-faq-content">
        <p>Počet brnění snadno přesáhne 100, svrchování vybavení bude hráči nepřístupno.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Plánujete stále vytvořit znovu původní Gothicové frakce?</a>
<div class="cd-faq-content">
        <p>Ano. Královskou stráž, lovce démonů a jiné!</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde možnost se připojit jako učedník k více mistrům, nežli tomu bylo v G2?</a>
<div class="cd-faq-content">
<p>Ano.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Plánujete přidat nějaké nové příšery do hry?</a>
<div class="cd-faq-content">
<p></p><p>Ano, nějaké zde 'přibudou', ale nic převratného.</p><p></p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude starý soundtrack zahrnut v módu?</a>
<div class="cd-faq-content">
        <p>Ano, staré písně budou opakovány, ale také nová hudba, která bude vytvořena našimi talentovanými skladateli a orchestrem.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou těžké morální rozhodnutí součástí módu?</a>
<div class="cd-faq-content">
<p>Ano.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou postavy známé z G1-G2 vypadat mladší?</a>
<div class="cd-faq-content">
<p>Ano.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou zde nějaké easter-eggy?</a>
<div class="cd-faq-content">
        <p>Bude jich spousta, nejenom ty spjaté s Gothicem.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude paladinský řád rozdělen do nižších frakcí?</a>
<div class="cd-faq-content">
        <p>Ne. Je tu jen jeden řád. Namísto toho přidáme feudální rytířstvo, které bylo zmíněno v G1.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou zde všechny známé rostliny a byliny z G1/G2?</a>
<div class="cd-faq-content">
        <p>Ty z G2 + spousty nových.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">A co ohledně slabého vyvážení obratnosti z G1 a G2?</a>
<div class="cd-faq-content">
        <p>Je naplánováno spoustu změn, jako třeba některé frakce jsou spojeny pouze s talentem obratnosti!</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou zde nějaké úkoly, které jsou spojeny se známým božstvem ze světa Gothic?</a>
<div class="cd-faq-content">
        <p>Spojeny, ano, ale žádné mise nebudou dány přímo bohy, jako tomu bylo v G3.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">A co s pátrači?</a>
<div class="cd-faq-content">
        <p>Jenom lidé, kteří nemohli odolat temnému vlivu Beliara a Spáče se jimi stali, takže ty nebude možno spatřit v našem módu.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Přinášíte Vinovu palírnu do hry?</a>
<div class="cd-faq-content">
        <p>Ano. Alkohol bude jedním z témat v tomto módu!</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde stále možnost ukrást meč Zabijáka Draků jenom naběhnutím do jeskyně za pomoci lektvaru rychlosti?</a>
<div class="cd-faq-content">
        <p>Lokace bude změněna, takže to nebude tak snadné.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Před pádem bariéry, Khorinis nebyl zamořen bandity. Budou v tomto módu nějací?</a>
<div class="cd-faq-content">
        <p>Městské stráže tenkrát doopravdy pracovaly, takže zde bude jenom pár skupinek banditů, na které můžete narazit.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde nějaká možnost změny vizáže postavy: např. účes nebo barva kůže?</a>
<div class="cd-faq-content">
<p>Ne. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude tiché zabíjení součástí hry?</a>
<div class="cd-faq-content">
        <p>To není styl Larse - hrdiny, ani příběhu hry.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou přidány nové magické kruhy, jako je větrná nebo zemská magie?</a>
<div class="cd-faq-content">
        <p>Nikdy jsme o nich neslyšeli a nikdy je nepřidáme.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou nevyužité animace zvracení z G1 přidány?</a>
<div class="cd-faq-content">
        <p>Ne, je to zbytečné.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude tvoření, craftění součástí hry?</a>
<div class="cd-faq-content">
        <p>Ano, ale pravděpodobně to budou mít na starosti pouze NPC postavy.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude vykopávání hrobů za účelem získání předmětů součástí hry?</a>
<div class="cd-faq-content">
        <p>Zajímavé. Pokud to čas dovolí - máte to mít!.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde několik způsobů, jak dokončit misi?</a>
<div class="cd-faq-content">
<p>Ano. </p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Přitáhne pozornost na hráče vytasení meče na veřejnosti?</a>
<div class="cd-faq-content">
        <p>Samozřejmě, stejně jako v G1/G2.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude zde možnost jízdy na koni?</a>
<div class="cd-faq-content">
        <p>Ne, je to zbytečné.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Vrátíme se na Irdorathský ostrov?</a>
<div class="cd-faq-content">
        <p>Taková možnost není, 40 let před událostmi v Gothic 2, to je 29 let před děním v našem módu, Irdorath a zbylé 4 Beliárovy chrámy mysteriózně zmizely ze Země, tak praví Pyrokar.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Budou zde úkoly, které budou založeny na vyšetřování a tak podobně?</a>
<div class="cd-faq-content">
        <p>Ano, bude zde spousta úkolů tohoto typu, nebo velice podobného.</p>
</div>
</li>
<li>
<a class="cd-faq-trigger" href="#0">Bude hra rozdělena do 6 kapitol?</a>
<div class="cd-faq-content">
        <p>Ne.</p>
</div>
</li>
</ul> 
</div> 
<a href="#0" class="cd-close-panel"></a>
</section>`,
  videoProductionHeadline: 'Naše video produkce',
  footerTitle: `Web vyvinutý týmem SoulFire. ©${new Date().getFullYear()} SoulFire. Všechna práva vyhrazena.`,
  footerBottomTitle: 'Veškerý zde zveřejněný materiál nebo odkaz na něj je vlastnictvím týmu SoulFire.',
  directorChiefLabel: 'ředitel',
  programmingChiefLabel: 'programování',
  gameplayChiefLabel: 'programování hry',
  levelDesignChiefLabel: 'level design',
  screenplayChiefLabel: 'scénář',
  PRChiefLabel: 'PR',
  wikiTeamChiefLabel: 'wiki týmu',
  productManagementName: 'Produktový Management',
  graphicsDepartmentName: 'Grafika',
  scenarioDepartmentName: 'Scénář',
  LDDepartmentName: 'Level Design',
  toolsDepartmentName: 'Programování nástrojů',
  gameplayDepartmentName: 'Skriptování hry',
  soundDesignDepartmentName: 'Zvukový desig',
  wikiTeamDepartmentName: 'Wiki Tým',
  PRTeamDepartmentName: 'Vztahy s veřejností',
  distinguishedMembersDepartmentName: 'Vážení členové',
  header: {
    lang,
    langItems: langItems.items,
    informationsLabel: 'Informace',
    recruitmentLabel: 'Nábor',
    videosLabel: 'Videa',
    teamLabel: 'Tým SoulFire',
    supportLabel: 'Podpěra',
  },
  seo: {
    domain: 'https://historyofkhorinis.org',
    lang,
    recruitmentTitle: 'Nábor',
    teamTitle: 'Seznam týmů',
    homeTitle: 'Domovská stránka',
    description: 'Historie Khorinisu - prequel Gothic hry'
  },
}
