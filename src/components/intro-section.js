import React from "react"
import BackgroundVideoSRC from '../videos/background.mp4';

const IntroSection = ({text, big, imageSRC, artwork}) => (
  <div id="header-logo-container" style={{backgroundImage: `url(${artwork.srcWebp})`}}>
    {/*<video style={{height: '100%'}} loop={true} muted={true} autoPlay={true} playsinline>*/}
    {/*  <source src={BackgroundVideoSRC} type="video/mp4" />*/}
    {/*</video>*/}
    <div className={'overlay'} />
    <div id="top-lang-bar" />
    <div className={`header-half transit ${big ? 'big' : ''}`}>
      <div className={'top'}>
        <img src={imageSRC} id="headlogo" className="fadein" />
      </div>
      <div className={'bottom'}>
        <span className="txt-shadow fadein feature title">{text}</span>
      </div>
    </div>
  </div>
)

export default IntroSection
