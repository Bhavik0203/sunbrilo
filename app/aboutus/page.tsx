import { Metadata } from 'next';
import AboutUsContent from './AboutUsContent';

export const metadata: Metadata = {
  title: 'About Sunbrilo Technologies | Global IT Engineering & Managed Services',
  description: 'Discover Sunbrilo Technologies. We are a premier global IT managed services company providing enterprise software engineering, cloud architecture, and offshore staff augmentation.',
  keywords: 'Global IT managed services company, Enterprise software engineering India, Sunbrilo Technologies mission, Agile offshore development center Pune, Digital transformation partner',
};

export default function AboutUs() {
  return <AboutUsContent />;
}