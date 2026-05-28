'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CaseStudiesPage from './section3';
import Image from 'next/image';
import QualityEngineering from './core';

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
  const [openFAQ, setOpenFAQ] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? 0 : index);
  };

  const faqs = [
    {
      question: "Which cloud platforms does Sunbrilo specialize in?",
      answer: " Sunbrilo provides expert AWS Azure migration for enterprises, as well as deep architectural consulting for Google Cloud Platform (GCP). We are platform-agnostic, recommending the best environment for your specific technical requirements."
    },
    {
      question: "How do you ensure data security during a cloud migration?",
      answer: "We utilize end-to-end encryption (both in transit and at rest), automated vulnerability scanning, and isolated sandbox staging environments. This ensures your data remains completely secure and structurally intact throughout the entire migration process."
    },
    {
      question: "Can you help lower our existing AWS or Azure bills?",
      answer: "Absolutely. Through our FinOps and cloud cost optimization services, we identify zombie assets, underutilized instances, and inefficient storage tiers, often reducing enterprise cloud spending by 30% to 50% without sacrificing performance."
    }
  ];

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
              backgroundImage: 'url("/images/services/Cloud Solutions.jpg")',
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-raleway">
              Cloud Continuum Orchestration: Architecting Resilience and Exponential Scale.
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
                Book a Cloud Assessment
                    {/* <ArrowUpRightIcon className="group-hover:hidden" />
                    <ArrowRightIcon className="hidden group-hover:block" /> */}
                  </span>
                </button>
                {/* <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-[#3B3808] transition-all font-raleway">
               Explore Migration Strategies
                 
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
                  High Availability.<br />Zero Downtime Guarantee.<br/>100% Compliance.
                </h2>
                <p className="text-base leading-relaxed text-gray-600 mb-6 font-raleway">
             For modern enterprises, seconds of downtime translate to massive revenue loss and damaged brand reputation. Moving to the cloud or restructuring existing cloud assets requires meticulous planning to prevent data corruption, security vulnerabilities, and budget overruns.
             </p>
               <p className="text-base leading-relaxed text-gray-600 mb-6 font-raleway">
             Sunbrilo executes cloud architecture and migration consulting as a strategic infrastructure refactoring. We reject the high-risk "lift and shift" model. Instead, we re-engineer your application portfolio for true cloud-native performance, ensuring regulatory compliance, guaranteed 99.99% uptime, and aligning your entire IT infrastructure with your strategic global scaling mandate.
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
                    src="/images/services/service1.png"
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
                    src="/images/services/service2.png"
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


<QualityEngineering/>


        {/* Section 5: FAQ */}
        <section className="py-20 px-4 bg-[#f5f3f3]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">

              {/* Left: Image + CTA Card */}
             

              {/* Right: FAQ Accordion */}
              <div className="flex-1 space-y-3 md:pt-0 pt-8">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-base font-bold text-gray-900 font-raleway pr-4">
                        {faq.question}
                      </span>
                      {/* Circle +/- icon */}
                      <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#2a8a8a] flex items-center justify-center">
                        {openFAQ === index ? (
                          <svg className="w-4 h-4 text-[#2a8a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-[#2a8a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {openFAQ === index && (
                      <>
                        {/* Dashed divider */}
                        <div className="mx-6 border-t border-dashed border-gray-300" />
                        <div className="px-6 py-5">
                          <p className="text-gray-500 leading-relaxed font-raleway text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
                 <div className="relative w-full md:w-[420px] flex-shrink-0 rounded-2xl overflow-visible">
                {/* Main Image */}
                <div className="rounded-2xl overflow-hidden w-full h-[360px] relative">
                  <img
                    src="/images/faq.png"
                    alt="Professional"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60"></div>
                  {/* Overlay text */}
                  <div className="absolute top-6 left-6">
                    <h2 className="text-white font-bold text-3xl leading-tight font-raleway drop-shadow-lg">
                      Need Help? Start<br />Here..
                    </h2>
                  </div>
                </div>

                {/* Teal CTA Card — overlaps image bottom-right */}
                <div
                  className="absolute bottom-0 right-0 translate-x-4 translate-y-6 bg-[#2a8a8a] rounded-2xl p-6 w-52 z-10 shadow-xl"
                >
                  <p className="text-white font-bold text-lg font-raleway leading-snug mb-4">
                    Get Started<br />Free Call?
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      {/* Phone icon */}
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a href="tel:18884521505" className="text-white font-semibold text-sm underline font-raleway">
                      1-888-452-1505
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section className="py-20 px-4 bg-[#f5f3f3]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Images */}


              {/* Right Side - Content */}
              <div className="lg:pl-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight font-raleway mb-6 text-gray-900">
              Ready to Modernize Your Infrastructure?
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-8 font-raleway">
             Partner with certified cloud architects to build a secure, resilient, and cost-effective digital foundation for your enterprise.
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
                    <span>Schedule a Free Cloud Readiness Audit</span>
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
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
              <button type="submit" className="w-full bg-[#ffee50] text-[#3B3808] font-bold py-3 rounded-lg hover:bg-[#ffe500] transition-colors mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
