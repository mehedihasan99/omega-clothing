import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const shop = useLoaderData();
  return (
    <div className="my-5">
      <div className="container">
        <div className="product-container">
          {shop.map((product) => (
            <Product product={product} key={product._id}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
