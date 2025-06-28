// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          {/* Logo & About */}
          <div className="footer-about">
            <img src={logo} alt="Aholiab Trading Logo" className="footer-logo" />
            <p>
              Building a better future through excellence in construction.  
              We offer innovative, sustainable solutions for lasting impact.
            </p>
            <div className="footer-contact">
              <p><i className="fas fa-phone"></i> +27 82 402 3401 /  +27 73 911 4115</p>
              <p><i className="fas fa-envelope"></i> aholiabtrading@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="footer-message">
            <h3>Send a Message</h3>
            <form>
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit"><i className="fas fa-paper-plane"></i> Send</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aholiab Trading Pty Ltd | Ref: 2024/318872/07</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
