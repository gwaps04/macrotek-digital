import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-28 bg-slate-900 overflow-hidden">
      
      {/* 
        BACKGROUND DECORATION 
        A subtle indigo glow in the center of the dark background mimics screen illumination.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
              Digital Transformation
            </span>
          </div>

          {/* Headline */}
          <h2 className="brand-font text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            Why Digital Transformation Matters
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
            Discover how modern technology acts as the backbone for security, efficiency, and growth in today's fast-paced business landscape.
          </p>
        </div>

        {/* 
          VIDEO WRAPPER 
          Constrained to max-w-5xl so it doesn't blow out on massive monitors.
        */}
        <div className="max-w-5xl mx-auto">
          
          {/* 
            RESPONSIVE RATIO CONTAINER
            'aspect-video' exactly calculates a 16:9 ratio. 
            This forces the container to reserve the vertical space immediately, preventing Cumulative Layout Shift (CLS).
          */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-800 shadow-2xl shadow-slate-900/50 ring-1 ring-white/10 transform transition-all duration-700 hover:-translate-y-2 hover:shadow-indigo-500/20">
            
            {/* 
              IFRAME
              - Converted 'watch?v=' to 'embed/' to bypass iframe security blocks.
              - Converted '&t=40s' to '?start=40' to respect the YouTube Embed API.
              - Added '&rel=0' to prevent YouTube from showing competitors' videos at the end.
            */}
            <iframe 
              src="https://www.youtube.com/embed/iXE766vs_3w?start=40&rel=0" 
              title="The Importance of Modern Technology in Business" 
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;