import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "24/7 IT Monitoring & Support Services | Sunbrilo Technologies",
  description: "Sunbrilo provides round-the-clock IT monitoring & support for real-time alerting, incident management & proactive maintenance to minimise system downtime.",
  keywords: "IT monitoring, support services, cognitive monitoring, global network operation, backend application support, cloud migration, Azure bills, AWS migration, monitoring and support",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
