'use client';

import { useState } from 'react';

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 ${className || ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export default function Banner() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
          style={{ objectPosition: 'center' }}
        >
          <source src="/images/sunbirlovideo1.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Edge masks to remove blur/glow at top and bottom */}
      {/* <div className="absolute top-0 left-0 right-0 h-4 bg-black z-1"></div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black z-1"></div>
      <div className="absolute inset-0 z-1 bg-black/50"></div> */}
<div className="absolute inset-0 z-1 bg-black/20"></div> 
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-white mb-6 leading-tight tracking-tight">
              Driving
              
              Innovation 
              <br />
             in the Digital Era
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Empowering businesses with cutting-edge technology and
              strategic insights to thrive in the digital age. We ensure
              seamless integration, scalability, and growth for all our
              clients.
            </p>

            {/* Get Services Button */}
            <button
              type="button"
              onMouseMove={handleMouseMove}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-6 py-3 text-sm font-semibold text-[#3B3808] transition-all hover:text-white"
            >
              {/* Hover Background Effect */}
              <span
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-500 ease-out"
                style={{
                  left: `${mousePosition.x}%`,
                  top: `${mousePosition.y}%`,
                  width: '200%',
                  height: '200%',
                  transform: 'translate(-50%, -50%) scale(0)',
                }}
              />
              <span
                className="pointer-events-none absolute inset-0 rounded-full bg-[#3B3808] transition-transform duration-500 ease-out group-hover:scale-100"
                style={{
                  transform: 'scale(0)',
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }}
              />

              {/* Button Text */}
              <span className="relative z-10">Get Services</span>

              {/* Arrow Circle */}
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-300 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                <ArrowUpRightIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
