import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { accountLogin } from "../api";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitInformation = async (event) => {
    event.preventDefault();
    const response = await accountLogin(username, password)
    if (response) {
        navigate("/");
     } else {
       alert("Invalid Login, Try Again")
     }
    setUsername("");
    setPassword("");
    setLoggedIn(true);
  };

  return (
    <div className="Login">
      <h2 className="LoginTitle">Login</h2>
      <form onSubmit={submitInformation}>
        <input
          placeholder="Username"
          value={username}
          onChange={handleUsername}
        ></input>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePassword}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;