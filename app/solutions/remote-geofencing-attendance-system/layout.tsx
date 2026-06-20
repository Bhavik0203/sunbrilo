import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Remote Geofencing Attendance System | Sunbrilo Technologies",
  description: "Track remote workforce attendance accurately with Sunbrilo's geofencing attendance system, real-time location verification & automated reporting.",
  keywords: "geofencing attendance, geofencing technology, biometric attendance tracking system, attendance tracking system, Biometric attendance, sunbrilo technologies",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
