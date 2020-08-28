import React, { Component } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backendHealth: false
    };
  }

  componentDidMount(){
    fetch('/hello')
    .then(res => {
      console.log(res.status);
      if (res.status === 200){
        this.setState({
          backendHealth: true
        });
      }
    })
  }
  render() {
    const isBackendHealthy = this.state.backendHealth
    return (
        <div>
          <p>hello react</p>
          <p>server health: {isBackendHealthy ? "Healthy!" : "Nope!" }</p>
        </div>
    );
  }
}

export default App;