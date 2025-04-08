import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // For email (Gmail)
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    // Reset submission status after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
  <div>
  <Navbar/>
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Contact Information</h2>


          <div className="info-item">
            <a href="mailto:kishoresundar972@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="1x" />kishoresundar972@gmail.com</a>
          </div>

          <div className="info-item">
            <a href="https://www.google.com/url?sa=D&q=tel:7904183289&ust=1744136100000000&usg=AOvVaw2H9t_J6uqVWbJ0_mUYRPzc&hl=en-GB"  rel="noopener noreferrer">        <FontAwesomeIcon icon={faPhone} className="contact-icon" />
+91 7904183289</a>
          </div>

          <div className="info-item">
            <a href="https://www.google.co.in/maps/place/Hosur,+Tamil+Nadu/@12.739524,77.7915102,13z/data=!3m1!4b1!4m6!3m5!1s0x3bae70c883f728a3:0xd71a6bc0275ac9be!8m2!3d12.7409127!4d77.8252923!16zL20vMDVmMjFo?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />HOSUR,TAMIL NADU</a>
          </div>
          <div className="info-item">

              <a href="https://github.com/KISHORE-5002" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icon" />
                KISHORE-5002
              </a>
            </div>
             <div className="info-item">

                <a href="https://www.linkedin.com/in/kishore-s-76b4a7274/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icon" />
                  linkedin.com/in/yourprofile
                </a>
              </div>
        </div>

        <div className="contact-form">
          <h2>Send us a message</h2>
          {submitted && (
            <div className="success-message">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;