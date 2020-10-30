import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Link } from "react-router-dom";

function arrToChunk (arr) {
  var i,j,temparray,chunk = 3;
  var t = [];
  for (i=0,j=arr.length; i<j; i+=chunk) {
    temparray = arr.slice(i,i+chunk);
    let cols; 
    cols = temparray.map((plant) => 
      (<div className="col-4" key={plant._id}>
        <div className="card">
          <img className="card-img-top"
            src={"https://plant-manager.s3.ap-northeast-2.amazonaws.com/"+plant.photo_url}/>
          <div className="card-body">
            <h5 className="card-title">
              <Link to={'/myplants/' + plant._id}>{plant.plantname}</Link>
              <p>{plant._id}</p>
            </h5>
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

function PlantWindows(props) {
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

  return <div>{arrToChunk(plants)}</div> ;
}

export default PlantWindows;