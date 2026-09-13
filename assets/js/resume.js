/* About & Resume content — Amir_Resume_Node_React_9y.pdf (Sep 2026) */

const RESUME_FILE = "assets/files/Amir_Resume_Node_React_9y.pdf";
const RESUME_DOWNLOAD_NAME = "Amir_Resume_Node_React_9y.pdf";

const ABOUT_PROFILE = {
  titleKey: "about_page_title",
  employerKey: "about_page_employer",
  orgKey: "about_page_org",
  summaryKey: "about_page_summary",
};

const ABOUT_META = [
  { labelKey: "clocation_key", valueKey: "clocation_val" },
  { labelKey: "experience_key", valueKey: "experience_val" },
  { labelKey: "about_meta_email", email: true },
  {
    labelKey: "about_meta_phone",
    valueKey: "about_meta_phone_val",
    href: "tel:+918170954991",
  },
  { labelKey: "passport_key", valueKey: "about_meta_passport_val" },
  { labelKey: "about_meta_relocate", valueKey: "about_meta_relocate_val" },
];

const ABOUT_LINKS = [
  {
    labelKey: "about_link_linkedin",
    href: "https://www.linkedin.com/in/amirmustafa-sr-consultant-it/",
  },
  { labelKey: "about_link_github", href: "https://github.com/AmirMustafa" },
  { labelKey: "about_link_portfolio", href: "https://www.amirmustafa.net" },
  {
    labelKey: "about_link_youtube",
    href: "https://www.youtube.com/playlist?list=PLiZdgZd6wod3MnaV_pPBsM2fLmJUQuGRa",
  },
  {
    labelKey: "download_cv",
    href: RESUME_FILE,
    download: RESUME_DOWNLOAD_NAME,
  },
];

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
  { nameKey: "about_skill_1_name", yearsKey: "about_skill_1_years", level: 95 },
  { nameKey: "about_skill_2_name", yearsKey: "about_skill_2_years", level: 93 },
  { nameKey: "about_skill_3_name", yearsKey: "about_skill_3_years", level: 96 },
  { nameKey: "about_skill_4_name", yearsKey: "about_skill_4_years", level: 88 },
  { nameKey: "about_skill_5_name", yearsKey: "about_skill_5_years", level: 85 },
  { nameKey: "about_skill_6_name", yearsKey: "about_skill_6_years", level: 82 },
  { nameKey: "about_skill_7_name", yearsKey: "about_skill_7_years", level: 84 },
  { nameKey: "about_skill_8_name", yearsKey: "about_skill_8_years", level: 80 },
  { nameKey: "about_skill_9_name", yearsKey: "about_skill_9_years", level: 78 },
  { nameKey: "about_skill_10_name", yearsKey: "about_skill_10_years", level: 85 },
];

const PERSONAL_SKILL_KEYS = [
  "about_personal_1",
  "about_personal_2",
  "about_personal_3",
  "about_personal_4",
];

const ABOUT_CERTS = [
  {
    titleKey: "about_cert_1_title",
    issuerKey: "about_cert_1_issuer",
    whenKey: "about_cert_1_when",
  },
  {
    titleKey: "about_cert_2_title",
    issuerKey: "about_cert_2_issuer",
    whenKey: "about_cert_2_when",
  },
  {
    titleKey: "about_cert_3_title",
    issuerKey: "about_cert_3_issuer",
    whenKey: "about_cert_3_when",
  },
  {
    titleKey: "about_cert_4_title",
    issuerKey: "about_cert_4_issuer",
    whenKey: "about_cert_4_when",
  },
  {
    titleKey: "about_cert_5_title",
    issuerKey: "about_cert_5_issuer",
    whenKey: "about_cert_5_when",
  },
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
