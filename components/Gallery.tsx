
import React from 'react';
import { PROJECTS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Recent Projects</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Take a look at the quality craftsmanship we deliver to our clients across Yellowstone County.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm text-sky-300 font-semibold">{project.category}</p>
                <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;