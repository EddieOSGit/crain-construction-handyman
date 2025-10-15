import React from 'react';
// FIX: Import the Project type.
import type { NavLink, Service, WhyChooseUsPoint, Testimonial, Project } from './types';
import { HammerIcon, WrenchIcon, CheckBadgeIcon, MapPinIcon, ShieldCheckIcon } from './components/icons/Icons';


export const NAV_LINKS: NavLink[] = [
  { href: '#services', label: 'Services' },
  // FIX: Added a link to the gallery section.
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

export const SERVICES: Service[] = [
  {
    icon: <HammerIcon />,
    title: 'Construction Services',
    description: 'From ground-up projects to major renovations, we provide comprehensive construction solutions tailored for the Montana climate.',
    examples: ['Home Additions & Renovations', 'Kitchen & Bathroom Remodeling', 'Deck & Patio Construction', 'Basement Finishing', 'Custom Carpentry'],
  },
  {
    icon: <WrenchIcon />,
    title: 'Handyman Services',
    description: 'Tackling your to-do list with professional, reliable handyman services for all types of home repairs and maintenance.',
    examples: ['General Home Repairs', 'Drywall & Painting', 'Window & Door Installation', 'Fixture Installation', 'Fence & Gate Repairs'],
  },
];

export const WHY_CHOOSE_US_POINTS: WhyChooseUsPoint[] = [
    {
        icon: <CheckBadgeIcon />,
        title: 'Quality Craftsmanship',
        description: "We take pride in our work, delivering superior quality and attention to detail on every project, big or small."
    },
    {
        icon: <MapPinIcon className="h-10 w-10" />,
        title: 'Local Billings Expertise',
        description: "As a local Montana business, we have deep knowledge of regional building codes, climate challenges, and the best materials for the job."
    },
    {
        icon: <ShieldCheckIcon />,
        title: 'Reliable & On-Time',
        description: "Your time is valuable. We are committed to clear communication, timely project completion, and respecting your schedule."
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Crain Construction transformed our outdated kitchen into a modern masterpiece. Their team was professional, clean, and finished ahead of schedule. Highly recommended for any Billings home renovation!",
        author: "Sarah J.",
        location: "Billings, MT"
    },
    {
        quote: "We had a long list of handyman tasks that needed doing. They handled everything from drywall repair to fixing a leaky faucet with skill and efficiency. We finally have our weekend back!",
        author: "Mike & Deb R.",
        location: "Laurel, MT"
    },
    {
        quote: "The new deck is our favorite part of the house now. The craftsmanship is top-notch, and it was built to withstand Montana winters. Fantastic work from a great local contractor.",
        author: "Tom P.",
        location: "Yellowstone County"
    }
];

// FIX: Added PROJECTS constant to provide data for the Gallery component.
export const PROJECTS: Project[] = [
    {
        id: 1,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661963667668-f53a412a5922?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwa2l0Y2hlbiUyMHJlbW9kZWx8ZW58MHx8MHx8fDA%3D',
        title: 'Modern Kitchen Remodel',
        category: 'Remodeling'
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1642721150697-7932702c0f03?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvb2RlbiUyMG91dGRvb3IlMjBkZWNrJTIwcGF0aW98ZW58MHx8MHx8fDA%3D',
        title: 'Custom Redwood Deck',
        category: 'Construction'
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1722858812731-d96eceb10f52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4ZXJ5JTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D',
        title: 'Luxury Bathroom Renovation',
        category: 'Remodeling'
    },
    {
        id: 6,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1725408143029-d2e589ae5037?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZlbmNlfGVufDB8fDB8fHww',
        title: 'Cedar Fence Installation',
        category: 'Handyman Services'
    }
];