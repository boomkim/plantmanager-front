import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth"
import { Route, Link, Switch } from "react-router-dom";
import NewPlantForm from '../components/NewPlantForm';

function arrToChunk (arr) {
  var i,j,temparray,chunk = 3;
  var t = [];
  for (i=0,j=arr.length; i<j; i+=chunk) {
    temparray = arr.slice(i,i+chunk);
    let cols; 
    cols = temparray.map((plant) => 
      (<div className="col-4" key={plant.plant_id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{plant.plantname}</h5>
          </div>
        </div>
      </div>)
    )
    t.push(cols);
  }
  
  let ret = t.map((el) => 
    <div className="row">
      {el}
    </div>
  );
  return ret;
}

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
      <ul>
        <li>
          <Link to="/myplants">내 식물</Link>
        </li>
        <li>
          <Link to="/myplants/new">새 식물</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path="/myplants/new">
          <div>
            <NewPlantForm/>
          </div>
        </Route>
        <Route path="/myplants">
          {arrToChunk(plants)}
        </Route>
      </Switch>
    </div>
  );
}

export default MyPlants;

/*
plants.map((plant, idx) => {
  <div className="col-4" key={plant.plant_id}>
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{plant.plantname}</h5>
      </div>
    </div>
  </div>
})
*/