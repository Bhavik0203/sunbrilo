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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const [scrollProgress1, setScrollProgress1] = useState(0);
  const [scrollProgress2, setScrollProgress2] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      if (textRef1.current) {
        const rect1 = textRef1.current.getBoundingClientRect();
        const elementTop1 = rect1.top;
        const elementHeight1 = rect1.height;
        const start1 = windowHeight;
        const end1 = -elementHeight1 * 0.5;
        const progress1 = Math.max(0, Math.min(1, (start1 - elementTop1) / (start1 - end1)));
        setScrollProgress1(progress1);
      }

      if (textRef2.current) {
        const rect2 = textRef2.current.getBoundingClientRect();
        const elementTop2 = rect2.top;
        const elementHeight2 = rect2.height;
        const start2 = windowHeight;
        const end2 = -elementHeight2 * 0.5;
        const progress2 = Math.max(0, Math.min(1, (start2 - elementTop2) / (start2 - end2)));
        setScrollProgress2(progress2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderAnimatedText = (text: string, progress: number) => {
    const totalChars = text.length;
    return text.split('').map((char, index) => {
      const charThreshold = index / totalChars;
      const isHighlighted = progress > charThreshold;

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
      <section className="py-4 md:py-16 px-4 bg-[#f5f3f3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images */}
            <div className="relative hidden lg:block">
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
              <h2 ref={textRef1} className="text-4xl md:text-5xl font-bold leading-tight font-raleway mb-6">
                {renderAnimatedText("Comprehensive Digital Solutions for the Modern Enterprise.", scrollProgress1)}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-raleway">
                From strategic consulting to complex implementation and managed services, Sunbrilo delivers end-to-end capabilities that drive sustainable growth and operational dominance.
              </p>

              {/* CTA Button */}
              <button
                type="button"
                onClick={openModal}
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
                  <span>Partner with Sunbrilo</span>
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
      <section className="py-4 md:py-16 px-4 bg-[#f5f3f3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">
              The Architecture of Success
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
              As a strategic partner, we ensure technology investments translate directly to business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Methodology 1 */}
            <div className="bg-[#E8F4FD] p-5  border-r-3 border-b-3 border-[#5BA3E8]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#5BA3E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 font-raleway">Agile by Design</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-raleway text-sm">
                High-velocity sprints mapped to global time zones for continuous, 24/7 innovation and delivery.
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
                <h3 className="text-sm font-bold text-gray-900 font-raleway">Zero-Trust Security &amp; Compliance</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-raleway text-sm">
                Military-grade cybersecurity embedded at the core of our CI/CD pipelines, ensuring global regulatory adherence.
              </p>
            </div>

            {/* Methodology 3 */}
            <div className="bg-[#E8F4FD] p-5 border-r-3 border-b-3 border-[#5BA3E8]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#5BA3E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 font-raleway">Future-Ready Scalability</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-raleway text-sm">
                Every line of code and cloud architecture is designed to handle exponential growth and technological shifts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <EnterpriseCapabilities />


      {/* Section 4: Flexible Engagement Models */}
      <section className="py-4 md:py-16 px-4 bg-white max-w-6xl mx-auto px-10 shadow-2xl">

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
              <h2 ref={textRef2} className="text-4xl md:text-5xl font-bold leading-tight font-raleway mb-6">
                {renderAnimatedText("Stop Settling for Off-the-Shelf Limitations.", scrollProgress2)}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-raleway">
                Partner with an end-to-end IT solutions provider that understands the complexities of massive global scale.
              </p>

              {/* CTA Button */}
              <button
                type="button"
                onClick={openModal}
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
                <div className="relative z-10 cursor-pointer flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                  <span>Book a Free IT Audit</span>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-[#0f172a] rounded-2xl w-full max-w-lg p-8 relative border border-gray-800 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h2 className="text-3xl font-bold text-white mb-6 font-raleway">Let's Talk</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = '/thank-you'; }}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input type="text" required className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#ffee50] focus:ring-1 focus:ring-[#ffee50] transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input type="email" required className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#ffee50] focus:ring-1 focus:ring-[#ffee50] transition-colors" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  required
                  pattern="\d{10}"
                  maxLength={10}
                  title="Mobile number must be exactly 10 digits"
                  onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '') }}
                  className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#ffee50] focus:ring-1 focus:ring-[#ffee50] transition-colors"
                  placeholder="10-digit Mobile Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea rows={2} required className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#ffee50] focus:ring-1 focus:ring-[#ffee50] transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <div className="flex items-start mt-2">
                <input type="checkbox" id="consent" required className="mt-1 mr-2 bg-[#1e293b] border border-gray-700 rounded text-[#ffee50] focus:ring-1 focus:ring-[#ffee50]" />
                <label htmlFor="consent" className="text-sm text-gray-300 leading-tight">
                  I consent to the collection and processing of my details to respond to my inquiry.
                </label>
              </div>
              <button type="submit" className="w-full cursor-pointer bg-[#ffee50] text-[#3B3808] font-bold py-3 rounded-lg hover:bg-[#ffe500] transition-colors mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
