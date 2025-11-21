import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5 mt-5">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Contact Us</h1>
        <p className="lead text-muted">
          Ready to start your digital transformation? Send us a message.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          
          {/* CONTACT FORM CARD 
              - shadow: Adds depth
              - border-0: Removes the ugly default border
              - rounded-3: Smooth corners
              - overflow-hidden: Ensures the iframe corners match the card
          */}
          <div className="card shadow border-0 rounded-3 overflow-hidden bg-white">
            
            {/* Optional: Header inside the card */}
            <div className="card-header bg-primary text-white py-3 text-center">
              <h5 className="mb-0 fw-normal">Inquiry Form</h5>
            </div>

            <div className="card-body p-0">
              {/* GOOGLE FORM IFRAME
                  - w-100: Full width
                  - height: Tall enough to show the form without too much double-scrolling
                  - frameborder="0": Clean look
              */}
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSf0IOP8feu9x6jOVvqJprT05oFfwNpvLWtINdWU01rTN0NgSQ/viewform?embedded=true" 
                width="640" 
                height="1480" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                className="w-100"
                style={{ minHeight: '1000px' }} // Ensures it is tall enough on all screens
                title="Macrotek Contact Form"
              >
                Loading…
              </iframe>
            </div>

          </div>

          {/* Additional Contact Info (Optional but recommended) */}
          <div className="text-center mt-5">
            <p className="text-muted">
              Prefer email? Reach us directly at <a href="mailto:info@macrotekdigital.com" className="text-decoration-none fw-bold">info@macrotekdigital.com</a>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;