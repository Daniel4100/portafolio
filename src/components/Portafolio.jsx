import React from "react";
import { Link } from "react-router-dom";
import "./portafolio.css";
import ProyectCard from "./ProyectCard";
import proyectos from "./proyectos";

const Portafolio = () => {
  return (
    <div className="portafolio">
      <div className="contactfull">
        <a className="icon" href="mailto:ceballos990410@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a className="icon" href="https://wa.me/573137448742" target="_blanck">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <h1>Portafolio</h1>
      <div className="proyectos">
        {
          proyectos.map((proyecto, index) => (
            <ProyectCard key={index} proyecto={proyecto}/>
            ))
        }

      </div>
      <Link to="/" className="icon home-icon">
      <i class="fa-solid fa-house"></i>
      </Link>
    </div>
  );
};

export default Portafolio;
