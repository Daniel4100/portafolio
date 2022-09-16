import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portafolio from "./components/Portafolio";

const App = () => {
  //portfolio whit routes and components
  const [toglw, setToglw] = useState(false);

  const handleClick = () => setToglw(!toglw);
  return (
    <div className="app">
      <div className="bg"></div>
      <div className="overlay"></div>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portafolio" element={<Portafolio />} />
      </Routes>
    </div>
  );
};

export default App;
