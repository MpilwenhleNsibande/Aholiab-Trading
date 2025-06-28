// src/components/CallToAction.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/CallToAction.css";


const CallToAction = () => {
  return (
    <section className="cta section-padding">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Contact us today to discuss your construction needs and let us help you bring your vision to life.
          </p>
          <Link to="/contact" className="btn btn-light">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;