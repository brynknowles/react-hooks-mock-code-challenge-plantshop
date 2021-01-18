import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  // console.log(plants)

  const plantsArray = plants.map((plant) => {
    return <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price} />
  })

  // console.log(plantsArray)

  return (
    <ul className="cards">
      {plantsArray}
    </ul>
  );
}

export default PlantList;
