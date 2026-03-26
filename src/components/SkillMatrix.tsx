import { motion } from "framer-motion";
import { Palette, Code2, Server, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillMatrix = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Palette,
      titleKey: "skill.design.title",
      descKey: "skill.design.desc",
      certs: ["Figma", "Adobe XD", "UI/UX Principles"],
      color: "neon-purple" as const,
      glowClass: "hover:shadow-[0_0_30px_hsl(270_80%_60%/0.15)]",
    },
    {
      icon: Code2,
      titleKey: "skill.webdev.title",
      descKey: "skill.webdev.desc",
      certs: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "Bootstrap"],
      color: "neon-cyan" as const,
      glowClass: "hover:shadow-[0_0_30px_hsl(185_100%_50%/0.15)]",
    },
    {
      icon: Server,
      titleKey: "skill.techops.title",
      descKey: "skill.techops.desc",
      certs: ["OS Management", "IT Support", "Networking"],
      color: "neon-green" as const,
      glowClass: "hover:shadow-[0_0_30px_hsl(160_100%_45%/0.15)]",
    },
    {
      icon: Zap,
      titleKey: "skill.special.title",
      descKey: "skill.special.desc",
      certs: ["Fast Typing AR/EN", "Data Analytics", "AI"],
      color: "neon-cyan" as const,
      glowClass: "hover:shadow-[0_0_30px_hsl(185_100%_50%/0.15)]",
    },
  ];

  const colorMap: Record<string, string> = {
    "neon-purple": "text-neon-purple",
    "neon-cyan": "text-neon-cyan",
    "neon-green": "text-neon-green",
  };

  const borderColorMap: Record<string, string> = {
    "neon-purple": "border-neon-purple/20",
    "neon-cyan": "border-neon-cyan/20",
    "neon-green": "border-neon-green/20",
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-[0.2em] uppercase">
            {t("skills.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            {t("skills.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-6 transition-all duration-300 ${skill.glowClass} group cursor-default`}
            >
              <div className="flex items-start justify-between mb-4">
                <skill.icon size={28} className={`${colorMap[skill.color]} transition-transform duration-300 group-hover:scale-110`} />
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t(skill.titleKey)}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t(skill.descKey)}</p>
              <div className="flex flex-wrap gap-2">
                {skill.certs.map((cert) => (
                  <span
                    key={cert}
                    className={`text-xs font-mono px-2.5 py-1 rounded-md border ${borderColorMap[skill.color]} ${colorMap[skill.color]} bg-secondary/50`}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMatrix;
