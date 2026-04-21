"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const solutions = [
  { label: "Part 1", title: "Logistic & Supply Chain", desc: "End-to-end visibility with real-time tracking, demand forecasting, and intelligent route optimization." },
  { label: "Part 2", title: "Canteen Management System", desc: "Smart cafeteria ops with digital menus, pre-ordering, dietary tracking, and waste reduction analytics." },
  { label: "Part 3", title: "CMMS: Asset Performance", desc: "Predict failures, schedule preventive maintenance, and extend asset lifecycle with smart CMMS tools." },
  { label: "Part 4", title: "HRMS: Workforce Empowerment", desc: "Payroll automation, attendance tracking, performance reviews, and talent development in one platform." },
  { label: "Part 5", title: "ERP: Business Intelligence", desc: "Unified finance, operations, and customer data for smarter enterprise-wide decision-making." },
  { label: "Part 6", title: "CRM: Customer Engine", desc: "360° customer view with AI lead scoring, pipeline management, and automated follow-up workflows." },
  { label: "Part 7", title: "WMS: Warehouse Platform", desc: "Intelligent warehouse management with RFID integration, slot optimization, and real-time accuracy." },
  { label: "Part 8", title: "BI: Analytics Dashboard", desc: "Customizable dashboards, KPI tracking, and predictive analytics powered by machine learning." },
  { label: "Part 9", title: "IoT: Smart Facility Mgmt", desc: "Connect every sensor for automated energy management, predictive alerts, and smart access control." },
];

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
      "https://images.unsplash.com/photo-1473341304170-d9e808231d41?q=80&w=800",
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

const N = solutions.length;
const VISIBLE = 4;
const CX = 260, CY = 260, R = 240;
const CARD_H = 100; // card + gap height in px

// 4 fixed dot positions on the ring (degrees from 12 o'clock)
const DOT_ANGLES = [50, 80, 110, 140];

function angleToXY(deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) };
}

function SolarServicesComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
      setActiveStep((prev) => (prev + 1) % servicesone.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isAutoPlaying]);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const selectedService = servicesone[activeStep];

  const renderServiceCard = (service: (typeof servicesone)[0], idx: number, isLastInRow: boolean) => {
    const isActive = idx === activeStep;
    return (
      <motion.article
        key={service.step}
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1.2,
          delay: idx * 0.4,
          ease: [0.16, 1, 0.3, 1]
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
            <CurveArrow active={idx === activeStep} />
          </div>
        )}
      </motion.article>
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#e9efeb]">
      <div className="mx-auto w-full px-3 sm:px-10">
        <div className="mt-24 sm:mt-32 grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          

      
        </div>
      </div>

     
    </section>
  );
}

export default function SolutionsScroll() {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const selectedService = servicesone[0]; // Default to first service

  const onScroll = useCallback(() => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const trackH = trackRef.current.offsetHeight;
    const wh = window.innerHeight;
    const progress = Math.max(0, Math.min(1, -rect.top / (trackH - wh)));
    setActiveIdx(Math.round(progress * (N - 1)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const visStart = Math.max(0, Math.min(activeIdx, N - VISIBLE));

  const circum = 2 * Math.PI * R;
  const arcLen = (activeIdx / (N - 1)) * (270 / 360) * circum;
  const arcOffset = -((-75) / 360) * circum;

  const activeDotSlot = activeIdx - visStart;
  const { x: ax, y: ay } = angleToXY(DOT_ANGLES[activeDotSlot]);

  return (
    <div  >
      {/* Left side - Solar Services */}
      {/* <SolarServicesComponent /> */}
      
    
      {/* Right side - Solutions Ring */}
      <div className="relative " style={{ height: `${N * 200}px` }}>
        <div
          className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden "
        >
       
          <div className="relative flex items-center justify-start w-full max-w-6xl px-6 pt-16 py-30">
              {/* Heading */}
              <div className="absolute top-10 left-0 text-right ">
                <h2 className="text-3xl font-bold text-gray-800 font-raleway">Solutions We Provide</h2>
              </div>
              
              {/* Main container for both solar services and SVG ring */}
              <div className="relative w-[520px] h-[520px]">
              
              {/* SVG Ring - Background Layer */}
              <svg className="absolute inset-0 z-10" width="520" height="520" viewBox="0 0 520 520">
                <circle cx={CX} cy={CY} r={R} fill="none" stroke="#bfdbfe" strokeWidth={1} strokeDasharray="4 6" opacity={0.5} />
                <circle cx={CX} cy={CY} r={96} fill="none" stroke="#bfdbfe" strokeWidth={0.5} opacity={0.25} />
                
                <circle
                  cx={CX} cy={CY} r={R}
                  fill="none" stroke="#3b82f6" strokeWidth={2} strokeLinecap="round"
                  strokeDasharray={`${arcLen} ${circum}`}
                  strokeDashoffset={arcOffset}
                  transform={`rotate(-90 ${CX} ${CY})`}
                  style={{ transition: "stroke-dasharray 0.5s ease" }}
                />
                
                {Array.from({ length: VISIBLE }).map((_, d) => {
                  const solIdx = visStart + d;
                  const ang = DOT_ANGLES[d];
                  const { x, y } = angleToXY(ang);
                  const isActive = solIdx === activeIdx;
                  const isPast = solIdx < activeIdx;
                  const fill = isActive ? "#2563eb" : isPast ? "#93c5fd" : "#bfdbfe";

                  let lx = x, ly = y, anchor: "middle" | "start" | "end" = "middle";
                  if (ang < -30) { ly = y - 14; }
                  else if (ang > 60) { ly = y + 18; }
                  else { lx = x + 16; anchor = "start"; ly = y + 4; }

                  return (
                    <g key={d}>
                      {isActive && <circle cx={x} cy={y} r={12} fill="none" stroke="#3b82f6" strokeWidth={1} opacity={0.35} />}
                      <circle cx={x} cy={y} r={isActive ? 7 : 5} fill={fill} stroke={isActive ? "#2563eb" : "none"} strokeWidth={isActive ? 2 : 0} style={{ transition: "all 0.4s ease" }} />
                      <text x={lx} y={ly} textAnchor={anchor} fontSize={9} fill="#64748b" fontFamily="Raleway, sans-serif">P{solIdx + 1}</text>
                    </g>
                  );
                })}

                <line x1={ax + 8} y1={ay} x2={295} y2={ay} stroke="#3b82f6" strokeWidth={1} strokeDasharray="3 4" opacity={0.4} style={{ transition: "all 0.5s ease" }} />
              </svg>

              {/* Solar Services - Center Layer */}
              <div
                id="trigger"
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div
                  className="absolute rounded-full border-[1.5px] border-dashed border-[#432422]"
                  style={{ width: '420px', height: '420px', animation: 'spin 18s linear infinite' }}
                />

                <div className="absolute" style={{ width: '520px', height: '520px', animation: 'spin 18s linear infinite' }}>
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#bddc79] shadow-[0_0_10px_#bddc79]" />
                </div>
                <div className="absolute" style={{ width: '520px', height: '520px', animation: 'spin 18s linear infinite' }}>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-[#8cab4b]/70" />
                </div>

                <div className="flair relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]">
                  <div className="absolute inset-0 rounded-full border-[2px] border-[#a8c559]/45" />
                  <div className="absolute inset-[10%] rounded-full border-[2px] border-[#bddc79]/65" />
                  <div className="absolute inset-[20%] rounded-full bg-cover bg-center shadow-[0_20px_60px_rgba(47,67,34,0.35)]" style={{ backgroundImage: "url('/images/Group161.png')" }} />

                  <div
                    className="absolute inset-[18%] rounded-full border-2 border-[#bddc79]/50"
                    style={{ animation: 'pulseRing 2.5s ease-out infinite' }}
                  />

                  {/* <div className="step-circle absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f2d17] ring-8 ring-[#d7ef92]/70 flex items-center justify-center">
                    <span className="text-[34px] sm:text-[42px] font-black text-[#d7ef92] tracking-[-0.03em]">
                      {selectedService.step}
                    </span>
                  </div> */}

                  <span className="absolute left-[8%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#2f4322]" />
                  <span className="absolute right-[8%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#2f4322]" />
                  <span className="absolute left-1/2 top-[8%] h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#2f4322]" />
                  <span className="absolute left-1/2 bottom-[8%] h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#2f4322]" />
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

              {/* Solution Cards - Outer Layer */}
              <div className="absolute inset-0 pointer-events-none z-30 ">
                {solutions.map((s, i) => {
                  const isActive = i === activeIdx;
                  const isVisible = i >= visStart && i < visStart + VISIBLE;
                  const cardIndex = i - visStart;

                  const cardAngle = DOT_ANGLES[cardIndex] || 0;
                  const cardRadius = R + 120;
                  const rad = ((cardAngle - 90) * Math.PI) / 180;
                  const cardX = CX + cardRadius * Math.cos(rad);
                  const cardY = CY + cardRadius * Math.sin(rad);

                  return (
                    <div key={i} className="absolute pointer-events-auto" style={{
                      opacity: isVisible ? 1 : 0,
                      transform: `translate(${cardX - 112}px, ${cardY - 48}px)`,
                      transition: "all 0.55s cubic-bezier(.4,0,.2,1)"
                    }}>
                      <div
                        className="rounded-2xl ml-20 px-4 py-3 border transition-all duration-400 w-136"
                        style={{
                          background: isActive ? "rgba(219,234,254,0.9)" : "rgba(255,255,255,0.85)",
                          borderColor: isActive ? "#3b82f6" : "rgba(191,219,254,0.6)",
                          boxShadow: isActive ? "0 4px 12px rgba(59,130,246,0.15)" : "0 2px 8px rgba(0,0,0,0.1)",
                          backdropFilter: "blur(8px)",
                          transform: `scale(${isActive ? 1.05 : 1})`,
                        }}
                      >
                        <p className="text-[9px] font-semibold uppercase tracking-widest mb-1 font-raleway" style={{ color: isActive ? "#1d4ed8" : "#94a3b8" }}>{s.label}</p>
                        <p className="text-xs font-bold text-slate-800 leading-tight mb-1 font-raleway">{s.title}</p>
                        <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-2 font-raleway">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div ref={trackRef} className="absolute inset-0 pointer-events-none" />
      </div>
    </div>
  );
}