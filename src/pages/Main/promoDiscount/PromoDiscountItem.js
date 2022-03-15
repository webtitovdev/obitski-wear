import { Link } from "react-router-dom";

const PromoDiscountItem = ({ props }) => {
  const { src, name, procent } = props;
  return (
    <div className="col-lg-4 promo_col">
      <div className="promo_item">
        <div className="promo_image">
          <img src={src} alt={name} />
          <div className="promo_content promo_content_1">
            <div className="promo_title">{name}</div>
            <div className="promo_subtitle">-{procent}%</div>
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
