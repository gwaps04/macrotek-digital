import React from 'react';

const FAQs = () => {
  // We store the data here to keep the HTML clean
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
      q: "What is the difference between a Basic Static Website and a Conversion-Focused Website?",
      a: (
        <>
          <p><strong>Basic Static Website:</strong> Provides a clean online presence that showcases your profile, services, or business.</p>
          <p className="mb-0"><strong>Conversion-Focused Website:</strong> Strategically designed to encourage visitors to take action—such as calling, booking, submitting inquiries, or placing orders—and includes semi-automated lead capture and analytics.</p>
        </>
      )
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
      q: "Will my website be mobile-responsive?",
      a: "Absolutely. All websites we build are designed to look and work smoothly across desktop, tablet, and mobile devices to provide a great user experience everywhere."
    },
    {
      q: "Is the website secure?",
      a: "Yes. We include SSL certification in all packages, ensuring your website and your visitors’ data are encrypted and protected."
    },
    {
      q: "Can I update my website myself?",
      a: "Static sites usually require developer changes, but we can provide maintenance and updates anytime. For dynamic systems or EWAs, we can include accessible dashboards that let you manage data and content on your own."
    },
    {
      q: "How long does development take?",
      a: (
        <>
          <p>Timeline depends on project scope:</p>
          <ul className="list-unstyled ps-3 border-start border-3 border-primary">
            <li className="mb-2"><strong>Basic Static Website:</strong> around a few days to 1–2 weeks</li>
            <li className="mb-2"><strong>Conversion-Focused Website:</strong> 1–3 weeks depending on content requirements</li>
            <li className="mb-2"><strong>Enterprise Systems (EWA):</strong> Several weeks to months based on features and complexity</li>
          </ul>
          <p className="mb-0">We will provide a development estimate after our initial consultation.</p>
        </>
      )
    },
    {
      q: "Do you offer support after development?",
      a: "Yes. All packages come with support and maintenance options. We ensure your website or system continues working smoothly even after deployment."
    },
    {
      q: "How much does an Enterprise Web Application cost?",
      a: "EWA pricing is flexible because every system is custom-built. The investment depends on the features, automation level, number of users, and system complexity. Contact us for a structured evaluation and quotation based on your needs."
    },
    {
      q: "Can you integrate third-party tools or platforms?",
      a: "Yes. We can connect systems through APIs including payment gateways, analytics, CRM tools, HR systems, and other platforms depending on requirements."
    },
    {
      q: "Do you require a meeting before starting?",
      a: "Yes. We conduct a discovery meeting to understand your goals, workflows, and requirements so that we can recommend the right solution for your business."
    },
    {
      q: "Can I start with a simple website and upgrade later?",
      a: "Of course. Many clients begin with a basic landing page and later upgrade to a conversion site or full business system as they grow. We design solutions that scale with you."
    },
    {
      q: "I’m not tech-savvy. Can I still use your systems?",
      a: "Absolutely. Our goal is to build systems that are simple, intuitive, and user-friendly. We also provide guidance and walkthroughs to ensure everyone on your team can use the platform confidently."
    }
  ];

  return (
    <div className="bg-light min-vh-100 py-5 mt-5">
      <div className="container">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-5">
          <h6 className="text-uppercase text-primary fw-bold tracking-wide">Support</h6>
          <h1 className="fw-bold text-dark display-5">Frequently Asked Questions</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Find answers to common questions about our services, process, and technical solutions.
          </p>
        </div>

        {/* FAQ CARD LIST 
            col-lg-8: Restricts width to prevent long, hard-to-read lines of text.
        */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            
            <div className="accordion" id="faqAccordion">
              {faqData.map((item, index) => (
                // EACH ITEM IS A CARD
                <div className="accordion-item mb-3 shadow-sm border-0 rounded-3 overflow-hidden" key={index}>
                  
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button 
                      className="accordion-button collapsed fw-bold text-dark bg-white p-4" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target={`#collapse${index}`} 
                      aria-expanded="false" 
                      aria-controls={`collapse${index}`}
                    >
                      <span className="me-3 text-primary">{index + 1}.</span> {item.q}
                    </button>
                  </h2>
                  
                  <div 
                    id={`collapse${index}`} 
                    className="accordion-collapse collapse" 
                    aria-labelledby={`heading${index}`} 
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body p-4 pt-0 text-muted lh-lg bg-white">
                      {item.a}
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQs;