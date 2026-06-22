import { Metadata } from 'next';
import NewslettersPageClient from './NewslettersPageClient';

export const metadata: Metadata = {
  title: 'Sunbrilo Technologies | Newsletters',
  description: "Get Sunbrilo Technologies' newsletters on cloud solutions, data analytics, cybersecurity & managed IT. Actionable insights for tech-driven businesses worldwide.",
  keywords: 'IT newsletter, Cloud solutions newsletter, Data analytics updates, Cybersecurity newsletter, Managed IT services insights, Offshoring IT newsletter',
};

export default function NewslettersPage() {
  return <NewslettersPageClient />;
}
