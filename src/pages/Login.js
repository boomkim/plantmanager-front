import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";
import Redirect from "react-router-dom/Redirect";
import { useAuth } from "../context/auth";


function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  console.log(props);
  const referer = props.location.state ? props.location.state.referer : '/';

  const data = { email, password }

  function postLogin() {
    fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(res => {
      if (res.status === 200) {
        setAuthTokens(res.data)
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch( e => {
      setIsError(true);
    });
  }
  if(isLoggedIn) {
    return <Redirect to={referer} />
  }

  return (
    <Card>
      <Form>
        <input 
          type="email" 
          placeholder="email" 
          value={email} 
          onChange={ e => setEmail(e.target.value) } 
        />
        <input 
          type="password" 
          placeholder="password" 
          value={password}
          onChange={ e => setPassword(e.target.value) }
          />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      { isError &&<div className="alert alert-warning">The username or password provided were incorrect!</div> }
    </Card>
  );
}

export default Login;