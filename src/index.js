import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import App from "./components/app/App";
import Spinner from "./components/spinner/Spinner";

import { store, persistor } from "./store/index";

import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <BrowserRouter>
          <Navbar />
          <App />
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
