import React, { useState } from "react";
import { DetailHotelData } from "../data/detailHotelData";

const Carte = (props) => {
  // carte d'affichage des prestations
  const [currentCard] = useState(DetailHotelData); // tableau de cartes à afficher, fichier externe en json
  const carte = currentCard[props.carteNumber]; // tableau contenant la carte à afficher, index passé en props

  return (
    <div className="card">
        <img src={carte.img} alt={carte.title} />
      <div className="card_content">  
        <h1>{carte.title}</h1>
        <h2>{carte.infos}</h2>
      </div>
    </div>
  );
};

export default Carte;
