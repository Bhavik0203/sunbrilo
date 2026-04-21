'use client';

import { useState } from 'react';
import Image from 'next/image';

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

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navItems = [
    { name: 'About us', href: '#', hasDropdown: true },
    { name: 'Services', href: '#', hasDropdown: false },
    { name: 'Our Solutions', href: '#', hasDropdown: false },
    { name: 'News & Articles', href: '#', hasDropdown: false },
    { name: 'Career', href: '#', hasDropdown: false },
    { name: 'Contact us', href: '#', hasDropdown: false },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 mt-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between bg-blue/700 rounded-full py-3 px-8 ">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/white-logo.png"
              alt="Sunbrilo Technologies"
              width={160}
              height={80}
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-white text-base font-medium hover:text-[#ffee50] transition-colors duration-300 flex items-center font-raleway">
                {item.name}
                {item.hasDropdown && (
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                )}
              </a>
            ))}
          </nav>

          {/* Right Section (Search, Let's Talk, Mobile Toggle) */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="hidden lg:block p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>

            {/* Let's Talk Button */}
            <button
              type="button"
              onClick={openModal}
              onMouseEnter={handleMouseEnter}
              className="group relative hidden overflow-hidden rounded-full bg-[#ffee50] px-2 py-1.5 text-[14px] font-semibold text-[#3B3808]  transition-all md:block cursor-pointer font-raleway"
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
                <span className="ml-2">Let's Talk</span>
                <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808] md:h-[26px] md:w-[26px]">
                  <ArrowUpRightIcon className="group-hover:hidden" />
                  <ArrowRightIcon className="hidden group-hover:block" />
                </span>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-white text-lg font-medium hover:text-teal-400 transition-colors duration-300 flex items-center justify-between font-raleway">
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <button
                  type="button"
                  onClick={openModal}
                  onMouseEnter={handleMouseEnter}
                  className="w-full group relative overflow-hidden rounded-full bg-[#ffee50] px-2 py-1.5 text-[14px] font-semibold text-[#3B3808] group-hover:bg-[#3B3808] group-hover:text-[#ffee50] transition-all cursor-pointer font-raleway"
                >
                  <span
                    className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0c1622] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                    style={{
                      left: "var(--mouse-x, 50%)",
                      top: "var(--mouse-y, 50%)",
                      width: "100px",
                      height: "100px",
                    }}
                  />
                  <div className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 group-hover:text-[#3B3808]">
                    <span>let's talk</span>
                    <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                      <ArrowUpRightIcon className="group-hover:hidden" />
                      <ArrowRightIcon className="hidden group-hover:block" />
                    </span>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
