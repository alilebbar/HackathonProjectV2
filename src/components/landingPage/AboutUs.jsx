import React from "react";

const AboutUs = () => {
  return (
   
<section className="section">
      <div className="container">
        <div className="row">
          {/* Texte à gauche */}
          <div className="text-left">
            <h2>Our Vision</h2>
            <p>
              We strive to create innovative solutions that empower individuals and businesses to thrive in a rapidly evolving world. Our mission is to drive meaningful change through creativity, technology, and collaboration.
            </p>
          </div>

          {/* Image à droite */}
          <div className="image-right">
            <img
              src="https://img.freepik.com/photos-gratuite/propos-du-concept-informations-contact-service_53876-138509.jpg?semt=ais_hybrid&w=740"
              alt="Our Vision"
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutUs;
