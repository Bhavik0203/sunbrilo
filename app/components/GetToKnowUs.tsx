'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';


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
export default function GetToKnowUs() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate progress: 0 when element enters viewport, 1 when fully scrolled through
      const start = windowHeight;
      const end = -elementHeight * 0.5;
      const current = elementTop;
      const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };
  const renderAnimatedText = (text: string) => {
    const totalChars = text.length;
    return text.split('').map((char, index) => {
      const charThreshold = index / totalChars;
      const isHighlighted = scrollProgress > charThreshold;
      
      return (
        <span
          key={index}
          className="transition-colors duration-75"
          style={{
            color: isHighlighted ? '#0c1a1a' : '#9ca3af',
          }}
        >
          {char}
        </span>
      );
    });
  };
  
  return (
    <section className="w-full bg-[#f5f3f3] px-4 py-12">
      <div className="mx-auto w-full max-w-7xl">
       
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B3808] mb-2">Get to know us</h2>
              <div className="w-20 h-0.5 bg-[#3B3808] mb-6"></div>
            </div>
            <h3 ref={textRef} className='text-[32px] lg:text-[40px] font-bold leading-[1.2] text-[#1a1a1a]'>
              {renderAnimatedText("We can help turn your ideas into reality!")}
            </h3>
            <p className="text-[#666666] leading-relaxed">
              Sunbrilo Technologies is an innovative IT solutions provider, offering a comprehensive suite of services to propel businesses into the digital age. we empower organizations to thrive in a dynamic technological landscape. Our dedicated team of professionals combines advanced technology with strategic insights to deliver solutions that enhance efficiency, boost productivity, and accelerate growth. Whether you need consultation, execution, or ongoing support, Sunbrilo Technologies is your trusted partner for success.
            </p>
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

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="relative h-[460px] w-full">
                <Image
                  src="/images/hero-img-2.png"
                  alt="Business"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/15" />

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 overflow-hidden h-[450px]">
                  <div className="relative animate-scroll-vertical" style={{ transform: 'translateY(-50%)' }}>
                    <div className="text-[120px] font-extrabold leading-none tracking-tight text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.55)] [writing-mode:vertical-rl] [text-orientation:mixed] [transform:rotate(180deg)] py-8 whitespace-nowrap">
                   /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  / 
                    </div>
                    <div className="text-[120px] font-extrabold leading-none tracking-tight text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.55)] [writing-mode:vertical-rl] [text-orientation:mixed] [transform:rotate(180deg)] py-8 whitespace-nowrap">
                   /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  /  SUNBRILO  / 
                    </div>
                  </div>
                  <style jsx>{`
                    @keyframes scroll-vertical {
                      0% { transform: translateY(-20%); }
                      100% { transform: translateY(0); }
                    }
                    .animate-scroll-vertical {
                      animation: scroll-vertical 30s linear infinite;
                    }
                  `}</style>
                </div>

                <div className="absolute bottom-3 left-3 rounded-lg border border-white/25 bg-white/15 p-3 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold text-white">
                      Business
                      <br />
                      Growth <span className="align-top text-xs">↗</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-end gap-2">
                    <div className="h-10 w-5 rounded-md bg-[#ffee50]/20" />
                    <div className="h-14 w-5 rounded-md bg-[#ffee50]/25" />
                    <div className="h-18 w-5 rounded-md bg-[#ffee50]/35" />
                    <div className="h-22 w-5 rounded-md bg-[#ffee50]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  