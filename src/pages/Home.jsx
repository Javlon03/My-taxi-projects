import React from "react";

function Home() {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>First Class . WorldWide</h1>
          <p>A chauffeur service for any purpose</p>
          <button className="contact-button">Contact Us</button>
        </div>
      </section>

      <section className="services">
        <div className="service-item">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5631/5631194.png"
            alt="Safety First"
          />
          <h3>Safety First</h3>
          <p>Experienced staff and professionally trained chauffeurs</p>
        </div>
        <div className="service-item">
          <img
            src="https://cdn-icons-png.flaticon.com/128/51/51767.png"
            alt="Reasonable Rates"
          />
          <h3>Reasonable Rates</h3>
          <p>
            We can offer you the right vehicle at the right price to fit your
            budget
          </p>
        </div>
        <div className="service-item">
          <img
            src="https://cdn-icons-png.flaticon.com/128/0/308.png"
            alt="Largest Fleet"
          />
          <h3>Largest Fleet</h3>
          <p>
            We offer an extensive fleet of vehicles including sedans,
            limousines, and coach buses
          </p>
        </div>
        <div className="service-item">
          <img
            src="https://cdn-icons-png.freepik.com/256/12982/12982688.png?ga=GA1.1.1093334370.1723797838&semt=ais_hybrid"
            alt="Nationwide Service"
          />
          <h3>Nationwide Service</h3>
          <p>We provide our transportation services nationwide</p>
        </div>
      </section>

      <section className="image-gallery">
        <img
          className="image1"
          src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_01-6.65fd56b3.jpg&w=640&q=75"
          alt="Travel Image 1"
        />
        <img
          className="image2"
          src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_01-5.077f961a.jpg&w=640&q=75"
          alt="Travel Image 2"
        />
      </section>
      <section className="home-container">
        <div className="header-section">
          <h1>#</h1>
          <p className="invitation-text">
            I invite you to try our service and I personally guarantee you will
            have a fully satisfied experience.
          </p>
          <p className="ceo-signature">ANDRO Tomas - CHAIRMAN CEO</p>
        </div>
        <div className="service-section">
          <h2>Exceptional Customer Service</h2>
          <p className="service-description">
            By offering exceptional service with no detail unattended, we have
            been fortunate enough to have developed into the leading provider of
            ground transportation in the area. Our goal is to make your travels
            safe, effortless and on schedule.
          </p>
          <button className="contact-button">CONTACT US</button>
        </div>

        <div className="images-section">
          <img
            src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_10-1.a691d225.jpg&w=384&q=75"
            alt="Car Image 1"
            className="service-image"
          />
          <img
            src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_10-2.49b0dd86.jpg&w=384&q=75"
            alt="Car Image 2"
            className="service-image"
          />
          <img
            src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_03-2.6ad4dcc2.jpg&w=384&q=75"
            alt="Car Image 3"
            className="service-image"
          />
        </div>
      </section>
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
        <div className="contact">
          <button>CONTACT US</button>
        </div>
        <div className="footer">
          <h2>WHY CHOOSE US</h2>
          <p>Proudly Serving the Oakland Area Since 2007</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
