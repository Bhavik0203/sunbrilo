
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { blogPosts, gridLayout } from '../lib/blogData';

const topics = [
  'All Topics',
  'Education & Careers',
  'Guides',
  'Health & Wellbeing',
  'Living in Gdańsk',
  'Money & Sustainability',
];

export default function BlogsPage() {
  return (
    <div className="bg-[#f5f3f3]">
      <div className="bg-[#f5f3f3] p-4">
        <Header />

        {/* ── Hero Banner ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[260px] w-full md:h-[420px]">
            <Image
              src="/images/bg3.png"
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
                  <div className="text-sm font-semibold tracking-[0.2em] text-[#ffee50]">
                    Home / Blog
                  </div>
                  <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl font-raleway">
                    Blog
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main Section ─────────────────────────────────────────────── */}
        <section className="mx-auto mt-8 w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

            {/* ── Sidebar ─────────────────────────────────────────────── */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-6">
                <div className="rounded-2xl bg-[#f7f5ef] p-5">

                  {/* Search */}
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search"
                      className="w-full rounded-full bg-white px-4 py-3 pr-10 text-sm text-[#101010] outline-none ring-1 ring-black/5 placeholder:text-[#6b6b6b] font-raleway"
                    />
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      <svg className="h-5 w-5 text-[#6b6b6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mt-6">
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] font-raleway">Topics</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          className="rounded-xl bg-[#efe9dd] px-3 py-2 text-xs font-semibold text-[#3b3808] transition-colors hover:bg-[#ffee50] font-raleway"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Top Posts */}
                  <div className="mt-6 border-t border-black/10 pt-6">
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] font-raleway">Top Posts</div>
                    <div className="mt-4 space-y-4">
                      {blogPosts.slice(0, 5).map((p) => (
                        <Link
                          key={p.id}
                          href={`/blogs/${p.slug}`}
                          className="block group"
                        >
                          <div className="mt-1 text-sm font-semibold leading-snug text-[#1b1b1b] group-hover:text-[#3B3808] transition-colors font-raleway">
                            {p.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </aside>

            {/* ── Blog Grid ───────────────────────────────────────────── */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-6 lg:grid-rows-8">
                {gridLayout.map((layoutClass, idx) => {
                  const post = blogPosts[idx];
                  return (
                    <article
                      key={`${post.id}-${idx}`}
                      className={`${layoutClass} rounded-xl bg-white p-4 shadow-sm group hover:shadow-md transition-shadow duration-300`}
                    >
                      <Link href={`/blogs/${post.slug}`} className="block h-full">
                        <div className="overflow-hidden rounded-2xl">
                          <div className="relative h-[220px] w-full lg:h-[240px]">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>

                        <div className="px-2 pb-2 pt-5">
                          <div className="inline-flex rounded-md bg-[#ffee50] px-3 py-1 text-xs font-semibold text-[#3B3808]">
                            {post.tag}
                          </div>

                          <h3 className="mt-3 text-base font-semibold leading-snug text-[#2b2b2b] group-hover:text-[#3B3808] transition-colors duration-200 md:text-lg font-raleway">
                            {post.title}
                          </h3>

                          <div className="mt-3 flex items-center gap-3 text-xs text-[#8b8b8b] font-raleway">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
