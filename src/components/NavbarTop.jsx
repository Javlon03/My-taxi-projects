import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

function NavbarTop() {
  return (
    <div className="navbar-top">
      <div className="navbar-info">
        <FontAwesomeIcon icon={faEnvelope} /> 2507 Parker Boulevard, Oakland, CA
        76107
        <FontAwesomeIcon icon={faPhone} /> (0481) 123 987 2411
        <FontAwesomeIcon icon={faClock} /> Mon-Sat: 07:00 - 17:00
      </div>
    </div>
  );
}

export default NavbarTop;
