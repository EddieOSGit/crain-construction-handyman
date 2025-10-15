
import React from 'react';
import { SERVICES } from '../constants';
import { CheckIcon } from './icons/Icons';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your home improvement needs in the Billings, MT area.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-slate-50 rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center justify-center h-16 w-16 bg-sky-100 text-sky-600 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.examples.map((example) => (
                  <li key={example} className="flex items-start">
                    <div className="flex-shrink-0 text-sky-500 mt-1">
                      <CheckIcon />
                    </div>
                    <span className="ml-3 text-slate-700">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
