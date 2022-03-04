import React from "react";

const NewsItem = ({ image, title, text, link, index, discount }) => {
  const extraPromoIndex = `extra_promo extra_promo_${index + 1}`;
  const extraIndexContent = `extra_${
    index + 1
  }_content d-flex flex-column align-items-center justify-content-center text-center`;
  const extraIndexPrice = `extra_${index + 1}_price`;
  const extraIndexTitle = `extra_${index + 1}_title`;
  const extraIndexText = `extra_${index + 1}_text`;
  const extraIndexButton = `button extra_${index + 1}_button`;
  return (
    <div className={extraPromoIndex}>
      <div
        className="extra_promo_image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={extraIndexContent}>
        <div className={extraIndexPrice}>
          {discount || "30%"}
          <span></span>
        </div>
        <div className={extraIndexTitle}>{title}</div>
        <div className={extraIndexText}>{text}</div>
        <div className={extraIndexButton}>
          <a href="checkout.html">Посмотреть</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
