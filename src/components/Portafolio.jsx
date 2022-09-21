import React from "react";
import "./portafolio.css";
import ProyectCard from "./ProyectCard";
import proyectos from "./proyectos";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portafolio = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div data-aos="fade-right" data-aos-anchor-placement="top-center"
    data-aos-duration="1000" 
    id="portafolio" className="portafolio">
      
      <h1 className="about-title">Portafolio</h1>
      <div className="proyectos">
        {proyectos.map((proyecto, index) => (
          <ProyectCard key={index} proyecto={proyecto} />
        ))}
      </div>
      
    </div>
  );
};

export default Portafolio;
