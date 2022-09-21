import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import AboutOne from "./components/AboutOne";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import ParticlesBg from "./components/ParticlesBg";


const App = () => {
  const [isDark, setIsDark] = useState(false);

  const handleDark = () => setIsDark(!isDark);
  return (
    <div className={`app ${isDark && "dark"} `}>
      

      <div className="copBg"><ParticlesBg /></div>
      <div id="home" className="bg"></div>
      
      <div className="overlay"></div>
      <Home isDark={isDark} handleDark={handleDark} />
      <AboutOne />
      <Skills />
      <Portafolio />
      <a href="#home" className="icon home-icon">
        <i class="fa-solid fa-house"></i>
      </a>
      
    </div>
  );
};

export default App;
