import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleInStockClick() {
    setIsInStock((isInStock) => !isInStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${parseInt(price)}</p>
      {isInStock ? (
        <button className="primary" onClick={handleInStockClick}>In Stock</button>
      ) : (
        <button onClick={handleInStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
