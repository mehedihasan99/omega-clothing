import React from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const CartItem = ({ cartItem, handleRemoveCart }) => {
  const { name, picture, price } = cartItem;

  return (
    <div>
      <div className="cart-item-container">
        <img className="cart-item-img" src={picture} alt="" />
        <p className="mt-2">{name}</p>
        <div>
          <FontAwesomeIcon
            onClick={() => handleRemoveCart(cartItem)}
            className="cart-item-icon"
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
