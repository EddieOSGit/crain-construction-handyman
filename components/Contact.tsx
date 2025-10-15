
import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, ClockIcon, MapPinIcon as MapIcon } from './icons/Icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., send to an API endpoint)
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Get a Free Estimate</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today for a no-obligation quote.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Contact Information</h3>
              <p className="text-slate-600 mb-6">
                We proudly serve Billings, Montana and surrounding Yellowstone County areas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-sky-600 mt-1"><MapIcon /></div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-slate-600">3054 Hunters Ridge Loop S, Billings, MT</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-sky-600 mt-1"><PhoneIcon /></div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:4065551234" className="text-slate-600 hover:text-sky-600">(406) 555-1234</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-sky-600 mt-1"><EnvelopeIcon /></div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:contact@crainconstructionmt.com" className="text-slate-600 hover:text-sky-600">contact@crainconstructionmt.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-sky-600 mt-1"><ClockIcon /></div>
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-slate-600">Mon - Fri: 7:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Project Details</label>
              <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-sky-700 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
