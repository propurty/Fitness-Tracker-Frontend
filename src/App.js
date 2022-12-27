import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  HomePage,
  Activities,
  Routines,
  MyRoutines,
  Login,
  Logout,
  Register,
  Navbar,
} from "./components";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setLoggedIn(true);
    }
}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Register" element={<Register setLoggedIn={setLoggedIn} />} />
          <Route path="/Login" element={<Login setLoggedIn={setLoggedIn} />} />
          {loggedIn ? null : <Route path="/Logout" element={<Logout />} /> }
          <Route path="/Activities" element={<Activities loggedIn={loggedIn} />} />
          <Route path="/Routines" element={<Routines />} />
          {loggedIn ? <Route path="/MyRoutines" element={<MyRoutines />} /> : null}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
