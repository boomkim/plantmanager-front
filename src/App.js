import React, { useState } from 'react';

import { AuthContext } from "./context/auth";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App(props) {
  const existingTokens = localStorage.getItem("tokens");
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
      <div>
        { authTokens ? <Home/> : <Welcome/> }
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