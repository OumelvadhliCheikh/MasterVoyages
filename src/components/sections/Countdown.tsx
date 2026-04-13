import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

function getTargetDate() {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d;
}

const TARGET = getTargetDate();

export function Countdown() {
  const { t } = useLanguage();
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, TARGET.getTime() - now.getTime());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.days, label: t.countdown.days },
    { value: time.hours, label: t.countdown.hours },
    { value: time.minutes, label: t.countdown.minutes },
    { value: time.seconds, label: t.countdown.seconds },
  ];

  return (
    <section id="countdown" className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-black mb-3">{t.countdown.title}</h2>
        <p className="text-black/70 text-lg mb-10 font-medium">{t.countdown.subtitle}</p>

        <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          {units.map((unit, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-black flex items-center justify-center shadow-xl"
                data-testid={`countdown-${unit.label.toLowerCase()}`}
              >
                <span className="text-3xl md:text-4xl font-black text-primary tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-black font-bold mt-2 text-sm md:text-base uppercase tracking-widest">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
