import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ fullName: '', mobile: '', email: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwr9r-6Xt6ROmPB4kO5-NV2z97rNa2Jh0HdsPk_4EuYyUgy-wAGU5eSx4ldHJpFfq4B/exec";

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.result === "success") {
        setStatus({ type: 'success', message: 'Information received! Check your email for your gift.' });
        setFormData({ fullName: '', mobile: '', email: '' });
      } else if (result.message === "Email already exists") {
        setStatus({ type: 'danger', message: 'This email is already registered with Macrotek.' });
      }
    } catch (error) {
      // Handle Google Script Opaque CORS response
      setStatus({ 
        type: 'success', 
        message: 'Information received! Our team will contact you shortly.' 
      });
      setFormData({ fullName: '', mobile: '', email: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-slate-50 flex items-center py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: CONTEXT & TRUST */}
          <div className="flex flex-col justify-center text-center lg:text-left max-w-lg mx-auto lg:mx-0">
            <h1 className="brand-font text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">extraordinary.</span>
            </h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
              Whether you need a bespoke enterprise system, a high-converting landing page, or strategic digital automation, our engineering team is ready to scale your vision.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-slate-100 flex items-start gap-4 text-left">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.436 3 11.996c0 2.29.833 4.363 2.177 5.904.51.583.923 1.258 1.157 1.993l.3 1.054a.375.375 0 00.46.26l1.05-.3c.732-.211 1.41-.606 2.001-1.123A8.99 8.99 0 0012 20.25z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Direct Consultation</h4>
                <p className="text-sm text-slate-500 mt-1">Submit your details and a senior architect will reach out within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE FORM */}
          <div className="w-full max-w-lg mx-auto">
            <div className="bg-white shadow-2xl shadow-slate-200/50 rounded-3xl p-8 sm:p-10 ring-1 ring-slate-100">
              
              {/* STATUS MESSAGES */}
              {status.message && (
                <div className={`mb-8 p-4 rounded-xl flex items-start gap-3 ${status.type === 'success' ? 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500/20' : 'bg-red-50 text-red-800 ring-1 ring-red-500/20'}`}>
                  {status.type === 'success' ? (
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  ) : (
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" /></svg>
                  )}
                  <div className="font-medium text-sm">{status.message}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="e.g. Jane Doe"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobile" className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="mobile" 
                    value={formData.mobile} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="e.g. +63 912 345 6789"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="e.g. jane@company.com"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center rounded-xl px-6 py-4 text-base font-bold text-white transition-all duration-300 ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-slate-900 shadow-lg shadow-slate-900/20 hover:bg-indigo-600'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send my Information'
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;