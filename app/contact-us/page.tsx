import { Metadata } from 'next';
import ContactUsContent from './ContactUsContent';

export const metadata: Metadata = {
  title: 'Contact Sunbrilo Technologies | Global IT Solutions Inquiry',
  description: 'Get in touch with Sunbrilo Technologies. Schedule a consultation for custom software development, offshore engineering, or 24/7 IT managed services.',
  keywords: 'Contact Sunbrilo Technologies, IT consulting services Pune, Hire offshore developers India, Technical support for enterprise software, Custom software development inquiry',
};

export default function ContactUs() {
  return <ContactUsContent />;
}