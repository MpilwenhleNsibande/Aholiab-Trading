// src/components/ServicesPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ProjectsPreview.css";

const ServicesPreview = () => {
  const services = [
    {
      title: "Building Construction",
      description: "Residential, Commercial, Industrial buildings",
      icon: "fas fa-building"
    },
    {
      title: "Civil Engineering",
      description: "Infrastructure and large-scale projects",
      icon: "fas fa-road"
    },
    {
      title: "Renovation",
      description: "Transform your existing space",
      icon: "fas fa-hammer"
    }
  ];

  return (
    <section className="services-preview section-padding bg-light">
      <div className="container">
        <h2 className="section-title">OUR SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '40px' }}>
          <Link to="/services" className="btn">VIEW ALL SERVICES</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;