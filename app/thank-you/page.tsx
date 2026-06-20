import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-100">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-raleway tracking-tight">
          Thank You!
        </h1>
        
        <p className="text-lg text-gray-600 mb-10 font-raleway leading-relaxed max-w-lg mx-auto">
          We have received your message and appreciate you reaching out. One of our experts will get back to you shortly to discuss your needs.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#3B3808] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#ffee50] hover:text-[#3B3808] font-raleway group"
        >
          Return to Homepage
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
