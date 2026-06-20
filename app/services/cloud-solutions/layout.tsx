import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud Solutions & Migration Services | Sunbrilo Technologies",
  description: "Cloud solution services by Sunbrilo deliver secure, scalable infrastructure across AWS, Azure, and GCP, including cloud migration, architecture, cost optimisation, and 24/7 managed operations.",
  keywords: "cloud solutions, cloud migration, cloud computing services, cloud migration services, AWS consulting services, Azure managed services, cloud infrastructure management, multi-cloud architecture, cloud native development, scalable cloud hosting, hybrid cloud solutions, cloud strategy consulting",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
