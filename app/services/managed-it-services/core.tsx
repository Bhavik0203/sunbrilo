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
      title: "DevSecOps Integration",
      tagline: "Zero-Trust Automation",
      content: "We deploy continuous integration and deployment (CI/CD) pipelines integrated with automated security scanning, enabling your engineering teams to push updates faster, safer, and with Zero-Trust automation.",
      Icon: Terminal,
    },
    {
      index: "02",
      title: "Serverless Computing",
      tagline: "Pay-Per-Compute Model",
      content: "We modernize your legacy applications using serverless technologies (like AWS Lambda or Azure Functions) to eliminate infrastructure management overhead and ensure you only pay for the exact compute time you use.",
      Icon: ShieldCheck,
    },
    {
      index: "03",
      title: "AI-Driven 24/7 Monitoring (NOC)",
      tagline: "Predictive Health Analytics",
      content: "Our global Network Operations Center (NOC) leverages predictive AI to constantly monitor your cloud infrastructure health, automatically resolving performance bottlenecks before they impact end-users or your SLAs.",
      Icon: Layers,
    },
  ];

  const ActiveIcon = qualityItems[activeTab].Icon;

  return (
    <section className="py-8 bg-[#f5f3f3] text-gray-900 min-h-screen flex items-center overflow-hidden font-raleway">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Tech Structural Images */}
          <div className="lg:col-span-5 relative h-[580px] w-full flex items-center">
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
              Governance-First Managed Services <br />
              <span className="text-gray-500">& Audit Readiness</span>
            </h2>

            <div className="text-gray-600 max-w-xl mb-12 text-base leading-relaxed font-medium space-y-4">
              <p>
                Partnering with Sunbrilo means acquiring immediate, ironclad IT governance. We operate under transparent, SLA-driven contracts that specify guaranteed uptime (e.g., 99.99%) and time-to-resolution metrics.
              </p>
              <p>
                Our services enforce strict, global compliance. We manage all third-party license renewals, vendor relationships, and regulatory mandates (including SOC 2, HIPAA, GDPR, and ISO standards). By maintaining a state of continuous compliance and audit readiness, we protect your organization from both operational downtime and legal exposure.
              </p>
            </div>

            {/* Tabbed Interactive System Layout */}
          
          </div>

        </div>
      </div>
    </section>
  );
}