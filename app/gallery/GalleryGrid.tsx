'use client';

import { useState, useEffect } from 'react';
import ImageWithFallback from '@/app/components/ImageWithFallback';

const HEIGHT_PATTERNS = [
  "h-[400px]",
  "h-[250px]",
  "h-[350px]",
  "h-[300px]",
  "h-[450px]",
  "h-[280px]"
];

export default function GalleryGrid({ images }: { images: any[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
      }
    };
    
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, images.length]);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  };
  
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-400 font-raleway">No images in the gallery yet.</h2>
      </div>
    );
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
        {images.map((img, index) => {
          const heightClass = HEIGHT_PATTERNS[index % HEIGHT_PATTERNS.length];
          return (
            <div 
              key={img.id} 
              onClick={() => openLightbox(index)}
              className={`relative rounded-3xl overflow-hidden group shadow-lg break-inside-avoid w-full cursor-pointer ${heightClass}`}
            >
              <ImageWithFallback
                src={img.src}
                fallbackSrc="/images/gallery-hero.png"
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-[#ffee50] text-[#3B3808] text-xs font-bold uppercase tracking-wider rounded-full w-max mb-2 shadow-md">
                  {img.category}
                </span>
                <h3 className="text-white font-bold text-xl font-raleway">
                  {img.alt}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

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

          {/* Main Content */}
          <div className="relative w-full max-w-6xl h-[85vh] px-4 md:px-24 flex items-center justify-center flex-col" onClick={e => e.stopPropagation()}>
            <div className="relative w-full h-[70vh] mb-6">
              <ImageWithFallback
                src={images[selectedIndex].src}
                fallbackSrc="/images/gallery-hero.png"
                alt={images[selectedIndex].alt}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            
            <div className="text-center">
               <span className="inline-block px-3 py-1 bg-[#ffee50] text-[#3B3808] text-xs font-bold uppercase tracking-wider rounded-full w-max mb-3">
                 {images[selectedIndex].category}
               </span>
               <h3 className="text-white font-bold text-2xl font-raleway">
                 {images[selectedIndex].alt}
               </h3>
               <p className="text-white/60 text-sm mt-2 font-raleway tracking-wider">
                 {selectedIndex + 1} / {images.length}
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
    </>
  );
}
