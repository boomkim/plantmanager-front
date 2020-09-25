import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth";

function MyProfile(props) {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const { authTokens } = useAuth();

  useEffect(() => {
    // console.log("authtoken?", authTokens);
    const authString = "Bearer " + authTokens;
    // console.log(authString);
    fetch('/users/me',{
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": authString
      },  
    }).then(res => res.json())
    .then(data => {
      setUsername(data.username);
      setEmail(data.email);
      // console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  return (
    <div>
      My Profile
      <p>username: {username}</p>
      <p>email: {email}</p>
      {}
    </div>
  );
}

export default MyProfile;