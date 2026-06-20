import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Analytics & AI Solutions Services | Sunbrilo Technologies",
  description: "Unlock growth with our data analytics & AI solutions. We build scalable platforms and predictive models to transform complex data into actionable business intelligence.",
  keywords: "data analytics, business intelligence, AI solutions, data analytics consulting services, data visualization services, cloud data analytics, data migration services, cloud security, data governance",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
