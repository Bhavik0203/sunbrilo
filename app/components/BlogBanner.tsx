import Image from 'next/image';

type BlogBannerProps = {
  title: string;
  breadcrumb?: string;
  backgroundImageSrc?: string;
};

export default function BlogBanner({
  title,
  breadcrumb = 'Home / Blog',
  backgroundImageSrc = '/images/bg2.png',
}: BlogBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl">
      <div className="relative h-[260px] w-full md:h-[320px]">
        <Image
          src={backgroundImageSrc}
          alt="Blog banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-6">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold tracking-[0.2em] text-[#ffee50]">{breadcrumb}</div>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
