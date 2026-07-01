'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LetsTalkModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const pathname = usePathname();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getInterestFromPath = (path: string) => {
    if (!path || path === '/') return 'General Inquiry';
    return path.replace(/^\//, '').split('/').map(segment =>
      segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    ).join(' - ');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        message: formData.message,
        i_am_interested_in: getInterestFromPath(pathname)
      };

      // Send to internal API route for email notification
      try {
        const emailRes = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (!emailRes.ok) {
          console.error('Email API Error:', await emailRes.text());
        }
      } catch (err) {
        console.error('Failed to send email notification:', err);
      }

      // Original API call
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/forms/forms/6a4239306ff07752ede5e3e4/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: payload
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Form submission failed');
      }

      window.location.href = '/thank-you';
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-[#0f172a] rounded-2xl w-full max-w-lg p-8 relative border border-gray-800 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h2 className="text-3xl font-bold text-white mb-6 font-raleway">Let's Talk</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {submitError && (
            <div className="bg-red-500/10 text-red-400 p-3 rounded-md text-sm border border-red-500/20">
              {submitError}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#ffee50] focus:ring-1 focus:ring-[#ffee50] transition-colors" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#ffee50] focus:ring-1 focus:ring-[#ffee50] transition-colors" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              required
              pattern="\d{10}"
              maxLength={10}
              title="Mobile number must be exactly 10 digits"
              onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '') }}
              className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#ffee50] focus:ring-1 focus:ring-[#ffee50] transition-colors"
              placeholder="10-digit Mobile Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea rows={2} name="message" value={formData.message} onChange={handleInputChange} required className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#ffee50] focus:ring-1 focus:ring-[#ffee50] transition-colors" placeholder="How can we help you?"></textarea>
          </div>
          <div className="flex items-start mt-2">
            <input type="checkbox" id="consent" required className="mt-1 mr-2 bg-[#1e293b] border border-gray-700 rounded text-[#ffee50] focus:ring-1 focus:ring-[#ffee50]" />
            <label htmlFor="consent" className="text-sm text-gray-300 leading-tight">
              I consent to the collection and processing of my details to respond to my inquiry.
            </label>
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full cursor-pointer bg-[#ffee50] text-[#3B3808] font-bold py-3 rounded-lg hover:bg-[#ffe500] disabled:opacity-70 transition-colors mt-4">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
