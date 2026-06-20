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
      className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5L90N8DETE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5L90N8DETE');
          `}
        </Script>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
