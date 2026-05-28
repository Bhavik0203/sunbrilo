import type { StaticImageData } from "next/image";
import case1 from "../../public/images/services/image 23.png";
import case2 from "../../public/images/services/image 24.png";
import case3 from "../../public/images/services/image 25.png";
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
    slug: "integrated-digital-pods",
    label: "ENGINEERING CAPABILITY",
    heading: "Integrated Digital Pods (Dedicated Teams)",
    description:
      "Best for: Long-term product ownership, complex domain challenges, and sustained feature development. We provision a fully audited roster of Senior Engineers, QA Specialists, and certified Agile Leaders who function as a high-fidelity extension of your in-house R&D.",
    image: case1,
    sections: {
      overview:
        "Our Integrated Digital Pods provide you with a dedicated, high-performance team of Senior Engineers, QA Specialists, and Agile Leaders. This model ensures seamless integration with your in-house R&D, delivering sustained feature development and long-term product ownership.",
      client:
        "Enterprises and scale-ups looking for long-term technical partnerships to tackle complex domain challenges and accelerate their product roadmaps.",
      strategiesDescribed:
        "Rigorous talent vetting, seamless agile integration, high-fidelity communication protocols, and dedicated sprint cycles aligned with your business objectives.",
      clientChallenges:
        "Difficulty scaling in-house engineering teams, slow feature delivery, inconsistent code quality, and challenges in maintaining long-term product knowledge.",
      solutionProvider:
        "Sunbrilo provisions fully managed, cross-functional digital pods that operate as a direct extension of your team, ensuring cultural alignment and rapid deployment.",
      outcome:
        "Accelerated time-to-market, sustained product innovation, reduced hiring overhead, and a robust engineering foundation built for long-term scalability.",
    },
  },
  {
    id: 2,
    slug: "elite-staff-augmentation",
    label: "ENGINEERING CAPABILITY",
    heading: "Elite Staff Augmentation",
    description:
      "Need: High-impact, highly specialized skill injection (e.g., a Senior Cloud Architect, GenAI Engineer, or Data Scientist) to meet critical project milestones. We seamlessly plug proven, top-tier global talent directly into your existing reporting and governance matrix to bridge immediate skill gaps.",
    image: case2,
    sections: {
      overview:
        "Our Elite Staff Augmentation service injects highly specialized, top-tier global talent directly into your existing teams. Whether you need a Senior Cloud Architect or a GenAI Engineer, we provide the precise expertise required to hit critical project milestones.",
      client:
        "Organizations facing immediate technical skill gaps or requiring specialized expertise for high-impact, short-to-medium-term enterprise initiatives.",
      strategiesDescribed:
        "Rapid resource deployment, seamless onboarding into existing governance matrices, niche skill matching, and continuous performance monitoring.",
      clientChallenges:
        "Shortage of niche technical skills in local markets, missed project deadlines due to resource constraints, and the high cost of recruiting specialized talent.",
      solutionProvider:
        "Sunbrilo quickly sources and deploys pre-vetted, elite technical specialists who integrate seamlessly into your workflows to bridge immediate capability gaps.",
      outcome:
        "On-time project delivery, immediate access to world-class technical expertise, flexible scaling of resources, and maintained momentum on critical digital initiatives.",
    },
  },
  {
    id: 3,
    slug: "bot-model-market-entry",
    label: "ENGINEERING CAPABILITY",
    heading: "Sovereign Market Entry & Scaling (Build-Operate-Transfer - BOT Model)",
    description:
      "For: Global enterprises planning permanent operational establishment in India. We meticulously establish the team, define operating procedures (SOPs), ensure local compliance, and successfully transition the fully optimized operational entity back to your full control.",
    image: case3,
    sections: {
      overview:
        "The Build-Operate-Transfer (BOT) model is designed for global enterprises establishing a permanent presence in India. We meticulously build your team, optimize operations, ensure compliance, and smoothly transfer the fully functional entity to your control.",
      client:
        "Global corporations planning strategic market entry or establishing permanent offshore capabilities in India without the initial operational and legal complexities.",
      strategiesDescribed:
        "End-to-end entity setup, talent acquisition, Standard Operating Procedure (SOP) definition, regulatory compliance management, and structured operational handover.",
      clientChallenges:
        "Navigating complex local labor laws, lack of local market knowledge, high risks in initial setup, and difficulties in establishing a strong initial team culture.",
      solutionProvider:
        "Sunbrilo handles the entire lifecycle of your offshore establishment—from legal setup and hiring to daily operations—before executing a seamless transfer of ownership.",
      outcome:
        "Risk-free market entry, rapid establishment of a high-performing offshore center, full operational control post-transfer, and significant cost advantages.",
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