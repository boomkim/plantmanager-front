import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { useParams } from "react-router-dom";

function Plant(props) {
    let { plantId } = useParams();
    const [plant, setPlant] = useState({});
    const { authTokens } = useAuth();
    const image_server = "https://plant-manager.s3.ap-northeast-2.amazonaws.com/"
    
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
        <section className="jumbotron text-center">
          <p>
          <img className="rounded-circle" src={image_server + plant.photo_url} width="300px"/>
            </p>
          <h1>{plant.plantname}</h1>
        </section>
        <p></p>
        <p>안녕</p>
      </div>);
}

export default Plant;