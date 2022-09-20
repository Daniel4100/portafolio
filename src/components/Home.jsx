import React from "react";
import { Link } from "react-router-dom";

const Home = ({isDark, handleDark}) => {
  return (
    <div className="home">
      <div className="contactfull">
        <a className="icon" href="mailto:ceballos990410@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a className="icon" href="https://wa.me/573137448742" target="_blanck">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <button onClick={handleDark} className="icon">
        {
            isDark ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>
          }
      </button>
      </div>
      <h2 className="name">Jhener Daniel</h2>
      <p className="subtitle">Front-end • Web Developer</p>
      <ul className="icons-container">
        <a className="icon" href="#about">
          <i className="fa-solid fa-user"></i>
        </a>
        <a
          className="icon"
          href="https://github.com/Daniel4100"
          target="_blanck"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <li className="icon">
          <i className="fa-solid fa-file"></i>
        </li>

          <a className="icon" href="#portafolio">
            <i className="fa-solid fa-briefcase"></i>
          </a>

          <a className="icon" href="https://www.linkedin.com/in/jhener-daniel/" target="_blanck">
            <i className="fa-brands fa-linkedin"></i>
          </a>
      </ul>
    </div>
  );
};

export default Home;
