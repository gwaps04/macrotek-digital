import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  // SVG Checkmark optimized for precise vertical alignment with text
  const CheckIcon = ({ dark = false }) => (
    <svg className={`w-5 h-5 shrink-0 mt-0.5 ${dark ? 'text-indigo-400' : 'text-indigo-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <section className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
        <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-indigo-100/50 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-indigo-100/80 px-4 py-1.5 text-sm font-bold text-indigo-700 tracking-wide ring-1 ring-inset ring-indigo-600/20">
              Investment
            </span>
          </div>
          <h1 className="brand-font text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Strategic Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Solutions.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Empowering modern enterprises with scalable AI, tailored software, and intelligent automation.
          </p>
        </div>

        {/* 
          PRICING GRID 
          Restricted to max-w-5xl to prevent awkward stretching of just 2 cards on 4K monitors.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">

          {/* 1. JUMPSTART STOREFRONT (Flagship Dark Card) */}
          <div className="flex flex-col bg-slate-900 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-slate-900/20 ring-1 ring-slate-800 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/20 relative overflow-hidden">
            
            {/* Subtle internal glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex-grow flex flex-col">
              <div className="mb-8 border-b border-slate-700 pb-8">
                <h3 className="brand-font text-2xl font-bold text-white mb-4">Jumpstart Storefront</h3>
                
                {/* Dual Pricing Display */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">₱75,000</span>
                    <span className="text-lg text-slate-400 font-medium">/ Lifetime</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-slate-400 font-medium">or</span>
                    <span className="text-2xl font-bold text-white tracking-tight">₱1,500</span>
                    <span className="text-sm text-slate-400 font-medium">/ Month Subscription</span>
                  </div>
                </div>
              </div>
              
              {/* Features List */}
              <ul className="flex-grow space-y-4 text-slate-300 mb-10">
                <li className="flex items-start gap-3"><CheckIcon dark /> <span><strong>Domain:</strong> Own .com address</span></li>
                <li className="flex items-start gap-3"><CheckIcon dark /> <span><strong>Custom Design:</strong> No generic templates</span></li>
                <li className="flex items-start gap-3"><CheckIcon dark /> <span><strong>SSL Certified:</strong> Encrypted & Secure</span></li>
                <li className="flex items-start gap-3"><CheckIcon dark /> <span><strong>Support:</strong> Technical upkeep included</span></li>
                <li className="flex items-start gap-3"><CheckIcon dark /> <span><strong>Mobile UX:</strong> Responsive Design</span></li>
                <li className="flex items-start gap-3"><CheckIcon dark /> <span>Content Management System</span></li>
                <li className="flex items-start gap-3"><CheckIcon dark /> <span><strong>Interactive:</strong> Appointment or Enrollment Page Feature</span></li>
                <li className="flex items-start gap-3"><CheckIcon dark /> <span>Lead PreQualification Feature</span></li>
                <li className="flex items-start gap-3"><CheckIcon dark /> <span>Updates & Support included</span></li>
                <li className="flex items-start gap-3"><CheckIcon dark /> <span>Inquiries & Bookings automation</span></li>
                <li className="flex items-start gap-3"><CheckIcon dark /> <span><strong>Sales Pipeline:</strong> Automated lead tracking</span></li>
              </ul>
              
              {/* Button */}
              <Link to="/contact" className="w-full inline-flex justify-center items-center rounded-full bg-indigo-600 px-6 py-4 text-base font-bold text-white shadow-lg hover:bg-indigo-500 transition-colors duration-300 mt-auto">
                Get Started
              </Link>
            </div>
          </div>

          {/* 2. ENTERPRISE SYSTEMS (Light Consultative Card) */}
          <div className="flex flex-col bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/50">
            <div className="flex-grow flex flex-col">
              <div className="mb-8 border-b border-slate-100 pb-8">
                <h3 className="brand-font text-2xl font-bold text-slate-900 mb-4">Enterprise Systems</h3>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Custom</span>
                  <span className="text-lg text-slate-500 font-medium">/ Scope</span>
                </div>
                <p className="text-slate-500 mt-3 font-medium">Digitize your workflow and eliminate operational bottlenecks.</p>
              </div>
              
              {/* Features List */}
              <ul className="flex-grow space-y-4 text-slate-600 mb-10">
                <li className="flex items-start gap-3"><CheckIcon /> <span><strong>Business Process:</strong> Custom automation solutions</span></li>
                <li className="flex items-start gap-3"><CheckIcon /> <span><strong>Paperless Office:</strong> Digital ecosystems</span></li>
                <li className="flex items-start gap-3"><CheckIcon /> <span><strong>ERP Solutions:</strong> End-to-End management</span></li>
                <li className="flex items-start gap-3"><CheckIcon /> <span><strong>Inventory:</strong> Real-time supply chain tracking</span></li>
                <li className="flex items-start gap-3"><CheckIcon /> <span><strong>Financial:</strong> Digital bookkeeping & Tax compliance</span></li>
                <li className="flex items-start gap-3"><CheckIcon /> <span><strong>Efficiency:</strong> Integrated workflow software</span></li>
              </ul>
              
              {/* Button */}
              <Link to="/contact" className="w-full inline-flex justify-center items-center rounded-full bg-slate-900 px-6 py-4 text-base font-bold text-white shadow-lg hover:bg-indigo-600 transition-colors duration-300 mt-auto">
                Schedule Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;