import React from "react";
import "./Services.css";

function Item() {
  return (
    <div>
      <div className="hero">
        <h2>Our Services</h2>
        <p>
        GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.
        </p>
      </div>
      <div className="services-section">
        <div className="service-card">
          <img src="images/track.jpg" alt="Track" />
          <h3 className="service-card-title"></h3>
        </div>
        <div className="service-card">
          <img src="images/analyze.jpg" alt="Analyze" />
          <h3 className="service-card-title"></h3>
        </div>
        <div className="service-card">
          <img src="images/train.jpg" alt="Train" />
          <h3 className="service-card-title"></h3>
        </div>
        <div className="service-card">
          <img src="images/connect.jpg" alt="Connect" />
          <h3 className="service-card-title"></h3>
        </div>
        <div className="service-card">
          <img src="images/challenge.jpg" alt="Challenge" />
          <h3 className="service-card-title"></h3>
        </div>
      </div>
    </div>
  );
}

export default Item;
