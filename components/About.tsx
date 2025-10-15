import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww" alt="Crain Construction Team" className="rounded-lg shadow-2xl" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Crain Construction And Handyman</h2>
            <p className="text-lg text-slate-600 mb-6">
              Our mission is to deliver quality craftsmanship and reliable service to homeowners and businesses throughout the Billings, Montana area. We are a locally-owned business with a focus on integrity, professionalism, and complete customer satisfaction.
            </p>
            <p className="text-slate-600 mb-6">
              With deep expertise in Montana's unique building requirements and climate, we ensure every project is built to last. From timely project completion to transparent communication, we strive to make your construction or repair experience seamless and stress-free.
            </p>
            <a href="tel:4065551234" className="text-sky-600 font-semibold hover:underline">
              Get in touch to discuss your next project &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;