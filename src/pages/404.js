import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroSection from "../components/intro-section"
import Videos from "../components/videos"
import Footer from "../components/footer"
import useFooterImages from "../hooks/useFooterImages"
import useIntroArtwork from "../hooks/useIntroArtwork"

const NotFoundPage = () => {
    const footerImages = useFooterImages();
    const artwork = useIntroArtwork();
    return (
      <Layout>
          <SEO title="404 - Not Found" />
          <IntroSection artwork={artwork} text={'404'} big={true} />
          <div className="borderline" />
          <Videos images={footerImages} />
          <div className="borderline" />
          <Footer />
      </Layout>
    )
}

export default NotFoundPage
