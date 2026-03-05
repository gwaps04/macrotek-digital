import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="container py-5 mt-5">
      
      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary display-4">Strategic Business Solutions</h1>
        <p className="lead text-muted">Empowering 2026 Enterprises with AI and Automation.</p>
      </div>

      {/* PRICING CARDS ROW */}
      <div className="row row-cols-1 row-cols-lg-3 g-4 align-items-stretch">

        {/* 1. JUMPSTART STOREFRONT */}
        <div className="col">
          <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="py-4 text-center bg-dark text-white">
              <h4 className="fw-bold mb-0">Jumpstart Storefront</h4>
              <small className="opacity-75">One-Time Payment</small>
            </div>
            <div className="card-body d-flex flex-column p-4">
              <div className="text-center mb-4">
                <h1 className="card-title pricing-card-title fw-bold">₱5,000</h1>
                <p className="text-muted">Professional Online Presence</p>
              </div>
              
              <ul className="list-unstyled flex-grow-1 text-start">
                <li className="mb-3">✔ <strong>Domain:</strong> Own .com address</li>
                <li className="mb-3">✔ <strong>Custom Design:</strong> No generic templates</li>
                <li className="mb-3">✔ <strong>SSL Certified:</strong> Encrypted/Secure</li>
                <li className="mb-3">✔ <strong>Support:</strong> Technical upkeep included</li>
                <li className="mb-3">✔ <strong>Mobile UX:</strong> Responsive Design</li>
              </ul>
              
              <Link to="/contact" className="btn btn-outline-dark btn-lg rounded-pill mt-4">Get Started</Link>
            </div>
          </div>
        </div>

        {/* 2. SALES AND MARKETING AUTOMATION */}
        <div className="col">
          <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden" 
               style={{ transform: 'scale(1.05)', zIndex: 2 }}>
            <div className="py-4 text-center text-white" 
                 style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #003399 100%)' }}>
              <span className="badge bg-warning text-dark mb-2">MOST POPULAR</span>
              <h4 className="fw-bold mb-0">Sales & Marketing Automation</h4>
            </div>
            <div className="card-body d-flex flex-column p-4">
              <div className="text-center mb-3">
                <h2 className="fw-bold">Custom Pricing</h2>
                <p className="text-primary fw-bold">Stop chasing, start closing.</p>
              </div>

              <p className="small text-muted mb-4 text-center">
                We integrate AI to automate your sales funnel while you sleep.
              </p>

              <ul className="list-unstyled flex-grow-1 text-start small">
                <li className="mb-2">🚀 <strong>AI Systems:</strong> Inquiries & Bookings automation</li>
                <li className="mb-2">📈 <strong>Sales Pipeline:</strong> Automated lead tracking</li>
                <li className="mb-2">🤖 <strong>Funnel Automation:</strong> AI-Integrated systems</li>
                <li className="mb-2">📱 <strong>CRM:</strong> Custom Management Application</li>
                <li className="mb-2">🎨 <strong>Branding:</strong> Content & Branding management</li>
                <li className="mb-2">🔒 <strong>Secure:</strong> SSL Certified & Fully Secured</li>
                <li className="mb-2">🛠️ <strong>Maintenance:</strong> Updates & Support included</li>
              </ul>

              <Link to="/contact" className="btn btn-primary btn-lg rounded-pill mt-4 shadow">Claim Your Strategy</Link>
            </div>
          </div>
        </div>

        {/* 3. ENTERPRISE SYSTEMS */}
        <div className="col">
          <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="py-4 text-center text-white" 
                 style={{ background: '#6f42c1' }}>
              <h4 className="fw-bold mb-0">Enterprise Systems</h4>
              <small className="opacity-75">The Paperless Revolution</small>
            </div>
            
            <div className="card-body d-flex flex-column p-4 bg-light">
              <div className="text-center mb-3">
                <h2 className="fw-bold">Custom Scope</h2>
                <p className="text-muted">Operational Excellence</p>
              </div>

              <p className="small text-muted mb-4">
                Digitize your entire workflow and eliminate operational headaches.
              </p>
              
              <ul className="list-unstyled flex-grow-1 text-start small">
                <li className="mb-2">⚙️ <strong>Business Process:</strong> Custom automation solutions</li>
                <li className="mb-2">📄 <strong>Paperless Office:</strong> Digital ecosystems</li>
                <li className="mb-2">📊 <strong>ERP Solutions:</strong> End-to-End management</li>
                <li className="mb-2">📦 <strong>Inventory:</strong> Real-time supply chain tracking</li>
                <li className="mb-2">💰 <strong>Financial:</strong> Digital bookkeeping & Tax compliance</li>
                <li className="mb-2">⚡ <strong>Efficiency:</strong> Integrated workflow software</li>
              </ul>

              <Link 
                to="/contact" 
                className="btn btn-lg rounded-pill mt-4"
                style={{ backgroundColor: '#6f42c1', color: 'white' }}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;