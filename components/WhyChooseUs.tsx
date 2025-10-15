
import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../constants';

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-20 bg-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose Us?</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Montana Strong. Montana Built. We're your neighbors, dedicated to serving our community.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {WHY_CHOOSE_US_POINTS.map((point) => (
                        <div key={point.title} className="text-center p-6">
                            <div className="flex items-center justify-center h-20 w-20 bg-white text-sky-600 rounded-full mb-6 mx-auto shadow-md">
                                {point.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                            <p className="text-slate-600">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
