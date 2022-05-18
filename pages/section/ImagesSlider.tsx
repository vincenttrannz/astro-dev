import React from "react";
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";
import portfolio from "../../public/data/portfolio.json";

export default function ImagesSlider() {
  // Settings for Slick slider
  const settings = {
    dots: false,
    focusOnSelect: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {portfolio.map((item, i) => {
          return (
            <a
              // onClick={() => setPortfolios({ isOpen: true, photoIndex: i })}
              key={item.id}
              className={`${item.filter}`}
            >
              <img src={`${item.item_thumb.split(".jpg")[0]}-hor.jpg`} alt="" />
            </a>
          );
        })}
      </Slider>
    </div>
  );
}
