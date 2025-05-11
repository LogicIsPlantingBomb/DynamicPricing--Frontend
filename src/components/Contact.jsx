import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, you would send this data to your backend
    setSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
      
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="mb-6">
              Ready to boost your revenue with intelligent pricing? Contact us today to learn how Profit Optic can transform your business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#10b0e7] p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>info@profitoptic.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#10b0e7] p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded mb-6">
                Thank you for reaching out! We'll get back to you shortly.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#10b0e7]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#10b0e7]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#10b0e7]"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#10b0e7]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-[#10b0e7] hover:bg-[#0d9ad0] text-white font-bold py-3 px-6 rounded transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
