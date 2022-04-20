import React, { useEffect, useState } from "react";
import { DetailHotelData } from "../data/detailHotelData";
import { DetailChambreData } from "../data/detailchambreData";
import ModalSuite from "./ModalSuite";

const DetailHotel = (props) => {
  const [currentHotel] = useState(DetailHotelData);
  const hotel = currentHotel[props.numeroHotel];
  const [suite] = useState(DetailChambreData);
  const numberHotel = props.numeroHotel + 1;
  const array = suite.filter((tri) => tri.hotel === numberHotel);
  const [visible, setVisible] = useState(false);
  const [idSuite, setIdSuite] = useState(0);
  const [detailSuite, setDetailSuite] = useState([]);
  useEffect(() => {
    setDetailSuite(suite.filter((tri) => tri.id === idSuite))
  }, [visible]);
  
  const Montre = (e, element) => {
    e.preventDefault();
     setVisible(true);
    setIdSuite(element.id);
  };
  const Cache = () => {
    setVisible(false);
  };
  return (
    <div className="hotelcontent">
      <div className="nom_hotel">
        <div className="texte">
          <h2>{hotel.title}</h2>
        </div>
      </div>

      <div className="descriptionhotel">
        <img src={hotel.img} key={hotel.id} alt={hotel.title} />
        <p>{hotel.infos}</p>
      </div>

      <div className="suitehotel">
        <h2>Les suites</h2>
        <ModalSuite
          visible={visible}
          cache={Cache}
          suite={detailSuite}
          numsuite={idSuite}
        />
        {array.map((chambre) => (
          <section
            className="suite"
            id={chambre.id}
            key={chambre.id}
            onClick={(e) => Montre(e, chambre)}
          >
            <div className="suitecarte">
              <div className="imagecarte">
                <img src={chambre.img} key={chambre.id} alt="chambre.nom" />
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
