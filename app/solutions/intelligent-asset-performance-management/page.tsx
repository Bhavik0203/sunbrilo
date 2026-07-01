'use client';
import FAQSection from '../../components/FAQSection';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import LetsTalkModal from '@/app/components/LetsTalkModal';

export default function LogisticsSolutionsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [activeFeature, setActiveFeature] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const start = windowHeight;
        const end = -elementHeight * 0.5;
        const progress = Math.max(0, Math.min(1, (start - elementTop) / (start - end)));
        setScrollProgress(progress);
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
            color: isHighlighted ? '#111827' : '#9ca3af',
          }}
        >
          {char}
        </span>
      );
    });
  };

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

  const features = [
    {
      step: '01',
      title: 'AI/ML Predictive Failure Modeling:',
      desc: 'We analyze multivariate sensor data to identify the earliest indicators of degradation. Our system moves past simple alerts to provide prescriptive recommendations-telling you what maintenance to perform, when, and why it maximizes asset lifespan, transforming Industrial IoT asset orchestration.',
      image: "/images/solutions/image 119.png"
    },
    {
      step: '02',
      title: 'Zero-Friction Work Order & Field Service Automation:',
      desc: 'Automatically trigger dynamic work orders, assigning tasks based on technician geospatial proximity, certification, and required tools. Technicians use intuitive, secure mobile interfaces to complete compliance logging, access AR-enabled diagnostics, and log resolution times instantly.',
      image: "/images/solutions/image 120.png",
    },
    {
      step: '03',
      title: 'Integrated Supply Chain & Inventory Optimization:',
      desc: 'Leverage machine learning to forecast precise spare parts demand based on predictive maintenance schedules, ensuring 100% availability of critical components while drastically reducing capital locked up in excess inventory and eliminating costly expedited shipping.',
      image: "/images/solutions/image 121.png",
    },
  ];
  return (
    <>
      <Head>
        <title>AI-Driven Asset Performance &amp; Maintenance 4.0 | Enterprise CMMS Solutions | Sunbrilo</title>
        <meta name="description" content="Transform capital asset risk into predictable value. Sunbrilo delivers Intelligent APM solutions powered by AI/ML for prescriptive maintenance, TCO optimization, and achieving Maintenance 4.0 standards." />
      </Head>

      <div className="min-h-screen">

        {/* ── Section 1: Hero ── */}
        <section className="relative min-h-[520px] py-24 px-4 text-white flex items-center justify-center">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/solutions/Asset Performance Management.jpg")' }}
          >
            <div className="absolute inset-0 bg-black/72" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 font-raleway">
              Intelligent Asset Performance: Engineering Maintenance 4.0.
            </h1>


            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={openModal}
                onMouseMove={handleMouseMove}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-8 py-4 text-base font-semibold text-[#3B3808] transition-all cursor-pointer font-raleway"
              >
                <span
                  className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                  style={{ left: `${mousePosition.x}%`, top: `${mousePosition.y}%`, width: '100px', height: '100px' }}
                />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                  Initiate a Predictive ROI Assessment
                </span>
              </button>

              {/* <button
                type="button"
                onMouseMove={handleMouseMove}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-white/50 px-8 py-4 text-base font-semibold text-white transition-all cursor-pointer font-raleway hover:border-[#ffee50] hover:text-[#ffee50]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download the Maintenance 4.0 Whitepaper
                </span>
              </button> */}
            </div>
          </div>
        </section>

        {/* ── Section 2: Enterprise Challenge & Solution ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 ref={textRef} className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-raleway">
                  {renderAnimatedText("From Cost Center to Strategic Asset Intelligence", scrollProgress)}</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4 font-raleway">
                  For asset-intensive enterprises (manufacturing, energy, infrastructure), unplanned downtime is not merely a technical failure; it is a critical erosion of shareholder value, market trust, and competitive agility. Traditional, reactive CMMS solutions merely track failures; they do not predict them, prevent them, or correlate them to the Strategic Total Cost of Ownership (TCO) optimization of your fleet.
                </p>
                <p className="text-base text-gray-600 leading-relaxed font-raleway">
                  Sunbrilo architects AI-driven predictive maintenance platforms designed for the highest level of industrial complexity. We unify siloed data-from SCADA, MES, and IoT streams-into a prescriptive intelligence layer. This enables your organization to execute next-gen enterprise CMMS solutions, ensuring every maintenance decision is financially optimized and performance-driven.
                </p>


              </div>

              <div className="relative h-[400px] lg:h-[500px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ffee50]/10 rounded-full -z-10" />
                <img
                  src="/images/solutions/image 114.png"
                  alt="Global logistics network"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Core Logistics Features ── */}
        <div className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 font-raleway">
                Prescriptive Intelligence for Unrivaled Uptime
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
                Our platform is engineered to deliver strategic outcomes across the entire asset lifecycle: </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
              {/* Left: Feature list */}
              <div className="flex flex-col gap-2">
                {features.map((item, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveFeature(index)}
                    className={`p-4 md:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${activeFeature === index ? 'bg-white border-[#ffee50] shadow-[0_8px_30px_rgba(255,238,80,0.15)] scale-[1.01]' : 'bg-zinc-50/50 border-transparent hover:bg-zinc-100/80'}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`text-xl font-bold transition-colors duration-300 mt-0.5 w-8 shrink-0 ${activeFeature === index ? 'text-[#ffee50]' : 'text-zinc-300'}`}>
                        {item.step}
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${activeFeature === index ? 'text-[#1a1a1a]' : 'text-zinc-500'}`}>
                          {item.title}
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Image */}
              <div className="w-full h-[380px] lg:h-auto rounded-[2rem] overflow-hidden relative shadow-2xl">
                {features.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 4: Integration Methodology ── */}
        <section className="py-24 px-4 bg-[#f5f3f3] relative overflow-hidden">
          {/* Decorative Background Elements */}
          {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#ffee50]/20 to-transparent blur-3xl" />
            <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tl from-[#ffee50]/10 to-transparent blur-3xl" />
          </div> */}

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

              {/* Left: Heading and Text (Sticky) */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 font-raleway">
                  Unified Asset View: Enabling Financial and Operational Coherence
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-raleway mb-8">
                  Our solution ensures that asset health directly informs financial reporting and long-term capital planning. We specialize in custom CMMS integrations that provide a single, unified data model.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {/* overlapping decorative circles */}
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center shadow-sm z-10">
                      <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-800 flex items-center justify-center shadow-sm z-20">
                      <svg className="w-5 h-5 text-[#ffee50]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-gray-900 font-raleway">
                    Seamless Data Flow <br /><span className="text-gray-500 font-medium">Across all platforms</span>
                  </div>
                </div>
              </div>

              {/* Right: Integration points (Interactive Cards) */}
              <div className="lg:col-span-7 space-y-6">

                {/* Card 1 */}
                <div className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ffee50]/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#3B3808] flex items-center justify-center group-hover:bg-[#ffee50] transition-colors duration-500 shadow-md">
                        <svg className="w-7 h-7 text-[#ffee50] group-hover:text-[#3B3808] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      {/* <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#3B3808]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div> */}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 font-raleway mb-3 group-hover:text-[#3B3808] transition-colors">ERP &amp; EAM Synchronization:</h3>
                    <p className="text-base text-gray-500 leading-relaxed font-raleway">
                      Achieve seamless two-way data flow with major EAM (IBM Maximo, SAP EAM) and ERP systems (SAP S/4HANA, Oracle), guaranteeing real-time synchronization of labor costs, depreciation data, and budget adherence for streamlined audits and capital planning.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ffee50]/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#3B3808] flex items-center justify-center group-hover:bg-[#ffee50] transition-colors duration-500 shadow-md">
                        <svg className="w-7 h-7 text-[#ffee50] group-hover:text-[#3B3808] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      {/* <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#3B3808]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div> */}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 font-raleway mb-3 group-hover:text-[#3B3808] transition-colors">Data Governance and Compliance: </h3>
                    <p className="text-base text-gray-500 leading-relaxed font-raleway">
                      The system provides full, auditable traceability for every maintenance event, part replacement, and compliance check, ensuring adherence to strict regulatory standards (e.g., ISO 55000, specialized industry regulations) across all global operating units.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: FAQ ── */}
        
<FAQSection category="Intelligent Asset Performance" />


        {/* ── Section 6: Final CTA ── */}
        <section className="py-24 px-4 bg-[#3B3808] text-white text-center relative overflow-hidden">


          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5 font-raleway">
              ecure Your Future Operational Performance.
            </h2>
            <p className="text-lg leading-relaxed mb-10 opacity-85 font-raleway max-w-2xl mx-auto">
              Partner with Sunbrilo to deploy an Intelligent Asset Performance Management solution that translates operational data into sustained financial outperformance and guaranteed uptime.
            </p>

            <button
              type="button"
              onClick={openModal}
              onMouseMove={handleMouseMove}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-10 py-5 text-lg font-bold text-[#3B3808] transition-all cursor-pointer font-raleway shadow-[0_0_40px_rgba(255,238,80,0.3)]"
            >
              <span
                className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                style={{ left: `${mousePosition.x}%`, top: `${mousePosition.y}%`, width: '100px', height: '100px' }}
              />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#3B3808]">
                Schedule a Technical Architecture Deep Dive
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </section>

      </div>

      {/* Modal */}
      <LetsTalkModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
