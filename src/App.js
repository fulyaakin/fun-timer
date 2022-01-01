import React from "react";
import './App.css';
import NewYear from "./screens/NewYear";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Graduation from "./screens/Graduation";
import Quarantine from "./screens/Quarantine";
import Birthday from "./screens/Birthday";
import Custom from "./screens/Custom";
import Menu from "./screens/Menu";

function App() {

  return (
    <div>
      <BrowserRouter>
          <div className="container">
            <Routes>
            <Route path="/" element={<Menu/>} />
              <Route path="/newyear" element={<NewYear/>} />
              <Route path="/birthday" element={<Birthday/>} />
              <Route path="/quarantine" element={<Quarantine/>} />
              <Route path="/graduation" element={<Graduation/>} />
              <Route path="/custom" element={<Custom/>} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
