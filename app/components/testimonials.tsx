'use client';

import React, { useEffect, useState } from 'react';

interface TestimonialItem {
  _id: string;
  name: string;
  country?: string;
  title?: string;
  testimonial: string;
  image?: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          'https://sunbrilo-dashboard.onrender.com/api/testimonials/',
          { cache: 'no-store' }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }

        const data = await response.json();

        if (isMounted && Array.isArray(data)) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];
  const content = t?.testimonial?.replace(/^"|"$/g, '') || '';
  const initials =
    t?.name
      ?.split(' ')
      .map((n) => n[0])
      .join('') || 'S';

  if (loading && !t) {
    return (
      <div className="pt-10 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center text-gray-500 font-raleway">
          Loading testimonials...
        </div>
      </div>
    );
  }

  if (!t) {
    return null;
  }

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
            className="w-full md:w-1/2 shrink-0 relative h-[300px] md:h-[400px] rounded-2xl md:rounded-none md:rounded-l-2xl z-0"
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
            <div className="flex-1 mb-6 flex flex-col min-w-0">
              <p className="text-gray-700 text-base leading-relaxed mb-6 font-raleway whitespace-pre-wrap overflow-y-auto max-h-[220px] pr-2">
                {content}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 mt-auto min-w-0">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold shrink-0 font-raleway">
                    {initials}
                  </div>
                )}
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-800 font-raleway truncate">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-600 font-raleway truncate">
                    {t.title || 'Client'}
                  </p>
                  {t.country && (
                    <p className="text-sm text-gray-500 font-raleway truncate">
                      {t.country}
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
                disabled={testimonials.length <= 1}
              >
                &#8249;
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${i === current ? 'bg-gray-900' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-8 h-8 rounded-full cursor-pointer border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
                disabled={testimonials.length <= 1}
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