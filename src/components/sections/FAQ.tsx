import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiArrowDownSLine, RiQuestionFill } from "react-icons/ri";

export function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="py-24 bg-accent/20 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit font-medium text-sm mx-auto mb-4">
            <RiQuestionFill size={15} /> FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t.faq.title}</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {t.faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              data-testid={`faq-item-${index}`}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-primary/5 transition-colors group"
                data-testid={`faq-toggle-${index}`}
              >
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                  {item.q}
                </span>
                <RiArrowDownSLine
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${open === index ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === index ? "max-h-60" : "max-h-0"}`}
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
