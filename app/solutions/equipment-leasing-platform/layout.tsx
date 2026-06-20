import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Equipment Leasing Management Platform | Sunbrilo Technologies",
  description: "Manage your entire equipment leasing lifecycle with Sunbrilo’s contract management, asset tracking, billing automation & lessee portal in one platform.",
  keywords: "equipment leasing, equipment financing, equipment leasing software, leasing management",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
