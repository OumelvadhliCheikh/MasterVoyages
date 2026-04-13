import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiWhatsappFill, RiWhatsappLine, RiMailLine, RiMapPin2Line, RiPhoneFill } from "react-icons/ri";
import { toast } from "sonner";

export function Contact() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim() || !form.email.includes("@")) e.email = true;
    if (!form.message.trim() || form.message.length < 5) e.message = true;
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
    toast.success(t.contact.success);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const field = (id: string, value: string, placeholder: string, type = "text") => (
    <input
      type={type}
      value={value}
      onChange={(e) => { setForm((f) => ({ ...f, [id]: e.target.value })); setErrors((er) => ({ ...er, [id]: false })); }}
      placeholder={placeholder}
      data-testid={`input-contact-${id}`}
      className={`w-full h-12 px-4 rounded-xl bg-background border-2 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors ${errors[id] ? "border-red-500" : "border-border"}`}
    />
  );

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit font-medium text-sm mx-auto mb-4">
            <RiPhoneFill size={15} /> {t.contact.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t.contact.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {[
              { icon: RiWhatsappLine, label: "WhatsApp", value: t.mapSection.phone },
              { icon: RiMailLine, label: "Email", value: t.mapSection.email },
              { icon: RiMapPin2Line, label: lang === "fr" ? "Adresse" : "العنوان", value: t.mapSection.address },
            ].map(({ icon: Icon, label, value }, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                  <div className="font-semibold text-foreground mt-0.5">{value}</div>
                </div>
              </div>
            ))}
            <a
              href="https://wa.me/22236050582"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp-contact"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-2xl px-6 py-4 font-bold text-lg hover:bg-[#1ebe5d] transition-colors shadow-lg mt-2"
            >
              <RiWhatsappFill size={24} /> {t.contact.whatsapp}
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
            >
              {field("name", form.name, t.contact.namePlaceholder)}
              {field("email", form.email, t.contact.emailPlaceholder, "email")}
              {field("phone", form.phone, t.contact.phonePlaceholder, "tel")}

              {/* Subject select */}
              <select
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                data-testid="select-contact-subject"
                className="w-full h-12 px-4 rounded-xl bg-background border-2 border-border text-foreground outline-none focus:border-primary transition-colors"
              >
                <option value="" disabled>{t.contact.subjectLabel}</option>
                {t.contact.subjectOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>

              <textarea
                value={form.message}
                onChange={(e) => { setForm((f) => ({ ...f, message: e.target.value })); setErrors((er) => ({ ...er, message: false })); }}
                placeholder={t.contact.messagePlaceholder}
                rows={4}
                data-testid="textarea-contact-message"
                className={`w-full px-4 py-3 rounded-xl bg-background border-2 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none ${errors.message ? "border-red-500" : "border-border"}`}
              />

              <button
                type="submit"
                data-testid="button-contact-submit"
                className="h-13 py-3.5 w-full rounded-xl bg-primary text-black font-bold text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                {t.contact.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
