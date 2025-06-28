// src/components/ProjectsPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ProjectsPreview.css";
import project1 from '../assets/67Br.png';
import project2 from '../assets/Mpo.png';
import project3 from '../assets/Str.png';

const ProjectsPreview = () => {
  const projects = [
    {
      name: "Ptn 1 of 67 Bramley",
      description: "Construction of Offices",
      image: project1
    },
    {
      name: "Mpolonjeni",
      description: "Construction of a Guest House",
      image: project2
    },
    {
      name: "858 Strubenvale",
      description: "Construction of a Guest House",
      image: project3
    }
  ];

  return (
    <section className="projects-preview section-padding">
      <div className="container">
        <h2 className="section-title">Recent Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.name} className="project-image" />

                <div className="project-overlay">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '40px' }}>
          <Link to="/projects" className="btn view-all-btn">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
