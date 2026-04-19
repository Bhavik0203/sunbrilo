'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';


const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 ${className || ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
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
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
   <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);
export default function GetToKnowUs() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };
  
    const openModal = () => {
      // Add modal functionality here
      console.log('Opening modal...');
    };
  
  const textRef = useRef<HTMLParagraphElement>(null);
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
       

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
             <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B3808]">GET TO KNOW US</h2>
        </div>
            <div className="relative rounded-2xl bg-[#dbe7e6] p-6 shadow-sm">
              <div className="relative">
                <p className="text-[54px] font-bold leading-[1.02]  text-[#0c1a1a]">
                  <span className="block">We can</span>
                  <span className="block">help turn</span>
                  <span className="block">your </span>
                  <span className="block">ideas into</span>
                  <span className="block">reality!</span>
                </p>

                <div className="absolute right-10 top-1/2 -translate-y-1/2">
                  <div className="relative h-10 w-20 overflow-hidden rounded-lg">
                    <Image
                      src="/images/bg2.png"
                      alt="Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
              <button
              type="button"
              onClick={openModal}
              onMouseEnter={handleMouseEnter}
              className="group relative hidden overflow-hidden rounded-full bg-[#ffee50] px-2 py-1.5 mt-4 text-[14px] font-semibold text-[#3B3808]  transition-all md:block cursor-pointer"
            >
              <span
                className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                style={{
                  left: "var(--mouse-x, 50%)",
                  top: "var(--mouse-y, 50%)",
                  width: "100px",
                  height: "100px",
                }}
              />
              <div className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50] ">
                <span className="ml-2">let's talk</span>
                <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808] md:h-[42px] md:w-[42px]">
                  <ArrowUpRightIcon className="group-hover:hidden" />
                  <ArrowRightIcon className="hidden group-hover:block" />
                </span>
              </div>
            </button>
          </div>

          <div className="lg:col-span-4">
            <div className="">
             <p ref={textRef} className='text-[26px] font-bold leading-[1.4] mb-4 w-[400px]'>
               {renderAnimatedText("Sunbrilo Technologies is an innovative IT solutions provider, offering a comprehensive suite of services to propel businesses into the digital age. we empower organizations to thrive in a dynamic technological landscape.")}
             </p>
             <p className='w-[400px]'>
              Our dedicated team of professionals combines advanced technology with strategic insights to deliver solutions that enhance efficiency, boost productivity, and accelerate growth. Whether you need consultation, execution, or ongoing support, Sunbrilo Technologies is your trusted partner for success.
             </p>
            </div>
          </div>

          <div className="relative lg:col-span-5">
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
