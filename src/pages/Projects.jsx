// src/pages/Projects.jsx
import React from 'react';
import '../styles/Projects.css';
import prj1 from "../assets/67Br.png";
import prj2 from "../assets/Mpo.png";
import prj3 from "../assets/Str.png";
import prj4 from "../assets/379WH.png";
import prj5 from "../assets/90BH.png";
import prj6 from "../assets/79BH.png"; // Assuming you have an image for project 6
const Projects = () => {
  const projects = [
    {
      name: "Ptn 1 of 67 Bramley",
      description: "Construction of Offices",
      category: "commercial",
      image: prj1,
    },
    {
      name: "Mpolonjeni",
      description: "Construction of a Guest House",
      category: "residential",
      image: prj2,
    },
    {
      name: "858 Strubenvale",
      description: "Construction of a Guest House",
      category: "residential",
      image: prj3,
    },
    {
      name: "379 WestHills",
      description: "Construction of Offices",
      category: "commercial",
      image: prj4,
    },
    {
      name: "90 Blue Hills",
      description: "Construction of Offices",
      category: "commercial",
      image: prj5,
    },
    {
      name: "79 Blue Hills",
      description: "Construction of a Wedding Venue",
      category: "commercial",
      image: prj6,
    }
  ];

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>See our portfolio of completed and ongoing construction projects</p>
        </div>
      </section>

      <section className="projects-gallery section-padding">
        <div className="container">
          <h2 className="section-title">Recent Work</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
  <img src={project.image} alt={project.name} />
  <div className="project-overlay">
    <h3>{project.name}</h3>
    <p>{project.description}</p>
  </div>
</div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-stats section-padding bg-light">
        <div className="container">
          <h2 className="section-title">By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;