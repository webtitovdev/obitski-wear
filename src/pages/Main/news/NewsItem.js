import { Link } from "react-router-dom";

const NewsItem = ({ index, props }) => {
  const { src, name, text, procent } = props;
  return (
    <div className={`extra_promo extra_promo_${index + 1}`}>
      <div
        className="extra_promo_image"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div
        className={`extra_1_content d-flex flex-column align-items-center justify-content-center text-center`}
      >
        <div className={`extra_1_price`}>
          {procent}
          <span></span>
        </div>
        <div className={`extra_1_title`}>{name}</div>
        <div className={`extra_1_text`}>{text}</div>
        <div className={`button extra_1_button`}>
          <Link to="categories">Посмотреть</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
