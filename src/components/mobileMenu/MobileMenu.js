import React from "react";

import magnifyingGlass from "../../images/magnifying-glass.svg";

const MobileMenu = () => {
  return (
    <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
      <div className="menu_close_container">
        <div className="menu_close">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="logo menu_mm">
        <a href="#">Wish</a>
      </div>
      <div className="search">
        <form action="#">
          <input
            type="search"
            className="search_input menu_mm"
            required="required"
          />
          <button
            type="submit"
            id="search_button_menu"
            className="search_button menu_mm"
          >
            <img className="menu_mm" src={magnifyingGlass} alt="" />
          </button>
        </form>
      </div>
      <nav className="menu_nav">
        <ul className="menu_mm">
          <li className="menu_mm">
            <a href="#">home</a>
          </li>
          <li className="menu_mm">
            <a href="#">clothes</a>
          </li>
          <li className="menu_mm">
            <a href="#">accessories</a>
          </li>
          <li className="menu_mm">
            <a href="#">lingerie</a>
          </li>
          <li className="menu_mm">
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
