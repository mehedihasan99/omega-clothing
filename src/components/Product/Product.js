import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, picture, price } = product;
  console.log(product);
  return (
    <div>
      <div>
        <Card>
          <Card.Img variant="top" className="shirt-img" src={picture} />
          <Card.Body>
            <Card.Title>Name: {name}</Card.Title>
            <Card.Text>Price: {price}</Card.Text>
            <div className="text-center">
              <button className="btn btn-primary">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={"/orders"}
                >
                  Order Now
                </Link>
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Product;
