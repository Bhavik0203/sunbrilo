import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Managed IT Services & IT Outsourcing | Sunbrilo Technologies",
  description: "Looking for reliable Managed IT services? Sunbrilo offers 24/7 proactive IT support, cloud management, and vCIO consulting to optimize your enterprise infrastructure.",
  keywords: "managed IT services, IT governance, corporate IT support, IT compliance, audit readiness, sunbrilo technologies, managed IT services in the US",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
