import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="container py-5 mt-5">
      
      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Our Pricing Plans</h1>
        <p className="lead text-muted">Transparent pricing for businesses of all sizes.</p>
      </div>

      {/* PRICING CARDS ROW */}
      <div className="row row-cols-1 row-cols-lg-3 g-4 align-items-start">

        {/* 1. BASIC STATIC WEBSITE */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm h-100">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Basic Static Package</h4>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <span className="badge bg-danger mb-2">30% OFF</span>
                <h1 className="card-title pricing-card-title">₱5,000</h1>
                <small className="text-muted text-decoration-line-through">Original: ₱8,000</small>
              </div>
              
              <ul className="list-unstyled mt-3 mb-4 text-start">
                <li className="mb-2">✔ <strong>Domain:</strong> Own .com address</li>
                <li className="mb-2">✔ <strong>Custom Design:</strong> No generic templates</li>
                <li className="mb-2">✔ <strong>SSL Certified:</strong> Encrypted/Secure</li>
                <li className="mb-2">✔ <strong>Support:</strong> Technical upkeep included</li>
                <li className="mb-2">✔ <strong>Mobile UX:</strong> Responsive Design</li>
              </ul>
              
              <div className="mt-auto">
                <Link to="/contact" className="w-100 btn btn-lg btn-outline-primary">Inquire Now</Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CONVERSION-FOCUSED */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow border-primary h-100">
            <div className="card-header py-3 text-white bg-primary border-primary">
              <h4 className="my-0 fw-normal">Conversion-Focused</h4>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <span className="badge bg-warning text-dark mb-2">POPULAR • 30% OFF</span>
                <h1 className="card-title pricing-card-title">₱10,000</h1>
                <small className="text-muted text-decoration-line-through">Original: ₱15,000</small>
              </div>

              <ul className="list-unstyled mt-3 mb-4 text-start">
                <li className="mb-2">✔ <strong>Domain:</strong> Unique address</li>
                <li className="mb-2">✔ <strong>Custom Design:</strong> Tailored for leads</li>
                <li className="mb-2">✔ <strong>SSL Certified:</strong> Fully Secured</li>
                <li className="mb-2">✔ <strong>Support:</strong> Updates included</li>
                <li className="mb-2">✔ <strong>Mobile UX:</strong> Smooth experience</li>
                <li className="mb-2 p-2 bg-light rounded border border-success">
                  <span className="text-success fw-bold">✔ Funnel Design:</span><br/>
                  Semi-Automation Lead System
                </li>
              </ul>

              <div className="mt-auto">
                <Link to="/contact" className="w-100 btn btn-lg btn-primary">Inquire Now</Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3. ENTERPRISE (EWA) - UPDATED STYLE */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm h-100 border-0">
            
            {/* UPDATED: Purple Header */}
            <div 
              className="card-header py-3 border-0" 
              style={{ backgroundColor: '#6f42c1', color: 'white' }}
            >
              <h4 className="my-0 fw-normal">Enterprise (EWA)</h4>
            </div>
            
            <div className="card-body bg-light">
              <div className="text-center mb-4">
                <h2 className="card-title pricing-card-title">Custom Pricing</h2>
                <small className="text-muted">Tailored to your scope</small>
              </div>

              <p className="text-muted mb-4">
                Enterprise solutions vary in size, complexity, and integration needs. Whether you need a lightweight system for one department or a full end-to-end business platform, we tailor a package for you.
              </p>
              
              <p className="fw-bold text-dark">Perfect for:</p>
              <ul className="list-unstyled text-start text-muted">
                <li>🏢 Multi-department Organizations</li>
                <li>⚙️ Complex Automations</li>
                <li>📊 Scalable Platforms</li>
              </ul>

              {/* UPDATED: Purple Button */}
              <div className="mt-auto">
                <Link 
                  to="/contact" 
                  className="w-100 btn btn-lg"
                  style={{ backgroundColor: '#6f42c1', color: 'white', borderColor: '#6f42c1' }}
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;