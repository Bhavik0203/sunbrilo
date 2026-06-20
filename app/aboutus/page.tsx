import { Metadata } from 'next';
import AboutUsContent from './AboutUsContent';

export const metadata: Metadata = {
  title: 'About Sunbrilo Technologies | Custom Software & Managed IT Services',
  description: 'Discover Sunbrilo Technologies, a global managed IT services partner driving digital transformation through custom software, cloud, and AI-powered solutions.',
  keywords: 'custom software, AI solutions, managed IT services, cloud solutions, offshoring services, crm software, data analytics, payroll automation, managed IT services, IT services, sunbrilo technologies, IT services US',
};

export default function AboutUs() {
  return <AboutUsContent />;
}