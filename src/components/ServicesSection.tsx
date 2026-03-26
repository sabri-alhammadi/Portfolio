import { motion } from "framer-motion";
import { Globe, Network, Headset } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      titleKey: "services.web.title",
      descKey: "services.web.desc",
    },
    {
      icon: Network,
      titleKey: "services.network.title",
      descKey: "services.network.desc",
    },
    {
      icon: Headset,
      titleKey: "services.it.title",
      descKey: "services.it.desc",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-primary tracking-wider">
            {t("services.label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            {t("services.desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors group"
            >
              <div className="bg-primary/10 border border-primary/30 rounded-full p-3 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
