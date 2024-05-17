import React, { useState } from "react";
import { Link } from "react-router-dom";
import gameData from "./game.jsx";

const About = ({ isDark, handleDark }) => {
  const [skillsData, setSkillsData] = useState(
    gameData.sort(() => Math.random() - 0.5)
  );
  const [prevIndexCard, setPrevIndexCard] = useState(-1);
  const [isGame, setIsGame] = useState(false);

  console.log(skillsData);

  const selectCard = (e, index) => {
    if (
      skillsData[index].status !== "selected" &&
      skillsData[index].status !== "up"
    ) {
      skillsData[index].status = "selected";
      setSkillsData([...skillsData]);
      if (prevIndexCard === -1) {
        setPrevIndexCard(index);
      } else {
        // En la segunda tarjeta seleccionada
        validateCards(index);
      }
    }
  };

  const validateCards = (newIndexCard) => {
    setTimeout(() => {
      const prev = skillsData[prevIndexCard];
      const current = skillsData[newIndexCard];
      if (prev.name === current.name) {
        prev.status = "up";
        current.status = "up";
      } else {
        prev.status = "down";
        current.status = "down";
      }
      setSkillsData([...skillsData]);
      setPrevIndexCard(-1);
    }, 500);
  };

  const isGameToggle = () => setIsGame(!isGame);

  return (
    <div className="about">
      {/* <nav className="about-nav">
        <div>
          <h1>JD</h1>
        </div>
        <div>
        <button onClick={handleDark} className="icon">
          {
            isDark ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>
          }
        </button>
        </div>
      </nav> */}
      <div className="about-container">
        <div className="content box1">

          <section className="about-text">

            <p>
              ¡Hola! Soy Jhener Daniel Calvache Ceballos, un apasionado desarrollador web Front-end de Colombia.
              Mi vida gira en torno a la programación, el diseño web y, por supuesto, una buena taza de café.
              Como desarrollador, me dedico a crear experiencias digitales que no solo sean funcionales, sino también estéticamente agradables.
              Creo firmemente que la programación es una de las herramientas más poderosas que tenemos para transformar el mundo.
            </p>

            <p>
              Elegí la programación porque siempre hay algo nuevo que aprender y nuevas maneras de resolver problemas.
              Me motiva el hecho de que cada línea de código puede contribuir a mejorar la vida de alguien.
              Además de mi amor por la programación, disfruto de cocinar, viajar, jugar videojuegos, ver series y películas, y escuchar música.
              Estos intereses complementan mi vida profesional y me inspiran a ser creativo y a pensar fuera de la caja.
            </p>

            <p>
              Creo en el poder de la colaboración y el aprendizaje continuo. Ayudar a otros a entender y amar la programación tanto como yo
              es algo que me llena de satisfacción. Estoy convencido de que la programación no solo es una habilidad técnica,
              sino una forma de pensar y resolver problemas que puede cambiar el mundo.
            </p>
          </section>
          <section className="about-text-rigth">
            <div className="ball">
              <h2>About</h2>
            </div>
          </section>
        </div>

        <div className="content">
          {/* zona de habilidades web skills */}
          <h2 className="title">Skills</h2>
          <button className="isGame-button" onClick={isGameToggle}>
            {isGame ? "cerrar" : "Quieres Jugar?"}
          </button>
          {isGame && <h2 className="title">Juego de Memoria</h2>}
          <div className="skills">
            {isGame ? (
              <>
                {skillsData
                  .filter((e) => e !== undefined)
                  .map((e, i) => (
                    <div
                      key={e.id}
                      onClick={() => selectCard(e.status, i)}
                      className={`skill ${e.status}`}
                    >
                      {e.status !== "down" && e.skill}
                    </div>
                  ))}
              </>
            ) : (
              <>
                <div className="skill html">
                  <i className="fa-brands fa-html5"></i>
                  <p>HTML5</p>
                </div>
                <div className="skill css">

                  <i className="fa-brands fa-css3-alt"></i>
                  <p>CSS3</p>


                </div>
                <div className="skill js">
                  <i className="fa-brands fa-js-square"></i>
                  <p>JavaScript</p>
                </div>
                <div className="skill react">
                  <i className="fa-brands fa-react"></i>
                  <p>React</p>
                </div>
                <div className="skill vite">
                  <img src="./vite.svg" alt="" />
                  <p>Vite</p>
                </div>
                <div className="skill git">
                  <i className="fa-brands fa-git-alt"></i>
                  <p>Git</p>
                </div>
                <div className="skill github">
                  <i className="fa-brands fa-github"></i>
                  <p>Git Hub</p>
                </div>
                <div className="skill npm">
                  <i className="fa-brands fa-npm"></i>
                  <p>NPM</p>
                </div>
                <div className="skill redux">
                  <img src="./images/redux.svg" alt="" />
                  <p>Redux Toolkit</p>
                </div>
                <div className="skill framer">
                  <img src="./images/framer.svg" alt="" />
                  <p>Framer Motion</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="content">
          <h2 className="title">Contact</h2>
          <div className="contact">
            <a className="icon" href="mailto:ceballos990410@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>

            <a
              className="icon"
              href="https://wa.me/573137448742"
              target="_blanck"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <Link to="/" className="icon home-icon">
          <i class="fa-solid fa-house"></i>
        </Link>
      </div>
    </div>
  );
};

export default About;
