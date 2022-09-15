import React from "react";

const ProyectCard = ({ proyecto }) => {
  return (
    <div class="card__father">
      <div class="card">
        <div
          class="card__front"
          style={{ backgroundImage: `url('${proyecto.image}')` }}
        >
          <div class="bg_card"></div>
          <div class="body__card_front">
            <h1>{proyecto.title}</h1>
          </div>
        </div>
        <div class="card__back">
          <div class="body__card_back">
            <h1>{proyecto.title}</h1>
            <p>{proyecto.description}</p>
          </div>
          <a href={proyecto.link} target="_blank" rel="noreferrer">
            <i class="fa-solid fa-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
