import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Signup from './pages/Signup';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
      <div>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Container>
            <Link className="navbar-brand" to="/">Plant Manager</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/register">회원가입</Link>
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
    </Router>
    </AuthContext.Provider>
  );
}

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       backendHealth: false
//     };
//   }

//   componentDidMount(){
//     fetch('/hello')
//     .then(res => {
//       console.log(res.status);
//       if (res.status === 200){
//         this.setState({
//           backendHealth: true
//         });
//       }
//     })
//   }
//   render() {
//     const isBackendHealthy = this.state.backendHealth
//     return (
//         <div>
//           <p>hello react</p>
//           <p>server health: {isBackendHealthy ? "Healthy!" : "Nope!" }</p>
//           <Register/>
//         </div>
//     );
//   }
// }


export default App;