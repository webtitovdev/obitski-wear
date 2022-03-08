import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import magnifyingGlass from "../../images/magnifying-glass.svg";

const MobileMenu = ({ onHandleClick }) => {
  const stateValueToggle = useSelector((state) => state.toggler);
  const styleActiveAndNot = stateValueToggle
    ? "menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400 active"
    : "menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400";
  return (
    <div className={styleActiveAndNot}>
      <div onClick={() => onHandleClick()} className="menu_close_container">
        <div className="menu_close">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="logo menu_mm">
        <Link to="/">Obitski</Link>
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
            <Link to="/">ГЛАВНАЯ</Link>
          </li>
          <li className="menu_mm">
            <Link to="categories">КАТАЛОГ</Link>
          </li>
          <li className="menu_mm">
            <Link to="/">ДОСТАВКА</Link>
          </li>
          <li className="menu_mm">
            <Link to="contacts">КОНТАКТЫ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
