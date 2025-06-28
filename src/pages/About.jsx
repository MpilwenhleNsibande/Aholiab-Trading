// src/pages/About.jsx
import React from 'react';
import "../styles/About.css";
import heroVideo from '../assets/Build_v2.mp4';

const About = () => {
  return (
    <main className="about-page">

      <section className="about-hero section-padding">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          src={heroVideo}
          type="video/mp4"
        />
        <div className="hero-overlay"></div>
        
        <div className="container hero-content">
          <h1 className="hero-title">About <span>Aholiab Trading</span></h1>
          <p className="hero-subtitle">
            Building a better future through excellence in construction
          </p>
        </div>
      </section>

      <section className="about-story section-padding">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p className="about-text">
            We are a dynamic and innovative construction company committed to building a better future for our clients, employees, and communities.  
            With passion for excellence, quality, safety, and sustainability, we deliver construction solutions that consistently exceed expectations.
          </p>
        </div>
      </section>

      <section className="mission-vision section-padding bg-light">
        <div className="container mission-vision-grid">
          <article className="mission">
            <h2>Our Mission</h2>
            <p>
              To build a better future by delivering exceptional construction solutions that exceed customer expectations while prioritizing safety, sustainability, and quality.  
              We strive to be the trusted partner for projects that transform lives and landscapes.
            </p>
          </article>

          <article className="vision">
            <h2>Our Vision</h2>
            <p>
              Aholiab Trading builds more than structures—we build trust and community.  
              We transform visions into reality, driven by integrity, innovation, and unparalleled customer satisfaction.  
              Through empowering employees and fostering partnerships, we craft solutions that build a brighter tomorrow.
            </p>
          </article>
        </div>
      </section>

      <section className="capabilities section-padding">
        <div className="container">
          <h2 className="section-title">Our Core Capabilities</h2>
          <div className="capabilities-grid">
            {[
              { icon: "fas fa-building", title: "Building Construction", desc: "Residential, Commercial, Industrial" },
              { icon: "fas fa-road", title: "Civil Engineering" },
              { icon: "fas fa-hammer", title: "Renovation and Remodeling" },
              { icon: "fas fa-tasks", title: "Project Management" },
              { icon: "fas fa-drafting-compass", title: "Design-Build Services" },
              { icon: "fas fa-calculator", title: "Pre-Construction Services", desc: "Planning, Estimating" },
              { icon: "fas fa-hard-hat", title: "Construction Management" },
              { icon: "fas fa-clipboard-check", title: "General Contracting" }
            ].map(({ icon, title, desc }, i) => (
              <div className="capability-item" key={i}>
                <div className="capability-icon">
                  <i className={icon}></i>
                </div>
                <h3>{title}</h3>
                {desc && <p>{desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certifications section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Our Certifications</h2>
          <div className="certifications-list">
            {[
              { name: "NHBRC", code: "4000017749" },
              { name: "BBBEE", code: "Level one" },
              { name: "CIBD", code: "10422828" },
              { name: "Quality Management" }
            ].map(({ name, code }, i) => (
              <div className="certification-item" key={i}>
                <h3>{name}</h3>
                {code && <p>{code}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
