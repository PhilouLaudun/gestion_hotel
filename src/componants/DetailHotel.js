import React, {useState} from 'react'
import { DetailHotelData } from '../data/detailHotelData';

const DetailHotel = (props) => {
    const [currentHotel] = useState(DetailHotelData)
    const hotel = currentHotel[props.numeroHotel];
  return (
    <div className="hotelcontent">
      <div className="nom_hotel">
        <div className="texte">
          <h2>{hotel.title}</h2>
        </div>
      </div>
      <div className="descriptionhotel">
        <img src="{hotel.img}" alt="" />
        <p>{hotel.infos}</p>
      </div>

      <div className="suitehotel">suite</div>
    </div>
  );
}

export default DetailHotel