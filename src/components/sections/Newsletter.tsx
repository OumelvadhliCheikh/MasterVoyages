import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { RiMailSendFill, RiCheckboxCircleFill } from "react-icons/ri";

const emailSchema = z.string().email();

export function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) { setError(true); return; }
    setError(false);
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4 text-black">
            <RiMailSendFill size={52} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-black mb-3">{t.newsletter.title}</h2>
          <p className="text-black/70 text-lg mb-8">{t.newsletter.subtitle}</p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-black text-primary font-bold text-xl py-4 px-8 rounded-2xl inline-flex items-center gap-3"
              data-testid="text-newsletter-success"
            >
              <RiCheckboxCircleFill size={24} /> {t.newsletter.success}
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(false); }}
                placeholder={t.newsletter.placeholder}
                className={`flex-1 h-14 px-5 rounded-xl border-2 bg-white text-black outline-none focus:border-black transition-colors text-base ${error ? "border-red-500" : "border-transparent"}`}
                data-testid="input-newsletter-email"
              />
              <button
                type="submit"
                className="h-14 px-8 bg-black text-primary font-bold rounded-xl hover:bg-[#222] transition-colors text-base flex-shrink-0 shadow-lg"
                data-testid="button-newsletter-submit"
              >
                {t.newsletter.button}
              </button>
            </form>
          )}
          {error && (
            <p className="text-red-800 font-medium mt-3 text-sm">
              {t.hero.stat1Label === "Voyageurs" ? "Veuillez entrer un email valide." : "يرجى إدخال بريد إلكتروني صحيح."}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
