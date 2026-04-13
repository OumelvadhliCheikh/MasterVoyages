import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  RiSimCard2Fill,
  RiBuildingFill,
  RiPlaneFill,
  RiCarFill,
  RiEarthFill,
  RiBusFill,
  RiRocketFill,
} from "react-icons/ri";

const serviceIcons = [
  RiSimCard2Fill,
  RiBuildingFill,
  RiPlaneFill,
  RiCarFill,
  RiEarthFill,
  RiBusFill,
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit font-medium text-sm mx-auto mb-4">
            <RiRocketFill size={15} /> {t.services.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t.services.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? RiEarthFill;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                data-testid={`card-service-${index}`}
                className="group bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                <button
                  className="text-primary font-semibold text-sm hover:underline w-fit mt-auto"
                  data-testid={`btn-service-learn-${index}`}
                >
                  {t.services.learnMore} →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
