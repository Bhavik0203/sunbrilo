"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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

export default function SolutionsScroll() {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

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

  // Progress arc math
  const circum = 2 * Math.PI * R;
  const arcLen = (activeIdx / (N - 1)) * (270 / 360) * circum;
  const arcOffset = -((-75) / 360) * circum;

  // Active dot slot → position for connector
  const activeDotSlot = activeIdx - visStart;
  const { x: ax, y: ay } = angleToXY(DOT_ANGLES[activeDotSlot]);

  return (
    <>
      {/* <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" /> */}


      {/* Scroll section */}
      <div className="relative" style={{ height: `${N * 200}px` }}>

        {/* Sticky viewport */}
        <div
          className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg,#f0f7ff,#e8f4fd 60%,#f5f9ff)" }}
        >
          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle,#bfdbfe 1px,transparent 1px)", backgroundSize: "36px 36px", opacity: 0.18 }} />

          {/* Heading */}
          {/* <div className="relative text-center mb-8">
            <p className="text-[11px] tracking-widest uppercase text-blue-400 font-semibold mb-1" style={{ fontFamily: "Sora,sans-serif" }}>Our Platform</p>
            <h2 className="text-2xl font-bold text-slate-800" style={{ fontFamily: "Sora,sans-serif" }}>Solutions we provide</h2>
            <div className="mx-auto mt-2 h-0.5 w-16 rounded" style={{ background: "linear-gradient(90deg,#60a5fa,#22d3ee)" }} />
          </div> */}

          {/* Ring + Cards */}
          <div className="relative flex items-center gap-2 w-full max-w-2xl px-6">

            {/* Ring SVG */}
            <div className="flex-shrink-0 relative w-[520px] h-[520px]">
              <svg width="520" height="520" viewBox="0 0 520 520">
                {/* Orbit ring */}
                <circle cx={CX} cy={CY} r={R} fill="none" stroke="#bfdbfe" strokeWidth={1} strokeDasharray="4 6" opacity={0.5} />
                {/* Inner ring */}
                <circle cx={CX} cy={CY} r={96} fill="none" stroke="#bfdbfe" strokeWidth={0.5} opacity={0.25} />

                {/* Progress arc */}
                <circle
                  cx={CX} cy={CY} r={R}
                  fill="none" stroke="#3b82f6" strokeWidth={2} strokeLinecap="round"
                  strokeDasharray={`${arcLen} ${circum}`}
                  strokeDashoffset={arcOffset}
                  transform={`rotate(-90 ${CX} ${CY})`}
                  style={{ transition: "stroke-dasharray 0.5s ease" }}
                />

                {/* Center glow */}
                {/* <circle cx={CX} cy={CY} r={72} fill="#dbeafe" fillOpacity={0.55} />

                
                <path d="M130 210 Q145 195 140 175 Q135 155 152 148 Q169 141 164 124" stroke="#60a5fa" strokeWidth={2} fill="none" strokeLinecap="round" strokeDasharray="3 4" opacity={0.5} />
                <polygon points="148,168 172,152 172,176 148,192" fill="#60a5fa" opacity={0.9} />
                <polygon points="128,158 148,142 148,168 128,184" fill="#93c5fd" opacity={0.85} />
                <polygon points="128,158 172,152 172,158 128,164" fill="#bfdbfe" opacity={0.7} />
                <circle cx={138} cy={174} r={5} fill="#1d4ed8" opacity={0.7} />
                <path d="M135 179 Q138 188 141 179" stroke="#1d4ed8" strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={0.7} />
                <path d="M135 181 L132 187 M141 181 L144 187" stroke="#1d4ed8" strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={0.7} /> */}

                {/* 4 dots on ring */}
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
                      <text x={lx} y={ly} textAnchor={anchor} fontSize={9} fill="#64748b" fontFamily="DM Sans,sans-serif">P{solIdx + 1}</text>
                    </g>
                  );
                })}

                {/* Connector line from active dot to cards */}
                <line x1={ax + 8} y1={ay} x2={295} y2={ay} stroke="#3b82f6" strokeWidth={1} strokeDasharray="3 4" opacity={0.4} style={{ transition: "all 0.5s ease" }} />
              </svg>

              {/* Progress bar dots */}
              {/* <div className="absolute flex gap-1.5 items-center" style={{ bottom: -24, left: "50%", transform: "translateX(-50%)" }}>
                {solutions.map((_, i) => (
                  <div key={i} className="h-1.5 rounded-full transition-all duration-300" style={{ width: i === activeIdx ? 16 : 6, background: i === activeIdx ? "#2563eb" : i < activeIdx ? "#93c5fd" : "#dbeafe" }} />
                ))}
              </div> */}
            </div>

            {/* Cards positioned around circle */}
            <div className="absolute inset-0 pointer-events-none">
              {solutions.map((s, i) => {
                const isActive = i === activeIdx;
                const isVisible = i >= visStart && i < visStart + VISIBLE;
                const cardIndex = i - visStart;

                // Calculate angle for card position (spread around circle)
                const cardAngle = DOT_ANGLES[cardIndex] || 0;
                const cardRadius = R + 120; // Position cards further outside the ring
                const rad = ((cardAngle - 90) * Math.PI) / 180;
                const cardX = CX + cardRadius * Math.cos(rad);
                const cardY = CY + cardRadius * Math.sin(rad);

                // Adjust text anchor based on position
                let textAnchor: "middle" | "start" | "end" = "middle";
                let offsetX = 0;
                if (cardAngle < -30) { textAnchor = "middle"; offsetX = 0; }
                else if (cardAngle > 60) { textAnchor = "middle"; offsetX = 0; }
                else { textAnchor = "start"; offsetX = 10; }

                return (
                  <div key={i} className="absolute pointer-events-auto" style={{
                    opacity: isVisible ? 1 : 0,
                    transform: `translate(${cardX - 112}px, ${cardY - 48}px)`,
                    transition: "all 0.55s cubic-bezier(.4,0,.2,1)"
                  }}>
                    <div
                      className="rounded-2xl ml-20 px-4 py-3 border transition-all duration-400 w-96"
                      style={{
                        background: isActive ? "rgba(219,234,254,0.9)" : "rgba(255,255,255,0.85)",
                        borderColor: isActive ? "#3b82f6" : "rgba(191,219,254,0.6)",
                        boxShadow: isActive ? "0 4px 12px rgba(59,130,246,0.15)" : "0 2px 8px rgba(0,0,0,0.1)",
                        backdropFilter: "blur(8px)",
                        transform: `scale(${isActive ? 1.05 : 1})`,
                      }}
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-widest mb-1" style={{ color: isActive ? "#1d4ed8" : "#94a3b8", fontFamily: "Sora,sans-serif" }}>{s.label}</p>
                      <p className="text-xs font-bold text-slate-800 leading-tight mb-1" style={{ fontFamily: "Sora,sans-serif" }}>{s.title}</p>
                      <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2" style={{ fontFamily: "DM Sans,sans-serif" }}>{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Counter */}
          {/* <p className="mt-8 text-xs text-slate-400 tracking-widest" style={{ fontFamily: "DM Sans,sans-serif" }}>{activeIdx + 1} / {N}</p> */}
        </div>

        {/* Invisible scroll track */}
        <div ref={trackRef} className="absolute inset-0 pointer-events-none" />
      </div>

     
    </>
  );
}