import { motion } from "framer-motion";
import { Shield, Cpu, Network } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 scanline" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-green/5 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-neon-cyan/50" />
          <span className="font-mono text-sm text-neon-cyan tracking-[0.3em] uppercase">
            IT Engineer · Designer · Security Specialist
          </span>
          <div className="h-px w-12 bg-neon-cyan/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-foreground">Engineering Secure &</span>
          <br />
          <span className="text-primary neon-text-cyan">Intelligent Digital</span>
          <br />
          <span className="text-foreground">Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light"
        >
          Merging Network Infrastructure with Human-Centric Design
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-8 text-muted-foreground"
        >
          {[
            { icon: Shield, label: "Secure" },
            { icon: Cpu, label: "Intelligent" },
            { icon: Network, label: "Connected" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm font-mono">
              <item.icon size={16} className="text-neon-cyan" />
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
          <div className="w-px h-16 bg-gradient-to-b from-neon-cyan/50 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
