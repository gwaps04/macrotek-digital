import React from 'react';

const WhatWeDo = () => {
  return (
    <section className="relative w-full py-16 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EDITORIAL SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: ANCHOR HEADER (Takes up 5 columns on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            
            {/* Premium Badge */}
            <div className="mb-6 flex justify-start">
              <span className="inline-flex items-center rounded-full bg-indigo-100/80 px-4 py-1.5 text-sm font-bold text-indigo-700 tracking-wide ring-1 ring-inset ring-indigo-600/20">
                What We Do
              </span>
            </div>

            {/* Headline */}
            <h2 className="brand-font text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Innovative Digital Solutions for Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-700">Business Growth.</span>
            </h2>
            
            {/* Abstract/Lead Paragraph */}
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Macrotek Digital Solutions is a forward-driven player in Web Application Consultancy, committed to helping businesses of all sizes transform through modern automation and digital innovation.
            </p>
          </div>

          {/* RIGHT COLUMN: DETAILED CONTENT & FEATURE GRID (Takes up 7 columns on desktop) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100">
              
              {/* Core Philosophy Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10">
                We deliver practical, customized solutions designed to solve immediate challenges while building a strong foundation for long-term success. We focus on creating digital tools that streamline operations, increase productivity, and support sustainable growth across all levels of your organization.
              </p>

              {/* 
                SCANNABLE FEATURE GRID 
                Extracting the comma-separated list from the legacy text into high-value visual anchors.
              */}
              <div className="space-y-8">
                
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-500/20">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Workflow Automation</h3>
                    <p className="text-slate-600 leading-relaxed">Eliminate manual bottlenecks and accelerate daily operations with intelligent, automated business logic.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-500/20">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Experience Enhancement</h3>
                    <p className="text-slate-600 leading-relaxed">Build seamless, intuitive interfaces that delight your users and dramatically improve client retention.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-500/20">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Complete System Development</h3>
                    <p className="text-slate-600 leading-relaxed">Architect and deploy robust, full-stack enterprise web applications tailored entirely to your specific requirements.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;