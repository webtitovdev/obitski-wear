import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="footer_logo">
              <a href="#">Wish</a>
            </div>
            <nav className="footer_nav">
              <ul>
                <li>
                  <a href="index.html">home</a>
                </li>
                <li>
                  <a href="categories.html">clothes</a>
                </li>
                <li>
                  <a href="categories.html">accessories</a>
                </li>
                <li>
                  <a href="categories.html">lingerie</a>
                </li>
                <li>
                  <a href="contact.html">contact</a>
                </li>
              </ul>
            </nav>
            <div className="footer_social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-reddit-alien" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">Copyright &copy;</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
