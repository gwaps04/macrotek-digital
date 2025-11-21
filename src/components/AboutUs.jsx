import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-light min-vh-100 py-5 mt-5"> {/* Soft gray background for the whole page */}
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            
            {/* THE CONTENT CARD 
                shadow-sm: Very subtle shadow
                border-0: No harsh lines
            */}
            <div className="card shadow-sm border-0 rounded-3 p-4 p-md-5">
              
              {/* TITLE SECTION */}
              <div className="text-center mb-5">
                <h6 className="text-uppercase text-primary fw-bold tracking-wide mb-2">Who We Are</h6>
                <h1 className="fw-bold text-dark display-5">About Macrotek</h1>
                <div className="mx-auto mt-3" style={{ width: '60px', height: '4px', backgroundColor: '#0d6efd' }}></div>
              </div>

              {/* MAIN BODY TEXT 
                  text-muted: Softens the black to dark gray (easier on eyes)
                  lh-lg: Increases Line Height (spacing between lines) for readability
              */}
              <div className="text-muted lh-lg">
                
                <p className="mb-4 lead">
                  Macrotek Digital Solutions is a forward-thinking Web Application and Digital Solutions provider dedicated to helping businesses thrive in the modern digital era. From startups and small businesses to large enterprises, we empower organizations with intelligent technology that improves productivity, streamlines operations, and enhances customer experience.
                </p>

                <p className="mb-5">
                  As a new player in the industry, we combine innovation, practical engineering, and strategic design to deliver solutions that are powerful, secure, and scalable. Our services include custom system development, landing page and web solutions, workflow automation, and end-to-end digital transformation aligned with real business needs.
                </p>

                {/* PULL QUOTE / HIGHLIGHT */}
                <div className="bg-primary bg-opacity-10 p-4 rounded-3 border-start border-4 border-primary mb-5">
                  <p className="mb-0 fst-italic text-dark fw-medium">
                    "At Macrotek, we believe that technology should work for people—not the other way around. That’s why every system we build is tailored to the unique goals of each client."
                  </p>
                </div>

                <p className="mb-4">
                  We are committed to excellence, transparency, and continuous improvement. With a rapidly evolving digital landscape, we stay ahead of the curve by adopting modern frameworks, AI-driven capabilities, and industry best practices that enable businesses to stay competitive.
                </p>

                <p className="mb-0">
                  Macrotek Digital Solutions exists to make modernization accessible—and to help organizations reach their fullest potential through the power of smart technology.
                </p>

              </div>

              {/* CALL TO ACTION FOOTER */}
              <div className="text-center mt-5 pt-4 border-top">
                <p className="mb-3">Ready to work with a partner who understands your vision?</p>
                <Link to="/contact" className="btn btn-primary px-4 py-2 rounded-pill">
                  Contact Us Today
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;