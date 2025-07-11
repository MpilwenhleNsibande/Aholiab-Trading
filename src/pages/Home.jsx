// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import ProjectsPreview from '../components/ProjectsPreview';
import CallToAction from '../components/CallToAction';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <CallToAction />
    </div>
  );
};

export default Home;