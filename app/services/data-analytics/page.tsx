'use client';
import FAQSection from '../../components/FAQSection';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CaseStudiesPage from './section3';
import Image from 'next/image';
import QualityEngineering from './core';
import LetsTalkModal from '@/app/components/LetsTalkModal';

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default function DevelopmentTestingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
    setIsModalOpen(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };
  return (
    <>
      <Head>
        <title> Next-Generation Software Engineering & Quality Assurance.</title>
        <meta name="description" content="Partner with a top B2B software development agency in India. Sunbrilo delivers scalable web and mobile app development alongside rigorous offshore QA testing services." />
        <meta name="keywords" content="Custom enterprise software development, Offshore QA and software testing services, B2B software development agency India, Scalable web and mobile app development, Enterprise API integration" />
      </Head>

      <div className="min-h-screen">
        {/* Section 1: Hero */}
        <section className="relative min-h-[500px] py-20 px-4 text-white flex items-center justify-center">
          {/* Background Image Container */}
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/images/services/Data Analytics.jpg")',
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-raleway">
                Driving Enterprise Value with Scalable Data & AI Transformation.
              </h1>
              {/* <p className="text-xl leading-relaxed mb-10 max-w-4xl mx-auto opacity-90 font-raleway">
                We engineer resilient, high-performance applications tailored to your exact market demands. From complex backend architecture to intuitive front-end UX, our scalable web and mobile app development ensures your digital product is built for global scale and zero downtime.
              </p> */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={openModal}
                  onMouseMove={handleMouseMove}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-8 py-4 text-base font-semibold text-[#3B3808] transition-all cursor-pointer font-raleway"
                >
                  <span
                    className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                    style={{
                      left: `${mousePosition.x}%`,
                      top: `${mousePosition.y}%`,
                      width: "100px",
                      height: "100px",
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                    Unlock Your Data's Potential
                    {/* <ArrowUpRightIcon className="group-hover:hidden" />
                    <ArrowRightIcon className="hidden group-hover:block" /> */}
                  </span>
                </button>
                {/* <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-[#3B3808] transition-all font-raleway">
                Explore Our AI Capabilities
                 
                </button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Enterprise Challenge & Solution */}
        <section className="py-20 px-6 bg-[#f5f3f3]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* LEFT: Heading + Text */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 font-raleway">
                  From Data Fragmentation to<br />Intelligent Digital Acceleration.
                </h2>
                <p className="text-base leading-relaxed text-gray-600 mb-6 font-raleway">
                  The competitive global landscape demands immediate data liquidity. Unstructured, siloed data acts as a critical choke point, obstructing strategic planning and delaying time-to-market. Sunbrilo, an AI data analytics consulting firm, provides end-to-end modernization. We architect hyper-scalable data platforms that unify operational, customer, and market data, integrating advanced analytics (Predictive analytics consulting) to establish a continuous feedback loop that drives institutional intelligence, not mere reporting.
                </p>
              </div>

              {/* RIGHT: Two staggered overlapping images */}
              <div className="relative h-[380px] lg:h-[420px]">
                {/* Top-left larger image */}
                <div
                  className="absolute top-0 left-0 w-[72%] h-[78%] rounded-2xl overflow-hidden shadow-xl"
                  style={{ zIndex: 1 }}
                >
                  <img
                    src="/images/services/image 53.png"
                    alt="Software development team"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom-right smaller image */}
                <div
                  className="absolute bottom-0 right-0 w-[56%] h-[48%] rounded-2xl overflow-hidden shadow-2xl"
                  style={{ zIndex: 2, border: '4px solid #ffffff' }}
                >
                  <img
                    src="/images/services/image 54.png"
                    alt="Quality assurance testing"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative accent dot grid */}
                <div
                  className="absolute -bottom-4 left-4 w-24 h-24 pointer-events-none"
                  style={{ zIndex: 0 }}
                >
                  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
                    {[0, 16, 32, 48, 64, 80].map(x =>
                      [0, 16, 32, 48, 64, 80].map(y => (
                        <circle key={`${x}-${y}`} cx={x + 8} cy={y + 8} r="2.5" fill="#5BA3E8" fillOpacity="0.25" />
                      ))
                    )}
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </section>




        <CaseStudiesPage />


        <QualityEngineering />


        {/* Section 5: FAQ */}
        
<FAQSection category="Data Analytics" />


        <section className="py-20 px-4 bg-[#f5f3f3]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Images */}


              {/* Right Side - Content */}
              <div className="lg:pl-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight font-raleway mb-6 text-gray-900">
                  Future-Proof Your Enterprise: Initiate Your Data & AI Transformation.
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-8 font-raleway">
                  The window for digital advantage is closing. Engage with our elite team of data scientists and certified AI engineers to engineer the cognitive backbone your enterprise needs to dominate its sector.
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
                    <span>Schedule a Data Architecture Audit</span>
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
                    src="/images/services/image 61.png"
                    alt="Team Collaboration"
                    className="w-full h-[400px] object-cover"
                  />
                  {/* Tech overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B3808]/20 to-transparent"></div>
                </div>

                {/* Circular Tech Icons Image - positioned overlapping */}
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full overflow-hidden  border-white">
                  <img
                    src="/images/services/image 62.png"
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

      {/* Modal */}
      <LetsTalkModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
