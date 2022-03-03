import React from "react";

import gallery from "../../images/gallery.jpg";
import gallery1 from "../../images/gallery_1.jpg";
import gallery2 from "../../images/gallery_2.jpg";
import gallery3 from "../../images/gallery_3.jpg";
import gallery4 from "../../images/gallery_4.jpg";
import gallery5 from "../../images/gallery_5.jpg";
import gallery6 from "../../images/gallery_6.jpg";

const InstaFeed = () => {
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
              <ul>
                <li>
                  <a href="#">#wish</a>
                </li>
                <li>
                  <a href="#">#wishinstagram</a>
                </li>
                <li>
                  <a href="#">#wishgirl</a>
                </li>
              </ul>
            </div>
            <div className="gallery_text text-center">
              *Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu
              tristique magna pharetra.
            </div>
            <div className="button gallery_button">
              <a href="#">submit</a>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery_slider_container">
        <div className="owl-item gallery_item">
          <a className="colorbox" href={gallery1}>
            <img src={gallery1} alt="" />
          </a>
        </div>

        <div className="owl-item gallery_item">
          <a className="colorbox" href={gallery2}>
            <img src={gallery2} alt="" />
          </a>
        </div>

        <div className="owl-item gallery_item">
          <a className="colorbox" href={gallery3}>
            <img src={gallery3} alt="" />
          </a>
        </div>

        <div className="owl-item gallery_item">
          <a className="colorbox" href={gallery4}>
            <img src={gallery4} alt="" />
          </a>
        </div>

        <div className="owl-item gallery_item">
          <a className="colorbox" href={gallery5}>
            <img src={gallery5} alt="" />
          </a>
        </div>

        <div className="owl-item gallery_item">
          <a className="colorbox" href={gallery6}>
            <img src={gallery6} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstaFeed;
