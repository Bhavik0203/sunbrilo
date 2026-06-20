const fs = require('fs');
const path = require('path');

const seoData = [
  {
    path: 'app/aboutus',
    title: 'About Sunbrilo Technologies | Custom Software & Managed IT Services',
    description: 'Discover Sunbrilo Technologies, a global managed IT services partner driving digital transformation through custom software, cloud, and AI-powered solutions.',
    keywords: 'custom software, AI solutions, managed IT services, cloud solutions, offshoring services, crm software, data analytics, payroll automation, managed IT services, IT services, sunbrilo technologies, IT services US'
  },
  {
    path: 'app/services',
    title: 'Enterprise IT Services & Software Solutions | Sunbrilo Technologies',
    description: 'Explore Sunbrilo\'s enterprise IT services, software development, cloud migration, AI analytics, cybersecurity & offshore staffing for global businesses.',
    keywords: 'custom software development company, enterprise IT services, cloud migration services, offshore staff augmentation, IT consulting firm, IT strategy consulting, software development company, cloud migration, cybersecurity services, data analytics'
  },
  {
    path: 'app/services/development-testing',
    title: 'Software Development & QA Testing Services | Sunbrilo Technologies',
    description: 'Sunbrilo provides full-lifecycle software engineering & QA testing - automated regression, CI/CD integration, React, Node.js & enterprise API development.',
    keywords: 'software development services, agile software development, software testing and qa services, automated testing services, enterprise application development, mobile application development, API, ERP, Enterprise integration, web application testing'
  },
  {
    path: 'app/services/cloud-solutions',
    title: 'Cloud Solutions & Migration Services | Sunbrilo Technologies',
    description: 'Cloud solution services by Sunbrilo deliver secure, scalable infrastructure across AWS, Azure, and GCP, including cloud migration, architecture, cost optimisation, and 24/7 managed operations.',
    keywords: 'cloud solutions, cloud migration, cloud computing services, cloud migration services, AWS consulting services, Azure managed services, cloud infrastructure management, multi-cloud architecture, cloud native development, scalable cloud hosting, hybrid cloud solutions, cloud strategy consulting'
  },
  {
    path: 'app/services/cybersecurity',
    title: 'Expert Cybersecurity Services | Sunbrilo Technologies',
    description: 'Protect your business with Sunbrilo Technologies cybersecurity services with Zero-Trust architecture, penetration testing, SOC 2 compliance, and 24/7 threat monitoring.',
    keywords: 'managed cybersecurity services, cybersecurity consulting firms, cloud security services, information security management, managed security service provider, risk quantification, cognitive security, cybersecurity services US'
  },
  {
    path: 'app/services/data-analytics',
    title: 'Data Analytics & AI Solutions Services | Sunbrilo Technologies',
    description: 'Unlock growth with our data analytics & AI solutions. We build scalable platforms and predictive models to transform complex data into actionable business intelligence.',
    keywords: 'data analytics, business intelligence, AI solutions, data analytics consulting services, data visualization services, cloud data analytics, data migration services, cloud security, data governance'
  },
  {
    path: 'app/services/offshoring-services',
    title: 'Offshore Software Development Services | Sunbrilo Technologies',
    description: 'Scale with expert offshoring software development. We provide managed, cross-functional engineering pods to accelerate technical deployment and optimize operational costs.',
    keywords: 'Offshore software development, offshore development, offshore development center, offshore software development company, offshore development services, IT staff augmentation, offshore development US'
  },
  {
    path: 'app/services/managed-it-services',
    title: 'Managed IT Services & IT Outsourcing | Sunbrilo Technologies',
    description: 'Looking for reliable Managed IT services? Sunbrilo offers 24/7 proactive IT support, cloud management, and vCIO consulting to optimize your enterprise infrastructure.',
    keywords: 'managed IT services, IT governance, corporate IT support, IT compliance, audit readiness, sunbrilo technologies, managed IT services in the US'
  },
  {
    path: 'app/services/implementation-services',
    title: 'IT Implementation & Integration Services | Sunbrilo Technologies',
    description: 'Sunbrilo Technologies provides end-to-end IT implementation, including ERP integration, system migration, legacy modernization, and post-launch performance optimization.',
    keywords: 'IT implementation, Software integration, Cloud migration, Enterprise solutions, IT consulting, Digital transformation, API integration, ERP implementation, Change management'
  },
  {
    path: 'app/services/monitoring-and-support',
    title: '24/7 IT Monitoring & Support Services | Sunbrilo Technologies',
    description: 'Sunbrilo provides round-the-clock IT monitoring & support for real-time alerting, incident management & proactive maintenance to minimise system downtime.',
    keywords: 'IT monitoring, support services, cognitive monitoring, global network operation, backend application support, cloud migration, Azure bills, AWS migration, monitoring and support'
  },
  {
    path: 'app/solutions',
    title: 'Custom CRM Software Development Solutions | Sunbrilo Technologies',
    description: 'Enhance your business efficiency with our custom CRM software solutions. Sunbrilo provides scalable, tailor-made CRM platforms to streamline your sales, HR, and operations.',
    keywords: 'crm software, attendance tracking, performance review, payroll automation, equipment leasing platform, leasing operations, HRMS, biometric attendance, order management software'
  },
  {
    path: 'app/solutions/logistic-and-supply-chain-solutions',
    title: 'Custom Logistics and Supply Chain Software Solutions | Sunbrilo Technologies',
    description: 'Scale your operations with intelligent logistics and supply chain software. Sunbrilo Technologies builds custom, AI-driven platforms for real-time freight tracking, routing, and WMS integration.',
    keywords: 'logistics software, supply chain software, Intelligent logistics, IT solutions, Integrated warehouse management, dispatch automation, fleet tracking, ai driven platform'
  },
  {
    path: 'app/solutions/cognitive-dining-workforce-orchestration',
    title: 'Smart Cafeteria Management Software | Sunbrilo Technologies',
    description: 'Digitise cafeteria operations with Sunbrilo\'s smart system with digital menus, pre-ordering, dietary tracking, waste reduction analytics & workforce dining.',
    keywords: 'cognitive dining, workforce management, dietary tracking, dietary patterns, biometric automation, sunbrilo technologies'
  },
  {
    path: 'app/solutions/intelligent-asset-performance-management',
    title: 'CMMS & Asset Performance Management | Sunbrilo Technologies',
    description: 'Predict equipment failures before they happen. Sunbrilo\'s CMMS software enables preventive maintenance scheduling & extends asset lifecycle efficiency.',
    keywords: 'Asset performance management, CMMS software, data governance, predictive maintenance, engineering maintenance, Predictive ROI Assessment'
  },
  {
    path: 'app/solutions/hrms-empowering-your-workforce',
    title: 'HRMS Software for Workforce Management | Sunbrilo Technologies',
    description: 'Transform HR operations with Sunbrilo\'s HRMS software with automated payroll, onboarding, attendance & GDPR/HIPAA-compliant data security, all-in-one.',
    keywords: 'hrms, HRMS Software, workforce empowerment, attendance tracking, performance review, payroll automation, HRMS software US, workforce management, sunbrilo technologies'
  },
  {
    path: 'app/solutions/equipment-leasing-platform',
    title: 'Equipment Leasing Management Platform | Sunbrilo Technologies',
    description: 'Manage your entire equipment leasing lifecycle with Sunbrilo’s contract management, asset tracking, billing automation & lessee portal in one platform.',
    keywords: 'equipment leasing, equipment financing, equipment leasing software, leasing management'
  },
  {
    path: 'app/solutions/order-management',
    title: 'AI-Driven Order Management Software | Sunbrilo Technologies',
    description: 'Achieve zero-latency fulfillment with Sunbrilo’s AI-driven order management system. Streamline your operations with real-time inventory sync, multi-channel routing, and custom workflows.',
    keywords: 'order management system, purchase order software, order management, order management software in US, order management software in India, global ecommerce, realtime inventory, purchase order software,'
  },
  {
    path: 'app/solutions/tablet-based-biometric-attendance-system',
    title: 'Tablet Biometric Attendance System | Sunbrilo Technologies',
    description: 'Secure and reliable tablet-based biometric attendance tracking for enterprises. Sunbrilo delivers accurate facial & fingerprint-based attendance systems.',
    keywords: 'biometric attendance tracking system, attendance tracking system, Biometric attendance, attendance tracking system, sunbrilo technologies'
  },
  {
    path: 'app/solutions/remote-geofencing-attendance-system',
    title: 'Remote Geofencing Attendance System | Sunbrilo Technologies',
    description: 'Track remote workforce attendance accurately with Sunbrilo\'s geofencing attendance system, real-time location verification & automated reporting.',
    keywords: 'geofencing attendance, geofencing technology, biometric attendance tracking system, attendance tracking system, Biometric attendance, sunbrilo technologies'
  },
  {
    path: 'app/career',
    title: 'Careers at Sunbrilo Technologies | Join Our Team',
    description: 'Explore careers at Sunbrilo Technologies. Join a collaborative team building cloud, AI & software solutions with growth, equity & full benefits.',
    keywords: 'careers in technology, best job opportunities, latest jobs in Pune, equal employment opportunities, healthy work environment, full-time job opportunities, top tech jobs'
  },
  {
    path: 'app/contact-us',
    title: 'Contact Sunbrilo Technologies | Get in Touch',
    description: 'Contact Sunbrilo Technologies for custom software, cloud & IT consulting. Get a discovery call within 24 hours. Offices in India & the US',
    keywords: 'custom software development, software development company in India, software development company in US, HRMS solutions, data analytics, geofencing solutions, biometric attendance, cyber security services, managed IT services, attendance tracking software, sunbrilo technologies'
  }
];

const basePath = path.resolve(__dirname);

seoData.forEach(page => {
  const targetDir = path.join(basePath, page.path);
  if (!fs.existsSync(targetDir)) {
    console.log(`Directory does not exist: ${targetDir}`);
    return;
  }

  // Check if page.tsx is a client component
  const pageTsxPath = path.join(targetDir, 'page.tsx');
  let isClientComponent = false;
  if (fs.existsSync(pageTsxPath)) {
    const content = fs.readFileSync(pageTsxPath, 'utf8');
    if (content.includes('"use client"') || content.includes("'use client'")) {
      isClientComponent = true;
    }
  }

  const metadataBlock = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "${page.title.replace(/"/g, '\\"')}",
  description: "${page.description.replace(/"/g, '\\"')}",
  keywords: "${page.keywords.replace(/"/g, '\\"')}",
};

`;

  if (isClientComponent) {
    // Generate layout.tsx
    const layoutTsxPath = path.join(targetDir, 'layout.tsx');
    if (!fs.existsSync(layoutTsxPath)) {
      const layoutContent = `${metadataBlock}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
      fs.writeFileSync(layoutTsxPath, layoutContent, 'utf8');
      console.log(`Created layout.tsx for ${page.path}`);
    } else {
      console.log(`layout.tsx already exists for ${page.path}, please update manually.`);
    }
  } else {
    // Inject into page.tsx if it doesn't already have metadata
    if (fs.existsSync(pageTsxPath)) {
      const content = fs.readFileSync(pageTsxPath, 'utf8');
      if (!content.includes('export const metadata')) {
        // Need to add import type { Metadata } if not there
        let importMetadata = '';
        if (!content.includes('type { Metadata }')) {
          importMetadata = `import type { Metadata } from 'next';\n`;
        }
        
        const metadataOnly = `export const metadata: Metadata = {
  title: "${page.title.replace(/"/g, '\\"')}",
  description: "${page.description.replace(/"/g, '\\"')}",
  keywords: "${page.keywords.replace(/"/g, '\\"')}",
};
`;
        const updatedContent = importMetadata + metadataOnly + '\n' + content;
        fs.writeFileSync(pageTsxPath, updatedContent, 'utf8');
        console.log(`Updated metadata in page.tsx for ${page.path}`);
      } else {
        console.log(`metadata already exists in page.tsx for ${page.path}`);
      }
    }
  }
});
