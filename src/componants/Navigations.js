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
        <li style={{ paddingLeft: "25px" }} className="nav_hotels">
          <p>Hotels</p>
          <ul className="nav_hotel">
            <NavLink
              end
              to="/Hotel1"
              className={(navdata) => (navdata.isActive ? "navactive" : "")}
            >
              <li>Annecy</li>
            </NavLink>
            <NavLink
              end
              to="/Hotel2"
              className={(navdata) => (navdata.isActive ? "navactive" : "")}
            >
              <li>Biarritz</li>
            </NavLink>
            <NavLink
              end
              to="/Hotel3"
              className={(navdata) => (navdata.isActive ? "navactive" : "")}
            >
              <li>Bretagne</li>
            </NavLink>
            <NavLink
              end
              to="/Hotel4"
              className={(navdata) => (navdata.isActive ? "navactive" : "")}
            >
              <li>Gordes</li>
            </NavLink>
            <NavLink
              end
              to="/Hotel5"
              className={(navdata) => (navdata.isActive ? "navactive" : "")}
            >
              <li>Monaco</li>
            </NavLink>
            <NavLink
              end
              to="/Hotel6"
              className={(navdata) => (navdata.isActive ? "navactive" : "")}
            >
              <li>Paris</li>
            </NavLink>
            <NavLink
              end
              to="/Hotel7"
              className={(navdata) => (navdata.isActive ? "navactive" : "")}
            >
              <li>Vichy</li>
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
