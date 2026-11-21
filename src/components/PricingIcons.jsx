// FILE: src/components/PricingIcons.jsx
import React from 'react';

// BRONZE: Minimalistic Business Briefcase (Commercial Foundation)
export const BronzePresenceIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="7.5" width="18" height="11.5" rx="2.5" />
    <path d="M8.5 7.5V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5v2" />
    <path d="M3 12.5h18" />
    <circle cx="12" cy="12.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

// SILVER: Minimalistic Business Growth Chart (Scaling & Operations)
export const SilverSystemsIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3.5" width="18" height="17" rx="3" />
    <path d="M7.5 16.5v-3" />
    <path d="M12 16.5v-5.5" />
    <path d="M16.5 16.5v-8" />
    <path d="M7.5 10.5L11.5 8l5-2" />
    <path d="M14.5 6h2v2" />
  </svg>
);

// GOLD: Minimalistic Crowned Corporate Tower (Executive Enterprise)
export const GoldEnterpriseIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7.5 7.5L6.5 4.5l3 1.75L12 3.75l2.5 2.5 3-1.75-1 3z" />
    <rect x="6" y="9.5" width="12" height="11" rx="1.5" />
    <path d="M9.5 12.5h1" />
    <path d="M13.5 12.5h1" />
    <path d="M9.5 15.5h1" />
    <path d="M13.5 15.5h1" />
    <path d="M10.5 20.5v-2.5h3v2.5" />
  </svg>
);

export const MinimalCheckIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);