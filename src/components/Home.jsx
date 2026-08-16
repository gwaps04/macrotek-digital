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

      {/* --- START: Sticky Floating Button (Tailwind Engineered) --- */}
      <a 
        href="https://macrotek-demos.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        /* 
          Z-Index is set to z-50 to hover above all other content.
          The background gradient, border (ring), and shadow bloom are all compiled natively. 
        */
        className="shake-on-hover fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 text-white font-bold shadow-2xl shadow-orange-500/40 ring-2 ring-white transition-all duration-300 hover:scale-105"
      >
        {/* Replaced Bootstrap Icon with a native SVG */}
        <svg className="w-5 h-5 drop-shadow-sm" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
        <span className="drop-shadow-sm tracking-wide">View Demo</span>
      </a>
      {/* --- END: Sticky Floating Button --- */}
    </>
  );
};

export default Home;