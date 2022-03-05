import React from "react";

const InstaFeedImageItem = ({ link, image }) => {
  return (
    <div className="owl-item gallery_item">
      <a className="colorbox" href={link}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};

export default InstaFeedImageItem;
