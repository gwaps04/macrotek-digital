import React from 'react';

const WhatWeDo = () => {
  return (
    <section className="py-5">
      <div className="container">
        
        {/* The Card Wrapper */}
        <div className="card shadow border-0 rounded-3">
          <div className="card-body p-4 p-md-5 text-center">
            
            {/* Section Label */}
            <div className="mb-3">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill text-uppercase">
                What We Do
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="fw-bold mb-4">
              Innovative Digital Solutions for Real Business Growth
            </h2>

            {/* Content */}
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <p className="lead text-muted mb-4">
                  Macrotek Digital Solutions is a new but forward-driven player in Web Application Consultancy, committed to helping businesses of all sizes—from small startups to enterprise-level organizations—transform through modern automation and digital innovation.
                </p>

                <p className="text-muted">
                  We deliver practical, customized solutions designed to solve immediate challenges while building a strong foundation for long-term success. Whether it’s workflow automation, customer experience enhancement, or complete business system development, we focus on creating digital tools that streamline operations, increase productivity, and support sustainable growth across all levels of your organization.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;