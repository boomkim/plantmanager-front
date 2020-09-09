import React from "react";
import Container from "react-bootstrap/esm/Container";
import Login from "../components/Login";

function Welcome(props) {
  const style1 = {
    width: "980px"
  }
  
  return ( 
    <Container className="pt-5 mx-5" style={style1}>
      <div className="row pt-5">
        <div className="col-7 pt-5 text-center">
          <p>Logo</p>
          <p>식물관리 앱이에용</p>
        </div>
        <div className="col-5">
          <Login />
        </div>
      </div>
    </Container>
  );
}

export default Welcome;