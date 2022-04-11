import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  // affichage de la navigation
  return (
    <div className="navigation">
      <ul>
        <NavLink
          end
          to="/"
          className={(navdata) => (navdata.isActive ? "navactive" : "")}
        >
          <li style={{ paddingLeft: "35px" }}>Acceuil</li>
        </NavLink>
        <li style={{ paddingLeft: "25px" } } className="nav_hotels">
          Portfolio
          <ul className="nav_hotel">
          <NavLink
            end
            to="/Hotel1"
              className={(navdata) => (navdata.isActive ? "navactive" : "")}>
              <li>Annecy</li>
            </NavLink>
           <NavLink
            end
            to="/Hotel2"
              className={(navdata) => (navdata.isActive ? "navactive" : "")}>
              <li>Biarritz</li>
            </NavLink> 
          </ul>
        </li>
        <NavLink
          end
          to="/contact"
          className={(navdata) => (navdata.isActive ? "navactive" : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
