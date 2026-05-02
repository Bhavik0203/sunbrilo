'use client';

import { useState } from 'react';

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

export default function ContactUsContent() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [formData, setFormData] = useState({
    interest: '',
    fullName: '',
    email: '',
    company: '',
    message: ''
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="bg-[#f5f3f3]">
      {/* Section 1: The Hero */}
      <section className="relative h-[500px] w-full overflow-hidden">
        {/* Banner Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/contactbanner.jpg")',
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
                Let's Engineer Your Next Competitive Advantage.
              </h1>

              {/* Sub-headline */}
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-4xl mx-auto font-raleway">
                Whether you are ready to kick off a global digital transformation or simply need an expert audit of your current IT infrastructure, the Sunbrilo team is ready to assist. Contact our IT consulting services in Pune to speak with a solution architect today.
              </p>

              {/* CTA Button */}
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
                  <span>Start Your Consultation</span>
                  <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                    <ArrowUpRightIcon className="group-hover:hidden" />
                    <ArrowRightIcon className="hidden group-hover:block" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Inquiry Hub */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">
              How Can We Support Your Growth?
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
              Please select the area that best describes your needs so we can connect you with the right expert.
            </p>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Dropdown Menu */}
            <div>
              <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                I am interested in...
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B3808] focus:border-transparent font-raleway"
                required
              >
                <option value="">Please select an option</option>
                <option value="custom-software">Custom Software/Product Engineering</option>
                <option value="staff-augmentation">Staff Augmentation & Offshore Teams</option>
                <option value="managed-services">24/7 Managed Services & Monitoring</option>
                <option value="product-demo">Requesting a Product Demo (CRM/HRMS/Logistics)</option>
                <option value="career">Career Opportunities</option>
              </select>
            </div>

            {/* Standard Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B3808] focus:border-transparent font-raleway"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                  Corporate Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B3808] focus:border-transparent font-raleway"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B3808] focus:border-transparent font-raleway"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                Project Brief/Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B3808] focus:border-transparent font-raleway"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
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
                  <span>Submit Inquiry</span>
                  <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                    <ArrowUpRightIcon className="group-hover:hidden" />
                    <ArrowRightIcon className="hidden group-hover:block" />
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Section 3: Global Operations & Headquarters */}
      <section className=" px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">
                Visit Our Global Engineering Hub
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 font-raleway">
                Located in the heart of India's technology corridor, our headquarters houses our elite engineering squads and 24/7 Network Operations Center (NOC).
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-raleway">Office Address:</h3>
                  <p className="text-gray-600 font-raleway">Pune, Maharashtra, India</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-raleway">General Inquiries:</h3>
                  <p className="text-gray-600 font-raleway">info@sunbrilotechnologies.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-raleway">Business Development:</h3>
                  <p className="text-gray-600 font-raleway">sales@sunbrilotechnologies.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-raleway">24/7 Technical Support:</h3>
                  <p className="text-gray-600 font-raleway">support@sunbrilotechnologies.com</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/office.jpg"
                alt="Sunbrilo Technologies Office"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What Happens Next? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">
              Our Rapid Response Protocol
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto font-raleway">
              We value your time. Here is what you can expect after submitting your inquiry:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#3B3808] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white font-raleway">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway">Discovery Call</h3>
              <p className="text-gray-600 leading-relaxed font-raleway mb-2">Within 24 Hours</p>
              <p className="text-gray-600 leading-relaxed font-raleway">
                A dedicated account manager will reach out to understand your technical requirements and business goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#3B3808] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white font-raleway">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway">Architectural Consultation</h3>
              <p className="text-gray-600 leading-relaxed font-raleway">
                Our lead engineers will review your needs and provide a high-level roadmap or proof-of-concept.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#3B3808] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white font-raleway">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-raleway">Tailored Proposal</h3>
              <p className="text-gray-600 leading-relaxed font-raleway">
                We deliver a transparent, milestone-based proposal designed for your specific scale and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Final Trust Signals */}
      <section className="py-20 px-4 bg-[#3B3808] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-raleway">
            Ready to Hire Offshore Developers in India?
          </h2>
          <p className="text-lg leading-relaxed mb-8 font-raleway">
            Join the global enterprises that trust Sunbrilo for high-velocity, secure, and scalable technology.
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
              <span>Start Your Journey</span>
              <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                <ArrowUpRightIcon className="group-hover:hidden" />
                <ArrowRightIcon className="hidden group-hover:block" />
              </span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
