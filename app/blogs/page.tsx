import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Sunbrilo Technologies | Blog Archives',
  description: "Read Sunbrilo Technologies' blog for expert insights on AI, cybersecurity, cloud infrastructure & managed IT services. Stay ahead of enterprise tech trends.",
  keywords: 'IT solutions provider, intelligent technology solutions, sunbrilo technologies, IT services, HRMS, cloud solutions, cyber security, AI automation',
};

export default function BlogsPage() {
  return <BlogPageClient />;
}
