import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at Sunbrilo Technologies | Join Our Team',
  description: 'Explore careers at Sunbrilo Technologies. Join a collaborative team building cloud, AI & software solutions with growth, equity & full benefits.',
  keywords: 'careers in technology, best job opportunities, latest jobs in Pune, equal employment opportunities, healthy work environment, full-time job opportunities, top tech jobs',
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
