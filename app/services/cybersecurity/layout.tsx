import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Expert Cybersecurity Services | Sunbrilo Technologies",
  description: "Protect your business with Sunbrilo Technologies cybersecurity services with Zero-Trust architecture, penetration testing, SOC 2 compliance, and 24/7 threat monitoring.",
  keywords: "managed cybersecurity services, cybersecurity consulting firms, cloud security services, information security management, managed security service provider, risk quantification, cognitive security, cybersecurity services US",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
