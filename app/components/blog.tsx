"use client";

import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../lib/blogData';

export default function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);
  return (
    <section className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex justify-center mb-4">
          <span className="text-sm font-semibold text-gray-700 tracking-widest uppercase border-b-2 border-gray-800 pb-1 font-raleway">
           Blog
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-raleway">
          Latest Insides From Blog
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={post.id}
              className=" overflow-hidden group cursor-pointer block"
            >
              {/* Blog Image */}
              <div className="h-48 overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Blog Content */}
              <div className="py-4">
                {/* Date */}
                <p className="text-sm font-semibold text-blue-900 mb-3 font-raleway">
                  {post.date}
                </p>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-4 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors duration-200 font-raleway">
                  {post.title}
                </h3>

                {/* Read More Link */}
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
