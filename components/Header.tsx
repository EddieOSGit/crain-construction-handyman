
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Bars3Icon, XMarkIcon, PhoneIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-slate-800">
              Crain Construction
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-600 hover:text-sky-600 font-medium transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <a href="tel:4065551234" className="bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-colors flex items-center gap-2">
              <PhoneIcon />
              (406) 555-1234
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800">
              {isOpen ? <XMarkIcon /> : <Bars3Icon />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-white hover:bg-sky-600">
                {link.label}
              </a>
            ))}
          </div>
          <div className="p-4 border-t border-slate-200">
            <a href="tel:4065551234" className="bg-sky-600 w-full text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-colors flex items-center justify-center gap-2">
              <PhoneIcon />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
