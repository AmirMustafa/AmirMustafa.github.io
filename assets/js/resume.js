/* About & Resume content — Amir_Resume_Node_React_9y.pdf (Sep 2026) */

const RESUME_FILE = "assets/files/Amir_Resume_Node_React_9y.pdf";
const RESUME_DOWNLOAD_NAME = "Amir_Resume_Node_React_9y.pdf";

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
    { label: "Download CV", href: RESUME_FILE, download: RESUME_DOWNLOAD_NAME },
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

/** Resume page education — keys into assets/data/localization/{lang}.json */
const RESUME_EDUCATION = [
  {
    periodKey: "education_nalanda_period",
    degreeKey: "resume_edu_btech_degree",
    fieldKey: "resume_edu_btech_field",
    schoolKey: "resume_edu_btech_school",
    descKey: "education_nalanda_desc",
  },
  {
    periodKey: "education_st_patricks_12_period",
    degreeKey: "resume_edu_hsc_degree",
    fieldKey: "resume_edu_hsc_field",
    schoolKey: "resume_edu_hsc_school",
    descKey: "education_st_patricks_12_desc",
  },
  {
    periodKey: "education_st_patricks_10_period",
    degreeKey: "resume_edu_icse_degree",
    fieldKey: "resume_edu_icse_field",
    schoolKey: "resume_edu_icse_school",
    descKey: "education_st_patricks_10_desc",
  },
];

/** Same roles as Experiences timeline — uses experience_{id}* locale keys */
const RESUME_JOB_IDS = ["molex", "ey", "tcs", "xebia", "shadan", "fundlr"];

const RESUME_ACHIEVEMENT_KEYS = [
  "resume_highlight_1",
  "resume_highlight_2",
  "resume_highlight_3",
];
