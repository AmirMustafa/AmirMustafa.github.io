/* About & Resume content — sourced from Amir_Resume_Node_React_9y.docx (Jun 2026) */

const RESUME_FILE = "assets/files/Amir_Resume_Node_React_9y.docx";

const ABOUT_PROFILE = {
  title: "Senior Full Stack Engineer",
  employer: "@Molex , Bangalore, India",
  org: "JavaScript · React · Node · TypeScript · Cloud",
  summary:
    "Senior Full Stack Engineer with 9+ years building enterprise-grade, cloud-native applications using React.js, Node.js, and TypeScript. Expert in microservices, system design, serverless (AWS Lambda, Azure Functions), and AI-augmented development. Delivered high-impact solutions for Banking (Northern Trust), Pharma (Eli Lilly), and Government (UAE) with 99.9% uptime. Proven CI/CD automation, scalable architecture, and Agile delivery at scale.",
  meta: [
    { k: "Location", v: "Bengaluru, Karnataka, India" },
    { k: "Experience", v: "9+ years" },
    { k: "Email", v: "amirengg15@gmail.com", href: "mailto:amirengg15@gmail.com" },
    { k: "Phone", v: "+91-8170954991", href: "tel:+918170954991" },
    { k: "Passport", v: "Available (exp. 2033)" },
    { k: "Relocate", v: "Open to UAE, UK, Europe" },
  ],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amirmustafa-sr-consultant-it/" },
    { label: "GitHub", href: "https://github.com/AmirMustafa" },
    { label: "Portfolio", href: "https://www.amirmustafa.net" },
    { label: "YouTube", href: "https://www.youtube.com/playlist?list=PLiZdgZd6wod3MnaV_pPBsM2fLmJUQuGRa" },
  ],
};

/** Banner contact strip — icon + label + display text (from resume / profile) */
/** Hero employer highlight — logos only, not links */
const EMPLOYER_BRANDS = [
  { name: "Molex", img: "assets/images/experience/molex.jpg" },
  { name: "EY", img: "assets/images/brand/ey.jpeg" },
  { name: "Northern Trust", img: "assets/images/brand/nt.jpeg" },
  { name: "Eli Lilly", img: "assets/images/brand/elililly.jpeg" },
  { name: "TCS", img: "assets/images/brand/tcs.jpeg" },
  { name: "Xebia", img: "assets/images/brand/xebia.jpeg" },
  { name: "TAMM", img: "assets/images/brand/tamm.png" },
];

const HERO_SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    brand: "linkedin",
    href: "https://www.linkedin.com/in/amirmustafa-sr-consultant-it/",
    icon: "fa-brands fa-linkedin-in",
    text: "linkedin.com/in/amirmustafa-sr-consultant-it",
  },
  {
    label: "GitHub",
    brand: "github",
    href: "https://github.com/AmirMustafa",
    icon: "fa-brands fa-github",
    text: "github.com/AmirMustafa",
  },
  {
    label: "YouTube",
    brand: "youtube",
    href: "https://www.youtube.com/playlist?list=PLiZdgZd6wod3MnaV_pPBsM2fLmJUQuGRa",
    icon: "fa-brands fa-youtube",
    text: "Software dev tutorials & demos",
  },
  {
    label: "Portfolio",
    brand: "portfolio",
    href: "https://www.amirmustafa.net",
    icon: "fa-solid fa-globe",
    text: "www.amirmustafa.net",
  },
  {
    label: "Email",
    brand: "email",
    href: "mailto:",
    icon: "fa-solid fa-envelope",
    text: "",
    email: true,
  },
  {
    label: "Phone",
    brand: "phone",
    href: "tel:+918170954991",
    icon: "fa-solid fa-phone",
    text: "+91-8170954991",
  },
];

const SKILL_BARS = [
  { name: "React.js / TypeScript", years: "7+ yrs", level: 95 },
  { name: "Node.js / Express / Nest.js", years: "7+ yrs", level: 93 },
  { name: "JavaScript (ES6+)", years: "9+ yrs", level: 96 },
  { name: "Azure Cloud", years: "4+ yrs", level: 88 },
  { name: "AWS Cloud", years: "5+ yrs", level: 85 },
  { name: "PostgreSQL / Cosmos DB", years: "6+ yrs", level: 82 },
  { name: "Docker / CI/CD", years: "5+ yrs", level: 84 },
  { name: "System Design / Microservices", years: "4+ yrs", level: 80 },
  { name: "DevSecOps / VAPT", years: "4+ yrs", level: 78 },
  { name: "AI-Assisted Development", years: "2+ yrs", level: 85 },
];

const PERSONAL_SKILLS = [
  "Always curious to learn new technologies and patterns",
  "Strong team lead — mentoring, code reviews, and delivery ownership",
  "Clear communication with technical and non-technical stakeholders",
  "Banking, pharma, and government domain experience (US, UAE, India)",
];

const ABOUT_CERTS = [
  { title: "Microsoft Azure AI Fundamentals (AI-900)", issuer: "Microsoft", when: "2024" },
  { title: "Professional Scrum Master (PSM I)", issuer: "Scrum.org", when: "2023" },
  { title: "PSPO I & II — Product Owner", issuer: "Scrum.org", when: "2023" },
  { title: "EY AI Engineering Bronze Badge", issuer: "EY", when: "2024" },
  { title: "AI for Everyone", issuer: "Coursera", when: "2024" },
];

const RESUME_EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics and Communication Engineering",
    school: "Biju Patnaik University of Technology (BPUT), Bhubaneswar",
    period: "2011 – 2015",
    desc: "Electronics and computer science focus; hands-on PHP, MVC, and early web development.",
  },
  {
    degree: "Higher Secondary (ISC)",
    field: "Science and Mathematics",
    school: "St. Patrick's H.S. School, Asansol",
    period: "2009 – 2011",
    desc: "Science stream with SQL, PHP, and OOP foundations.",
  },
  {
    degree: "High School (ICSE)",
    field: "Science and Mathematics",
    school: "St. Patrick's H.S. School, Asansol",
    period: "1998 – 2009",
    desc: "Built first websites in school; strong science and math foundation.",
  },
];

const RESUME_JOBS = [
  {
    company: "Molex (Koch Industries)",
    location: "Bengaluru, India",
    role: "Full Stack Developer",
    period: "Jun 2026 – Present",
    summary: "Building a Kanban application tailored to copper-solutions business workflows.",
    bullets: ["Project: Kanban Application for Copper Solutions", "Skills: React.js"],
  },
  {
    company: "Ernst & Young (EY)",
    location: "Bengaluru, India",
    role: "Senior Consultant — Technical Lead",
    client: "Northern Trust (Banking)",
    period: "Sep 2022 – Apr 2026",
    summary:
      "AI-powered document digitization platform (NT Digitizer) processing 10K+ financial documents daily with 95%+ OCR accuracy.",
    bullets: [
      "React.js + MobX frontend; Nest.js APIs with Azure Durable Functions (99.9% success rate)",
      "Migrated Node.js v12 → v24 — 30% performance gain, 40% less technical debt",
      "Bulk upload for 1000+ concurrent documents with fault-tolerant retries",
      "Azure webhooks, RBAC, Application Insights — 50% faster incident response",
      "Mentored 5 developers; 100+ code reviews",
    ],
    skills: "React, Node, Nest.js, Cosmos DB, Azure, TypeScript, REST",
  },
  {
    company: "Tata Consultancy Services (TCS)",
    location: "Noida, India",
    role: "Systems Engineer — Lead Developer",
    client: "Eli Lilly (Pharma)",
    period: "Jul 2021 – Sep 2022",
    summary: "Eli Lilly IBU Sales Analytics — daily medicine sales for India and Taiwan affiliates.",
    bullets: [
      "Led 7 React/Node modules for 200+ sales teams — 25% faster reporting",
      "AWS Lambda pipelines (S3, SNS, API Gateway) with Aurora PostgreSQL",
      "Docker + GitHub Actions CI/CD — 40% faster deployments",
      "Resolved 50+ SAST/DAST issues — 100% compliance for FDA-regulated env",
    ],
    skills: "React, Node, Express, PostgreSQL, AWS, REST",
  },
  {
    company: "Xebia IT Architects",
    location: "Gurugram, India",
    role: "Technical Consultant",
    client: "TAMM — Abu Dhabi Digital Authority",
    period: "Sep 2020 – Jul 2021",
    summary: "UAE's largest digital government platform — 50K+ daily active users, 99.9% uptime.",
    bullets: [
      "Delivered 10+ government e-services with React/TypeScript and Camunda BPMN",
      "GitLab CI/CD — release cycles from weeks to days",
      "VAPT remediation; collaboration with EAD, ADAFSA agencies",
    ],
    skills: "React, Node, TypeScript, Camunda, GitLab, REST",
  },
  {
    company: "Shadan Industrius",
    location: "Noida, India",
    role: "Web Developer (Full Stack)",
    period: "Nov 2017 – May 2020",
    summary: "Full-stack products across e-commerce, OAuth, and e-learning.",
    bullets: [
      "Waves e-commerce — React, Redux, Node, PayPal/Stripe",
      "Firebase sports app; Myanmar e-learning (Moodle)",
    ],
    skills: "React, Node, Redux, Express, MySQL",
  },
  {
    company: "Fundlr",
    location: "New Delhi, India",
    role: "Web Developer",
    period: "Dec 2016 – Sep 2017",
    summary: "Crowdfunding and e-commerce platform with Laravel and AngularJS.",
    bullets: [
      "Facebook/Twitter OAuth, PayPal, OneSignal push — 15% retention lift",
      "Led small team on scalable backend (Laravel 5.4)",
    ],
    skills: "JavaScript, Laravel, MySQL, AngularJS",
  },
];

const RESUME_ACHIEVEMENTS = [
  "EY Client Extraordinaire Award (2024, 2025) · EY Kudos (2023) · TCS Gems (2022)",
  "Reduced manual document processing by 60% for Northern Trust (10K+ docs/day)",
  "20+ Medium articles reaching 10K+ developers",
];
