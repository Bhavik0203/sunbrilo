'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Dev",
    role: "Client",
    company: "",
    content: "The HRMS has been very beneficial for our company. It has helped us to be more organized and efficient in our work. Additionally, it has saved us time and money.",
  },
  {
    id: 2,
    name: "Narayanan",
    role: "Client",
    company: "",
    content: "Sunbrilo’s system has helped me keep my employee data organized, and on track, and has made collaboration with my team easier. Plus, their customer support is excellent.",
  },
  {
    id: 3,
    name: "Nimesh Shah",
    role: "Client",
    company: "",
    content: "Sunbrilo has great customer service and technical expertise. I’ve been a satisfied customer for many years and would recommend them.",
  },
  {
    id: 4,
    name: "Prasad",
    role: "Client",
    company: "",
    content: "Big shout-out to Sunbrilo! They're not just our go-to recruitment wizards, but also the tech gurus who make the IT side of things look like a breeze. From bringing in awesome talent to solving our tech puzzles, these folks are the real MVPs. It's not just business with them; it's a genuine collaboration. They've added so much flair to our team, and we're not just colleagues – we're a winning squad. Cheers to making work awesome together!",
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
        <div className="flex flex-col md:flex-row rounded-xl overflow-visible items-center md:items-start max-w-5xl mx-auto">

          {/* Left: Image Panel */}
          <div
            className="w-full md:w-1/2 flex-shrink-0 relative h-[300px] md:h-[400px] rounded-2xl md:rounded-none md:rounded-l-2xl z-0"
            style={{
              backgroundImage: 'url("/images/testimonial.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </div>

          {/* Right: Testimonial Content */}
          <div className="w-[92%] sm:w-[85%] md:w-1/2 bg-white px-6 py-8 md:px-8 md:py-7 flex flex-col -mt-20 md:mt-12 md:-ml-20 z-10 relative rounded-2xl shadow-xl md:shadow-[0_0_40px_rgba(0,0,0,0.05)]" style={{ minHeight: '300px' }}>
            
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
                className="w-8 h-8 rounded-full cursor-pointer border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
              >
                &#8249;
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                      i === current ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-8 h-8 rounded-full cursor-pointer border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
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