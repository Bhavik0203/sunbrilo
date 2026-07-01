import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ImageWithFallback from '@/app/components/ImageWithFallback';

export const metadata: Metadata = {
  title: "Announcements | Sunbrilo Updates",
  description: "Stay up to date with the latest company news, branch inaugurations, and service updates from Sunbrilo.",
};

export default async function AnnouncementsPage() {
  let announcements = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/announcements/`, { cache: 'no-store' });
    if (res.ok) {
      announcements = await res.json();
      if (announcements.data && Array.isArray(announcements.data)) {
        announcements = announcements.data;
      } else if (announcements.value && Array.isArray(announcements.value)) {
        announcements = announcements.value;
      }
    }
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }

  return (
    <main className="bg-[#f5f3f3] min-h-screen flex flex-col pb-20">
      <div className="p-4 flex-grow">
        {/* Header Section */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[220px] w-full md:h-[360px]">
            <Image
              src="/images/announcements-hero-v3.png"
              alt="Announcements banner"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 flex items-end pb-12 z-20">
              <div className="w-full px-6">
                <div className="mx-auto w-full max-w-7xl">
                  <div className="max-w-3xl">
                    <div className="text-sm font-semibold tracking-[0.2em] text-[#ffee50] font-raleway uppercase mb-2">
                      Updates
                    </div>
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl font-raleway">
                      Announcements
                    </h1>
                    <p className="mt-3 text-lg text-white/80 font-raleway max-w-2xl">
                      Stay informed with our latest news, office inaugurations, and important service updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
               <div className="absolute w-96 h-96 bg-[#ffee50] rounded-full blur-3xl -top-20 -right-20"></div>
            </div>
          </div>
        </section>

        {/* Announcements List Section */}
        <section className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-6">
          <div className="flex flex-col gap-12">
            {announcements.map((announcement: any, index: number) => (
              <article 
                key={announcement._id || announcement.id || index} 
                className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="w-full md:w-[45%] lg:w-[40%] relative h-[250px] md:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={(announcement.announcementImage || announcement.image || announcement.uploadImage) ? ((announcement.announcementImage || announcement.image || announcement.uploadImage).startsWith('http') ? (announcement.announcementImage || announcement.image || announcement.uploadImage) : `${process.env.NEXT_PUBLIC_BASE_URL}${announcement.announcementImage || announcement.image || announcement.uploadImage}`) : "/images/announcements-hero-v3.png"}
                    fallbackSrc="/images/announcements-hero-v3.png"
                    alt={announcement.title || announcement.announcementTitle || "Announcement"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Category Badge Floating on Image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex rounded-full bg-[#ffee50] px-4 py-1.5 text-xs font-bold text-[#3B3808] font-raleway shadow-md">
                      {announcement.category || announcement.announcementCategory || (announcement.departments && announcement.departments.length > 0 ? announcement.departments[0] : "Announcement")}
                    </span>
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="w-full md:w-[55%] lg:w-[60%] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm text-[#8b8b8b] font-raleway mb-4 font-semibold uppercase tracking-wider">
                    <svg className="w-4 h-4 text-[#3B3808]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {announcement.startDate && announcement.endDate && announcement.startDate !== announcement.endDate 
                      ? `${new Date(announcement.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} - ${new Date(announcement.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`
                      : announcement.startDate 
                        ? new Date(announcement.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
                        : announcement.date || announcement.announcementDate || (announcement.createdAt ? new Date(announcement.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : "Recent Update")}
                    
                    {announcement.time && (
                      <span className="ml-2 pl-2 border-l border-gray-300">
                        {announcement.time}
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1b1b1b] font-raleway mb-5 group-hover:text-[#3B3808] transition-colors">
                    {announcement.title || announcement.announcementTitle}
                  </h2>
                  
                  <div 
                    className="text-base md:text-lg leading-relaxed text-[#5b5b5b] font-raleway"
                    dangerouslySetInnerHTML={{ __html: announcement.description || announcement.content || '' }}
                  />
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/contact-us" className="text-sm font-bold text-[#3B3808] hover:text-[#000] font-raleway uppercase tracking-wider flex items-center gap-2 group/btn">
                      Contact Us
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    
                    <div className="h-10 w-10 rounded-full bg-[#f7f5ef] flex items-center justify-center text-[#3B3808]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
