// src/components/Testimonials.jsx
import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, ABC Corporation",
      content: "Aholiab Trading delivered our office complex ahead of schedule and under budget. Their attention to detail and professionalism was outstanding.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      position: "Property Developer",
      content: "We've worked with many construction firms, but Aholiab stands out for their quality workmanship and reliable project management.",
      rating: 5
    },
    {
      name: "Michael Brown",
      position: "Hotel Owner",
      content: "The guest house they built for us exceeded our expectations. Their team was responsive and addressed all our concerns promptly.",
      rating: 4
    }
  ];

  return (
    <section className="testimonials section-padding bg-light">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i} 
                    className={`fas fa-star ${i < testimonial.rating ? 'filled' : ''}`}
                  ></i>
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;