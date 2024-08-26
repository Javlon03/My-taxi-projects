import React from "react";
import { FaCheckCircle, FaUser, FaGlobe, FaCar } from "react-icons/fa";

function About() {
  const limos = [
    {
      name: "Audi A8",
      image:
        "https://carsguide-res.cloudinary.com/image/upload/c_scale,f_auto,t_cg_base,w_414/v1/editorial/review/hero_image/2023-Audi-A8-Sedan-Thumbnail-Clean-1001x565-(1).jpg",
      icons: [<FaUser />, <FaCar />, <FaGlobe />, <FaCar />],
    },
    {
      name: "Audi A8",
      image:
        "https://carsguide-res.cloudinary.com/image/upload/c_scale,f_auto,t_cg_base,w_414/v1/editorial/review/hero_image/2023-Audi-A8-Sedan-Thumbnail-Clean-1001x565-(1).jpg",
      icons: [<FaUser />, <FaCar />, <FaGlobe />, <FaCar />],
    },
    {
      name: "Audi A8",
      image:
        "https://carsguide-res.cloudinary.com/image/upload/c_scale,f_auto,t_cg_base,w_414/v1/editorial/review/hero_image/2023-Audi-A8-Sedan-Thumbnail-Clean-1001x565-(1).jpg",
      icons: [<FaUser />, <FaCar />, <FaGlobe />, <FaCar />],
    },
  ];

  return (
    <section className="about">
      <div className="about-header">
        <img
          src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/138377-hzltlcqkci-1598529291.jpg"
          alt="About Us"
          className="about-header-image"
        />
        <h1 className="about-title">About Us</h1>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            For over a dozen years we have been providing the best transport
            services. We offer bus, passenger transport and limousine rental.
          </p>
          <p>
            We address our offer to all who want to travel in comfortable
            conditions. We have over 120 top-class vehicles, so our customers
            can be assured of comfort and safety.
          </p>
          <ul className="about-features">
            <li>
              <FaCheckCircle className="feature-icon" />
              Professionally Trained Chauffeurs
            </li>
            <li>
              <FaCheckCircle className="feature-icon" />
              24/7 Full-Service Transportation
            </li>
            <li>
              <FaCheckCircle className="feature-icon" />
              Global network of Transportation Partners
            </li>
          </ul>
        </div>
        <div className="about-image">
          <img
            src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_01-6.65fd56b3.jpg&w=640&q=75"
            alt="Transport Service"
          />
        </div>
      </div>

      <div className="competences-section">
        <h2>Our Competences</h2>
        <div className="competences">
          <div className="competence">
            <img
              src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_06.6e4e3ab2.jpg&w=1200&q=75"
              alt="Professionalism"
            />
            <h3>Professionalism</h3>
            <p>
              Our experienced staff and highly professional chauffeurs are
              committed to providing safe, reliable transportation, exceptional
              customer service, and consistent pricing.
            </p>
          </div>
          <div className="competence">
            <img
              src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_07.5d6ed008.jpg&w=1200&q=75"
              alt="Commitment"
            />
            <h3>Commitment</h3>
            <p>
              Our office is open twenty-four hours a day, seven days a week.
              Whether you require a chauffeured vehicle for business or
              pleasure, we are always there.
            </p>
          </div>
        </div>
      </div>
      <div className="about-container">
        <h3 className="about-subtitle">Browse Our Limos</h3>
        <div className="limos-container">
          {limos.map((limo, index) => (
            <div key={index} className="limo-card">
              <img src={limo.image} alt={limo.name} className="limo-image" />
              <h4 className="limo-name">{limo.name}</h4>
              <div className="limo-icons">
                {limo.icons.map((icon, i) => (
                  <span key={i} className="limo-icon">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
