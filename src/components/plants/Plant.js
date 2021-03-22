import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { useParams } from "react-router-dom";
import Water from "./Water";

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

    /*waterToday(()=> {
      let data = { waterDate: new Date()}
      const authString = "Bearer " + authTokens;
      fetch('/users/plants/'+ plantId +'/water', {
        method: "POST",
        headers: {
          "Authorization": authString
        },
        body: JSON.stringify(data)
      }).then(data => {
        console.log(data);
      })
    })*/
    return (
      <div>
        <section className="jumbotron text-center">
          <p>
          <img className="rounded-circle" src={image_server + plant.photo_url} width="300px"/>
            </p>
          <h1>{plant.plantname}</h1>
        </section>
        <hr/>
        <h2>언제 물줬지?</h2>
        <Water waters={plant.water}/>
        <button onClick={()=> {
          let today = new Date()
          let data = { waterDate: today.toString()}
          console.log(data);
          const authString = "Bearer " + authTokens;
          fetch('/users/plants/'+ plantId +'/water', {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "Authorization": authString },
            body: JSON.stringify(data)
          }).then(data => {
            console.log(data);
          })
    }}>오늘 물줬어요</button>
      </div>);
}

export default Plant;