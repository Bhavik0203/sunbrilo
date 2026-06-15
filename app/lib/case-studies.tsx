import type { StaticImageData } from "next/image";

import case1 from "../../public/images/services/service2.png";
import case2 from "../../public/images/services/Development & Testing.jpg";
import case3 from "../../public/images/services/image 59.png";
import case4 from "../../public/images/services/service4.png";

export type CaseStudySections = {
  overview: string;
  client: string;
  strategiesDescribed: string;
  clientChallenges: string;
  solutionProvider: string;
  outcome: string;
};

export type CaseStudy = {
  id: number;
  slug: string;
  label: string;
  heading: string;
  description: string;
  image: StaticImageData;
  sections: CaseStudySections;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "custom-web-mobile-development",
    label: "ENGINEERING CAPABILITY",
    heading: "Digital Experience Development",
    description:
      "Responsive, intuitive interfaces built on modern frameworks (React, Angular) ensuring seamless omnichannel engagement.",
    image: case1,
    sections: {
      overview:
        "Our custom web and mobile development service focuses on creating scalable, high-performance applications that meet your exact business requirements. We leverage cutting-edge frameworks and best practices to ensure your digital products stand out in the competitive market.",
      client:
        "Enterprises seeking to transform their digital presence with custom-built applications that provide superior user experiences and robust functionality.",
      strategiesDescribed:
        "Agile development methodology, responsive design principles, cross-platform compatibility, and continuous integration/deployment pipelines to ensure rapid iteration and delivery.",
      clientChallenges:
        "Legacy systems hindering growth, poor user engagement, lack of mobile optimization, and inability to scale with business demands.",
      solutionProvider:
        "Sunbrilo delivers comprehensive web and mobile solutions with modern architectures, intuitive UI/UX design, and seamless performance across all platforms and devices.",
      outcome:
        "Increased user engagement, improved conversion rates, enhanced brand perception, and scalable applications that grow with your business needs.",
    },
  },
  {
    id: 2,
    slug: "enterprise-api-integration",
    label: "ENGINEERING CAPABILITY",
    heading: "Enterprise Integration & APIs",
    description:
      "Unify your digital ecosystem. We orchestrate complex integrations across legacy ERPs, CRMs, and emerging platforms.",
    image: case2,
    sections: {
      overview:
        "Our enterprise API integration services break down data silos and create seamless connections between your existing systems and new applications, enabling unified workflows and real-time data exchange.",
      client:
        "Organizations struggling with disconnected systems, data inconsistencies, and inefficient manual processes across multiple platforms.",
      strategiesDescribed:
        "Custom API development, legacy system modernization, real-time data synchronization, and comprehensive integration testing to ensure reliable system communication.",
      clientChallenges:
        "Fragmented data across multiple systems, manual data entry errors, lack of real-time insights, and inefficient cross-departmental collaboration.",
      solutionProvider:
        "Sunbrilo architects robust API solutions that integrate disparate systems, automate workflows, and provide unified access to critical business data.",
      outcome:
        "Streamlined operations, reduced manual errors, real-time business insights, and improved decision-making through unified data access.",
    },
  },
  {
    id: 3,
    slug: "offshore-qa-testing",
    label: "ENGINEERING CAPABILITY",
    heading: "Continuous Quality Engineering",
    description:
      "Move beyond traditional QA. We implement automated regression, security stress testing, and performance validation within your deployment pipeline.",
    image: case3,
    sections: {
      overview:
        "Our comprehensive QA and testing services ensure your software meets the highest quality standards through automated testing, manual testing, and continuous quality assurance throughout the development lifecycle.",
      client:
        "Companies requiring reliable, bug-free software deployments with comprehensive testing coverage and ongoing quality assurance.",
      strategiesDescribed:
        "Automated testing frameworks, manual exploratory testing, performance testing, security testing, and continuous integration with quality gates.",
      clientChallenges:
        "Frequent production bugs, poor user experience, security vulnerabilities, and lack of comprehensive testing coverage in development cycles.",
      solutionProvider:
        "Sunbrilo provides end-to-end QA services with dedicated testing teams, automated test suites, and rigorous quality assurance protocols integrated into your CI/CD pipeline.",
      outcome:
        "99.9% bug-free deployments, enhanced user satisfaction, improved security posture, and reduced maintenance costs through proactive quality assurance.",
    },
  }
  //   {
  //     id: 4,
  //     slug: "full-lifecycle-development",
  //     label: "ENGINEERING CAPABILITY",
  //     heading: "Full-Lifecycle Development & Testing Services",
  //     description:
  //       "We take absolute ownership of your product from the first line of code to the final stress test, ensuring comprehensive development and testing coverage throughout the entire software lifecycle.",
  //     image: case4,
  //     sections: {
  //       overview:
  //         "Our full-lifecycle services encompass everything from initial concept and design through development, testing, deployment, and ongoing maintenance, providing complete end-to-end solutions.",
  //       client:
  //         "Enterprises seeking a single partner for comprehensive software development and testing services with accountability throughout the entire project lifecycle.",
  //       strategiesDescribed:
  //         "Integrated development and testing teams, agile methodologies, DevOps practices, and continuous monitoring to ensure seamless delivery and maintenance.",
  //       clientChallenges:
  //         "Fragmented development processes, lack of accountability across vendors, inconsistent quality, and difficulty managing complex software projects.",
  //       solutionProvider:
  //         "Sunbrilo provides unified teams that handle all aspects of software development and testing, ensuring consistent quality, clear communication, and single-point accountability.",
  //       outcome:
  //         "Faster time-to-market, consistent quality across all deliverables, reduced project complexity, and complete visibility into development progress and outcomes.",
  //     },
  //   },
];

export const caseStudyMap = Object.fromEntries(
  caseStudies.map((item) => [item.slug, item]),
) as Record<string, CaseStudy>;