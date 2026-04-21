"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const servicesone = [
  {
    step: "01",
    id: "on-grid",
    title: "On-Grid Solar System",
    tagline: "Stay Connected. Let the Grid Work for You.",
    description:
      "On-grid systems are tied directly to the utility grid, allowing seamless power exchange. Generate solar energy during the day and draw from the grid at night — with zero battery required.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "No battery storage needed — lower upfront cost",
      "Net metering credits reduce electricity bills",
      "Automatic grid synchronization",
      "Ideal for urban homes & commercial buildings",
      "Eligible for government subsidies & incentives",
    ],
    featuresTitle: "On-Grid Advantages",
  },

  {
    step: "02",
    id: "off-grid",
    title: "Off-Grid Solar System",
    tagline: "Total Energy Independence. Anywhere.",
    description:
      "Off-grid systems operate completely independent of the utility network, making them perfect for remote areas, farms, and locations where grid access is unreliable or unavailable.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800",
    highlights: [
      "100% energy self-sufficiency",
      "High-capacity battery bank storage",
      "Ideal for remote & rural installations",
      "Zero electricity bills from utility providers",
      "Custom-sized for specific energy demands",
    ],
    featuresTitle: "Off-Grid Capabilities",
  },

  {
    step: "03",
    id: "hybrid",
    title: "Hybrid Solar System",
    tagline: "Best of Both Worlds. Smart Energy, Always On.",
    description:
      "Hybrid systems combine on-grid and off-grid advantages — storing excess energy in batteries while staying connected to the grid, ensuring uninterrupted power under any condition.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800",
    highlights: [
      "Battery backup + grid connection combined",
      "Smart energy management controller",
      "Seamless switching between sources",
      "Protection against grid outages",
      "Future-ready & expandable architecture",
    ],
    featuresTitle: "Hybrid System Benefits",
  },

  {
    step: "04",
    id: "rooftop",
    title: "Solar Rooftop Installation",
    tagline: "Customized Solar Solutions for Every Home & Business",
    description:
      "Tailored solar power systems designed specifically for residential and commercial rooftops to maximize energy efficiency and cost savings.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
    highlights: [
      "Custom site assessment & system design",
      "Tier-1 high-efficiency solar modules",
      "Seamless integration with existing structures",
      "Expert structural analysis and mounting",
      "Real-time energy generation monitoring",
    ],
    featuresTitle: "Key Implementation Features",
  },

  {
    step: "05",
    id: "grid",
    title: "Grid-Connected Solutions",
    tagline: "Sell Excess Energy. Save on Monthly Bills.",
    description:
      "On-grid solar systems allow you to feed surplus energy back to the public grid, drastically reducing your utility costs through net metering.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Automated net metering installation",
      "Grid stabilization & synchronization",
      "Significant reduction in monthly bills",
      "Simplified utility approval process",
      "Low maintenance with high ROI",
    ],
    featuresTitle: "Grid Connectivity Perks",
  },

  {
    step: "06",
    id: "battery",
    title: "Battery & Storage",
    tagline: "Uninterrupted Power for Peace of Mind",
    description:
      "Reliable energy storage systems ensure you have power during outages, peak demand periods, or cloudy monsoon days when sun exposure is low.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800",
    highlights: [
      "Advanced Lithium-ion battery technology",
      "Smart power management systems",
      "Instant backup transition (UPS mode)",
      "Peak shaving & demand response",
      "Scalable storage capacity",
    ],
    featuresTitle: "Storage System Capabilities",
  },

  {
    step: "07",
    id: "maintenance",
    title: "Maintenance & Monitoring",
    tagline: "Peak Performance. Zero Hassle.",
    description:
      "Comprehensive care including professional glass cleaning, electrical health checks, and AI-driven performance tracking to ensure maximum energy yield.",
    image:
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800",
    highlights: [
      "Regular professional panel cleaning",
      "AI-driven performance reports",
      "Electrical wiring & inverter health check",
      "Predictive maintenance alerts",
      "Quick response on-site support",
    ],
    featuresTitle: "Service & Care Benefits",
  },
];

const ArrowUpRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.7v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.3 4.2 2 2 0 0 1 4.3 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.4 2.1L8.4 10a16 16 0 0 0 5.6 5.6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.7 2Z" />
  </svg>
);

const CurveArrow = ({ active }: { active: boolean }) => (
  <svg
    viewBox="0 0 210 72"
    className={`h-[58px] w-[170px] text-[#2b2f32] transition-all duration-700 ${active ? "opacity-100" : "opacity-40"
      }`}
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M10 62C24 21 73 8 143 26"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      className={active ? "animate-[dash_1.1s_linear_infinite]" : ""}
    />
    <path
      d="M130 8L172 28L128 42"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDiag = ({ size = 20, color = "#d6ff52" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// Split services into two rows: first 4 original, last 3 new
const ROW_ONE = servicesone.slice(0, 4);
const ROW_TWO = servicesone.slice(4);

export default function Servicesone() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);

  const solutions = [
    { part: 1, icon: '/images/solutionicon/1.png', name: 'Logistic and Supply Chain Solutions' },
    { part: 2, icon: '/images/solutionicon/2.png', name: 'Canteen Management System' },
    { part: 3, icon: '/images/solutionicon/3.png', name: 'CMMS: Maximizing Asset Performance' },
    { part: 4, icon: '/images/solutionicon/4.png', name: 'HRMS: Empowering Your Workforce' },
    { part: 5, icon: '/images/solutionicon/5.png', name: 'Equipment Leasing Platform' },
    { part: 6, icon: '/images/solutionicon/1.png', name: 'Additional Solution 1' },
    { part: 7, icon: '/images/solutionicon/2.png', name: 'Additional Solution 2' },
    { part: 8, icon: '/images/solutionicon/3.png', name: 'Additional Solution 3' },
    { part: 9, icon: '/images/solutionicon/4.png', name: 'Additional Solution 4' },
  ];

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      // Scroll down - move one item down (continuous through all 9)
      setCurrentSolutionIndex((prev) => (prev + 1) % solutions.length);
    } else {
      // Scroll up - move one item up (continuous through all 9)
      setCurrentSolutionIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(".flair", {
        rotation: 720,
        ease: "none",
        scrollTrigger: {
          trigger: "#trigger",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.to(".step-circle", {
        rotation: -720,
        ease: "none",
        scrollTrigger: {
          trigger: "#trigger",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const intervalId = setInterval(() => {
      setActiveIndex((prev: number) => (prev + 1) % servicesone.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isAutoPlaying]);

  const handleStepClick = (idx: number) => {
    setActiveIndex(idx);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const selectedService = servicesone[activeIndex];

  const renderServiceCard = (service: (typeof servicesone)[0], idx: number, isLastInRow: boolean) => {
    const isActive = idx === activeIndex;
    return (
      <motion.article
        key={service.step}
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1.2,
          delay: idx * 0.4,
          ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out for a premium "glide"
        }}
        onClick={() => handleStepClick(idx)}
        className={`group relative text-center cursor-pointer transition-all duration-500 ${isActive ? "scale-105" : "hover:scale-102"}`}
        aria-current={isActive ? "step" : undefined}
      >
        <div className="relative mx-auto mb-7 h-[170px] w-[170px]">
          <span
            className={`absolute -right-1 top-0 z-20 inline-flex h-[48px] w-[48px] items-center justify-center rounded-full text-[31px] font-black transition-colors duration-500 ${isActive
              ? "bg-[#2f4322] text-[#d7ef92]"
              : "bg-[#bddc79] text-[#1b1f22]"
              }`}
          >
            {service.step}
          </span>

          <div
            className={`h-full w-full overflow-hidden rounded-full border-[7px] transition-all duration-500 ${isActive
              ? "border-[#bddc79]"
              : "border-white group-hover:border-[#bddc79]/30"
              }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        <h3
          className={`text-[clamp(22px,1.8vw,30px)] font-extrabold tracking-[-0.02em] transition-colors duration-300 ${isActive ? "text-[#2f4322]" : "text-[#1a1e22]"}`}
        >
          {service.title}
        </h3>
        <p className="mx-auto mt-3 max-w-[280px] text-[15px] leading-[1.5] text-[#262b30] opacity-80">
          {service.description.substring(0, 60)}...
        </p>

        {!isLastInRow && (
          <div className="pointer-events-none absolute right-[-98px] top-[58px] hidden xl:block">
            <CurveArrow active={idx === activeIndex} />
          </div>
        )}
      </motion.article>
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#e9efeb] ">
      <div className="mx-auto w-full px-3 sm:px-10">

        {/* Dynamic Details Card with Integrated Solutions */}
        <div className="mt-24 sm:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Circular ring with dots */}
          <div
            id="trigger"
            className="relative flex items-center justify-center min-h-[600px] lg:min-h-[700px]"
          >
            {/* Animated background grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#432422" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Outer orbit ring with rotating dashes */}
            <div
              className="absolute rounded-full border-[1.5px] border-dashed border-[#432422]"
              style={{ width: '520px', height: '520px', animation: 'spin 18s linear infinite' }}
            />

            {/* Middle orbit ring */}
            <div
              className="absolute rounded-full border-[1px] border-dotted border-[#2f4322]/40"
              style={{ width: '420px', height: '420px', animation: 'spin 12s linear infinite reverse' }}
            />

            {/* Small orbiting dot on outer ring */}
            <div className="absolute" style={{ width: '520px', height: '520px', animation: 'spin 18s linear infinite' }}>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#bddc79] shadow-[0_0_10px_#bddc79]" />
            </div>
            <div className="absolute" style={{ width: '520px', height: '520px', animation: 'spin 18s linear infinite' }}>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-[#8cab4b]/70" />
            </div>

            {/* Solutions positioned on circular ring - only show 4 at a time */}
            <div
              className="absolute z-10 w-full h-full"
              onWheel={handleWheel}
              style={{ width: '520px', height: '520px' }}
            >
              {/* Show all 9 points on the circular ring, but highlight 4 at a time */}
              {solutions.map((solution, index) => {
                const angle = ((index - currentSolutionIndex) * (360 / solutions.length)) * (Math.PI / 180);
                const radius = 240;
                const x = Math.cos(angle - Math.PI / 2) * radius;
                const y = Math.sin(angle - Math.PI / 2) * radius;
                
                // Calculate if this point should be visible (first 4 points)
                const adjustedIndex = (index - currentSolutionIndex + solutions.length) % solutions.length;
                const isVisible = adjustedIndex < 4;
                
                return (
                  <div key={index}>
                    {/* Solution point on ring */}
                    <div
                      className="absolute transition-all duration-300 ease-in-out"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        opacity: isVisible ? 1 : 0.2,
                        scale: isVisible ? 1 : 0.6,
                      }}
                    >
                      <div className={`w-4 h-4 rounded-full shadow-lg transition-colors duration-300 border-2 border-white ${
                        isVisible ? 'bg-blue-500' : 'bg-blue-300'
                      }`} />
                    </div>
                    
                    {/* Solution details positioned outward from the point */}
                    {isVisible && (
                      <div
                        className="absolute transition-all duration-300 ease-in-out flex items-center gap-2 bg-white rounded-lg shadow-md px-3 py-2"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(calc(-50% + ${x * 1.3}px), calc(-50% + ${y * 1.3}px))`,
                          width: '180px',
                        }}
                      >
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          Part {solution.part}
                        </div>
                        <img 
                          src={solution.icon} 
                          alt={`Solution ${solution.part}`} 
                          className="w-6 h-6 object-contain flex-shrink-0"
                        />
                        <div className="text-xs text-gray-700 leading-tight">
                          {solution.name.length > 20 ? solution.name.substring(0, 20) + '...' : solution.name}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Main flair circle in center */}
              <div className="flair absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]">
                <div className="absolute inset-0 rounded-full border-[2px] border-[#a8c559]/45" />
                <div className="absolute inset-[10%] rounded-full border-[2px] border-[#bddc79]/65" />
                <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-[#d7ef92] via-[#bddc79] to-[#8cab4b] shadow-[0_20px_60px_rgba(47,67,34,0.35)]" />

                {/* Glowing pulse ring */}
                <div
                  className="absolute inset-[18%] rounded-full border-2 border-[#bddc79]/50"
                  style={{ animation: 'pulseRing 2.5s ease-out infinite' }}
                />

                <div className="step-circle absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f2d17] ring-8 ring-[#d7ef92]/70 flex items-center justify-center">
                  <span className="text-[34px] sm:text-[42px] font-black text-[#d7ef92] tracking-[-0.03em]">
                    {selectedService.step}
                  </span>
                </div>

                {/* Solution dots positioned around the circle */}
                {solutions.slice(0, 4).map((solution, index) => {
                  const positions = [
                    'right-[-30%] top-1/3 -translate-y-1/2',
                    'right-[-30%] top-1/2 -translate-y-1/2', 
                    'left-1/2 top-[-30%] -translate-x-2/3',
                    'left-1/2 bottom-[8%] -translate-x-1/3'
                  ];
                  
                  return (
                    <div key={solution.part} className={`absolute ${positions[index]} h-3.5 w-3.5 rounded-full bg-[#2f4322] flex items-center justify-center`}>
                      <div className="h-2 w-2 rounded-full bg-[#bddc79]" />
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md px-2 py-1 whitespace-nowrap">
                        <div className="text-xs text-gray-700 font-medium">
                          Part {solution.part}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Scroll indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: solutions.length }, (_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentSolutionIndex === i ? 'bg-blue-500' : 'bg-gray-300'}`} 
                  />
                ))}
              </div>
            </div>

            <style>{`
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes floatY {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes pulseRing {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; left: 50%; top: 50%; position: absolute; }
      100% { transform: translate(-50%, -50%) scale(1.35); opacity: 0; left: 50%; top: 50%; position: absolute; }
    }
    @keyframes growBar {
      from { width: 0%; }
    }
  `}</style>
          </div>
        </div>

      </div>
      <style jsx>{`
        @keyframes dash {
          0% {
            stroke-dasharray: 10 10;
            stroke-dashoffset: 40;
          }
          100% {
            stroke-dasharray: 10 10;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
