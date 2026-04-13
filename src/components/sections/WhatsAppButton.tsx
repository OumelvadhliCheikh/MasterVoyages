import { useLanguage } from "@/contexts/LanguageContext";
import { RiWhatsappFill } from "react-icons/ri";

export function WhatsAppButton() {
  const { lang } = useLanguage();

  return (
    <a
      href="https://wa.me/22236050582"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === "fr" ? "Contactez-nous sur WhatsApp" : "تواصل معنا عبر واتساب"}
      data-testid="button-whatsapp-float"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl whatsapp-pulse hover:scale-110 transition-transform duration-300">
          <RiWhatsappFill size={32} />
        </div>
        <div className="absolute bottom-full right-0 mb-3 whitespace-nowrap bg-secondary text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {lang === "fr" ? "Contactez-nous" : "تواصل معنا"}
          <div className="absolute top-full right-4 border-4 border-transparent border-t-secondary" />
        </div>
      </div>
    </a>
  );
}
