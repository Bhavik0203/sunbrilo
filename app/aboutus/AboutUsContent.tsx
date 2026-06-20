'use client';

import { useState, useRef, useEffect } from 'react';
import MissionVisionValues from '../components/aboutmissionvision';
import ExpertTeam from '../components/hometeam';
import OurApproach from '../components/OurApproach';
import Image from 'next/image';
import Link from 'next/link';
import LetsTalkModal from '@/app/components/LetsTalkModal';

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
const AnimatedCounter = ({ value }: { value: string }) => {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return <span>{value}</span>;

  const target = parseInt(match[1], 10);
  const suffix = match[2];

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          const duration = 2000;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function AboutUsContent() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollProgress2, setScrollProgress2] = useState(0);
  const [scrollProgress3, setScrollProgress3] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Handle first text element
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        const start = windowHeight;
        const end = -elementHeight * 0.5;
        const current = elementTop;
        const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));

        setScrollProgress(progress);
      }

      // Handle second text element
      if (textRef2.current) {
        const rect = textRef2.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        const start = windowHeight;
        const end = -elementHeight * 0.5;
        const current = elementTop;
        const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));

        setScrollProgress2(progress);
      }

      // Handle heading element
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        const start = windowHeight;
        const end = -elementHeight * 0.5;
        const current = elementTop;
        const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));

        setScrollProgress3(progress);
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
            color: isHighlighted ? '#4b5563' : '#d1d5db',
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div className="bg-[#f5f3f3]">
      {/* Section 1: The Vision - Hero Banner */}
      <section className="relative h-[440px] rounded-2xl m-4 overflow-hidden ">
        {/* Banner Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/aboutbanner.png")',
            }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-1 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12 xl:px-20 flex items-center justify-center">
            <div className="max-w-5xl text-center">
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-raleway">
                Co-Architecting Operational Dominance for Global Enterprise.
              </h1>

              {/* Sub-headline */}
              {/* <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-4xl mx-auto font-raleway">
                Sunbrilo Technologies was founded on a single conviction: that complex technical challenges deserve elegant, scalable, and secure solutions. As a premier global IT managed services company, we bridge the gap between visionary strategy and flawless engineering execution.
              </p> */}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary Button */}
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
                  <Link href="#team" className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                    <span>Meet Our Executive Leadership</span>
                    <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                      <ArrowUpRightIcon className="group-hover:hidden" />
                      <ArrowRightIcon className="hidden group-hover:block" />
                    </span>
                  </Link>
                </button>

                {/* Secondary Button */}
                {/* <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#3B3808] font-raleway">
                 Explore Our Governance Framework
                  <ArrowRightIcon />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-4 md:py-16 px-4 ">
        <div className="max-w-6xl mx-auto">

          {/* Top row: Bold heading + paragraph */}
          <div className="flex flex-col md:flex-row gap-10 items-start  ">
            <div className="md:w-[260px] shrink-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-raleway">
                Pune-Powered.<br />
                Globally Certified.

              </h2>
            </div>

            <div className="flex-1 border-b border-gray-200 pb-10">
              <p ref={textRef2} className="text-gray-600 leading-relaxed font-raleway" style={{ fontSize: '24px' }}>
                {renderAnimatedText("Operating from the strategic technology corridor of Pune, India, Sunbrilo has evolved into a high-velocity enterprise software engineering hub, serving clients across North America, EMEA, and APAC. We are not just vendors; we are digital architects committed to zero-friction scalability.", scrollProgress2)}
              </p>
            </div>
          </div>

          {/* Bottom row: two images + text */}
          <div className="flex flex-col md:flex-row gap-8 items-center pt-6">

            {/* Rectangular photo */}
            <div className="shrink-0 w-[200px] h-[140px] rounded-xl overflow-hidden">
              <img
                src="/images/about1.png"
                alt="Engineering team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Vertical line */}
            <div className="hidden md:block w-px h-30 bg-gray-300"></div>

            {/* Circular video with play icon */}
            <div className="shrink-0 w-[140px] h-[140px] rounded-full overflow-hidden relative cursor-pointer" onClick={() => {
              if (videoRef.current) {
                if (videoRef.current.paused) {
                  videoRef.current.play();
                  setIsVideoPlaying(true);
                } else {
                  videoRef.current.pause();
                  setIsVideoPlaying(false);
                }
              }
            }}>
              <video
                ref={videoRef}
                src="/images/aboutvedio.mp4"
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
              />
              {/* Play/Pause button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
                {isVideoPlaying ? (
                  // Pause icon
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  // Play icon
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </div>
            </div>

            {/* Vertical line */}
            <div className="hidden md:block w-px h-30 bg-gray-300"></div>

            {/* Body text */}
            <div className="flex-1">
              <p className="text-lg text-gray-600 pb-4 leading-relaxed max-w-4xl mx-auto font-raleway">
                We specialize in mission-critical environments from real-time data ingestion for logistics and PropTech to automated manufacturing and highly secure HRMS ecosystems. Our multidisciplinary team of enterprise architects, certified security experts, and senior developers is dedicated to one goal: ensuring your digital infrastructure is a perpetual source of revenue and competitive advantage.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: The Sunbrilo Pillars */}
      <section className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side - Heading and Description (Sticky) */}
            <div className="lg:w-2/6 lg:sticky lg:top-24 lg:h-fit">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-raleway">
                Principles of Precision: Our Non-Negotiable Standards
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-raleway">
                Our culture is defined by four non-negotiable principles that embed measurable value into every solution, ensuring predictable outcomes for your enterprise.
              </p>
            </div>

            {/* Right Side - Cards (Scrollable) */}
            <div className="lg:w-3/5 space-y-8">
              {/* Pillar 1 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3B3808] to-[#5A5A2A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#3B3808] to-[#5A5A2A] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 font-raleway">Design for Dominance (Architectural Integrity)</h3>
                      <p className="text-gray-600 leading-relaxed font-raleway">
                        We reject tactical fixes. We engineer composable, cloud-native architectures designed to process millions of transactions and guarantee years of sustainable growth without accumulating technical debt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3B3808] to-[#5A5A2A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#3B3808] to-[#5A5A2A] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 font-raleway">Data-Driven Transparency (Radical Visibility)</h3>
                      <p className="text-gray-600 leading-relaxed font-raleway">
                        Whether utilizing our agile offshore development center or our managed services, you receive 100% real-time visibility into performance metrics, CI/CD pipelines, and project accountability via client-standard toolchains.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3B3808] to-[#5A5A2A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#3B3808] to-[#5A5A2A] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 font-raleway">Defense by Default (Security-First Mindset)</h3>
                      <p className="text-gray-600 leading-relaxed font-raleway">
                        Security is the foundation, not an afterthought. We embed Zero-Trust principles, military-grade encryption, and compliance protocols (SOC 2, ISO) into the core of every deployment, protecting your intellectual property.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3B3808] to-[#5A5A2A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#3B3808] to-[#5A5A2A] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 font-raleway">Deliberate Innovation (Relentless Agility)</h3>
                      <p className="text-gray-600 leading-relaxed font-raleway">
                        The technology landscape is fluid. We mandate continuous upskilling in high-impact domains-AI, GenAI, Machine Learning, and Serverless-to ensure your business remains perpetually ahead of the competitive curve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-0 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row min-h-[480px]">

          {/* Left: Photo */}
          <div className="relative md:w-[45%] min-h-[320px] md:min-h-full overflow-hidden">
            <Image
              src="/images/services/image 28.png"
              alt="Team collaborating"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="flex-1  px-10 py-2">


            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-raleway">
              The Strategic Advantage of True Partnership
            </h2>
            <p className="text-lg text-gray-600 pb-4 leading-relaxed max-w-4xl mx-auto font-raleway">
              International brands choose Sunbrilo because we transcend the traditional outsourcing model. We operate as a seamless, high-caliber extension of your internal team and strategic vision.
            </p>

            {/* Item 1 */}
            <div className="border-t border-[#c5cec9] pt-5 mb-5 flex gap-4 items-start">
              <div className="w-12 h-12 min-w-[48px] bg-[#1a2a24] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1 font-raleway">Elite Technical Talent (Top 1%)</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-raleway">
                  We leverage rigorous proprietary vetting to source the top 1% of engineering talent in Pune, specializing in high-demand stacks: React, Node.js, Python, and Multi-Cloud Architecture (AWS/Azure/GCP).
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="border-t border-[#c5cec9] pt-5 mb-5 flex gap-4 items-start">
              <div className="w-12 h-12 min-w-[48px] bg-[#1a2a24] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1 font-raleway">Time-Zone Optimized Delivery</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-raleway">
                  We align core operational hours with global markets to ensure synchronous, real-time collaboration, daily stand-ups, and frictionless communication with your headquarters.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="border-t border-[#c5cec9] pt-5 flex gap-4 items-start">
              <div className="w-12 h-12 min-w-[48px] bg-[#1a2a24] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1 font-raleway">End-to-End Strategic Ownership</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-raleway">
                  From initial discovery and architectural blueprinting to post-launch 24/7 IT monitoring and support, we assume full, documented accountability for the successful business outcome of your digital product roadmap.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: Our Global Footprint */}

      <section className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto mb-16 ">

          {/* Top: heading + body */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-raleway">
                Your Global Digital Transformation Partner
              </h2>
            </div>

            <div className="w-full md:w-2/3 md:pt-2">
              <p className="text-lg text-gray-600 pb-8 leading-relaxed font-raleway">
                From optimizing complex multi-project property management for Pune-based real estate giants to architecting hyper-scale cloud infrastructure for NASDAQ-listed US logistics firms, our certified impact is global. We are not a vendor; we are a digital transformation partner committed to ensuring your long-term technological and financial success.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-200 pt-8 gap-y-8">
                {[
                  { value: "10+", label: "Countries served" },
                  { value: "50+", label: "Projects delivered" },
                  { value: "3", label: "Continents" },
                  { value: "24/7", label: "Support coverage" },
                ].map(({ value, label }, index) => (
                  <div
                    key={label}
                    className={`flex flex-col items-center md:items-start text-center md:text-left border-gray-200 md:pl-6 md:first:pl-0
                ${index % 2 === 0 ? 'border-r pr-4' : 'pl-4 md:pr-4'} 
                md:border-r last:border-r-0 md:last:border-r-0
              `}
                  >
                    <p className="text-3xl font-bold text-[#3B3808] font-raleway"><AnimatedCounter value={value} /></p>
                    <p className="text-sm text-gray-600 mt-1 font-raleway font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Region columns */}


          {/* Stats bar */}


        </div>
        <div id='team'>
          <ExpertTeam />
        </div>
      </section>
      {/* Section 6: CTA */}

      <section className="pt-10 pb-20 px-4 bg-[#f5f3f3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images */}


            {/* Right Side - Content */}
            <div className="lg:pl-8">
              <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold leading-tight font-raleway mb-6">
                {renderAnimatedText("Let's Engineer Your Next Competitive Advantage.", scrollProgress3)}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-raleway">
                Whether you need to scale your engineering team or migrate your entire infrastructure to the cloud, Sunbrilo has the expertise to make it happen.
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
                <div className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                  <span>Start a Conversation with Our Experts</span>
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


      {/* Existing Components */}
      {/* <MissionVisionValues/>
      <ExpertTeam/>
      <OurApproach/> */}

      {/* Modal */}
      <LetsTalkModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
