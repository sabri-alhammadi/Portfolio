import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  const links = [
    { key: "skills.title", href: "#skills" },
    { key: "services.label", href: "#services" },
    { key: "edu.title", href: "#education" },
    { key: "portfolio.title", href: "#portfolio" },
    { key: "vault.title", href: "#vault" },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-[60] p-2 rounded-lg border border-border bg-card/80 backdrop-blur-md text-foreground hover:border-primary/50 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: isRTL ? 300 : -300 }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? 300 : -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 ${isRTL ? "right-0" : "left-0"} z-[80] h-full w-72 bg-card border-r border-border flex flex-col`}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-mono text-sm text-primary tracking-wider">
                  {t("hero.name")}
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-md hover:bg-muted transition-colors text-muted-foreground"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 py-6 px-4 space-y-1">
                {links.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-3 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <span className="text-primary font-mono mr-2">0{i + 1}.</span>
                    {t(link.key)}
                  </motion.button>
                ))}
              </div>

              <div className="p-4 border-t border-border">
                <span className="font-mono text-xs text-muted-foreground">
                  <span className="text-primary">▸</span> {t("footer.tagline")}
                </span>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
