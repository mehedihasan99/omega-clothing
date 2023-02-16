import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart, handleRemoveCart }) => {
  let message;
  if (cart.length === 0) {
    message = "Please buy a t-shirt ☺";
  }
  return (
    <div className="mt-4">
      <h5 className={`${message ? "message-style" : "yellow"}`}>
        Order Summary
      </h5>
      <h6 className="mt-3 ms-3">
        Oder Quantity: {cart.length} {`${message ? "😭" : "😻"}`}
      </h6>
      {cart.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          handleRemoveCart={handleRemoveCart}
          cartItem={cartItem}
        ></CartItem>
      ))}
      <div className="message-style">{message}</div>
    </div>
  );
};

export default Cart;
