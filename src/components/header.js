import PropTypes from "prop-types"
import React, {useEffect, useState} from "react"
import LogoSrc from '../images/logo.png'
import './header.scss';

const toggleMenu = () => {
  const x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

const Header = ({ informationsLabel, recruitmentLabel, videosLabel, teamLabel, supportLabel, lang, langItems }) => {
  const [path, setPath] = useState('/');

  useEffect(() => {
    const match = window.location.pathname.match(/\/(?:.(?!\/))+$/);
    setPath(match ? match[0] : '/');
  }, []);
  return (
    <header id="nav-container">
      <div className={'container'}>
        <div className="topnav" id="myTopnav">
          <div className={'left'}>
            <a href={(lang === 'en' || lang === 'pl') ? `/` : `/${lang}`}>
              <img src={LogoSrc}/>
            </a>
          </div>
          <div className={'right'}>
            <a className="feature" href="#" target="_self" id="menulogo">History Of Khorinis</a>
            <a className={`feature`} href={(lang === 'en' || lang === 'pl') ? `/#infosection` : `/${lang}/#infosection`} target="_self">{informationsLabel}</a>
            <a className={`feature ${path === '/faq' && 'active'}`} href={(lang === 'en' || lang === 'pl') ? `/faq` : `/${lang}/faq`} target="_self">FAQ</a>
            <a className={`feature ${path === '/recruitment' && 'active'}`} href={(lang === 'en' || lang === 'pl') ? `/recruitment` : `/${lang}/recruitment`}>{recruitmentLabel}</a>
            <a className="feature" href="https://youtube.com/c/dziejekhorinis" target="_blank">{videosLabel}</a>
            {/*<a className={`feature ${path === '/team' && 'active'}`} href={(lang === 'en' || lang === 'pl') ? `/team` : `/${lang}/team`} target="_self">{teamLabel}</a>*/}
            <a className="feature" href="https://youtube.com/c/dziejekhorinis/join" target="_blank">{supportLabel}</a>
            <div className="dropdown">
              <button className="dropbtn">
                <img src={`/index-files/big-icon-language-${lang}.png`} className="dropbtn-flag" />
                <div className="arrow-down" />
                <i className="fa fa-caret-down" />
              </button>

              <div className="dropdown-content">
                {(langItems || []).map(i => (
                  <a style={{textDecoration: i.lang === lang ? 'underline': ''}} href={i.url} target="_self"><img src={`/index-files/icon-language-${i.lang}.png`} className="menu-flag" />{i.text}</a>
                ))}
              </div>
            </div>
          </div>
          <a className="icon" onClick={toggleMenu}>&#9776;</a>
          <a className="icon close" onClick={toggleMenu}>&times;</a>
        </div>
      </div>
      <div className="borderline"></div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
