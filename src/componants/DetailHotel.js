import React, { useState } from "react";
import { DetailHotelData } from "../data/detailHotelData";
import { DetailChambreData } from "../data/detailchambreData";

const DetailHotel = (props) => {
  const [currentHotel] = useState(DetailHotelData);
  const hotel = currentHotel[props.numeroHotel];
  const [suite] = useState(DetailChambreData);
  const numberHotel = props.numeroHotel + 1;
  const array = suite.filter((tri) => tri.hotel === numberHotel);
  return (
    <div className="hotelcontent">
      <div className="nom_hotel">
        <div className="texte">
          <h2>{hotel.title}</h2>
        </div>
      </div>
      <div className="descriptionhotel">
        <img src={hotel.img} alt={hotel.title} />
        <p>{hotel.infos}</p>
      </div>

      <div className="suitehotel">
        <h2>Les suites</h2>
        {array.map((chambre) => (
          <section className="suite">
            <div className="suitecarte">
              <div className="imagecarte">
                <img src={chambre.img} key={chambre.id} alt="" />
              </div>

              <h3>{chambre.nom}</h3>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default DetailHotel;
