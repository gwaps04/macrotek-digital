import React from 'react';

const Gallery = () => {
  // Array of your 8 image file names
  const images = [
    "thumb1.png", "thumb2.png", "thumb3.png", "thumb4.png",
    "thumb5.png", "thumb6.png", "thumb7.png", "thumb8.png"
  ];

  return (
    <section className="py-16 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-bold text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
              Portfolio
            </span>
          </div>
          <h2 className="brand-font text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Our Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Projects.</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            A glimpse into our latest digital innovations, custom software builds, and enterprise web applications.
          </p>
        </div>

        {/* 
          THE GALLERY GRID 
          Uses CSS Grid to perfectly distribute columns across 4 breakpoints:
          Mobile: 1 col | Small: 2 cols | Large: 4 cols
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {images.map((img, index) => (
            /* 
              CARD WRAPPER
              'aspect-[4/3]' mathematically locks the container's height based on its width.
              This guarantees a perfectly uniform grid, preventing CLS and jagged rows.
            */
            <div 
              key={index} 
              className="relative group w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-900/5 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            >
              
              {/* 
                IMAGE LAYER
                'object-cover' acts like a smart crop. It ensures the image fills the 
                aspect-[4/3] frame perfectly without stretching or squishing, 
                regardless of the image's original native dimensions.
              */}
              <img 
                src={`/thumbnails/${img}`} 
                alt={`Macrotek Project Showcase ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* 
                INTERACTIVE OVERLAY
                Fades in on hover. Provides a premium, app-like interaction state 
                that invites the user to click.
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                
                {/* Overlay Text with staggered vertical slide-up animations */}
                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  View Project
                </span>
                <span className="text-indigo-300 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                  Case Study {index + 1}
                </span>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;