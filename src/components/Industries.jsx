import React from 'react';

const Industries = () => {
  const industryList = [
    { icon: "🛍️", name: "Retail Sales & Marketing" },
    { icon: "🏠", name: "Real Estate" },
    { icon: "💪", name: "Health & Wellness" },
    { icon: "🍽️", name: "Food Businesses" },
    { icon: "🚗", name: "Automotive" },
    { icon: "🎓", name: "Schools & Education" },
    { icon: "📡", name: "Telecommunication" },
    { icon: "🏗️", name: "Engineering" },
    { icon: "🚚", name: "Logistics & Supply Chain" },
    { icon: "🚌", name: "Transportation" },
    { icon: "🧑‍🔧", name: "Manpower & Recruitment" },
    { icon: "💼", name: "Consultancy Industries" },
    { icon: "➕", name: "And many more..." },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        
        <div className="card shadow border-0 rounded-3">
          <div className="card-body p-4 p-md-5">
            
            <div className="text-center mb-5">
              <h3 className="fw-bold text-primary">
                We Are Ready to Provide Basic to Enterprise Systems
              </h3>
              <p className="lead text-muted">
                Serving a diverse range of industries with tailored digital solutions.
              </p>
            </div>

            {/* KEY CHANGE: Added 'justify-content-end'
                This tells the grid: "If a row isn't full, push the items to the right side."
                - Full rows (3 items) are unaffected.
                - The last row (1 item) gets pushed to the right.
            */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-end">
              
              {industryList.map((industry, index) => (
                <div className="col" key={index}>
                  <div className="d-flex align-items-center p-3 border rounded bg-white h-100 shadow-sm hover-effect">
                    <span className="display-6 me-3">{industry.icon}</span>
                    <h5 className={`mb-0 fw-bold ${industry.name.includes("more") ? "text-primary fst-italic" : "text-secondary"}`}>
                      {industry.name}
                    </h5>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Industries;