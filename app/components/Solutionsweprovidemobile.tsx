"use client";

import React from "react";

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
          <div 
            key={i} 
            className="snap-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center min-h-[145px] hover:shadow-md transition-shadow"
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 text-blue-600 font-raleway">{s.label}</p>
            <p className="text-lg font-bold text-slate-800 leading-tight mb-2 font-raleway">{s.title}</p>
            <p className="text-sm text-slate-500 leading-relaxed font-raleway">{s.desc}</p>
          </div>
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