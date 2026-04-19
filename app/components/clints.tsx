"use client";

import { useEffect, useRef, useState } from "react";

// ─── Client Logo Images ─────────────────────────────────────────────────────
const clientLogos = [
  { id: 1, name: "Client 1", image: "/images/Sunbirlo Client log/Group 204.png" },
  { id: 2, name: "Client 2", image: "/images/Sunbirlo Client log/Group 224.png" },
  { id: 3, name: "Client 3", image: "/images/Sunbirlo Client log/Group 225.png" },
  { id: 4, name: "Client 4", image: "/images/Sunbirlo Client log/Group 227.png" },
  { id: 5, name: "Client 5", image: "/images/Sunbirlo Client log/Group 228.png" },
  { id: 6, name: "Client 6", image: "/images/Sunbirlo Client log/Group 229.png" },
  { id: 7, name: "Client 7", image: "/images/Sunbirlo Client log/Group 230.png" },
  { id: 8, name: "Client 8", image: "/images/Sunbirlo Client log/Group 231.png" },
  { id: 9, name: "Client 9", image: "/images/Sunbirlo Client log/Group 232.png" },
  { id: 10, name: "Client 10", image: "/images/Sunbirlo Client log/Group 233.png" },
  { id: 11, name: "Client 11", image: "/images/Sunbirlo Client log/Group 234.png" },
  { id: 12, name: "Client 12", image: "/images/Sunbirlo Client log/Group 235.png" },
  { id: 13, name: "Client 13", image: "/images/Sunbirlo Client log/Group 236.png" },
  { id: 14, name: "Client 14", image: "/images/Sunbirlo Client log/Group 237.png" },
  { id: 15, name: "Client 15", image: "/images/Sunbirlo Client log/Group 239.png" },
];

// ─── Single Logo Card ─────────────────────────────────────────────────────────
function LogoCard({ logo, delay }: { logo: (typeof clientLogos)[0]; delay: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className="flex items-center justify-center p-3 rounded-xl bg-white border border-gray-200 shadow-md cursor-pointer group hover:shadow-lg hover:border-blue-300 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      <img
        src={logo.image}
        alt={logo.name}
        className="w-full h-auto max-h-16 object-contain"
      />
    </div>
  );
}

// ─── Scrolling column ────────────────────────────────────────────────────────
function ScrollColumn({
  items,
  direction,
  speed,
}: {
  items: (typeof clientLogos)[0][];
  direction: "up" | "down";
  speed: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="flex flex-col gap-3 overflow-hidden" style={{ height: "320px" }}>
      <div
        className="flex flex-col gap-3"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((logo, i) => (
          <LogoCard key={`${logo.id}-${i}`} logo={logo} delay={i * 60} />
        ))}
      </div>
    </div>
  );
}

// ─── Network SVG background ──────────────────────────────────────────────────
function NetworkBg() {
  return (
    <svg
      viewBox="0 0 600 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Paper plane */}
      <g transform="translate(380,60) rotate(-15)">
        <polygon points="0,0 90,30 0,60" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.9" />
        <polygon points="0,0 90,30 45,38" fill="#1d4ed8" opacity="0.5" />
        <line x1="0" y1="60" x2="45" y2="38" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
      </g>

      {/* Network nodes */}
      {[
        [120, 80], [200, 140], [300, 60], [380, 200], [460, 100],
        [500, 240], [150, 220], [260, 280], [420, 280], [340, 160],
        [80, 160], [540, 160],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 4 : 2.5} fill="#60a5fa" opacity={0.6 + (i % 3) * 0.1} />
      ))}

      {/* Network lines */}
      {[
        [120, 80, 200, 140], [200, 140, 300, 60], [300, 60, 460, 100],
        [460, 100, 500, 240], [500, 240, 420, 280], [420, 280, 260, 280],
        [260, 280, 150, 220], [150, 220, 80, 160], [80, 160, 120, 80],
        [200, 140, 340, 160], [340, 160, 380, 200], [340, 160, 460, 100],
        [300, 60, 340, 160], [380, 200, 500, 240], [150, 220, 260, 280],
        [120, 80, 80, 160], [200, 140, 150, 220], [540, 160, 460, 100],
        [540, 160, 500, 240],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#3b82f6"
          strokeWidth="0.8"
          opacity={0.25 + (i % 4) * 0.07}
        />
      ))}
    </svg>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ClientsSection() {
  const col1 = clientLogos.slice(0, 5);
  const col2 = clientLogos.slice(5, 10);
  const col3 = clientLogos.slice(10, 15);

  return (
    <>
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <section className="w-full  py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-6 rounded-2xl overflow-hidden ">

          {/* ── Left: scrolling logo grid ── */}
          <div className="flex-1  ">
            <div className="grid grid-cols-3 gap-3 overflow-hidden" style={{ maxHeight: "340px" }}>
              <div className="relative">
                <ScrollColumn items={col1} direction="up" speed={12} />
              </div>
              <div className="relative">
                <ScrollColumn items={col2} direction="down" speed={15} />
              </div>
              <div className="relative">
                <ScrollColumn items={col3} direction="up" speed={10} />
              </div>
            </div>
          </div>

          {/* ── Right: dark panel ── */}
          <div
            className="flex-1 relative flex flex-col justify-center px-10 py-10 rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 60%, #091525 100%)" }}
          >
            <NetworkBg />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-blue-400 opacity-80" />
                <span className="text-blue-300 text-sm font-semibold uppercase tracking-widest">
                  Clients
                </span>
              </div>

              <h2
                className="text-white font-black leading-tight"
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontFamily: "'Georgia', serif",
                }}
              >
                Trusted by the best<br />
                <span className="text-blue-300">in the industry</span>
              </h2>

              <p className="mt-4 text-blue-200/70 text-sm max-w-xs leading-relaxed">
                Partnering with forward-thinking brands to deliver impactful digital experiences.
              </p>

              <button
                className="mt-6 px-5 py-2 rounded-full text-sm font-semibold text-white border border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300"
                style={{ letterSpacing: "0.04em" }}
              >
                View all clients →
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}