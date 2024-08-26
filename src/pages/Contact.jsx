import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-info-left">
          <h3>AutoRide Transportation Services</h3>
          <p>2507 Parker Boulevard</p>
          <p>Oakland, CA 76107</p>
          <p>Phone: (620) 255 7005</p>
          <p>Toll Free: (825) 840 0440</p>
          <p>Email: info@autoride.com</p>
        </div>
        <div className="contact-info-right">
          <h3>Chairman of the Board</h3>
          <p>Mark Peter</p>
          <p>Phone: (620) 252 8021, Fax: (620) 252 8022</p>
          <p>Email: mark.peter@autoride.com</p>
          <h3>Director of Development</h3>
          <p>John Green</p>
          <p>Phone: (620) 252 8021, Fax: (620) 252 8022</p>
          <p>Email: john.green@autoride.com</p>
        </div>
      </div>
      <div className="contact-form">
        <h3>Private chauffeur, sightseeing tour?</h3>
        <p>Please fill out the form below with questions or comments</p>
        <form>
          <div className="form-group">
            <input type="email" placeholder="name@flowbite.com" />
            <input type="email" placeholder="name@flowbite.com" />
            <input type="email" placeholder="name@flowbite.com" /> <br />
            <textarea placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="contact-button">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
