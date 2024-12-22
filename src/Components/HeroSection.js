import React from "react";
import "./HeroSection.css";


function HeroSection() {
  return (
    <div
      className="hero-section"
     // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <h1>Track Your Fitness Journey</h1>
        <p>
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with ease.
        </p>
        <div className="trusted-badge">
          <span>Trusted by 3+ million users</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
