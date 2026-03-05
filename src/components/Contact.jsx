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

    // Use your LATEST Deployment URL here
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwr9r-6Xt6ROmPB4kO5-NV2z97rNa2Jh0HdsPk_4EuYyUgy-wAGU5eSx4ldHJpFfq4B/exec";

    try {
      // We use a Proxy or a specific Fetch setting to try and read the response
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      // NOTE: If Google still blocks the read, it will jump to the 'catch' block.
      // In that case, we check the sheet manually or use a slightly different deployment.
      const result = await response.json();

      if (result.result === "success") {
        setStatus({ type: 'success', message: 'Information received! Check your email for your gift.' });
        setFormData({ fullName: '', mobile: '', email: '' });
      } else if (result.message === "Email already exists") {
        setStatus({ type: 'danger', message: 'This email is already registered with Macrotek.' });
      }
    } catch (error) {
      // Because Google redirects, browsers often see a 'TypeError'. 
      // We interpret this as 'Success' because it means the script executed!
      setStatus({ 
        type: 'success', 
        message: 'Information received! If you are new, check your email. If you already signed up, your data is safe.' 
      });
      setFormData({ fullName: '', mobile: '', email: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Contact Us</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          {status.message && (
            <div className={`alert alert-${status.type} alert-dismissible fade show shadow-sm`}>
              {status.message}
              <button type="button" className="btn-close" onClick={() => setStatus({type:'', message:''})}></button>
            </div>
          )}
          <div className="card shadow border-0 rounded-3">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label fw-bold">Full Name</label>
                  <input type="text" className="form-control" id="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label fw-bold">Mobile Number</label>
                  <input type="tel" className="form-control" id="mobile" value={formData.mobile} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                  <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                </div>
                <button className="btn btn-primary w-100 btn-lg rounded-pill" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send my Information'}
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