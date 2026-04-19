'use client';

import { motion as m } from 'framer-motion';
import React from 'react';

// ── SVG Icons ──────────────────────────────────────────────
const TruckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
    <rect x="1" y="5" width="15" height="12" rx="1" stroke="#555" strokeWidth="1.5"/>
    <path d="M16 8h5l3 4v5h-8V8z" stroke="#555" strokeWidth="1.5"/>
    <circle cx="5.5" cy="19" r="2" stroke="#555" strokeWidth="1.5"/>
    <circle cx="20.5" cy="19" r="2" stroke="#555" strokeWidth="1.5"/>
  </svg>
);
const CanteenIcon = () => (
  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
    <rect x="2" y="2" width="22" height="22" rx="2" stroke="#555" strokeWidth="1.5"/>
    <line x1="2" y1="9" x2="24" y2="9" stroke="#555" strokeWidth="1.5"/>
    <line x1="9" y1="9" x2="9" y2="24" stroke="#555" strokeWidth="1.5"/>
    <line x1="2" y1="16" x2="24" y2="16" stroke="#555" strokeWidth="1.5"/>
  </svg>
);
const GearIcon = () => (
  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="4" stroke="#555" strokeWidth="1.5"/>
    <path d="M13 2v3M13 21v3M2 13h3M21 13h3M4.93 4.93l2.12 2.12M18.95 18.95l2.12 2.12M21.07 4.93l-2.12 2.12M7.05 18.95l-2.12 2.12"
      stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const PeopleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
    <circle cx="10" cy="8" r="4" stroke="#555" strokeWidth="1.5"/>
    <path d="M2 22c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="20" cy="9" r="3" stroke="#555" strokeWidth="1.3"/>
    <path d="M16 22c0-2.76 1.79-5 4-5" stroke="#555" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const LeaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
    <rect x="2" y="8" width="16" height="11" rx="1.5" stroke="#555" strokeWidth="1.5"/>
    <path d="M18 11h4a1 1 0 011 1v4a1 1 0 01-1 1h-4" stroke="#555" strokeWidth="1.5"/>
    <line x1="7" y1="8" x2="7" y2="6" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="13" y1="8" x2="13" y2="6" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const TabletIcon = () => (
  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
    <rect x="5" y="2" width="16" height="22" rx="2" stroke="#555" strokeWidth="1.5"/>
    <line x1="5" y1="18" x2="21" y2="18" stroke="#555" strokeWidth="1.5"/>
    <circle cx="13" cy="21" r="1" fill="#555"/>
    <rect x="8" y="5" width="10" height="9" rx="1" stroke="#555" strokeWidth="1.3"/>
  </svg>
);
const PinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="11" r="3.5" stroke="#555" strokeWidth="1.5"/>
    <path d="M13 3C8.58 3 5 6.58 5 11c0 6.5 8 14 8 14s8-7.5 8-14c0-4.42-3.58-8-8-8z" stroke="#555" strokeWidth="1.5"/>
  </svg>
);
const CRMIcon = () => (
  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
    <rect x="2" y="5" width="22" height="16" rx="2" stroke="#555" strokeWidth="1.5"/>
    <path d="M2 5l11 9 11-9" stroke="#555" strokeWidth="1.5"/>
  </svg>
);

const solutionsTop = [
  { icon: <TruckIcon />,   title: "Logistic and Supply Chain Solutions" },
  { icon: <CanteenIcon />, title: "Canteen Management System" },
  { icon: <GearIcon />,    title: "CMMS: Maximizing Asset Performance" },
  { icon: <PeopleIcon />,  title: "HRMS: Empowering Your Workforce" },
  { icon: <LeaseIcon />,   title: "Equipment Leasing Platform" },
];

const solutionsBottom = [
  { icon: <LeaseIcon />,   title: "Equipment Leasing Platform" },
  { icon: <TabletIcon />,  title: "Tablet-Based Biometric Attendance System" },
  { icon: <PinIcon />,     title: "Remote (Geofencing) Attendance System" },
  { icon: <CRMIcon />,     title: "CRM Software: Smarter Way to Manage Customers" },
];

// ── White list panel ────────────────────────────────────────
interface ListPanelProps {
  items: { icon: React.ReactElement, title: string }[];
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
        borderRadius: 6,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'background 0.15s',
      }}
        onMouseEnter={e => e.currentTarget.style.background = '#f7f9ff'}
        onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
      >
        <div style={{ flexShrink: 0, opacity: 0.8 }}>{item.icon}</div>
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
      padding: '32px 28px',
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
          borderRadius: 10,
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
              bottom: 16,
              left: 40,
              color: '#fff',
              fontWeight: 700,
              fontSize: 13.5,
              letterSpacing: 0.4,
              opacity: 0.95,
              zIndex: 3,
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
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
          borderRadius: 10,
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