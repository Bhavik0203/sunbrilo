import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ImageWithFallback from '@/app/components/ImageWithFallback';
import EventMediaBlock from './EventMediaBlock';

export const metadata: Metadata = {
  title: "Media Center | Sunbrilo",
  description: "Watch the latest event coverage, corporate videos, and YouTube features from Sunbrilo.",
};

export default async function MediaPage() {
  let eventsWithMedia: any[] = [];
  let youtubeVideos: any[] = [];
  
  try {
    // 1. Fetch Events to extract their media
    const eventsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/`, { cache: 'no-store' });
    if (eventsRes.ok) {
      const eventsData = await eventsRes.json();
      let arr = [];
      if (eventsData.data && Array.isArray(eventsData.data)) arr = eventsData.data;
      else if (eventsData.value && Array.isArray(eventsData.value)) arr = eventsData.value;
      else if (Array.isArray(eventsData)) arr = eventsData;
      
      // Filter events that have media
      eventsWithMedia = arr.filter((event: any) => 
        (event.galleryImages && event.galleryImages.length > 0) || 
        (event.videos && event.videos.length > 0)
      );
    }

    // 2. Fetch standalone YouTube videos
    const ytRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/youtube/`, { cache: 'no-store' });
    if (ytRes.ok) {
      const ytData = await ytRes.json();
      if (ytData.data && Array.isArray(ytData.data)) youtubeVideos = ytData.data;
      else if (ytData.value && Array.isArray(ytData.value)) youtubeVideos = ytData.value;
      else if (Array.isArray(ytData)) youtubeVideos = ytData;
    }
  } catch (error) {
    console.error('Error fetching media:', error);
  }

  return (
    <main className="bg-[#f5f3f3] min-h-screen flex flex-col pb-20">
      <div className="p-4 flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[220px] w-full md:h-[360px]">
            <Image
              src="/images/media-hero.png"
              alt="Media Center banner"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="w-full px-6">
                <div className="mx-auto w-full max-w-7xl">
                  <div className="max-w-3xl">
                    <div className="text-sm font-semibold tracking-[0.2em] text-[#ffee50] font-raleway uppercase mb-2">
                      Coverage
                    </div>
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl font-raleway">
                      Media Center
                    </h1>
                    <p className="mt-3 text-lg text-white/80 font-raleway max-w-2xl">
                      Explore our collection of event coverage, corporate videos, and interactive media.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-6">
          
          {/* YouTube Videos Section */}
          <section className="mb-20">
             <div className="flex items-center gap-4 mb-8">
               <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] font-raleway">YouTube Features</h2>
               <div className="h-px bg-gray-300 flex-grow"></div>
             </div>
             
             {youtubeVideos.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {youtubeVideos.map((yt, index) => {
                   const embedUrl = yt.url?.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/');
                   return (
                     <div key={`yt-${index}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                       <div className="w-full aspect-video bg-black relative">
                         <iframe
                           src={embedUrl}
                           title={yt.title || "YouTube Video"}
                           className="w-full h-full absolute inset-0"
                           allowFullScreen
                         ></iframe>
                       </div>
                       <div className="p-5">
                         <h3 className="font-bold text-[#1b1b1b] text-lg font-raleway group-hover:text-[#3B3808] transition-colors line-clamp-2">
                           {yt.title}
                         </h3>
                         {yt.description && (
                           <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                             {yt.description}
                           </p>
                         )}
                       </div>
                     </div>
                   )
                 })}
               </div>
             ) : (
               <p className="text-gray-500 font-raleway text-lg">No YouTube videos available at the moment.</p>
             )}
          </section>

          {/* Event Media Section */}
          <section className="mb-20">
             <div className="flex items-center gap-4 mb-8">
               <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] font-raleway">Event Media</h2>
               <div className="h-px bg-gray-300 flex-grow"></div>
             </div>

             {eventsWithMedia.length === 0 ? (
                <p className="text-gray-500 font-raleway text-lg">No event media available at the moment.</p>
             ) : (
                <div className="flex flex-col gap-12">
                  {eventsWithMedia.map((event, eventIdx) => (
                    <EventMediaBlock key={`ev-${eventIdx}`} event={event} />
                  ))}
                </div>
             )}
          </section>

        </div>
        
        {/* Call to action */}
        <section className="mx-auto mt-10 w-full max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] font-raleway mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-[#5b5b5b] font-raleway mb-8">
            Follow our latest updates and connect with us to learn more.
          </p>
          <Link 
            href="/contact-us" 
            className="inline-flex items-center justify-center rounded-full bg-[#ffee50] px-8 py-3.5 text-sm font-bold text-[#3B3808] shadow-lg hover:shadow-xl hover:bg-[#ffe500] hover:-translate-y-1 transition-all duration-300 font-raleway uppercase tracking-wider gap-2"
          >
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </section>

      </div>
    </main>
  );
}
