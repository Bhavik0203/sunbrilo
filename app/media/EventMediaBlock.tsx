'use client';

import { useState, useEffect } from 'react';
import ImageWithFallback from '@/app/components/ImageWithFallback';

export default function EventMediaBlock({ event }: { event: any }) {
  // Combine videos and images into a single media array for the lightbox
  const mediaItems: { type: 'video' | 'image', src: string, rawSrc: string }[] = [];
  
  if (event.videos && Array.isArray(event.videos)) {
    event.videos.forEach((v: string) => {
      mediaItems.push({ type: 'video', src: v, rawSrc: v });
    });
  }
  
  if (event.galleryImages && Array.isArray(event.galleryImages)) {
    event.galleryImages.forEach((i: string) => {
      const src = i.startsWith('http') ? i : `${process.env.NEXT_PUBLIC_BASE_URL || ''}${i}`;
      mediaItems.push({ type: 'image', src: src, rawSrc: i });
    });
  }

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev !== null && prev < mediaItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : mediaItems.length - 1));
      }
    };
    
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, mediaItems.length]);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < mediaItems.length - 1 ? prev + 1 : 0));
  };
  
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : mediaItems.length - 1));
  };

  const renderLightboxMedia = (item: { type: 'video' | 'image', src: string, rawSrc: string }) => {
    if (item.type === 'image') {
      return (
        <ImageWithFallback
          src={item.src}
          fallbackSrc="/images/media-hero.png"
          alt="Event Media"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      );
    } else {
      // Video rendering
      const video = item.rawSrc;
      if (video.includes('youtube.com') || video.includes('youtu.be')) {
        const embedUrl = video.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/');
        return (
          <iframe
            src={embedUrl}
            title="Event Video"
            className="w-full h-full shadow-2xl"
            allowFullScreen
          ></iframe>
        );
      } else if (video.includes('vimeo.com')) {
        const embedUrl = video.replace('vimeo.com/', 'player.vimeo.com/video/');
        return (
          <iframe
            src={embedUrl}
            title="Event Video"
            className="w-full h-full shadow-2xl"
            allowFullScreen
          ></iframe>
        );
      } else {
        const mp4Src = video.startsWith('http') ? video : `${process.env.NEXT_PUBLIC_BASE_URL || ''}${video}`;
        return (
          <video controls autoPlay className="w-full h-full object-contain bg-black shadow-2xl rounded-lg">
            <source src={mp4Src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      }
    }
  };

  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-lg border border-gray-100 flex flex-col gap-8">
      {/* Event Details Header */}
      <div className="flex flex-col gap-4 border-b border-gray-100 pb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1b1b1b] font-raleway">
          {event.title || event.name || event.eventExpo}
        </h3>
        
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-700 font-raleway uppercase tracking-wider">
          {(event.date || event.startDate) && (
            <span className="flex items-center gap-2 bg-[#ffee50]/30 text-[#3B3808] px-4 py-2 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {event.startDate && event.endDate && event.startDate !== event.endDate 
                ? `${new Date(event.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} - ${new Date(event.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`
                : new Date(event.startDate || event.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
              }
            </span>
          )}
          {(event.location || event.venue) && (
            <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {event.location || event.venue}
            </span>
          )}
        </div>
        
        {(event.description || event.content) && (
          <p className="text-gray-600 line-clamp-2 mt-2">
            {(event.description || event.content).replace(/<[^>]*>?/gm, '')}
          </p>
        )}
      </div>

      {/* Event Videos */}
      {event.videos && event.videos.length > 0 && (
        <div>
          <h4 className="text-lg font-bold text-[#3B3808] uppercase tracking-wider mb-5 font-raleway flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            Videos
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.videos.map((video: string, vIndex: number) => {
              const globalIndex = vIndex; // Videos come first in mediaItems
              return (
                <div 
                  key={`ev-vid-${vIndex}`} 
                  className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black relative cursor-pointer group"
                  onClick={() => openLightbox(globalIndex)}
                >
                  {/* Thumbnail Overlay to intercept clicks before iframe does */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                     <svg className="w-16 h-16 text-white/80 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                     </svg>
                  </div>
                  
                  {video.includes('youtube.com') || video.includes('youtu.be') ? (
                    <iframe
                      src={video.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                      title="Event Video"
                      className="w-full h-full pointer-events-none"
                      allowFullScreen
                    ></iframe>
                  ) : video.includes('vimeo.com') ? (
                    <iframe
                      src={video.replace('vimeo.com/', 'player.vimeo.com/video/')}
                      title="Event Video"
                      className="w-full h-full pointer-events-none"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video className="w-full h-full object-contain bg-black pointer-events-none">
                      <source src={video.startsWith('http') ? video : `${process.env.NEXT_PUBLIC_BASE_URL || ''}${video}`} type="video/mp4" />
                    </video>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Event Images */}
      {event.galleryImages && event.galleryImages.length > 0 && (
        <div>
          <h4 className="text-lg font-bold text-[#3B3808] uppercase tracking-wider mb-5 font-raleway flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Gallery
          </h4>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {event.galleryImages.map((image: string, iIndex: number) => {
              const src = image.startsWith('http') ? image : `${process.env.NEXT_PUBLIC_BASE_URL || ''}${image}`;
              const globalIndex = (event.videos?.length || 0) + iIndex;
              return (
                <div 
                  key={`ev-img-${iIndex}`} 
                  className="w-full relative rounded-2xl overflow-hidden shadow-md break-inside-avoid cursor-pointer"
                  onClick={() => openLightbox(globalIndex)}
                >
                  <ImageWithFallback
                    src={src}
                    fallbackSrc="/images/media-hero.png"
                    alt={`Event Coverage ${iIndex + 1}`}
                    className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center backdrop-blur-md animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#ffee50] transition-colors z-50 p-2 bg-black/40 hover:bg-black/60 rounded-full"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 md:left-8 text-white hover:text-[#ffee50] transition-colors z-50 p-3 bg-black/40 hover:bg-black/60 rounded-full"
            onClick={showPrev}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Content Area */}
          <div className="relative w-full max-w-6xl h-[85vh] px-4 md:px-24 flex items-center justify-center flex-col" onClick={e => e.stopPropagation()}>
            <div className="relative w-full h-[75vh] flex items-center justify-center mb-6">
               {renderLightboxMedia(mediaItems[selectedIndex])}
            </div>
            
            <div className="text-center">
               <span className="inline-block px-3 py-1 bg-[#ffee50] text-[#3B3808] text-xs font-bold uppercase tracking-wider rounded-full w-max mb-3">
                 {mediaItems[selectedIndex].type.toUpperCase()}
               </span>
               <p className="text-white/60 text-sm mt-2 font-raleway tracking-wider">
                 {selectedIndex + 1} / {mediaItems.length}
               </p>
            </div>
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-8 text-white hover:text-[#ffee50] transition-colors z-50 p-3 bg-black/40 hover:bg-black/60 rounded-full"
            onClick={showNext}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
