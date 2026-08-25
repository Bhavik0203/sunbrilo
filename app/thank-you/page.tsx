import { Metadata } from 'next';
import ThankYouClient from './ThankYouClient';

export const metadata: Metadata = {
  title: 'Thank You | Sunbrilo Technologies',
  description: 'Thank you for contacting Sunbrilo Technologies. We will get back to you shortly.',
  alternates: {
    canonical: 'https://www.sunbrilotechnologies.com/thank-you',
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
