export interface BlogPost {
  id: number;
  title: string;
  tag: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string; // used as URL segment, e.g. "living-and-working-in-gdansk-2026"
  featured: boolean;
  author: string;
  body: string; // rich HTML-safe text split by \n\n for paragraphs
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'living-and-working-in-gdansk-2026',
    title: 'Living and working in Gdansk as a student in 2026: Is it worth it?',
    tag: 'Living in Gdańsk',
    excerpt:
      'Discover the costs, work opportunities, and lifestyle pros & cons to help you decide if moving is the right step.',
    date: 'Mar 12, 2026',
    readTime: '6 min read',
    image: '/images/bg4.png',
    featured: true,
    author: 'Sunbrilo Editorial',
    body: `Gdańsk has quietly become one of the most attractive cities in Central Europe for international students. With a blend of historic architecture, a vibrant tech scene, and a cost of living far below Western European capitals, thousands of Erasmus students and young professionals choose it each year.\n\nWe spent time talking to current students, recent graduates, and expat workers to give you an honest, unfiltered picture of life — and work — in this Baltic gem.\n\nBudget roughly €600–€900/month for a comfortable student lifestyle. Rent for a shared room runs €250–€400, groceries €120–€180, a monthly transport pass as little as €15–€20, and you can enjoy the city's nightlife and culture for €80–€150 per month.\n\nGdańsk's economy has diversified rapidly. The tech sector, logistics companies, and customer service firms actively hire students — often with flexible schedules designed around academic commitments. The Young Professional Visa pathway introduced in late 2025 allows non-EU students to work up to 28 hours per week without extra permits.\n\nFor students who prioritise quality of life, career exposure in a growing tech hub, and a manageable budget — yes, Gdańsk is absolutely worth it in 2026. Sort your accommodation before you arrive, learn basic Polish for admin, and tap into the Erasmus community quickly. Do that, and Gdańsk will likely become one of the best decisions you've made.`,
  },
  {
    id: 2,
    slug: 'student-accommodation-gdansk-erasmus',
    title: 'Is it hard to find student accommodation in Gdansk as an Erasmus student? [2026 guide]',
    tag: 'Living in Gdańsk',
    excerpt:
      'A practical checklist for finding housing fast—platforms to use, what to avoid, and how to negotiate safely.',
    date: 'Mar 10, 2026',
    readTime: '5 min read',
    image: '/images/bg2.png',
    featured: false,
    author: 'Sunbrilo Editorial',
    body: `Finding accommodation in Gdańsk as an incoming Erasmus student is genuinely competitive in 2026 — demand has risen sharply while the private rental stock in the Wrzeszcz and Oliwa districts near major universities hasn't kept pace.\n\nThe good news: if you start looking 3–4 months before your arrival, your chances of landing a good room at a fair price are very high. If you leave it to the last 4 weeks, expect to pay a 20–30% premium or compromise on location.\n\nThe most reliable platforms used by students in 2026 are OLX.pl, Gratka, and dedicated Facebook groups like "Gdańsk Accommodation for Students" and "Erasmus Gdańsk 2026". University housing offices also maintain a vetted landlord list — always request this from your international coordinator.\n\nAvoid wire-transferring deposits to landlords you haven't video-called with a live ID verification. Scams targeting Erasmus students remain common, particularly in April–September when demand peaks.\n\nA standard room in a shared flat near the Politechnika Gdańska campus runs €280–€360/month including utilities. University dormitories are cheaper at €150–€220 but typically require applying via your home institution's Erasmus coordinator before you're enrolled.`,
  },
  {
    id: 3,
    slug: 'student-friendly-places-to-work-and-study',
    title: 'Best student-friendly places to work and study in the city',
    tag: 'Guides',
    excerpt:
      'Cafés, libraries, and quiet workspaces with good Wi‑Fi—curated for productivity and comfort.',
    date: 'Mar 06, 2026',
    readTime: '4 min read',
    image: '/images/bg3.png',
    featured: false,
    author: 'Sunbrilo Editorial',
    body: `Whether you're powering through a thesis deadline or joining a remote meeting, Gdańsk has a surprisingly strong selection of study-friendly spots that won't drain your wallet.\n\nFor free, high-quality Wi-Fi and an academic atmosphere, the Gdańsk University of Technology Main Library (open to the public) and the Gdańsk City Library branches are unmatched. Both offer dedicated silent zones, fast internet, and long opening hours including weekends.\n\nFor a café ambience, three spots consistently rank highest among students: Cafe Absinthe in Wrzeszcz for its relaxed vibe and unlimited coffee refills, Drukarnia for its creative coworking corners, and Kawa & Wino in the Old Town for those who prefer a scenic backdrop while working.\n\nIf you need a proper desk with a monitor and meeting rooms, Impact Fintech and Starter coworking spaces both offer student day-pass rates starting from 35 PLN. A monthly hot-desk membership typically runs 280–350 PLN.\n\nPro tip: avoid Starbucks on weekend afternoons — it gets crowded and the Wi-Fi slows noticeably. The lesser-known Coffee Karma near Politechnika is a consistently quieter alternative with excellent espresso.`,
  },
  {
    id: 4,
    slug: 'standout-cv-internships-entry-level',
    title: 'How to build a standout CV for internships and entry-level roles',
    tag: 'Education & Careers',
    excerpt:
      'Structure, keywords, and examples to help your CV get shortlisted—plus common mistakes to avoid.',
    date: 'Mar 02, 2026',
    readTime: '7 min read',
    image: '/images/bg2.png',
    featured: false,
    author: 'Sunbrilo Editorial',
    body: `Recruiters spend an average of 7 seconds on a first CV scan. In that window, your CV needs to communicate three things immediately: what you do, what level you're at, and why you're worth a second look.\n\nStart with a two-sentence professional summary at the top — not an "Objective Statement" — that positions you for the specific role. Example: "Computer Science student at Gdańsk Tech with hands-on experience in React and Python. Seeking a junior front-end internship to contribute to product teams building at scale."\n\nFor internship applicants, the Experience section should come before Education only if you have at least 6 months of paid or substantial voluntary work. Otherwise, Education first — but include your GPA only if it's above 3.5 (or equivalent).\n\nKeywords matter enormously for Applicant Tracking Systems. Mirror the exact phrasing from the job posting — if they say "REST APIs" don't write "RESTful services". If they say "Agile methodology" include it verbatim.\n\nThe most common CV mistakes that get students rejected: generic summaries, listing responsibilities instead of achievements, including a photo (unless applying in Germany or Poland where it is still expected), and submitting a file larger than 2MB. Keep it to one page for under 2 years of experience.`,
  },
  {
    id: 5,
    slug: 'student-wellbeing-sleep-focus-routines',
    title: 'Wellbeing tips for students: sleep, focus, and routines that work',
    tag: 'Health & Wellbeing',
    excerpt:
      'Simple habits that improve energy and focus during busy semesters—without burning out.',
    date: 'Feb 25, 2026',
    readTime: '3 min read',
    image: '/images/bg3.png',
    featured: false,
    author: 'Sunbrilo Editorial',
    body: `Burnout among students has increased significantly post-pandemic. The pressure of combining studies with part-time work, social life, and living independently for the first time creates a perfect storm — but it's highly manageable with the right habits.\n\nSleep is the highest-leverage investment you can make in your academic performance. Studies consistently show that students sleeping fewer than 6 hours retain 40% less information than those sleeping 7.5–9 hours. Protect your sleep window like a non-negotiable appointment.\n\nFor focus during study sessions, try the 52/17 method — 52 minutes of deep work, 17 minutes of genuine rest (not scrolling). This outperforms the classic Pomodoro (25/5) for longer reading and writing tasks according to recent productivity research.\n\nMovement is underrated. Even a 20-minute walk between study blocks significantly improves working memory and reduces cortisol. Gdańsk's coastal paths make this easy and scenic.\n\nFinally, be deliberate about your social calendar. Isolation worsens cognitive performance as much as sleep deprivation. Weekly low-effort social touchpoints — a shared meal, a walk, a board game evening — are protective factors against burnout. Schedule them as you would a lecture.`,
  },
  {
    id: 6,
    slug: 'budgeting-basics-students',
    title: 'Budgeting basics: managing money during your studies',
    tag: 'Money & Sustainability',
    excerpt:
      'Plan expenses, track spending, and build a realistic budget that keeps you stress-free all term.',
    date: 'Feb 20, 2026',
    readTime: '5 min read',
    image: '/images/bg4.png',
    featured: false,
    author: 'Sunbrilo Editorial',
    body: `Financial stress is the leading cause of students dropping out or underperforming academically. The good news: it's almost entirely avoidable with a simple system you actually stick to.\n\nStart with your monthly income — scholarship, family support, part-time wages. Divide it into four buckets: 50% needs (rent, utilities, groceries, transport), 20% wants (eating out, entertainment), 20% savings or emergency fund, 10% irregular expenses (textbooks, travel, clothes).\n\nThe single most impactful habit: track every spend for the first 30 days without trying to change anything. Most students discover they're overspending in one or two categories they hadn't noticed — food delivery is the biggest culprit in Gdańsk.\n\nFor tracking, the free apps Wallet by BudgetBakers (Polish-made, great for PLN budgets) and the YNAB student plan are the most used among international students here.\n\nFor groceries, Lidl and Biedronka offer comparable quality to more expensive stores at 30–40% lower prices. Buying staples in bulk — rice, pasta, legumes — and batch cooking twice a week can reduce your food budget by up to €60/month versus daily shopping.`,
  },
  {
    id: 7,
    slug: 'part-time-jobs-for-students',
    title: 'Part-time jobs for students: where to look and how to apply',
    tag: 'Education & Careers',
    excerpt:
      'From cafés to tech internships—learn where to find roles, what to prepare, and how to stand out quickly.',
    date: 'Feb 14, 2026',
    readTime: '6 min read',
    image: '/images/bg2.png',
    featured: false,
    author: 'Sunbrilo Editorial',
    body: `Gdańsk's job market for students is more accessible than most cities of comparable size in Poland — largely because the growing tech and logistics sectors actively seek English-speaking, flexible workers.\n\nThe fastest way to land a part-time role in Gdańsk is through three channels: university career centres (often have exclusive employer partnerships), LinkedIn (set your location to Gdańsk and turn on "open to work" for part-time), and Pracuj.pl which is Poland's most active job board.\n\nFor tech roles — junior QA, support, data entry, or testing positions — check the careers pages of Amazon, Intel, and Energa directly. All three have significant operations in the Tri-City area and run structured student programmes.\n\nFor hospitality and retail, direct walk-in applications still work exceptionally well in Gdańsk. Print 10 copies of a one-page CV and visit venues in person during off-peak hours (2–4 PM). Hiring managers in these sectors value initiative over digital applications.\n\nWhen applying, always tailor the first line of your cover email to the company — one sentence showing you've read something specific about them. Response rates jump from roughly 8% to 25% with this single change.`,
  },
  {
    id: 8,
    slug: 'city-transport-guide-students',
    title: 'City transport guide: passes, routes, and saving money while commuting',
    tag: 'Guides',
    excerpt:
      'Everything you need to know about daily travel—tickets, monthly passes, and the most reliable routes.',
    date: 'Feb 08, 2026',
    readTime: '4 min read',
    image: '/images/bg3.png',
    featured: false,
    author: 'Sunbrilo Editorial',
    body: `Gdańsk, Gdynia, and Sopot form the Tri-City region sharing a unified public transport network (ZTM) — one of the best integrated systems in Poland. For students, navigating it efficiently can save €20–€30/month compared to ad-hoc tickets.\n\nThe most cost-effective option for most students is the monthly student pass covering all ZTM tram, bus, and Szybka Kolej Miejska (SKM) train services: approximately 49 PLN/month with a valid student ID (ISIC or Polish uczelnia card). Single tickets cost 3.80 PLN — so if you travel more than 7 times per month, the pass wins.\n\nThe SKM train is the fastest connection between the city centre, university campuses, and the coastal districts. It runs every 10–15 minutes during peak hours and is significantly faster than buses for longer routes. Download the SKM Trojmiasto app for live departure boards.\n\nFor cycling, Mevo (the city bike system) has been expanded significantly and is excellent for short hops under 3km. The first 20 minutes of each ride are free with a registered account — enough for most intracity student trips.\n\nAvoid rush hour trams on the main Grunwaldzka corridor (lines 2, 6, 12) between 7:30–9:00 AM and 4:00–6:00 PM if possible. The SKM is a far more comfortable alternative for the same route.`,
  },
  {
    id: 9,
    slug: 'healthy-eating-student-budget',
    title: 'Healthy eating on a student budget: simple meals and grocery tips',
    tag: 'Health & Wellbeing',
    excerpt:
      'A practical meal plan with affordable ingredients—plus shopping habits that reduce cost and waste.',
    date: 'Feb 01, 2026',
    readTime: '5 min read',
    image: '/images/bg4.png',
    featured: false,
    author: 'Sunbrilo Editorial',
    body: `Eating well as a student in Gdańsk doesn't require a large budget — it requires a small system. Students who batch cook twice a week consistently spend less, eat better, and waste less than those who buy day-to-day.\n\nA realistic healthy food budget in Gdańsk in 2026 is 400–550 PLN/month (~€90–€125). Achieving this means doing 80% of your shopping at Lidl or Biedronka, buying seasonal vegetables, and cooking proteins in bulk.\n\nSeven ingredients that anchor a cheap, nutritious student diet: eggs, tinned chickpeas and lentils, frozen mixed vegetables, oats, rice, natural yoghurt, and seasonal fruits. These form the base of dozens of quick meals at very low cost.\n\nFor meal planning, start with just two batch-cook days: Sunday evening and Wednesday evening. Prepare a grain base (rice or pasta), two proteins (egg-based and legume-based), and a roasted or stir-fried vegetable mix. This covers most meals for the week with minimal effort.\n\nThe Hala Targowa market near the Main City is excellent for fresh vegetables at 30–40% below supermarket prices — open Tuesday, Thursday, and Saturday mornings. For fish (Gdańsk's forte), the Pomeranian fish market near the harbour offers excellent quality at competitive prices.`,
  },
  {
    id: 10,
    slug: 'sustainable-living-tips-students',
    title: 'Sustainable living tips: reduce waste and save money at the same time',
    tag: 'Money & Sustainability',
    excerpt:
      'Small habits that make a big difference—lower bills, smarter purchases, and easy sustainability wins.',
    date: 'Jan 25, 2026',
    readTime: '4 min read',
    image: '/images/bg2.png',
    featured: false,
    author: 'Sunbrilo Editorial',
    body: `The best sustainable habits also happen to be the most economical — a fact that makes them especially relevant for students. The overlap between saving money and reducing environmental impact is larger than most people expect.\n\nStart with energy: turning off standby devices, using cold-wash cycles, and airing clothes instead of tumble-drying saves the average student €8–€15/month. In shared flats, agreeing on a heating schedule (rather than everyone adjusting individually) can cut the heating bill by up to 20%.\n\nFor clothing, Gdańsk has a thriving second-hand scene. Ciuchland in Wrzeszcz and the vintage markets at Stocznia Gdańska (held the last Saturday of each month) offer quality items at a fraction of retail. Buying second-hand instead of fast fashion saves the average student €200–€400/year.\n\nFor food waste, the app Too Good To Go is active in Gdańsk with 40+ participating restaurants and bakeries. Picking up a surprise bag (typically 12–15 PLN) regularly can substitute one meal per day at restaurant quality.\n\nFor general purchases, apply the 48-hour rule: wait 48 hours before buying anything non-essential. Studies show this eliminates roughly 60% of impulse purchases — a significant saving over a semester.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const gridLayout = [
  'col-span-6 lg:col-span-4 lg:row-span-2',
  'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-1',
  'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3',
  'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3',
  'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-3',
  'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-5',
  'col-span-6 lg:col-span-4 lg:row-span-2 lg:col-start-3 lg:row-start-5',
  'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-7',
  'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-7',
  'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-7',
];
