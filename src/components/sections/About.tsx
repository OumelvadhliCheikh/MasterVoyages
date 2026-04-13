import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/images/about.png";
import { RiEarthFill } from "react-icons/ri";

function CountUp({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-accent/20 dark:bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Story row */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border aspect-[4/3]">
              <img src={aboutImg} alt="Master Voyages team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-primary text-black font-bold text-sm px-4 py-2 rounded-xl w-fit">
                  {t.hero.stat1Label === "Voyageurs" ? "#1 en Mauritanie" : "#1 في موريتانيا"}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-sm font-medium">
              <RiEarthFill size={15} /> Mauritanie
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">{t.about.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.text}</p>
          </motion.div>
        </div>

        {/* Animated stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.about.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`stat-about-${i}`}
              className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm"
            >
              <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="text-muted-foreground text-sm mt-2 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
