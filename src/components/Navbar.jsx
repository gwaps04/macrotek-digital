import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid px-4 px-lg-5">
        
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
            
            {/* 1. ENTERPRISE WEB APPLICATIONS (Now a primary focus) */}
            <li className="nav-item">
             <Link className="nav-link" to="/enterprise-web-apps">Enterprise Web Apps</Link>
            </li>

            {/* 2. PRICING */}
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            {/* 3. PRODUCTS AND SERVICES */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Products & Services
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item disabled" href="#">Softwares (Coming Soon)</a></li>
                <li><a className="dropdown-item disabled" href="#">Cyber Security (Coming Soon)</a></li>
                <li><a className="dropdown-item disabled" href="#">Digital Products (Coming Soon)</a></li>
              </ul>
            </li>

            {/* 4. CONTACT US */}
            <li className="nav-item">
             <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>

            {/* 5. RESOURCES */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Resources
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="/about-us">About Us</Link></li>
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