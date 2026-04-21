"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="relative">
      {/* Background Image Section */}
      <div 
        className="relative min-h-[320px] bg-cover bg-center pt-16"
        style={{
          backgroundImage: 'url("/images/footer.png")',
        }}
      >
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

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-700 font-raleway">
            <p>&copy; 2026 Sunbrilo Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
