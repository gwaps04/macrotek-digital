import React from 'react';

const ServiceTags = () => {
  // The full list of data provided
  const services = [
    "Static Landing Pages",
    "Business Services Pages",
    "Freelance Online Profile",
    "Queuing Systems",
    "Inventory Management Systems",
    "Client Management Systems",
    "Online Appointment Systems",
    "Online Shopping Site",
    "Human Resource and Payroll Systems",
    "Book Keeping Systems",
    "Sales Monitoring Systems",
    "Point of Sale Systems",
    "Media Interactive Websites"
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-slate-50 overflow-hidden">
      
      {/* Subtle Background Pattern for Enterprise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-indigo-100/80 px-4 py-1.5 text-sm font-bold text-indigo-700 ring-1 ring-inset ring-indigo-600/20 tracking-wide">
              Technical Scope
            </span>
          </div>
          <h2 className="brand-font text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            System Capabilities & Architecture
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            From high-conversion landing pages to complex, interconnected enterprise management systems.
          </p>
        </div>

        {/* 
          THE CAPABILITY MATRIX (FLEX-WRAP CLOUD)
          - Used a semantic <ul> list for accessibility.
          - 'flex-wrap' ensures items flow naturally to the next line without breaking, regardless of screen width.
          - 'justify-center' keeps the matrix perfectly balanced in the middle of the screen.
        */}
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5 max-w-5xl mx-auto">
          
          {services.map((item, index) => (
            <li key={index} className="flex">
              {/* 
                CAPABILITY CHIP
                Contains an intrinsic hover state that transforms it from a quiet 
                informational tag into an active, premium UI element.
              */}
              <div 
                className="group flex items-center px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25 cursor-default"
              >
                {/* 
                  Technical Indicator Dot 
                  Adds a layer of precision/engineering aesthetic. 
                  Changes from Indigo to White when the parent container is hovered.
                */}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3 transition-colors duration-300 group-hover:bg-white"></span>
                
                <span className="text-sm sm:text-base font-semibold text-slate-700 transition-colors duration-300 group-hover:text-white">
                  {item}
                </span>
              </div>
            </li>
          ))}

        </ul>

      </div>
    </section>
  );
};

export default ServiceTags;