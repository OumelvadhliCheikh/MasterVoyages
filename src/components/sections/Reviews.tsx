import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine, RiStarFill } from "react-icons/ri";

export function Reviews() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const items = t.reviews.items;
  const total = items.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [
    items[(current) % total],
    items[(current + 1) % total],
    items[(current + 2) % total],
  ];

  return (
    <section id="reviews" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit font-medium text-sm mx-auto mb-4">
            <RiStarFill size={15} /> {t.reviews.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t.reviews.title}</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((review, index) => (
            <motion.div
              key={`${current}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              data-testid={`card-review-${index}`}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <RiStarFill key={i} size={18} className="text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed italic flex-1">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{review.name}</div>
                  <div className="text-xs text-muted-foreground"> {t.hero.stat1Label === "Voyageurs" ? "Client vérifié" : "عميل موثّق"}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            data-testid="button-reviews-prev"
          >
            <RiArrowLeftSLine size={20} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-3 bg-primary" : "w-3 h-3 bg-border hover:bg-primary/50"}`}
                data-testid={`dot-review-${i}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            data-testid="button-reviews-next"
          >
            <RiArrowRightSLine size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
