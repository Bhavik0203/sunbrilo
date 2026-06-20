import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Sunbrilo Technologies | Get in Touch",
  description: "Contact Sunbrilo Technologies for custom software, cloud & IT consulting. Get a discovery call within 24 hours. Offices in India & the US",
  keywords: "custom software development, software development company in India, software development company in US, HRMS solutions, data analytics, geofencing solutions, biometric attendance, cyber security services, managed IT services, attendance tracking software, sunbrilo technologies",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
