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
import FAQs from './components/FAQs';

function App() {
  return (
    <Router>
      {/* 
        Replaced Bootstrap 'd-flex flex-column min-vh-100' with Tailwind.
        This ensures the footer always pushes to the bottom of the screen.
      */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* 
          Added pt-20 (padding-top) to compensate for the fixed 80px Navbar.
          Without this, the top of your Home/Hero section would be trapped under the glass nav.
        */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/static-web-dev" element={<StaticWebDev />} />
            <Route path="/enterprise-web-apps" element={<EnterpriseWebApps />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;