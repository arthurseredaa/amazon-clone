import React from "react";
import s from "./Product.module.css";
export const Product = ({ id, title, image, price, rating, onAddToCart }) => {
  const onClickHandler = () => {
    let newGoodForCart = { id, title, image, price, rating };
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
