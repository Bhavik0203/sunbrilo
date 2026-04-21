'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Aniket Patil",
    role: "Client",
    company: "",
    content: "Sunbrilo Technologies is an innovative IT solutions provider, offering a comprehensive suite of services to propel businesses into the digital age. We empower organizations to thrive in a dynamic technological landscape.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO",
    company: "Tech Innovations Inc.",
    content: "Working with this team has been transformative for our business. Their expertise in digital solutions helped us streamline operations and increase efficiency by 40%. Highly recommended!",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO",
    company: "Global Systems Ltd.",
    content: "Exceptional service and technical expertise. They delivered our cloud migration project on time and within budget. The ongoing support has been outstanding.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "Enterprise Solutions Co.",
    content: "Their cybersecurity solutions gave us peace of mind. Professional team, excellent communication, and results that exceeded our expectations.",
  },
  {
    id: 5,
    name: "David Thompson",
    role: "Founder",
    company: "Startup Ventures",
    content: "From development to deployment, their team handled everything flawlessly. Our mobile app has received rave reviews from users.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];
  const initials = t.name.split(' ').map((n) => n[0]).join('');

  return (
    <div className="pt-10 pb-20 px-4 ">
      <div >

        {/* Section Label */}
        <div className="flex justify-center mb-4">
          <span className="text-sm font-semibold text-gray-700 tracking-widest uppercase border-b-2 border-gray-800 pb-1 font-raleway">
            Testimonials
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-raleway">
          Hear From Our Clients
        </h2>

        {/* Slider Card */}
        <div className="flex rounded-xl overflow-hidden   items-start">

          {/* Left: Image Panel */}
          <div
            className="w-1/2 flex-shrink-0 relative"
            style={{
              backgroundImage: 'url("/images/testimonial.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
            }}
          >
          </div>

          {/* Right: Testimonial Content */}
          <div className="w-1/2 bg-white px-8 py-7 flex flex-col mt-12 -ml-20 z-10 relative" style={{ height: '300px' }}>
            
            {/* Profile Section - Center Top */}
          
            {/* Testimonial Content */}
            <div className="flex-1 mb-6">
              <p className="text-gray-700 text-base leading-relaxed mb-6 font-raleway">
                {t.content}
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold mr-4 font-raleway">
                  {initials}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 font-raleway">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-600 font-raleway">
                    {t.role}
                  </p>
                  {t.company && (
                    <p className="text-sm text-gray-500 font-raleway">
                      {t.company}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
              >
                &#8249;
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;