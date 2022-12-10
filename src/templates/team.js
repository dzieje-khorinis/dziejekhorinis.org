import React from "react"
import Layout from "../components/layout"
import IntroSection from "../components/intro-section"
import SEO from "../components/seo"
import Videos from "../components/videos"
import Footer from "../components/footer"
import "./team.scss"
import useFooterImages from "../hooks/useFooterImages"
import useIntroArtwork from "../hooks/useIntroArtwork"

function surnameSort(a, b) {
  const splitA = a.split(" ");
  const splitB = b.split(" ");
  const lastA = splitA[splitA.length - 1];
  const lastB = splitB[splitB.length - 1];

  if (lastA < lastB) return -1;
  if (lastA > lastB) return 1;
  return 0;
}

const SecondPage = ({pathContext: { lang, teamSoulfireLabel, logo, footerTitle, footerBottomTitle, videoProductionHeadline, directorChiefLabel, programmingChiefLabel, gameplayChiefLabel, levelDesignChiefLabel, screenplayChiefLabel, PRChiefLabel, wikiTeamChiefLabel, graphicsDepartmentName, scenarioDepartmentName, LDDepartmentName, toolsDepartmentName, gameplayDepartmentName, soundDesignDepartmentName, wikiTeamDepartmentName, PRTeamDepartmentName, distinguishedMembersDepartmentName, productManagementName, header, seo }}) => {
  const footerImages = useFooterImages();
  const artwork = useIntroArtwork();
  const mail = lang === 'pl' ? 'team@dziejekhorinis.org' : 'team@historyofkhorinis.org';

  return (
    <Layout header={header}>
      <SEO image={`${seo.domain}/index-files/g2_dk_artwork_3.jpg`} lang={seo.lang} title={seo.teamTitle} description={seo.description} />
      <IntroSection artwork={artwork} imageSRC={logo} text={teamSoulfireLabel} big={true} />
      <div className="borderline" />
      <div className={"team-list-container"} id={"videocont"}>
        <div className={"container"}>
          <div className={"team-list"}>
            <div className={"head"}>
              <div>
                <h2>{teamSoulfireLabel}</h2>
              </div>
              <div>
                <a href={`mailto:${mail}`}>{mail}</a>
              </div>
            </div>
            <div className={"department chief"}>
              <h3>- {productManagementName} -</h3>
              <p>Piotr „Dark” Czołnowski – <span>{directorChiefLabel}</span></p>
              <p>Paweł „maxroy” Loter - <span>{gameplayChiefLabel}</span></p>
              <p>Artur „kolarz3” Kasperek – <span>{programmingChiefLabel}</span></p>
              <p>Hubert „Hubtus” Kowalewski - <span>{levelDesignChiefLabel}</span></p>
              <p>Piotr „Bhaal” Cholewa – <span>{screenplayChiefLabel}</span></p>
              <p>Julia „Dalila” Bednarska - <span>{PRChiefLabel}</span></p>
              <p>Jakub „Kuba” Piesta - <span>{wikiTeamChiefLabel}</span></p>
            </div>
            <div className={"department"}>
              <h3>- {graphicsDepartmentName} -</h3>
              {[
                `Krzysztof „Szufla” Kauza`,
                `Przemysław „Telarian” Iwan`,
                `Waldemar „Valeyard” Jagniątkowski`,
                `Kewin „Varox” Janus`,
                `Marek „Mark56” Karas`,
                `Bartosz „MajesticB” Kozarczuk`,
                `Juliusz „Julius” Krzemiński`,
                `Marek „Rolland” Sagan`,
                `Mateusz „MatBat” Słota`,
                `Mateusz „Akmon” Słupski`,
                `Damian „Sryncu” Słuszniak`,
                `Darko „Darchy” Sojević`,
                `Łukasz „vandam” Walicki`,
                `Jakub „Ixorthion” Warenczuk`,
                `Gabriela „Gabonix" Zubek`,
                `Józef „Kaixl” Białasik`,
              ].sort(surnameSort).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={"department"}>
              <h3>- {gameplayDepartmentName} -</h3>
              {[
                `Grzegorz „grkopiec” Kopiec`,
                `Paweł „maxroy” Loter`,
                `Fabbrizio „Fabiosek” Marano`,
                `Michał „KeWiS” Siwek`,
                `Sebastian "Zuku05" Żukowski`,
                `Dariusz "Darure" Piotrowski`,
                `Michał Łuczak`,
                `Rafał "Grey2Wolf" Małysa`,
              ].sort(surnameSort).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={"department"}>
              <h3>- {toolsDepartmentName} -</h3>
              {[
                `Krzysztof "Kisioj" Jura`,
                `Artur „kolarz3” Kasperek`,
                `Karol „Siemekk” Pałażej`,
                `Paweł „ozonex” Hebda`,
                `Arkadiusz "gabr" Gabryś`,
                `Tomasz „TR” Broma`,
                `Janusz „Lignar” Lignarski`,
                `Piotr „Verus” Jasiński`,
                `Adrian „Choinek” Chojnicki`,
                `Karol „Karasko” Karaś`,
                `Sylwester „Leru” Wróblewski`,
              ].sort(surnameSort).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={"department"}>
              <h3>- {LDDepartmentName} -</h3>
              {[
                `Hubert „Hubtus” Kowalewski`,
                `Krystian „Sand” Kamiński`,
                `Maciej „TheSpawacz” Stępień`,
                `Szymon „Diksu” Majkut`,
                `Piotr „Nashadu” Michalik`,
              ].sort(surnameSort).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={"department"}>
              <h3>- {scenarioDepartmentName} -</h3>
              {[
                `Piotr „Bhaal” Cholewa`,
                `Jakub „Koneser” Dyks`,
                `Michał „Micro” Idasiak`,
                `Miłosz „Boris” Jędrysik`,
                `Mateusz „Kenger” Krupiński`,
                `Bartosz „SnowFox” Łągiewka`,
                `Jan „Jachu” Wojciechowski`,
                `Paweł "Sobieski" Hetman`,
                `Robert "Deltadrom" Baszczok`,
              ].sort(surnameSort).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={"department"}>
              <h3>- {PRTeamDepartmentName} -</h3>
              {[
                `Julia „Dalila” Bednarska`,
                `Aleksandra Zagdan`,
              ].sort(surnameSort).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={"department"}>
              <h3>- {wikiTeamDepartmentName} -</h3>
              {[
                `Jakub „Kuba” Piesta`,
                `Klaudia „Kotek” Jurczyk`,
                `Paweł „Pawelo” Mokrzycki`,
                `Tomasz „Riter” Zawistowski`,
              ].sort(surnameSort).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={"department"}>
              <h3>- {soundDesignDepartmentName} -</h3>
              {[
                `Małgorzata Czuro`
              ].sort(surnameSort).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={"department"}>
              <h3>- {distinguishedMembersDepartmentName} -</h3>
              <p>Łukasz „TuneLord” Rdzanek
              </p>
              <p>Adam „inż. Avallach” Gołębiowski
              </p>
              <p>Paweł „Paradoxal” Soja</p>
              <p>Sylwester „Evgarr” Wacnik</p>
              <p>Mateusz „Magik” Prendki
              </p>
              <p>Rafał „Munka” Pleskaczyński-Mąka</p>
              <p>Bartłomiej „Arkhnen” Polit</p>
              <p>Ireneusz „Gumen” Gabryś</p>
              <p>Kamil „LordKamilVII” Cieśla</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="borderline" />
      <Videos images={footerImages} title={videoProductionHeadline} lang={lang} /> */}
      <div className="borderline"></div>
      <Footer logo={logo} title={footerTitle} bottomTitle={footerBottomTitle} lang={lang} />
    </Layout>
  );
}

export default SecondPage
