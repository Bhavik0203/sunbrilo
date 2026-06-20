"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogApiItem {
  _id: string;
  title: string;
  slug: string;
  uploadImage?: string;
  coverImage?: string;
  excerpt?: string;
  createdAt?: string;
  readTime?: number;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  date: string;
}

const formatDate = (value?: string) => {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          'https://sunbrilo-dashboard.onrender.com/api/blogs/',
          { cache: 'no-store' }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data: BlogApiItem[] = await response.json();

        if (!isMounted || !Array.isArray(data)) return;

        const formatted = data.slice(0, 3).map((post) => ({
          id: post._id,
          title: post.title,
          slug: post.slug,
          image: post.uploadImage || post.coverImage || '/images/blogimage/blog.png',
          date: formatDate(post.createdAt),
        }));

        setBlogs(formatted);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto text-center text-gray-500 font-raleway">
          Loading latest blogs...
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-4">
          <span className="text-sm font-semibold text-gray-700 tracking-widest uppercase border-b-2 border-gray-800 pb-1 font-raleway">
            Blog
          </span>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-raleway">
          Latest Insides From Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={post.id}
              className="overflow-hidden group cursor-pointer block"
            >
              <div className="h-48 overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="py-4">
                <p className="text-sm font-semibold text-blue-900 mb-3 font-raleway">
                  {post.date}
                </p>
                <h3 className="text-base font-semibold text-gray-900 mb-4 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors duration-200 font-raleway">
                  {post.title}
                </h3>
                <span className="inline-flex items-center text-blue-600 group-hover:text-blue-800 font-medium transition-colors duration-200 group-hover:translate-x-1 transform font-raleway">
                  Read More
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
