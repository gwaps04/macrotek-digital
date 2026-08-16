import React from 'react';

const Footer = () => {
  return (
    /* 
      'mt-auto' forces the footer to the bottom of the screen if the page content is short.
      'bg-slate-900' provides absolute contrast to the white/gray page above it.
    */
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ROW 1: Brand & Tagline 
            flex-col on mobile, flex-row on md+ screens to guarantee perfect aspect-ratio flow.
        */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          
          {/* UPPER LEFT: Brand Identity */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h5 className="brand-font text-2xl font-bold text-white tracking-tight mb-3">
              Macrotek Digital Solutions
            </h5>
            
            {/* Re-engineered the "Top News" reference into a premium badge */}
            <span className="inline-flex items-center text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full ring-1 ring-inset ring-indigo-500/20 uppercase tracking-widest">
              Built on Principles
            </span>
          </div>

          {/* RIGHT SIDE: Tagline */}
          <div className="text-center md:text-right">
            <p className="text-xl font-serif italic text-slate-400">
              "Together We move Forward."
            </p>
          </div>
        </div>

        {/* VISUAL SEPARATOR 
            Using a gradient line instead of a solid border creates a premium, fading edge effect.
        */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8 opacity-50"></div>

        {/* ROW 2: CENTER - Developer Credit */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="text-center md:text-right">
            Developed By: <strong className="text-slate-300">Macrotek Digital Solutions</strong>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;