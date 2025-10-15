import React from 'react';
import { FacebookIcon, InstagramIcon, YelpIcon } from './icons/Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Crain Construction And Handyman</h3>
            <p className="text-slate-400">Quality Craftsmanship in Billings, MT</p>
          </div>
          <div className="md:justify-self-center">
            <h4 className="font-semibold text-white mb-2">Quick Links</h4>
            <ul className="space-y-1">
                <li><a href="#services" className="hover:text-sky-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-sky-400 transition-colors">Get an Estimate</a></li>
            </ul>
          </div>
          <div className="md:justify-self-end">
            <h4 className="font-semibold text-white mb-3">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><FacebookIcon /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><InstagramIcon /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><YelpIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Crain Construction And Handyman. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;