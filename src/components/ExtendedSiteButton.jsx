// FILE: src/components/ExtendedSiteButton.jsx
import React from 'react';

const EXTENDED_SITE_URL = 'https://macrotek-official-live-server.vercel.app/';

const ExtendedSiteButton = () => {
  return (
    <a
      href={EXTENDED_SITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit our extended site to view more information and projects"
      className="group inline-flex items-center gap-3 min-h-[48px] max-w-[calc(100vw-2rem)] rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 pl-4 pr-5 py-2.5 text-white shadow-2xl shadow-indigo-950/30 ring-2 ring-white/90 hover:from-indigo-500 hover:to-cyan-500 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-all duration-300"
    >
      {/* Live Portal Indicator & Globe Icon */}
      <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/15 shrink-0">
        <svg
          className="w-4 h-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-indigo-600" />
      </span>

      {/* Label & Responsive Subtitle */}
      <span className="flex flex-col text-left leading-tight">
        <span className="text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
          Explore Extended Site
        </span>
        <span className="hidden sm:block text-[11px] font-medium text-indigo-100/90 whitespace-nowrap">
          More Info &amp; Projects
        </span>
      </span>

      {/* External Link Arrow */}
      <svg
        className="w-4 h-4 text-white/90 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
  );
};

export default ExtendedSiteButton;