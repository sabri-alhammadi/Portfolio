import { motion } from "framer-motion";
import { Shield, Cpu, Network, MapPin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import sabriPhoto from "@/assets/sabri-photo.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 scanline" />
      <div className="absolute top-1/4 -start-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -end-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <img
            src={sabriPhoto}
            alt="Sabri Derhim"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto object-cover border-2 border-primary/50 shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6 text-primary neon-text-cyan"
        >
          {t("hero.name")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-primary/50" />
          <span className="font-mono text-sm text-primary tracking-[0.2em] uppercase">
            {t("hero.subtitle")}
          </span>
          <div className="h-px w-12 bg-primary/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-foreground">{t("hero.headline1")}</span>
          <br />
          <span className="text-foreground">{t("hero.headline2")}</span>
          <br />
          <span className="text-foreground">{t("hero.headline3")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 font-light"
        >
          {t("hero.subheadline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8 text-muted-foreground"
        >
          <MapPin size={14} className="text-primary" />
          <span className="font-mono text-sm">{t("hero.location")}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-12"
        >
          <Button asChild variant="outline" className="font-mono border-primary/50 text-primary hover:bg-primary/10 hover:text-primary gap-2">
            <a href="/sabri_derhim_cv.pdf" download>
              <Download size={16} />
              {t("hero.downloadCV")}
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-8 text-muted-foreground"
        >
          {[
            { icon: Shield, label: t("hero.secure") },
            { icon: Cpu, label: t("hero.intelligent") },
            { icon: Network, label: t("hero.connected") },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm font-mono">
              <item.icon size={16} className="text-primary" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16"
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
