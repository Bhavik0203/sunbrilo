import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom CRM Software Development Solutions | Sunbrilo Technologies",
  description: "Enhance your business efficiency with our custom CRM software solutions. Sunbrilo provides scalable, tailor-made CRM platforms to streamline your sales, HR, and operations.",
  keywords: "crm software, attendance tracking, performance review, payroll automation, equipment leasing platform, leasing operations, HRMS, biometric attendance, order management software",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
