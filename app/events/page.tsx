import Image from 'next/image';
import { Metadata } from 'next';
import RegisterButton from './RegisterButton';
import ImageWithFallback from '@/app/components/ImageWithFallback';

export const metadata: Metadata = {
  title: "Expo & Exhibitions | Sunbrilo Events",
  description: "Discover our upcoming events, exhibitions, and programs designed to connect, inspire, and grow together.",
};

export default async function EventsPage() {
  let events = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/`, { cache: 'no-store' });
    if (res.ok) {
      events = await res.json();
      // Handle if API returns an object with a data array or something similar
      if (events.data && Array.isArray(events.data)) {
        events = events.data;
      } else if (events.value && Array.isArray(events.value)) {
        events = events.value;
      }
    }
  } catch (error) {
    console.error('Error fetching events:', error);
  }

  return (
    <main className="bg-[#f5f3f3] min-h-screen flex flex-col pb-20">
      <div className="p-4 flex-grow">
        <section className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[260px] w-full md:h-[420px]">
            <Image
              src="/images/events-hero-v3.png"
              alt="Events banner"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="w-full px-6">
                <div className="mx-auto w-full max-w-7xl">
                  <div className="max-w-3xl">
                    <div className="text-sm font-semibold tracking-[0.2em] text-[#ffee50] font-raleway uppercase">
                      Events
                    </div>
                    <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl font-raleway">
                      Expo &amp; Exhibitions
                    </h1>
                    <p className="mt-4 text-lg text-white/80 font-raleway max-w-2xl">
                      Discover our upcoming events, exhibitions, and programs designed to connect, inspire, and grow together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-6">
          <div className="flex flex-col gap-16">
            {events.map((event: any, index: number) => (
              <div 
                key={event._id || event.id || index} 
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                    <ImageWithFallback
                      src={(event.image || event.uploadImage) ? ((event.image || event.uploadImage).startsWith('http') ? (event.image || event.uploadImage) : `${process.env.NEXT_PUBLIC_BASE_URL}${event.image || event.uploadImage}`) : "/images/events-hero-v3.png"}
                      fallbackSrc="/images/events-hero-v3.png"
                      alt={event.eventExpo || event.name || event.title || "Event"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex rounded-full bg-[#ffee50]/20 px-4 py-1.5 text-sm font-bold text-[#3B3808] font-raleway w-max mb-6">
                    Upcoming Event
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] font-raleway mb-6">
                    {event.eventExpo || event.name || event.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#3B3808] p-2 rounded-lg text-[#ffee50]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#6b6b6b] font-raleway uppercase tracking-wider">Date</div>
                        <div className="text-base font-bold text-[#1b1b1b] font-raleway">{event.date || event.eventDate}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#3B3808] p-2 rounded-lg text-[#ffee50]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#6b6b6b] font-raleway uppercase tracking-wider">Time</div>
                        <div className="text-base font-bold text-[#1b1b1b] font-raleway">{event.time || event.eventTime}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:col-span-2">
                      <div className="mt-1 bg-[#3B3808] p-2 rounded-lg text-[#ffee50]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#6b6b6b] font-raleway uppercase tracking-wider">Venue</div>
                        <div className="text-base font-bold text-[#1b1b1b] font-raleway">{event.venue || event.location}</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed text-[#4b4b4b] font-raleway mb-8">
                    {event.description || event.content}
                  </p>

                  <div>
                    <RegisterButton text={event.buttonText || "Register Now"} eventName={event.eventExpo || event.name || event.title} />
                  </div>

                  {/* Media Gallery Section */}
                  {(event.galleryImages?.length > 0 || event.videos?.length > 0) && (
                    <div className="mt-8 pt-8 border-t border-gray-200 w-full">
                      <h3 className="text-xl font-bold text-[#1b1b1b] font-raleway mb-6">Event Media</h3>
                      
                      <div className="flex flex-col gap-6">
                        {/* Videos */}
                        {event.videos?.map((video: string, vIndex: number) => (
                          <div key={`vid-${vIndex}`} className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black relative">
                            {video.includes('youtube.com') || video.includes('youtu.be') ? (
                              <iframe
                                src={video.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                                title="Event Video"
                                className="w-full h-full"
                                allowFullScreen
                              ></iframe>
                            ) : video.includes('vimeo.com') ? (
                              <iframe
                                src={video.replace('vimeo.com/', 'player.vimeo.com/video/')}
                                title="Event Video"
                                className="w-full h-full"
                                allowFullScreen
                              ></iframe>
                            ) : (
                              <video controls className="w-full h-full object-contain bg-black">
                                <source src={`${process.env.NEXT_PUBLIC_BASE_URL}${video}`} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            )}
                          </div>
                        ))}

                        {/* Images */}
                        {event.galleryImages?.map((image: string, iIndex: number) => (
                          <div key={`img-${iIndex}`} className="w-full relative rounded-2xl overflow-hidden shadow-lg">
                            <ImageWithFallback
                              src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`}
                              fallbackSrc="/images/events-hero-v3.png"
                              alt={`Event Gallery ${iIndex + 1}`}
                              className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
