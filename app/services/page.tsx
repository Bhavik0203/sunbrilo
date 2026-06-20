import { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Enterprise IT Services & Software Solutions | Sunbrilo Technologies',
  description: 'Explore Sunbrilo\'s enterprise IT services, software development, cloud migration, AI analytics, cybersecurity & offshore staffing for global businesses.',
  keywords: 'custom software development company, enterprise IT services, cloud migration services, offshore staff augmentation, IT consulting firm, IT strategy consulting, software development company, cloud migration, cybersecurity services, data analytics',
};

export default function Services() {
  return <ServicesContent />;
}