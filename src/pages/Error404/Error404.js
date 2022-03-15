import { Link } from "react-router-dom";

import matrica from "../../images/matrica.gif";
const Error404 = () => {
  return (
    <div className="error_page">
      <img style={{ maxWidth: "100%" }} src={matrica} alt="" />
      <div className="title">Страница не найдена</div>
      <div className="subtitle"> Скорее всего вы попали сюда не случайно</div>
      <div className="subtext">
        Больше проектов можно посмотреть
        <Link to="https://github.com/webtitovdev">тут</Link>
      </div>
    </div>
  );
};

export default Error404;
