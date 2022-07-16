import React, { useState } from 'react'
import Lightbox from "react-image-lightbox";

type Props = {
  isOpen: boolean;
  images: any[];
  imageIndex: number;
  setLightbox: (e:any) => void;
}

const LightboxComp = ({ isOpen, images, imageIndex, setLightbox }: Props) => {
  console.log("check images:", images);
  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={images[imageIndex]}
          nextSrc={
            images[(imageIndex + 1) % images.length]
          }
          prevSrc={
            images[
              (imageIndex + images.length - 1) %
                images.length
            ]
          }
          onCloseRequest={() => setLightbox({ imageIndex: 0, isOpen: false })}
          onMovePrevRequest={() =>
            setLightbox({
              imageIndex:
                (imageIndex + images.length - 1) %
                images.length,
              isOpen: true,
            })
          }
          onMoveNextRequest={() =>
            setLightbox({
              imageIndex: (imageIndex + 1) % images.length,
              isOpen: true,
            })
          }
        />
      )}
    </>
  )
}

export default LightboxComp