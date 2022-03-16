import { Link } from "react-router-dom";

import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="footer_logo">
              <Link to={"/"}>
                <img src={logo} alt="Obitski" />
              </Link>
            </div>
            <nav className="footer_nav">
              <ul>
                <li>
                  <Link to={"/"}>Главная</Link>
                </li>
                <li>
                  <Link to={"categories"}>КАТАЛОГ</Link>
                </li>
                <li>
                  <Link to={"contact"}>КОНТАКТЫ</Link>
                </li>
              </ul>
            </nav>
            <div className="copyright">Copyright &copy;</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
