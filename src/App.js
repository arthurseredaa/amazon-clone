import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./ui/organisms/header/Header";
import { Home } from "./ui/template/HomePage/HomePage";
import { Login } from "./ui/template/LoginPage/LoginPage";
import { CartPage } from "./ui/template/CartPage/CartPage";

export const App = () => {
  const [goods, setGoodsCount] = useState([]);
  const [login, setLogin] = useState(null);
  window.goods = goods;

  const onAddToCart = (goodName) => setGoodsCount([...goods, goodName]);

  const onRemoveFromCart = (id) => {
    debugger;
    setGoodsCount(goods.filter((item) => item.idForDelete !== id));
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header goodsCount={goods.length} login={login} />
        <Route
          path="/sign-in"
          component={() => <Login setLogin={setLogin} />}
        />
        <Route path="/checkout" component={() => <h1>Checkout</h1>} />
        <Route
          exact
          path="/"
          component={() => <Home onAddToCart={onAddToCart} />}
        />
        <Route
          path="/cart"
          component={() => (
            <CartPage onRemoveFromCart={onRemoveFromCart} goods={goods} />
          )}
        />
      </div>
    </BrowserRouter>
  );
};
