import React from "react";

const NewsItem = ({ image, title, text, link, index, discount }) => {
  return (
    <div className={`extra_promo extra_promo_${index + 1}`}>
      <div
        className="extra_promo_image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div
        className={`extra_${
          index + 1
        }_content d-flex flex-column align-items-center justify-content-center text-center`}
      >
        <div className={`extra_${index + 1}_price`}>
          {discount || "30%"}
          <span></span>
        </div>
        <div className={`extra_${index + 1}_title`}>{title}</div>
        <div className={`extra_${index + 1}_text`}>{text}</div>
        <div className={`button extra_${index + 1}_button`}>
          <a href="checkout.html">Посмотреть</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
