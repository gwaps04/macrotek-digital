import React from 'react';

const WhyTrust = () => {
  // Upgraded data structure with bespoke semantic SVG icons
  const reasons = [
    {
      title: "Driven by Real Business Experience",
      desc: "We do more than write code. We take the time to understand your goals, workflows, challenges, and user needs, ensuring every solution delivers genuine business value—not just features.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    },
    {
      title: "Secure, Modern & Scalable Systems",
      desc: "Our platforms are built with industry best practices in security, authentication, encryption, and architecture. Each solution is designed to grow with your business, whether you have 10 users or 10,000.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      title: "Tailored Solutions",
      desc: "Every business is unique. That’s why our web applications, automation flows, and landing pages are customized to fit your exact operations, audience, and long-term vision.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      )
    },
    {
      title: "End-to-End Support",
      desc: "From planning to development, launch, maintenance, and future upgrades—we walk with you at every stage. Our clients don’t just get software; they get a reliable digital partner.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      title: "We Build for People",
      desc: "Technology should simplify—not complicate. Our interfaces are intuitive, responsive, and user-friendly to reduce training time and deliver better customer and employee experiences.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      )
    },
    {
      title: "Powered by Innovation",
      desc: "With modern frameworks, AI-driven methods, and a commitment to evolving with the digital landscape, we ensure your business stays competitive in today’s fast-changing market.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-bold text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
              Core Values
            </span>
          </div>
          <h2 className="brand-font text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Why Trust Macrotek?
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-4">
            Choosing a technology partner is a major decision, and at Macrotek Digital Solutions, we work hard to earn that trust. Although we are a new player in the industry, our approach, standards, and results speak for themselves.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Here’s why organizations of all sizes choose to partner with us:
          </p>
        </div>

        {/* 
          REASONS GRID
          3-column grid perfectly distributes the 6 items into two rows.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {reasons.map((item, index) => (
            
            /* 
              EQUAL-HEIGHT FLEX CARD 
              'h-full flex flex-col' guarantees that even if the descriptions are different lengths, 
              all cards in a row stretch to mathematically match the tallest one. 
            */
            <div 
              key={index}
              className="h-full flex flex-col p-8 bg-slate-50 rounded-3xl ring-1 ring-slate-200 hover:ring-indigo-500 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 ease-out group cursor-default"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-100/50 text-indigo-600 ring-1 ring-inset ring-indigo-600/20 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

          ))}
        </div>

        {/* 
          CONCLUSION BLOCKQUOTE 
          Inverting the color scheme to Slate-900 provides a massive visual anchor 
          at the bottom of the page, acting as a natural transition point to the footer.
        */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 bg-slate-900 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-slate-800 text-center">
            
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <svg className="w-10 h-10 mx-auto text-indigo-500/50 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl md:text-2xl font-medium text-white leading-relaxed tracking-wide font-serif italic">
                "At Macrotek Digital Solutions, building trust isn’t a slogan—it’s how we work. We exist to help organizations operate smarter, faster, and more efficiently through secure and intelligent digital transformation."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyTrust;