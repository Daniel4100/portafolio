import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div data-aos="fade-right" data-aos-anchor-placement="top-center"
    data-aos-duration="1000"   className="skills-container">
      <section className="skills-section">
        <h1 className="about-title">Habilidades</h1>
        <div className="skills">
          <div className="skill html">
            <div className="container-icon">
              <i className="fa-brands fa-html5"></i>
            </div>
            <p className="title-skill">HTML5</p>
            <p className="text-skill">Lenguaje de marcado para la elaboración de páginas web.</p>
          </div>
          <div className="skill css">
            <div className="container-icon">
              <i className="fa-brands fa-css3-alt"></i>
            </div>
            <p className="title-skill">CSS3</p>
            <p className="text-skill">Lenguaje de hojas de estilo en cascada para la elaboración de páginas web.</p>
          </div>
          <div className="skill js">
            <div className="container-icon">
              <i className="fa-brands fa-js-square"></i>
            </div>
            <p className="title-skill">JavaScript</p>
            <p className="text-skill">Lenguaje de programación interpretado, dialecto del estándar ECMAScript.</p>
          </div>
          <div className="skill react">
            <div className="container-icon">
              <i className="fa-brands fa-react"></i>
            </div>
            <p className="title-skill">React</p>
            <p className="text-skill">Librería JavaScript de código abierto diseñada para crear interfaces de usuario.</p>
          </div>
          <div className="skill vite">
            <div className="container-icon">
              <img src="./vite.svg" alt="" />
            </div>
            <p className="title-skill">Vite</p>
            <p className="text-skill">Paquete de herramientas de desarrollo web moderno y rápido.</p>
          </div>
          <div className="skill git">
            <div className="container-icon">
              <i className="fa-brands fa-git-alt"></i>
            </div>
            <p className="title-skill">Git</p>
            <p className="text-skill">Sistema de control de versiones para el mantenimiento eficiente y confiable de archivos.</p>
          </div>
          <div className="skill github">
            <div className="container-icon">
              <i class="fa-brands fa-github"></i>
            </div>
            <p className="title-skill">Git Hub</p>
            <p className="text-skill">Plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git.</p>
          </div>
          <div className="skill npm">
            <div className="container-icon">
              <i className="fa-brands fa-npm"></i>
            </div>
            <p className="title-skill">NPM</p>
            <p className="text-skill">Gestor de paquetes para el lenguaje de programación JavaScript.</p>
          </div>
          <div className="skill redux">
            <div className="container-icon">
              <img src="./images/redux.svg" alt="" />
            </div>
            <p className="title-skill">Redux Toolkit</p>
            <p className="text-skill">Paquete oficial de Redux para facilitar la configuración y el uso de Redux.</p>
          </div>
          <div className="skill framer">
            <div className="container-icon">
              <img src="./images/framer.svg" alt="" />
            </div>
            <p className="title-skill">Framer Motion</p>
            <p className="text-skill">Librería de animaciones para React.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
