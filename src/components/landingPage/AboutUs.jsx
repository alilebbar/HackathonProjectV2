import React from "react";

const AboutUs = () => {
  return (
   
<section className="section">
      <div className="container">
        <div className="row">
          {/* Texte à gauche */}
          <div className="text-left">
            <h2>About us</h2>
            <p>
              We created this blog to make tech less intimidating and more accessible for beginners. Whether you're just getting started or curious about how things work, we’re here to guide you step by step—with simple language, real-world examples, and zero judgment.
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
