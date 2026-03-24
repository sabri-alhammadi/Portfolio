import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { toggleLang, t } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      onClick={toggleLang}
      className="fixed top-6 end-6 z-50 flex items-center gap-2 px-4 py-2 rounded-lg glass-card border border-glass-border hover:border-primary/40 transition-all duration-300 font-mono text-sm text-foreground"
    >
      <Globe size={14} className="text-primary" />
      {t("nav.langSwitch")}
    </motion.button>
  );
};

export default LanguageToggle;
