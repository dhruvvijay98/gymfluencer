import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src="path-to-logo" alt="GymFluencer Logo" className="logo" />
          <h1>GymFluencer</h1>
        </div>
        <p className="tagline">Where Fitness Meets Social Connection!</p>
        <a href="mailto:hello@gym.birlaventures.com" className="email-button">
          <i className="email-icon"></i> hello@gym.birlaventures.com
        </a>
        <nav className="footer-nav">
          <a href="/home">Home</a>
          <a href="/workout-plan">Workout Plan</a>
          <a href="/diet-plan">Diet Plan</a>
          <a href="/faqs">FAQs</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© 2024 GymFluencer. All rights reserved.</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="linkedin-icon"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="twitter-icon"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="instagram-icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
