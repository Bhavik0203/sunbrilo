'use client';

import { motion as m } from 'framer-motion';
import React from 'react';

const solutionsTop = [
  { icon: '/images/solutionicon/1.png', title: "Logistic and Supply Chain Solutions" },
  { icon: '/images/solutionicon/2.png', title: "Canteen Management System" },
  { icon: '/images/solutionicon/3.png', title: "CMMS: Maximizing Asset Performance" },
  { icon: '/images/solutionicon/4.png', title: "HRMS: Empowering Your Workforce" },
  { icon: '/images/solutionicon/5.png', title: "Equipment Leasing Platform" },
];

const solutionsBottom = [
  { icon: '/images/solutionicon/6.png', title: "Equipment Leasing Platform" },
  { icon: '/images/solutionicon/7.png', title: "Tablet-Based Biometric Attendance System" },
  { icon: '/images/solutionicon/8.png', title: "Remote (Geofencing) Attendance System" },
  { icon: '/images/solutionicon/9.png', title: "CRM Software: Smarter Way to Manage Customers" },
];

// ── White list panel ────────────────────────────────────────
interface ListPanelProps {
  items: { icon: string, title: string }[];
}

const ListPanel = ({ items }: ListPanelProps) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  }}>
    {items.map((item, i) => (
      <div key={i} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '13px 20px',
        background: '#ffffff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'background 0.15s',
      }}
        onMouseEnter={e => e.currentTarget.style.background = '#f7f9ff'}
        onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
      >
        <img src={item.icon} alt={item.title} style={{ flexShrink: 0, width: 22, height: 22, objectFit: 'contain' }} />
        <span style={{
          fontSize: 13.5,
          fontWeight: 500,
          color: '#1c1c1c',
          fontFamily: "'Segoe UI', Tahoma, sans-serif",
          lineHeight: 1.45,
          letterSpacing: 0.1,
        }}>
          {item.title}
        </span>
      </div>
    ))}
  </div>
);



// ── Main Component ──────────────────────────────────────────
const Solutions = () => {
  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, sans-serif",
      background: '#f0f2f5',
      padding: '32px 0px',
    }}>

      {/* ── SECTION 1: Solutions we provide ── */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{
          fontSize: 24,
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: 16,
          letterSpacing: 0.2,
        }}>
          Solutions we provide
        </h2>

        {/* Card */}
        <div style={{
          position: 'relative',
          // borderRadius: 10,
          overflow: 'hidden',
          minHeight: 300,
          display: 'flex',
          alignItems: 'stretch',
        }}>
          {/* ── LEFT: Image background panel ── */}
          <div style={{
            position: 'relative',
            flex: '0 0 50%',
            marginLeft: -20,
            backgroundImage: 'url("/images/solution1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            minHeight: 300,
          }}>
            {/* Label */}
            <div style={{
              position: 'absolute',
              bottom: '50%',
              left: '30%',
              transform: 'translateX(-50%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 13.5,
              letterSpacing: 0.4,
              opacity: 0.95,
              zIndex: 3,
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
              borderBottom: '2px solid #fff',
              paddingBottom: 4,
            }}>
              Solutions we provide
            </div>

            {/* Right edge dark-to-transparent gradient so list floats cleanly */}
            <div style={{
              position: 'absolute',
              top: 0, right: 0,
              width: 40,
              height: '100%',
              background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.18))',
              zIndex: 1,
            }}/>
          </div>

          {/* ── RIGHT: White solutions list ── */}
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            // background: '#f5f6f8',
            zIndex: 2,
            gap: 10,
            padding: '16px 0px 16px 0px',
            marginLeft: '-40px',
            marginRight: '0px',
          }}>
            <div style={{ width: '100%' }}>
              <ListPanel items={solutionsTop} />
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: Tech/coding dark panel ── */}
      <div>
        <div style={{
          position: 'relative',
         
          overflow: 'hidden',
          minHeight: 260,
          display: 'flex',
          alignItems: 'stretch',
        }}>
          {/* ── LEFT: list panel ── */}
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            // background: '#f5f6f8',
            gap: 10,
            padding: '16px 0 16px 16px',
            marginLeft: '-15px',
            zIndex: 2,
          }}>
            <div style={{ width: '100%' }}>
              <ListPanel items={solutionsBottom} />
            </div>
          </div>

          {/* ── RIGHT: Image background panel ── */}
          <div style={{
            flex: '0 0 50%',
            position: 'relative',
            backgroundImage: 'url("/images/solution2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            marginLeft: '-40px',
          }}>
            {/* Left edge dark-to-transparent gradient so list floats cleanly */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: 40,
              height: '100%',
              background: 'linear-gradient(to left, transparent, rgba(0,0,0,0.18))',
              zIndex: 1,
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;