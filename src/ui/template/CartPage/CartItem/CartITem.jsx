import React from "react";
import s from "./CartItem.module.css";
import DeleteOutlineSharpIcon from "@material-ui/icons/DeleteOutlineSharp";

export const CartItem = ({ title, price, image, id, deleteFromCart }) => {
  const deleteItem = () => deleteFromCart(id);

  return (
    <div className={s.cartItem}>
      <div className={s.cartItemImageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={s.cartItemInfo}>
        <p>{title}</p>
        <p className={s.itemPrice}>
          <strong>{price}</strong>
          <small>₴</small>
        </p>
        <button className={s.removeButton} onClick={deleteItem}>
          Remove
          <DeleteOutlineSharpIcon />
        </button>
      </div>
    </div>
  );
};
