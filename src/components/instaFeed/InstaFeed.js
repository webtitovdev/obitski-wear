import React from "react";
import { useGetDataQuery } from "../../api/api";
import Spinner from "./../spinner/Spinner";
import InstaFeedImageItem from "./../instaFeedImageItem/InstaFeedImageItem";

import gallery from "../../images/gallery.jpg";

const InstaFeed = () => {
  const { data, isLoading } = useGetDataQuery("instaFeed");
  if (isLoading) {
    return <Spinner />;
  }
  const renderImage = data[0].image.map((item, i) => (
    <InstaFeedImageItem key={i} image={item} />
  ));
  const renderTags = data[0].tags.map((item, i) => (
    <li key={i}>
      <a href="">#{item}</a>
    </li>
  ));
  return (
    <div className="gallery">
      <div
        className="gallery_image"
        style={{ backgroundImage: `url(${gallery})` }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="gallery_title text-center">
              <ul>{renderTags}</ul>
            </div>
            <div className="gallery_text text-center">{data[0].text}</div>
            <div className="button gallery_button">
              <a href="#">Подписаться</a>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery_slider_container">{renderImage}</div>
    </div>
  );
};

export default InstaFeed;
