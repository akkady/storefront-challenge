import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { fetchProducts } from "./features/productSlice.js";
import { fetchCategories } from "./features/categorySlice.js";
import { initializeCart } from "./features/cartSlice.js";

store.dispatch(fetchProducts());
store.dispatch(fetchCategories());
store.dispatch(initializeCart());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
