import HeroSection from "@/components/HeroSection";
import SkillMatrix from "@/components/SkillMatrix";
import PortfolioGallery from "@/components/PortfolioGallery";
import CyberVault from "@/components/CyberVault";
import TerminalComponent from "@/components/TerminalComponent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <HeroSection />
      <SkillMatrix />
      <PortfolioGallery />
      <CyberVault />
      <TerminalComponent />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-sm text-muted-foreground">
            © 2026 — Engineered with precision
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            <span className="text-neon-cyan">▸</span> secure · intelligent · designed
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
