// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import heroVideo from '../assets/Build_v1.mp4'; // Replace with your real file

const Hero = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />

      <div className="hero-content">
        <h1 className="hero-title">Building Excellence, Crafting Futures</h1>
        <p className="hero-subtitle">
          Aholiab Trading delivers tailored, innovative construction solutions with a commitment to quality,
          safety, and sustainability.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn-primary">Get a Quote</Link>
          <Link to="/projects" className="btn-secondary">View Projects</Link>
        </div>
      </div>

      <div className="hero-glow" />
    </section>
  );
};

export default Hero;
