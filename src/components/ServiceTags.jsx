import React from 'react';

const ServiceTags = () => {
  // The full list of data provided
  const services = [
    "Static Landing Pages",
    "Business Services Pages",
    "Freelance Online Profile",
    "Queuing Systems",
    "Inventory Management Systems",
    "Client Management Systems",
    "Online Appointment Systems",
    "Online Shopping Site",
    "Human Resource and Payroll Systems",
    "Book Keeping Systems",
    "Sales Monitoring Systems",
    "Point of Sale Systems",
    "Media Interactive Websites"
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        
        {/* Optional Heading to give context */}
        <div className="text-center mb-4">
          <h5 className="text-muted fw-bold text-uppercase tracking-wide">
            System Capabilities
          </h5>
        </div>

        {/* THE BADGE CLOUD 
            d-flex: Enables flexbox layout
            flex-wrap: Allows items to drop to the next line if the screen is narrow
            justify-content-center: Centers the whole group horizontally
        */}
        <div className="d-flex flex-wrap justify-content-center gap-3">
          
          {services.map((item, index) => (
            <span 
              key={index} 
              // THE BADGE STYLING:
              // badge: Bootstrap base class
              // rounded-pill: Gives it the "Round" oval shape
              // bg-light: Light gray background (clean look)
              // text-dark: Dark text for contrast
              // border: Adds a subtle border
              // p-3: Padding inside the badge (makes it big and readable)
              // shadow-sm: Adds a tiny pop-up effect
              className="badge rounded-pill bg-light text-dark border p-3 fs-6 shadow-sm"
            >
              {item}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceTags;