import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Driven Order Management Software | Sunbrilo Technologies",
  description: "Achieve zero-latency fulfillment with Sunbrilo’s AI-driven order management system. Streamline your operations with real-time inventory sync, multi-channel routing, and custom workflows.",
  keywords: "order management system, purchase order software, order management, order management software in US, order management software in India, global ecommerce, realtime inventory, purchase order software,",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
