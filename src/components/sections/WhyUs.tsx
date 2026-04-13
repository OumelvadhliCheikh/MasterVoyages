import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  RiCustomerServiceFill,
  RiGiftFill,
  RiPriceTag3Fill,
  RiCalendarCheckFill,
  RiAwardFill,
} from "react-icons/ri";

const whyUsIcons = [
  RiCustomerServiceFill,
  RiGiftFill,
  RiPriceTag3Fill,
  RiCalendarCheckFill,
  RiAwardFill,
];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="whyus" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit font-medium text-sm mx-auto mb-4">
            <RiAwardFill size={15} /> {t.whyUs.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t.whyUs.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.items.map((item, index) => {
            const Icon = whyUsIcons[index] ?? RiAwardFill;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-whyus-${index}`}
                className="group bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-[0_8px_30px_rgba(244,169,26,0.2)] hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
