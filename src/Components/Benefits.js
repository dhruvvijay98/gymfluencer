// Benefits.js
import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "../Data/FeaturesData";
import "./Benefits.css";

function Benefits() {
  return (
    <section className="hero-with-features">
     
      <div className="hero">
        <h2>Discover GymFluencer Benefits</h2>
        <p>
          Unlock your full potential with GymFluencer, your personal fitness
          partner for progress and motivation.
        </p>
      </div>

      <div className="benefit-container">
        <div className="features-wrapper">
          
          <div className="features-column">
            <FeatureCard
              icon={features[0].icon}
              title={features[0].title}
              description={features[0].description}
            />
            <FeatureCard
              icon={features[1].icon}
              title={features[1].title}
              description={features[1].description}
            />
          </div>

        
          <div className="phone-mockup">
            <img
              src="images/phonemock.jpg"
              alt="Phone Mockup"
              className="phone-image"
            />
          </div>

         
          <div className="features-column">
            <FeatureCard
              icon={features[2].icon}
              title={features[2].title}
              description={features[2].description}
            />
            <FeatureCard
              icon={features[3].icon}
              title={features[3].title}
              description={features[3].description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
