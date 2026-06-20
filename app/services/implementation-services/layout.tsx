import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IT Implementation & Integration Services | Sunbrilo Technologies",
  description: "Sunbrilo Technologies provides end-to-end IT implementation, including ERP integration, system migration, legacy modernization, and post-launch performance optimization.",
  keywords: "IT implementation, Software integration, Cloud migration, Enterprise solutions, IT consulting, Digital transformation, API integration, ERP implementation, Change management",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
