import React from "react";
import Link from 'react-router-dom/Link';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Signup from './Signup';
import MyPage from './MyPage';
import Login from './Login';
import PrivateRoute from '../PrivateRoute';


function Home(props) {
  return (
    <div>
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Container>
            <Link className="navbar-brand" to="/">Plant Manager</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/signup">회원가입</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mypage">mypage</Link>
              </li>
            </ul>
          </Container>
        </Nav>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/mypage" component={MyPage} />
            </Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Container>
          </div>
  )
}

export default Home;