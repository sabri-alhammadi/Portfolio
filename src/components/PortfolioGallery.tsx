import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paintbrush, Server, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  { id: 1, category: "design", title: "Mobile App UI Design", desc: "Complete UI/UX for a mobile application with user research", tags: ["Figma", "Prototype", "User Research"] },
  { id: 2, category: "design", title: "Dashboard Interface", desc: "Data-driven monitoring dashboard with accessibility focus", tags: ["UI Design", "Accessibility", "Design System"] },
  { id: 3, category: "design", title: "E-Commerce Web Design", desc: "End-to-end shopping experience with micro-interactions", tags: ["Web Design", "Motion", "UX"] },
  { id: 4, category: "infra", title: "Network Architecture Design", desc: "Enterprise VLAN & routing infrastructure for campus network", tags: ["Cisco", "VLAN", "OSPF"] },
  { id: 5, category: "infra", title: "Security Assessment", desc: "Vulnerability assessment and penetration testing methodology", tags: ["Pen Testing", "SIEM", "Hardening"] },
  { id: 6, category: "infra", title: "Server Configuration", desc: "Security-focused server setup and monitoring implementation", tags: ["Linux", "Firewall", "Monitoring"] },
  { id: 7, category: "code", title: "React Portfolio App", desc: "Interactive portfolio with terminal emulator and animations", tags: ["React", "TypeScript", "Tailwind"] },
  { id: 8, category: "code", title: "Data Analysis Pipeline", desc: "Data processing and visualization with Python tooling", tags: ["Python", "Pandas", "Analytics"] },
  { id: 9, category: "code", title: "Responsive Web App", desc: "Full-stack web application with modern UI framework", tags: ["React", "Bootstrap", "JavaScript"] },
];

const PortfolioGallery = () => {
  const [active, setActive] = useState("design");
  const { t } = useLanguage();

  const filters = [
    { id: "design", label: t("portfolio.design"), icon: Paintbrush },
    { id: "infra", label: t("portfolio.infra"), icon: Server },
    { id: "code", label: t("portfolio.code"), icon: Code },
  ];

  const filtered = projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-accent tracking-[0.2em] uppercase">
            {t("portfolio.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            {t("portfolio.title")}
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 border ${
                active === f.id
                  ? "bg-primary/10 border-primary text-primary neon-glow-cyan"
                  : "border-border text-muted-foreground hover:border-muted-foreground/50"
              }`}
            >
              <f.icon size={14} />
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <span className="font-mono text-xs text-primary">
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <h3 className="text-foreground font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioGallery;
