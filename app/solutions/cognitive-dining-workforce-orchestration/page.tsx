'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function LogisticsSolutionsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
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

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
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
      title: 'Advanced Cashless & Biometric Authentication:',
      desc: 'Guarantee ultra-secure and high-speed throughput. The platform supports federated authentication methods including SSO, mobile QR, and enterprise-grade biometric recognition, ensuring full integration with employee lifecycle management.',
      image: "/images/solutions/image 101.png",
    },
    {
      step: '02',
      title: 'AI-Driven Demand Forecasting & Waste Mitigation:',
      desc: 'Leverage machine learning models to analyze historical consumption, weather patterns, and meeting schedules to predict daily meal demand with over 95% accuracy. This enables AI-driven food waste reduction and optimizes catering procurement, driving substantial margin improvement.',
      image: "/images/solutions/image 102.png",
    },
    {
      step: '03',
      title: 'Global Subsidy & Compliance Engine:',
      desc: 'Manage complex, dynamic subsidy rules across different geographies (e.g., tax-exempt meals, varying shift entitlements, regulatory meal caps). The system automatically generates compliance reports for local tax authorities and internal auditing.',
      image: "/images/solutions/image 103.png",
    },
  ];

  const faqs = [
    {
      question: 'How does Sunbrilo solution address data privacy and compliance for biometric or RFID data?',
      answer: 'Data security is paramount. Our architecture utilizes advanced encryption and anonymization protocols compliant with global standards (GDPR, CCPA). Biometric data is stored as encrypted templates, not raw images, ensuring the highest level of employee data protection and regulatory adherence.',
    },
    {
      question: 'Beyond food waste, what is the key financial benefit of adopting this cognitive platform?',
      answer: 'The core benefit is Corporate TCO optimization. By automating subsidy calculation, eliminating manual reconciliation errors, predicting demand to prevent over-procurement, and maximizing employee productivity through reduced queue times, the platform delivers a measurable return on investment typically within the first 18 months.',
    },
    {
      question: 'Can the platform support food ordering for remote workers or specialized in-office events?',
      answer: 'Yes. The unified mobile experience includes modules for pre-ordering, dark kitchen fulfillment, and dedicated catering management for executive meetings or large corporate events, all linked back to the central subsidy and payroll engine.',
    },
  ];

  return (
    <>
      <Head>
        <title>Cognitive Dining Orchestration &amp; Strategic Employee Experience | Sunbrilo</title>
        <meta name="description" content="Transform employee dining into a strategic HCM pillar. Sunbrilo delivers AI-driven solutions for cashless payment, global compliance, and data-led workforce wellness and productivity." />
      </Head>

      <div className="min-h-screen">

        {/* ── Section 1: Hero ── */}
        <section className="relative min-h-[520px] py-24 px-4 text-white flex items-center justify-center">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/solutions/Cognitive Dining & Workforce.jpg")' }}
          >
            <div className="absolute inset-0 bg-black/72" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 font-raleway">
              Cognitive Dining Orchestration: A Strategic Pillar of Workforce Management.
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
                  Schedule a Strategic Workforce Productivity Review
                </span>
              </button>

              {/* <button
                type="button"
                onMouseMove={handleMouseMove}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-white/50 px-8 py-4 text-base font-semibold text-white transition-all cursor-pointer font-raleway hover:border-[#ffee50] hover:text-[#ffee50]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Global Implementation Framework
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
                  {renderAnimatedText("Re-engineering Corporate Dining for Strategic Value.", scrollProgress)}
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4 font-raleway">
                  For global enterprises, the cafeteria is a critical touchpoint impacting employee experience, productivity, and organizational TCO. Relying on legacy systems creates exposure: manual reconciliations introduce financial risk, lack of dietary data impacts employee wellness and retention, and inefficient operations erode administrative budget.
                </p>
                <p className="text-base text-gray-600 leading-relaxed font-raleway">
                  Sunbrilo architects a scalable, future-ready platform that treats dining as a component of workforce dining orchestration. We shift the focus from transactional POS management to strategic value creation. Our platform provides a single source of truth for consumption data, enabling HR to link dietary patterns to wellness programs and providing finance with auditable, automated subsidy and vendor management for guaranteed compliance and cost control.
                </p>


              </div>

              <div className="relative h-[400px] lg:h-[500px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ffee50]/10 rounded-full -z-10" />
                <img
                  src="/images/solutions/image 100.png"
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
                Engineered for Global Scale, Compliance, and Data Precision
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
                Our solution is designed to handle the complexity and regulatory mandates of a multinational workforce:
              </p>
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

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

              {/* Left: Heading and Text (Sticky) */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 font-raleway">
                  Flawless Integration with Your Existing Ecosystem.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-raleway mb-8">
                  The strategic value of our solution lies in its ability to eliminate data silos and function as a true enterprise HRMS integration. We provide secure, proprietary API frameworks for critical data flow:
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

                    <h3 className="text-2xl font-bold text-gray-900 font-raleway mb-3 group-hover:text-[#3B3808] transition-colors">Centralized Payroll &amp; Financial Ledger Synchronization</h3>
                    <p className="text-base text-gray-500 leading-relaxed font-raleway">
                      Ensure audit-proof financial governance. All transactions are immediately tagged and batched for zero-friction integration with SAP SuccessFactors, Oracle HCM, or custom proprietary payroll systems, automating deduction and vendor payment reconciliation.
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

                    <h3 className="text-2xl font-bold text-gray-900 font-raleway mb-3 group-hover:text-[#3B3808] transition-colors">Employee Wellness &amp; Experience API:</h3>
                    <p className="text-base text-gray-500 leading-relaxed font-raleway">
                      Provide anonymized consumption analytics to your HR and wellness teams, allowing them to measure the impact of menu changes, optimize health outcomes, and enhance overall employee satisfaction and retention.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: FAQ ── */}
        <section className="py-20 px-4 bg-[#f5f3f3]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">

              {/* Left: Image + CTA Card */}
              <div className="relative w-full md:w-[420px] flex-shrink-0 rounded-2xl overflow-visible">
                <div className="rounded-2xl overflow-hidden w-full h-[360px] relative">
                  <img
                    src="/images/faq.png"
                    alt="Logistics FAQ"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute top-6 left-6">
                    <h2 className="text-white font-bold text-3xl leading-tight font-raleway drop-shadow-lg">
                      Need Help? Start<br />Here..
                    </h2>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 translate-x-4 translate-y-6 bg-[#FFEE50] rounded-2xl p-6 w-52 z-10 shadow-xl">
                  <p className="text-black font-bold text-lg font-raleway leading-snug mb-4">
                    Get Started<br />contact us .
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a href="tel:+918788563349" className="text-black font-semibold text-sm underline font-raleway">
                      +91-8788563349
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: FAQ Accordion */}
              <div className="flex-1 space-y-3 md:pt-0 pt-8">
                {/* <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">Logistics Software Development FAQs</h2> */}
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full cursor-pointer px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-base font-bold text-gray-900 font-raleway pr-4">
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#ffee50] flex items-center justify-center">
                        {openFAQ === index ? (
                          <svg className="w-4 h-4 text-[#ffee50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-[#ffee50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {openFAQ === index && (
                      <>
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
            </div>
          </div>
        </section>

        {/* ── Section 6: Final CTA ── */}
        <section className="py-24 px-4 bg-[#3B3808] text-white text-center relative overflow-hidden">


          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5 font-raleway">
              Transform Your Employee Dining into a High-Impact Strategic Asset.
            </h2>
            <p className="text-lg leading-relaxed mb-10 opacity-85 font-raleway max-w-2xl mx-auto">
              Partner with Sunbrilo’s digital engineering team to deploy a Cognitive Dining Orchestration platform that drives productivity, ensures compliance, and optimizes enterprise TCO.
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
                Engage Our Digital Transformation Experts
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
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
    </>
  );
}
