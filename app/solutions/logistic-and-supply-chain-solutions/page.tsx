'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function LogisticsSolutionsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
      title: 'Real-Time Freight & Fleet Tracking',
      desc: 'Gain absolute control over your assets. Our real-time freight tracking software integrates via advanced GPS and IoT APIs, giving your dispatchers live location data, predictive ETAs, and instant geofencing alerts for thousands of vehicles simultaneously.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    },
    {
      step: '02',
      title: 'Intelligent Routing & Dispatch Automation',
      desc: 'Stop wasting fuel and driver hours. Our AI-driven algorithms automatically calculate the most efficient delivery routes considering live traffic, vehicle load capacity, and strict delivery windows, drastically reducing your cost-per-mile.',
      image: 'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?auto=format&fit=crop&w=800&q=80',
    },
    {
      step: '03',
      title: 'Integrated Warehouse Management (WMS)',
      desc: 'Bridge the gap between storage and transit. Seamlessly connect your transit data with warehouse inventory levels. Automate dock scheduling, implement smart barcode/RFID scanning, and trigger automated reorder protocols to permanently prevent stockouts.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const faqs = [
    {
      question: 'Why should we invest in custom logistics software instead of an off-the-shelf TMS (Transportation Management System)?',
      answer: 'Off-the-shelf TMS platforms charge heavy monthly licensing fees and force you to adapt your unique operational workflows to fit their rigid structures. A custom logistics software development build from Sunbrilo involves no per-user fees, maps exactly to your specific global routing needs, and gives you 100% ownership of your proprietary data.',
    },
    {
      question: 'Can your software integrate directly with our trucks\' ELD (Electronic Logging Device) hardware?',
      answer: 'Yes. We build custom API integrations that connect directly with major ELD providers and onboard telematics hardware, pulling real-time engine diagnostics, driver Hours of Service (HOS), and fuel consumption data straight into your central dashboard.',
    },
    {
      question: 'Is the platform accessible on mobile devices for our drivers?',
      answer: 'Absolutely. We develop highly secure, cross-platform mobile companion apps (iOS and Android) for your drivers. This allows them to receive route updates, capture electronic Proof of Delivery (ePOD) signatures, and report delays instantly from the field.',
    },
  ];

  return (
    <>
      <Head>
        <title>Custom Logistics &amp; Supply Chain Software Solutions | Sunbrilo</title>
        <meta name="description" content="Optimize global operations with Sunbrilo. We engineer custom logistics software and enterprise supply chain IT solutions for real-time tracking and automation." />
      </Head>

      <div className="min-h-screen">

        {/* ── Section 1: Hero ── */}
        <section className="relative min-h-[620px] py-24 px-4 text-white flex items-center justify-center">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/solutions/solutionmainbanner.png")' }}
          >
            <div className="absolute inset-0 bg-black/72" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#ffee50]/15 border border-[#ffee50]/30 text-[#ffee50] text-sm font-semibold tracking-wide font-raleway uppercase">
              Logistics &amp; Supply Chain
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 font-raleway">
              Intelligent Logistics &amp; Supply Chain Solutions.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-4xl mx-auto opacity-90 font-raleway">
              Turn your supply chain into a competitive weapon. Sunbrilo engineers custom logistics software development solutions that deliver end-to-end global visibility, automate complex routing, and eliminate operational bottlenecks from warehouse to final mile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onMouseMove={handleMouseMove}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-8 py-4 text-base font-semibold text-[#3B3808] transition-all cursor-pointer font-raleway"
              >
                <span
                  className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                  style={{ left: `${mousePosition.x}%`, top: `${mousePosition.y}%`, width: '100px', height: '100px' }}
                />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                  Request a Supply Chain Audit
                </span>
              </button>

              <button
                type="button"
                onMouseMove={handleMouseMove}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-white/50 px-8 py-4 text-base font-semibold text-white transition-all cursor-pointer font-raleway hover:border-[#ffee50] hover:text-[#ffee50]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Core Logistics Features
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ── Section 2: Enterprise Challenge & Solution ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 font-raleway">
                  Eliminate Blind Spots. Accelerate Global Delivery.
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4 font-raleway">
                  In global logistics, inefficiency costs millions. Legacy systems and fragmented spreadsheets create massive blind spots—leading to lost inventory, delayed shipping routes, and cripplingly high operational costs. You cannot scale a modern supply chain on outdated technology.
                </p>
                <p className="text-base text-gray-600 leading-relaxed font-raleway">
                  Sunbrilo builds enterprise supply chain IT solutions designed for scale and resilience. Whether you are managing cross-border US freight networks or optimizing domestic last-mile delivery fleets, our platforms act as your centralized command center. We replace operational chaos with intelligent, AI-driven automation, ensuring you always know exactly where your assets are and how they are performing.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-6">
                  {[
                    { value: '40%', label: 'Avg. Cost Reduction' },
                    { value: '99.9%', label: 'Uptime SLA' },
                    { value: '2×', label: 'Faster Delivery' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="text-2xl font-extrabold text-[#3B3808] font-raleway">{stat.value}</div>
                      <div className="text-xs text-gray-500 mt-1 font-raleway">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[400px] lg:h-[500px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ffee50]/10 rounded-full -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=800&q=80"
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
                Engineered for Complex Global Logistics
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
                We strip away the bloat of off-the-shelf software and build exactly what your operations team needs to move faster.
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
        <section className="py-20 px-4 bg-[#f5f3f3]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 font-raleway">
                Flawless Integration with Your Existing Ecosystem
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
                A supply chain visibility platform must connect your entire business. We build secure, custom APIs to ensure your new logistics software communicates flawlessly with your existing enterprise architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="relative h-[400px] lg:h-[450px]">
                <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-[#ffee50] rounded-full opacity-20 -z-10" />
                <div className="relative h-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                    alt="Enterprise system integration"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Right: Integration points */}
              <div className="space-y-8">
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ffee50]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#3B3808]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 font-raleway">ERP &amp; Financial Syncing</h3>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed font-raleway">
                    Automatically push freight bills, invoicing data, and driver payroll directly into your enterprise resource planning (ERP) systems like SAP, Oracle, or Microsoft Dynamics.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ffee50]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#3B3808]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 font-raleway">Third-Party Carrier Integration</h3>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed font-raleway">
                    Seamlessly ingest EDI (Electronic Data Interchange) and API feeds from external shipping partners, customs brokers, and international freight forwarders into a single, unified dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: FAQ ── */}
        <section className="py-20 px-4 bg-gray-100">
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
                    Get Started<br />Free Call?
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a href="tel:18884521505" className="text-black font-semibold text-sm underline font-raleway">
                      1-888-452-1505
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: FAQ Accordion */}
              <div className="flex-1 space-y-3 md:pt-0 pt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">Logistics Software Development FAQs</h2>
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
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#ffee50" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5 font-raleway">
              Ready to Command Your Supply Chain?
            </h2>
            <p className="text-lg leading-relaxed mb-10 opacity-85 font-raleway max-w-2xl mx-auto">
              Equip your logistics teams with the technology they need to lower costs, improve delivery times, and scale operations globally.
            </p>

            <button
              type="button"
              onMouseMove={handleMouseMove}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-10 py-5 text-lg font-bold text-[#3B3808] transition-all cursor-pointer font-raleway shadow-[0_0_40px_rgba(255,238,80,0.3)]"
            >
              <span
                className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                style={{ left: `${mousePosition.x}%`, top: `${mousePosition.y}%`, width: '100px', height: '100px' }}
              />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#3B3808]">
                Schedule a Logistics Architecture Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </section>

      </div>
    </>
  );
}
