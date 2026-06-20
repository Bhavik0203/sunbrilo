import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tablet Biometric Attendance System | Sunbrilo Technologies",
  description: "Secure and reliable tablet-based biometric attendance tracking for enterprises. Sunbrilo delivers accurate facial & fingerprint-based attendance systems.",
  keywords: "biometric attendance tracking system, attendance tracking system, Biometric attendance, attendance tracking system, sunbrilo technologies",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
