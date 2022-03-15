import { Routes, Route } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Categories from "./../../pages/Categories/Categories";
import Main from "./../../pages/Main/Main";
import Cart from "./../../pages/Cart/Cart";
import Contact from "./../../pages/Contact/Contact";
import Favorit from "./../../pages/Favorit/Favorit";
import SingleProduct from "./../../pages/SingleProduct/SingleProduct";
import ControlPanel from "./../../pages/ControlPanel/ControlPanel";
import ChangeItem from "./../../pages/ChangeItem/ChangeItem";
import Error404 from "./../../pages/Error404/Error404";

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
        <Route path="controlpanel/categorieschange" element={<ChangeItem />} />
        <Route path="controlpanel/logindatachange" element={<ChangeItem />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/products/:id" element={<SingleProduct />} />
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
