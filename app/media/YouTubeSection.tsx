'use client';

import { useState, useEffect } from 'react';

export function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const str = url.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) return str;

  const regExp = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+?&v=|shorts\/|live\/))([\w-]{11})/;
  const match = str.match(regExp);
  if (match && match[1]) {
    return match[1];
  }

  try {
    const parsed = new URL(str.startsWith('http') ? str : `https://${str}`);
    if (parsed.searchParams.has('v')) {
      const v = parsed.searchParams.get('v');
      if (v && /^[\w-]{11}$/.test(v)) return v;
    }
    const pathSegments = parsed.pathname.split('/').filter(Boolean);
    const last = pathSegments[pathSegments.length - 1];
    if (last && /^[\w-]{11}$/.test(last)) return last;
  } catch (e) {
    // ignore
  }

  return null;
}

export function getYouTubeEmbedUrl(url: string, autoplay: boolean = false): string {
  const id = extractYouTubeId(url);
  if (id) {
    return `https://www.youtube-nocookie.com/embed/${id}?rel=0&enablejsapi=1${autoplay ? '&autoplay=1' : ''}`;
  }
  return url?.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/') || '';
}

export function getYouTubeWatchUrl(url: string): string {
  const id = extractYouTubeId(url);
  if (id) {
    return `https://www.youtube.com/watch?v=${id}`;
  }
  return url || '#';
}

export default function YouTubeSection({ videos }: { videos: any[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close lightbox on escape key & arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev !== null && prev < videos.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : videos.length - 1));
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
  }, [selectedIndex, videos.length]);

  if (!videos || videos.length === 0) {
    return <p className="text-gray-500 font-raleway text-lg">No YouTube videos available at the moment.</p>;
  }

  const activeVideo = selectedIndex !== null ? videos[selectedIndex] : null;
  const activeVideoId = activeVideo ? extractYouTubeId(activeVideo.url) : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((yt, index) => {
          const videoId = extractYouTubeId(yt.url);
          const thumbnailUrl = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : null;
          const watchUrl = getYouTubeWatchUrl(yt.url);

          return (
            <div
              key={`yt-${index}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Video Thumbnail with Play Button overlay */}
              <div
                className="w-full aspect-video bg-gray-900 relative cursor-pointer overflow-hidden group"
                onClick={() => setSelectedIndex(index)}
              >
                {thumbnailUrl ? (
                  <img
                    src={thumbnailUrl}
                    alt={yt.title || 'YouTube Video'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-400">
                    <span>No Preview</span>
                  </div>
                )}

                {/* Dark overlay with hover effect */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  {/* YouTube Play Icon button */}
                  <div className="w-16 h-12 bg-red-600 group-hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                  YouTube
                </span>
              </div>

              {/* Video Details */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3
                    onClick={() => setSelectedIndex(index)}
                    className="font-bold text-[#1b1b1b] text-lg font-raleway group-hover:text-[#3B3808] transition-colors line-clamp-2 cursor-pointer"
                    title={yt.title}
                  >
                    {yt.title}
                  </h3>
                  {yt.description && (
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {yt.description}
                    </p>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedIndex(index)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3B3808] bg-[#ffee50] hover:bg-[#ffe500] px-4 py-2 rounded-full transition-colors shadow-sm font-raleway"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Video
                  </button>

                  <a
                    href={watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-600 transition-colors font-raleway"
                    title="Watch on YouTube (New Tab)"
                  >
                    <span>Watch on YouTube</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Video Modal */}
      {selectedIndex !== null && activeVideo && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center backdrop-blur-md p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
          {/* Top Bar with Title and Close Button */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 text-white">
            <h4 className="text-sm md:text-base font-bold font-raleway truncate max-w-[70%]">
              {activeVideo.title}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={getYouTubeWatchUrl(activeVideo.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full transition-colors"
              >
                <span>Open in YouTube</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <button
                onClick={() => setSelectedIndex(null)}
                className="p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation - Prev */}
          {videos.length > 1 && (
            <button
              onClick={() => setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : videos.length - 1))}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-all z-20"
              aria-label="Previous video"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Video Iframe Container */}
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-white/10">
            {activeVideoId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0&enablejsapi=1`}
                title={activeVideo.title || 'YouTube Video'}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <iframe
                src={getYouTubeEmbedUrl(activeVideo.url, true)}
                title={activeVideo.title || 'YouTube Video'}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* Navigation - Next */}
          {videos.length > 1 && (
            <button
              onClick={() => setSelectedIndex((prev) => (prev !== null && prev < videos.length - 1 ? prev + 1 : 0))}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-all z-20"
              aria-label="Next video"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Bottom Counter */}
          {videos.length > 1 && (
            <div className="absolute bottom-4 text-white/60 text-xs font-raleway font-semibold">
              {selectedIndex + 1} / {videos.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}

