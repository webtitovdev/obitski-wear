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
        className={`extra_${
          index + 1
        }_content d-flex flex-column align-items-center justify-content-center text-center`}
      >
        <div className={`extra_${index + 1}_price`}>
          {procent || "30%"}
          <span></span>
        </div>
        <div className={`extra_${index + 1}_title`}>{name}</div>
        <div className={`extra_${index + 1}_text`}>{text}</div>
        <div className={`button extra_${index + 1}_button`}>
          <Link to="categories">Посмотреть</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
