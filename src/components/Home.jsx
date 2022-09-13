import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul className="icons-container">
      <li className="icon"><Link to={'/about'} >
        <i class="fa-solid fa-user"></i></Link>
      </li>
      <li className="icon"><a href="https://github.com/Daniel4100" target='_blanck'>
        <i class="fa-brands fa-github"></i></a>
      </li>
      <li className="icon">
        <i class="fa-solid fa-file"></i>
      </li>
      <li className="icon">
        <i class="fa-solid fa-briefcase"></i>
      </li>
      <li className="icon">
        <i class="fa-brands fa-linkedin"></i>
      </li>
    </ul>
  );
};

export default Home;
