import React from 'react';

const EnterpriseWebApps = () => {
  return (
    <div className="container py-5 mt-5">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Enterprise Web Applications</h1>
        <p className="lead text-muted">Dynamic Systems (EWA) for Scalable Business Operations</p>
      </div>

      {/* MAIN CONTENT CARD */}
      <section className="card shadow border-0 rounded-3 overflow-hidden">
        <div className="row g-0">
          
          {/* LEFT: Content */}
          <div className="col-lg-7 p-4 p-lg-5">
            
            {/* INTRO */}
            <h3 className="fw-bold mb-3 text-primary">Power Your Business with Dynamic Systems</h3>
            <p className="text-muted">
              For growing companies and large-scale organizations that need more than just an online presence, our Enterprise Web Application package delivers a fully dynamic, database-driven system capable of supporting end-to-end business operations.
            </p>
            <p className="text-muted">
              This tier is built for businesses that want automation, scalability, efficiency, and real-time control over their processes—from sales and customer management to logistics, HR, finance, and beyond.
            </p>
            <div className="alert alert-light border-start border-4 border-primary shadow-sm mb-4">
              With Macrotek Digital Solutions, your enterprise system becomes a powerful digital backbone that streamlines work, reduces manual effort, improves decision-making, and elevates customer experience.
            </div>

            {/* WHAT YOU GET */}
            <h4 className="fw-bold mb-3">What You Get in the Enterprise Tier</h4>
            <div className="mb-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item ps-0">
                  <strong className="text-dark">Custom Dynamic System Development:</strong> Built from the ground up to match your workflow and business rules.
                </li>
                <li className="list-group-item ps-0">
                  <strong className="text-dark">Database-Driven Infrastructure:</strong> Stores, processes, and retrieves data in real time for live information access.
                </li>
                <li className="list-group-item ps-0">
                  <strong className="text-dark">Role-Based Access & User Accounts:</strong> Secure access control across departments and teams.
                </li>
                <li className="list-group-item ps-0">
                  <strong className="text-dark">Process & Workflow Automation:</strong> Automates routine tasks to reduce error and increase productivity.
                </li>
                <li className="list-group-item ps-0">
                  <strong className="text-dark">Scalable & Cloud-Ready Architecture:</strong> Built to grow with your organization and integrate new modules.
                </li>
                <li className="list-group-item ps-0">
                  <strong className="text-dark">Real-Time Reporting & Dashboards:</strong> Live metrics and insights for smarter decision-making.
                </li>
                <li className="list-group-item ps-0">
                  <strong className="text-dark">API Integration Capabilities:</strong> Connects with CRM, HR, Payment Gateways, and ERP solutions.
                </li>
                <li className="list-group-item ps-0">
                  <strong className="text-dark">SSL Certified & Security Standards:</strong> Enterprise-grade encryption and protection at every level.
                </li>
                <li className="list-group-item ps-0">
                  <strong className="text-dark">Continuous Support & System Maintenance:</strong> Ongoing updates, monitoring, and support.
                </li>
                <li className="list-group-item ps-0">
                  <strong className="text-dark">Mobile-Responsive & Accessible Anywhere:</strong> Access via desktop, tablet, or mobile—in office or remote.
                </li>
              </ul>
            </div>

            {/* WHO IS THIS FOR */}
            <div className="bg-light p-4 rounded-3 mb-4">
              <h5 className="fw-bold text-primary mb-3">Who Is This For?</h5>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">✔ SMEs upgrading operations</li>
                    <li className="mb-2">✔ Enterprises needing digital transformation</li>
                    <li className="mb-2">✔ Organizations with multiple departments</li>
                    <li className="mb-2">✔ Companies requiring custom automation</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">✔ Businesses modernizing legacy systems</li>
                    <li className="mb-2">✔ Institutions needing secure portals</li>
                    <li className="mb-2">✔ Government & private sector operations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IN SIMPLE TERMS */}
            <div className="mb-0">
              <h5 className="fw-bold">In Simple Terms</h5>
              <p className="text-muted mb-0">
                Your business runs smoother, faster, and smarter—with a digital system that works the way your organization works, not the other way around. From customer management to internal operations, our Enterprise Web Applications are the digital engine behind your ongoing growth.
              </p>
            </div>

          </div>

          {/* RIGHT: GIF Placeholder */}
          <div className="col-lg-5 d-none d-lg-block">
            {/* UPDATED IMAGE SOURCE:
                - Points to the /thumbnails folder in public
                - Uses 'object-fit-cover' so the GIF acts like a moving background 
                  filling the whole height without distortion.
            */}
            <img 
              src="/thumbnails/ewa-gif-section.gif" 
              alt="Enterprise Application Dashboard Animation" 
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default EnterpriseWebApps;