import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { RiSmartphoneFill } from "react-icons/ri";
import secren2 from "@/assets/images/secren2.png";
import secren3 from "@/assets/images/secren3.png";

function Phone({ delay = 0, small = false, children }: { delay?: number; small?: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="phone-float relative flex-shrink-0"
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className={`relative bg-[#0a0a0a] rounded-[36px] border-[4px] border-white/20 shadow-2xl ${small ? "w-[140px] h-[280px] sm:w-[170px] sm:h-[340px]" : "w-[155px] h-[310px] sm:w-[190px] sm:h-[380px] md:w-[220px] md:h-[440px]"}`}
      >
        <div className="absolute inset-1.5 rounded-[30px] overflow-hidden">
          {children}
        </div>
        <div className="absolute right-[-5px] top-16 w-1 h-10 bg-white/15 rounded-full" />
        <div className="absolute left-[-5px] top-12 w-1 h-7 bg-white/15 rounded-full" />
        <div className="absolute left-[-5px] top-24 w-1 h-7 bg-white/15 rounded-full" />
      </div>
      <div className="absolute inset-0 rounded-[36px] bg-primary/15 blur-3xl -z-10 scale-75" />
    </motion.div>
  );
}

export function PhoneMockup() {
  const { t } = useLanguage();
  const isFr = t.phoneMockup.appstore === "App Store";

  return (
    <section id="download" className="py-16 md:py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Phones */}
          <div className="flex items-end justify-center gap-4 sm:gap-6 order-2 lg:order-1">
            <Phone delay={0}>
              <img src={secren2} alt="App screenshot" className="w-full h-full object-cover" />
            </Phone>
            <Phone delay={0.15} small>
              <img src={secren3} alt="App screenshot" className="w-full h-full object-cover" />
            </Phone>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white order-1 lg:order-2 text-center lg:text-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-medium mb-4 md:mb-6">
              <RiSmartphoneFill size={15} /> {isFr ? "Application Mobile" : "تطبيق الهاتف"}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">{t.phoneMockup.title}</h2>
            <p className="text-white/60 text-lg md:text-xl mb-8 md:mb-10">{t.phoneMockup.subtitle}</p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="https://apps.apple.com/mr/app/master-voyages/id6670750297?l=fr-FR"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-mockup-appstore"
                className="flex items-center gap-3 bg-white text-black rounded-xl px-5 py-3 font-semibold hover:bg-primary transition-all duration-300"
              >
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="text-xs opacity-70">{t.phoneMockup.downloadOn}</div>
                  <div className="font-bold">{t.phoneMockup.appstore}</div>
                </div>
              </a>
              <a
                href="https://onelink.to/jxdz7d"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-mockup-playstore"
                className="flex items-center gap-3 bg-white text-black rounded-xl px-5 py-3 font-semibold hover:bg-primary transition-all duration-300"
              >
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199a1 1 0 010 1.984l-1.66.96L13.793 12l2.245-2.245 1.66.753zM5.864 2.658L16.8 9.024l-2.302 2.302-8.635-8.668z" />
                </svg>
                <div>
                  <div className="text-xs opacity-70">{t.phoneMockup.downloadOn}</div>
                  <div className="font-bold">{t.phoneMockup.playstore}</div>
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
