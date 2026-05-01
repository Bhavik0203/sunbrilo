import { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Enterprise IT Services & Custom Software Solutions | Sunbrilo',
  description: 'Sunbrilo Technologies is an end-to-end IT solutions provider offering enterprise software development, cloud migration, AI analytics, and offshore staff augmentation.',
  keywords: 'Enterprise IT services, Custom software development, Cloud migration services, AI implementation, Offshore staff augmentation, IT consulting, Cybersecurity services',
};

export default function Services() {
  return <ServicesContent />;
}