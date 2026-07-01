import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import GalleryGrid from './GalleryGrid';

export const metadata: Metadata = {
  title: "Gallery | Sunbrilo",
  description: "Explore the Sunbrilo gallery showcasing our latest events, team culture, and office life.",
};

export default async function GalleryPage() {
  let galleryItems: any[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gallery/`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      let arr = [];
      if (data.data && Array.isArray(data.data)) arr = data.data;
      else if (data.value && Array.isArray(data.value)) arr = data.value;
      else if (Array.isArray(data)) arr = data;
      
      galleryItems = arr;
    }
  } catch (error) {
    console.error('Error fetching gallery:', error);
  }

  // Flatten images if backend returns array of images per gallery album
  const allImages = galleryItems.flatMap((album) => {
    const images = Array.isArray(album.images) ? album.images : (album.image ? [album.image] : []);
    return images.map((imgSrc: string, imgIndex: number) => {
      const isAbsolute = imgSrc.startsWith('http');
      const finalSrc = isAbsolute ? imgSrc : `${process.env.NEXT_PUBLIC_BASE_URL || ''}${imgSrc}`;
      
      return {
        id: `${album._id || album.id}-${imgIndex}`,
        src: finalSrc,
        alt: album.title || "Gallery Image",
        category: album.category || "Gallery"
      };
    });
  });

  return (
    <main className="bg-[#f5f3f3] min-h-screen flex flex-col pb-20">
      <div className="p-4 flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[220px] w-full md:h-[360px]">
            <Image
              src="/images/gallery-hero.png"
              alt="Gallery banner"
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
                      Portfolio
                    </div>
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl font-raleway">
                      Our Gallery
                    </h1>
                    <p className="mt-3 text-lg text-white/80 font-raleway max-w-2xl">
                      Take a visual journey through our corporate events, vibrant office culture, and world-class facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay z-15">
               <div className="absolute w-[500px] h-[500px] bg-[#ffee50] rounded-full blur-[100px] -top-20 -right-20"></div>
            </div>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-6">
          <GalleryGrid images={allImages} />
        </section>
        
        {/* Call to action */}
        <section className="mx-auto mt-20 w-full max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] font-raleway mb-6">
            Want to be part of the picture?
          </h2>
          <p className="text-lg text-[#5b5b5b] font-raleway mb-8">
            Join our team or partner with us to create your own success story.
          </p>
          <Link 
            href="/contact-us" 
            className="inline-flex items-center justify-center rounded-full bg-[#ffee50] px-8 py-3.5 text-sm font-bold text-[#3B3808] shadow-lg hover:shadow-xl hover:bg-[#ffe500] hover:-translate-y-1 transition-all duration-300 font-raleway uppercase tracking-wider gap-2"
          >
            Connect With Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </section>
      </div>
    </main>
  );
}
