import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection1 = () => {
  return (
    <section 
      style={{ 
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        paddingTop: '140px', 
        paddingBottom: '80px',
        color: 'white',
        overflowX: 'hidden' // PRECAUTION: Prevents scrollbar if image nudges too far
      }}
    >
      <div className="container">
        
        <div className="row align-items-center g-5">
          
          {/* --- LEFT COLUMN: TEXT (5 Columns) --- */}
          <div className="col-lg-5 text-center text-lg-start">
            
            <h1 className="display-4 fw-bold text-white mb-4">
              Imagine hiring a Salesman that never sleeps... 
              <span style={{ color: '#ffc107' }} className="d-block mt-2">
                for less than ₱14/day.
              </span>
            </h1>
            
            <p className="lead text-white-50 mb-4">
              Hindi magic, kundi strategy. Stop relying solely on referrals. 
              Macrotek Digital Solutions builds you a professional storefront 
              that works harder than you do—without the agency price tag.
            </p>
            
            <Link 
              to="/pricing" 
              className="btn btn-lg rounded-pill shadow-lg text-white px-5 py-3"
              style={{
                background: 'linear-gradient(135deg, #fd7e14 0%, #ffc107 100%)',
                border: 'none',
                fontWeight: '600'
              }}
            >
              Learn More
            </Link>

          </div>

          {/* --- RIGHT COLUMN: IMAGE (6 Columns + 1 Offset) --- 
              1. 'offset-lg-1': Adds an empty column of space between text and image.
              2. 'col-lg-6': Reduces image container slightly to fit the offset.
              3. 'text-lg-end': ALIGNMENT KEY - Pushes image to the far right of the box.
              4. 'text-center': Keeps it centered on mobile.
          */}
          <div className="col-lg-6 offset-lg-1 text-center text-lg-end">
            <img 
              src="/hero-1.png" 
              alt="Macrotek Digital Solutions Professional Storefront" 
              className="img-fluid rounded-3 shadow-lg"
              loading="lazy"
              style={{ 
                transition: 'transform 0.3s',
                // OPTIONAL: If you want it to nudge even closer to the screen edge,
                // un-comment the line below. (Positive moves right).
                // transform: 'translateX(20px)' 
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection1;