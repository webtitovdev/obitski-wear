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
import ChangeItem from "./../../pages/ChangeItem";
import Error404 from "./../../pages/Error404";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="controlpanel" element={<ControlPanel />} />
        <Route
          path="controlpanel/headsliderimagechange"
          element={<ChangeItem />}
        />
        <Route
          path="controlpanel/promodiscountchange"
          element={<ChangeItem />}
        />
        <Route path="controlpanel/productitemchange" element={<ChangeItem />} />
        <Route path="controlpanel/contactinfochange" element={<ChangeItem />} />
        <Route path="controlpanel/newschange" element={<ChangeItem />} />
        <Route path="controlpanel/faqchange" element={<ChangeItem />} />
        <Route path="controlpanel/categorieschange" element={<ChangeItem />} />
        <Route path="controlpanel/logindatachange" element={<ChangeItem />} />
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
