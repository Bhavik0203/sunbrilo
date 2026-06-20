import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data included so the component works immediately
type LocationData = {
  title: string;
  address: string;
  mapSrc: string;
  flag: string;
};

const locations: Record<string, LocationData> = {
  India: {
    title: 'Pune Engineering Hub',
    address: 'Pune, Maharashtra, India. Housing our elite engineering squads and 24/7 NOC.',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360434076!2d73.7805654!3d18.5245649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin',
    flag: '🇮🇳',
  },
  USA: {
    title: 'US Operations Center',
    address: 'New York, USA. Driving business development and client relations.',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175408226066!2d-73.98782038459418!3d40.74844047932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus',
    flag: '🇺🇸',
  },
  UK: {
    title: 'European Headquarters',
    address: 'London, UK. European expansion and technical support division.',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.18237072596!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus',
    flag: '🇬🇧',
  },
};

export default function SplitViewGlobalHub() {
  const [activeTab, setActiveTab] = useState('India');

  return (
    <div className="min-h-screen bg-[#f4f5f7] py-12 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      <div className="max-w-[1300px] w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Sidebar - Navigation & General Info */}
        <div className="bg-[#112344] lg:w-[35%] p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Background Blob */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Global Footprint
              </h2>
              <p className="text-blue-200 text-sm leading-relaxed">
                Explore our engineering hubs and operation centers around the world. Select a region to view details.
              </p>
            </motion.div>

            {/* Vertical Navigation */}
            <div className="space-y-3 relative z-10">
              {Object.keys(locations).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left px-6 py-4 rounded-xl flex items-center justify-between transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-blue-600 text-white shadow-lg translate-x-2'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{locations[key].flag}</span>
                    <span className="font-semibold tracking-wide uppercase">{key}</span>
                  </div>
                  {activeTab === key && (
                    <motion.div layoutId="active-arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Email Contacts directly in Sidebar */}
          <div className="mt-16 space-y-4 relative z-10 border-t border-white/10 pt-8">
            <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Direct Inquiries</h4>
            <a href="mailto:info@sunbrilotechnologies.com" className="flex items-center space-x-3 text-sm text-blue-200 hover:text-white transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>info@sunbrilotechnologies.com</span>
            </a>
            <a href="mailto:sales@sunbrilotechnologies.com" className="flex items-center space-x-3 text-sm text-blue-200 hover:text-white transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>sales@sunbrilotechnologies.com</span>
            </a>
            <a href="mailto:hr@sunbrilotechnologies.com" className="flex items-center space-x-3 text-sm text-blue-200 hover:text-white transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span>hr@sunbrilotechnologies.com</span>
            </a>
          </div>
        </div>

        {/* Right Content Area - Dynamic View */}
        <div className="lg:w-[65%] bg-white relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col p-8 md:p-12"
            >
              {/* Active Tab Header & Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
                <div className="max-w-md space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    <span>{activeTab} Office</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                    {locations[activeTab].title}
                  </h3>
                  <div className="flex items-start space-x-3 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <p className="text-base leading-relaxed">{locations[activeTab].address}</p>
                  </div>
                </div>

                {/* Specific Indian Phone Numbers */}
                {activeTab === 'India' && (
                  <div className="flex flex-col gap-3 shrink-0">
                    <div className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-lg flex items-center space-x-3 hover:bg-gray-100 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-md text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase">Sales</p>
                        <p className="text-sm font-bold text-gray-900">+91 9545898353</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-lg flex items-center space-x-3 hover:bg-gray-100 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-md text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase">HR</p>
                        <p className="text-sm font-bold text-gray-900">+91 8788563349</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Container */}
              <div className="flex-grow w-full min-h-[350px] rounded-2xl overflow-hidden relative shadow-inner ring-1 ring-black/5 bg-gray-100">
                <iframe
                  src={locations[activeTab].mapSrc}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}