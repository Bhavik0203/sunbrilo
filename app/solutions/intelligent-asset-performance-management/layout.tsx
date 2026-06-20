import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CMMS & Asset Performance Management | Sunbrilo Technologies",
  description: "Predict equipment failures before they happen. Sunbrilo's CMMS software enables preventive maintenance scheduling & extends asset lifecycle efficiency.",
  keywords: "Asset performance management, CMMS software, data governance, predictive maintenance, engineering maintenance, Predictive ROI Assessment",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
