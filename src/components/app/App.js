import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Categories from "./../../pages/Categories";
import Main from "./../../pages/Main";
import Cart from "./../../pages/Cart";
import Contact from "./../../pages/Contact";
import Favorit from "./../../pages/Favorit";
import Product from "./../../pages/Product";
import ControlPanel from "./../../pages/ControlPanel";
import Error404 from "./../../pages/Error404";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="controlpanel" element={<ControlPanel />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/products/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="favorit" element={<Favorit />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
