import { motion } from "framer-motion";
import { ShieldCheck, Bug, Lock, FileWarning } from "lucide-react";

const items = [
  { icon: Bug, title: "Vulnerability Assessments", desc: "Systematic identification and evaluation of security weaknesses across systems and networks." },
  { icon: Lock, title: "Secure Coding Practices", desc: "Building software with security-first principles — input validation, encryption, and defense in depth." },
  { icon: FileWarning, title: "Incident Response", desc: "Structured approach to handling security breaches and minimizing damage with rapid containment." },
  { icon: ShieldCheck, title: "Compliance & Auditing", desc: "Ensuring adherence to security frameworks like NIST, ISO 27001, and CIS benchmarks." },
];

const CyberVault = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-neon-cyan tracking-[0.2em] uppercase">
            // Security
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Cyber-Security Vault
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            A security-first mindset woven into every layer of design and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex gap-4 hover:border-neon-cyan/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center shrink-0">
                <item.icon size={22} className="text-neon-cyan" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberVault;
