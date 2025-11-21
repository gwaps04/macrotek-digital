import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StaticWebDev = () => {
  // 1. Get the current 'hash' from the URL (e.g., #basic or #conversion)
  const { hash } = useLocation();

  // 2. The Scroll Logic
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="container py-5 mt-5">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Static Web Development Systems</h1>
        <p className="lead text-muted">Professional solutions to establish your digital identity.</p>
      </div>

      {/* SECTION 1: BASIC STATIC WEBSITE PACKAGE */}
      <section id="basic" className="card shadow border-0 rounded-3 mb-5 overflow-hidden">
        <div className="row g-0 align-items-center">
          
          {/* LEFT: Content */}
          <div className="col-lg-7 p-4 p-lg-5">
            <h3 className="fw-bold mb-3 text-primary">Basic Static Website Package</h3>
            <h5 className="text-muted mb-4">(Landing Pages)</h5>
            
            <p className="text-muted">
              A professional online presence starts with a strong foundation. Whether you are a freelancer, startup, or small business, having even a simple static website or landing page provides instant credibility, visibility, and accessibility—allowing clients to learn about who you are and what you offer anytime, anywhere.
            </p>

            <h6 className="fw-bold mt-4">A Basic Static Page enables you to:</h6>
            <ul className="list-unstyled text-muted mb-4">
              <li>✔ Establish an online identity</li>
              <li>✔ Showcase your skills, services, products, or portfolio</li>
              <li>✔ Make it easy for clients to find and contact you</li>
              <li>✔ Build trust with a clean, professional, and branded web presence</li>
            </ul>

            <h6 className="fw-bold">Includes:</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item border-0 ps-0"><strong className="text-dark">1. Domain:</strong> Your website gets its own .com address.</li>
              <li className="list-group-item border-0 ps-0"><strong className="text-dark">2. Custom Design:</strong> Professionally designed, no generic templates.</li>
              <li className="list-group-item border-0 ps-0"><strong className="text-dark">3. SSL Certified:</strong> Encrypted and secure browsing.</li>
              <li className="list-group-item border-0 ps-0"><strong className="text-dark">4. Support & Maintenance:</strong> We handle the technical upkeep.</li>
              <li className="list-group-item border-0 ps-0"><strong className="text-dark">5. Mobile UX Responsive:</strong> Looks great on all devices.</li>
            </ul>
          </div>

          {/* RIGHT: IMAGE 1 (swd-1.jpg) */}
          <div className="col-lg-5">
            <img 
              src="/thumbnails/swd-1.png" 
              alt="Basic Landing Page Design" 
              className="img-fluid w-100 h-100 object-fit-cover"
              style={{ minHeight: '400px' }}
            />
          </div>

        </div>
      </section>

      {/* SECTION 2: CONVERSION-FOCUSED STATIC WEBSITE */}
      <section id="conversion" className="card shadow border-0 rounded-3 overflow-hidden">
        <div className="row g-0 align-items-center">
          
          {/* LEFT: Content */}
          <div className="col-lg-7 p-4 p-lg-5">
            <h3 className="fw-bold mb-3 text-primary">Conversion-Focused Static Website</h3>
            
            <p className="text-muted">
              For businesses and freelancers who want their website to do more than just look good—our Conversion-Focused Static Website Package is designed to help turn visitors into leads, inquiries, or customers.
            </p>
            <p className="text-muted">
              From the name itself, “conversion-focused” means the design, structure, and content are built to guide visitors toward taking action—such as booking a call, requesting a quote, placing an order, or making contact.
            </p>

            <h6 className="fw-bold mt-4">This Package Includes:</h6>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item border-0 ps-0"><strong className="text-dark">1. Domain:</strong> Unique address for authority.</li>
              <li className="list-group-item border-0 ps-0"><strong className="text-dark">2. Custom Design:</strong> Tailored to attract your ideal audience.</li>
              <li className="list-group-item border-0 ps-0"><strong className="text-dark">3. SSL Certified:</strong> Fully secured and encrypted.</li>
              <li className="list-group-item border-0 ps-0"><strong className="text-dark">4. Support & Maintenance:</strong> Updates and upkeep included.</li>
              <li className="list-group-item border-0 ps-0"><strong className="text-dark">5. Mobile UX Responsive:</strong> Smooth experience on any device.</li>
              <li className="list-group-item border-0 ps-0 bg-light p-3 rounded mt-2">
                <strong className="text-primary">6. Semi-Automation Lead System:</strong><br />
                We integrate smart lead capture tools (powered by Google Forms and analytics) to help you track inquiries, collect leads, and measure performance—giving you real business insights.
              </li>
            </ul>
            
            <div className="alert alert-info border-0 shadow-sm">
              <strong>Takeaway:</strong> If you want your website to not only exist, but also <strong>work for you</strong>, this package is an excellent upgrade for meaningful online results.
            </div>
          </div>

          {/* RIGHT: IMAGE 2 (swd-2.jpg) */}
          <div className="col-lg-5">
            <img 
              src="/thumbnails/swd-2.png" 
              alt="Conversion Focused Website Design" 
              className="img-fluid w-100 h-100 object-fit-cover"
              style={{ minHeight: '400px' }}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default StaticWebDev;