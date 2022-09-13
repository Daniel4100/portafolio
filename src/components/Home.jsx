import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2 className="name">Jhener Daniel</h2>
      <p className="subtitle">Front-end • Web Developer</p>
      <ul className="icons-container">
        <li className="icon">
          <Link to={"/about"}>
            <i className="fa-solid fa-user"></i>
          </Link>
        </li>
        <li className="icon">
          <a href="https://github.com/Daniel4100" target="_blanck">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="icon">
          <i className="fa-solid fa-file"></i>
        </li>
        <li className="icon">
          <i className="fa-solid fa-briefcase"></i>
        </li>
        <li className="icon">
          <a href="https://www.linkedin.com/in/jhener-daniel/" target="_blanck">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
