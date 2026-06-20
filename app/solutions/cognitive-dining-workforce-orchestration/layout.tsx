import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smart Cafeteria Management Software | Sunbrilo Technologies",
  description: "Digitise cafeteria operations with Sunbrilo's smart system with digital menus, pre-ordering, dietary tracking, waste reduction analytics & workforce dining.",
  keywords: "cognitive dining, workforce management, dietary tracking, dietary patterns, biometric automation, sunbrilo technologies",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
