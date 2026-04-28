'use client';

import { useState } from 'react';
import MissionVisionValues from '../components/aboutmissionvision';
import ExpertTeam from '../components/hometeam';
import OurApproach from '../components/OurApproach';

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

export default function AboutUsContent() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="bg-[#f5f3f3]">
      {/* Section 1: The Vision - Hero Banner */}
      <section className="relative h-[600px] w-full overflow-hidden">
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
                Engineering the Future of Global Enterprise.
              </h1>

              {/* Sub-headline */}
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-4xl mx-auto font-raleway">
                Sunbrilo Technologies was founded on a single conviction: that complex technical challenges deserve elegant, scalable, and secure solutions. As a premier global IT managed services company, we bridge the gap between visionary strategy and flawless engineering execution.
              </p>

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
                  <div className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                    <span>Meet Our Leadership</span>
                    <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                      <ArrowUpRightIcon className="group-hover:hidden" />
                      <ArrowRightIcon className="hidden group-hover:block" />
                    </span>
                  </div>
                </button>

                {/* Secondary Button */}
                <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#3B3808] font-raleway">
                  View Our Core Values
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Identity & Impact */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">
                Proven in India. Trusted Worldwide.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-raleway">
                Based in the thriving technology corridor of Pune, India, Sunbrilo has evolved into a high-velocity enterprise software engineering hub serving clients across the USA, Europe, and Asia. We don't just write code; we architect operational dominance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 font-raleway">
                We specialize in high-stakes environments—from real-time logistics and PropTech to automated manufacturing and secure HRMS ecosystems. Our multidisciplinary team of architects, developers, and security experts is dedicated to one goal: ensuring your digital infrastructure is a driver of revenue, not a source of friction.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/teamwork.jpg"
                alt="Our Team"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Sunbrilo Pillars */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">
              The Principles That Power Our Progress
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
              Our culture is defined by four non-negotiable standards that ensure every line of code we write adds measurable value to your enterprise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#3B3808] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway">Architectural Integrity</h3>
              <p className="text-gray-600 leading-relaxed font-raleway">
                We don't build "quick fixes." We engineer scalable, cloud-native architectures designed to handle millions of transactions and years of growth without collapsing under technical debt.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#3B3808] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway">Radical Transparency</h3>
              <p className="text-gray-600 leading-relaxed font-raleway">
                Whether you utilize our agile offshore development center or our managed services, you have 100% visibility into our sprints, codebases, and project timelines.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#3B3808] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway">Security-First Mindset</h3>
              <p className="text-gray-600 leading-relaxed font-raleway">
                In an era of global threats, security is not a feature; it is our foundation. We embed military-grade encryption and compliance protocols into every deployment.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#3B3808] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway">Relentless Innovation</h3>
              <p className="text-gray-600 leading-relaxed font-raleway">
                The tech landscape shifts daily. We continuously upskill our engineers in AI, machine learning, and serverless computing to keep your business ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Partner with Sunbrilo? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">
              Your Global Technology Partner
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
              Why do international brands choose Sunbrilo over traditional outsourcing firms? Because we operate as a true extension of your team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffee50] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#3B3808]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway">Elite Technical Talent</h3>
              <p className="text-gray-600 leading-relaxed font-raleway">
                We source the top 1% of engineering talent in Pune, ensuring your projects are handled by experts in React, Node.js, Python, and Cloud Architecture.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffee50] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#3B3808]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway">Time-Zone Optimized Delivery</h3>
              <p className="text-gray-600 leading-relaxed font-raleway">
                We utilize overlapping global working hours to ensure seamless communication and daily stand-ups with your headquarters.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffee50] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#3B3808]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway">End-to-End Ownership</h3>
              <p className="text-gray-600 leading-relaxed font-raleway">
                From the initial discovery phase to post-launch 24/7 IT monitoring and support, we take full accountability for the success of your digital product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Global Footprint */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">
              Powering Innovation Across Industries
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
              From helping real estate developers in Pune manage multi-project leads to scaling cloud infrastructure for US logistics firms, our impact is global. We are more than a vendor; we are a digital transformation partner committed to your long-term success.
            </p>
          </div>
          
          {/* Map or visual representation could go here */}
          <div className="bg-white p-12 rounded-xl shadow-lg text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#3B3808] mb-2 font-raleway">USA</div>
                <div className="text-gray-600 font-raleway">North America</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#3B3808] mb-2 font-raleway">Europe</div>
                <div className="text-gray-600 font-raleway">UK & EU</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#3B3808] mb-2 font-raleway">Asia</div>
                <div className="text-gray-600 font-raleway">APAC Region</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#3B3808] mb-2 font-raleway">India</div>
                <div className="text-gray-600 font-raleway">HQ - Pune</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-20 px-4 bg-[#3B3808] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-raleway">
            Let's Engineer Your Next Competitive Advantage.
          </h2>
          <p className="text-lg leading-relaxed mb-8 font-raleway">
            Whether you need to scale your engineering team or migrate your entire infrastructure to the cloud, Sunbrilo has the expertise to make it happen.
          </p>
          
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
              <span>Start a Conversation with Our Experts</span>
              <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                <ArrowUpRightIcon className="group-hover:hidden" />
                <ArrowRightIcon className="hidden group-hover:block" />
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Existing Components */}
      <MissionVisionValues/>
      <ExpertTeam/>
      <OurApproach/>
    </div>
  );
}
