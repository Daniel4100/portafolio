import React from "react";

const About = () => {
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
        <div className="about-img">
          {/* <img src="https://i.ibb.co/7bQQYkX/IMG-20210410-134247.jpg" alt="Jhener Daniel" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
