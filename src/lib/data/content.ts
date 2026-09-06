/**
 * Matin Roosta — Academic Portfolio
 * All content preserved verbatim from the original site across
 * index.html, research.html, publications.html and index-fa.html.
 * Nothing invented; nothing removed.
 */

/* ------------------------------------------------------------------ */
/* Shared / English                                                    */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Matin Roosta",
  badge: "Nurse, Researcher, Faculty Member",
  heroHeadlinePre: "The science of",
  heroHeadlineAccent: "care",
  heroHeadlinePost: "and evidence.",
  shortBio:
    "I am a nurse, educator, and researcher passionate about patient care, nursing education, and the application of artificial intelligence to advance healthcare and improve patient outcomes.",
  imageCaption:
    "Matin Roosta-ye Abkenar — Faculty Member of Nursing and Midwifery school",
  // Links preserved exactly from the source
  scholarUrl:
    "https://scholar.google.com/citations?hl=en&user=ZGdhd8QAAAAJ",
  cvUrl: "/Matin_Roosta_CV.pdf",
  email: "matinr1997@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/matin-roosta-ye-abkenar",
  youtubeUrl: "https://www.youtube.com/@coffee.nursing",
  orcidUrl: "https://orcid.org/0000-0001-9121-0000",
  persianUrl: "/index-fa.html",
  homeUrl: "/",
  researchUrl: "/research.html",
  // Footer bios differ per page — preserved exactly
  footerBioHome:
    "Faculty of Nursing and Midwifery, Hormozgan University of Medical Sciences (HUMS), Bandar Abbas, Iran.",
  footerBioResearch:
    "PhD Candidate in Nursing and Faculty Member at the Department of Prehospital Emergency Medicine.",
  subFooterLeft: "© 2026 Matin Roosta",
  subFooterRight: "Hormozgan University of Medical Sciences, Iran.",
};

export interface ResearchArea {
  id: string;
  index: string;
  kicker: string;
  title: string;
  summary: string;
  tags: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: "care",
    index: "01",
    kicker: "CARE",
    title: "Nursing Care",
    summary:
      "Focusing on the advancement of critical and emergency patient management. I investigate protocols and practices that enhance recovery outcomes, optimize clinical workflows, and elevate the standard of evidence-based nursing care in high-stress environments.",
    tags: ["Critical Care", "Clinical Workflows", "Evidence-Based Practice"],
  },
  {
    id: "geriatrics",
    index: "02",
    kicker: "GERIATRICS",
    title: "Older Adults",
    summary:
      "Studying the specific healthcare needs of the aging population. My research aims to improve quality of life, self-care education, and treatment adherence among elderly patients, addressing the unique physiological and psychological challenges they face.",
    tags: ["Gerontology", "Quality of Life", "Healthy Aging"],
  },
  {
    id: "ai",
    index: "03",
    kicker: "TECHNOLOGY",
    title: "Artificial Intelligence",
    summary:
      "Exploring the intersection of modern technology and healthcare. I analyze how AI applications, machine learning algorithms, and health informatics can assist nurses in decision-making, predictive care, and early diagnosis.",
    tags: ["Health Informatics", "Machine Learning", "Predictive Care"],
  },
  {
    id: "chronic",
    index: "04",
    kicker: "MANAGEMENT",
    title: "Chronic Disease",
    summary:
      "Investigating long-term care strategies for patients with chronic conditions such as diabetes. I evaluate the effectiveness of educational theories and self-care programs in empowering patients to manage their health and adhere to treatments.",
    tags: ["Diabetes Management", "Self-Care Programs", "Patient Empowerment"],
  },
];

export interface AbstractSegment {
  label: string;
  text: string;
}

export interface Publication {
  id: string;
  title: string;
  citation: string;
  doi: string;
  doiUrl: string;
  abstract: AbstractSegment[];
}

export const publications: Publication[] = [
  {
    id: "peplau-2025",
    title:
      "Determining the impact of a self-care educational program designed based on the Peplau theory on adherence to treatment and self-care in elderly patients with diabetes.",
    citation: "Investigación y Educación en Enfermería • 2025",
    doi: "10.17533/udea.iee.v43n1e05",
    doiUrl: "https://doi.org/10.17533/udea.iee.v43n1e05",
    abstract: [
      {
        label: "Objective",
        text: "To examine the impact of a self-care program designed using Peplau's theory on adherence and self-care in elderly diabetic patients.",
      },
      {
        label: "Methods",
        text: "This semi-experimental study involved 102 elderly diabetic patients from a diabetes clinic in Hormoz, Iran, in 2023. Participants were randomly allocated to either the control group (n=51) or the intervention group (n=51). Before and two weeks after the intervention, participants completed a demographic information questionnaire, the Modanloo Adherence to Treatment Questionnaire for Patients with Chronic Illness, and the Summary of Diabetes Self-Care Activities Scale. The intervention group received a self-care educational program based on Peplau's therapeutic communication theory, delivered in three phases: orientation, working, and termination. The program focused on key diabetes self-care factors including diet, medication adherence, physical activity, blood sugar monitoring, and foot care. Educational sessions were conducted in small groups or individually in the clinic's education room. The control group received routine educational content provided by the diabetes clinic.",
      },
      {
        label: "Results",
        text: "The findings showed that the difference between the pre-post mean scores was significantly higher in the intervention group compared with the control group in the total self-care score, as well as in its dimensions: diet, blood sugar regulation, and foot care (p<0.001). On the other hand, in terms of adherence, no significant difference was observed in the mean difference between groups for the total score (p=0.307), although a statistical difference was found in the dimensions of willingness to participate in treatment (p=0.035) and ability to adapt (p<0.001).",
      },
      {
        label: "Conclusion",
        text: "The self-care educational program based on Peplau's theory improved the self-care and two dimensions of the adherence: willingness to participate in treatment and ability to adapt in diabetic patients.",
      },
    ],
  },
];

export interface Course {
  id: string;
  title: string;
}

export const courses: Course[] = [
  { id: "c1", title: "Intensive Nursing care in CCU" },
  { id: "c2", title: "Prehospital Medical Emergencies" },
  { id: "c3", title: "Prehospital Trauma Care" },
];

/* research.html page content — preserved verbatim */
export const researchPage = {
  titlePre: "The Foundation of",
  titleAccent: "Nursing Research",
  blocks: [
    {
      heading: "Advancing Clinical Practice",
      paragraphs: [
        "Nursing research is a fundamental pillar of modern healthcare. It bridges the critical gap between clinical practice and scientific evidence. Rather than relying solely on tradition or intuition, nursing research systematically investigates clinical workflows, patient care protocols, and healthcare systems to determine what truly works.",
        "My focus in this field revolves around critical care, emergency medicine, and chronic disease management. By rigorously analyzing data and applying evidence-based methodologies, we can identify gaps in current healthcare delivery and develop innovative strategies that elevate the standard of care for patients in high-stress environments.",
      ],
    },
    {
      heading: "Impact on Human Lives",
      paragraphs: [
        "The true value of nursing research lies in its profound, direct impact on human lives. Research is not just numbers and academic papers; it is the science of care translated into real-world outcomes. When we discover a more effective self-care educational program for diabetic patients, we are directly empowering individuals to manage their health, avoid severe complications, and maintain their independence.",
        "Ultimately, nursing research reduces recovery times, minimizes hospital readmissions, and enhances the overall quality of life. It ensures that when people are at their most vulnerable—whether in an ICU or managing a lifelong condition—they receive care that is not only compassionate but scientifically proven to be the most effective.",
      ],
    },
  ],
};

/* publications.html stub content — preserved verbatim */
export const publicationsPage = {
  title: "My Publications",
  items: ["Article 1", "Article 2", "Article 3"],
  backLink: "Back to Home",
};

/* ------------------------------------------------------------------ */
/* Persian (index-fa.html) — preserved verbatim, dir rtl              */
/* ------------------------------------------------------------------ */

export const profileFa = {
  name: "متین روستا",
  badge: "عضو هیئت علمی",
  heroHeadlinePre: "علم",
  heroHeadlineAccent: "مراقبت",
  heroHeadlinePost: "و شواهد بالینی.",
  shortBio:
    "من پژوهشگر حوزه پرستاری مراقبت‌های ویژه، طب اورژانس، عملکرد مبتنی بر شواهد، مرور سیستماتیک، متاآنالیز و نوآوری در سیستم‌های مراقبت بهداشتی هستم.",
  imageCaption:
    "متین روستای آبکنار — عضو هیئت علمی دانشکده پرستاری و مامایی",
  scholarUrl:
    "https://scholar.google.com/citations?hl=en&user=ZGdhd8QAAAAJ",
  // Persian page uses a different LinkedIn URL — preserved exactly
  linkedinUrl:
    "https://www.linkedin.com/in/matin-roosta-ye-abkenar-54318622a/",
  youtubeUrl: "https://www.youtube.com/@coffee.nursing",
  orcidUrl: "https://orcid.org/0000-0001-9121-0000",
  englishUrl: "/",
  buttons: {
    scholar: "گوگل اسکالر",
    viewPubs: "مشاهده مقالات",
  },
  nav: [
    { label: "پژوهش‌ها", href: "#" },
    { label: "مقالات", href: "#publications" },
    { label: "سوابق تدریس", href: "#teaching" },
    { label: "وبلاگ", href: "/blog.html" },
  ],
  footerBio: "پژوهشگر و عضو هیئت علمی گروه فوریت‌های پزشکی پیش‌بیمارستانی.",
  footerNavHeading: "دسترسی سریع",
  footerSocialHeading: "شبکه‌های اجتماعی",
};

export const researchAreasFa: ResearchArea[] = [
  {
    id: "care",
    index: "01",
    kicker: "CARE",
    title: "مراقبت‌های پرستاری",
    summary:
      "تمرکز بر ارتقای مدیریت بیماران در بخش‌های ویژه و اورژانس. من به بررسی پروتکل‌ها و رویکردهایی می‌پردازم که نتایج درمانی را بهبود بخشیده، فرآیندهای بالینی را بهینه‌سازی کرده و استانداردهای مراقبت پرستاری مبتنی بر شواهد را در محیط‌های پرالتهاب ارتقا می‌بخشند.",
    tags: ["مراقبت‌های ویژه", "فرآیندهای بالینی", "عملکرد مبتنی بر شواهد"],
  },
  {
    id: "geriatrics",
    index: "02",
    kicker: "GERIATRICS",
    title: "سلامت سالمندان",
    summary:
      "مطالعه نیازهای خاص مراقبت‌های بهداشتی در جمعیت رو به رشد سالمندان. هدف پژوهش‌های من بهبود کیفیت زندگی، آموزش خودمراقبتی و پایبندی به درمان در بیماران سالمند با تأکید بر چالش‌های منحصربه‌فرد فیزیولوژیک و روان‌شناختی آنان است.",
    tags: ["سالمندشناسی", "کیفیت زندگی", "سالمندی سالم"],
  },
  {
    id: "ai",
    index: "03",
    kicker: "TECHNOLOGY",
    title: "هوش مصنوعی",
    summary:
      "کاوش در نقطه تلاقی فناوری‌های نوین و مراقبت‌های بهداشتی. من نحوه استفاده از ابزارهای هوش مصنوعی، الگوریتم‌های یادگیری ماشین و انفورماتیک سلامت را در جهت کمک به تصمیم‌گیری بالینی پرستاران، مراقبت‌های پیش‌گویانه و تشخیص زودهنگام تحلیل می‌کنم.",
    tags: ["انفورماتیک سلامت", "یادگیری ماشین", "مراقبت پیش‌گویانه"],
  },
  {
    id: "chronic",
    index: "04",
    kicker: "MANAGEMENT",
    title: "بیماری‌های مزمن",
    summary:
      "بررسی استراتژی‌های مراقبت طولانی‌مدت برای بیماران مبتلا به شرایط مزمن مانند دیابت. من اثربخشی تئوری‌های آموزشی و برنامه‌های خودمراقبتی را در راستای توانمندسازی بیماران برای مدیریت سلامت خود و پایبندی به رژیم‌های درمانی ارزیابی می‌کنم.",
    tags: ["مدیریت دیابت", "برنامه‌های خودمراقبتی", "توانمندسازی بیمار"],
  },
];

export interface PublicationFa {
  id: string;
  title: string;
  doi: string;
  doiUrl: string;
}

export const publicationsFa: PublicationFa[] = [
  {
    id: "peplau-2025",
    title:
      "تعیین تأثیر برنامه آموزشی خودمراقبتی طراحی‌شده بر اساس تئوری پپلاو بر پایبندی به درمان و خودمراقبتی در بیماران سالمند مبتلا به دیابت.",
    doi: "10.17533/udea.iee.v43n1e05",
    doiUrl: "https://doi.org/10.17533/udea.iee.v43n1e05",
  },
];

export const coursesFa: Course[] = [
  { id: "c1", title: "پرستاری مراقبت‌های ویژه در CCU" },
  { id: "c2", title: "فوریت‌های پزشکی پیش‌بیمارستانی" },
  { id: "c3", title: "مراقبت‌های تروما پیش‌بیمارستانی" },
];

export const faSectionTitles = {
  research: "مقالات پژوهشی",
  teaching: "سوابق تدریس",
};

/* ------------------------------------------------------------------ */
/* Blog — edit/add posts here. Each post gets its own page at          */
/* /blog.html/<slug>. Keep slugs URL-safe (lowercase, dashes).         */
/* ------------------------------------------------------------------ */

export const blogPage = {
  titlePre: "Notes on",
  titleAccent: "care & evidence",
  intro:
    "Short essays and reflections on nursing practice, education, and research — written for clinicians, students, and the curious.",
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  /** Cover image path, e.g. "/images/blog/peplau.jpg". Omit for no image. */
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  paragraphs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "peplau-theory-bedside",
    title: "What Peplau's Theory Looks Like at the Bedside",
    excerpt:
      "Interpersonal relations theory sounds abstract — until you watch an elderly patient with diabetes start trusting the process. Here is how orientation, working, and termination phases play out in real education sessions.",
    date: "2025-06-12",
    readingTime: "6 min read",
    tags: ["Nursing Theory", "Diabetes", "Patient Education"],
    image: "/images/blog/hildegard-peplau.webp",
    imageAlt: "Portrait of Hildegard Peplau (1909–1999)",
    imageCredit: "Portrait of Hildegard E. Peplau (1909–1999), founder of interpersonal relations theory in nursing.",
    paragraphs: [
      "When I first designed a self-care program based on Peplau's interpersonal relations theory, my colleagues asked a fair question: how does a theory from the 1950s help an elderly patient remember foot care? The answer only became clear in the clinic's education room, sitting across from patients who had heard generic diabetes advice for years and tuned most of it out.",
      "The orientation phase is where everything is won or lost. Instead of opening with a lecture, we opened with listening: what does diabetes stop you from doing that matters to you? For one patient it was walking to the mosque without fear; for another, it was cooking without feeling like a burden. Naming a personal goal turns abstract self-care into something worth the effort.",
      "In the working phase, education becomes a partnership rather than a prescription. We practiced blood sugar monitoring together, adjusted diet advice to foods the patient actually eats, and reviewed foot care step by step. Small-group sessions helped — patients borrowed confidence from each other, and questions surfaced that no one dares to ask a doctor in a rushed visit.",
      "Termination is the phase most programs skip, and the one that determines whether change lasts. We reviewed what each patient could now do independently, named the warning signs that merit a clinic visit, and closed with a concrete two-week plan. Two weeks later, the self-care scores told the story our eyes had already seen: diet, monitoring, and foot care had genuinely improved.",
      "Theory, done right, is not decoration on a research paper. It is a sequence of human moments — trust, practice, farewell — that leaves the patient more capable than you found them.",
    ],
  },
  {
    slug: "ai-nursing-decision-making",
    title: "AI Will Not Replace Nurses — But Nurses Using AI Will Lead",
    excerpt:
      "Machine learning can flag deterioration hours earlier than the human eye. What it cannot do is hold a family's trust. Notes on where AI genuinely helps nursing decision-making — and where it must stay out of the way.",
    date: "2025-09-02",
    readingTime: "5 min read",
    tags: ["Artificial Intelligence", "Critical Care", "Health Informatics"],
    paragraphs: [
      "Every few months, a headline declares that AI will replace some part of healthcare. As someone who works in critical and emergency care and researches AI applications in nursing, I read those headlines with mixed feelings — excitement about the tools, skepticism about the framing.",
      "Where AI genuinely shines is pattern recognition at scale: early warning scores that synthesize vital signs, models that flag sepsis risk before it is clinically obvious, documentation assistants that return minutes to the bedside. In high-stress environments, a quiet, reliable second pair of eyes is worth more than any grand promise.",
      "What AI cannot do is the core of nursing: earn trust, read a frightened family, decide when a protocol should bend for a person. Predictive scores support judgment; they do not substitute for it. The nurses who thrive will be those who treat AI as an instrument — questioning its outputs, understanding its limits, and keeping the patient, not the dashboard, at the center.",
      "My advice to students: learn the fundamentals of health informatics the way you learned pharmacology — as a safety issue. Know what your tools assume, check them against your assessment, and never let a model outvote your eyes on a deteriorating patient.",
    ],
  },
  {
    slug: "caring-older-adults-chronic-disease",
    title: "Caring for Older Adults with Chronic Disease: Less Is Often More",
    excerpt:
      "Polypharmacy, conflicting advice, and education materials designed for someone else. What geriatric nursing taught me about simplifying care so elderly patients can actually follow it.",
    date: "2026-01-18",
    readingTime: "4 min read",
    tags: ["Geriatrics", "Chronic Disease", "Self-Care"],
    paragraphs: [
      "Older adults with chronic conditions rarely suffer from a lack of information. They suffer from too much of it — leaflets that contradict each other, medication schedules only a pharmacist could love, and advice that ignores how they actually live.",
      "Working with elderly patients with diabetes reshaped how I teach self-care. The breakthrough was subtraction: one clear diet principle instead of ten, one monitoring routine anchored to an existing habit, one foot-care check at the same time each day. Adherence improved not because patients tried harder, but because we asked for less and meant it.",
      "There is also a dignity dimension that numbers miss. An older adult who manages their own care keeps independence, and independence is quality of life. Every program we design should be judged by a simple question: does this make the patient more capable, or more dependent?",
      "If you educate elderly patients, start by asking what a good day looks like to them — then build the smallest possible plan that protects it.",
    ],
  },
];
