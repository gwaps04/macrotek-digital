import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* MAIN NAVBAR CONTAINER (3-COLUMN FLEX) */}
        <div className="flex h-20 items-center justify-between">
          
          {/* COLUMN 1: BRAND LOGO (Left) */}
          <div className="flex flex-1 justify-start items-center shrink-0">
            <Link to="/" className="group flex items-center min-h-[44px]">
              {/* 
                ASSET UPDATE: Now pointing to MacrotekLogo.png
                w-auto and object-contain ensure the new logo maintains its exact aspect ratio.
              */}
              <img 
                src="/MacrotekLogo.png" 
                alt="Macrotek Digital Solutions" 
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </Link>
          </div>

          {/* COLUMN 2: DESKTOP NAVIGATION (Center) */}
          <div className="hidden lg:flex shrink-0 justify-center">
            <ul className="flex items-center lg:space-x-6 xl:space-x-8">
              <li>
                <Link 
                  to="/enterprise-web-apps" 
                  className="text-slate-600 hover:text-indigo-600 transition-colors font-medium whitespace-nowrap"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  Enterprise Web Apps
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-slate-600 hover:text-indigo-600 transition-colors font-medium whitespace-nowrap"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  Pricing
                </Link>
              </li>

              {/* PRODUCTS & SERVICES DROPDOWN */}
              <li className="group relative">
                <button className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors font-medium min-h-[44px] whitespace-nowrap">
                  <span style={{ fontSize: 'var(--text-base)' }}>Products & Services</span>
                  <svg className="ml-1 h-4 w-4 text-slate-400 group-hover:text-indigo-500 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden w-56 pt-2 group-hover:block">
                  <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-lg shadow-slate-200/50">
                    <span className="block px-4 py-2 text-sm text-slate-400 cursor-not-allowed">Softwares (Coming Soon)</span>
                    <span className="block px-4 py-2 text-sm text-slate-400 cursor-not-allowed">Cyber Security (Coming Soon)</span>
                    <span className="block px-4 py-2 text-sm text-slate-400 cursor-not-allowed">Digital Products (Coming Soon)</span>
                  </div>
                </div>
              </li>

              <li>
                <Link 
                  to="/contact" 
                  className="text-slate-600 hover:text-indigo-600 transition-colors font-medium whitespace-nowrap"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  Contact Us
                </Link>
              </li>

              {/* RESOURCES DROPDOWN */}
              <li className="group relative">
                <button className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors font-medium min-h-[44px] whitespace-nowrap">
                  <span style={{ fontSize: 'var(--text-base)' }}>Resources</span>
                  <svg className="ml-1 h-4 w-4 text-slate-400 group-hover:text-indigo-500 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden w-40 pt-2 group-hover:block">
                  <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-lg shadow-slate-200/50">
                    <Link to="/about-us" className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
                      About Us
                    </Link>
                    <Link to="/faqs" className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
                      FAQs
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CTA BUTTON & MOBILE TOGGLE (Right) */}
          <div className="flex flex-1 justify-end items-center gap-4">
            
            {/* Desktop Contact Button */}
            <div className="hidden lg:block shrink-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 transition-colors duration-200 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none min-h-[44px] min-w-[44px]"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE MENU (Controlled by React State) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl" id="mobile-menu">
          <div className="space-y-1 px-4 pb-6 pt-2">
            <Link 
              to="/enterprise-web-apps" 
              onClick={closeMobileMenu}
              className="block rounded-md px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-indigo-600"
            >
              Enterprise Web Apps
            </Link>
            <Link 
              to="/pricing" 
              onClick={closeMobileMenu}
              className="block rounded-md px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-indigo-600"
            >
              Pricing
            </Link>
            
            <div className="px-3 py-3">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Products & Services</p>
              <span className="block py-2 pl-4 text-base font-medium text-slate-400">Softwares (Soon)</span>
              <span className="block py-2 pl-4 text-base font-medium text-slate-400">Cyber Security (Soon)</span>
              <span className="block py-2 pl-4 text-base font-medium text-slate-400">Digital Products (Soon)</span>
            </div>

            <div className="px-3 py-3">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Resources</p>
              <Link to="/about-us" onClick={closeMobileMenu} className="block py-2 pl-4 text-base font-medium text-slate-600 hover:text-indigo-600">
                About Us
              </Link>
              <Link to="/faqs" onClick={closeMobileMenu} className="block py-2 pl-4 text-base font-medium text-slate-600 hover:text-indigo-600">
                FAQs
              </Link>
            </div>

            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className="block mt-4 rounded-md bg-slate-900 px-3 py-3 text-center text-base font-medium text-white hover:bg-indigo-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}