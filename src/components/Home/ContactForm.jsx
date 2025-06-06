// This is a conceptual representation and needs to be adapted to your specific React setup (e.g., Next.js, Create React App, etc.)
// You'll likely need to import useState for form handling and potentially a CSS module or styled-components for styling.

import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Message sent! (This is a placeholder, integrate with your backend)');
  };

  return (
    <section className="contact-section">
      <div className="contact-form-container">
        <h2>Reach out to us</h2>
        <p>
          We welcome your questions and a member of our team will strive to
          respond in a timely manner.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              aria-label="Full Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              aria-label="Message"
            ></textarea>
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              aria-label="Sign-up to receive latest additions to our collection and our thought leadership content"
            />
            <label htmlFor="subscribe">
              Sign-up to receive latest additions to our collection and our thought
              leadership content
            </label>
          </div>

          <button type="submit" className="send-message-button">
            SEND MESSAGE
          </button>
        </form>
      </div>

      <div className="iphone-mockup-container">
        {/*
          In a real application, you'd likely use an <img> tag with a proper src.
          For a more dynamic/interactive mockup, you might use a dedicated library or component.
          The text "News for you Since yesterday your sales have increased!" would be overlaid.
        */}
        <img
          src="path/to/your/iphone-mockup.png" // Replace with the actual path to your image
          alt="iPhone 12 Pro Mockup displaying a sales increase notification"
          className="iphone-mockup-image"
        />
        <div className="iphone-screen-content">
          <p className="app-name">FISHBOWL</p>
          <div className="notification-card">
            <p className="news-label">News for you</p>
            <p className="sales-message">Since yesterday your sales have increased!</p>
            <div className="navigation-buttons">
              <button className="nav-button">&lt;</button>
              <button className="nav-button">&gt;</button>
              <span className="start-text">Start</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;