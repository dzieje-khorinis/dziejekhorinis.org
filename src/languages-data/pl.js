const langItems = require("./langItems")
const lang = "pl"

module.exports = {
  lang,
  logo: "/index-files/logo-pl.png",
  introText: `"Myrtana, wyspa Vaduz, czas na krótko\n przed stworzeniem magicznej bariery..."`,
  teamSoulfireLabel: "Zespół SoulFire",
  homepageDescription: `
   <h2 class="navtext">Informacje</h2>
   <span class="info-txt txt-shadow">Dzieje Khorinis to darmowe rozszerzenie do gry Gothic II: Złota Edycja, wprowadzające całkowicie nową historię osadzoną w niepewnych czasach, na ponad 10 lat przed wydarzeniami z pierwszej oraz drugiej części sagi.
</span><br><br><span class="info-txt txt-shadow">Planowana jest produkcja dwóch modyfikacji: „Dzieje Khorinis” dziejącej się na nowej wyspie Vaduz oraz „Dzieje Khorinis II” na wyspie Khorinis.
</span><br><br>
   <h2 class="navtext">Wstęp</h2>
   <span class="info-txt txt-shadow">Akcja „Dziejów Khorinis” rozgrywa się na wyspie Vaduz, będącej częścią królestwa Myrtany i stanowiącej jej ważny ośrodek handlowy, wydobywczy oraz rolniczy. Na Vaduz znajdziemy miasto stanowiące bramę do reszty wyspy, farmy, kopalnie, gospody, rywalizujące gildie kupieckie, klasztor Adanosa i wiele innych miejsc oczekujących na odkrycie.</span><br><br>
   <span class="info-txt txt-shadow">W grze będziemy mieli okazję wcielić się w Larsa, którego życie drastycznie zmienia się za sprawą tajemniczej intrygi. Gracz będzie miał możliwość dołączenia do jednej z wpływowych frakcji – strażników miejskich lub najemników na usługach gildii kupieckiej - przy czym niejednokrotnie będzie decydował o losie swoim i swoich wrogów. Podczas rozgrywki spotkamy wiele postaci z uniwersum Gothica i poznamy ich historię jeszcze sprzed czasów powstania bariery.</span><br><br>
   <span class="info-txt txt-shadow">Druga część przygód Larsa będzie bezpośrednią kontynuacją części pierwszej, podczas której pojawi się możliwość podróży na Khorinis – wyspy dobrze znanej każdemu fanowi sagi Gothic (ukazanej w okresie jej świetności).</span><br><br>
   <span class="info-txt txt-shadow">Projekt ten wyróżnia się najwyższą zgodnością z lore sagi, profesjonalnym aktorskim dubbingiem oraz niespotykaną dbałością o szczegóły.</span><br><br>
   <h2 class="navtext">Cechy</h2>
        <ul class="txt-shadow">
          <li class="info-list">Profesjonalny dubbing aktorski oraz unikatowy, autorski soundtrack
          <li class="info-list">Pełna zgodność z lore serii Gothic
          <li class="info-list">Nowy główny bohater oraz nowy świat – wyspa Vaduz
          <li class="info-list">Wielowątkowa fabuła oraz rozbudowane zadania poboczne
          <li class="info-list">Nowe gildie, zbroje, przedmioty, tekstury i modele 3D
          <li class="info-list">I wiele, wiele innych.
        </ul>
  `,
  faqContent: `<section class="cd-faq">
<ul class="cd-faq-categories">
<li><a class="selected" href="#basics">Ogólne</a></li>
<li><a href="#world">Świat</a></li>
<li><a href="#gameplay">Rozgrywka</a></li>
<li><a href="#other">Pozostałe</a></li>
</ul> 
<div class="cd-faq-items">
<ul id="basics" class="cd-faq-group">
      <li class="cd-faq-title"><h2> Ogólne </h2></li>
      <li>
        <a class="cd-faq-trigger" href="#0"> Czym są „Dzieje Khorinis” i jaki charakter ma projekt? </a>
        <div class="cd-faq-content" style="display: block;">
          <p>Dzieje Khorinis to PREQUEL gry Gothic, którego akcja rozgrywa się na ponad 10 lat przed wydarzeniami z pierwszej części gry i PRZED powstaniem magicznej bariery.
<br/><br/>
            Całe przedsięwzięcie ma charakter NON-PROFIT – cechujące się ogromną dbałością o zgodność z fabułą sagi gier Gothic i Gothic II Noc Kruka oraz dużym przywiązaniem do szczegółów.
<br/><br/>
            Podczas tworzenia Dziejów nie bierzemy pod uwagę gry Gothic 3, będącej trzecią odsłoną serii.
            <br/><br/>
            Za kanoniczne uznajemy jedynie wydarzenia i postaci występujące w grach: Gothic, Gothic II oraz Gothic II: Noc Kruka.
            <br/>
            Aby dowiedzieć się więcej o projekcie, zachęcamy do sprawdzenia poniższych filmów.</p>
          <iframe style="width: 48%; height: 250px;" src="https://www.youtube.com/embed/pvtqCPs2MMU" frameborder="0" allowfullscreen=""></iframe>
          <iframe style="width: 48%; height: 250px;" src="https://www.youtube.com/embed/vnoVmUTamXM" frameborder="0" allowfullscreen=""></iframe>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0"> Kiedy premiera?  </a>
        <div class="cd-faq-content">
          <p>Nie jesteśmy w stanie określić, kiedy będzie miała miejsce premiera modyfikacji Dzieje Khorinis. Jednocześnie nie chcemy tego robić, starając się na pierwszym miejscu postawić na jakość przygotowywanego moda. Śledzących naszą działalność fanów pragniemy poinformować, że projekt cały czas jest rozwijany. Prosimy o cierpliwość, jak i dziękujemy za tę dotychczas okazaną.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Na jakim etapie znajduje się obecnie produkcja? </a>
        <div class="cd-faq-content">
          <p>Szczegóły dotyczące naszych postępów przedstawiliśmy w ostatnim podsumowaniu prac, do obejrzenia tutaj:</p>
          <div class="video-wrapper">
            <div class="video-holder">
                <iframe src="https://www.youtube.com/embed/fgiqs1Ukdtk" frameborder="0" allowfullscreen=""></iframe>
            </div>
          </div>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Od ilu lat powstaje projekt?  </a>
        <div class="cd-faq-content">
          <p>Projekt w obecnej formie powstaje od połowy 2018 roku, natomiast jego geneza oraz pierwsze koncepcje i pomysły sięgają roku 2008. W obecnej formie jednak gra znacząco odbiega od jej pierwotnych założeń.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy planujemy wyprodukowanie innych modyfikacji do Gothic? </a>
        <div class="cd-faq-content">
          <p>Planowana jest wyłącznie druga część modyfikacji Dzieje Khorinis – będąca bezpośrednią kontynuacją pierwszej i rozgrywająca się na wyspie Khorinis w czasach jej świetności.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy mamy zamiar wypuścić demo modyfikacji?</a>
        <div class="cd-faq-content">
          <p>Nie, planujemy tylko i wyłącznie publikację ukończonej produkcji.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy modyfikacja będzie wspierana po wydaniu?</a>
        <div class="cd-faq-content">
          <p>Tak, modyfikacja będzie wspierana tak długo, jak długo będzie to niezbędne.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będzie opcja gry wieloosobowej w Dziejach Khorinis?</a>
        <div class="cd-faq-content">
          <p>Nie będzie takiej możliwości, ponieważ charakter projektu ukierunkowany jest tylko i wyłącznie na tryb pojedynczego gracza.
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">W jaki sposób będzie przebiegać instalacja modyfikacji?</a>
        <div class="cd-faq-content">
          <p>Dla osób korzystających z wersji pudełkowej przygotujemy dedykowany launcher, który zainstaluje modyfikację w prawidłowy sposób, a także będzie wspierał dalsze aktualizacje. Oprócz tego modyfikacja będzie również dostępna w serwisie Steam.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy Piranha Bytes wie o waszym przedsięwzięciu?</a>
        <div class="cd-faq-content">
          <p>Nie kontaktowali się z nami w tej sprawie, lecz możemy potwierdzić, że wiedzą o projekcie. Między innymi ich oficjalny profil na Facebooku polubił w przeszłości nasz: </p>
          <img width="100%" src="/PB_DK.png">
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy w grze pojawi się profesjonalny dubbing? </a>
        <div class="cd-faq-content">
          <p>Tak, usłyszymy aktorów głosowych znanych z m.in. Gothic i Gothic II: Noc Kruka oraz innych gier.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy dodatek będzie płatny/darmowy?</a>
        <div class="cd-faq-content">
          <p>Do zainstalowania dodatku wymagane jest posiadanie pełnej wersji gry Gothic II: Noc Kruka. Sama modyfikacja będzie w pełni darmowa.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będą jakieś usprawnienia graficzne? Jakie będą wymagania sprzętowe?</a>
        <div class="cd-faq-content">
          <p>Gra zostanie w pewnym stopniu ulepszona względem oryginału, jednak wymagania sprzętowe nie ulegną znaczącym zmianom. Słowem - modyfikację będzie można odpalić na każdym sprzęcie, na którym bezproblemowo działa Gothic II: Noc Kruka.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy Dzieje Khorinis będą działać na starszym sprzęcie?</a>
        <div class="cd-faq-content">
          <p>Zagrasz na każdej konfiguracji, na której działa podstawowy Gothic II: Noc Kruka (w skrajnych przypadkach z uwzględnieniem obniżenia ustawień graficznych gry – np. odległości widzenia terenu). </p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">W ilu językach będzie wydana modyfikacja?</a>
        <div class="cd-faq-content">
          <p>Na początku modyfikacja będzie wydana w języku polskim i angielskim (z pełną lokalizacją) oraz niemieckim i rosyjskim (napisy). Z kolei na podstawie wersji angielskiej powstaną po premierze inne tłumaczenia (m.in. włoskie czy czeskie).</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będzie można zagrać także na Steamie/GOG-u?</a>
        <div class="cd-faq-content">
          <p>Tak. Każda wersja Gothica, włącznie z tą ze Steama/GOGa, będzie obsługiwana przez modyfikację.</p>
        </div>
      </li>
    </ul>
    <ul id="world" class="cd-faq-group"> <li class="cd-faq-title"><h2>Świat </h2></li>
      <li>
        <a class="cd-faq-trigger" href="#0">Jak duży będzie świat przedstawiony w modyfikacji?</a>
        <div class="cd-faq-content">
          <p>Wyspa Vaduz powierzchniowo jest wielkości wyspy Khorinis – bez uwzględnienia Jarkendaru i Górniczej Doliny.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy Vaduz jest kanoniczne?</a>
        <div class="cd-faq-content">
          <p>Wyspa Vaduz nie jest kanoniczna, aczkolwiek utrzymujemy zawarte tam informacje w kanonie i dobrym smaku na tyle, na ile jest to tylko możliwe.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Jaki klimat ma wyspa Vaduz? </a>
        <div class="cd-faq-content">
          <p>Klimat jest zbliżony do tego z Gothic II, i to właśnie on był ‘wzorem designerskim’ przy tworzeniu świata naszej produkcji.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będziemy mogli odwiedzić znane nam tereny z Gothic lub Gothic II? </a>
        <div class="cd-faq-content">
          <p>Taka możliwość pojawi się w drugiej części modyfikacji Dzieje Khorinis – rozgrywającej się już bezpośrednio na wyspie Khorinis.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy na Vaduz pojawi się klasztor magów ognia/wody? </a>
        <div class="cd-faq-content">
          <p>Na wyspie Vaduz będziemy mieli możliwość odwiedzenia klasztoru Adanosa – mającego znaczącą rolę w fabule rozgrywki. </p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy spotkamy postacie znane z Gothic i Gothic II na Vaduz? </a>
        <div class="cd-faq-content">
          <p>Poza dwunastoma magami, planujemy pojawienie się paru postaci pobocznych z gier.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy dodamy jakieś nowe zwierzęta (np. świnia)?</a>
        <div class="cd-faq-content">
          <p>Na pewno zostaną dodane świnie, zające i niedźwiedzie. Rozważane są też inne zwierzęta.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy pojawią się olbrzymie stwory takie jak czarny troll czy smoki?</a>
        <div class="cd-faq-content">
          <p>Na pewno pojawią się trolle, nie planujemy jednak takich stworów jak smoki lub czarne trolle.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Jaki ustrój panuje na Vaduz?</a>
        <div class="cd-faq-content">
          <p>Zachodnią częścią wyspy zarządza mianowany przez króla Gubernator, zaś wschodnią, Murgrabia – szlachcic feudalny i właściciel wschodnich ziem Vaduz. Pomimo podziału wyspy, murgrabia i gubernator mają taki sam zakres władzy oraz w takim samym stopniu odpowiadają przed królem (nie mogąc jednocześnie wydawać rozkazów sobie nawzajem). </p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Jakie ideologie będą wyznawane przez mieszkańców Vaduz?</a>
        <div class="cd-faq-content">
          <p>Podobne do tych, jakie wyznawali mieszkańcy Khorinis w Gothic II – z różnym od siebie oglądem na sytuację królestwa. </p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będą różne odłamy zakonu paladynów? </a>
        <div class="cd-faq-content">
          <p>Nie, zakon był zawsze jeden i ten sam. Przywróciliśmy natomiast rycerstwo feudalne zasłyszane w pierwszej części gry Gothic. </p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy na Vaduz żyją orkowie?</a>
        <div class="cd-faq-content">
          <p>Na Vaduz nie będziemy mogli spotkać orków. </p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy zostanie rozwinięta kultura goblinów?</a>
        <div class="cd-faq-content">
          <p>Tak, przykładem tego są między innymi goblińscy szamani.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będą wszystkie rodzaje roślin z Gothic i Gothic II?</a>
        <div class="cd-faq-content">
          <p>W modzie pojawią się rośliny występujące w Gothic II: Noc Kruka, a także nowe, z oryginalnymi modelami, istniejące tylko we florze Vaduz.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy pojawią się zamknięte podziemne lokacje jak stara i nowa kopalnia z pierwszej części gry Gothic?</a>
        <div class="cd-faq-content">
          <p>Tak, pojawią się dwie duże kopalnie i kilka pomniejszych lokacji, natomiast będą one integralnymi częściami świata (czyli nie będą pojawiać się przy wejściu do nich ekrany ładowania).</p>
        </div>
      </li>
    </ul>
    <ul id="gameplay" class="cd-faq-group"> <li class="cd-faq-title"><h2>Rozgrywka </h2></li>
      <li>
        <a class="cd-faq-trigger" href="#0">Ile będzie głównych grywalnych frakcji?</a>
        <div class="cd-faq-content">
          <p>Będą to dwie frakcje: Straż Miejska oraz najemnicy Gildii Kupieckiej. </p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będzie można zostać magiem wody/ognia/nekromantą? </a>
        <div class="cd-faq-content">
          <p>Nie. Jedyny rodzaj magii przeznaczony dla gracza to magiczne zwoje i runy teleportacyjne.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Dlaczego nie będziem można zostać magiem?</a>
        <div class="cd-faq-content">
          <p>Lars jest zwykłym człowiekiem, a nie wybrańcem bogów jak Bezimienny, więc opanowanie przez niego sztuk magicznych trwałoby o wiele dłużej. Drugi powód to fakt, że możliwość zostania magiem kłóciłaby się z koncepcją fabuły Dziejów Khorinis.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będą sposoby na szybsze przemieszczanie się po świecie?</a>
        <div class="cd-faq-content">
          <p>Tak, będą to runy teleportacyjne, które główny bohater będzie mógł otrzymać od innych postaci lub odkupić.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy pojawią się gildie poboczne?</a>
        <div class="cd-faq-content">
          <p>Tak, pojawią się dwie takie gildie.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Jaki jest planowany czas rozgrywki?</a>
        <div class="cd-faq-content">
          <p>Na chwilę obecną nie da się podać takiej wartości, będzie to możliwe dopiero po przeprowadzeniu dokładnych testów. Nie mniej planujemy, aby trwała podobną ilość czasu jak historia zawarta w oryginalnym Gothic II z dodatkiem Noc Kruka.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy fabuła będzie podzielona na rozdziały?</a>
        <div class="cd-faq-content">
          <p>Tak, modyfikacja będzie podzielona na sześć rozdziałów.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy modyfikacja będzie miała kilka poziomów trudności? Jak różni się poziom trudności w odniesieniu do oryginalnych części?</a>
        <div class="cd-faq-content">
          <p>Na chwilę obecną nie da się odpowiedzieć na te pytania, jest to zależne od wyników testów wewnętrznych oraz beta testów.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy system walki ulegnie zmianie?</a>
        <div class="cd-faq-content">
          <p>Wprowadzamy kilka subtelnych rzeczy związanych z mechaniką walki, ale nie będą one rewolucyjne.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będzie walka dwiema broniami tzw. dual wielding?</a>
        <div class="cd-faq-content">
          <p>Nie, gdyż uważamy to za niepotrzebne.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będzie więcej broni?</a>
        <div class="cd-faq-content">
          <p>Tak, gracz będzie miał do wyboru więcej broni niż w Gothic i Gothic II: Noc Kruka.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy w Dziejach Khorinis pojawią się nowe zbroje? </a>
        <div class="cd-faq-content">
          <p>Ilość występujących zbroi w Dziejach Khorinis będzie przekraczała setkę, natomiast większość z nich nie będzie dostępna dla gracza.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy pojawią się jakieś pancerze z Gothic Sequel?</a>
        <div class="cd-faq-content">
          <p>Tak, ponieważ oficjalne stanowisko Piranha Bytes nie zabrania użytku żadnych assetów z Gothic Sequel w Dziejach Khorinis pojawią się m.in. zbroje Gwardii Królewskiej z tegoż projektu.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy znajdą się zadania odnoszące się do bogów z Gothica?</a>
        <div class="cd-faq-content">
          <p>Odnoszące się do bogów - tak - ale zadania nie będą "zlecane" przez bogów jak miało to miejsce w Gothic 3.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy w grze pojawią się wątki śledcze bądź jakiekolwiek zagadki?</a>
        <div class="cd-faq-content">
          <p>Tak, pojawią się oba rodzaje tych aktywności.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy po wyspie Vaduz będzie się można przemieszczać swobodnie bez obawy o zepsucie ważnego questa?</a>
        <div class="cd-faq-content">
          <p>Tak, zadania będą rozpisane w taki sposób, aby nie nakładały się na siebie - lub aby śmierć ważnej postaci nie zablokowała przyszłego wątku fabularnego (oczywiście tylko pod warunkiem, że gracz będzie grał ‘fair’).</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będzie crafting z wykorzystaniem trofeów zdobytych od zwierząt (łuski, kły, pazury)?</a>
        <div class="cd-faq-content">
          <p>Tak, ale dostępny tylko do wytworzenia u konkretnych NPC.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy pojawią się dodatkowe umiejętności?</a>
        <div class="cd-faq-content">
          <p>Tak, ale nie będzie ich wiele.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy NPC będą reagować na nasze decyzje podjęte w trakcie gry, lub komentować je w inny sposób? </a>
        <div class="cd-faq-content">
          <p>Tak, będzie to bardziej rozbudowane względem oryginalnych gier Gothic i Gothic II.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy pojawią się jakieś dodatkowe, dostępne dla gracza interakcje w stylu np. kopania rudy?</a>
        <div class="cd-faq-content">
          <p>Pojawią się interakcje jak kucharstwo, kopanie dołów i kilka innych pomniejszych interakcji.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będzie można korzystać z drabin bez obaw?</a>
        <div class="cd-faq-content">
          <p>Tak, żaden z graczy nie będzie się już musiał obawiać śmierci z powodu ich użytkowania :D.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy w modyfikacji pojawi się bagienne ziele?</a>
        <div class="cd-faq-content">
          <p>Tak, ale tylko w formie rośliny do użytku alchemicznego. Nie będzie można z niego przygotowywać skrętów. Do palenia dostępny będzie za to zwykły tytoń.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będzie jazda konna?</a>
        <div class="cd-faq-content">
          <p>Nie będzie takiej możliwości.</p>
        </div>
      </li>
    </ul>
    <ul id="other" class="cd-faq-group"> <li class="cd-faq-title"><h2>Pozostałe </h2></li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy w grze będą easter eggi nawiązujące do przyszłych wydarzeń z Gothica?</a>
        <div class="cd-faq-content">
          <p>Pojawią się tylko pojedyncze takie nawiązania.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy w modzie pojawią się kamienie ogniskujące?</a>
        <div class="cd-faq-content">
          <p>Tak, ale nie chcemy zdradzać szczegółów na ten temat.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy w Dziejach Khorinis pojawiają się przekleństwa?</a>
        <div class="cd-faq-content">
          <p>Dokładamy wszelkich starań, aby klimat Dziejów Khorinis przywoływał na myśl oryginalną grę Gothic – dlatego pojawią się przekleństwa, jednak ograniczające się tylko do tych z oryginalnej sagi. </p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy usłyszymy w grze stary soundtrack z Gothica?</a>
        <div class="cd-faq-content">
          <p>Tak, pojawią się zarówno stare, kultowe utwory z pierwszych dwóch części serii Gtohic, ale będą też zupełnie nowe stworzone dla Dziejów Khorinis przez naszych muzyków. </p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy zamierzamy wykorzystać niezrealizowane pomysły z oryginalnych części?</a>
        <div class="cd-faq-content">
          <p>Tak, część z nich będzie wykorzystana w taki sposób, aby pasowały do fabuły Gothic, Gothic II oraz Dziejów Khorinis. </p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy pojawią się legendarne teksty typu "Czy to coś z przodu twojej głowy to twarz czy dupa?"</a>
        <div class="cd-faq-content">
          <p>Tak, ale pojawi się tylko kilka takich nawiązań.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy podczas rozgrywki będą jakieś cutscenki? Czy pojawią się renderowane filmiki?</a>
        <div class="cd-faq-content">
          <p>Pojawią się obie te rzeczy.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy postacie znane nam z Gothic i Gothic II: Noc Kruka, które spotkamy w Dziejach Khorinis będą wyglądały adekwatnie młodziej?</a>
        <div class="cd-faq-content">
          <p>Tak, aczkolwiek to tylko 10 lat i efekt nie będzie znacząco widoczny (zwłaszcza na tak wiekowym silniku, jakim jest ZenGin – silnik gry Gothic).</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy pojawi się możliwość wpływania na wygląd bohatera? Zmiana fryzury, tatuaż, itp? </a>
        <div class="cd-faq-content">
          <p>Nie, ponieważ uważamy to za niepotrzebne i niepasujące do charakteru modyfikacji.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy w modyfikacji ujrzymy jakieś nowe twarze NPC?</a>
        <div class="cd-faq-content">
          <p>Tak, na chwilę obecną mamy przygotowanych ponad 300 nowych tekstur twarzy – oraz kilkanaście nowych, dodatkowych modeli 3D głów.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy będą jakieś zmiany w porównaniu do Gothic II pod względem życia miasta? Jakieś ciekawsze animacje, nowe ścieżki do poruszania, schematy w ciągu dnia i nocy postaci drugo- i trzecioplanowych?</a>
        <div class="cd-faq-content">
          <p>Tak, NPC będą mieli więcej nowych zajęć (np. przenoszenie skrzyń czy naprawa powierzchni płaskich, jak dachy). NPC będą też mieli bardziej rozbudowane rutyny, dzięki czemu ich życie będzie jeszcze ciekawsze.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy pojawią się nowe czary? Czy Magowie Wody przestaną używać magii ognia?</a>
        <div class="cd-faq-content">
          <p>Pojawią się nowe czary, natomiast Magowie Wody nie przestaną używać magii ognia (ponieważ nie bez powodu używali ich w  pierwszej części gry Gothic i Nocy Kruka – magię żywiołów nie były po prostu nigdy ściśle powiązane z użytkowaniem ich przez magów konkretnych z kręgów).</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy bohater będzie mógł mieć zwierzątka?</a>
        <div class="cd-faq-content">
          <p>Nie, nie będzie takiej możliwości.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy system zapisów zostanie naprawiony? Czy wciąż będzie wymagane wykonywanie kilku zapisów?</a>
        <div class="cd-faq-content">
          <p>System zapisów będzie poprawiony na tyle, o ile będzie to możliwe, ale wykonywanie wielu zapisów gry wciąż będzie wskazane.</p>
        </div>
      </li>
      <li>
        <a class="cd-faq-trigger" href="#0">Czy pojawi się wsparcie dla innych systemów?</a>
        <div class="cd-faq-content">
          <p>Planowane jest wsparcie m.in. dla systemu Linux oraz możliwość uruchamiania Dziejów Khorinis w trybie natywnym.</p>
        </div>
      </li>
    </ul>
</div> 
<a href="#0" class="cd-close-panel"></a>
</section>`,
  videoProductionHeadline: "Nasze produkcje video",
  footerTitle: `Strona stworzona przez zespół SoulFire. ©${new Date().getFullYear()} SoulFire. Wszelkie prawa zastrzeżone.`,
  footerBottomTitle: "Wszystkie materiały publikowane lub do których się tu odwołujemy, są własnością zespołu SoulFire.",
  directorChiefLabel: "reżyser",
  programmingChiefLabel: "programowanie",
  gameplayChiefLabel: "skrypty rozgrywki",
  levelDesignChiefLabel: "level design",
  screenplayChiefLabel: "scenariusz",
  PRChiefLabel: "PR",
  wikiTeamChiefLabel: "wiki team",
  productManagementName: "Organizacja produkcji",
  graphicsDepartmentName: "Grafika",
  scenarioDepartmentName: "Scenariusz",
  LDDepartmentName: "Level Design",
  toolsDepartmentName: "Programowanie Narzędzi",
  gameplayDepartmentName: "Skrypty rozgrywki",
  soundDesignDepartmentName: "Dźwięk",
  wikiTeamDepartmentName: "Wiki Team",
  PRTeamDepartmentName: "Public relations",
  distinguishedMembersDepartmentName: "Zasłużeni",
  header: {
    lang,
    langItems: langItems.items,
    informationsLabel: "Informacje",
    recruitmentLabel: "Rekrutacja",
    videosLabel: "Filmy",
    teamLabel: "Zespół SoulFire",
    supportLabel: "Wsparcie"
  },
  seo: {
    domain: "https://dziejekhorinis.org",
    lang,
    teamTitle: "Zespół",
    homeTitle: "Strona Domowa",
    recruitmentTitle: "Rekrutacja",
    description: "Dzieje Khorinis - GOTHIC PREQUEL"
  }
}
