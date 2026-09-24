import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  metadataBase: new URL("https://sunbrilotechnologies.com"),
  title: "IT Solution Provider & AI-Driven Solutions | Sunbrilo Technologies",
  description: "Scale your operations with Sunbrilo Technologies. We specialize in robust IT solutions, AI-driven solutions, and cloud-based CRM systems tailored for your business.",
  keywords: "IT solutions provider, intelligent technology solutions, sunbrilo technologies, IT services, HRMS, crm software, order management software, attendance tracking system, cloud solutions, cyber security, AI automation",
  verification: {
    google: "-pXBl4auIE9G6ABwOxZZhovfuzUE6FXvyjVU820rpBA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5L90N8DETE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5L90N8DETE');
          `}
        </Script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sunbrilotechnologies.com/#organization",
  "name": "Sunbrilo Technologies",
  "legalName": "Sunbrilo Technologies Private Limited",
  "alternateName": "Sunbrilo Technologies Pvt. Ltd.",
  "url": "https://sunbrilotechnologies.com/",
  "logo": "https://sunbrilotechnologies.com/images/logo.png",
  "description": "Sunbrilo Technologies is an IT solutions provider offering software development, cloud solutions, data analytics, cybersecurity, AI-driven solutions, and cloud-based CRM systems for businesses worldwide.",
  "foundingDate": "2017-10-11",
  "email": "info@sunbrilotechnologies.com",
  "telephone": "+91-9545898353",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "I-Space IT Park, Ground Floor, Pranjali Patil Nagar, Next to Seigal Maruti Showroom, Bavdhan",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411021",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "16192 Coastal Highway",
      "addressLocality": "Lewes",
      "addressRegion": "Delaware",
      "postalCode": "19956",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "128 City Road",
      "addressLocality": "London",
      "postalCode": "EC1V 2NX",
      "addressCountry": "GB"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9545898353",
      "contactType": "sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-8788563349",
      "contactType": "human resources",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "email": "info@sunbrilotechnologies.com",
      "contactType": "customer support",
      "areaServed": "Worldwide"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61594137642169",
    "https://www.instagram.com/sunbrilotechnologiespvtltd?stkn=MWlwcm1obTA2d3g1eg==",
    "https://www.linkedin.com/company/80385390/admin/dashboard/",
    "https://www.youtube.com/@SunbriloTechnologies-q4r"
  ]
}
`
          }}
        />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
