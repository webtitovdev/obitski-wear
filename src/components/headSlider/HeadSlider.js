import React from "react";

import ImageGallery from "react-image-gallery";
import arrowR from "../../images/arrow_r.png";

const HeadSlider = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
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
