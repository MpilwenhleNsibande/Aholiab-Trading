// src/pages/Services.jsx
import React from 'react';
import '../styles/Services.css';
import gal1 from '../assets/gal1.jpeg';
import gal2 from '../assets/gal2.jpeg'; 
import gal3 from '../assets/gal3.jpeg';
import gal4 from '../assets/gal4.jpeg';
import gal5 from '../assets/79BH.png';
import gal6 from '../assets/gal6.jpeg';



const galleryImages = [
  gal1,
  gal2,
  gal3,
  gal4,
  gal5,
  gal6
];


const Services = () => {
  const services = [
    {
      title: "Building Construction",
      description: "We specialize in constructing residential, commercial, and industrial buildings with the highest standards of quality and safety.",
      icon: "fas fa-building"
    },
    {
      title: "Civil Engineering",
      description: "Our civil engineering services include infrastructure development, road construction, and other large-scale projects.",
      icon: "fas fa-road"
    },
    {
      title: "Renovation and Remodeling",
      description: "Transform your existing space with our professional renovation and remodeling services tailored to your needs.",
      icon: "fas fa-hammer"
    },
    {
      title: "Project Management",
      description: "From conception to completion, we manage every aspect of your construction project with precision.",
      icon: "fas fa-tasks"
    },
    {
      title: "Design-Build Services",
      description: "Our integrated approach combines design and construction for seamless project execution and cost efficiency.",
      icon: "fas fa-drafting-compass"
    },
    {
      title: "Pre-Construction Services",
      description: "We provide comprehensive planning and estimating services to ensure your project starts on the right foot.",
      icon: "fas fa-calculator"
    },
    {
      title: "Construction Management",
      description: "Our expert construction managers oversee every detail to deliver projects on time and within budget.",
      icon: "fas fa-hard-hat"
    },
    {
      title: "General Contracting",
      description: "As a full-service general contractor, we coordinate all aspects of construction for a hassle-free experience.",
      icon: "fas fa-clipboard-check"
    }
  ];

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="hero-title">OUR SERVICES</h1>
          <p className="hero-subtitle">Comprehensive construction solutions tailored to your needs</p>
        </div>
      </section>

      <section className="services-list section-padding">
        <div className="container">
          <h2 className="section-title">WHAT WE OFFER</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={index} tabIndex="0" aria-label={service.title}>
                <div className="service-icon" aria-hidden="true">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process section-padding bg-light">
        <div className="container">
          <h2 className="section-title">OUR PROCESS</h2>
          <div className="process-steps">
            {[
              { num: 1, title: "Consultation", text: "We begin with understanding your vision, requirements, and budget." },
              { num: 2, title: "Planning", text: "Our experts create detailed plans and timelines for your project." },
              { num: 3, title: "Execution", text: "We implement the plan with precision and quality craftsmanship." },
              { num: 4, title: "Delivery", text: "We hand over the completed project with thorough quality checks." },
            ].map(({num, title, text}) => (
              <div className="process-step" key={num}>
                <div className="step-number">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="services-gallery section-padding">
        <div className="container">
          <h2 className="section-title">OUR CONSTRUCTION GALLERY</h2>
          <div className="gallery-wrapper">
            {galleryImages.map((imgSrc, i) => (
              <div className="gallery-item" key={i}>
                <img src={imgSrc} alt={`Construction work ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
