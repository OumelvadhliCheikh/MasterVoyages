import { useLanguage } from "@/contexts/LanguageContext";
import { RiWhatsappFill, RiFacebookFill, RiTiktokFill, RiArrowUpLine, RiSmartphoneFill } from "react-icons/ri";

const serviceLinks = [
  { fr: "eSIM International", ar: "eSIM دولي" },
  { fr: "Réservation d'hôtels", ar: "حجز الفنادق" },
  { fr: "Billets d'avion", ar: "تذاكر الطيران" },
  { fr: "Forfaits touristiques", ar: "الباقات السياحية" },
  { fr: "Hajj & Umrah", ar: "الحج والعمرة" },
];

const usefulLinks = [
  { fr: "À propos", ar: "من نحن", id: "about" },
  { fr: "FAQ", ar: "الأسئلة الشائعة", id: "faq" },
  { fr: "Contact", ar: "تواصل معنا", id: "contact" },
  { fr: "Télécharger l'app", ar: "حمّل التطبيق", id: "download" },
];

export function Footer() {
  const { t, lang } = useLanguage();
  const isFr = lang === "fr";

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="footer" className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-black font-black text-lg">M</div>
              <span className="text-white font-bold text-xl">Master Voyages</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">{t.footer.aboutText}</p>
            <a
              href="https://onelink.to/jxdz7d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold px-4 py-2 rounded-xl text-sm hover:bg-primary/90 transition-colors"
              data-testid="link-footer-download"
            >
              <RiSmartphoneFill size={15} /> {isFr ? "Télécharger l'app" : "حمّل التطبيق"}
            </a>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white/40 font-bold mb-5 uppercase tracking-widest text-xs">{t.footer.services}</h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-white/50 hover:text-primary transition-colors text-sm text-start"
                  >
                    {isFr ? link.fr : link.ar}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Useful links */}
          <div>
            <h4 className="text-white/40 font-bold mb-5 uppercase tracking-widest text-xs">{t.footer.links}</h4>
            <ul className="flex flex-col gap-2.5">
              {usefulLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/50 hover:text-primary transition-colors text-sm text-start"
                  >
                    {isFr ? link.fr : link.ar}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h4 className="text-white/40 font-bold mb-5 uppercase tracking-widest text-xs">{t.footer.social}</h4>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="https://wa.me/22236050582"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-[#25D366] transition-colors text-sm"
                data-testid="link-footer-whatsapp"
              >
                <RiWhatsappFill size={20} /> WhatsApp
              </a>
              <a
                href="https://facebook.com/mastervoyages"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-[#1877F2] transition-colors text-sm"
                data-testid="link-footer-facebook"
              >
                <RiFacebookFill size={20} /> Facebook
              </a>
              <a
                href="https://www.tiktok.com/@master_voyages?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm"
                data-testid="link-footer-tiktok"
              >
                <RiTiktokFill size={20} /> TikTok
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/40 text-xs">
              <RiSmartphoneFill size={14} /> {isFr ? "Payer avec Bankily" : "الدفع عبر بنكيلي"}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-white/30 text-sm">{t.footer.copy}</p>
            <span className="text-white/15 hidden sm:block">•</span>
            <a
              href="https://bidayatech.agency/?utm_source=sitex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-primary transition-colors text-sm"
            >
              {isFr ? "Conçu par" : "تصميم"}{" "}
              <span className="text-primary/70 font-semibold hover:text-primary">BidayaTech</span>
            </a>
          </div>
          <button
            onClick={scrollTop}
            data-testid="button-back-to-top"
            className="flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-sm"
          >
            <RiArrowUpLine size={16} />
            {t.footer.backTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
