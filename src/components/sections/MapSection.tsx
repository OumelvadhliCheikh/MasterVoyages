import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiMapPinFill } from "react-icons/ri";

export function MapSection() {
  const { t } = useLanguage();

  return (
    <section id="map" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit font-medium text-sm mx-auto mb-4">
            <RiMapPinFill size={15} /> {t.mapSection.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t.mapSection.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {[
              { icon: RiMapPin2Line, label: t.hero.stat1Label === "Voyageurs" ? "Adresse" : "العنوان", value: t.mapSection.address },
              { icon: RiPhoneLine, label: "WhatsApp", value: t.mapSection.phone },
              { icon: RiMailLine, label: "Email", value: t.mapSection.email },
            ].map(({ icon: Icon, label, value }, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                  <div className="font-semibold text-foreground mt-0.5">{value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10">
              <iframe
                title="Master Voyages Location"
                src="https://maps.google.com/maps?q=Nouakchott,Mauritania&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                data-testid="iframe-map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
