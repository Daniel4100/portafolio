import React from "react";
import { Link } from "react-router-dom";
import "./portafolio.css";
import ProyectCard from "./ProyectCard";
import proyectos from "./proyectos";

const Portafolio = () => {
  return (
    <div id="portafolio" className="portafolio">
      
      <h1 className="about-title">Portafolio</h1>
      <div className="proyectos">
        {proyectos.map((proyecto, index) => (
          <ProyectCard key={index} proyecto={proyecto} />
        ))}
      </div>
      <a href="#home" className="icon home-icon">
        <i class="fa-solid fa-house"></i>
      </a>
    </div>
  );
};

export default Portafolio;
