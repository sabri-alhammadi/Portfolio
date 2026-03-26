import { motion } from "framer-motion";
import { Shield, Cpu, Network, MapPin, Download, Mail, Github, Award } from "lucide-react";
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          <a
            href="https://wa.me/967780840146"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            +967780840146
          </a>
          <a
            href="mailto:sharaf.sabry18@gmail.com"
            className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={18} className="text-primary" />
            sharaf.sabry18@gmail.com
          </a>
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
