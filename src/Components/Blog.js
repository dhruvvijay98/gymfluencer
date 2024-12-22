import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div>
      <div className="blog-section">
        <div className="main-blog-card">
          <img src="images/side-blog-1.jpg" alt="Main Blog" />
          <div className="blog-tag">Exercise</div>
          <h2 className="blog-card-title">
            Conquering Consistency: How to Make Exercise a Habit You Love
          </h2>
          <div className="blog-meta">
            <span>Jun 28, 2024</span> | <span>Benjamin</span>
          </div>
        </div>

        <div className="side-blog-cards">
          <div className="blog-card">
            <img src="images/side-blog-2.jpg" alt="Blog 1" />
            <div className="blog-tag">Weight Loss</div>
            <h3 className="blog-card-title">
              Weight Loss: A Sustainable Approach for a Healthier You
            </h3>
            <div className="blog-meta">
              <span>Jun 26, 2024</span> | <span>Jessica</span>
            </div>
          </div>

          <div className="blog-card">
            <img src="images/side-blog-3.jpg" alt="Blog 2" />
            <div className="blog-tag">Nutrition</div>
            <h3 className="blog-card-title">
              Fuel Your Fitness: A Guide to Nutrition for Peak Performance
            </h3>
            <div className="blog-meta">
              <span>Jun 23, 2024</span> | <span>David</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
