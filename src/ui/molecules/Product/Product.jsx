import React from "react";
import s from "./Product.module.css";
import { nanoid } from "nanoid";

export const Product = ({ id, title, image, price, rating, onAddToCart }) => {
  const onClickHandler = () => {
    let idForDelete = nanoid(5);
    let newGoodForCart = { id, title, image, price, rating, idForDelete };
    onAddToCart(newGoodForCart);
  };
  return (
    <div className={s.product}>
      <p className={s.productTitle}>{title}</p>
      <div className={s.productImageWrapper}>
        <img className={s.productImage} src={image} alt="PRODUCT IMAGE" />
      </div>
      <div className="productPrice">
        <strong>{price}</strong>
        <small>грн.</small>
      </div>
      <div className={s.productRating}>
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>
      <button className={s.productButton} onClick={onClickHandler}>
        Add to cart
      </button>
    </div>
  );
};
