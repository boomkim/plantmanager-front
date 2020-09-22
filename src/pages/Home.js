import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, Route, Switch } from "react-router-dom";
import MyPlants from "./MyPlants";
import MyProfile from "./MyProfile";
import { useAuth } from "../context/auth";

function Home(props) {

  const { setAuthTokens } = useAuth();

  function logOut() {
    localStorage.removeItem("tokens")
    setAuthTokens();
  }

  return (
    <div>
      <Navbar className="navbar bg-light">
      <Container>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">식물관리</Link>
        <Link to="/myplants">내 식물</Link>
        <Link to="/me">내 정보</Link>
        <Link to="/surf">둘러보기</Link>
        <button onClick={logOut}>로그아웃</button>
      </Container>
      </Navbar>
      <Container>
        <Switch>
          <Route path='/myplants'><MyPlants/></Route>
          <Route path='/me'><MyProfile/></Route>
          <Route path='/'><div>hello</div></Route>
        </Switch>
      </Container>
    </div>
  )
}

export default Home;