import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import NewPlantForm from '../components/NewPlantForm';
import PlantWindows from '../components/plants/PlantWindows';
import Plant from '../components/plants/Plant';

function MyPlants(props) {

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
        <Route path="/myplants/:plantId">
          <Plant/>
        </Route>
        <Route path="/myplants">
          <PlantWindows/>
        </Route>
      </Switch>
    </div>
  );
}

export default MyPlants;
