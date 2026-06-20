import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HRMS Software for Workforce Management | Sunbrilo Technologies",
  description: "Transform HR operations with Sunbrilo's HRMS software with automated payroll, onboarding, attendance & GDPR/HIPAA-compliant data security, all-in-one.",
  keywords: "hrms, HRMS Software, workforce empowerment, attendance tracking, performance review, payroll automation, HRMS software US, workforce management, sunbrilo technologies",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
