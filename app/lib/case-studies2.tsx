import type { StaticImageData } from "next/image";

import case1 from "../../public/images/services/service1.png";
import case2 from "../../public/images/services/service2.png";
import case3 from "../../public/images/services/service3.png";
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
    slug: "cloud-native-architecture",
    label: "CLOUD CAPABILITY",
    heading: "Cloud-Native Architecture & Design",
    description:
      "We build fully decoupled, microservices-based architectures engineered for infinite horizontal scalability. We blueprint public, private, or hybrid cloud solutions tailored for your regulatory compliance (HIPAA, GDPR) and maximum transactional throughput.",
    image: case1,
    sections: {
      overview:
        "Our Cloud-Native Architecture service focuses on designing and implementing highly resilient, decoupled systems. By utilizing microservices, containers, and serverless computing, we ensure your infrastructure can scale infinitely to meet any demand.",
      client:
        "Enterprises seeking to modernize legacy monolithic applications and transition to highly scalable, agile cloud environments.",
      strategiesDescribed:
        "Microservices blueprinting, container orchestration (Kubernetes), serverless design, and multi-cloud architectural planning to prevent vendor lock-in.",
      clientChallenges:
        "Inability to scale under peak loads, high infrastructure costs, slow deployment cycles, and difficulty maintaining complex legacy monoliths.",
      solutionProvider:
        "Sunbrilo architects cloud-native solutions that provide extreme elasticity, faster time-to-market, and a foundation built on modern best practices.",
      outcome:
        "Infinite scalability, reduced infrastructure overhead, accelerated feature deployment, and a future-proof technology stack.",
    },
  },
  {
    id: 2,
    slug: "zero-disruption-migration",
    label: "CLOUD CAPABILITY",
    heading: "Zero-Disruption Migration Services",
    description:
      "Execute guaranteed flawless data, application, and database migrations. Our proprietary methodology uses parallel staging and continuous validation to ensure zero disruption to your active revenue streams throughout the entire transition.",
    image: case2,
    sections: {
      overview:
        "We handle complex enterprise migrations with surgical precision. Utilizing proprietary staging methodologies, we move your mission-critical applications and massive data volumes to the cloud without a single second of unexpected downtime.",
      client:
        "Organizations looking to migrate critical on-premise infrastructure or switch cloud providers without impacting ongoing business operations.",
      strategiesDescribed:
        "Parallel staging, automated data validation, blue-green deployment strategies, and rigorous failover testing before final cutover.",
      clientChallenges:
        "Fear of prolonged downtime, potential data corruption, loss of active revenue during migration, and the complexity of re-platforming legacy systems.",
      solutionProvider:
        "Sunbrilo executes seamless, zero-disruption cloud migrations backed by continuous integrity checks and meticulous rollback contingencies.",
      outcome:
        "Flawless transition to the cloud, 100% data integrity preservation, uninterrupted user experience, and immediate realization of cloud benefits.",
    },
  },
  {
    id: 3,
    slug: "cloud-security-disaster-recovery",
    label: "CLOUD CAPABILITY",
    heading: "Cloud Security & Disaster Recovery",
    description:
      "Protect your digital perimeter. We deploy military-grade encryption, automated threat detection, and robust disaster recovery (DR) protocols to ensure business continuity and strict adherence to global compliance standards (SOC2, HIPAA, GDPR).",
    image: case3,
    sections: {
      overview:
        "Security is woven into the fabric of our cloud deployments. We establish impenetrable perimeters, implement Zero-Trust architectures, and design comprehensive Disaster Recovery systems that guarantee business continuity under any scenario.",
      client:
        "Enterprises operating in highly regulated industries (finance, healthcare) or those requiring absolute assurance against cyber threats and data loss.",
      strategiesDescribed:
        "Zero-Trust architecture, automated threat hunting, encryption at rest and in transit, and multi-region automated failover configurations.",
      clientChallenges:
        "Rising cyber threat landscape, strict compliance mandates, lack of reliable backup strategies, and vulnerability to ransomware or outages.",
      solutionProvider:
        "Sunbrilo integrates military-grade security protocols and builds self-healing DR frameworks that protect your most valuable digital assets.",
      outcome:
        "Ironclad security posture, guaranteed regulatory compliance, immediate recovery from catastrophic events, and total operational peace of mind.",
    },
  },
  {
    id: 4,
    slug: "finops-cost-governance",
    label: "CLOUD CAPABILITY",
    heading: "FinOps & Cost Governance",
    description:
      "Stop infrastructure budget leakage. We audit and deploy advanced FinOps cloud cost optimization principles, including automated auto-scaling, reserved capacity management, and resource right-sizing that routinely delivers 30-50% reduction in monthly cloud spending.",
    image: case4,
    sections: {
      overview:
        "We transform cloud spending from a black box into a strategically managed asset. Our FinOps experts audit your entire cloud ecosystem to identify waste, optimize resource allocation, and implement automated financial governance.",
      client:
        "Companies experiencing spiraling cloud costs, budget overruns, or lacking visibility into the financial efficiency of their infrastructure.",
      strategiesDescribed:
        "Resource right-sizing, reserved instance optimization, automated scaling schedules, and granular cost attribution dashboards.",
      clientChallenges:
        "Unpredictable monthly cloud bills, orphaned compute resources, over-provisioned databases, and an inability to accurately forecast infrastructure costs.",
      solutionProvider:
        "Sunbrilo implements rigorous FinOps methodologies and automated governance tools to slash waste and maximize the ROI of every cloud dollar.",
      outcome:
        "30-50% reduction in cloud OPEX, transparent financial reporting, automated cost controls, and a highly efficient, right-sized cloud infrastructure.",
    },
  }
];

export const caseStudyMap = Object.fromEntries(
  caseStudies.map((item) => [item.slug, item]),
) as Record<string, CaseStudy>;