'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SectionReveal, StaggerGroup, StaggerItem } from './SectionReveal';

// Custom icons to create a highly premium, executive look
const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

const PodsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.005 9.005 0 001.077-4.06c0-2.483-1.01-4.73-2.645-6.34L12 12.75l-4.432-4.432a9.005 9.005 0 00-2.645 6.34c0 1.479.359 2.874 1.078 4.06M12 12.75a3 3 0 110-6 3 3 0 010 6z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2.25v2.25M12 19.5v2.25M2.25 12h2.25M19.5 12h2.25"
    />
  </svg>
);

const AugmentationIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7.5L12 14.25 5 7.5m14 5.25L12 19.5l-7-6.75"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v11.25"
    />
  </svg>
);

const SovereignIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
    />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const TalentIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
    />
  </svg>
);

const SecurityIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  </svg>
);

export default function OffshoringServicesContent() {
  const [openFAQ, setOpenFAQ] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const faqs = [
    {
      question: 'What is the typical deployment time for an Elite Staff Augmentation team?',
      answer: 'Leveraging our pre-vetted talent pool, Sunbrilo can typically source, technically vet, and deploy a fully integrated offshore IT staff augmentation specialist or initial Pod within 2 to 4 weeks, depending on the niche technical stack required.',
    },
    {
      question: 'How does Sunbrilo ensure continuous operational transparency and collaboration?',
      answer: 'We mandate specific, overlapping working hours designed for synchronous collaboration. All teams operate within client-standard enterprise toolchains (Jira, GitHub, Slack, MS Teams) to ensure complete visibility into sprint cycles, deployment pipelines, and code commits.',
    },
    {
      question: 'What are the terms regarding Intellectual Property (IP) and data ownership?',
      answer: 'The client retains 100% ownership of all IP, algorithms, and source code generated. Comprehensive Non-Disclosure Agreements (NDAs) and legally robust IP transfer contracts are signed prior to commencement of any engagement, providing ironclad legal protection.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f3f3] overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="relative min-h-[640px] py-28 px-4 flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Deep tech glowing background gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_15%_25%,_rgba(15,118,110,0.2),_transparent_45%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_85%_75%,_rgba(37,99,235,0.15),_transparent_45%)]" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: 'url("/images/services/servicebanner1.png")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-2">
          <SectionReveal className="w-full">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs md:text-sm font-semibold tracking-wider uppercase mb-6 font-raleway">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
              Global Digital Engineering
            </span>
          </SectionReveal>

          <SectionReveal className="w-full" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-8 font-raleway text-white">
              Global Digital Engineering:{' '}<br className="hidden md:inline" />
              <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Accelerate with Elite Offshore Development Pods.
              </span>
            </h1>
          </SectionReveal>

          <SectionReveal className="w-full" delay={0.2}>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-300 mb-12 max-w-3xl mx-auto font-raleway font-light">
              Transition from capacity constraints to elastic digital capability. Hire dedicated offshore development teams that operate as a high-fidelity extension of your core R&D. We deliver Silicon Valley-grade code quality, predictable offshore agile development pods, and unparalleled cost optimization, all without geographical friction.
            </p>
          </SectionReveal>

          <SectionReveal className="w-full" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="button"
                onMouseMove={handleMouseMove}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-8 py-4 text-base font-bold text-[#3B3808] transition-all cursor-pointer font-raleway w-full sm:w-auto justify-center"
              >
                <span
                  className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4.5]"
                  style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    width: '100px',
                    height: '100px',
                  }}
                />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                  Initiate Your Strategic Partnership
                  <ArrowUpRightIcon className="w-5 h-5" />
                </span>
              </button>

              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm px-8 py-4 text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all font-raleway w-full sm:w-auto">
                Explore Our Global Delivery Blueprint
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Section 2: The Strategic Imperative */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Heading + Text */}
            <SectionReveal className="w-full">
              <div className="space-y-6">
                <div className="w-12 h-1 bg-teal-500 rounded-full" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#2a8a8a] font-raleway">
                  The Strategic Imperative
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight font-raleway">
                  The Digital Velocity vs. Cost Dilemma. Solved.
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-gray-600 font-raleway">
                  Scaling modern technology requires specialized, often proprietary, skills that defy conventional hiring timelines and local compensation structures. The true challenge is not just finding developers, but integrating specialized expertise—quickly and cost-effectively—to maintain competitive digital velocity.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600 font-raleway bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-xl">
                  Sunbrilo Technologies solves this by pioneering <strong>Cognitive Arbitrage</strong> leveraging Pune, Maharashtra’s status as a world-class IT Center of Excellence. We provide premium B2B offshore custom software developers and fully managed, cross-functional "Agile Digital Pods." This approach ensures immediate cultural alignment, proprietary tool adoption, and accelerated deployment cycles, positioning your enterprise to drastically reduce Customer Acquisition Cost (CAC) related to engineering talent acquisition and operational overhead.
                </p>
              </div>
            </SectionReveal>

            {/* RIGHT: Two staggered overlapping images */}
            <SectionReveal className="w-full" delay={0.2}>
              <div className="relative h-[380px] lg:h-[460px] max-w-md lg:max-w-none mx-auto lg:ml-auto">
                {/* Top-left larger image */}
                <div
                  className="absolute top-0 left-0 w-[74%] h-[78%] rounded-2xl overflow-hidden shadow-2xl border border-slate-100"
                  style={{ zIndex: 1 }}
                >
                  <img
                    src="/images/services/service1.png"
                    alt="Offshore IT staff augmentation services"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Bottom-right smaller image */}
                <div
                  className="absolute bottom-0 right-0 w-[58%] h-[52%] rounded-2xl overflow-hidden shadow-2xl"
                  style={{ zIndex: 2, border: '6px solid #ffffff' }}
                >
                  <img
                    src="/images/services/service2.png"
                    alt="B2B offshore custom software developers"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Decorative accent dot grid */}
                <div
                  className="absolute -bottom-6 left-6 w-24 h-24 pointer-events-none"
                  style={{ zIndex: 0 }}
                >
                  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
                    {[0, 16, 32, 48, 64, 80].map((x) =>
                      [0, 16, 32, 48, 64, 80].map((y) => (
                        <circle
                          key={`${x}-${y}`}
                          cx={x + 8}
                          cy={y + 8}
                          r="2.5"
                          fill="#0f766e"
                          fillOpacity="0.2"
                        />
                      ))
                    )}
                  </svg>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Engagement Models */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#f5f3f3] to-white">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-16 w-full">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#2a8a8a] font-raleway block mb-3">
              Strategic Collaboration
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-raleway">
              Engagement Models Aligned with Your Strategic Roadmap
            </h2>
            <div className="w-16 h-1 bg-teal-500 rounded-full mx-auto mt-6 mb-8" />
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-raleway font-light">
              Our flexible models are designed for precise integration into enterprise-grade operations, offering strategic solutions for every phase of your product lifecycle.
            </p>
          </SectionReveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Model 1 */}
            <StaggerItem className="flex">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-teal-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-2">
                <div>
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <PodsIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway leading-snug">
                    Integrated Digital Pods<br />
                    <span className="text-sm font-medium text-[#2a8a8a]">(Dedicated Teams)</span>
                  </h3>
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
                      Best For
                    </span>
                    <p className="mt-2 text-sm text-gray-600 font-raleway font-medium">
                      Long-term product ownership, complex domain challenges, and sustained feature development.
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-raleway">
                    We provision a fully audited roster of Senior Engineers, QA Specialists, and certified Agile Leaders who function as a high-fidelity extension of your in-house R&D.
                  </p>
                </div>
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2a8a8a] group-hover:text-teal-600 transition-colors">
                    Provision a Pod <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </StaggerItem>

            {/* Model 2 */}
            <StaggerItem className="flex">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-teal-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-2">
                <div>
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <AugmentationIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway leading-snug">
                    Elite Staff Augmentation<br />
                    <span className="text-sm font-medium text-[#2a8a8a]">(Specialized Talent Injection)</span>
                  </h3>
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
                      Need
                    </span>
                    <p className="mt-2 text-sm text-gray-600 font-raleway font-medium">
                      High-impact, highly specialized skill injection to meet critical project milestones.
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-raleway">
                    We seamlessly plug proven, top-tier global talent (e.g., a Senior Cloud Architect, GenAI Engineer, or Data Scientist) directly into your existing reporting and governance matrix.
                  </p>
                </div>
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2a8a8a] group-hover:text-teal-600 transition-colors">
                    Secure Specialized Talent <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </StaggerItem>

            {/* Model 3 */}
            <StaggerItem className="flex">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-teal-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-2">
                <div>
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <SovereignIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway leading-snug">
                    Sovereign Market Entry & Scale<br />
                    <span className="text-sm font-medium text-[#2a8a8a]">(BOT Model)</span>
                  </h3>
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
                      For
                    </span>
                    <p className="mt-2 text-sm text-gray-600 font-raleway font-medium">
                      Global enterprises planning permanent operational establishment in India.
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-raleway">
                    We meticulously establish the team, define operating procedures (SOPs), ensure local compliance, and successfully transition the fully optimized operational entity back to your full control.
                  </p>
                </div>
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2a8a8a] group-hover:text-teal-600 transition-colors">
                    Explore BOT Model <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Section 4: The Sunbrilo Global Delivery Blueprint */}
      <section className="py-24 px-6 bg-slate-900 text-white relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,_rgba(15,118,110,0.15),_transparent_60%)]" />

        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-20 w-full">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-teal-400 font-raleway block mb-3">
              Guaranteed Engineering Excellence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-raleway">
              The Sunbrilo Global Delivery Blueprint
            </h2>
            <div className="w-16 h-1 bg-teal-400 rounded-full mx-auto mt-6 mb-8" />
            <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto font-raleway font-light leading-relaxed">
              We mitigate the inherent risks of offshoring—communication latency and code quality inconsistency—by implementing a rigorous, metrics-driven governance framework.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <SectionReveal className="w-full flex">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-raleway mb-4 text-slate-100">
                    Seamless Time-Zone Optimization
                  </h3>
                  <p className="text-sm text-slate-350 leading-relaxed font-raleway">
                    Our core operational hours are strategically mapped to your global headquarters, ensuring real-time daily stand-ups, high-bandwidth communication, and frictionless collaboration.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800 text-teal-400 text-xs font-semibold tracking-wider uppercase">
                  Synchronous Collaboration
                </div>
              </div>
            </SectionReveal>

            {/* Pillar 2 */}
            <SectionReveal className="w-full flex" delay={0.1}>
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
                    <TalentIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-raleway mb-4 text-slate-100">
                    Top 1% Talent Vetting (The A-Player Mandate)
                  </h3>
                  <p className="text-sm text-slate-350 leading-relaxed font-raleway">
                    We utilize a proprietary, multi-stage technical and behavioral vetting pipeline. Only developers demonstrating exceptional architectural foresight, certified technical proficiency, and flawless enterprise-level English communication join our client-facing teams.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800 text-teal-400 text-xs font-semibold tracking-wider uppercase">
                  Rigorous Vetting
                </div>
              </div>
            </SectionReveal>

            {/* Pillar 3 */}
            <SectionReveal className="w-full flex" delay={0.2}>
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
                    <SecurityIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-raleway mb-4 text-slate-100">
                    Enterprise-Grade Security & IP Governance
                  </h3>
                  <p className="text-sm text-slate-350 leading-relaxed font-raleway">
                    Operation under rigorous NDAs and global cybersecurity protocols (ISO/SOC2 compliant). We guarantee 100% intellectual property (IP) retention and source code protection through audited, secure development environments.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800 text-teal-400 text-xs font-semibold tracking-wider uppercase">
                  100% IP Protection
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="py-24 px-4 bg-[#f5f3f3]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Image + CTA Card */}
            <SectionReveal className="w-full lg:w-[420px] flex-shrink-0 rounded-2xl overflow-visible">
              <div className="relative">
                {/* Main Image */}
                <div className="rounded-3xl overflow-hidden w-full h-[380px] relative shadow-2xl">
                  <img
                    src="/images/faq.png"
                    alt="Offshore development consulting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                  {/* Overlay text */}
                  <div className="absolute top-8 left-8">
                    <span className="text-xs text-teal-400 font-bold uppercase tracking-wider font-raleway mb-2 block">
                      Support Desk
                    </span>
                    <h2 className="text-white font-extrabold text-3xl leading-tight font-raleway">
                      Need Help?<br />Start Here.
                    </h2>
                  </div>
                </div>

                {/* Teal CTA Card — overlaps image bottom-right */}
                <div className="absolute bottom-[-24px] right-[-12px] md:right-[-24px] bg-[#2a8a8a] rounded-2xl p-6 w-56 z-10 shadow-2xl border border-teal-400/20">
                  <p className="text-white font-bold text-lg font-raleway leading-snug mb-4">
                    Get Started With A<br />Free Advisory Call
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a href="tel:18884521505" className="text-white font-bold text-sm hover:underline font-raleway">
                      1-888-452-1505
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Right: FAQ Accordion */}
            <div className="flex-1 space-y-4 pt-12 lg:pt-0 w-full">
              <SectionReveal className="w-full">
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#2a8a8a] font-raleway block mb-3">
                  Executive FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-raleway mb-8">
                  Executive Answers on Staffing & Offshoring
                </h2>
              </SectionReveal>

              <StaggerGroup className="space-y-4">
                {faqs.map((faq, index) => (
                  <StaggerItem key={index} className="w-full">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-150/60 hover:shadow-lg transition-all duration-200">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                      >
                        <span className="text-base font-bold text-gray-900 font-raleway pr-4">
                          {faq.question}
                        </span>
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#2a8a8a] flex items-center justify-center transition-transform duration-300 ${openFAQ === index ? 'bg-[#2a8a8a] text-white rotate-180' : 'text-[#2a8a8a]'}`}>
                          {openFAQ === index ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                            </svg>
                          )}
                        </span>
                      </button>

                      <div
                        className={`transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="border-t border-dashed border-gray-200 pt-4">
                            <p className="text-gray-650 leading-relaxed font-raleway text-sm md:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA (Next Steps) */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-[#132c2c] to-slate-950 text-white">
        <div className="max-w-5xl mx-auto rounded-3xl p-8 md:p-14 relative overflow-hidden bg-slate-950/60 border border-slate-800/80 shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_100%_0%,_rgba(15,118,110,0.2),_transparent_50%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_100%,_rgba(37,99,235,0.15),_transparent_50%)]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold tracking-wider uppercase font-raleway">
                Launch Your Center
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-raleway leading-tight text-white">
                Ready to Operationalize Your Global Engineering Strategy?
              </h2>
              <p className="text-base md:text-lg text-slate-350 font-raleway font-light leading-relaxed">
                Bypass the escalating cost curves and talent scarcity plaguing local markets. Engage Sunbrilo today to access elite global engineers and strategic consulting that is ready to architect, code, and deploy your next-generation product roadmap.
              </p>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
              <button
                type="button"
                onMouseMove={handleMouseMove}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-8 py-5 text-base font-bold text-[#3B3808] transition-all cursor-pointer font-raleway w-full justify-center shadow-lg"
              >
                <span
                  className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4.5]"
                  style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    width: '100px',
                    height: '100px',
                  }}
                />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50] text-center">
                  Request Consultation
                  <ArrowRightIcon className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
