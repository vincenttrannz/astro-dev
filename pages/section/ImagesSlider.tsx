import React, { useState } from "react";
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";
import portfolio from "../../public/data/portfolio.json";

export default function ImagesSlider() {
  // Light box setup
  const lightboxSetup = {
    photoIndex: 0,
    isOpen: false,
  };
  // Image details
  const imageDetail = {
    imageIndex: 0,
    imageTitle: 'Test',
    imageDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsam neque nihil quo, quia ipsa maiores, voluptates ad inventore iure illo dignissimos dicta.'
  }
  // Settings for Slick slider
  const settings = {
    dots: true,
    focusOnSelect: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const images = portfolio.map((item) => item.item_src);
  const [prepareLightbox, setLightbox] = useState(lightboxSetup);
  const [imageInfo, setImageInfo] = useState(imageDetail);
  // Lightbox for image
  const { photoIndex, isOpen } = prepareLightbox;
  // Image info
  const { imageIndex, imageTitle, imageDescription } = imageInfo;

  const handlerImageSelect = ((e:HTMLAnchorElement, i:number, image_info:any) => {
    setLightbox({ isOpen: true, photoIndex: i });
    setImageInfo({
      imageIndex: image_info.id,
      imageTitle: image_info.item_name,
      imageDescription: image_info.item_location
    });
  })
  return (
    <>
      <div className="container py-9">
        <div className="slider">
          <div className="slider__container">
            <Slider {...settings} className="pb-2">
              {portfolio.map((item, i:number) => {
                return (
                  <a
                    role="button"
                    onClick={(e:any) => handlerImageSelect(e, i, item)}
                    className="slider-image__container px-3"
                    key={i}
                  >
                    <div className="slider-image__overlay px-3">
                      <h2>{ i + 1 }</h2>
                    </div>
                    <img className="slider-image__image" src={`${item.item_thumb.split(".jpg")[0]}-hor.jpg`} alt="" />
                  </a>
                );
              })}
            </Slider>
          </div>
          <div className="slider__detail">
              <h4>{ imageIndex }</h4>
              <h2>{ imageTitle }</h2>
              <p>{ imageDescription }</p>
          </div>
        </div>
      </div>

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
        />
      )}
    </>
  );
}
