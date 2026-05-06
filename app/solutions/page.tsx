'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function SolutionsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [activeStep, setActiveStep] = useState(0);
   const [openFAQ, setOpenFAQ] = useState<number>(0);


 

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? 0 : index);
  };

   const faqs = [
    {
      question: "Why should we invest in custom CRM software development instead of using Salesforce or HubSpot?",
      answer: "Off-the-shelf platforms like Salesforce charge expensive, per-user monthly licensing fees that skyrocket as you scale, and they often require heavy, costly modifications to fit niche workflows. A custom CRM from Sunbrilo is built specifically for your exact operational model, involves no per-user licensing fees, and gives you 100% ownership of the proprietary software and data."
    },
    {
      question: "Can you migrate our existing customer data from our old CRM to the new custom platform?",
      answer: "Yes. Our database architects specialize in secure, zero-loss data migration. We cleanse, map, and transfer all your historical contacts, communication logs, and pipeline data from your legacy systems into your new Sunbrilo CRM before go-live."
    },
    {
      question: "Is the CRM accessible on mobile devices for field sales teams?",
      answer: "Absolutely. We develop our B2B customer relationship management software with a mobile-first, responsive architecture. We can also deploy dedicated iOS and Android companion apps with offline-sync capabilities for sales representatives operating in the field."
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <>
      <Head>
        <title>Solutions | Sunbrilo Technologies</title>
        <meta name="description" content="Custom Enterprise CRM Software and digital solutions by Sunbrilo Technologies." />
      </Head>

      <div className="min-h-screen">
        {/* Banner Section */}
        <section className="relative min-h-[600px] py-20 px-4 text-white flex items-center justify-center">
          {/* Background Image Container */}
          <div 
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/images/solutions/solutionmainbanner.png")',
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-raleway">
              Solutions
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#ffee50] mb-6 font-raleway">
              Custom Enterprise CRM Software: A Smarter Way to Manage Customers
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-4xl mx-auto opacity-90 font-raleway">
              Stop letting CRMs force you to change your sales process to fit their software. 
              We build it the other way around. Sunbrilo engineers custom CRM software development 
              solutions that align perfectly with your complex sales cycles, eliminating manual data 
              entry and accelerating global revenue.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onMouseMove={handleMouseMove}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-8 py-4 text-base font-semibold text-[#3B3808] transition-all cursor-pointer font-raleway"
              >
                <span
                  className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                  style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    width: '100px',
                    height: '100px',
                  }}
                />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                  Request a Custom CRM Demo
                </span>
              </button>
              
              <button
                type="button"
                onMouseMove={handleMouseMove}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-8 py-4 text-base font-semibold text-[#3B3808] transition-all cursor-pointer font-raleway"
              >
                <span
                  className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                  style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    width: '100px',
                    height: '100px',
                  }}
                />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                  View Core CRM Features
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Section 1: Stop Losing High-Value Deals */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 font-raleway">
                  Stop Losing High-Value Deals to Fragmented Data
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4 font-raleway">
                  When enterprise sales and marketing teams operate in silos, lead leakage is inevitable. Your marketing team spends thousands driving traffic, but without a centralized system, high-intent leads slip through the cracks, follow-ups are missed, and forecasting becomes entirely guesswork.
                </p>
                <p className="text-base text-gray-600 leading-relaxed font-raleway">
                  Sunbrilo builds dynamic, B2B customer relationship management software designed specifically for high-volume, multi-touchpoint industries. Whether you are managing complex international IT sales cycles or looking to effortlessly generate leads for hospitals and investors in highly competitive markets, our CRM acts as your single source of truth. We replace operational chaos with automated, predictable revenue pipelines.
                </p>
              </div>

              {/* Right Side - Image Collage */}
              <div className="relative h-[400px] lg:h-[500px]">
                {/* Background decorative circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#f5f3f3] rounded-full -z-10"></div>
                
                <img
                        src="/images/solutions/solutionmainsec-1.png"
                        alt="Analytics Chart"
                        className="w-full h-full object-cover"
                      />
              </div>
            </div>
          </div>
        </section>

                  <div className="w-full min-h-screen flex flex-col justify-center py-10 px-6 sm:px-12 lg:px-24 relative z-30">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Header */}
                       <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 font-raleway">
                Engineered to Accelerate Your Sales Velocity
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
              We strip away the unnecessary bloat of standard CRMs and build exactly what your salesforce needs to close deals faster.
               </p>
            </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
                        {/* Left Side: Features */}
                        <div className="flex flex-col gap-2">
                            {[
                                {
                                    step: '01',
                                    title: 'Automated Lead Routing & Scoring',
                                    desc: 'Never let a hot lead go cold. Our AI-driven algorithms automatically score incoming leads based on their engagement and instantly route them to the appropriate sales representative based on territory or expertise.',
                                },
                                {
                                    step: '02',
                                    title: 'Omnichannel Campaign Ingestion',
                                    desc: 'Bridge the gap between marketing and sales. Seamlessly ingest campaign data from your Meta ad campaigns, email blasts, and social media calendars directly into the CRM. Track the exact cost-per-acquisition and ROI of every single marketing initiative in real-time.',
                                },
                                {
                                    step: '03',
                                    title: 'Multi-Project & Territory Tracking',
                                    desc: 'Perfect for enterprises managing distributed assets. For example, large-scale real estate developers utilize our CRM to track high-volume property inquiries across distinct development zones—such as Talegaon, Bavdhan, and Ravet—within a single, unified dashboard.',
                                },
                                {
                                    step: '04',
                                    title: 'Custom Reporting & Forecasting Dashboards',
                                    desc: 'Give your C-suite instant visibility. We build custom data visualization modules that track pipeline health, rep performance, and quarterly revenue projections with absolute accuracy.',
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveStep(index)}
                                    className={`p-4 md:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${activeStep === index ? 'bg-white border-[#ffee50] shadow-[0_8px_30px_rgba(100,199,254,0.15)] scale-[1.01]' : 'bg-zinc-50/50 border-transparent hover:bg-zinc-100/80'}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`text-xl font-bold transition-colors duration-300 mt-0.5 w-8 shrink-0 ${activeStep === index ? 'text-[#ffee50]' : 'text-zinc-300'}`}>
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${activeStep === index ? 'text-[#1a1a1a]' : 'text-zinc-500'}`}>
                                                {item.title}
                                            </h3>
                                            <p className="text-zinc-500 text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Side: Image */}
                        <div className="w-full h-[380px] lg:h-auto rounded-[2rem] overflow-hidden relative shadow-2xl">
                            {[
                                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
                                'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80'
                            ].map((imgSrc, index) => (
                                <img
                                    key={index}
                                    src={imgSrc}
                                    alt={`Feature ${index + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                            {/* Overlay gradient for image depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>

         <section className="py-20 px-4 bg-[#f5f3f3]">
          <div className="max-w-6xl mx-auto">
            {/* Top Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 font-raleway">
                Flawless Integration with Your Existing Tech Stack
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
                A CRM should connect your business, not isolate it. We build secure, custom APIs to ensure your new enterprise lead generation CRM communicates flawlessly with your existing ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Images with Blue Decorative Shape */}
              <div className="relative h-[400px] lg:h-[450px]">
                {/* Blue decorative shape */}
                <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-[#4A90E2] rounded-full opacity-80 -z-10"></div>
                
                {/* Image Stack */}
                <div className="relative h-full flex items-center justify-center">
                 <img
                      src="/images/solutions/solutionmainsec-4.png"
                      alt="Technology Dashboard"
                      className="w-full h-full object-cover"
                    />
                </div>
              </div>

              {/* Right Side - Feature Points */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-raleway">
                    ERP & Financial Syncing
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed font-raleway">
                    Automatically push closed-won deals directly into your enterprise resource planning (ERP) or accounting software (like SAP or Oracle) to trigger instant invoicing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-raleway">
                    Communication APIs
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed font-raleway">
                    Native integrations with your VoIP phone systems, Microsoft Teams, and enterprise email clients so every call, meeting, and message is automatically logged in the client's historical record.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row gap-10 items-start">

      {/* Left: Image + CTA Card */}
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
          className="absolute bottom-0 right-0 translate-x-4 translate-y-6 bg-[#FFEE50] rounded-2xl p-6 w-52 z-10 shadow-xl"
        >
          <p className="text-black font-bold text-lg font-raleway leading-snug mb-4">
            Get Started<br />Free Call?
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
              {/* Phone icon */}
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

    </div>
  </div>
</section>

        {/* Additional content sections can be added here */}
      </div>
    </>
  );
}
