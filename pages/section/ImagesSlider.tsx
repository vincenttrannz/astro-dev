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
    slidesToShow: 5,
    slidesToScroll: 5,
    customPaging: (i:any) => (
      <div className="slick-custom-dot">
      </div>
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
  const images = portfolio.map((item) => item.item_src);
  const [prepareLightbox, setLightbox] = useState(lightboxSetup);
  // Lightbox for image
  const { photoIndex, isOpen } = prepareLightbox;
  const imageCaption = portfolio.map((item) => {
    return (
      <div>
        <h4>{item.item_name}</h4>
        <p>
          <small>{item.item_location}</small>
        </p>
      </div>
    );
  });
  const handlerImageSelect = ((e:HTMLAnchorElement, i:number) => {
    setLightbox({ isOpen: true, photoIndex: i });
  })
  return (
    <>
      <div className="container py-9">
        <div className="slider w-100">
          <div className="slider__container w-100">
            <Slider {...settings} className="pb-2">
              {portfolio.map((item, i:number) => {
                return (
                  <a
                    role="button"
                    onClick={(e:any) => handlerImageSelect(e, i)}
                    className="slider-image__container px-3"
                    key={i}
                  >
                    <span className="location_text fs-sm fw-bold text-white">{ item.item_location }</span>
                    <div className="slider-image__overlay px-3">
                      <p className="font--gothic fs-1">{ Number(i + 1) < 10 ? `0${i + 1}` : `${i + 1}` }</p>
                    </div>
                    <div className="w-100 h-100 overflow-hidden">
                      <img className="slider-image__image w-100 h-100" src={`${item.item_thumb.split(".jpg")[0]}-hor.jpg`} alt="" />
                    </div>
                  </a>
                );
              })}
            </Slider>
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
          imageCaption={imageCaption[photoIndex]}
        />
      )}
    </>
  );
}
