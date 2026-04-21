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

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 ${className || ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
   <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
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
    <section className="relative h-[600px] w-full overflow-hidden bg-black">
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
          <source src="/images/banner3.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Edge masks to remove blur/glow at top and bottom */}
      {/* <div className="absolute top-0 left-0 right-0 h-4 bg-black z-1"></div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black z-1"></div>
      <div className="absolute inset-0 z-1 bg-black/50"></div> */}
{/* <div className="absolute inset-0 z-1 bg-black/20"></div>  */}
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20  pt-10 flex items-center justify-center">
          <div className="max-w-5xl text-center">
            {/* Main Heading */}
            <h1 className="text-5xl font-bold text-white mb-10 leading-tight tracking-tight font-raleway uppercase">
              Driving
              
              Innovation in the 
              <br />
            Digital Era
            </h1>

        

            {/* Get Services Button */}
            <button
              type="button"
              onMouseMove={handleMouseMove}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-6 py-3 text-sm font-semibold text-[#3B3808] transition-all cursor-pointer font-raleway"
            >
              {/* Hover Background Effect */}
              <span
                className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                style={{
                  left: `${mousePosition.x}%`,
                  top: `${mousePosition.y}%`,
                  width: '100px',
                  height: '100px',
                }}
              />
              <div className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                <span>Explore Services</span>
                <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                  <ArrowUpRightIcon className="group-hover:hidden" />
                  <ArrowRightIcon className="hidden group-hover:block" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
