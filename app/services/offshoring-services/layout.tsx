import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Offshore Software Development Services | Sunbrilo Technologies",
  description: "Scale with expert offshoring software development. We provide managed, cross-functional engineering pods to accelerate technical deployment and optimize operational costs.",
  keywords: "Offshore software development, offshore development, offshore development center, offshore software development company, offshore development services, IT staff augmentation, offshore development US",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
