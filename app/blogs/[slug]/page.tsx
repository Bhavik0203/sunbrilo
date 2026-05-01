'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '../../lib/blogData';

const topics = [
  'All Topics',
  'Education & Careers',
  'Guides',
  'Health & Wellbeing',
  'Living in Gdańsk',
  'Money & Sustainability',
];

export default function BlogDetailPage() {
  const params = useParams<{ slug: string }>();
  const post = getPostBySlug(params.slug);

  const [copied, setCopied] = useState(false);

  if (!post) return notFound();

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const topPosts = blogPosts.slice(0, 5);
  const paragraphs = post.body.split('\n\n');

  return (
    <div className="bg-[#f5f3f3]">
      <div className="bg-[#f5f3f3] p-4">

        {/* ── Hero Banner ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[260px] w-full md:h-[420px]">
            <Image src={post.image} alt={post.title} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6">
              <div className="mx-auto w-full max-w-7xl">
                <div className="max-w-3xl">
                  {/* Breadcrumb */}
                  <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#ffee50]">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span>/</span>
                    <Link href="/blogs" className="hover:underline">Blog</Link>
                    <span>/</span>
                    <span className="text-white/70 truncate max-w-[200px]">{post.tag}</span>
                  </div>

                  <div className="mt-4 inline-flex rounded-md bg-[#ffee50] px-3 py-1 text-xs font-semibold text-[#3B3808]">
                    {post.tag}
                  </div>

                  <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl font-raleway">
                    {post.title}
                  </h1>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70 font-raleway">
                    <span className="flex items-center gap-1.5">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Body ────────────────────────────────────────────────────── */}
        <section className="mx-auto mt-8 w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

            {/* ── Sidebar ─────────────────────────────────────────────── */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-6 space-y-4">

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
                        <button key={t} type="button"
                          className="rounded-xl bg-[#efe9dd] px-3 py-2 text-xs font-semibold text-[#3b3808] transition-colors hover:bg-[#ffee50] font-raleway">
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Top Posts */}
                  <div className="mt-6 border-t border-black/10 pt-6">
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b] font-raleway">Top Posts</div>
                    <div className="mt-4 space-y-4">
                      {topPosts.map((p) => (
                        <Link key={p.id} href={`/blogs/${p.slug}`} className="block group">
                          <div className={`text-sm font-semibold leading-snug transition-colors font-raleway ${
                            p.slug === post.slug ? 'text-[#3B3808]' : 'text-[#1b1b1b] group-hover:text-[#3B3808]'
                          }`}>
                            {p.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Share Card */}
                <div className="rounded-2xl bg-[#3B3808] p-5">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#ffee50] font-raleway mb-3">
                    Share this article
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                      target="_blank" rel="noopener noreferrer" aria-label="Share on X"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#ffee50] hover:text-[#3B3808] text-white transition-colors">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h7.068l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/shareArticle" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#ffee50] hover:text-[#3B3808] text-white transition-colors">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#ffee50] hover:text-[#3B3808] text-white transition-colors">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <button onClick={handleCopy} aria-label="Copy link"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#ffee50] hover:text-[#3B3808] text-white transition-colors">
                      {copied ? (
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </aside>

            {/* ── Article Content ──────────────────────────────────────── */}
            <main className="lg:col-span-9">
              <article className="rounded-2xl bg-white p-6 md:p-10 shadow-sm">

                {/* Excerpt lead */}
                <p className="text-lg font-semibold leading-relaxed text-[#3B3808] border-l-4 border-[#ffee50] pl-4 mb-8 font-raleway">
                  {post.excerpt}
                </p>

                {/* Featured image */}
                <div className="mb-8 overflow-hidden rounded-2xl">
                  <div className="relative h-[280px] md:h-[400px] w-full">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                </div>

                {/* Body paragraphs */}
                <div className="space-y-5">
                  {paragraphs.map((para, i) => (
                    <p key={i} className="leading-relaxed text-[#4b4b4b] font-raleway text-[15px]">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-black/10 flex flex-wrap gap-2">
                  {[post.tag, '2026 Guide', 'Student Life'].map((tag) => (
                    <span key={tag} className="rounded-xl bg-[#efe9dd] px-3 py-1.5 text-xs font-semibold text-[#3b3808] font-raleway">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author card */}
                <div className="mt-8 flex items-center gap-4 rounded-2xl bg-[#f7f5ef] p-5">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-[#3B3808] flex items-center justify-center text-[#ffee50] font-bold text-xl font-raleway">
                    SE
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1b1b1b] font-raleway">{post.author}</div>
                    <div className="text-xs text-[#6b6b6b] mt-0.5 font-raleway">
                      Expert insights for students navigating life and work abroad.
                    </div>
                  </div>
                </div>

              </article>

              {/* ── Related Articles ───────────────────────────────────── */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-[#1b1b1b] mb-4 font-raleway">Related Articles</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {related.map((p) => (
                    <Link key={p.id} href={`/blogs/${p.slug}`}
                      className="group block rounded-xl bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-40 overflow-hidden">
                        <Image src={p.image} alt={p.title} fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="p-4">
                        <div className="inline-flex rounded-md bg-[#ffee50] px-2.5 py-0.5 text-[10px] font-semibold text-[#3B3808] mb-2">
                          {p.tag}
                        </div>
                        <h3 className="text-sm font-semibold leading-snug text-[#2b2b2b] group-hover:text-[#3B3808] transition-colors font-raleway line-clamp-2">
                          {p.title}
                        </h3>
                        <div className="mt-2 flex items-center gap-3 text-xs text-[#8b8b8b] font-raleway">
                          <span>{p.date}</span>
                          <span>·</span>
                          <span>{p.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* ── Back to Blog ───────────────────────────────────────── */}
              <div className="mt-8 mb-4">
                <Link href="/blogs"
                  className="inline-flex items-center gap-2 rounded-full bg-[#3B3808] px-6 py-3 text-sm font-semibold text-[#ffee50] hover:bg-[#4f4d10] transition-colors font-raleway">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
                  </svg>
                  Back to Blog
                </Link>
              </div>

            </main>
          </div>
        </section>

      </div>
    </div>
  );
}
