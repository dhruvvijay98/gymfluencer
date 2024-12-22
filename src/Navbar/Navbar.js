import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
 return (
    <div className="navbar-container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="nav-link" to="/"><h3 style={{font : "icon"}}>GymFluencer</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/ourservices" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OurServices
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/ourservices">Workout Plan</Link></li>
            <li><Link className="dropdown-item" to="/ourservices">Diet Plan</Link></li>
            
           
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/benefits">Benefits</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>

        
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="btn btn-danger" to="/">Join us Now</button>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>

 );   
}

export default Navbar;