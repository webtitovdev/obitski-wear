import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../slice/toggleSlice";
import { NavLink, Link } from "react-router-dom";

import MobileMenu from "../mobileMenu/MobileMenu";
import ModalCustom from "../modalCustom/ModalCusom";
import shopingBag from "../../images/shopping-bag.svg";
import magnifyingGlass from "../../images/magnifying-glass.svg";
import star from "../../images/star.svg";
import avatar from "../../images/avatar.svg";
import gear from "../../images/gear.png";

const Navbar = () => {
  const { cartItem, favorits } = useSelector((state) => state.productFunc);
  const [open, setOpen] = useState(false);
  const { auth } = useSelector((state) => state.login);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const panelLink = (
    <Link to="controlpanel">
      <div className="gear">
        <img src={gear} className="gear_img" alt="" />
      </div>
    </Link>
  );
  const renderPanelLink = auth ? panelLink : null;
  const onHandleClick = () => {
    dispatch(toggle());
  };
  let cartNumRender;
  if (cartItem.length !== 0) {
    cartNumRender = (
      <div className="cart_num_container">
        <div className="cart_num_inner">
          <div className="cart_num">{cartItem.length}</div>
        </div>
      </div>
    );
  }
  let favoritsNumRender;
  if (favorits.length !== 0) {
    favoritsNumRender = (
      <div className="star_num_container">
        <div className="star_num_inner">
          <div className="star_num">{favorits.length}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <div className="header_inner d-flex flex-row align-items-center justify-content-start">
          <div className="logo">
            <NavLink to="/">Obitski</NavLink>
          </div>
          <nav className="main_nav">
            <ul>
              <li>
                <NavLink to="/">Главная</NavLink>
              </li>
              <li>
                <NavLink to="categories">Каталог</NavLink>
              </li>
              <li>
                <NavLink to="/">Доставка</NavLink>
              </li>
              <li>
                <NavLink to="contact">Контакты</NavLink>
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
              <Link to="cart">
                <div className="cart">
                  <img src={shopingBag} alt="" />
                  {cartNumRender}
                </div>
              </Link>
              <Link to="favorit">
                <div className="star">
                  <img src={star} alt="" />
                  {favoritsNumRender}
                </div>
              </Link>
              <Link onClick={handleOpen} to="/">
                <div className="avatar">
                  <img src={avatar} alt="" />
                </div>
              </Link>
              {renderPanelLink}
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
      <ModalCustom open={open} handleClose={handleClose} />
      <MobileMenu onHandleClick={onHandleClick} />
    </>
  );
};

export default Navbar;
