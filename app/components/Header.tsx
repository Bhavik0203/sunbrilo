'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollHeader, setShowScrollHeader] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show scroll header when:
      // 1. User has scrolled past hero section
      // 2. User is scrolling up (current < last)
      // 3. User is not at the top
      if (currentScrollY > heroHeight && currentScrollY < lastScrollY && currentScrollY > 100) {
        setShowScrollHeader(true);
      } else {
        setShowScrollHeader(false);
      }
      
      setLastScrollY(currentScrollY);
      setScrollPosition(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, heroHeight]);

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
    { name: 'About us', href: '/aboutus', hasDropdown: false },
    { 
      name: 'Services', 
      href: '/services', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Development & Testing', href: '/services/development-testing' },
        { name: 'Offshoring Services', href: '/services/offshoring-services'},
        { name: 'Managed IT Services', href: '/services/managed-it-services' },
        { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics'},
        { name: 'Implementation services', href: '/services/implementation-services'},
        { name: 'Cyber Security', href: '/services/cybersecurity'},
        { name: 'Monitoring and Support', href: '/services/monitoring-and-support'}
      
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      hasDropdown: true,
      dropdownItems: [
        // { name: 'Custom CRM Software', href: '/solutions' },
        { name: 'Cognitive Dining & Workforce', href: '/solutions/cognitive-dining-workforce-orchestration' },
        { name: 'Equipment Leasing Platform', href: '/solutions/equipment-leasing-platform' },
        { name: 'HRMS Empowering Workforce', href: '/solutions/hrms-empowering-your-workforce' },
        { name: 'Asset Performance Management', href: '/solutions/intelligent-asset-performance-management' },
        { name: 'Logistics & Supply Chain', href: '/solutions/logistic-and-supply-chain-solutions' },
        { name: 'Order Management', href: '/solutions/order-management' },
        { name: 'Remote Geofencing Attendance', href: '/solutions/remote-geofencing-attendance-system' },
        { name: 'Tablet Biometric Attendance', href: '/solutions/tablet-based-biometric-attendance-system' }
      ]
    },
    { name: 'Blog', href: '/blogs', hasDropdown: false },
    // { name: 'Career', href: '#', hasDropdown: false },
    { name: 'Contact us', href: '/contact-us', hasDropdown: false },
  ];

  return (
    <>
      {/* First Header - Only visible in Hero Section */}
      <header 
        className={`absolute top-2 left-0 w-full z-50 py-2 transition-all duration-500 ${
          scrollPosition > heroHeight ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between bg-blue/700 rounded-full py-3 px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/white-logo.png"
              alt="Sunbrilo Technologies"
              width={160}
              height={80}
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Navigation (Desktop) */}
          <nav className="hidden lg:flex space-x-8 relative">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link 
                  href={item.href} 
                  className="text-white text-base font-medium hover:text-[#ffee50] transition-colors duration-300 flex items-center font-raleway"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && openDropdown === item.name && scrollPosition <= heroHeight && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2  z-50"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="w-[750px] bg-[#0f172a] rounded-2xl shadow-2xl p-8 border border-gray-800">
                      <div className="grid grid-cols-4 gap-4">
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="group flex flex-col items-center justify-start text-center p-5 rounded-xl bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 border border-transparent hover:border-blue-500/50"
                          >
                           
                            <span className="text-white text-[13px] font-semibold font-raleway leading-snug">
                              {dropdownItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section (Search, Let's Talk, Mobile Toggle) */}
          <div className="flex items-center space-x-4">
          

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
      </div>
      </header>

      {/* Second Header - Fixed, appears when scrolling up (hidden in hero) */}
      <header 
        className={`fixed top-0 left-6 right-6 z-50 py-2 bg-[#3B3808] shadow-lg transition-transform duration-500 ${
          showScrollHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between rounded-full py-3 px-8 ">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/white-logo.png"
                alt="Sunbrilo Technologies"
                width={160}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Navigation (Desktop) */}
            <nav className="hidden lg:flex space-x-8 relative">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-white text-base font-medium hover:text-[#ffee50] transition-colors duration-300 flex items-center font-raleway"
                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                    onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && item.dropdownItems && openDropdown === item.name && showScrollHeader && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2  z-50"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="w-[750px] bg-[#0f172a] rounded-2xl shadow-2xl p-8 border border-gray-800">
                        <div className="grid grid-cols-4 gap-4">
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="group flex flex-col items-center justify-start text-center p-5 rounded-xl bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 border border-transparent hover:border-blue-500/50"
                            >
                         
                              <span className="text-white text-[13px] font-semibold font-raleway leading-snug">
                                {dropdownItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section (Search, Let's Talk) */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              {/* <button className="hidden lg:block p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button> */}

              {/* Let's Talk Button */}
              <button
                type="button"
                onClick={openModal}
                onMouseEnter={handleMouseEnter}
                className="group relative hidden overflow-hidden rounded-full bg-[#ffee50] px-2 py-1.5 text-[14px] font-semibold text-[#3B3808] transition-all md:block cursor-pointer font-raleway"
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
                <div className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
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
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-white text-lg font-medium hover:text-teal-400 transition-colors duration-300 flex items-center justify-between font-raleway">
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </Link>
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
    </>
  );
}
