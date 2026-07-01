'use client';

import { useState, useEffect } from 'react';

interface FAQ {
  _id: string;
  question: string;
  answer: string;
  category: string;
  isPublished: boolean;
  order: number;
}

export default function FAQSection({ category }: { category: string }) {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000';
        const response = await fetch(`${baseUrl}/api/faqs`);
        if (!response.ok) throw new Error('Failed to fetch FAQs');
        
        const data = await response.json();
        // The API might return { data: [...] } or just [...]
        const faqList: FAQ[] = Array.isArray(data) ? data : (data.data || []);
        
        const filteredFaqs = faqList
          .filter(faq => faq.category === category && faq.isPublished)
          .sort((a, b) => a.order - b.order);
          
        setFaqs(filteredFaqs);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchFaqs();
  }, [category]);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  if (loading || faqs.length === 0) {
    return null; // Do not render the FAQ section if there are no FAQs for this category
  }

  return (
    <section className=" py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left: Contact Info / Banner */}
          <div className="md:w-1/3 flex-shrink-0 relative">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/images/faq.png"
                alt="FAQ"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-start p-8">
                <h2 className="text-white font-bold text-3xl leading-tight font-raleway drop-shadow-lg">
                  Need Help? Start<br />Here..
                </h2>
              </div>
            </div>

            {/* Teal CTA Card - overlaps image bottom-right */}
            <div className="absolute bottom-0 right-0 translate-x-4 translate-y-6 bg-[#FFEE50] rounded-2xl p-6 w-52 z-10 shadow-xl">
              <p className="text-black font-bold text-lg font-raleway leading-snug mb-4">
                Connect Now
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+918788563349" className="text-black font-semibold text-sm underline font-raleway">
                  +91-8788563349
                </a>
              </div>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="flex-1 space-y-3 md:pt-0 pt-8">
            {faqs.map((faq, index) => (
              <div
                key={faq._id || index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full cursor-pointer px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base font-bold text-gray-900 font-raleway pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#ffee50] flex items-center justify-center">
                    {openFAQ === index ? (
                      <svg className="w-4 h-4 text-[#ffee50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-[#ffee50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>

                {openFAQ === index && (
                  <>
                    <div className="mx-6 border-t border-dashed border-gray-300" />
                    <div className="px-6 py-5">
                      <p className="text-gray-500 leading-relaxed font-raleway text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
