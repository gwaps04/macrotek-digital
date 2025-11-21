import React from 'react';

const WhyTrust = () => {
  // We store the 6 points in an array for clean mapping
  const reasons = [
    {
      title: "Driven by Real Business Experience",
      desc: "We do more than write code. We take the time to understand your goals, workflows, challenges, and user needs, ensuring every solution delivers genuine business value—not just features."
    },
    {
      title: "Secure, Modern & Scalable Systems",
      desc: "Our platforms are built with industry best practices in security, authentication, encryption, and architecture. Each solution is designed to grow with your business, whether you have 10 users or 10,000."
    },
    {
      title: "Tailored Solutions—Not “One Size Fits All”",
      desc: "Every business is unique. That’s why our web applications, automation flows, and landing pages are customized to fit your exact operations, audience, and long-term vision."
    },
    {
      title: "End-to-End Support",
      desc: "From planning to development, launch, maintenance, and future upgrades—we walk with you at every stage. Our clients don’t just get software; they get a reliable digital partner."
    },
    {
      title: "We Build Systems That Work for People",
      desc: "Technology should simplify—not complicate. Our interfaces are intuitive, responsive, and user-friendly to reduce training time and deliver better customer and employee experiences."
    },
    {
      title: "Powered by Innovation",
      desc: "With modern frameworks, AI-driven methods, and a commitment to evolving with the digital landscape, we ensure your business stays competitive in today’s fast-changing market."
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-5 mx-auto" style={{ maxWidth: '800px' }}>
          <h2 className="fw-bold mb-3">Why Trust Macrotek?</h2>
          <p className="lead text-muted">
            Choosing a technology partner is a major decision, and at Macrotek Digital Solutions, we work hard to earn that trust. Although we are a new player in the industry, our approach, standards, and results speak for themselves.
          </p>
          <p className="text-muted">
            We believe businesses deserve a partner that is modern, proactive, and grounded in real-world understanding. Here’s why organizations of all sizes—from small businesses to enterprise-level operations—choose to work with Macrotek:
          </p>
        </div>

        {/* REASONS GRID 
            row-cols-1: Mobile (1 column)
            row-cols-md-2: Desktop (2 columns)
            g-4: Gap between items
        */}
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
          {reasons.map((item, index) => (
            <div className="col" key={index}>
              <div className="d-flex h-100 p-4 bg-white rounded-3 shadow-sm border-start border-4 border-success">
                {/* The Check Icon */}
                <div className="flex-shrink-0 me-3">
                  <span className="fs-3 text-success">✔</span>
                </div>
                {/* The Content */}
                <div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONCLUSION */}
        <div className="text-center mx-auto" style={{ maxWidth: '900px' }}>
          <div className="p-4 bg-white rounded shadow-sm border">
            <p className="mb-0 fs-5 fst-italic text-secondary">
              "At Macrotek Digital Solutions, building trust isn’t a slogan—it’s how we work. We exist to help organizations operate smarter, faster, and more efficiently through secure and intelligent digital transformation."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyTrust;