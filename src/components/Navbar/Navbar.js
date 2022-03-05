import React from "react";
import { useDispatch } from "react-redux";

import MobileMenu from "../mobileMenu/MobileMenu";
import { toggle } from "./toggleSlice";

import shopingBag from "../../images/shopping-bag.svg";
import magnifyingGlass from "../../images/magnifying-glass.svg";
import star from "../../images/star.svg";
import avatar from "../../images/avatar.svg";

const Navbar = () => {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(toggle());
  };

  return (
    <>
      <header className="header">
        <div className="header_inner d-flex flex-row align-items-center justify-content-start">
          <div className="logo">
            <a href="#">Obitski</a>
          </div>
          <nav className="main_nav">
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="categories.html">Каталог</a>
              </li>
              <li>
                <a href="categories.html">Доставка</a>
              </li>
              <li>
                <a href="contact.html">Контакты</a>
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
                  <img src={magnifyingGlass} alt="" />
                </button>
              </form>
            </div>
            <div className="shopping">
              <a href="#">
                <div className="cart">
                  <img src={shopingBag} alt="" />
                  <div className="cart_num_container">
                    <div className="cart_num_inner">
                      <div className="cart_num">1</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="star">
                  <img src={star} alt="" />
                  <div className="star_num_container">
                    <div className="star_num_inner">
                      <div className="star_num">0</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="avatar">
                  <img src={avatar} alt="" />
                </div>
              </a>
            </div>
          </div>

          <div
            onClick={() => onHandleClick()}
            className="burger_container d-flex flex-column align-items-center justify-content-around menu_mm"
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
      <MobileMenu onHandleClick={onHandleClick} />
    </>
  );
};

export default Navbar;
