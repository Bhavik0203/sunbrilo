'use client';

import { useState, useEffect } from 'react';
import ImageWithFallback from './ImageWithFallback';
import Link from 'next/link';

export default function AnnouncementPopup() {
  const [announcement, setAnnouncement] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/announcements/`);
        if (res.ok) {
          const data = await res.json();
          let arr = [];
          if (data.data && Array.isArray(data.data)) arr = data.data;
          else if (data.value && Array.isArray(data.value)) arr = data.value;
          else if (Array.isArray(data)) arr = data;
          
          const target = arr.find((item: any) => item.showOnFrontend === true);
          if (target) {
            setAnnouncement(target);
            
            // Wait 3 seconds before showing the popup
            const showTimer = setTimeout(() => {
              setIsVisible(true);
              
              // Auto close after 15 seconds (starts counting AFTER it appears)
              const hideTimer = setTimeout(() => {
                setIsVisible(false);
              }, 15000);
              
              // Cleanup inner timer if unmounted early
              return () => clearTimeout(hideTimer);
            }, 3000);
            
            return () => clearTimeout(showTimer);
          }
        }
      } catch (error) {
        console.error('Failed to fetch frontend announcement', error);
      }
    };
    
    fetchAnnouncement();
  }, []);

  if (!isVisible || !announcement) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] max-w-sm w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 fade-in duration-500">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 z-10 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      {/* Image if available */}
      <div className="relative h-40 w-full bg-gray-100 overflow-hidden">
         <ImageWithFallback
           src={(announcement.announcementImage || announcement.image || announcement.uploadImage) ? ((announcement.announcementImage || announcement.image || announcement.uploadImage).startsWith('http') ? (announcement.announcementImage || announcement.image || announcement.uploadImage) : `${process.env.NEXT_PUBLIC_BASE_URL || ''}${announcement.announcementImage || announcement.image || announcement.uploadImage}`) : "/images/announcements-hero-v3.png"}
           fallbackSrc="/images/announcements-hero-v3.png"
           alt={announcement.title || announcement.announcementTitle || "Announcement"}
           className="w-full h-full object-cover"
         />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#ffee50] text-[#3B3808] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            {announcement.category || announcement.announcementCategory || (announcement.departments && announcement.departments.length > 0 ? announcement.departments[0] : "Update")}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 line-clamp-2">
          {announcement.title || announcement.announcementTitle}
        </h3>
        
        {/* Strip HTML tags if content is rich text, otherwise render description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {(announcement.description || announcement.content || '').replace(/<[^>]*>?/gm, '')}
        </p>
        
        <Link 
          href="/announcements" 
          onClick={() => setIsVisible(false)}
          className="inline-block text-sm font-bold text-[#3B3808] hover:text-black uppercase tracking-wider"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
