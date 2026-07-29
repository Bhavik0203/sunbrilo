import { Metadata } from 'next';
import NewsletterPageClient from './NewsletterPageClient';

export const metadata: Metadata = {
  alternates: { canonical: '/newsletters' },
  title: 'Sunbrilo Technologies | Newsletter Archives',
  description: "Read Sunbrilo Technologies' newsletter for expert insights on AI, cybersecurity, cloud infrastructure & managed IT services. Stay ahead of enterprise tech trends.",
  keywords: 'IT solutions provider, intelligent technology solutions, sunbrilo technologies, IT services, HRMS, cloud solutions, cyber security, AI automation',
};

export default function NewslettersPage() {
  return <NewsletterPageClient />;
}

