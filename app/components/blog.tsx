"use client";

import React from 'react';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "2023-11-10",
    title: "PHP: The Power Behind Dynamic Websites and Scalable Web Applications",
    image: "/images/blog1.png"
  },
  {
    id: 2,
    date: "2023-11-10",
    title: "Digital Transformation Trends 2023: Unleash the Geek Chic!",
    image: "/images/blog2.png"
  },
  {
    id: 3,
    date: "2023-11-10",
    title: "Unveiling Digital Transformation: Strategies for Success",
    image: "/images/blog3.png"
  }
];

export default function BlogSection() {
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
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className=" overflow-hidden group cursor-pointer"
            >
              {/* Blog Image */}
              <div className="h-48 overflow-hidden">
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
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:translate-x-1 transform font-raleway">
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
