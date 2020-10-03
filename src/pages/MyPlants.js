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

  return (
    <div>
      my plants
      <hr/>
      <div className="row">
        {plants.map((plant) => 
          <div className="col-4" key={plant.plant_id}>
            <div className="card">
              <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{plant.plantname}</h5>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  );
}

export default MyPlants;