// FILE: src/components/MobileNavMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileNavMenu({ isOpen, onClose, bookingUrl }) {
  if (!isOpen) return null;

  return (
    <div
      className="lg:hidden bg-white border-t border-slate-100 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto"
      id="mobile-menu"
    >
      <div className="space-y-1 px-4 pb-6 pt-3">
        <Link
          to="/enterprise-web-apps"
          onClick={onClose}
          className="flex items-center min-h-[44px] rounded-md px-3 py-2.5 text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
        >
          Enterprise Web Apps
        </Link>
        <Link
          to="/pricing"
          onClick={onClose}
          className="flex items-center min-h-[44px] rounded-md px-3 py-2.5 text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
        >
          Pricing
        </Link>

        <div className="px-3 pt-3 pb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            Resources
          </p>
          <Link
            to="/about-us"
            onClick={onClose}
            className="flex items-center min-h-[44px] pl-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/faqs"
            onClick={onClose}
            className="flex items-center min-h-[44px] pl-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
          >
            FAQs
          </Link>
        </div>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="flex items-center justify-center gap-2 min-h-[48px] mt-4 rounded-full bg-slate-900 px-4 py-3 text-center text-base font-semibold text-white hover:bg-indigo-600 transition-colors"
        >
          <span>Get your Free Consultation</span>
          <svg
            className="w-4 h-4 opacity-80 shrink-0"
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
    </div>
  );
}