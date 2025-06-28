// src/pages/Contact.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Let's Build Together</h1>
          <p>Reach out to us for tailored construction solutions</p>
        </div>
      </section>

      <section className="contact-content section-padding">
        <div className="container contact-content-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p className="intro">Have a project in mind? We’d love to hear from you.</p>

            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>96 Jorissen Street, Braamfontein into jozi Building</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+27 82 402 3401</p>
                <p>+27 73 911 4115</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>aholiabtrading@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Working Hours</h3>
                <p>Mon–Fri: 8:00 - 17:00</p>
                <p>Sat: 9:00 - 13:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section at the bottom */}
      <section className="contact-map">
        <iframe
          title="Aholiab Trading Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.514870719565!2d28.05215301501007!3d-26.194616983424173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9495b6b4a781e5%3A0xecc35ef64fbe6378!2s96%20Jorissen%20St%2C%20Braamfontein%2C%20Johannesburg%2C%202011!5e0!3m2!1sen!2sza!4v1687976988314!5m2!1sen!2sza"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
