import React from "react";

import ImageGallery from "react-image-gallery";
import banner from "../../images/home_slider_1.jpg";

const HeadSlider = () => {
  const images = [
    {
      original: banner,
    },
    {
      original: banner,
    },
    {
      original: banner,
    },
  ];
  return (
    <div className="home">
      <div className="home_slider_container">
        <ImageGallery
          showNav={false}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          showBullets={true}
          autoPlay={true}
          slideDuration={600}
          slideInterval={8000}
          items={images}
        />
      </div>
    </div>
  );
};

export default HeadSlider;
