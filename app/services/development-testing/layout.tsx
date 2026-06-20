import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Software Development & QA Testing Services | Sunbrilo Technologies",
  description: "Sunbrilo provides full-lifecycle software engineering & QA testing - automated regression, CI/CD integration, React, Node.js & enterprise API development.",
  keywords: "software development services, agile software development, software testing and qa services, automated testing services, enterprise application development, mobile application development, API, ERP, Enterprise integration, web application testing",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
