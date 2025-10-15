import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
  examples: string[];
}

export interface WhyChooseUsPoint {
    icon: React.ReactElement;
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    location: string;
}

// FIX: Added Project interface for the gallery component.
export interface Project {
    id: number;
    imageUrl: string;
    title: string;
    category: string;
}
