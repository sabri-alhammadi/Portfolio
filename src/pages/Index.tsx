import HeroSection from "@/components/HeroSection";
import SkillMatrix from "@/components/SkillMatrix";
import EducationSection from "@/components/EducationSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import CyberVault from "@/components/CyberVault";
import TerminalComponent from "@/components/TerminalComponent";
import LanguageToggle from "@/components/LanguageToggle";
import MobileMenu from "@/components/MobileMenu";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background relative">
      <MobileMenu />
      <LanguageToggle />
      <HeroSection />
      <SkillMatrix />
      <ServicesSection />
      <EducationSection />
      <PortfolioGallery />
      <CyberVault />
      <TerminalComponent />

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-sm text-muted-foreground">
            {t("footer.copy")}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">▸</span> {t("footer.tagline")}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
