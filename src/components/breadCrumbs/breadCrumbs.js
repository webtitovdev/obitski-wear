import { Link, useLocation } from "react-router-dom";

import cart from "../../images/cart.jpg";

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  let title;
  let subTitle;

  switch (pathname) {
    case "/categories":
      title = "Каталог";
      subTitle = "Главная / Каталог";
      break;
    case "/contact":
      title = "Контакты";
      subTitle = "Главная / Контакты";
      break;
    case "/cart":
      title = "Корзина";
      subTitle = "Главная / Корзина";
      break;
    case "/favorit":
      title = "Избранное";
      subTitle = "Главная / Избранное";
      break;
    default:
      title = "";
      subTitle = "";
  }

  return (
    <div className="home_breadcrumbs">
      <div
        className="home_background parallax-window"
        style={{
          backgroundImage: `url(${cart})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="home_container">
              <div className="home_content">
                <div className="home_title">{title}</div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to={`${pathname}`}>{subTitle}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
