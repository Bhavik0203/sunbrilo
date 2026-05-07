'use client';

import Head from 'next/head';

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: [
      {
        subtitle: '',
        body: 'By accessing or using the website at www.sunbrilotechnologies.com ("Website") or engaging with any services provided by Sunbrilo Technologies ("Sunbrilo", "we", "our", or "us"), you agree to be legally bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please discontinue use of our Website and services immediately.',
      },
      {
        subtitle: '',
        body: 'These Terms apply to all visitors, clients, partners, and any other users who access or use our services. Sunbrilo reserves the right to update or modify these Terms at any time without prior notice. Continued use of the Website after any changes constitutes acceptance of the revised Terms.',
      },
    ],
  },
  {
    id: 'services',
    title: '2. Services Provided',
    content: [
      {
        subtitle: '',
        body: 'Sunbrilo Technologies provides custom software development, web development, mobile application development, enterprise IT solutions, cloud services, UI/UX design, CRM development, logistics software, and related technology consulting services ("Services").',
      },
      {
        subtitle: 'Service Agreements',
        body: 'Specific services are governed by separate Statements of Work (SOW), project agreements, or service contracts entered into between Sunbrilo and the client. In the event of a conflict between these Terms and a signed project agreement, the signed agreement shall take precedence.',
      },
      {
        subtitle: 'Service Availability',
        body: 'We reserve the right to modify, suspend, or discontinue any part of our Website or services at any time without liability. We will make reasonable efforts to provide advance notice of significant changes.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: '3. Intellectual Property',
    content: [
      {
        subtitle: 'Sunbrilo Owned Content',
        body: 'All content on this Website — including but not limited to text, graphics, logos, icons, images, audio clips, and software — is the exclusive property of Sunbrilo Technologies and is protected by applicable copyright, trademark, and intellectual property laws.',
      },
      {
        subtitle: 'Client Deliverables',
        body: 'Upon full payment of all agreed fees, intellectual property rights for custom-developed deliverables (source code, designs, documentation) are transferred to the client as specified in the applicable project agreement. Pre-existing Sunbrilo tools, frameworks, libraries, and methodologies remain the exclusive property of Sunbrilo.',
      },
      {
        subtitle: 'Restricted Use',
        body: 'You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our Website without prior written consent from Sunbrilo Technologies.',
      },
    ],
  },
  {
    id: 'user-obligations',
    title: '4. User Obligations',
    content: [
      {
        subtitle: '',
        body: 'By using our Website and services, you agree to:',
      },
      {
        subtitle: 'Lawful Use',
        body: 'Use our Website and services only for lawful purposes and in a manner that does not infringe the rights of others or restrict any third party\'s use of the Website.',
      },
      {
        subtitle: 'Accurate Information',
        body: 'Provide accurate, current, and complete information when submitting forms, entering into agreements, or communicating with our team.',
      },
      {
        subtitle: 'No Harmful Activity',
        body: 'Refrain from transmitting any viruses, malware, or malicious code; attempting to gain unauthorized access to our systems; or engaging in any conduct that could damage, disable, or impair the Website or its infrastructure.',
      },
      {
        subtitle: 'No Scraping or Automated Access',
        body: 'Not use bots, scrapers, or automated tools to access, index, or collect data from our Website without express written permission from Sunbrilo.',
      },
    ],
  },
  {
    id: 'payments',
    title: '5. Payments & Fees',
    content: [
      {
        subtitle: 'Project Billing',
        body: 'All fees for services are outlined in the applicable project agreement or Statement of Work. Invoices are payable within the timeframe specified therein. Sunbrilo reserves the right to pause or terminate services on accounts that are overdue by more than 30 days.',
      },
      {
        subtitle: 'Taxes',
        body: 'All quoted fees are exclusive of applicable taxes, duties, or levies. The client is responsible for any taxes applicable to their jurisdiction.',
      },
      {
        subtitle: 'Refunds',
        body: 'Refund eligibility is determined by the terms of the individual project agreement. As a general policy, payments made for completed milestones or delivered work are non-refundable.',
      },
    ],
  },
  {
    id: 'confidentiality',
    title: '6. Confidentiality',
    content: [
      {
        subtitle: '',
        body: 'Both parties may have access to confidential information belonging to the other party in the course of a project engagement. Each party agrees to hold the other\'s confidential information in strict confidence, use it solely for the purpose of the engagement, and not disclose it to any third party without prior written consent.',
      },
      {
        subtitle: '',
        body: 'Confidentiality obligations do not apply to information that is publicly available, independently developed, or required to be disclosed by law.',
      },
    ],
  },
  {
    id: 'disclaimer',
    title: '7. Disclaimer of Warranties',
    content: [
      {
        subtitle: '',
        body: 'Our Website and services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied. Sunbrilo does not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components.',
      },
      {
        subtitle: '',
        body: 'To the fullest extent permitted by law, Sunbrilo disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      },
    ],
  },
  {
    id: 'limitation',
    title: '8. Limitation of Liability',
    content: [
      {
        subtitle: '',
        body: 'To the maximum extent permitted by applicable law, Sunbrilo Technologies and its directors, employees, partners, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of profits, data, goodwill, or business opportunity — arising out of or related to your use of our Website or services.',
      },
      {
        subtitle: '',
        body: 'In no event shall Sunbrilo\'s total aggregate liability to any party exceed the total fees paid by that party to Sunbrilo in the twelve (12) months preceding the claim.',
      },
    ],
  },
  {
    id: 'indemnification',
    title: '9. Indemnification',
    content: [
      {
        subtitle: '',
        body: 'You agree to indemnify, defend, and hold harmless Sunbrilo Technologies and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of our Website or services; (b) your violation of these Terms; (c) your violation of any applicable law or third-party rights; or (d) any content you submit or transmit through our Website.',
      },
    ],
  },
  {
    id: 'third-party',
    title: '10. Third-Party Links & Services',
    content: [
      {
        subtitle: '',
        body: 'Our Website may contain links to third-party websites or integrate with third-party services. These links are provided for convenience only. Sunbrilo does not endorse, control, or assume responsibility for the content, privacy practices, or terms of any third-party sites or services. We encourage you to review the terms and privacy policies of any third-party services you access.',
      },
    ],
  },
  {
    id: 'governing-law',
    title: '11. Governing Law & Dispute Resolution',
    content: [
      {
        subtitle: 'Governing Law',
        body: 'These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Sunbrilo Technologies is registered, without regard to its conflict of law provisions.',
      },
      {
        subtitle: 'Dispute Resolution',
        body: 'In the event of any dispute arising from or relating to these Terms or our services, the parties agree to first attempt resolution through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration or the courts of competent jurisdiction as specified in the applicable project agreement.',
      },
    ],
  },
  {
    id: 'termination',
    title: '12. Termination',
    content: [
      {
        subtitle: '',
        body: 'Sunbrilo reserves the right to suspend or terminate your access to our Website or services at any time, with or without cause, and without prior notice. Upon termination, all rights granted to you under these Terms will immediately cease. Provisions that by their nature should survive termination — including intellectual property, confidentiality, limitation of liability, and indemnification — will remain in effect.',
      },
    ],
  },
  {
    id: 'contact',
    title: '13. Contact Us',
    content: [
      {
        subtitle: '',
        body: 'If you have any questions or concerns about these Terms and Conditions, please contact us:',
      },
      {
        subtitle: 'Sunbrilo Technologies',
        body: 'Email: legal@sunbrilotechnologies.com\nPhone: 1-888-452-1505\nWebsite: www.sunbrilotechnologies.com',
      },
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Sunbrilo Technologies</title>
        <meta
          name="description"
          content="Read the Terms and Conditions governing your use of Sunbrilo Technologies' website and services."
        />
      </Head>

      <div className="min-h-screen">

        {/* ── Hero Banner ── */}
        <section className="relative py-24 px-4 text-white flex items-center justify-center min-h-[340px]">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/solutions/solutionmainbanner.png")' }}
          >
            <div className="absolute inset-0 bg-black/72" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#ffee50]/15 border border-[#ffee50]/30 text-[#ffee50] text-sm font-semibold tracking-wide font-raleway uppercase">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-raleway">
              Terms &amp; Conditions
            </h1>
            <p className="text-lg opacity-80 font-raleway max-w-2xl mx-auto">
              Please read these terms carefully before using our website or engaging with our services. By continuing, you agree to be bound by these conditions.
            </p>
            <p className="mt-4 text-sm text-[#ffee50]/80 font-raleway">
              Last Updated: May 7, 2026
            </p>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

              {/* ── Sticky Sidebar TOC ── */}
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24 bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-raleway">
                    Contents
                  </p>
                  <nav className="space-y-2">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="block text-sm text-gray-500 hover:text-[#3B3808] hover:font-semibold transition-all duration-200 font-raleway leading-snug py-0.5"
                      >
                        {sec.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* ── Terms Body ── */}
              <div className="lg:col-span-3 space-y-12">

                {/* Intro callout */}
                <div className="p-6 bg-[#ffee50]/10 border-l-4 border-[#ffee50] rounded-r-2xl">
                  <p className="text-base text-gray-700 leading-relaxed font-raleway">
                    These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you and{' '}
                    <span className="font-semibold text-[#3B3808]">Sunbrilo Technologies</span>. These Terms govern your access to and use of our website and all services offered by Sunbrilo. By using our Website, you confirm that you are at least 18 years of age and have the legal capacity to enter into this agreement.
                  </p>
                </div>

                {/* Sections */}
                {sections.map((sec) => (
                  <div key={sec.id} id={sec.id} className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-gray-900 mb-5 font-raleway border-b border-gray-100 pb-3">
                      {sec.title}
                    </h2>
                    <div className="space-y-4">
                      {sec.content.map((block, i) => (
                        <div key={i}>
                          {block.subtitle && (
                            <h3 className="text-base font-bold text-[#3B3808] mb-1 font-raleway">
                              {block.subtitle}
                            </h3>
                          )}
                          <p className="text-base text-gray-600 leading-relaxed font-raleway whitespace-pre-line">
                            {block.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Strip ── */}
        <section className="py-16 px-4 bg-[#3B3808] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="tc-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#ffee50" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tc-grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-raleway">
              Have Questions About Our Terms?
            </h2>
            <p className="text-base opacity-80 mb-8 font-raleway">
              Our team is happy to clarify any aspect of our Terms and Conditions before you engage with our services.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#ffee50] px-8 py-4 text-base font-bold text-[#3B3808] hover:bg-white transition-colors duration-300 font-raleway"
            >
              Contact Our Legal Team
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
