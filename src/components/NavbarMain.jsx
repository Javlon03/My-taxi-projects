import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";

function NavbarMain() {
  return (
    <div className="navbar-main">
      <Link to="/" className="navbar-logo">
        <img
          className="taxi-img"
          src="https://cdn-icons-png.flaticon.com/512/1801/1801444.png"
          alt=""
        />
        TaxiUP
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Button text="Get a Quote" link="/quote" />
      <div className="navbar-social">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
    </div>
  );
}

export default NavbarMain;
