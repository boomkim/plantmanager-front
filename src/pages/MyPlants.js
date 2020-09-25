import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth"


function MyPlants(props) {
  const [plants, setPlants] = useState([]);
  const { authTokens } = useAuth();


  useEffect(() => {
    console.log("useeffect");
    const authString = "Bearer " + authTokens;
    fetch('/users/plants', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authString
      }
    }).then(res => res.json())
    .then(data => {
      setPlants(data.plants);
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  // const plantLists = plants.map((plant) => <li key={plant.plant_id}>{plant.plantname}</li>)
  // console.log(plants);
  return (
    <div>
      my plants
      <hr/>
      <ul>
        {plants.map((plant) => <li key={plant.plant_id}>{plant.plantname}</li>)}
      </ul>
    </div>
  );
}

export default MyPlants;