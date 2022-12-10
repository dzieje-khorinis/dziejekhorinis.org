import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroSection from "../components/intro-section"
import Videos from "../components/videos"
import Footer from "../components/footer"
import './faq.scss'
import PBDKSRC from '../images/PB_DK.png'
import useFooterImages from "../hooks/useFooterImages"
import useIntroArtwork from "../hooks/useIntroArtwork"

const Faq = ({pathContext: { logo, footerTitle, footerBottomTitle, videoProductionHeadline, faqContent, header, seo, lang }}) => {
  const footerImages = useFooterImages();
  const artwork = useIntroArtwork();

  return (
    <Layout header={header}>
      <Helmet>
        <script type="text/javascript" src="/scripts/jquery-3.2.1.js"/>
        <script type="text/javascript" src="/scripts/dropdown.js"/>
        <script src={'/js/modernizr.js'} type="text/javascript" />
        <script src={'/js/jquery.mobile.custom.min.js'} type="text/javascript" />
        <script src={'/js/main.js'} type="text/javascript" />
      </Helmet>
      <SEO image={`${seo.domain}/index-files/g2_dk_artwork_3.jpg`} lang={seo.lang} title={lang === 'ru' ? 'ЧАВО' : 'FAQ'} description={seo.description}/>
      <IntroSection artwork={artwork} imageSRC={logo} text={lang === 'ru' ? 'ЧАВО' : 'FAQ'} big={true} />
      <div className="borderline" />
      <div className={'cd-faq-wrapper'} id='videocont'>
        <div className={'container'} dangerouslySetInnerHTML={{__html: faqContent}} />
      </div>
      {/* <div className="borderline" />
      <Videos images={footerImages} title={videoProductionHeadline} lang={lang} /> */}
      <div className="borderline"></div>
      <Footer logo={logo} title={footerTitle} bottomTitle={footerBottomTitle} lang={lang} />
    </Layout>
  );
}

export default Faq
