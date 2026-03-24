import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Line {
  type: "input" | "output";
  text: string;
}

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  help     — Show this help message",
    "  creds    — Display certifications",
    "  contact  — Show contact information",
    "  skills   — List skill domains",
    "  bio      — Education & background",
    "  clear    — Clear terminal",
  ],
  creds: [
    "┌─ Certifications ─────────────────────────┐",
    "│  • Mishkah Institute — Web Design          │",
    "│  • CCNA — Networking                        │",
    "│  • Cybersecurity Fundamentals               │",
    "│  • UI/UX Design Certificate                 │",
    "│  • App Development Certificate              │",
    "│  • AI Essentials Certificate                │",
    "└────────────────────────────────────────────┘",
  ],
  contact: [
    "📧  Email: sharaf.sabry18@gmail.com",
    "📱  Phone: 00967780840146",
    "📍  Location: Taiz, Yemen",
  ],
  skills: [
    "▸ UI/UX Design — Figma, Adobe XD, Prototyping",
    "▸ Web & Mobile Dev — React, TypeScript, Tailwind, Bootstrap",
    "▸ Technical Ops — Networking (CCNA), OS Management, IT Support",
    "▸ Special — Fast Typing (AR/EN), Data Analytics, AI, Cybersecurity",
  ],
  bio: [
    "┌─ Education ──────────────────────────────┐",
    "│  Sabri Derhim                              │",
    "│  IT Engineer — Taiz University, 2025       │",
    "│  Specialization: IT Engineering             │",
    "│  Focus: UI/UX, Web Dev, Networking,        │",
    "│         Cybersecurity & AI                  │",
    "└────────────────────────────────────────────┘",
  ],
};

const TerminalComponent = () => {
  const { t } = useLanguage();
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: "Welcome to Sabri's terminal. Type 'help' for available commands." },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLines: Line[] = [
      ...lines,
      { type: "input", text: `sabri@portfolio:~$ ${cmd}` },
    ];

    if (cmd === "clear") {
      setLines([{ type: "output", text: "Terminal cleared." }]);
      setInput("");
      return;
    }

    const response = COMMANDS[cmd];
    if (response) {
      response.forEach((line) => newLines.push({ type: "output", text: line }));
    } else {
      newLines.push({ type: "output", text: `Command not found: '${cmd}'. Type 'help' for options.` });
    }

    setLines(newLines);
    setInput("");
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="font-mono text-sm text-accent tracking-[0.2em] uppercase">
            {t("terminal.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            {t("terminal.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card overflow-hidden neon-glow-cyan"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-accent/70" />
            </div>
            <div className="flex items-center gap-2 ms-3">
              <Terminal size={13} className="text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">sabri@portfolio ~ bash</span>
            </div>
          </div>

          <div className="p-4 h-72 overflow-y-auto font-mono text-sm" dir="ltr">
            {lines.map((line, i) => (
              <div key={i} className={`mb-1 ${line.type === "input" ? "text-accent" : "text-muted-foreground"}`}>
                {line.text}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-accent shrink-0">sabri@portfolio:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-foreground outline-none font-mono text-sm caret-primary"
                spellCheck={false}
                autoComplete="off"
              />
              <span className="terminal-cursor text-primary">▌</span>
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalComponent;
