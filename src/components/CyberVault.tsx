import { motion } from "framer-motion";
import { ShieldCheck, Award, GraduationCap, Code2, Brain, Network } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const certs = [
  { icon: GraduationCap, title: "Mishkah Institute — Web Design", category: "Design" },
  { icon: Network, title: "Networking Fundamentals", category: "Networking" },
  { icon: ShieldCheck, title: "Cybersecurity Fundamentals", category: "Security" },
  { icon: Award, title: "UI/UX Design Certificate", category: "Design" },
  { icon: Code2, title: "App Development Certificate", category: "Development" },
  { icon: Brain, title: "AI Essentials Certificate", category: "AI" },
];

const CyberVault = () => {
  const { t } = useLanguage();

  return (
    <section id="vault" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-primary tracking-[0.2em] uppercase">
            {t("certs.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            {t("certs.title")}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            {t("certs.desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 flex gap-4 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <cert.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1">{cert.title}</h3>
                <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                  {cert.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberVault;
