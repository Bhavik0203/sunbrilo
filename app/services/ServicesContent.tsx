'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import EnterpriseCapabilities from './servicesmain';

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

export default function ServicesContent() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
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
            color: isHighlighted ? '#1a1a1a' : '#9ca3af',
          }}
        >
          {char}
        </span>
      );
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="bg-[#f5f3f3]">
      {/* Section 1: The Hero */}
       {/* ── Hero Banner ─────────────────────────────────────────────── */}
             <section className="relative overflow-hidden rounded-2xl m-4">
               <div className="relative h-[260px] w-full md:h-[420px]">
                 <Image
                   src="/images/services/servicesbanner.png"
                   alt="Blog banner"
                   fill
                   priority
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-black/70" />
               </div>
     
               <div className="absolute inset-0 flex items-center">
                 <div className="w-full px-6">
                   <div className="mx-auto w-full max-w-7xl">
                     <div className="max-w-3xl">
                       <div className="text-sm font-semibold tracking-[0.2em] text-[#ffee50]">
                         Home / Services
                       </div>
                       <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl font-raleway">
                         Services
                       </h1>
                     </div>
                   </div>
                 </div>
               </div>
             </section>

      {/* Hero Section - Two Column Layout */}
      <section className="py-20 px-4 bg-[#f5f3f3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden ">
                <img
                  src="/images/services/servicemain2.png"
                  alt="Team Collaboration"
                  className="w-full h-[400px] object-cover"
                />
                {/* Tech overlay pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B3808]/20 to-transparent"></div>
              </div>
              
              {/* Circular Tech Icons Image - positioned overlapping */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full overflow-hidden  border-white">
                <img
                src="/images/services/servicemain1.png"
                  alt="Technology Icons"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Small accent element */}
              {/* <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#ffee50] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-[#3B3808]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div> */}
            </div>

            {/* Right Side - Content */}
            <div className="lg:pl-8">
              <h2 ref={textRef} className="text-4xl md:text-5xl font-bold leading-tight font-raleway mb-6">
                {renderAnimatedText("End-to-End Technology Solutions for Global Scale.")}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-raleway">
                We don't just write code; we architect operational dominance. As a leading custom IT services company, Sunbrilo partners with global enterprises to design, deploy, and manage mission-critical technology ecosystems.
              </p>
              
              {/* CTA Button */}
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
                  <span>Discuss Your IT Requirements</span>
                  <span className="relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                    <ArrowUpRightIcon className="group-hover:hidden" />
                    <ArrowRightIcon className="hidden group-hover:block" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Sunbrilo Methodology */}
      <section className="py-20 px-4 bg-[#f5f3f3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">
              How We Deliver Engineering Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
              When you partner with a global IT managed services provider, you expect more than just technical proficiency. You expect strategic alignment. Our delivery models are built for zero friction and maximum ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Methodology 1 */}
            <div className="bg-[#E8F4FD] p-5  border-r-3 border-b-3 border-[#5BA3E8]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#5BA3E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 font-raleway">Cloud-Native Scalability</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-raleway text-sm">
                Every solution we build is designed to scale effortlessly from thousands to millions of concurrent users.
              </p>
            </div>

            {/* Methodology 2 */}
            <div className="bg-[#E8F4FD] p-5 border-r-3 border-b-3 border-[#5BA3E8]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#5BA3E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 font-raleway">Ironclad Security & Compliance</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-raleway text-sm">
                We embed advanced cybersecurity protocols into our CI/CD pipelines, ensuring strict adherence to global data standards (SOC2, GDPR, HIPAA).
              </p>
            </div>

            {/* Methodology 3 */}
            <div className="bg-[#E8F4FD] p-5 border-r-3 border-b-3 border-[#5BA3E8]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#5BA3E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 font-raleway">High-Velocity Agile Delivery</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-raleway text-sm">
                We utilize overlapping global time zones and rigorous sprint cycles to accelerate your time-to-market.
              </p>
            </div>
          </div>
        </div>
      </section>
      <EnterpriseCapabilities/>
     

      {/* Section 4: Flexible Engagement Models */}
      <section className="py-20 px-4 bg-white max-w-6xl mx-auto px-10 shadow-2xl">
        
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-raleway">
              Engagement Models Tailored to Your Roadmap
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl font-raleway">
              Whether you need a turnkey solution or extra hands on deck, we adapt to your operational structure.
            </p>
          </div>
          
          {/* Timeline Container */}
          <div className="relative ">
            {/* Vertical Line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-16">
              {/* Model 1 */}
              <div className="relative flex items-start gap-10 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-[#5BA3E8] flex-shrink-0 mt-2 group-hover:bg-[#3B3808] group-hover:scale-125 transition-all duration-300"></div>
                
                {/* Content Card */}
                <div className="flex-1 bg-gradient-to-r from-[#E8F4FD] to-white p-5 rounded-lg border-r-2 border-b-2 border-[#5BA3E8] flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1 font-raleway">Dedicated Tech Pods</h3>
                    <p className="text-xs text-[#5BA3E8] font-semibold mb-2 font-raleway">Best for continuous development</p>
                    <p className="text-gray-600 leading-relaxed text-sm font-raleway">
                      An exclusive, hand-picked team of offshore engineers and project managers working solely on your product.
                    </p>
                  </div>
                  {/* Hover Image */}
                <div className="absolute right-8 -top-8 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-3 z-20">
                    <Image 
                      src="/images/services/hover.png" 
                      alt="Dedicated Tech Pod" 
                      fill 
                      className="object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Model 2 */}
              <div className="relative flex items-start gap-10 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-[#5BA3E8] flex-shrink-0 mt-2 group-hover:bg-[#3B3808] group-hover:scale-125 transition-all duration-300"></div>
                
                {/* Content Card */}
                <div className="flex-1 bg-gradient-to-r from-[#E8F4FD] to-white p-5 rounded-lg border-r-2 border-b-2 border-[#5BA3E8] flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1 font-raleway">Project-Based Delivery</h3>
                    <p className="text-xs text-[#5BA3E8] font-semibold mb-2 font-raleway">Best for defined scopes</p>
                    <p className="text-gray-600 leading-relaxed text-sm font-raleway">
                      We take full ownership of the project from the initial architecture draft to the final QA testing and launch.
                    </p>
                  </div>
                  {/* Hover Image */}
                  <div className="absolute right-8 -top-8 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-3 z-20">
                    <Image 
                       src="/images/services/hover2.png" 
                      alt="Dedicated Tech Pod" 
                      fill 
                      className="object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Model 3 */}
              <div className="relative flex items-start gap-10 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-[#5BA3E8] flex-shrink-0 mt-2 group-hover:bg-[#3B3808] group-hover:scale-125 transition-all duration-300"></div>
                
                {/* Content Card */}
                <div className="flex-1 bg-gradient-to-r from-[#E8F4FD] to-white p-5 rounded-lg border-r-2 border-b-2 border-[#5BA3E8] flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1 font-raleway">IT Strategy Consulting</h3>
                    <p className="text-xs text-[#5BA3E8] font-semibold mb-2 font-raleway">Best for digital roadmapping</p>
                    <p className="text-gray-600 leading-relaxed text-sm font-raleway">
                      Let our senior enterprise architects audit your legacy systems and design a modernization strategy.
                    </p>
                  </div>
                  {/* Hover Image */}
                   <div className="absolute right-8 -top-8 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-3 z-20">
                    <Image 
                       src="/images/services/hover1.png" 
                      alt="Dedicated Tech Pod" 
                      fill 
                      className="object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </section>

      

      {/* Section 5: CTA */}
     

                <section className="py-20 px-4 bg-[#f5f3f3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images */}
          

            {/* Right Side - Content */}
            <div className="lg:pl-8">
              <h2 ref={textRef} className="text-4xl md:text-5xl font-bold leading-tight font-raleway mb-6">
                {renderAnimatedText("Stop Settling for Off-the-Shelf Limitations.")}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-raleway">
                 Partner with an end-to-end IT solutions provider that understands the complexities of massive global scale.
          </p>
              
              {/* CTA Button */}
              <button
            type="button"
            onMouseMove={handleMouseMove}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-8 py-4 text-base font-semibold text-[#3B3808] transition-all cursor-pointer font-raleway"
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
              <span>Book a Free Technical Architecture Audit</span>
              <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                <ArrowUpRightIcon className="group-hover:hidden" />
                <ArrowRightIcon className="hidden group-hover:block" />
              </span>
            </div>
          </button>
            </div>
              <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden ">
                <img
                  src="/images/services/servicemain2.png"
                  alt="Team Collaboration"
                  className="w-full h-[400px] object-cover"
                />
                {/* Tech overlay pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B3808]/20 to-transparent"></div>
              </div>
              
              {/* Circular Tech Icons Image - positioned overlapping */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full overflow-hidden  border-white">
                <img
                src="/images/services/servicemain1.png"
                  alt="Technology Icons"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Small accent element */}
              {/* <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#ffee50] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-[#3B3808]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
