"use client";

import React from 'react';

const marqueeWords = [
  { text: "Enterprise" },
  { image: "/images/footer-marquee1.jpg", alt: "Team" },
  { text: "Leadership" },
  { image: "/images/footer-marquee2.jpg", alt: "Innovation" },
  { text: "Innovation" },
  { image: "/images/footer-marquee3.jpg", alt: "Technology" },
  { text: "Solutions" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#f5f3f3] bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url("/images/footer.png")' }}>

      {/* ── Background Image Grid Section ── */}
      <div className="relative pt-16 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Company Info */}
            <div>
              <div className="mb-4">
                <img src="/images/logo.png" alt="Sunbrilo Technologies" className="h-8" />
              </div>
              <p className="text-sm text-black font-raleway">
                Transforming businesses through innovative technology solutions and digital excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-black font-raleway">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-700 font-raleway">
                <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Solutions</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-black font-raleway">Services</h3>
              <ul className="space-y-2 text-sm text-gray-700 font-raleway">
                <li><a href="#" className="hover:text-black transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-black transition-colors">IT Consulting</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-black font-raleway">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-700 font-raleway">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  info@sunbrilo.com
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  123 Business Ave, Suite 100
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Scrolling Marquee Section ── */}
      <div className="relative overflow-hidden ">
        <style>{`
          @keyframes footerMarquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .footer-marquee-track {
            display: flex;
            align-items: center;
            width: max-content;
            animation: footerMarquee 30s linear infinite;
          }
          .footer-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="footer-marquee-track py-4">
          {/* Duplicate for seamless loop */}
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center" style={{ gap: '40px', paddingRight: '40px' }}>

              {/* Web Development */}
              <span
                className="text-[110px] font-black leading-none select-none whitespace-nowrap"
                style={{
                  WebkitTextStroke: '1.5px rgba(0,0,0,0.35)',
                  color: 'transparent',
                  fontFamily: 'Raleway, sans-serif',
                  letterSpacing: '-4px',
                }}
              >
                Web Development
              </span>

              {/* Image 1 – Web Development */}
              <div className="w-[160px] h-[100px] rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=320&h=200&fit=crop"
                  alt="Web Development"
                  className="w-full h-full object-cover opacity-75"
                />
              </div>

              {/* Mobile Apps */}
              <span
                className="text-[110px] font-black leading-none select-none whitespace-nowrap"
                style={{
                  WebkitTextStroke: '1.5px rgba(0,0,0,0.35)',
                  color: 'transparent',
                  fontFamily: 'Raleway, sans-serif',
                  letterSpacing: '-4px',
                }}
              >
                Mobile Apps
              </span>

              {/* Image 2 – Mobile Apps */}
              <div className="w-[160px] h-[100px] rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=320&h=200&fit=crop"
                  alt="Mobile Apps"
                  className="w-full h-full object-cover opacity-75"
                />
              </div>

              {/* Cloud Solutions */}
              <span
                className="text-[110px] font-black leading-none select-none whitespace-nowrap"
                style={{
                  WebkitTextStroke: '1.5px rgba(0,0,0,0.35)',
                  color: 'transparent',
                  fontFamily: 'Raleway, sans-serif',
                  letterSpacing: '-4px',
                }}
              >
                Cloud Solutions
              </span>

              {/* Image 3 – Cloud Solutions */}
              <div className="w-[160px] h-[100px] rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=320&h=200&fit=crop"
                  alt="Cloud Solutions"
                  className="w-full h-full object-cover opacity-75"
                />
              </div>

              {/* IT Consulting */}
              <span
                className="text-[110px] font-black leading-none select-none whitespace-nowrap"
                style={{
                  WebkitTextStroke: '1.5px rgba(0,0,0,0.35)',
                  color: 'transparent',
                  fontFamily: 'Raleway, sans-serif',
                  letterSpacing: '-4px',
                }}
              >
                IT Consulting
              </span>

              {/* Image 4 – IT Consulting */}
              <div className="w-[160px] h-[100px] rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=320&h=200&fit=crop"
                  alt="IT Consulting"
                  className="w-full h-full object-cover opacity-75"
                />
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ── Dark Bottom Bar ── */}
      <div className="bg-transparent border-t border-[#1c3030] py-5 font-raleway">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <p className="text-sm text-black">
              &copy; 2026 <span className="font-semibold text-black">Sunbrilo Technologies</span>. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="https://www.facebook.com/SunbriloTechPvtLtd" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black hover:border-black hover:text-black transition-all duration-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/sunbrilotechnologiespvtltd?igsh=aWJlZjBjdTRhaGp5" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black hover:border-black hover:text-black transition-all duration-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/sunbrilotechnologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black hover:border-black hover:text-black transition-all duration-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@SunbriloTechnologies-q4r" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black hover:border-black hover:text-black transition-all duration-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Pinterest */}
              <a href="https://pin.it/1U6LFJgiH" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"
                className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black hover:border-black hover:text-black transition-all duration-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>

            {/* Policy Links */}
            <div className="flex items-center gap-4 text-sm text-black">
              <a href="/privacy-policy" className="hover:text-black transition-colors duration-200">Privacy Policy</a>
              <span className="text-black">|</span>
              <a href="/terms-and-Condition" className="hover:text-black transition-colors duration-200">Terms &amp; Condition</a>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}
