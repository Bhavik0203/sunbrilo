"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldCheck, Layers, ArrowUpRight } from "lucide-react";

export default function QualityEngineering() {
  const [activeTab, setActiveTab] = useState(0);

  const qualityItems = [
    {
      index: "01",
      title: "Identity & Access Management Governance",
      tagline: "Dynamic Role-Based Access Controls",
      content: "We deploy robust Identity-as-a-Service (IDaaS) platforms, enforcing dynamic, role-based access controls (RBAC) and single sign-on (SSO) to protect privileged access and mitigate insider threats.",
      Icon: Terminal,
    },
    {
      index: "02",
      title: "AI-Driven Threat Intelligence",
      tagline: "Automated Security Orchestration",
      content: "We integrate global threat intelligence feeds into an automated security orchestration, automation, and response (SOAR) platform, ensuring your defenses adapt instantly to emerging zero-day vulnerabilities.",
      Icon: ShieldCheck,
    },
    {
      index: "03",
      title: "Cyber Disaster Recovery",
      tagline: "Guaranteed Business Continuity",
      content: "Our battle-tested incident response playbooks include rapid forensic analysis and segmented network lockdown protocols, guaranteeing business continuity and minimal data loss following a significant event.",
      Icon: Layers,
    },
  ];

  const ActiveIcon = qualityItems[activeTab].Icon;

  return (
    <section className="py-8 bg-[#f5f3f3] text-gray-900 min-h-screen flex items-center overflow-hidden font-raleway">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Tech Structural Images */}
          <div className="lg:col-span-5 relative h-[320px] md:h-[450px] lg:h-[580px] w-full flex items-center justify-center lg:justify-start">
            {/* Primary Background Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[85%] h-[85%] rounded-[2rem] overflow-hidden border border-gray-200 shadow-2xl z-10"
            >
              <Image
                src="/images/devpage.png" 
                alt="Continuous Integration Dashboard Visual"
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* Asymmetric Overlay Image Corner */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 bottom-0 w-[45%] h-[45%] rounded-2xl overflow-hidden border-4 border-white  z-20 hidden sm:block"
            >
              <Image
                src="/images/services/service1.png" 
                alt="Codebase Conflict Validation Screen"
                fill
                className="object-cover"
              />
            </motion.div>
           
          </div>

          {/* Right Column: Interactive QA Segment Tabs */}
          <div className="lg:col-span-7 flex flex-col">
        

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              Architecting Zero-Trust <br />
              <span className="text-gray-500">& Identity Governance</span>
            </h2>

            <div className="text-gray-600 max-w-xl mb-12 text-base leading-relaxed font-medium space-y-4">
              <p>
                Security is engineered, not patched. We integrate governance and identity management into your enterprise DNA.
              </p>
            
            </div>

            {/* Tabbed Interactive System Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              
              {/* Left Side: Segment Selection Toggles */}
              <div className="flex flex-row md:flex-col justify-start gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 border-b md:border-b-0 border-gray-200 md:w-64 shrink-0 w-full scrollbar-hide">
                {qualityItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-left shrink-0 md:w-full ${
                      activeTab === idx
                        ? "bg-[#E8F4FD] border-r-2 border-b-2 border-[#5BA3E8] shadow-md text-gray-900"
                        : "hover:bg-gray-100 border border-transparent text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    <span className={`text-xs font-mono font-bold ${activeTab === idx ? "text-[#5BA3E8]" : "text-gray-400"}`}>
                      {item.index}
                    </span>
                    <span className="text-sm font-bold tracking-tight max-w-[180px] md:max-w-none truncate md:whitespace-normal">
                      {item.title.split(' & ')[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Right Side: Display Pane Container */}
              <div className="flex-1 w-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col"
                  >
                    <div>
                      <span className="text-xs uppercase font-mono tracking-widest text-[#5BA3E8] block mb-2 font-bold">
                        {qualityItems[activeTab].tagline}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                        {qualityItems[activeTab].title}
                      </h4>
                      <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
                        {qualityItems[activeTab].content}
                      </p>
                    </div>

               
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}