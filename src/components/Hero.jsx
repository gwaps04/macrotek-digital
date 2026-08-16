import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    /* 
      1. HERO WRAPPER 
      We use min-h-[calc(100vh-5rem)] to make the hero take up the entire screen minus the 80px navbar.
      This guarantees a panoramic, cinematic feel on every device.
    */
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* 
        2. BACKGROUND IMAGE LAYER
        Uses object-cover so the image dynamically fills the entire screen without distortion. 
      */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png"
          alt="Macrotek Digital Solutions Background"
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 
        3. CONTRAST DEFENSE OVERLAY (CRITICAL)
        This gradient goes from 95% dark slate on the left to 20% on the right. 
        It guarantees the white text is readable regardless of what hero.png looks like.
      */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/20 md:to-transparent"></div>

      {/* 4. CONTENT CONTAINER */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        
        {/* TEXT BLOCK (Restricted to max-w-2xl so it stays safely on the left side) */}
        <div className="flex flex-col justify-center text-left max-w-2xl">
          
          {/* Badge - Upgraded to dark-mode glassmorphism */}
          <div className="mb-6 flex justify-start">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-indigo-300 ring-1 ring-inset ring-white/20 shadow-sm">
              Enterprise Grade Engineering
            </span>
          </div>

          {/* Title - Inverted to White for dark overlay */}
          <h1 className="brand-font text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
            Scalable Solutions for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Modern Enterprise.</span>
          </h1>

          {/* Subtitle - Using slate-300 for optimal reading contrast */}
          <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-10 drop-shadow-md">
            Macrotek Digital Solutions delivers high-performance web applications, custom software, and digital automation engineered to accelerate your business growth.
          </p>

          {/* Call To Action Cluster */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            
            {/* Primary Button */}
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 transition-all duration-300 ease-out"
            >
              Get a Free Consultation
            </Link>
            
            {/* Secondary Button - Glassmorphism lets the hero.png peek through */}
            <Link 
              to="/enterprise-web-apps" 
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md px-8 py-3.5 text-base font-semibold text-white ring-1 ring-inset ring-white/30 hover:ring-white/50 hover:bg-white/20 transition-all duration-300 ease-out shadow-sm"
            >
              View Our Services
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;