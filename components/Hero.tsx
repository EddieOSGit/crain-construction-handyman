import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-[75vh] md:h-[90vh] -mt-20 flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1645651964715-d200ce0939cc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhhbmR5bWFufGVufDB8fDB8fHww')" }}>
      <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10 fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Your Trusted Partner for Construction & Handyman Services in Montana
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-200 mb-8">
          From minor home repairs to major renovations, Crain Construction delivers quality craftsmanship you can count on in Billings and Yellowstone County.
        </p>
        <div className="flex justify-center">
          <a href="#contact" className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
            Request a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;