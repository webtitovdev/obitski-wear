import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="footer_logo">
              <Link to={"/"}>Obitski</Link>
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
                  <Link to={"contacts"}>КОНТАКТЫ</Link>
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
