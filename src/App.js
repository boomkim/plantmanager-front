import React, { useState } from 'react';

import { AuthContext } from "./context/auth";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App(props) {
  const existingTokens = localStorage.getItem("tokens");
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", data);
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

export default App;