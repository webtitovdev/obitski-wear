import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header_inner d-flex flex-row align-items-center justify-content-start">
        <div className="logo">
          <a href="#">Wish</a>
        </div>
        <nav className="main_nav">
          <ul>
            <li>
              <a href="#">home</a>
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
        <div className="header_content ml-auto">
          <div className="search header_search">
            <form action="#">
              <input
                type="search"
                className="search_input"
                required="required"
              />
              <button
                type="submit"
                id="search_button"
                className="search_button"
              >
                <img src="images/magnifying-glass.svg" alt="" />
              </button>
            </form>
          </div>
          <div className="shopping">
            <a href="#">
              <div className="cart">
                <img src="images/shopping-bag.svg" alt="" />
                <div className="cart_num_container">
                  <div className="cart_num_inner">
                    <div className="cart_num">1</div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="star">
                <img src="images/star.svg" alt="" />
                <div className="star_num_container">
                  <div className="star_num_inner">
                    <div className="star_num">0</div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="avatar">
                <img src="images/avatar.svg" alt="" />
              </div>
            </a>
          </div>
        </div>

        <div className="burger_container d-flex flex-column align-items-center justify-content-around menu_mm">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
