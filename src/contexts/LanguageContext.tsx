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
