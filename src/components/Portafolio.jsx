import React from "react";
import { Link } from "react-router-dom";
import "./portafolio.css";
import ProyectCard from "./ProyectCard";
import proyectos from "./proyectos";

const Portafolio = () => {
  return (
    <div className="portafolio">
      <h1>Portafolio</h1>
      <div className="proyectos">
        {
          proyectos.map((proyecto, index) => (
            <ProyectCard key={index} proyecto={proyecto}/>
            ))
        }

      </div>
      <Link to="/" className="icon home-icon">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
    </div>
  );
};

export default Portafolio;
