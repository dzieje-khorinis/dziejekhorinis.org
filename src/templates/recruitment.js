import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import IntroSection from "../components/intro-section"
import SEO from "../components/seo"
import Videos from "../components/videos"
import Footer from "../components/footer"
import "./recruitment.scss"
import useFooterImages from "../hooks/useFooterImages"
import useIntroArtwork from "../hooks/useIntroArtwork"

const Recruitment = ({pathContext: { lang, teamSoulfireLabel, logo, footerTitle, footerBottomTitle, videoProductionHeadline, header, seo }}) => {
  const footerImages = useFooterImages();
  const artwork = useIntroArtwork();
  const [active, setActive] = useState('story');
  const departments = [{
    slug: 'story',
    name: lang === 'pl' ? 'Scenarzysta' : 'Screenwriter',
    requirements: lang === 'pl' ? `
  <h4 class='navtext'>Wymagane umiejętności dla Scenarzysty:</h4>
  <ul>
    <li>planowanie zadań fabularnych, pisanie dialogów postaci</li>
    <li>obeznanie z klimatem wczesnośredniowiecznego dark fantasy</li>
    <li>bardzo dobra znajomość tła fabularnego gry Gothic I</li>
  </ul>
  ` : `
  <h4 class='navtext'>Required skills for Screenwriter:</h4>
  <ul>
    <li>design of quests, writing character dialogues</li>
    <li>familiarity with atmosphere of early medieval dark fantasy</li>
    <li>very good knowledge of background story of game Gothic I</li>
  </ul>
  `
  }, {
    slug: 'code',
    name: lang === 'pl' ? 'Programista' : 'Programmer',
    requirements: lang === 'pl' ? `
  <h4 class='navtext'>Wymagane umiejętności dla Skryptera:</h4>
  <ul>
    <li>podstawowe umiejętności programistyczne</li>
    <li>determinacja do implementacji zadań i dialogów na podstawie gotowego scenariusza</li>
    <li>(opcjonalnie) znajomość języka skryptowego Daedalus</li>
  </ul>
  <br />
  <h4 class='navtext'>Wymagane umiejętności dla Programisty Narzędzi:</h4>
  <ul>
    <li>kilkuletnie komercyjne doświadczenie w branży IT</li>
    <li>znajmość technologii .NET, nodeJS, python'a lub Javy</li>
    <li>umiejętność pracy w zespole</li>
  </ul>
  ` : `
  <h4 class='navtext'>Required skills for Gameplay Scripter:</h4>
  <ul>
    <li>basic programming skills</li>
    <li>determination to implement quests and dialogues based on ready-made screenplay</li>
    <li>(optional) knowledge of scripting language Daedalus</li>
  </ul>
  <br />
  <h4 class='navtext'>Required skills for Tools Programmer:</h4>
  <ul>
    <li>several years of commercial experience in the IT industry</li>
    <li>knowledge of .NET, nodeJS, python'a or Java technology</li>
    <li>ability to work in a team</li>
  </ul>
  `
  }, {
    slug: 'ld',
    name: lang === 'pl' ? 'Level Designer' : 'Level Designer',
    requirements: lang === 'pl' ? `
  <h4 class='navtext'>Wymagane umiejętności dla Level Designera:</h4>
  <ul>
    <li>praca z programem PiranhaBytes Spacer 2 (lub chęć jego nauki)</li>
    <li>tworzenie lokacji według własnych pomysłów, dostarczonych szkiców i opisów</li>
    <li>planowanie i tworzenie sieci ścieżek ruchu dla postaci niezależnych</li>
    <li>(opcjonalnie) podstawy grafiki 3D</li>
  </ul>
  ` : `
  <h4 class='navtext'>Required skills for Level Designer:</h4>
  <ul>
    <li>work with PiranhaBytes Spacer 2</li>
    <li>creation of game locations according to own ideas, provided sketches and descriptions</li>
    <li>design and creation of movement networks for non-player characters</li>
    <li>(optional) 3d graphics basics</li>
  </ul>
  `
  }, {
    slug: '3d',
    name: lang === 'pl' ? 'Grafik 3D' : '3D Artist',
    requirements: lang === 'pl' ? `
  <h4 class='navtext'>Wymagane umiejętności dla Grafika 3D:</h4>
  <ul>
    <li>modelowanie low-poly</li>
    <li>mapowanie UV</li>
    <li>tworzenie prostych tekstur oraz korzystanie z gotowych, generycznych</li>
    <li>eksport modeli za pomocą wtyczki Kerrax (wspierają to Blender, 3DS Max i Wings3D, ale modelować można w innej aplikacji)</li>
    <li>tworzenie zarówno obiektów jak i lokacji</li>
    <li>(opcjonalne) tworzenie animowanych modeli organicznych</li>
  </ul>
  ` : `
  <h4 class='navtext'>Required skills for 3D Artist:</h4>
  <ul>
    <li>low-poly modelling</li>
    <li>UV mapping</li>
    <li>creation of simple textures and usage of pre-made generic ones</li>
    <li>export of models using the Kerrax plugin (supported by Blender, 3DS Max and Wings 3d, but you can create in other app)</li>
    <li>modelling of both objects and locations</li>
    <li>(optional) creation of animated organic meshes</li>
  </ul>
  `
  }, {
    slug: '2d',
    name: lang === 'pl' ? 'Grafik 2D' : '2D Artist',
    requirements: lang === 'pl' ? `
  <h4 class='navtext'>Wymagane umiejętności dla Grafika 2D:</h4>
  <ul>
    <li>tworzenie tekstur dla modeli 3D - dedykowanych i generycznych/bezszwowych</li>
    <li>projektowanie i wykonywanie grafik na potrzeby interfejsu gry</li>
    <li>tworzenie szkiców konceptualnych na potrzeby grafików 3d</li>
    <li>tworzenie grafik promocyjnych</li>
  </ul>
  ` : `
  <h4 class='navtext'>Required skills for 2D Artist:</h4>
  <ul>
    <li>creation of textures for 3D models - both dedicated and generic/seamless</li>
    <li>design and creation of graphics for game interface</li>
    <li>creation of conceptual sketches for 3d artists</li>
    <li>creation of promotional artworks</li>
  </ul>
  `
  }, {
    slug: 'other',
    name: lang === 'pl' ? 'Inne' : 'Other',
    requirements: lang === 'pl' ? `
  <p>Masz pomysł na to jak w wyjątkowy sposób mógłbyś pomóc w pracach nad modyfikacją? Opisz nam to krótko poniżej i opcjonalnie w bezpośredniej rozmowie (<a href="https://www.facebook.com/dziejekhorinis">facebook.com/dziejekhorinis</a>).</p>
  ` : `
  <p>Do you have an idea to take part in modification development in unique way? Describe it shortly below and optionally in direct conversation on (<a href="https://www.facebook.com/dziejekhorinis">facebook.com/dziejekhorinis</a>).</p>
  `
  }];

  useEffect(() => {
    (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })();
  }, []);

  return (
    <Layout header={header}>
      <SEO image={`${seo.domain}/index-files/g2_dk_artwork_3.jpg`} lang={seo.lang} title={seo.recruitmentTitle} description={seo.description} />
      <IntroSection artwork={artwork} imageSRC={logo} text={header.recruitmentLabel} big={true} />
      <div className="borderline" />
      <div id={'videocont'} className={'recruitment-container'}>
        <div className={'container'}>
          <div className={'content'}>
            <h2 className={'navtext'}>{lang === 'pl' ? 'W czym chciałbyś nam pomóc?' : 'How would you like to help us?'}</h2>
            <div className={'department-container'}>
              {departments.map((i, key) => (
                <div key={key} className={`item ${active === i.slug && 'nice-bgr'}`} onClick={() => setActive(i.slug)}>
                  <h3>{i.name}</h3>
                </div>
              ))}
            </div>
            <br />
            <div className={'description'} dangerouslySetInnerHTML={{ __html: departments.find(i => i.slug === active).requirements}} />
            <br />
            {lang === 'pl' ? (
              <div className="typeform-widget" data-url="https://form.typeform.com/to/ymfyMKHV?typeform-medium=embed-snippet" data-transparency="30"
                   data-hide-headers="true" style={{width: '100%', height: '600px'}} />
            ) : (
              <div className="typeform-widget" data-url="https://form.typeform.com/to/bMhNHJBm?typeform-medium=embed-snippet" data-transparency="30"
                   data-hide-headers="true" style={{width: '100%', height: '600px'}} />
            )}
          </div>
        </div>
      </div>
      <div className="borderline" />
      <Videos images={footerImages} title={videoProductionHeadline} lang={lang} />
      <div className="borderline"></div>
      <Footer logo={logo} title={footerTitle} bottomTitle={footerBottomTitle} lang={lang} />
    </Layout>
  );
}

export default Recruitment
