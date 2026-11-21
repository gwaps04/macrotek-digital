// FILE: src/components/Clients.jsx
import React from 'react';

// Active client list (6 companies)
const clientsData = [
  {
    name: 'MacroBiz',
    icon: (
      <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    name: 'AssessMy',
    icon: (
      <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M15.75 3.75h1.5A2.25 2.25 0 0119.5 6v13.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6a2.25 2.25 0 012.25-2.25h1.5m7.5 0a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25m7.5 0v.75A.75.75 0 0115 5.25H9a.75.75 0 01-.75-.75v-.75" />
      </svg>
    ),
  },
  {
    name: 'Bayside Heart Australia',
    icon: (
      <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: 'Accelerated Review Center',
    icon: (
      <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    name: 'Nasol Haircraft',
    icon: (
      <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.428-1.428L13.5 18.75l1.178-.394a2.25 2.25 0 001.428-1.428L16.5 15.75l.394 1.178a2.25 2.25 0 001.428 1.428l1.178.394-1.178.394a2.25 2.25 0 00-1.428 1.428z" />
      </svg>
    ),
  },
  {
    name: 'Merryland Resort',
    icon: (
      <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

// Reusable component for a single track of clients
const ClientTrack = () => (
  <div className="client-marquee-track">
    {clientsData.map((client) => (
      <div
        key={client.name}
        className="flex items-center gap-4 mx-8 group cursor-default"
      >
        <div className="flex items-center justify-center min-w-[48px] min-h-[48px] rounded-xl bg-white/10 backdrop-blur-sm p-2 transition-transform duration-300 group-hover:scale-110">
          {client.icon}
        </div>
        <span className="text-2xl font-bold text-white tracking-wide whitespace-nowrap drop-shadow-sm">
          {client.name}
        </span>
      </div>
    ))}
  </div>
);

const Clients = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* 1. THE TITLE ZONE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="brand-font text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Our Clients
        </h2>
        <div className="mt-3 text-lg text-slate-500 font-medium max-w-2xl mx-auto">
          A commitment to innovation and excellence alongside industry leaders.
        </div>
      </div>

      {/* 2. THE BRAND BAND */}
      <div className="relative w-full bg-orange-500 py-8 border-y border-orange-600 shadow-inner overflow-hidden">
        {/* Edge Gradients */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-orange-500 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-orange-500 to-transparent z-10 pointer-events-none" />

        {/* 3. THE TRAIN TRACK MARQUEE */}
        <div className="marquee-container flex w-full">
          <ClientTrack />
          <ClientTrack />
        </div>
      </div>
    </section>
  );
};

export default Clients;