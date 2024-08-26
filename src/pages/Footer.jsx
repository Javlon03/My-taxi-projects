import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-info">
          <div className="footer-info-item">
            <FaMapMarkerAlt className="footer-icon" />
            <p>ADDRESS</p>
            <p>2507 Parker Boulevard Oakland, CA 76107</p>
          </div>
          <div className="footer-info-item">
            <FaPhoneAlt className="footer-icon" />
            <p>PHONES</p>
            <p>
              Book a ride: (0481) 123 987 2411
              <br />
              Office: (0481) 123 987 2412
            </p>
          </div>
          <div className="footer-info-item">
            <FaClock className="footer-icon" />
            <p>WORKING HOURS</p>
            <p>
              Mon-Sat: 07:00 - 17:00
              <br />
              Sun: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1801/1801444.png"
            alt="TaxiUP Logo"
          />{" "}
          <p>
            DriverUP has provided car services in Oakland area since 2005. What
            started as a small company has grown into a premier limousine and
            private transportation company.
          </p>
        </div>
        <div className="footer-services">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Experiential Tours</li>
            <li>Wedding Limousine</li>
            <li>Corporate Travel</li>
            <li>Airport Transportation</li>
            <li>Nationwide Transportation</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>DriverUP</h3>
          <p>
            <FaMapMarkerAlt /> 2507 Parker Boulevard, Oakland
          </p>
          <p>
            <FaPhoneAlt /> (0481) 123 987 2411
          </p>
          <p>
            <FaPhoneAlt /> (0481) 123 987 2412
          </p>
          <p>
            <FaEnvelope /> contact@autoride.com
          </p>
          <p>
            <FaClock /> Mon-Sat: 07:00 - 17:00
          </p>
        </div>
        <div className="footer-subscribe">
          <h3>SUBSCRIBE</h3>
          <input type="email" placeholder="name@flowbite.com" />
          <button>Submit</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2021 DriverUP Theme by Wael Hassine</p>
        <div className="social-icons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
