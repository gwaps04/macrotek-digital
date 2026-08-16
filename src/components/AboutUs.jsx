import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-slate-50 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* THE CONTENT CARD */}
        <div className="bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 rounded-3xl p-8 sm:p-12 lg:p-16">
          
          {/* TITLE SECTION */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-indigo-100/80 px-4 py-1.5 text-sm font-bold text-indigo-700 tracking-wide ring-1 ring-inset ring-indigo-600/20 uppercase mb-4">
              Who We Are
            </span>
            <h1 className="brand-font text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              About Macrotek.
            </h1>
            <div className="mx-auto w-16 h-1.5 rounded-full bg-indigo-600"></div>
          </div>

          {/* 
            MAIN BODY TEXT 
            prose class uses Tailwind Typography mathematics for perfect line heights and margins.
          */}
          <div className="max-w-prose mx-auto text-lg text-slate-600 leading-relaxed font-medium space-y-6">
            
            <p>
              Macrotek Digital Solutions is a forward-thinking Web Application and Digital Solutions provider dedicated to helping businesses thrive in the modern digital era. From startups and small businesses to large enterprises, we empower organizations with intelligent technology that improves productivity, streamlines operations, and enhances customer experience.
            </p>

            <p>
              As a new player in the industry, we combine innovation, practical engineering, and strategic design to deliver solutions that are powerful, secure, and scalable. Our services include custom system development, landing page and web solutions, workflow automation, and end-to-end digital transformation aligned with real business needs.
            </p>

            {/* PULL QUOTE / HIGHLIGHT */}
            <blockquote className="my-10 p-8 rounded-2xl bg-indigo-50 border-l-4 border-indigo-600 relative">
              <svg className="absolute top-4 left-4 w-8 h-8 text-indigo-200 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative z-10 mb-0 font-serif text-xl italic text-slate-800 leading-relaxed text-center">
                "At Macrotek, we believe that technology should work for people—not the other way around. That’s why every system we build is tailored to the unique goals of each client."
              </p>
            </blockquote>

            <p>
              We are committed to excellence, transparency, and continuous improvement. With a rapidly evolving digital landscape, we stay ahead of the curve by adopting modern frameworks, AI-driven capabilities, and industry best practices that enable businesses to stay competitive.
            </p>

            <p>
              Macrotek Digital Solutions exists to make modernization accessible—and to help organizations reach their fullest potential through the power of smart technology.
            </p>

          </div>

          {/* CALL TO ACTION FOOTER */}
          <div className="text-center mt-12 pt-10 border-t border-slate-100">
            <p className="text-lg font-bold text-slate-900 mb-6">Ready to work with a partner who understands your vision?</p>
            <Link to="/contact" className="inline-flex justify-center items-center rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 transition-colors duration-300">
              Contact Us Today
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutUs;