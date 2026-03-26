import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-primary tracking-wider">
            {t("edu.label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            {t("edu.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative border border-border rounded-xl p-8 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
        >
          <div className="absolute top-0 start-8 -translate-y-1/2 bg-primary/10 border border-primary/30 rounded-full p-3">
            <GraduationCap size={24} className="text-primary" />
          </div>

          <div className="mt-4 space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {t("edu.degree")}
            </h3>
            <p className="text-lg text-primary font-mono">
              {t("edu.university")}
            </p>
            <p className="text-muted-foreground">
              {t("edu.faculty")}
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-muted-foreground font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary" />
                2025
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                {t("hero.location")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
