import "./App.css";
import React from "react";
import SingUp from "./Components/SingUp";
import Login from "./Components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/singup' element={<SingUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/1' element={<Navigate to="/singup"/>}/>
        
      </Routes>
    </div>
  );
};

export default App;
