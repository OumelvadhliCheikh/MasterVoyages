import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RiArrowDownSLine, RiPlaneFill } from "react-icons/ri";
import heroImg from "@/assets/images/hero.png";
import secren1 from "@/assets/images/secren1.jpg";


export function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Mauritanian desert" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-[#f4a91a]/20" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/30"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${Math.random() * 10 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-start"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-medium mb-6"
            >
              <RiPlaneFill size={16} /> {t.hero.stat1Label === "Voyageurs" ? "#1 App de Voyage en Mauritanie" : "#1 تطبيق سفر في موريتانيا"}
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight">
              {t.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/85 mb-10 leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo("download")}
                className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 h-14 w-full sm:w-auto shadow-xl shadow-primary/30"
                data-testid="button-hero-download"
              >
                {t.hero.cta1}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("whyus")}
                className="text-white border-white/50 hover:bg-white/10 hover:text-white text-lg px-8 h-14 w-full sm:w-auto bg-transparent"
                data-testid="button-hero-discover"
              >
                {t.hero.cta2}
              </Button>
            </div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-8 mt-12"
            >
              {[
                { value: "10k+", label: t.hero.stat1Label },
                { value: "50+", label: t.hero.stat2Label },
                { value: "98%", label: t.hero.stat3Label },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black text-primary">{stat.value}</div>
                  <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: CSS Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
            style={{ marginTop: "80px" }}
          >
            <div className="phone-float relative">
              {/* Phone outer frame */}
              <div
                className="relative bg-black rounded-[48px] border-4 border-white/20 shadow-2xl"
                style={{ width: 280, height: 580 }}
              >
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
                {/* Screen */}
                <div className="absolute inset-2 rounded-[40px] overflow-hidden bg-gradient-to-b from-[#0d0d0d] via-[#111] to-[#1a1000]">
                  <img src={secren1} alt="App screenshot" className="w-full h-full object-cover" />
                  {/* Side button */}
                  <div className="absolute right-[-6px] top-28 w-1.5 h-16 bg-white/20 rounded-full" />
                  <div className="absolute left-[-6px] top-24 w-1.5 h-8 bg-white/20 rounded-full" />
                  <div className="absolute left-[-6px] top-36 w-1.5 h-8 bg-white/20 rounded-full" />
                </div>
                {/* Glow */}
                <div className="absolute inset-0 rounded-[48px] bg-primary/20 blur-3xl -z-10 scale-90" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll arrow */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("countdown")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-primary transition-colors"
        data-testid="button-scroll-down"
      >
        <RiArrowDownSLine size={32} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
