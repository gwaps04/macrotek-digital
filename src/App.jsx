import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import StaticWebDev from './components/StaticWebDev';
import EnterpriseWebApps from './components/EnterpriseWebApps';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
// 1. Import the FAQs page
import FAQs from './components/FAQs';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/static-web-dev" element={<StaticWebDev />} />
          <Route path="/enterprise-web-apps" element={<EnterpriseWebApps />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* 2. Add the FAQs Route */}
          <Route path="/faqs" element={<FAQs />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;