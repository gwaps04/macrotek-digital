import React from 'react';
import { Link } from 'react-router-dom';

const EnterpriseWebApps = () => {
  
  // Bespoke Check Icon for Feature Lists
  const FeatureCheck = () => (
    <div className="flex-shrink-0 mt-1">
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-slate-50 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-indigo-100/80 px-4 py-1.5 text-sm font-bold text-indigo-700 tracking-wide ring-1 ring-inset ring-indigo-600/20 uppercase">
              Core Service
            </span>
          </div>
          <h1 className="brand-font text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Enterprise Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Applications.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Dynamic, database-driven systems (EWA) engineered for scalable, end-to-end business operations.
          </p>
        </div>

        {/* MAIN SPLIT CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* 
            LEFT COLUMN (Text Flow) 
            order-2 on mobile (below GIF), order-1 on desktop (left of GIF)
          */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col gap-12">
            
            {/* INTRO BLOCK */}
            <div>
              <h3 className="brand-font text-2xl font-bold text-slate-900 mb-4">Power Your Business with Dynamic Systems</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                For growing companies and large-scale organizations that need more than just an online presence, our Enterprise Web Application package delivers a fully dynamic, database-driven system capable of supporting end-to-end business operations.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                This tier is built for businesses that want automation, scalability, efficiency, and real-time control over their processes—from sales and customer management to logistics, HR, finance, and beyond.
              </p>
              
              {/* Highlight Callout */}
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl">
                <p className="text-indigo-900 font-medium leading-relaxed mb-0">
                  With Macrotek Digital Solutions, your enterprise system becomes a powerful digital backbone that streamlines work, reduces manual effort, improves decision-making, and elevates customer experience.
                </p>
              </div>
            </div>

            {/* WHAT YOU GET (2-Column Feature Grid) */}
            <div>
              <h4 className="brand-font text-2xl font-bold text-slate-900 mb-6">What You Get in the Enterprise Tier</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                
                <div className="flex gap-3">
                  <FeatureCheck />
                  <div>
                    <span className="block font-bold text-slate-900">Custom Dynamic System</span>
                    <span className="text-sm text-slate-600 mt-1 block">Built from the ground up to match your exact workflow and business rules.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureCheck />
                  <div>
                    <span className="block font-bold text-slate-900">Database-Driven Core</span>
                    <span className="text-sm text-slate-600 mt-1 block">Stores, processes, and retrieves complex data in real-time.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureCheck />
                  <div>
                    <span className="block font-bold text-slate-900">Role-Based Access Control</span>
                    <span className="text-sm text-slate-600 mt-1 block">Secure, hierarchical access across different departments and teams.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureCheck />
                  <div>
                    <span className="block font-bold text-slate-900">Workflow Automation</span>
                    <span className="text-sm text-slate-600 mt-1 block">Automates routine operational tasks to eliminate human error.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureCheck />
                  <div>
                    <span className="block font-bold text-slate-900">API Integration</span>
                    <span className="text-sm text-slate-600 mt-1 block">Connects seamlessly with CRMs, Payment Gateways, and ERPs.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FeatureCheck />
                  <div>
                    <span className="block font-bold text-slate-900">Live Dashboards</span>
                    <span className="text-sm text-slate-600 mt-1 block">Real-time reporting and metrics for data-driven decision making.</span>
                  </div>
                </div>
                
              </div>
            </div>

            {/* WHO IS THIS FOR (Dark Mode Qualification Box) */}
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-900/20 ring-1 ring-slate-800">
              <h5 className="brand-font text-2xl font-bold text-white mb-6">Who Is This For?</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400">✔</span> SMEs upgrading operations</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400">✔</span> Digital transformation needs</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400">✔</span> Multi-department orgs</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400">✔</span> Custom automation required</li>
                </ul>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400">✔</span> Legacy system modernization</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400">✔</span> Secure data portal needs</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400">✔</span> Government & private sectors</li>
                </ul>
              </div>
            </div>

            {/* CONCLUSION & CTA */}
            <div className="border-t border-slate-200 pt-8 mt-2">
              <h5 className="brand-font text-2xl font-bold text-slate-900 mb-4">In Simple Terms</h5>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Your business runs smoother, faster, and smarter—with a digital system that works the way your organization works, not the other way around. From customer management to internal operations, our Enterprise Web Applications are the digital engine behind your ongoing growth.
              </p>
              <Link to="/contact" className="inline-flex justify-center items-center rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 transition-colors duration-300">
                Discuss Your Enterprise Needs
              </Link>
            </div>

          </div>

          {/* 
            RIGHT COLUMN (Sticky Visual)
            order-1 on mobile (Appears at the top), order-2 on desktop.
            Sticky positioning ensures the GIF stays in the viewport as the user reads the left column.
          */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32">
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 ring-1 ring-slate-200 bg-slate-100 transform transition-transform duration-700 hover:-translate-y-2">
              
              {/* Glassmorphic Browser Top Bar Mockup */}
              <div className="absolute top-0 left-0 w-full h-10 bg-slate-900/5 backdrop-blur-sm border-b border-slate-900/10 flex items-center px-4 gap-2 z-10 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              </div>

              <img 
                src="/thumbnails/ewa-gif-section.gif" 
                alt="Enterprise Application Dashboard Animation" 
                className="absolute inset-0 w-full h-full object-cover pt-10"
                loading="eager"
              />
            </div>
            
            {/* Caption/Hint */}
            <p className="text-center text-sm text-slate-500 mt-6 font-medium">
              Live preview of an active enterprise dashboard environment.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EnterpriseWebApps;