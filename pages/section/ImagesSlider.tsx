import React, { useState } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import Lightbox from "react-image-lightbox";
import AOSComp from '../components/partials/AOSComp';
import { getStrapiMedia, getStrapiData } from "../../lib/fetchData";
// Import types
import { Photo } from '../../types/type'

interface PhotoProps {
  photos: Photo[];
}

const ImagesSlider: React.FC<PhotoProps> = ({ photos }) => {
  // Light box setup
  const lightboxSetup = {
    photoIndex: 0,
    isOpen: false,
  };
  // Settings for Slick slider
  const settings = {
    dots: true,
    focusOnSelect: false,
    infinite: false,
    speed: 500,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    customPaging: () => (
      <div className="slick-custom-dot"></div>
    ),
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };
  const images = photos.map((item) => getStrapiMedia(getStrapiData(item).PhotoImage));
  const [prepareLightbox, setLightbox] = useState(lightboxSetup);
  // Lightbox for image
  const { photoIndex, isOpen } = prepareLightbox;
  const imageCaption = photos.map((item) => {
    const PhotoTitle = item.attributes.PhotoTitle;
    const PhotoLocation = item.attributes.PhotoLocation;
    return (
      <div key={item.id}>
        <h4>{PhotoTitle}</h4>
        <p>{PhotoLocation}</p>
      </div>
    );
  });
  const handlerImageSelect = ((e:HTMLAnchorElement, i:number) => {
    setLightbox({ isOpen: true, photoIndex: i });
  })
  return (
    <>
      <AOSComp 
        AOSAnimation="fade-up"
        AOSOffset="200"
        AOSDuration="1000"
        AOSRepeat={false}
        className="container d-flex flex-column justify-content-center align-items-center py-6"
      >
        <h2 className='font--gothic fs-1 m-0'>GALLERY</h2>
        <div className="slider mt-6 w-100">
          <div className="slider__container w-100">
            <Slider {...settings} className="pb-2">
              {
                photos.map(photo => {
                  const PhotoImageURL = getStrapiMedia(getStrapiData(photo).PhotoImage);
                  const PhotoID = photo.id;
                  const PhotoTitle = photo.attributes.PhotoTitle;
                  const PhotoLocation = photo.attributes.PhotoLocation;
                  return (
                    <a 
                      role="button"
                      onClick={(e:any) => handlerImageSelect(e, PhotoID - 1)}
                      className="slider-image__container px-2 px-md-3"
                      key={PhotoID}
                    >
                      <span className="location_text fs-sm fw-bold text-white">{ PhotoLocation }</span>
                      <div className="slider-image__overlay px-2 px-md-3">
                        <p className="font--gothic fs-1">{ Number(PhotoID) < 10 ? `0${PhotoID}` : `${PhotoID}` }</p>
                      </div>
                      <div className="w-100 h-100 overflow-hidden position-relative">
                        <Image layout="fill" className="slider-image__image w-100 h-100" src={PhotoImageURL} alt={PhotoTitle} priority />
                      </div>
                    </a>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </AOSComp>

      {/* Handing when Lightbox is open */}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={
            images[(photoIndex + 1) % images.length]
          }
          prevSrc={
            images[
              (photoIndex + images.length - 1) %
                images.length
            ]
          }
          onCloseRequest={() => setLightbox({ photoIndex: 0, isOpen: false })}
          onMovePrevRequest={() =>
            setLightbox({
              photoIndex:
                (photoIndex + images.length - 1) %
                images.length,
              isOpen: true,
            })
          }
          onMoveNextRequest={() =>
            setLightbox({
              photoIndex: (photoIndex + 1) % images.length,
              isOpen: true,
            })
          }
          imageCaption={imageCaption[photoIndex]}
        />
      )}
    </>
  );
}

export default ImagesSlider;