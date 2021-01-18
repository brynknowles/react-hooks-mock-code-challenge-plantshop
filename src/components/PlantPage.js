import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [plantSearchText, setPlantSearchText] = useState("")
  // console.log(plantSearchText, plants)

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      // .then(data => console.log(data))
      .then(setPlants)
  }, [])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(plantSearchText.toLowerCase())
  })
  // console.log("filtered plants", filteredPlants)

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search plantSearchText={plantSearchText} onSearchChange={setPlantSearchText}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;







