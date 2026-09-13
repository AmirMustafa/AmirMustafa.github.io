/* Structural content manifest.
   Only IDs, images and translation-key references live here —
   the actual copy comes from assets/data/localization/{lang}.json
   at render time, so every entry below is automatically available
   in all 31 shipped languages. */

const SPECIALIST_TAGS = [
  "JavaScript",
  "React.js",
  "Node.js",
  "TypeScript",
  "Azure",
  "AWS",
  "Docker",
  "Software Security",
  "Agile",
];

const PROJECTS = [
  {
    id: "nt_digitizer",
    img: "assets/images/projects/northern-trust.png",
    feature: true,
    logo: true,
    logoWide: true,
    detailDesc: true,
    links: [
      {
        kind: "site",
        href: "https://www.northerntrust.com/asia-pac/home",
      },
    ],
  },
  {
    id: "ibu_sales",
    img: "assets/images/projects/Lilly.jpg",
    feature: true,
    logo: true,
    logoWide: true,
    links: [{ kind: "site", href: "https://www.lilly.com/" }],
  },
  {
    id: "tamm",
    img: "assets/images/projects/TAMM2.jpg",
    feature: true,
    logo: true,
    links: [{ kind: "site", href: "https://www.tamm.abudhabi/" }],
  },
  {
    id: "waves",
    img: "assets/images/projects/waves.png",
    links: [
      { kind: "github", href: "https://github.com/AmirMustafa/waves" },
      {
        kind: "demo",
        href: "https://www.loom.com/share/343f54cf82ad40a8985d278f9fe2c770",
      },
    ],
  },
  {
    id: "reactmovie",
    img: "assets/images/projects/react-movie.png",
    links: [
      {
        kind: "demo",
        href: "https://www.loom.com/share/32ce7bd54d534e468b992c6837e268a3",
      },
    ],
  },
  {
    id: "manchestorcity",
    img: "assets/images/projects/manchestor-city.png",
    links: [
      {
        kind: "github",
        href: "https://github.com/AmirMustafa/manchestor-city",
      },
      {
        kind: "demo",
        href: "https://www.loom.com/share/dc4e7bdafa9d4d28ab9fdefbce28bc03",
      },
    ],
  },
  {
    id: "googlesso",
    img: "assets/images/projects/google_fb_oauth2.png",
    links: [
      {
        kind: "github",
        href: "https://github.com/AmirMustafa/Google-and-Facebook-Login---MERN-Stack",
      },
    ],
  },
  {
    id: "zabai",
    img: "assets/images/projects/zabai.PNG",
    links: [
      { kind: "site", href: "https://www.zabai.org/" },
      {
        kind: "github",
        href: "https://github.com/AmirMustafa/SCORM-LocalStorage",
      },
    ],
  },
  {
    id: "fundlr",
    img: "assets/images/projects/fundlr.jpg",
    links: [
      {
        kind: "github",
        href: "https://github.com/AmirMustafa/AJAX-Form-Submit-Laravel-5.4",
      },
      {
        kind: "github",
        href: "https://github.com/AmirMustafa/Facebook-Chat-Bot-Messenger-JavaScript",
        labelKey: "project_link_chatbot",
      },
    ],
  },
  {
    id: "enjoyil",
    img: "assets/images/projects/enjoyil.PNG",
    links: [
      {
        kind: "github",
        href: "https://github.com/AmirMustafa/Image-Cropper-AJAX-Laravel-5.4",
      },
    ],
  },
  {
    id: "readtrails",
    img: "assets/images/projects/readtrails.jpg",
    links: [
      {
        kind: "github",
        href: "https://github.com/AmirMustafa/AJAX-Form-Submit-Laravel-5.4",
      },
    ],
  },
  {
    id: "cafae",
    img: "assets/images/projects/cafae.PNG",
    links: [
      { kind: "site", href: "https://www.cafae.co.uk/" },
      {
        kind: "github",
        href: "https://github.com/AmirMustafa/SCORM-LocalStorage",
      },
    ],
  },
  {
    id: "tutorship",
    img: "assets/images/projects/tutorship.png",
    links: [
      {
        kind: "github",
        href: "https://github.com/AmirMustafa/SCORM-LocalStorage",
      },
    ],
  },
  {
    id: "bbb",
    img: "assets/images/projects/bbb.png",
    links: [{ kind: "site", href: "https://bigbluebutton.org/" }],
  },
  {
    id: "militaryedubbb",
    img: "assets/images/projects/military_courses.png",
    links: [
      { kind: "site", href: "https://bigbluebutton.org/" },
      {
        kind: "github",
        href: "https://github.com/AmirMustafa/SCORM-LocalStorage",
      },
    ],
  },
  {
    id: "atheiadental",
    img: "assets/images/projects/campusathenia.png",
    links: [{ kind: "site", href: "https://campus.athenea.com/" }],
  },
  {
    id: "ffrg",
    img: "assets/images/projects/FFRG.png",
    links: [
      {
        kind: "github",
        href: "https://github.com/AmirMustafa/SCORM-LocalStorage",
      },
    ],
  },
];

const EXPERIENCE_LOGO_FALLBACK = "assets/images/experience/fallback-company.svg";

const EXPERIENCE = [
  {
    id: "molex",
    points: 3,
    logo: "assets/images/experience/molex.jpg",
    logoFallback: EXPERIENCE_LOGO_FALLBACK,
    brandLogo: true,
    current: true,
  },
  {
    id: "ey",
    points: 6,
    logo: "assets/images/experience/ey.jpg",
    logoFallback: EXPERIENCE_LOGO_FALLBACK,
    brandLogo: true,
  },
  {
    id: "tcs",
    points: 10,
    logo: "assets/images/experience/tcs.jpg",
    logoFallback: EXPERIENCE_LOGO_FALLBACK,
    brandLogo: true,
  },
  {
    id: "xebia",
    points: 12,
    logo: "assets/images/experience/xebia.jpg",
    logoFallback: EXPERIENCE_LOGO_FALLBACK,
    brandLogo: true,
  },
  {
    id: "shadan",
    points: 9,
    logo: "assets/images/experience/shadan-fallback.svg",
    brandLogo: false,
  },
  {
    id: "fundlr",
    points: 10,
    logo: "assets/images/experience/fundlr-fallback.svg",
    brandLogo: false,
  },
];

const EDUCATION = [
  {
    id: "nalanda",
    period: "education_nalanda_period",
    degree: "education_nalanda_degree",
    desc: "education_nalanda_desc",
    location: "education_nalanda_location",
    title: "education_nalanda",
  },
  {
    id: "stp12",
    period: "education_st_patricks_12_period",
    degree: "education_st_patricks_12_degree",
    desc: "education_st_patricks_12_desc",
    location: "education_st_patricks_location",
    title: "education_st_patricks",
  },
  {
    id: "stp10",
    period: "education_st_patricks_10_period",
    degree: "education_st_patricks_10_degree",
    desc: "education_st_patricks_10_desc",
    location: "education_st_patricks_location",
    title: "education_st_patricks",
  },
];

const SKILL_GROUPS = [
  {
    title: "Development",
    keys: [
      "node",
      "expressjs",
      "reactjs",
      "reacthooks",
      "redux",
      "node_unit_testing",
      "tdd",
      "js",
      "html5",
      "css3",
      "mvc",
      "restapi",
      "php",
      "laravel",
      "sql",
      "oops",
    ],
  },
  {
    title: "Cloud & Tools",
    keys: [
      "aws",
      "firebase",
      "cloudinary",
      "linux",
      "moodle",
      "prod_deploy",
      "jira",
      "confluence",
      "github",
      "gitlab",
      "cpanel",
      "putty",
    ],
  },
  {
    title: "Environment",
    keys: [
      "windows",
      "mac",
      "linux_ubuntu",
      "chrome",
      "xampp",
      "sublime_editor",
      "vim",
      "citrics_vdi",
      "filezilla",
    ],
  },
  { title: "Languages", keys: ["en", "hi", "ar"] },
];

const VIDEOS = [
  {
    titleKey: "videos_feat1",
    linkKey: "videos_feat1_link",
    href: "https://www.youtube.com/playlist?list=PLiZdgZd6wod3MnaV_pPBsM2fLmJUQuGRa",
  },
  {
    titleKey: "videos_feat2",
    linkKey: "videos_feat2_link",
    href: "https://www.youtube.com/playlist?list=PLiZdgZd6wod2Tnd5eATCNtbdMPDwi7FuB",
  },
  {
    titleKey: "videos_feat3",
    linkKey: "videos_feat3_link",
    href: "https://www.youtube.com/playlist?list=PLiZdgZd6wod2B8VE-JGYuR8vQ997oLxs9",
  },
];

const AWARDS = [
  {
    img: "assets/images/certificates/ey-eco-pledge-award.jpg",
    titleKey: "ey_eco_header",
    descKey: "ey_eco_desc",
    timeKey: "ey_kudo_timestamp",
  },
  {
    img: "assets/images/certificates/ey-clientextraordinare.png",
    titleKey: "ey_clientextraordinare_header",
    descKey: "ey_clientextraordinare_desc",
    timeKey: "ey_kudo_timestamp",
  },
  {
    img: "assets/images/certificates/ey-kudos-award.jpeg",
    titleKey: "ey_kudo_header",
    descKey: "ey_kudo_desc",
    timeKey: "ey_kudo_timestamp",
  },
  {
    img: "assets/images/certificates/tcs-gems-special-initiative.jpeg",
    titleKey: "tcs_gems_header",
    descKey: "tcs_gems_reason",
    timeKey: "tcs_gems_timestamp",
  },
  {
    img: "assets/images/certificates/github-yolo-badge.png",
    titleKey: "github_badge_name_yolo",
    descKey: "github_badge_yolo_desc",
    timeKey: "github_badge_timestamp",
  },
  {
    img: "assets/images/certificates/github-quickdraw-badge.png",
    titleKey: "github_badge_name_quickdraw",
    descKey: "github_badge_quickdraw_desc",
    timeKey: "github_badge_timestamp",
  },
  {
    img: "assets/images/certificates/github-arctic-pull-shark-badge.png",
    titleKey: "github_badge_name_pullshark",
    descKey: "github_badge_pullshark_desc",
    timeKey: "github_badge_timestamp",
  },
  {
    img: "assets/images/certificates/github-arctic-vault-contributer-badge.png",
    titleKey: "github_badge_name_arctic",
    descKey: "github_badge_arctic_desc",
    timeKey: "github_badge_timestamp",
  },
  {
    img: "assets/images/certificates/postman-badge.png",
    titleKey: "postman_badge_name_fundamentals",
    descKey: "postman_badge_fundamentals_desc",
    timeKey: "postman_badge_timestamp",
  },
  {
    img: "assets/images/certificates/aicte-platinum-certified-engineer.jpeg",
    titleKey: "aicte_platinum_certificate",
    descKey: "aicte_platinum_certificate_desc",
    timeKey: "aicte_platinum_timestamp",
  },
];

const TESTIMONIALS = [
  {
    id: "shrish",
    lines: 2,
    photo: "assets/images/testimonials/shrish-tripathi.jpeg",
  },
  {
    id: "vinu_jade",
    lines: 2,
    photo: "assets/images/testimonials/vinu-jade.jpeg",
  },
  {
    id: "mohit_agrawal",
    lines: 2,
    photo: "assets/images/testimonials/mohit_agrawal.jpeg",
  },
  {
    id: "dinesh_dalal",
    lines: 2,
    photo: "assets/images/testimonials/dinesh_dalal.jpeg",
  },
  { id: "yogi_kumar", lines: 2, photo: "assets/images/testimonials/Yogi.jpeg" },
  {
    id: "shanavas_elaydath",
    lines: 1,
    photo: "assets/images/testimonials/shanavas-elaydath.jpeg",
  },
  {
    id: "tony_harris",
    lines: 1,
    photo: "assets/images/testimonials/tony-harris.jpeg",
  },
  {
    id: "vincent_mendy",
    lines: 1,
    photo: "assets/images/testimonials/vincent-mendy.jpeg",
  },
  {
    id: "aamir_iqbal",
    lines: 1,
    photo: "assets/images/testimonials/aamir-iqbal2.jpeg",
  },
  {
    id: "priya_nayar",
    lines: 1,
    photo: "assets/images/testimonials/nopic.jpeg",
  },
  {
    id: "shivangi",
    lines: 1,
    photo: "assets/images/testimonials/Shivangi.jpeg",
  },
  { id: "prem", lines: 1, photo: "assets/images/testimonials/Prem.jpeg" },
];
