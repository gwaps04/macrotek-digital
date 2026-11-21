// FILE: src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNavMenu from './MobileNavMenu';

const BOOKING_URL = 'https://macrotek-official-live-server.vercel.app/book';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* COLUMN 1: BRAND LOGO */}
          <div className="flex flex-1 justify-start items-center shrink-0">
            <Link to="/" onClick={closeMobileMenu} className="group flex items-center min-h-[44px]">
              <img
                src="/MacrotekLogo.png"
                alt="Macrotek Digital Solutions"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </Link>
          </div>

          {/* COLUMN 2: DESKTOP NAVIGATION */}
          <div className="hidden lg:flex shrink-0 justify-center">
            <ul className="flex items-center lg:space-x-7 xl:space-x-10">
              <li>
                <Link
                  to="/enterprise-web-apps"
                  className="inline-flex items-center min-h-[44px] text-slate-600 hover:text-indigo-600 transition-colors font-medium whitespace-nowrap"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  Enterprise Web Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="inline-flex items-center min-h-[44px] text-slate-600 hover:text-indigo-600 transition-colors font-medium whitespace-nowrap"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  Pricing
                </Link>
              </li>

              {/* RESOURCES DROPDOWN */}
              <li className="group relative">
                <button
                  type="button"
                  className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors font-medium min-h-[44px] whitespace-nowrap"
                >
                  <span style={{ fontSize: 'var(--text-base)' }}>Resources</span>
                  <svg
                    className="ml-1 h-4 w-4 text-slate-400 group-hover:text-indigo-500 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden w-44 pt-2 group-hover:block">
                  <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-lg shadow-slate-200/50">
                    <Link
                      to="/about-us"
                      className="flex items-center min-h-[44px] rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/faqs"
                      className="flex items-center min-h-[44px] rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                    >
                      FAQs
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: EXTERNAL BOOKING CTA & MOBILE TOGGLE */}
          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="hidden lg:block shrink-0">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 min-h-[44px] rounded-full bg-slate-900 px-5 xl:px-6 py-2.5 text-xs xl:text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 transition-colors duration-200 whitespace-nowrap"
              >
                <span>Get your Free Consultation</span>
                <svg
                  className="w-3.5 h-3.5 opacity-80 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none min-h-[44px] min-w-[44px]"
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

      <MobileNavMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} bookingUrl={BOOKING_URL} />
    </nav>
  );
}