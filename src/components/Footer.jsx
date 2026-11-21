// FILE: src/components/Footer.jsx
import React from 'react';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    handle: '@jasonxmacrotekdigitalsolutions',
    href: 'https://www.instagram.com/jasonxmacrotekdigitalsolutions/',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'Macrotek Digital Solutions',
    href: 'https://www.facebook.com/',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3V3z" />
      </svg>
    ),
  },
];

const CONTACT_CHANNELS = [
  {
    label: 'WhatsApp',
    value: '+63 956 335 5850',
    href: 'https://wa.me/639563355850',
    external: true,
    icon: (
      <svg className="w-5 h-5 shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 20l1.3-3.9A8.5 8.5 0 1 1 8 19.7L3 20z" />
        <path d="M9.5 9.5c.3 1.4 1.6 3.1 3.5 4.2.5.3 1.1.2 1.5-.2l.8-.8c.3-.3.8-.3 1.1 0l1.3 1.3c.3.3.3.8 0 1.1-.8.8-2 1.2-3.2.9-2.8-.7-5.6-3.4-6.4-6.2-.3-1.2.1-2.4.9-3.2.3-.3.8-.3 1.1 0l1.3 1.3c.3.3.3.8 0 1.1l-.8.8c-.4.4-.5 1-.2 1.5z" />
      </svg>
    ),
  },
  {
    label: 'Business Email',
    value: 'macrotekdigitalsolutions@gmail.com',
    href: 'mailto:macrotekdigitalsolutions@gmail.com',
    external: false,
    icon: (
      <svg className="w-5 h-5 shrink-0 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3 7.5l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'Personal Email',
    value: 'jeisonmillena@gmail.com',
    href: 'mailto:jeisonmillena@gmail.com',
    external: false,
    icon: (
      <svg className="w-5 h-5 shrink-0 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 19.5c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-14 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP GRID: Brand Identity, Direct Channels & Social Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-10">
          {/* COLUMN 1: Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h5 className="brand-font text-2xl font-bold text-white tracking-tight mb-3">
              Macrotek Digital Solutions
            </h5>

            <span className="inline-flex items-center text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full ring-1 ring-inset ring-indigo-500/20 uppercase tracking-widest mb-5">
              Built on Principles
            </span>

            <p className="text-xl font-serif italic text-slate-300">
              "Because we care"
            </p>
          </div>

          {/* COLUMN 2: Direct Contact Channels */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h6 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Direct Channels
            </h6>
            <ul className="w-full space-y-2">
              {CONTACT_CHANNELS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="group min-h-[44px] flex items-center justify-center lg:justify-start gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors"
                  >
                    {item.icon}
                    <div className="text-left">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </span>
                      <span className="block font-medium text-slate-200 group-hover:text-white break-all sm:break-normal">
                        {item.value}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Social Media */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            <h6 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Connect With Us
            </h6>
            <ul className="w-full space-y-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} - ${social.handle}`}
                    className="group min-h-[44px] flex items-center justify-center lg:justify-start gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors"
                  >
                    <span className="w-9 h-9 rounded-lg bg-slate-800 ring-1 ring-slate-700/80 flex items-center justify-center text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-500 transition-colors shrink-0">
                      {social.icon}
                    </span>
                    <div className="text-left">
                      <span className="block font-semibold text-slate-200 group-hover:text-white">
                        {social.name}
                      </span>
                      <span className="block text-xs text-slate-400">
                        {social.handle}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* VISUAL SEPARATOR */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8 opacity-50" />

        {/* BOTTOM BAR: Copyright & Developer Credit */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="text-center md:text-right">
            Developed By: <strong className="text-slate-300">Macrotek Digital Solutions</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;