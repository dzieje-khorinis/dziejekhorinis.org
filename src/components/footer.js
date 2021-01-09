import React from "react"

const Footer = ({logo, title, bottomTitle, lang}) => {
  const mail = lang === 'pl' ? 'kontakt@dziejekhorinis.org' : 'contact@historyofkhorinis.org';
  return (
    <div className="fullframe" id="footer">
      <div className="frame">
        <a target='_blank' href="https://facebook.com/dziejekhorinis/"><img src="/index-files/fb_icon.png" className="foot-icons transit-05s" /></a>
        <a target='_blank' href="https://youtube.com/c/dziejekhorinis"><img src="/index-files/yt_icon.png" className="foot-icons transit-05s" /></a>
        <a target='_blank' href="https://github.com/dzieje-khorinis"><img src="/index-files/gh_icon.png" className="foot-icons transit-05s" /></a>
        <br />
        <img src={logo} className="footer-logo" /><br />
        <a href={'/Presskit.zip'} target="_blank" style={{color: 'white'}}>
          <h4>Presskit</h4>
        </a>
        <div style={{ color: '#FFF' }}>
          <a href={`mailto:${mail}`}>{mail}</a>
        </div><br />
        <span className="id-txt">{title}</span><br />
        <span className="id-txt" style={{fontSize: "0.8rem", color: "#FFF"}}>{bottomTitle}</span>
      </div>
    </div>
  );
}

export default Footer
