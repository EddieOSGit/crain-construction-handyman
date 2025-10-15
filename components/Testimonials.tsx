
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { QuoteIcon } from './icons/Icons';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We're proud to have earned the trust of homeowners and businesses in the Billings area.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
              <div className="text-sky-500 mb-4">
                <QuoteIcon />
              </div>
              <p className="text-slate-600 italic flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-bold text-slate-800">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
