'use client';

import Head from 'next/head';

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide Directly',
        body: 'When you fill out a contact form, request a consultation, or communicate with us, we may collect: your full name, business email address, phone number, company name, job title, and any project details or messages you share with us.',
      },
      {
        subtitle: 'Information Collected Automatically',
        body: 'When you visit our website, we automatically collect certain technical data including your IP address, browser type and version, operating system, referring URLs, pages viewed, and time spent on our site. This data is collected via cookies and similar tracking technologies.',
      },
    ],
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: '',
        body: 'Sunbrilo Technologies uses the information we collect for the following purposes:',
      },
      {
        subtitle: 'Service Delivery',
        body: 'To respond to your inquiries, provide requested services, process project engagements, and communicate updates about your account or ongoing projects.',
      },
      {
        subtitle: 'Business Operations',
        body: 'To improve our website, analyze usage trends, troubleshoot technical issues, and optimize the performance and content of our digital platforms.',
      },
      {
        subtitle: 'Marketing & Communications',
        body: 'To send you relevant industry insights, company updates, or service announcements — only where you have opted in or where we have a legitimate business interest. You may opt out at any time.',
      },
      {
        subtitle: 'Legal Compliance',
        body: 'To comply with applicable laws, regulations, legal proceedings, or enforceable governmental requests.',
      },
    ],
  },
  {
    id: 'cookies',
    title: '3. Cookies & Tracking Technologies',
    content: [
      {
        subtitle: '',
        body: 'We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and gather analytics data. Cookies we use include:',
      },
      {
        subtitle: 'Essential Cookies',
        body: 'Required for the website to function properly. These cannot be disabled without affecting core site functionality.',
      },
      {
        subtitle: 'Analytics Cookies',
        body: 'We use tools such as Google Analytics to understand how visitors interact with our site. This data is aggregated and anonymized.',
      },
      {
        subtitle: 'Marketing Cookies',
        body: 'Used to deliver relevant advertisements and track campaign performance. You may disable these through your browser settings or our cookie preference center.',
      },
    ],
  },
  {
    id: 'sharing',
    title: '4. How We Share Your Information',
    content: [
      {
        subtitle: '',
        body: 'Sunbrilo does not sell, rent, or trade your personal information to third parties. We may share your data only in the following circumstances:',
      },
      {
        subtitle: 'Service Providers',
        body: 'We engage trusted third-party vendors (e.g., cloud hosting, CRM platforms, email delivery services) who process data on our behalf under strict confidentiality agreements.',
      },
      {
        subtitle: 'Legal Obligations',
        body: 'We may disclose information if required by law, subpoena, court order, or other legal process, or to protect the rights, property, and safety of Sunbrilo, our clients, or the public.',
      },
      {
        subtitle: 'Business Transfers',
        body: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your data becomes subject to a different privacy policy.',
      },
    ],
  },
  {
    id: 'data-retention',
    title: '5. Data Retention',
    content: [
      {
        subtitle: '',
        body: 'We retain your personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law. When your data is no longer needed, we securely delete or anonymize it in accordance with our internal data retention schedules.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: '6. Your Rights & Choices',
    content: [
      {
        subtitle: '',
        body: 'Depending on your jurisdiction, you may have the following rights regarding your personal data:',
      },
      {
        subtitle: 'Access & Portability',
        body: 'You have the right to request a copy of the personal data we hold about you, in a structured, machine-readable format.',
      },
      {
        subtitle: 'Correction',
        body: 'You may request that we correct inaccurate or incomplete information about you.',
      },
      {
        subtitle: 'Deletion',
        body: 'You may request that we delete your personal data where there is no legitimate basis for its continued processing.',
      },
      {
        subtitle: 'Objection & Restriction',
        body: 'You may object to certain types of processing or request that we restrict how we use your data.',
      },
      {
        subtitle: 'How to Exercise Your Rights',
        body: 'To exercise any of these rights, please contact us at privacy@sunbrilotechnologies.com. We will respond within 30 days of your request.',
      },
    ],
  },
  {
    id: 'security',
    title: '7. Data Security',
    content: [
      {
        subtitle: '',
        body: 'We implement industry-standard technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include SSL/TLS encryption, access controls, regular security audits, and secure data storage practices. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
      },
    ],
  },
  {
    id: 'third-party',
    title: '8. Third-Party Links',
    content: [
      {
        subtitle: '',
        body: 'Our website may contain links to third-party websites, tools, or services. We are not responsible for the privacy practices of those external sites and encourage you to review their privacy policies independently. This Privacy Policy applies solely to information collected by Sunbrilo Technologies.',
      },
    ],
  },
  {
    id: 'children',
    title: '9. Children\'s Privacy',
    content: [
      {
        subtitle: '',
        body: 'Our services are intended for business professionals and are not directed at children under the age of 16. We do not knowingly collect personal data from minors. If we discover that we have inadvertently collected information from a child, we will delete it promptly.',
      },
    ],
  },
  {
    id: 'changes',
    title: '10. Changes to This Policy',
    content: [
      {
        subtitle: '',
        body: 'Sunbrilo Technologies reserves the right to update or modify this Privacy Policy at any time. When we make material changes, we will update the "Last Updated" date at the top of this page and, where appropriate, notify you by email or a prominent notice on our website. Your continued use of our website following the posting of changes constitutes your acceptance of the revised policy.',
      },
    ],
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    content: [
      {
        subtitle: '',
        body: 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us:',
      },
      {
        subtitle: 'Sunbrilo Technologies',
        body: 'Email: privacy@sunbrilotechnologies.com\nPhone: 1-888-452-1505\nWebsite: www.sunbrilotechnologies.com',
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Sunbrilo Technologies</title>
        <meta
          name="description"
          content="Read Sunbrilo Technologies' Privacy Policy to understand how we collect, use, and protect your personal information."
        />
      </Head>

      <div className="min-h-screen">

        {/* ── Hero Banner ── */}
        <section
          className="relative py-24 px-4 text-white flex items-center justify-center min-h-[340px]"
        >
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
              Privacy Policy
            </h1>
            <p className="text-lg opacity-80 font-raleway max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how Sunbrilo Technologies collects, uses, and protects your information.
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

              {/* ── Policy Body ── */}
              <div className="lg:col-span-3 space-y-12">

                {/* Intro */}
                <div className="p-6 bg-[#ffee50]/10 border-l-4 border-[#ffee50] rounded-r-2xl">
                  <p className="text-base text-gray-700 leading-relaxed font-raleway">
                    Sunbrilo Technologies (&quot;Sunbrilo&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, store, share, and safeguard your personal information when you visit{' '}
                    <a href="https://www.sunbrilotechnologies.com" className="text-[#3B3808] font-semibold underline underline-offset-2">
                      www.sunbrilotechnologies.com
                    </a>{' '}
                    or engage with our services. By using our website, you agree to the terms outlined in this policy.
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
                <pattern id="pp-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#ffee50" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pp-grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-raleway">
              Have Questions About Your Data?
            </h2>
            <p className="text-base opacity-80 mb-8 font-raleway">
              Our team is ready to address any privacy concerns or data requests you may have.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#ffee50] px-8 py-4 text-base font-bold text-[#3B3808] hover:bg-white transition-colors duration-300 font-raleway"
            >
              Contact Our Privacy Team
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
