import React from "react"
import Layout from "../components/layout"
import IntroSection from "../components/intro-section"
import Videos from "../components/videos"
import Footer from "../components/footer"
import SEO from "../components/seo"
import useFooterImages from "../hooks/useFooterImages"
import useIntroArtwork from "../hooks/useIntroArtwork"
import './homepage.scss'

const IndexPage = ({pathContext: { introText, lang, logo, homepageDescription, footerTitle, footerBottomTitle, videoProductionHeadline, header, seo }}) => {
  const footerImages = useFooterImages();
  const artwork = useIntroArtwork();
  return ((
    <Layout header={header}>
      <SEO image={`${seo.domain}/index-files/g2_dk_artwork_3.jpg`} lang={seo.lang} title={seo.homeTitle} description={seo.description} />
      <IntroSection artwork={artwork} text={introText} imageSRC={logo} />

      <div className="fullframe" id="videocont">
        <div className="borderline"></div>

        <div className="videocontainer fadein transit">
          <div className={'container'}>
            <div className={'video-wrapper'}>
              <div className={'video-holder'}>
                <iframe className="shadow-out-2" src="https://www.youtube.com/embed/fgiqs1Ukdtk" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="borderline" />
      <div className="fullframe" id="infosection">

        <div className={'container'}>
          <div dangerouslySetInnerHTML={{ __html: homepageDescription }} className="frame" id="info-box" />
        </div>
      </div>

      {/* <div className="borderline" />
      <Videos images={footerImages} title={videoProductionHeadline} lang={lang} /> */}
      <div className="borderline"></div>
      <Footer logo={logo} title={footerTitle} bottomTitle={footerBottomTitle} lang={lang}/>
    </Layout>
  ));
}

export default IndexPage
