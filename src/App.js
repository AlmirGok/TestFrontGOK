import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Users from "./Pages/Users";
import Perfil from "./Pages/Perfil";
import React from "react";
import { Button } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
