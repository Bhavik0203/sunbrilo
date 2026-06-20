"use client";

import { useState, useEffect } from "react";

interface TeamMember {
  id: string | number;
  name: string;
  role: string;
  image: string;
  bgImage: string;
}

export default function ExpertTeam() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await fetch("https://sunbrilo-dashboard.onrender.com/api/team");
        if (response.ok) {
          const result = await response.json();
          if (result.success && Array.isArray(result.data)) {
            const fetchedMembers = result.data.filter((m: any) => m.isActive).map((member: any, i: number) => ({
              id: member._id,
              name: member.fullName,
              role: member.designation,
              image: member.photo?.startsWith('http') 
                ? member.photo 
                : `https://sunbrilo-dashboard.onrender.com/uploads/team/${member.photo}`,
              bgImage: i % 2 === 0 ? "/images/teambg1.png" : "/images/teambg2.png",
            }));
            setTeamMembers(fetchedMembers);
          }
        }
      } catch (error) {
        console.error("Failed to fetch team members", error);
      }
    }
    fetchTeam();
  }, []);

  const prev = () => {
    if (teamMembers.length === 0) return;
    setCurrentIndex((i) => (i - 1 + teamMembers.length) % teamMembers.length);
  };

  const next = () => {
    if (teamMembers.length === 0) return;
    setCurrentIndex((i) => (i + 1) % teamMembers.length);
  };

  const visibleMembers = teamMembers.length > 0 
    ? Array.from({ length: Math.min(visibleCount, teamMembers.length) }, (_, i) => ({
        member: teamMembers[(currentIndex + i) % teamMembers.length],
        position: i, // 0=left, 1=center, 2=right
      }))
    : [];

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
        <div className="flex flex-1 justify-center gap-4 sm:gap-6 overflow-hidden">
          {visibleMembers.map(({ member, position }) => (
            <div
              key={`${member.id}-${position}`}
              className={`px-4 sm:px-8 py-10 w-full max-w-[280px] sm:max-w-[320px] flex-shrink-0 text-center transition-all duration-300  hover:shadow-[0_12px_36px_rgba(74,158,245,0.2)] bg-cover bg-center  ${
                position === 2 ? 'hidden lg:block' : position === 1 ? 'hidden md:block' : ''
              }`}
              style={{ backgroundImage: `url("${member.bgImage}")` }}
            >
              {/* Avatar: use background-image cover to ensure consistent fill */}
              <div
                className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6  overflow-hidden bg-center bg-cover"
                style={{ backgroundImage: `url('${member.image}')` }}
                aria-hidden="true"
              />

              {/* Name */}
              <p className="text-base font-semibold text-gray-900 mb-1.5 font-raleway">
                {member.name}
              </p>

              {/* Role */}
              <p className="text-[13px] text-gray-900 font-bold font-raleway">
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