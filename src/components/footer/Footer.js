import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="footer_logo">
              <a href="#">Obitski</a>
            </div>
            <nav className="footer_nav">
              <ul>
                <li>
                  <a href="index.html">Главная</a>
                </li>
                <li>
                  <a href="categories.html">КАТАЛОГ</a>
                </li>
                <li>
                  <a href="categories.html">ДОСТАВКА И ОПЛАТА</a>
                </li>
                <li>
                  <a href="categories.html">КОНТАКТЫ</a>
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
