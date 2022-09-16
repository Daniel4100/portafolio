import React, { useState } from "react";
import { Link } from "react-router-dom";
import gameData from "./game.jsx";

const About = () => {
  const [skillsData, setSkillsData] = useState(
    gameData.sort(() => Math.random() - 0.5)
  );
  const [prevIndexCard, setPrevIndexCard] = useState(-1);
  const [isGame, setIsGame] = useState(false);

  console.log(skillsData);

  const selectCard = (e, index) => {
    
    console.log(e);
    if (skillsData[index].status !== 'selected' && skillsData[index].status !== 'up') {
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
      
      <div className="about-container">
        <div className="content">
          <h2 className="title">About me</h2>
          <section className="about-text">
            <p>
              Hola mundo, me llamo Jhener Daniel Calvache Ceballos, soy
              colombiano y soy un desarrollador web Front-end, me gusta la
              programación, el diseño web y el café.
            </p>

            <p>
              Siempre es bueno aprender cosas nuevas y siempre es bueno ayudar a
              los demás, y si es sobre programación mejor.
            </p>

            <p>
              Soy fiel creyente de que la programación es una de las mejores
              cosas que nos ha dado la humanidad, y que es una de las mejores
              herramientas para poder cambiar el mundo.
            </p>

            <p>
              Además me gusta cocinar, viajar, jugar videojuegos, ver series y
              películas, y escuchar música con programación es lo mejor que hay.
            </p>
          </section>
        </div>
        
        <div className="content">
          {/* zona de habilidades web skills */}
          <h2 className="title">Skills</h2>
          <button className="isGame-button" onClick={isGameToggle}>{isGame ? 'cerrar' : 'Quieres Jugar?' }</button>
          {isGame && <h2 className="title">Juego de Memoria</h2>}
          <div className="skills">
            {isGame ? (
              <div className="skills">
                {
              skillsData
                .filter((e) => e !== undefined)
                .map((e, i) => (
                  <div
                    key={e.id}
                    onClick={() => selectCard(e.status, i)}
                    className={`skill ${e.status}`}
                  >
                    {e.status !== "down" && e.skill}
                    
                  </div>
                  
                ))}</div>
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
