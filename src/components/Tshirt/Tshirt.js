import React from "react";
import { Button, Card } from "react-bootstrap";
import "./TShirt.css";
const Tshirt = ({ shirt, handleAddToCard }) => {
  const { name, picture, price } = shirt;
  return (
    <div className="TShirt">
      <Card>
        <Card.Img variant="top" className="shirt-img" src={picture} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>Price: {price}</Card.Text>
          <div className="text-center">
            <Button onClick={() => handleAddToCard(shirt)} variant="primary">
              Add To Card
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Tshirt;
