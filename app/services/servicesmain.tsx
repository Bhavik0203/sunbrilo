'use client';

import { useState, useEffect, useRef } from 'react';

const capabilities = [
  {
    title: 'Application & Software Engineering',
    label: ['APPLICATION', 'SOFTWARE'],
    desc: 'We design decoupled, microservices-driven applications that eliminate technical debt and accelerate time-to-market.',
    link: 'Explore Software Development',
    image: '/images/services/service1.png',
  },
  {
    title: 'Global Talent Solutions & GCCs',
    label: ['GLOBAL', 'TALENT'],
    desc: 'Establish high-performance, dedicated engineering pods that integrate flawlessly with your corporate culture and strategic objectives.',
    link: 'Scale Your Team',
    image: '/images/services/service2.png',
  },
  {
    title: 'Cloud Strategy & Operations',
    label: ['CLOUD', 'ARCHITECTURE'],
    desc: 'Master the cloud continuum. From seamless migrations to ongoing managed infrastructure, we optimize your enterprise for the digital age.',
    link: 'Discover Cloud Solutions',
    image: '/images/services/service3.png',
  },
  {
    title: 'Data Analytics & Applied AI',
    label: ['DATA ANALYTICS', '& AI'],
    desc: 'Transform siloed data into actionable intelligence with advanced data lakes, BI visualizations, and predictive machine learning models',
    link: 'Unlock Data Analytics',
    image: '/images/services/service4.png',
  },
  {
    title: 'Cybersecurity & Resilience',
    label: ['CYBERSECURITY', '& RESILIENCE'],
    desc: 'Proactive threat intelligence, vulnerability management, and robust infrastructure monitoring to protect your critical digital assets.',
    link: 'Secure Your Enterprise',
    image: '/images/services/service5.png',
  },
];

export default function EnterpriseCapabilities() {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(0);
  const [imageKey, setImageKey] = useState(0);
  const [descKey, setDescKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetAuto = () => {
    if (autoRef.current) clearTimeout(autoRef.current);
    autoRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % capabilities.length);
    }, 4500);
  };

  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearTimeout(autoRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const handleSelect = (i: number) => {
    if (i === active || isTransitioning) return;
    setIsTransitioning(true);
    setPrevActive(active);
    setTimeout(() => {
      setActive(i);
      setImageKey((k) => k + 1);
      setDescKey((k) => k + 1);
      setIsTransitioning(false);
    }, 200);
    resetAuto();
  };

  return (
    <>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes imageReveal {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes pillPop {
          0%   { transform: scaleX(0.7); opacity: 0; }
          60%  { transform: scaleX(1.04); }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes cardSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(91,163,232,0.5); }
          50%       { box-shadow: 0 0 0 7px rgba(91,163,232,0); }
        }
        .cap-img-anim  { animation: imageReveal 0.55s cubic-bezier(0.22,1,0.36,1) both; }
        .cap-card-anim { animation: cardSlide 0.4s cubic-bezier(0.22,1,0.36,1) both; }
        .cap-pill-anim { animation: pillPop 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
        .dot-pulse     { animation: dotPulse 1.8s ease-in-out infinite; }
        .cap-item      { transition: opacity 0.15s; }
        .cap-item:hover { opacity: 0.85; }
      `}</style>

      <section className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 font-raleway">
              Our Enterprise Capabilities
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed font-raleway max-w-md mx-auto">
              Discover how our specialized engineering divisions can accelerate your digital transformation.
            </p>
          </div>

          {/* Main Card */}
          <div
            className="flex  overflow-hidden shadow-lg"
            style={{ minHeight: 440, border: '1px solid #e5e7eb' }}
          >
            {/* ── LEFT: Image panel ── */}
            <div className="relative w-[42%] flex-shrink-0 bg-[#080e2a] overflow-hidden flex items-end">
              {/* Background image with crossfade */}
              <img
                key={imageKey}
                src={capabilities[active].image}
                alt={capabilities[active].title}
                className="cap-img-anim absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.65 }}
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(8,14,42,0.85) 30%, rgba(8,14,42,0.15) 100%)',
                }}
              />

              {/* Decorative glow orbs */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: '30%', left: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: 180, height: 180,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(91,163,232,0.22) 0%, transparent 70%)',
                }}
              />

              {/* Label */}
              <div className="relative z-10 p-7 pb-8">
                {capabilities[active].label.map((line, li) => (
                  <p
                    key={`${imageKey}-${li}`}
                    className="text-white font-extrabold uppercase tracking-widest leading-tight"
                    style={{
                      fontSize: '1.35rem',
                      textShadow: '0 2px 12px rgba(0,0,0,0.5)',
                      animation: `fadeSlideIn ${0.38 + li * 0.1}s cubic-bezier(0.22,1,0.36,1) both`,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* ── RIGHT: List panel ── */}
            <div
              className="flex-1 flex flex-col justify-center px-8 py-6"
              style={{
                background: '#ffffff',
              }}
            >
              {capabilities.map((cap, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={i}
                    onClick={() => handleSelect(i)}
                    className="cap-item flex items-start gap-4 py-[14px] cursor-pointer border-b border-gray-100/80 last:border-b-0 select-none"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleSelect(i)}
                    aria-selected={isActive}
                  >
                    {/* Dot: solid blue when active, light outline when inactive */}
                    <span
                      className={`mt-[6px] w-3 h-3 rounded-full flex-shrink-0 ${
                        isActive ? 'dot-pulse' : ''
                      }`}
                      style={{
                        background: isActive ? '#5BA3E8' : 'transparent',
                        border: isActive ? '2px solid #5BA3E8' : '2px solid #bdd5ee',
                        boxShadow: isActive ? '0 0 0 3px rgba(91,163,232,0.2)' : 'none',
                        transition: 'background 0.3s, border 0.3s, box-shadow 0.3s',
                      }}
                    />

                    <div className="flex-1 min-w-0">
                      {isActive ? (
                        /* ── Active: yellow pill + description card ── */
                        <>
                          {/* Yellow pill title */}
                          <span
                            className="cap-pill-anim inline-block bg-[#ffee50] text-gray-900 text-[18px] font-bold font-raleway px-4 py-1 rounded-full leading-snug origin-left"
                          >
                            {cap.title}
                          </span>

                          {/* Description card */}
                          <div
                            key={descKey}
                            className="cap-card-anim mt-3 rounded-xl px-4 py-3"
                            style={{
                           background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 55%, #f8fbff 100%)',
                              border: '1px solid rgba(91,163,232,0.15)',
                            }}
                          >
                            <p className="text-[14.5px] text-gray-600 leading-relaxed font-raleway">
                              {cap.desc}
                            </p>
                          </div>
                        </>
                      ) : (
                        /* ── Inactive: plain title ── */
                        <p className="text-[18px] font-semibold text-gray-800 font-raleway leading-snug">
                          {cap.title}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}