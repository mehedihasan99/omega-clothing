import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  const [cart, setCard] = useState([]);
  const tShirts = useLoaderData();
  const handleAddToCard = (shirt) => {
    const exists = cart.find((cart) => cart._id === shirt._id);
    if (exists) {
      alert("Already Exist");
    } else {
      const newCart = [...cart, shirt];
      setCard(newCart);
    }
  };
  const handleRemoveCart = (cartItem) => {
    const newCart = cart.filter((ts) => ts._id !== cartItem._id);
    setCard(newCart);
  };
  return (
    <div className="home-container">
      <div className="container">
        <div className="row ">
          <div className="col-md-9 pe-5">
            <div className="shirt-container">
              {tShirts.map((shirt) => (
                <Tshirt
                  key={shirt._id}
                  shirt={shirt}
                  handleAddToCard={handleAddToCard}
                ></Tshirt>
              ))}
            </div>
          </div>
          <div className="col-md-3 cart-container ">
            <div className=" single-cart">
              <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
