import React from "react";

import cart from "../../images/cart.jpg";
const BreadCrumbs = () => {
  return (
    <div className="home">
      <div
        className="home_background parallax-window"
        style={{
          backgroundImage: `url(${cart})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="home_container">
              <div className="home_content">
                <div className="home_title">Shopping Cart</div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Shopping Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
