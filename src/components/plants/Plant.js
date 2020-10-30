import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { useParams } from "react-router-dom";

function Plant(props) {
    let { plantId } = useParams();
    const [plant, setPlant] = useState({});
    const { authTokens } = useAuth();
    
    useEffect(() => {
      const authString = "Bearer " + authTokens;
      fetch('/users/plants/'+ plantId , {
        method: "GET",
        headers: {
          "Authorization": authString
        }
      }).then(res => res.json())
      .then(data => {
        console.log(data);
        setPlant(data.plant);
        console.log(plant);
      })
    }, [])
  
  
    return (
      <div>
        <p>{plant.plantname}</p>
        <p>안녕</p>
      </div>);
}

export default Plant;