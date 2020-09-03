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
  const style2 = {
    width: "400px"
  }
  
  return (
    <Card>
      <div className="card-body text-center">
      <Form>
        <div className="form-group">
        <input 
          className="form-control"
          type="email" 
          placeholder="이메일" 
          value={email} 
          onChange={ e => setEmail(e.target.value) } 
        />
        </div>
        <div className="form-group">
        <input
          className="form-control" 
          type="password" 
          placeholder="비밀번호" 
          value={password}
          onChange={ e => setPassword(e.target.value) }
          />
          </div>
        <Button onClick={postLogin} className="btn-block">로그인</Button>
      </Form>
      <p><Link to="/signup" >계정을 잊으셨나요?</Link></p>
      { isError &&<div className="alert alert-warning">The username or password provided were incorrect!</div> }
      <hr/>
      <Button className="btn btn-success">새 계정 만들기</Button>
      </div>
    </Card>
  );
}

export default Login;