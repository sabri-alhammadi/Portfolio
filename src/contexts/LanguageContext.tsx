import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<string, Record<Lang, string>> = {
  // Hero
  "hero.subtitle": {
    en: "IT Engineer · UI/UX Designer · Web Developer",
    ar: "مهندس تقنية معلومات · مصمم واجهات · مطور ويب",
  },
  "hero.name": { en: "Sabri Derhim", ar: "صبري درهم" },
  "hero.headline1": { en: "Engineering Secure &", ar: "هندسة تجارب" },
  "hero.headline2": { en: "Intelligent Digital", ar: "رقمية آمنة" },
  "hero.headline3": { en: "Experiences", ar: "وذكية" },
  "hero.subheadline": {
    en: "Merging UI/UX Design with IT Infrastructure",
    ar: "دمج تصميم واجهات المستخدم مع البنية التحتية لتقنية المعلومات",
  },
  "hero.secure": { en: "Secure", ar: "آمن" },
  "hero.intelligent": { en: "Intelligent", ar: "ذكي" },
  "hero.connected": { en: "Connected", ar: "متصل" },
  "hero.location": { en: "Taiz, Yemen", ar: "تعز، اليمن" },
  "hero.downloadCV": { en: "Download CV", ar: "تحميل السيرة الذاتية" },

  // Skills
  "skills.label": { en: "// Skill Matrix", ar: "// مصفوفة المهارات" },
  "skills.title": { en: "Domains of Expertise", ar: "مجالات الخبرة" },
  "skill.design.title": { en: "UI/UX Design", ar: "تصميم واجهات المستخدم" },
  "skill.design.desc": {
    en: "Human-centric interfaces with pixel-perfect execution",
    ar: "واجهات تركز على المستخدم بتنفيذ دقيق",
  },
  "skill.webdev.title": { en: "Web & Mobile Dev", ar: "تطوير الويب والجوال" },
  "skill.webdev.desc": {
    en: "Full-stack applications with modern frameworks and responsive design",
    ar: "تطبيقات متكاملة باستخدام أطر عمل حديثة وتصميم متجاوب",
  },
  "skill.techops.title": { en: "Technical Operations", ar: "العمليات التقنية" },
  "skill.techops.desc": {
    en: "Networking infrastructure, OS management & IT support",
    ar: "البنية التحتية للشبكات وإدارة أنظمة التشغيل والدعم التقني",
  },
  "skill.special.title": { en: "Special Skills", ar: "مهارات خاصة" },
  "skill.special.desc": {
    en: "Fast typing (AR/EN), Data Analytics, AI & Cybersecurity",
    ar: "طباعة سريعة (عربي/إنجليزي)، تحليل بيانات، ذكاء اصطناعي وأمن سيبراني",
  },
  "skill.cyber.title": { en: "Cybersecurity", ar: "الأمن السيبراني" },
  "skill.cyber.desc": {
    en: "Threat analysis, vulnerability assessment & secure architecture",
    ar: "تحليل التهديدات وتقييم الثغرات والبنية الآمنة",
  },

  // Portfolio
  "portfolio.label": { en: "// Portfolio", ar: "// معرض الأعمال" },
  "portfolio.title": { en: "The Hybrid Portfolio", ar: "معرض الأعمال الهجين" },
  "portfolio.design": { en: "Design", ar: "التصميم" },
  "portfolio.infra": { en: "Infrastructure", ar: "البنية التحتية" },
  "portfolio.code": { en: "Code", ar: "البرمجة" },

  // Certifications
  "certs.label": { en: "// Certifications", ar: "// الشهادات" },
  "certs.title": { en: "Certifications Vault", ar: "خزنة الشهادات" },
  "certs.desc": {
    en: "Professional certifications validating expertise across multiple domains.",
    ar: "شهادات مهنية تثبت الخبرة عبر مجالات متعددة.",
  },

  // Terminal
  "terminal.label": { en: "// Terminal", ar: "// الطرفية" },
  "terminal.title": { en: "Command Line", ar: "سطر الأوامر" },

  // Education
  "edu.label": { en: "// Education", ar: "// التعليم" },
  "edu.title": { en: "Academic Background", ar: "الخلفية الأكاديمية" },
  "edu.degree": {
    en: "Bachelor's Degree in Information Technology Engineering",
    ar: "بكالوريوس هندسة تقنية المعلومات",
  },
  "edu.university": { en: "Taiz University", ar: "جامعة تعز" },
  "edu.faculty": {
    en: "Faculty of Engineering and Information Technology",
    ar: "كلية الهندسة وتقنية المعلومات",
  },

  // Services
  "services.label": { en: "// Services", ar: "// الخدمات" },
  "services.title": {
    en: "Building and Protecting Your Digital Ecosystem",
    ar: "بناء وحماية نظامك الرقمي",
  },
  "services.desc": {
    en: "I believe technology should be a solution, not a barrier. That is why I provide web design services that give you a powerful presence, backed by deep expertise in network engineering and IT support. My goal is to ensure that every technical detail of your project operates in perfect harmony and with zero downtime.",
    ar: "أؤمن بأن التكنولوجيا يجب أن تكون حلاً لا عائقاً. لهذا أقدم خدمات تصميم ويب تمنحك حضوراً قوياً، مدعومة بخبرة عميقة في هندسة الشبكات والدعم التقني. هدفي هو ضمان أن كل تفصيل تقني في مشروعك يعمل بتناغم تام وبدون أي توقف.",
  },
  "services.web.title": { en: "Web Design & Development", ar: "تصميم وتطوير الويب" },
  "services.web.desc": {
    en: "Modern, responsive websites and applications crafted with precision and performance in mind.",
    ar: "مواقع وتطبيقات حديثة ومتجاوبة مصممة بدقة وأداء عالٍ.",
  },
  "services.network.title": { en: "Network Engineering", ar: "هندسة الشبكات" },
  "services.network.desc": {
    en: "Robust network infrastructure design, configuration, and optimization for reliable connectivity.",
    ar: "تصميم وتكوين وتحسين البنية التحتية للشبكات لضمان اتصال موثوق.",
  },
  "services.it.title": { en: "IT Support", ar: "الدعم التقني" },
  "services.it.desc": {
    en: "Comprehensive technical support ensuring your systems run smoothly with zero downtime.",
    ar: "دعم تقني شامل يضمن تشغيل أنظمتك بسلاسة وبدون أي توقف.",
  },

  // Footer
  "footer.copy": { en: "© 2025 Sabri Derhim — Engineered with precision", ar: "© 2025 صبري درهم — صُنع بإتقان" },
  "footer.tagline": { en: "secure · intelligent · designed", ar: "آمن · ذكي · مصمم" },

  // Nav
  "nav.langSwitch": { en: "عربي", ar: "EN" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  const t = (key: string) => translations[key]?.[lang] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
