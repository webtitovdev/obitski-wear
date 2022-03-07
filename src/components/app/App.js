import React from "react";
import Navbar from "../navbar/Navbar";
import Categories from "./../../pages/Categories";
import Footer from "../footer/Footer";
import Main from "./../../pages/Main";
import Cart from "./../../pages/Cart";
import Contact from "./../../pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <Footer />
    </>
  );
};

export default App;
