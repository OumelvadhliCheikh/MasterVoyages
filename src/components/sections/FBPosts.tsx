import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { RiFacebookFill, RiThumbUpFill, RiShareForwardFill, RiChatSmile2Fill,RiGiftFill } from "react-icons/ri";

const posts = [
  {
    fr: { text: "🌐 eSIM International – Connexion instantanée dans +190 pays ! Activez avant votre départ sans changer votre SIM.", tags: "#MasterVoyages #eSIM #Mauritanie" },
    ar: { text: "🌐 eSIM دولي – اتصال فوري بالإنترنت في أكثر من 190 دولة! فعّل قبل سفرك بدون تغيير شريحتك.", tags: "#ماسترفوياج #eSIM #موريتانيا" },
    likes: 247, shares: 63, comments: 31, gradient: "from-[#1a1000] via-[#2a1800] to-[#0d0d0d]"
  },
  {
    fr: { text: "🕌 Offre Hajj 2025 – Réservez maintenant et bénéficiez d'un package tout inclus. Accompagnement complet de A à Z.", tags: "#Hajj2025 #MasterVoyages #Mauritanie" },
    ar: { text: "🕌 عرض الحج 2025 – احجز الآن واستفد من باقة شاملة. مرافقة كاملة من الألف إلى الياء.", tags: "#الحج2025 #ماسترفوياج #موريتانيا" },
    likes: 412, shares: 89, comments: 54, gradient: "from-[#0d1a00] via-[#1a2800] to-[#0d0d0d]"
  },
  {
    fr: { text: "✈️ Billets d'avion au meilleur prix ! Paris, Dubai, Istanbul, Casablanca… Réservez via notre app.", tags: "#Vols #MasterVoyages #VoyageMauritanie" },
    ar: { text: "✈️ تذاكر طيران بأفضل الأسعار! باريس، دبي، إسطنبول، الدار البيضاء… احجز عبر تطبيقنا.", tags: "#طيران #ماسترفوياج #سفر_موريتانيا" },
    likes: 183, shares: 41, comments: 22, gradient: "from-[#001a1a] via-[#002828] to-[#0d0d0d]"
  },
  {
    fr: { text: "🏨 Hôtels 5 étoiles aux meilleurs prix ! Dubaï, Istanbul, Paris… Profitez de nos offres exclusives.", tags: "#Hotels #Luxe #MasterVoyages" },
    ar: { text: "🏨 فنادق 5 نجوم بأفضل الأسعار! دبي، إسطنبول، باريس… استمتع بعروضنا الحصرية.", tags: "#فنادق #فخامة #ماسترفوياج" },
    likes: 298, shares: 57, comments: 38, gradient: "from-[#1a001a] via-[#280028] to-[#0d0d0d]"
  },
  {
    fr: { text: "📶 Restez connecté partout dans le monde avec notre eSIM ! Payez facilement via Bankily. Disponible maintenant.", tags: "#eSIM #Bankily #MasterVoyages" },
    ar: { text: "📶 ابقَ متصلاً في أي مكان بالعالم مع eSIM الخاص بنا! ادفع بسهولة عبر بنكيلي. متاح الآن.", tags: "#eSIM #بنكيلي #ماسترفوياج" },
    likes: 376, shares: 94, comments: 47, gradient: "from-[#001a0d] via-[#00280d] to-[#0d0d0d]"
  },
  {
    fr: { text: "🌍 Découvrez nos forfaits touristiques ! Europe, Asie, Moyen-Orient… Des voyages inoubliables vous attendent.", tags: "#Tourisme #Voyage #MasterVoyages" },
    ar: { text: "🌍 اكتشف باقاتنا السياحية! أوروبا، آسيا، الشرق الأوسط… رحلات لا تُنسى تنتظركم.", tags: "#سياحة #رحلات #ماسترفوياج" },
    likes: 221, shares: 48, comments: 29, gradient: "from-[#1a0d00] via-[#281500] to-[#0d0d0d]"
  },
];

export function FBPosts() {
  const { t, lang } = useLanguage();

  return (
    <section id="posts" className="py-24 bg-[#111]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary w-fit font-medium text-sm mx-auto mb-4">
            <RiGiftFill size={16} /> {lang === "fr" ? "Offres" : "العروض"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t.fbPosts.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, index) => {
            const content = lang === "fr" ? post.fr : post.ar;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                data-testid={`card-fbpost-${index}`}
                className={`group relative bg-gradient-to-br ${post.gradient} border border-white/10 rounded-2xl p-5 hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
              >
                {/* FB icon */}
                <RiFacebookFill size={20} className="absolute top-4 right-4 text-[#1877F2] opacity-80" />

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                    M
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Master Voyages</div>
                    <div className="text-white/40 text-xs">@mastervoyages.mr</div>
                  </div>
                </div>

                {/* Content */}
                <p className="text-white/85 text-sm leading-relaxed mb-3">{content.text}</p>
                <p className="text-primary/70 text-xs mb-4">{content.tags}</p>

                {/* Engagement */}
                <div className="flex items-center gap-4 pt-3 border-t border-white/10 text-white/50 text-xs">
                  <span className="flex items-center gap-1.5">
                    <RiThumbUpFill size={14} className="text-primary" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RiShareForwardFill size={14} /> {post.shares}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RiChatSmile2Fill size={14} /> {post.comments}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
