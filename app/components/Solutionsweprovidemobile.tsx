"use client";

import React from "react";
import Link from "next/link";

const solutions = [
  { label: "Part 1", title: "Logistic & Supply Chain", desc: "End-to-end visibility with real-time tracking, demand forecasting, and intelligent route optimization.", link: "/solutions/logistic-and-supply-chain-solutions" },
  { label: "Part 2", title: "Smart Cafeteria System", desc: "Smart cafeteria ops with digital menus, pre-ordering, dietary tracking, and waste reduction analytics.", link: "/solutions/cognitive-dining-workforce-orchestration" },
  { label: "Part 3", title: "CMMS: Asset Performance", desc: "Predict failures, schedule preventive maintenance, and extend asset lifecycle with smart CMMS tools.", link: "/solutions/intelligent-asset-performance-management" },
  { label: "Part 4", title: "HRMS: Workforce Empowerment", desc: "Payroll automation, attendance tracking, performance reviews, and talent development in one platform.", link: "/solutions/hrms-empowering-your-workforce" },
  { label: "Part 5", title: "Equipment Leasing Platform", desc: "Comprehensive platform to manage equipment leasing operations efficiently.", link: "/solutions/equipment-leasing-platform" },
  { label: "Part 6", title: "Order Management System", desc: "Achieve zero-latency fulfillment with custom, AI-driven Order Management Software.", link: "/solutions/order-management" },
  { label: "Part 7", title: "CRM: Customer Engine", desc: "Smarter way to manage customers with custom enterprise CRM software.", link: "/solutions" },
  { label: "Part 8", title: "Tablet Biometric Attendance", desc: "Reliable and secure tablet-based biometric attendance tracking system.", link: "/solutions/tablet-based-biometric-attendance-system" },
  { label: "Part 9", title: "Remote Geofencing Attendance", desc: "Track remote workforce attendance accurately using geofencing technology.", link: "/solutions/remote-geofencing-attendance-system" },
];

export default function SolutionsWeProvideMobile() {
  return (
    <div className="w-full px-4 py-16 ">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 font-raleway mb-2">Solutions We Provide</h2>
        <p className="text-gray-600 font-raleway text-sm">Scroll to explore our comprehensive solutions</p>
      </div>
      
      {/* Scrollable Container showing ~3 items */}
      <div className="h-[480px] overflow-y-auto snap-y snap-mandatory pr-2 space-y-4 rounded-xl custom-scrollbar max-w-md mx-auto">
        {solutions.map((s, i) => (
          <Link 
            href={s.link}
            key={i} 
            className="snap-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center min-h-[145px] hover:shadow-md transition-shadow cursor-pointer block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 text-blue-600 font-raleway">{s.label}</p>
            <p className="text-lg font-bold text-slate-800 leading-tight mb-2 font-raleway">{s.title}</p>
            <p className="text-sm text-slate-500 leading-relaxed font-raleway">{s.desc}</p>
          </Link>
        ))}
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </div>
  );
}