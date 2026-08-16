import React, { useState } from 'react';

const FAQs = () => {
  // Native React state to track which accordion item is currently open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "What services does Macrotek Digital Solutions offer?",
      a: "We provide professional web solutions ranging from basic static websites and landing pages to conversion-focused sites and full enterprise web applications (EWA). We also offer automation integrations, digital transformation consulting, support, and maintenance."
    },
    {
      q: "Who are your services for?",
      a: "Our services are for freelancers, small businesses, startups, growing companies, and enterprise organizations that want to improve their online presence, automate operations, or modernize digital workflows."
    },
    {
      q: "What is the difference between a Basic Website and a Conversion-Focused Website?",
      a: "A Basic Website provides a clean online presence that showcases your profile, services, or business. A Conversion-Focused Website is strategically designed to encourage visitors to take action—such as calling, booking, submitting inquiries, or placing orders—and includes semi-automated lead capture and analytics."
    },
    {
      q: "What is an Enterprise Web Application (EWA)?",
      a: "An Enterprise Web Application is a fully dynamic, database-driven system designed to support business operations such as customer management, sales tracking, logistics, HR, reporting, automation, and more. It can be customized based on the company’s needs and internal workflow."
    },
    {
      q: "Do you provide domains with your packages?",
      a: "Yes. Every website package includes a domain, giving your business a professional online identity and making it easier for customers to find and trust you."
    },
    {
      q: "How long does development take?",
      a: "Timeline depends on project scope: Basic websites take 1–2 weeks. Conversion-focused sites take 1–3 weeks. Enterprise Systems can take several weeks to months based on features and complexity. We will provide a strict development estimate after our initial consultation."
    },
    {
      q: "How much does an Enterprise Web Application cost?",
      a: "EWA pricing is flexible because every system is custom-built. The investment depends on the features, automation level, number of users, and system complexity. Contact us for a structured evaluation and quotation based on your needs."
    },
    {
      q: "Can you integrate third-party tools or platforms?",
      a: "Yes. We can connect systems through APIs including payment gateways, analytics, CRM tools, HR systems, and other platforms depending on requirements."
    }
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-slate-50 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-indigo-100/80 px-4 py-1.5 text-sm font-bold text-indigo-700 tracking-wide ring-1 ring-inset ring-indigo-600/20 uppercase">
              Support
            </span>
          </div>
          <h1 className="brand-font text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and technical solutions.
          </p>
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'border-indigo-500 shadow-md shadow-indigo-500/10' : 'border-slate-200 shadow-sm hover:border-slate-300'}`}
              >
                {/* Accordion Button */}
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-indigo-600' : 'text-slate-900'}`}>
                    {item.q}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <span className="ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-500">
                    <svg 
                      className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2" 
                      stroke="currentColor"
                    >
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      )}
                    </svg>
                  </span>
                </button>
                
                {/* 
                  Accordion Content (Smooth Height Transition) 
                  Uses grid-template-rows trick to animate height from 0 to auto seamlessly.
                */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed font-medium">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FAQs;