'use client';

import React, { useState } from 'react';

export default function EventRegistrationModal({ isOpen, onClose, eventName }: { isOpen: boolean, onClose: () => void, eventName: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        mobile_number: formData.phone,
        company: formData.company,
        job_title: formData.jobTitle,
        event: eventName
      };

      // Send to internal API route for email notification
      try {
        const emailPayload = {
          name: formData.name,
          email: formData.email,
          number: formData.phone,
          company_name: formData.company,
          i_am_interested_in: `Event: ${eventName}`,
          message: `Job Title: ${formData.jobTitle || 'N/A'}`
        };

        const emailRes = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        });
        if (!emailRes.ok) {
          console.error('Email API Error:', await emailRes.text());
        }
      } catch (err) {
        console.error('Failed to send email notification:', err);
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/forms/forms/6a424fa76ff07752ede5e6a6/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: payload })
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setIsSuccess(true);
    } catch (error: any) {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="p-8 md:p-10">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-raleway mb-2">Registration Successful!</h2>
              <p className="text-gray-600 font-raleway mb-8">Thank you for registering for {eventName}. We'll send you an email with the details shortly.</p>
              <button 
                onClick={onClose}
                className="bg-[#3B3808] text-[#ffee50] font-bold py-3 px-8 rounded-full hover:bg-[#4f4d10] transition-colors font-raleway"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-raleway mb-2">Register for Event</h2>
              <p className="text-gray-600 font-raleway mb-8 text-sm">{eventName}</p>

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-raleway">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-raleway mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] outline-none transition-all font-raleway bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-raleway mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] outline-none transition-all font-raleway bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-raleway mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] outline-none transition-all font-raleway bg-gray-50 focus:bg-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 font-raleway mb-1.5">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] outline-none transition-all font-raleway bg-gray-50 focus:bg-white"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 font-raleway mb-1.5">Job Title</label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] outline-none transition-all font-raleway bg-gray-50 focus:bg-white"
                      placeholder="e.g. Manager"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-[#ffee50] hover:bg-[#ffe500] text-[#3B3808] font-bold py-4 rounded-xl transition-colors font-raleway disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-[#3B3808]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Confirm Registration'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
