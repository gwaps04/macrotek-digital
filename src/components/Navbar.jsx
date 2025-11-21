import React from 'react';
// 1. Import Link from React Router
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid px-4 px-lg-5">
        
        {/* Brand Logo - Change href="#" to to="/" */}
        <Link className="navbar-brand fw-bold" to="/">Macrotek Digital Solutions</Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            {/* A. Static Web Development System */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Static Web Dev
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                {/* LINK 1: Points to the ID 'basic' */}
                <li>
                    <Link className="dropdown-item" to="/static-web-dev#basic">Basic Landing Pages</Link>
                </li>
                {/* LINK 2: Points to the ID 'conversion' */}
                <li>
                    <Link className="dropdown-item" to="/static-web-dev#conversion">Conversion/Lead Focused</Link>
                </li>
              </ul>
            </li>

            {/* B. Enterprise Web Applications */}
            <li className="nav-item">
             <Link className="nav-link" to="/enterprise-web-apps">Enterprise Web Apps</Link>
            </li>

            {/* C. Pricing */}
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            {/* D. Products and Services */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Products & Services
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item disabled" href="#">Softwares (Coming Soon)</a></li>
                <li><a className="dropdown-item disabled" href="#">Cyber Security (Coming Soon)</a></li>
                <li><a className="dropdown-item disabled" href="#">Digital Products Section (Coming Soon)</a></li>
              </ul>
            </li>

            {/* E. Home Care Services */}
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Home Care (Coming Soon)</a>
            </li>

            {/* F. Contact Us */}
            <li className="nav-item">
             <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>

            {/* G. Resources */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Resources
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <Link className="dropdown-item" to="/about-us">About Us</Link>
               <li><Link className="dropdown-item" to="/faqs">FAQs</Link></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;