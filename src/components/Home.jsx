import React from 'react';
import Hero from './Hero';
import Clients from './Clients';
import WhatWeDo from './WhatWeDo';
import VideoSection from './VideoSection';
import Industries from './Industries';
import Gallery from './Gallery';
import ServiceTags from './ServiceTags';
import WhyTrust from './WhyTrust';

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <WhatWeDo />
      <VideoSection />
      <Industries />
      <Gallery />
      <ServiceTags />
      <WhyTrust />

      {/* --- START: Sticky Floating Button (Orange/Gold Gradient + Shake) --- */}
      <a 
        href="https://macrotek-demos.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        /* The 'shake-on-hover' class handles the animation defined in index.css */
        className="shake-on-hover btn position-fixed bottom-0 end-0 m-4 rounded-pill shadow-lg d-flex align-items-center gap-2 text-white"
        style={{ 
          zIndex: 1050,
          /* NEW COLOR: Orange (#fd7e14) to Yellow (#ffc107). 
             This stands out against blue/white themes while looking "inviting" instead of "dangerous".
          */
          background: 'linear-gradient(135deg, #fd7e14 0%, #ffc107 100%)', 
          border: '2px solid #fff', /* White border helps it pop off the background image */
          padding: '12px 25px', 
          fontSize: '1.1rem',
          /* Text shadow ensures "View Demo" is readable even on the lighter yellow part */
          textShadow: '0px 1px 2px rgba(0,0,0,0.3)'
        }}
      >
        <i className="bi bi-laptop-fill"></i> 
        <span className="fw-bold">View Demo</span>
      </a>
      {/* --- END: Sticky Floating Button --- */}
    </>
  );
};

export default Home;