import { Link } from "react-router-dom";

const PromoDiscountItem = ({ image, title, subtitle }) => {
  return (
    <div className="col-lg-4 promo_col">
      <div className="promo_item">
        <div className="promo_image">
          <img src={image} alt={title} />
          <div className="promo_content promo_content_1">
            <div className="promo_title">{title}</div>
            <div className="promo_subtitle">{subtitle}</div>
          </div>
        </div>
        <div className="promo_link">
          <Link to={"categories"}>КУПИТЬ СЕЙЧАС</Link>
        </div>
      </div>
    </div>
  );
};

export default PromoDiscountItem;
