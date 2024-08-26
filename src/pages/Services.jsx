import React from "react";

function Services() {
  return (
    <section className="servis">
      <div className="servis-header">
        <img
          src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/138377-hzltlcqkci-1598529291.jpg"
          alt="About Us"
          className="servis-header-image"
        />
        <h1 className="servis-title">Services Us</h1>
      </div>

      <section className="home-container new-section">
        <div className="header">
          <h2>WHAT WE OFFER</h2>
          <h1>See What We Can Do for You</h1>
        </div>
        <div className="services">
          <div className="service">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9j41qfcxCrRC5NhSJb-x4_h947ny9pyMMvg&s"
              alt="Airport Transfer"
            />
            <div className="service-title">AIRPORT TRANSFER</div>
          </div>
          <div className="service">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRpyoajhZj35VqIJALcjpHmiV0gWx1Ez6Dg&s"
              alt="Worldwide Transportation"
            />
            <div className="service-title">WORLDWIDE TRANSPORTATION</div>
          </div>
          <div className="service">
            <img
              src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_10-2.49b0dd86.jpg&w=384&q=75"
              alt="Corporate Travel"
            />
            <div className="service-title">CORPORATE TRAVEL</div>
          </div>
          <div className="service">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRpyoajhZj35VqIJALcjpHmiV0gWx1Ez6Dg&s"
              alt="Charter Service"
            />
            <div className="service-title">CHARTER SERVICE</div>
          </div>
          <div className="service">
            <img
              src="https://c8.alamy.com/comp/2ABK135/taxi-driver-opening-car-door-for-smiling-woman-2ABK135.jpg"
              alt="Charter Service"
            />
            <div className="service-title">CHARTER WOMEN TAXI</div>
          </div>
          <div className="service">
            <img
              src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_03-2.6ad4dcc2.jpg&w=384&q=75"
              alt="Special Event Limousine"
            />
            <div className="service-title">SPECIAL EVENT LIMOUSINE</div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Services;
