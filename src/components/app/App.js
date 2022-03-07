import React from "react";
import Navbar from "../navbar/Navbar";
import Categories from "./../../pages/Categories";
import Footer from "../footer/Footer";
import Main from "./../../pages/Main";
import Cart from "./../../pages/Cart";
import Contact from "./../../pages/Contact";
import Favorit from "./../../pages/Favorit";
import Product from "./../../pages/Product";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Product /> */}
      {/* <Cart /> */}
      <Main />
      {/* <Categories /> */}
      {/* <Favorit /> */}
      <Footer />
    </>
  );
};

export default App;
