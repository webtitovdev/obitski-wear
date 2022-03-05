import React from "react";

import { useGetDataQuery } from "../../api/api";

import testimonials from "../../images/testimonials.jpg";
import Spinner from "./../spinner/Spinner";

const Reviews = () => {
  const { data, isLoading } = useGetDataQuery("reviews");
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <div className="section_subtitle">Лучшее</div>
              <div className="section_title">Рекомендации</div>
            </div>
          </div>
        </div>
        <div className="row test_slider_container">
          <div className="col">
            <div className="owl-carousel owl-theme test_slider text-center">
              <div className="owl-item">
                <div className="test_text">{data[0].text}</div>
                <div className="test_content">
                  <div className="test_image">
                    <img src={data[0].image} alt="" />
                  </div>
                  <div className="test_name">{data[0].name}</div>
                  <div className="test_title">client {data[0].from} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
