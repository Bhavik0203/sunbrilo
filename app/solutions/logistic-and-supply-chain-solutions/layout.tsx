import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Logistics and Supply Chain Software Solutions | Sunbrilo Technologies",
  description: "Scale your operations with intelligent logistics and supply chain software. Sunbrilo Technologies builds custom, AI-driven platforms for real-time freight tracking, routing, and WMS integration.",
  keywords: "logistics software, supply chain software, Intelligent logistics, IT solutions, Integrated warehouse management, dispatch automation, fleet tracking, ai driven platform",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
