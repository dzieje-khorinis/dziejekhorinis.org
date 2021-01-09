import React, { useState, useEffect } from "react"
import ReactBnbGallery from 'react-bnb-gallery';
import LazyLoad from 'react-lazyload';
import 'react-bnb-gallery/dist/style.css';
import './vidoes.scss'

const VideoURLs = [
  'https://www.youtube.com/embed/ByHbXvoYObY',
  'https://www.youtube.com/embed/zWJrjLYel-k',
  'https://www.youtube.com/embed/-EFYQ4ZN5Ss',
  'https://www.youtube.com/embed/vnoVmUTamXM',
]


const Videos = ({title, lang, images}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const onPhotoClick = (index) => {
    setActiveItem(index);
    setIsOpen(true);
  }
  const phrases = lang === 'pl' ? {
    noPhotosProvided: 'Brak zdjęć',
    showPhotoList: 'Pokaż listę zdjęć',
    hidePhotoList: 'Ukryj listę zdjęć',
  } : undefined;

  useEffect(() => {
    if ( isOpen ) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = '';
    }
  }, [isOpen]);

  return (
    <LazyLoad height={950} offset={800} once>
      <div className="fullframe fadein" id="videos">
        {/*<div className={'container'}>*/}
        {/*  <h2 className="videoheading shadowed">{title}</h2>*/}
        {/*</div>*/}
        {/*<br />*/}
        <ReactBnbGallery
          show={isOpen}
          photos={images.map(image => ({
            photo: image.full.srcWebp,
            thumbnail: image.preview.srcWebp,
          }))}
          onClose={() => setIsOpen(false)}
          zIndex={9999}
          activePhotoIndex={activeItem}
          phrases={phrases}
          backgroundColor={`rgb(0 0 0 / 90%)`}
        />
        <div className={'video-and-media-grid'}>
          {VideoURLs.map(url => (
            <div className={'item video'}>
              <div className={'item-wrapper'}>
                <div className={'item-container'}>
                  <iframe className="shadow-out-2" src={url} frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen />
                </div>
              </div>
            </div>
          ))}
          {images.map((image, index) => (
            <div className={'item'} onClick={() => onPhotoClick(index)}>
              <div className={'item-wrapper'}>
                <div className={'item-container'} style={{backgroundImage: `url(${image.preview.srcWebp})`}} />
              </div>
            </div>
          ))}
        </div>

        {/*<div className="videosContainer shadowed transit">*/}
        {/*  <div className="videoWrapper">*/}
        {/*    <iframe src="https://www.youtube.com/embed/zWJrjLYel-k?" frameBorder="0" webkitallowfullscreen*/}
        {/*            mozallowfullscreen allowFullScreen />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </LazyLoad>
  )
}

export default Videos
