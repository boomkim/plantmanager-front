import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, Route, Switch } from "react-router-dom";
import MyPlants from "./MyPlants"

function Home(props) {
  return (
    <div>
      <Nav>
      <Container>
        <Link className="navbar-brand" to="/">식물관리</Link>
        <Link to="/myplants">내 식물</Link>
      </Container>
      </Nav>
      <Switch>
        <Route path='/myplants'><MyPlants/></Route>
        <Route path='/'><div>hello</div></Route>
      </Switch>
    </div>
  )
}

export default Home;