import React from 'react';

const Clients = () => {
  return (
    // 'py-5' adds vertical padding (top/bottom) to separate it from the slider
    // 'bg-light' gives it a subtle background color distinction
    <section className="py-5 bg-light overflow-hidden">
      <div className="container">
        
        {/* The Section Title */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Our Clients</h2>
          <div className="text-muted">A commitment to Innovation</div>
        </div>

        {/* The Marquee Container */}
        <div className="position-relative w-100">
          <div className="client-marquee d-flex align-items-center">
            
            {/* CLIENT 1 */}
            <h4 className="text-secondary fw-bold mx-4">
              Unionskills International - Bicol Branch
            </h4>

            {/* Separator (Optional, purely visual) */}
            <span className="text-muted">•</span>

            {/* CLIENT 2 */}
            <h4 className="text-secondary fw-bold mx-4">
              Accelerated Review Center
            </h4>

            {/* Separator */}
            <span className="text-muted">•</span>

            {/* CLIENT 3 */}
            <h4 className="text-secondary fw-bold mx-4">
              Go Green Solar
            </h4>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;