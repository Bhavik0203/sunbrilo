'use client';

import { useState } from 'react';
import EventRegistrationModal from './EventRegistrationModal';

export default function RegisterButton({ text, eventName }: { text: string, eventName: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-[#3B3808] px-8 py-4 text-base font-bold text-[#ffee50] hover:bg-[#4f4d10] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-raleway group"
      >
        {text}
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
      
      <EventRegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        eventName={eventName} 
      />
    </>
  );
}
