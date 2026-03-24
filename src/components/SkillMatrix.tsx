import { motion } from "framer-motion";
import { Palette, Shield, Network, Brain, BarChart3 } from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centric interfaces with pixel-perfect execution",
    certs: ["Google UX Certificate", "Figma Professional"],
    color: "neon-purple",
    glowClass: "hover:shadow-[0_0_30px_hsl(270_80%_60%/0.15)]",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Threat analysis, vulnerability assessment & secure architecture",
    certs: ["Cisco Cyber-Ops", "CompTIA Security+"],
    color: "neon-cyan",
    glowClass: "hover:shadow-[0_0_30px_hsl(185_100%_50%/0.15)]",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Enterprise infrastructure design & network management",
    certs: ["CCNA", "CCNP Enterprise"],
    color: "neon-green",
    glowClass: "hover:shadow-[0_0_30px_hsl(160_100%_45%/0.15)]",
  },
  {
    icon: Brain,
    title: "AI & Programming",
    description: "Machine learning pipelines & full-stack application development",
    certs: ["Google AI Essentials", "Python Professional"],
    color: "neon-cyan",
    glowClass: "hover:shadow-[0_0_30px_hsl(185_100%_50%/0.15)]",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transforming raw data into actionable business intelligence",
    certs: ["Google Data Analytics", "SQL Advanced"],
    color: "neon-green",
    glowClass: "hover:shadow-[0_0_30px_hsl(160_100%_45%/0.15)]",
  },
];

const colorMap: Record<string, string> = {
  "neon-purple": "text-neon-purple",
  "neon-cyan": "text-neon-cyan",
  "neon-green": "text-neon-green",
};

const borderColorMap: Record<string, string> = {
  "neon-purple": "border-neon-purple/20",
  "neon-cyan": "border-neon-cyan/20",
  "neon-green": "border-neon-green/20",
};

const SkillMatrix = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-neon-cyan tracking-[0.2em] uppercase">
            // Skill Matrix
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Domains of Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-6 transition-all duration-300 ${skill.glowClass} group cursor-default`}
            >
              <div className="flex items-start justify-between mb-4">
                <skill.icon size={28} className={`${colorMap[skill.color]} transition-transform duration-300 group-hover:scale-110`} />
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.certs.map((cert) => (
                  <span
                    key={cert}
                    className={`text-xs font-mono px-2.5 py-1 rounded-md border ${borderColorMap[skill.color]} ${colorMap[skill.color]} bg-secondary/50`}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMatrix;
