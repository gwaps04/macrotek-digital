import React from 'react';

const Footer = () => {
  return (
    // 'bg-primary' = Blue Background
    // 'text-white' = White Text
    // 'py-4' = Padding Top and Bottom
    <footer className="bg-primary text-white py-4 mt-auto">
      <div className="container">
        
        {/* ROW 1: The Verse and The Tagline */}
        <div className="row align-items-center mb-3">
          
          {/* UPPER LEFT: 1 Cor 10:31 */}
          <div className="col-md-6 text-center text-md-start">
            <h5 className="fw-bold mb-0">Top News</h5>
          </div>

          {/* RIGHT SIDE: Tagline 
              (We place this on the right to balance the design) 
          */}
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 fst-italic opacity-75">
              "Together We move Forward."
            </p>
          </div>
        </div>

        {/* VISUAL SEPARATOR (Thin white line) */}
        <hr className="border-light opacity-50" />

        {/* ROW 2: CENTER - Developer Credit */}
        <div className="row">
          <div className="col-12 text-center">
            <small className="mb-0">
              Developed By: <strong>Macrotek Digital Solutions</strong>
            </small>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;