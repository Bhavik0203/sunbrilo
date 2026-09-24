import { Metadata } from 'next';
import ThankYouClient from './ThankYouClient';

export const metadata: Metadata = {
  title: 'Thank You | Sunbrilo Technologies',
  description: 'Thank you for contacting Sunbrilo Technologies. We will get back to you shortly.',
  alternates: {
    canonical: 'https://sunbrilotechnologies.com/thank-you',
  },
};

import { Suspense } from 'react';

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-blue-900"></div>}>
      <ThankYouClient />
    </Suspense>
  );
}
