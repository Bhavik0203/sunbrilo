"use client";

import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
  bgImage: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Nabin Prasad", role: "CTO", image: "/images/team1.png", bgImage: "/images/teambg1.png" },
  { id: 2, name: "Namrata Kamthe", role: "Head HR", image: "/images/team2.png", bgImage: "/images/teambg2.png" },
  { id: 3, name: "Sunil Kumar Prasad", role: "CEO", image: "/images/team3.png", bgImage: "/images/teambg1.png" },
  { id: 4, name: "Priya Sharma", role: "CFO", image: "/images/team1.png", bgImage: "/images/teambg2.png" },
  { id: 5, name: "Arjun Mehta", role: "COO", image: "/images/team2.png", bgImage: "/images/teambg1.png" },
];

export default function ExpertTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => {
    setCurrentIndex((i) => (i - 1 + teamMembers.length) % teamMembers.length);
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % teamMembers.length);
  };

  const visibleMembers = Array.from({ length: visibleCount }, (_, i) => ({
    member: teamMembers[(currentIndex + i) % teamMembers.length],
    position: i, // 0=left, 1=center, 2=right
  }));

  return (
    <section className=" pb-16 px-5 flex flex-col items-center">
      {/* Label */}
       <span className="text-sm font py-4 font-semibold text-gray-700 tracking-widest uppercase border-b-2 border-gray-800 pb-1 font-raleway">
           Team Member
      </span>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-11 text-center font-raleway">
        Our Expert Team
      </h2>

      {/* Carousel Wrapper */}
      <div className="w-full max-w-6xl mx-auto flex items-center gap-2.5">
        {/* Prev Button */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 flex-shrink-0 transition-all duration-200 hover:border-blue-400 hover:text-blue-400 hover:shadow-md cursor-pointer"
        >
          &#8592;
        </button>

        {/* Cards */}
        <div className="flex flex-1 justify-center gap-6">
          {visibleMembers.map(({ member, position }) => (
            <div
              key={`${member.id}-${position}`}
              className={` px-8 py-10 w-80 flex-shrink-0 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(74,158,245,0.2)] bg-cover bg-center 
              }`}
              style={{ backgroundImage: `url("${member.bgImage}")` }}
            >
              {/* Avatar */}
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48  object-cover mx-auto mb-6"
              />

              {/* Name */}
              <p className="text-base font-semibold text-gray-900 mb-1.5 font-raleway">
                {member.name}
              </p>

              {/* Role */}
              <p className="text-[13px] text-gray-900 font-normal font-raleway">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          aria-label="Next"
          className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 flex-shrink-0 transition-all duration-200 hover:border-blue-400 hover:text-blue-400 hover:shadow-md cursor-pointer"
        >
          &#8594;
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-8">
        {teamMembers.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full border-none p-0 cursor-pointer transition-all duration-200 ${
              i === currentIndex ? "bg-blue-400 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}