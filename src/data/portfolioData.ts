import { Project, TimelineExperience, Achievement } from '../types';

import realPortraitImg from '../assets/images/P1051020.JPG';
import bowlImg from '../assets/images/bowl_and_beyond_food_1788956852216.jpg';
import thynaaImg from '../assets/images/thynaa_wellness_pilot_1788956888573.jpg';
import iskconImg from '../assets/images/iskcon_operations_scale_1788956904930.jpg';
import scalerImg from '../assets/images/scaler_tech_learning_1788956919420.jpg';
import googleLabImg from '../assets/images/google_search_lab_1788956935494.jpg';

export const PERSONAL_INFO = {
  name: 'AMITESH KUMAR',
  role: 'Strategy | Growth | Operations',
  heroStatement: '“I build businesses, solve problems & turn ideas into execution.”',
  portrait: realPortraitImg,
  fallbackPortrait: '/P1051020.JPG',
  educationCurrent: {
    institution: "Masters’ Union",
    program: 'PGP in Human Resources & Organizational Strategy',
    period: '2026 — Present',
    location: 'Gurugram',
    honor: 'Pankaj Bansal Scholarship for Young Leaders',
  },
  educationUndergrad: {
    institution: 'University of Allahabad',
    degree: 'B.Tech (Computer Science & Engineering)',
    gpa: '8.6/10 (Top 5% of the batch)',
    leadership: 'Media Lead, Google DSC (1/200+ students)',
    period: '2021 — 2025',
    location: 'Prayagraj',
  },
  contact: {
    email: 'amitesh.kumar2027@mastersunion.org',
    phone: '+91 7209804402',
    instagram: 'https://www.instagram.com/itsamik/',
    linkedin: 'www.linkedin.com/in/amiteshku',
    linkedinUrl: 'https://www.linkedin.com/in/amiteshku',
  },
  aboutBio:
    'I operate at the intersection of strategy, operations, and analytical execution. From co-founding consumer ventures and driving 0→1 product rollouts at early-stage startups to scaling operations across 630+ accommodations and optimizing family business supply chains, I focus on turning complex challenges into streamlined, scalable systems. I combine hands-on operational grit with rigorous data-driven decision making—translating customer insights into sustainable growth, accelerated working capital cycles, and high-impact business outcomes.',
};

export const PROJECTS: Project[] = [
  {
    id: 'thynaa-healthy-naturally',
    number: '01',
    title: 'THYNAA HEALTHY NATURALLY',
    subtitle: 'Aarogya Bhoomi 0→1 Pilot & Customer Conversion',
    category: 'Strategy / GTM / Customer Insights',
    period: 'Feb 2026 – Apr 2026',
    location: 'Ghaziabad',
    metrics: [
      { value: '300+', label: 'Pilot families launched' },
      { value: '500+', label: 'Prospect insights gathered' },
      { value: '~15%', label: 'Trial-to-sub conversion' },
    ],
    description:
      'Launched Aarogya Bhoomi’s 300-family pilot, translated 500+ prospect insights from 10+ workshops into customer profiles, and converted ~15% of 100+ trial-kit recipients into subscribers through one-on-one product demonstrations.',
    image: thynaaImg,
    caseStudy: {
      problem:
        'Introducing a 0→1 wellness proposition to households requires overcoming skepticism, identifying acute consumer health friction, and finding a repeatable model to convert free sampling into committed paid subscriptions.',
      whatIDid: [
        "Spearheaded Aarogya Bhoomi's 300-family pilot rollout in direct collaboration with company founders.",
        'Conducted 10+ experiential workshops, gathering 500+ prospect insights to construct actionable customer profiles.',
        'Executed personalized 1-on-1 product demonstrations with 100+ trial-kit recipients to validate value propositions.',
      ],
      approach: [
        'Direct founder collaboration to build an agile 0→1 go-to-market testing playbook.',
        'Converting raw workshop feedback into pain-point clusters to customize pitch narratives.',
        'High-touch consultative product demonstrations rather than passive digital advertising.',
      ],
      outcome: [
        'Successfully launched and sustained the 300-family foundation pilot.',
        'Generated 500+ structured customer insight points informing subsequent product positioning.',
        'Achieved a ~15% conversion rate from trial kits to paid recurring subscribers.',
      ],
      whatILearned: [
        'In early-stage wellness ventures, direct customer interaction uncovers objections no survey ever captures.',
        'Conversion improves exponentially when demonstrations focus directly on the specific pain points identified in discovery.',
      ],
    },
  },
  {
    id: 'iskcon-prayagraj',
    number: '02',
    title: 'ISKCON PRAYAGRAJ',
    subtitle: 'Front-Office Operations & Crisis Resolution at Scale',
    category: 'Operations / Systems / Scale',
    period: 'Jan 2025 – Feb 2026',
    location: 'Prayagraj',
    metrics: [
      { value: '630+', label: 'Accommodations managed' },
      { value: '40+', label: 'Staff coordinated' },
      { value: '150+ → ~20', label: 'Daily complaints reduction' },
    ],
    description:
      'Led front-office operations across 630+ accommodations, coordinated 40+ staff and designed a centralized tracking system that reduced unresolved complaints from 150+ to approximately 20 daily.',
    image: iskconImg,
    caseStudy: {
      problem:
        'During massive pilgrimage footfall, managing 630+ residential accommodations generated intense daily friction, cross-functional confusion, and over 150+ unresolved guest complaints per day.',
      whatIDid: [
        'Assumed operational leadership over front-office services across 630+ accommodations.',
        'Mobilized and coordinated 40+ staff members across desk, housekeeping, and facilities teams.',
        'Architected and implemented a centralized complaint and room status tracking system.',
        'Maintained near-100% room occupancy over 2 consecutive high-pressure months.',
      ],
      approach: [
        'Eliminated departmental silos between front-desk registration and housekeeping staff.',
        'Introduced real-time logging with strict 60-minute resolution SLAs for unresolved complaints.',
        'Instituted daily operational standups to review pending tickets and allocate resources dynamically.',
      ],
      outcome: [
        'Reduced unresolved daily complaints by over 86% (dropping from 150+ to ~20 per day).',
        'Sustained near-100% guest occupancy over 2 continuous months without service breakdown.',
        'Created a permanent operational framework that front-office teams continue to deploy.',
      ],
      whatILearned: [
        'Scale breaks undocumented assumptions; systems with transparent accountability empower frontline staff.',
        'Crisis management is 80% proactive communication and 20% rapid resource reallocation.',
      ],
    },
  },
  {
    id: 'scaler',
    number: '03',
    title: 'SCALER',
    subtitle: 'Curriculum QA Optimization & Publishing Throughput',
    category: 'Content / Process / Execution',
    period: 'Dec 2022 – Mar 2024',
    location: 'Remote',
    metrics: [
      { value: '400+', label: 'Technical modules published' },
      { value: '~25%', label: 'Faster review turnaround' },
      { value: '100%', label: 'Strict technical accuracy' },
    ],
    description:
      'Reviewed and published 400+ technical learning modules and optimized the review process to reduce editing and reviewing time by approximately 25%.',
    image: scalerImg,
    caseStudy: {
      problem:
        'Scaling technical curriculum for computer science learners suffered from prolonged editorial turnaround times, author revision bottlenecks, and varied quality benchmarks across disparate contributors.',
      whatIDid: [
        'Reviewed, validated, and published 400+ technical learning modules spanning algorithms, systems, and engineering topics.',
        'Identified recurring editorial bottlenecks in code validation and explanatory clarity.',
        'Redesigned the technical review workflow to accelerate publishing throughput by ~25%.',
      ],
      approach: [
        'Established standardized review rubrics focusing on pedagogical clarity, code compilation, and SEO structure.',
        'Created a modular feedback loop allowing authors to self-check common edge cases before submission.',
        'Applied technical engineering background to verify accuracy rapidly without third-party escalation.',
      ],
      outcome: [
        'Successfully deployed 400+ production-grade educational modules to Scaler learners.',
        'Compressed overall review cycle time by ~25% while elevating technical rigor and learner retention.',
      ],
      whatILearned: [
        'Review systems speed up when evaluators codify expectations upfront rather than debating subjective nuances at the end.',
        'High publishing velocity and uncompromising technical rigor can coexist through structured workflows.',
      ],
    },
  },
  {
    id: 'google-search-lab',
    number: '04',
    title: 'GOOGLE SEARCH LAB',
    subtitle: 'User Intent Research & Qualitative Search Trust',
    category: 'Research / User Intent / Quality',
    period: 'Dec 2023 – Mar 2024',
    location: 'Gurugram',
    metrics: [
      { value: '300+', label: 'Search Notes submissions' },
      { value: '#3', label: 'Fastest contributor rank' },
      { value: '100%', label: 'Compliance & quality standards' },
    ],
    description:
      'Created and reviewed 300+ Search Notes submissions, evaluating user intent and quality while maintaining compliance standards.',
    image: googleLabImg,
    caseStudy: {
      problem:
        'Evaluating nuanced user search queries and synthesizing high-utility Search Notes requires discerning latent intent from ambiguous inputs while complying strictly with stringent quality rubrics.',
      whatIDid: [
        'Analyzed and produced 300+ Search Notes submissions directly evaluating query intent and content relevance.',
        'Applied qualitative analysis across varied user archetypes to strengthen trust in search outcomes.',
        'Maintained perfect adherence to search quality and compliance guidelines throughout the engagement.',
      ],
      approach: [
        'Deconstructed query phrasing into primary and secondary intent vectors.',
        'Synthesized high-density, context-rich notes that answer core search questions concisely.',
        'Developed a disciplined evaluation rhythm that balanced analytical depth with rapid throughput.',
      ],
      outcome: [
        'Delivered 300+ approved submissions reinforcing search trust and content quality.',
        'Officially recognized as the 3rd fastest contributor nationally while sustaining zero quality infractions.',
      ],
      whatILearned: [
        'True user intent often diverges from literal syntax; empathy and contextual awareness are essential analytical tools.',
        'Speed is not the adversary of quality—it is the natural byproduct of structured decision criteria.',
      ],
    },
  },
];

export const TIMELINE_EXPERIENCES: TimelineExperience[] = [
  {
    id: 'thynaa-fo',
    company: 'THYNAA HEALTHY NATURALLY',
    companyUrl: 'https://thynaa.com/',
    role: '0→1 Strategy & Growth Associate',
    category: '0→1 Pilot / GTM Execution / Customer Insights',
    image: thynaaImg,
    period: 'Feb 2026 – Apr 2026',
    location: 'Ghaziabad',
    isPrimary: true,
    tags: ['Strategy', 'Execution', 'Customer Insights'],
    highlights: [
      'Launched Aarogya Bhoomi’s 300-family pilot in collaboration with founders, driving 0→1 execution and market rollout.',
      'Enabled pain-point-based targeting by converting 500+ prospect insights across 10+ workshops into customer profiles.',
      'Converted ~15% of 100+ trial kit recipients into subscribers through one-on-one product demonstrations.',
    ],
    metrics: [
      { value: '300+', num: 300, suffix: '+', label: 'Families Pilot Launched' },
      { value: '500+', num: 500, suffix: '+', label: 'Prospect Insights Mapped' },
      { value: '~15%', num: 15, prefix: '~', suffix: '%', label: 'Trial-to-Sub Conversion' },
    ],
    caseStudy: {
      problem:
        'Introducing a 0→1 wellness proposition to households requires overcoming skepticism, identifying acute consumer health friction, and finding a repeatable model to convert free sampling into committed paid subscriptions.',
      whatIDid: [
        'Organized and conducted 10+ interactive health workshops across target residential clusters.',
        'Synthesized qualitative and quantitative feedback into structured buyer persona matrices.',
        'Executed high-touch sampling campaigns paired with personalized consultative follow-ups.',
      ],
      approach: [
        'De-risked consumer adoption by establishing trust through evidence-based dietary education.',
        'Segmented households by wellness orientation to craft tailored follow-up messaging.',
        'Streamlined the onboarding and doorstep delivery cycle to eliminate first-order friction.',
      ],
      outcome: [
        'Successfully initiated 300+ households into the active Aarogya Bhoomi pilot ecosystem.',
        'Captured 500+ granular behavioral data points fueling ongoing product roadmap iterations.',
        'Achieved a ~15% trial-to-paid subscriber conversion rate, validating unit economics.',
      ],
      whatILearned: [
        'Early adopters in health categories commit to the founder’s mission and transparency, not just feature sheets.',
        'Listening systematically to the first 100 customers saves months of misguided product iteration.',
      ],
    },
  },
  {
    id: 'shivam-handloom',
    company: 'SHIVAM HANDLOOM',
    role: 'Business Operations, Sales Forecasting & Supply Chain',
    category: 'Supply Chain / Demand Forecasting / Working Capital',
    image: bowlImg,
    period: '2020 – Present',
    location: 'Madhubani',
    isPrimary: true,
    tags: ['Supply Chain', 'Sales Forecasting', 'Working Capital'],
    highlights: [
      'Led demand forecasting and inventory planning, driving 20% revenue growth through supply chain coordination.',
      'Improved working capital by reducing retailer payment cycles from 45 to 21 days, accelerating recovery and liquidity.',
      'Led business expansion to a larger facility, increasing sales by 25%+ through operational planning and execution.',
    ],
    metrics: [
      { value: '20%', num: 20, suffix: '%', label: 'Revenue Growth' },
      { value: '45 → 21', num: 21, suffix: ' Days', prefix: 'from 45 to ', label: 'Payment Cycle Reduced' },
      { value: '25%+', num: 25, suffix: '%+', label: 'Sales Growth via Expansion' },
    ],
    caseStudy: {
      problem:
        'Traditional retail and wholesale operations suffered from unpredictable weaver lead times, extended retailer credit cycles (45+ days), and stockouts during regional festive demand surges.',
      whatIDid: [
        'Implemented quantitative demand forecasting tied to historical regional purchasing patterns.',
        'Structured an early-settlement incentive policy that compressed outstanding receivables.',
        'Oversaw end-to-end relocation and layout engineering for a larger, high-throughput facility.',
      ],
      approach: [
        'Introduced rolling 60-day buffer inventory thresholds for core fabric categories.',
        'Tightened credit terms by incentivizing 14-to-21-day direct bank transfers for retail buyers.',
        'Streamlined warehouse dispatch workflows to cut handling bottlenecks by half.',
      ],
      outcome: [
        'Accelerated working capital velocity by trimming cash collection cycles from 45 down to 21 days.',
        'Achieved sustained 20% year-on-year revenue expansion without adding administrative bloat.',
        'Successfully commissioned the expanded facility, unlocking a 25%+ increase in order capacity.',
      ],
      whatILearned: [
        'Working capital discipline is the oxygen of family-owned and regional enterprises.',
        'Clear incentive structures with channel partners outperform punitive credit policies every time.',
      ],
    },
  },
  {
    id: 'thynaa-community',
    company: 'THYNAA HEALTHY NATURALLY',
    companyUrl: 'https://thynaa.com/',
    role: 'Community Manager & Growth Intern',
    category: 'Community Engagement / CRM / Retention',
    image: thynaaImg,
    period: 'Jun 2025 – Jan 2026',
    location: 'Ghaziabad',
    isPrimary: false,
    tags: ['Community Growth', 'CRM', 'Customer Acquisition'],
    highlights: [
      'Managed engagement for a 2,000+ member community through events, driving customer experience and growth.',
      'Executed 10+ community events, engaging 600+ prospects to strengthen customer acquisition and community growth.',
      'Drove ~15% lift in cross-sell conversion using CRM purchase history and need analysis to target non-subscription buyers.',
    ],
    metrics: [
      { value: '2,000+', num: 2000, suffix: '+', label: 'Community Members' },
      { value: '600+', num: 600, suffix: '+', label: 'Prospects Engaged' },
      { value: '~15%', num: 15, prefix: '~', suffix: '%', label: 'Cross-Sell Conversion Lift' },
    ],
    caseStudy: {
      problem:
        'A growing community of 2,000+ members lacked structured touchpoints, resulting in passive members and missed opportunities for subscription upselling.',
      whatIDid: [
        'Spearheaded 10+ experiential events tailored to health enthusiasts and young families.',
        'Segmented customer records in CRM to identify repeat buyers and high-intent prospects.',
        'Designed personalized communication cadence that fostered authentic community discussions.',
      ],
      approach: [
        'Blended educational lifestyle content with curated product discovery sessions.',
        'Utilized CRM purchase histories to identify natural cross-sell opportunities.',
      ],
      outcome: [
        'Activated 600+ prospects through direct high-engagement workshop sessions.',
        'Delivered a measurable ~15% lift in cross-sell conversion among non-subscribers.',
      ],
      whatILearned: [
        'Community is the most defensible distribution channel when founded on mutual trust and real value.',
      ],
    },
  },
  {
    id: 'iskcon-fo',
    company: 'ISKCON PRAYAGRAJ',
    companyUrl: 'https://www.iskconprayagraj.org/',
    role: 'Front Office Operations Lead Intern',
    category: 'Operations & Logistics / Crisis Management',
    image: iskconImg,
    period: 'Jan 2025 – Feb 2026',
    location: 'Prayagraj',
    isPrimary: false,
    tags: ['Operations', 'Crisis Management', 'Stakeholder Coordination'],
    highlights: [
      'Led front office operations across 630+ accommodations, ensuring seamless guest services through resource allocation.',
      'Coordinated with 40+ staff, maintaining near-100% occupancy over 2 months through cross-functional execution.',
      'Designed a centralized tracking system, reducing unresolved complaints from 150+ to ~20 daily via process optimization.',
    ],
    metrics: [
      { value: '630+', num: 630, suffix: '+', label: 'Units Managed' },
      { value: '40+', num: 40, suffix: '+', label: 'Staff Coordinated' },
      { value: '150+ → ~20', num: 20, prefix: 'down to ~', label: 'Daily Complaints Reduced' },
    ],
    caseStudy: {
      problem:
        'Managing hundreds of guest rooms during peak cultural gatherings created intense operational bottlenecks, long check-in queues, and 150+ open daily complaints.',
      whatIDid: [
        'Engineered a centralized real-time tracking dashboard for room status and guest grievances.',
        'Realigned 40+ operations staff into specialized rapid-response dispatch pods.',
        'Instituted mandatory shift handoff protocols to prevent lost issues between rotations.',
      ],
      approach: [
        'Standardized priority triage for guest requests (maintenance, housekeeping, reception).',
        'Introduced 15-minute resolution SLAs for high-frequency room complaints.',
      ],
      outcome: [
        'Maintained sustained near-100% room occupancy with zero booking overlaps across 630+ rooms.',
        'Plummeted unresolved daily complaints by ~87% (from 150+ down to ~20).',
      ],
      whatILearned: [
        'Under heavy logistical load, clear roles and visible metrics turn chaos into a calm, repeatable machine.',
      ],
    },
  },
  {
    id: 'trainity',
    company: 'TRAINITY',
    companyUrl: 'https://trainity.online/',
    role: 'Data Analytics Intern',
    category: 'Data Analytics / Power BI',
    image: scalerImg,
    period: 'May 2024 – Jun 2024',
    location: 'Remote',
    isPrimary: false,
    tags: ['Analytics', 'Power BI', 'SQL'],
    highlights: [
      'Achieved 97% score across 8 projects, analyzing 20+ datasets using Excel, SQL, Python, and Power BI.',
      'Built 8 interactive dashboards to monitor KPIs and performance, generating actionable insights for stakeholders.',
    ],
    metrics: [
      { value: '97%', num: 97, suffix: '%', label: 'Evaluation Score Across 8 Projects' },
      { value: '20+', num: 20, suffix: '+', label: 'Business Datasets Analyzed' },
      { value: '8', num: 8, label: 'Interactive Dashboards Built' },
    ],
    caseStudy: {
      problem:
        'Disparate raw transaction and marketing data obscured core KPI visibility, making proactive operational decisions difficult.',
      whatIDid: [
        'Cleaned, modeled, and queried 20+ real-world business datasets using SQL and Python.',
        'Constructed dynamic executive dashboards in Power BI and advanced Excel.',
        'Presented data-driven recommendations on operational bottlenecks and conversion drivers.',
      ],
      approach: [
        'Established consistent data schema definitions across transactional logs.',
        'Focused visualization design on actionable operational levers rather than vanity metrics.',
      ],
      outcome: [
        'Earned an exceptional 97% cumulative score across all 8 complex evaluation modules.',
        'Delivered 8 production-ready dashboards with automated parameter filtering.',
      ],
      whatILearned: [
        'Data analytics is only as valuable as the business decisions it clarifies and accelerates.',
      ],
    },
  },
  {
    id: 'scaler',
    company: 'SCALER (INTERVIEWBIT)',
    companyUrl: 'https://www.scaler.com/',
    role: 'Technical Content Reviewer Intern',
    category: 'EdTech / Curriculum QA / Content Operations',
    image: scalerImg,
    period: 'Dec 2022 – Mar 2024',
    location: 'Remote / Bengaluru',
    isPrimary: false,
    tags: ['Content Operations', 'QA Optimization', 'Technical Review', 'Workflow Design'],
    highlights: [
      'Reviewed and published 400+ technical learning modules spanning algorithms, systems, and software engineering.',
      'Optimized the technical review process to compress review cycle turnaround by ~25% without compromising rigor.',
      'Established standardized review rubrics, code execution verifications, and modular feedback loops for author revisions.',
    ],
    metrics: [
      { value: '400+', num: 400, suffix: '+', label: 'Technical Modules Published' },
      { value: '~25%', num: 25, prefix: '~', suffix: '%', label: 'Faster Review Turnaround' },
      { value: '100%', num: 100, suffix: '%', label: 'Technical Accuracy & Compliance' },
    ],
    caseStudy: {
      problem:
        'Scaling technical curriculum for computer science learners suffered from prolonged editorial turnaround times, author revision bottlenecks, and varied quality benchmarks across disparate contributors.',
      whatIDid: [
        'Reviewed, validated, and published 400+ technical learning modules spanning algorithms, systems, and engineering topics.',
        'Identified recurring editorial bottlenecks in code validation and explanatory clarity.',
        'Redesigned the technical review workflow to accelerate publishing throughput by ~25%.',
        'Codified technical rubrics and structured self-checks for contributing technical authors.',
      ],
      approach: [
        'Established standardized review rubrics focusing on pedagogical clarity, code compilation, and SEO structure.',
        'Created a modular feedback loop allowing authors to self-check common edge cases before submission.',
        'Applied computer science engineering background to verify accuracy rapidly without third-party escalation.',
      ],
      outcome: [
        'Successfully deployed 400+ production-grade educational modules to Scaler learners.',
        'Compressed overall review cycle time by ~25% while elevating technical rigor and learner retention.',
        'Constructed a durable QA framework adopted across technical content verticals.',
      ],
      whatILearned: [
        'Review systems speed up when evaluators codify expectations upfront rather than debating subjective nuances at the end.',
        'High publishing velocity and uncompromising technical rigor can coexist through structured workflows.',
      ],
    },
  },
  {
    id: 'google-search-lab',
    company: 'GOOGLE SEARCH LAB',
    companyUrl: 'https://www.google.com/',
    role: 'User Intent Research & Search Quality Intern',
    category: 'Search Research / User Intent / Quality & Trust',
    image: googleLabImg,
    period: 'Dec 2023 – Mar 2024',
    location: 'Gurugram / Remote',
    isPrimary: false,
    tags: ['User Intent', 'Search Quality', 'Qualitative Research', 'Trust & Safety'],
    highlights: [
      'Created and reviewed 300+ Search Notes submissions, directly evaluating query intent and content relevance.',
      'Ranked #3 fastest contributor nationally while sustaining a flawless 100% compliance record with strict quality rubrics.',
      'Applied qualitative analysis across varied user archetypes to strengthen trust in search outcomes.',
    ],
    metrics: [
      { value: '300+', num: 300, suffix: '+', label: 'Search Notes Submissions' },
      { value: '#3', label: 'Fastest Contributor Nationally' },
      { value: '100%', num: 100, suffix: '%', label: 'Quality & Policy Compliance' },
    ],
    caseStudy: {
      problem:
        'Evaluating nuanced user search queries and synthesizing high-utility Search Notes requires discerning latent intent from ambiguous inputs while complying strictly with stringent quality rubrics.',
      whatIDid: [
        'Analyzed and produced 300+ Search Notes submissions directly evaluating query intent and content relevance.',
        'Applied qualitative analysis across varied user archetypes to strengthen trust in search outcomes.',
        'Maintained perfect adherence to search quality and compliance guidelines throughout the engagement.',
      ],
      approach: [
        'Deconstructed query phrasing into primary and secondary intent vectors.',
        'Synthesized high-density, context-rich notes that answer core search questions concisely.',
        'Developed a disciplined evaluation rhythm that balanced analytical depth with rapid throughput.',
      ],
      outcome: [
        'Delivered 300+ approved submissions reinforcing search trust and content quality.',
        'Officially recognized as the 3rd fastest contributor nationally while sustaining zero quality infractions.',
      ],
      whatILearned: [
        'True user intent often diverges from literal syntax; empathy and contextual awareness are essential analytical tools.',
        'Speed is not the adversary of quality—it is the natural byproduct of structured decision criteria.',
      ],
    },
  },
];

export const VENTURE_DATA = {
  title: 'THE BOWL & BEYOND',
  role: 'Co-Founder',
  period: 'Aug 2026 – Present',
  location: 'Gurugram',
  handwrittenNote: '“More than just a meal.”',
  description:
    'Co-founded The Bowl & Beyond, developing brand strategy and a 1:5 community meal initiative from concept to execution. Conducted 20+ food and menu trials, iterating on recipes and offerings to finalize the launch menu.',
  metrics: [
    { value: '20+', label: 'Food & menu trials' },
    { value: '1:5', label: 'Community meal initiative' },
    { value: '0 → 1', label: 'Concept to execution' },
  ],
  image: bowlImg,
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    rank: 'TOP 5',
    title: 'University-level CTF',
    subtitle: 'Among 1,000+ participants',
    highlight: 'Information security & technical problem solving',
  },
  {
    id: 'ach-2',
    rank: 'TOP 100',
    title: 'Information Security Conference',
    subtitle: 'From 5,000+ applicants',
    highlight: 'Awarded competitive conference scholarship',
  },
  {
    id: 'ach-3',
    rank: '1ST PLACE',
    title: 'Website Development Hackathon',
    subtitle: 'Led a 4-member team among 1,000+ participants',
    highlight: 'One-night intensive product build & rapid prototyping',
  },
  {
    id: 'ach-4',
    rank: '3RD',
    title: 'University Aptitude Competition',
    subtitle: 'Among 3,000+ participants',
    highlight: 'Quantitative reasoning & problem solving at annual fest',
  },
];

export const SKILLS_DATA = {
  business: [
    'Stakeholder Management',
    'End-to-End Ownership',
    'GTM Execution',
    'Customer Insights',
    'Customer Acquisition',
    'Demand Forecasting',
    'Vendor Coordination',
    'CRM Management',
    'Process Optimization',
  ],
  technical: [
    'Excel',
    'SQL',
    'Python',
    'Power BI',
    'Data Analysis',
    'KPI Tracking',
    'Dashboarding',
    'Zoho CRM',
    'Canva',
  ],
};

export const BEYOND_WORK_ITEMS = [
  {
    id: 'mindfulness',
    title: 'Yoga & Meditation Practice',
    period: '2+ Years Daily Practice',
    text: 'Regular practitioner of Yoga and Meditation for the past 2+ years, strengthening cognitive focus, mental stamina, and inner resilience through disciplined mindful routines.',
  },
  {
    id: 'culinary',
    title: 'Culinary Experimentation',
    period: 'Continuous Exploration',
    text: 'Passionate about cooking and exploring diverse regional cuisines, treating the kitchen as a creative testing ground for flavor architecture, experimentation, and rapid recipe iteration.',
  },
  {
    id: 'social',
    title: 'Community Initiatives & Volunteering',
    period: 'ISKCON & Art of Living',
    text: 'Managed event logistics for 100,000+ attendees across large-scale social initiatives; organized 30+ mindfulness and stress-management sessions; facilitated de-stress workshops engaging 500+ participants.',
  },
];
