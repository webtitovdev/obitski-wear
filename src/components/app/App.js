import React from "react";
import Categories from "./../../pages/Categories";
import Main from "./../../pages/Main";
import Cart from "./../../pages/Cart";
import Contact from "./../../pages/Contact";
import Favorit from "./../../pages/Favorit";
import Product from "./../../pages/Product";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="categories" element={<Categories />}>
        <Route path="product" element={<Product />} />
      </Route>
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="favorit" element={<Favorit />} />
    </Routes>
  );
};

export default App;
