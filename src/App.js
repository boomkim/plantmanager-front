import React, { Component } from 'react';

import Register from './pages/Register';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(props) {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Plant Manager</Link>
          </li>
          <li>
            <Link to="/register">회원가입</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
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