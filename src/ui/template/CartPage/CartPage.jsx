import React from "react";
import { CartItem } from "./CartItem/CartITem";
import s from "./CartPage.module.css";
import { TotalPrice } from "../../molecules/TotalPrice/TotalPrice";

export const CartPage = ({ goods, onRemoveFromCart }) => {
  let pricesArray = goods.map((good) => parseInt(good.price.replace(" ", ""))),
    totalPrice;
  let goodsArray = goods.map((good) => (
    <CartItem
      deleteFromCart={onRemoveFromCart}
      title={good.title}
      price={good.price}
      image={good.image}
      id={good.id}
    />
  ));

  if (pricesArray.length > 0) {
    totalPrice = pricesArray.reduce((prev, next) => prev + next);
  }

  return (
    <div className={`${s.cart} ${totalPrice ? "" : s.noGrid}`}>
      {totalPrice ? (
        <>
          <div className={s.goodList}>{goodsArray}</div>
          <TotalPrice totalPrice={totalPrice} />
        </>
      ) : (
        <h3 className={s.emptyCartText}>Your cart is empty</h3>
      )}
    </div>
  );
};
