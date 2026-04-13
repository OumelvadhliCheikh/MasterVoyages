import React, { createContext, useContext, useEffect, useState } from "react";

export const translations = {
  fr: {
    nav: {
      home: "Accueil", about: "À propos", services: "Services", gallery: "Galerie",
      reviews: "Avis", contact: "Contact", faq: "FAQ", download: "Télécharger l'app"
    },
    hero: {
      title: "Master Voyages",
      subtitle: "Votre partenaire de confiance pour tous vos voyages",
      cta1: "Télécharger l'app", cta2: "Découvrir",
      stat1Label: "Voyageurs", stat2Label: "Destinations", stat3Label: "Satisfaction"
    },
    countdown: {
      title: "⏳ Offres Limitées",
      subtitle: "Ne ratez pas nos meilleures offres !",
      days: "Jours", hours: "Heures", minutes: "Minutes", seconds: "Secondes"
    },
    whyUs: {
      title: "Pourquoi Nous Choisir ?",
      items: [
        { title: "Assistance 24/7", desc: "Notre équipe est disponible à toute heure pour vous accompagner." },
        { title: "Offres Exceptionnelles", desc: "Des packages exclusifs adaptés à tous les budgets." },
        { title: "Prix Le Plus Bas", desc: "Garantie du meilleur prix, aucun frais caché." },
        { title: "Réservation Facile", desc: "Réservez en quelques clics depuis notre application." }
      ]
    },
    about: {
      title: "À Propos de Nous",
      text: "Master Voyages est la première application de réservation de voyages en Mauritanie et la plus téléchargée dans le secteur du tourisme. Nous accompagnons nos clients à chaque étape avec des services complets et rapides.",
      p1: "Master Voyages est la première et la plus téléchargée des applications de voyage en Mauritanie. Depuis 5 ans, nous accompagnons des milliers de voyageurs dans leurs projets.",
      p2: "Notre équipe d'experts vous propose des packages personnalisés pour le Hajj, l'Umrah, les voyages internationaux et bien plus encore.",
      stats: [
        { value: 10000, label: "Clients", prefix: "+", suffix: "" },
        { value: 50, label: "Destinations", prefix: "+", suffix: "" },
        { value: 5, label: "Ans d'expérience", prefix: "+", suffix: "" },
        { value: 1, label: "App en Mauritanie", prefix: "#", suffix: "" }
      ]
    },
    services: {
      title: "Nos Services",
      learnMore: "En savoir plus",
      items: [
        { title: "eSIM International", desc: "Connexion instantanée dans +190 pays, activez avant votre départ, sans changer votre SIM principale. Payez via Bankily." },
        { title: "Réservation d'hôtels", desc: "Les meilleurs hôtels aux meilleurs prix, partout dans le monde." },
        { title: "Billets d'avion", desc: "Trouvez les meilleures offres pour vos vols internationaux et nationaux." },
        { title: "Location de voiture", desc: "Louez un véhicule à destination pour une liberté totale de mouvement." },
        { title: "Forfaits touristiques", desc: "Des packages tout inclus pour des vacances sans souci." },
        { title: "Transferts aéroport", desc: "Navettes privées depuis et vers l'aéroport, disponibles 24h/24." }
      ]
    },
    phoneMockup: {
      title: "Téléchargez l'Application",
      subtitle: "La première app de voyage en Mauritanie",
      appstore: "App Store", playstore: "Google Play",
      downloadOn: "Télécharger sur"
    },
    videoGallery: {
      title: "Nos Publicités",
      videos: [
        { title: "Campagne Hajj 2024", tag: "Pèlerinage", url: "https://www.facebook.com/share/v/1DAUvsKzxr/" },
        { title: "Offres eSIM", tag: "Connectivité", url: "https://www.facebook.com/share/v/1CbxwPBWzE/" },
        { title: "Destinations de Rêve", tag: "Voyages", url: "https://www.facebook.com/share/r/18M2PpYJWk/" }
      ],
      playing: "Vidéo en cours...", close: "Fermer"
    },
    fbPosts: { title: "Nos Dernières Offres" },
    reviews: {
      title: "Ce que disent nos clients",
      items: [
        { name: "Ahmed M.", text: "Excellent service, application très facile à utiliser !" },
        { name: "Fatima Mint Ahmed", text: "Mon voyage à La Mecque était parfaitement organisé." },
        { name: "Mohamed Ould Sidi", text: "Je recommande vivement Master Voyages à tout le monde." },
        { name: "Khadija Ba", text: "Équipe très professionnelle et réactive. Bravo !" },
        { name: "Ibrahim Ould Weddady", text: "La meilleure application de voyage en Mauritanie sans hésitation." },
        { name: "Mariem Mint Vall", text: "Prix imbattables et service client au top. Très satisfaite !" }
      ]
    },
    mapSection: { title: "Trouvez-nous", address: "TVZ, en face du stade olympique, ntt, Nouakchott, Mauritania, 6560", phone: "+222 36 05 05 82", email: "contact@mastervoyages.mr" },
    newsletter: {
      title: "Recevez nos meilleures offres",
      subtitle: "Inscrivez-vous pour recevoir nos offres exclusives directement dans votre boîte mail.",
      placeholder: "Votre adresse email",
      button: "S'inscrire",
      success: "Merci ! Vous êtes inscrit(e)."
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        { q: "Comment télécharger l'application ?", a: "Disponible sur App Store et Google Play. Cherchez 'Master Voyages' ou utilisez le lien : https://onelink.to/jxdz7d" },
        { q: "Comment acheter une eSIM ?", a: "Ouvrez l'app, choisissez votre destination, sélectionnez un forfait eSIM et payez via Bankily en quelques secondes." },
        { q: "Quels pays sont couverts par l'eSIM ?", a: "Plus de 190 pays sont couverts. Vous pouvez vérifier la liste complète dans l'application avant d'acheter." },
        { q: "Comment payer via Bankily ?", a: "Dans l'application, choisissez Bankily comme mode de paiement. Une notification vous sera envoyée pour confirmer le paiement." },
        { q: "Le service est-il disponible 24/7 ?", a: "Oui, notre équipe d'assistance est disponible 24h/24 et 7j/7 via WhatsApp et l'application." },
        { q: "Comment contacter le support ?", a: "Via WhatsApp au +222 36 05 05 82, par email à contact@mastervoyages.mr, ou directement dans l'application." }
      ]
    },
    contact: {
      title: "Contactez-nous",
      namePlaceholder: "Votre nom", emailPlaceholder: "Votre email",
      phonePlaceholder: "Votre téléphone", messagePlaceholder: "Votre message",
      subjectLabel: "Sujet",
      subjectOptions: ["Réservation", "eSIM", "Hajj & Umrah", "Réclamation", "Autre"],
      submit: "Envoyer le message", whatsapp: "Écrire sur WhatsApp",
      success: "Merci ! Votre message a été envoyé avec succès."
    },
    footer: {
      about: "À propos",
      aboutText: "La première app de voyage en Mauritanie. Réservez, voyagez, explorez.",
      services: "Services",
      links: "Liens utiles",
      social: "Réseaux sociaux",
      backTop: "Haut de page",
      copy: "© 2026 Master Voyages. Tous droits réservés."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية", about: "من نحن", services: "خدماتنا", gallery: "المعرض",
      reviews: "آراء العملاء", contact: "تواصل معنا", faq: "الأسئلة الشائعة", download: "حمّل التطبيق"
    },
    hero: {
      title: "ماستر فوياج",
      subtitle: "وجهتكم الأولى للسفر، شريككم الموثوق في جميع رحلاتكم",
      cta1: "حمّل التطبيق", cta2: "اكتشف",
      stat1Label: "عملاء", stat2Label: "وجهة", stat3Label: "رضا العملاء"
    },
    countdown: {
      title: "⏳ عروض محدودة",
      subtitle: "لا تفوّتوا أفضل عروضنا!",
      days: "أيام", hours: "ساعات", minutes: "دقائق", seconds: "ثواني"
    },
    whyUs: {
      title: "لماذا تختارنا؟",
      items: [
        { title: "مساعدة على مدار الساعة", desc: "فريقنا متاح في أي وقت لمرافقتكم." },
        { title: "عروض استثنائية", desc: "باقات حصرية تناسب جميع الميزانيات." },
        { title: "أقل الأسعار", desc: "ضمان أفضل سعر، بدون رسوم خفية." },
        { title: "حجز سهل", desc: "احجز بنقرات قليلة من تطبيقنا." }
      ]
    },
    about: {
      title: "من نحن",
      text: "ماستر فوياج هو أول تطبيق لحجوزات السفر في موريتانيا، والأكثر تحميلاً في قطاع السياحة. نرافق عملاءنا في كل خطوة بخدمات متكاملة وسريعة.",
      p1: "ماستر فوياج هو التطبيق الأول والأكثر تحميلاً للسفر في موريتانيا. منذ 5 سنوات ونحن نرافق آلاف المسافرين في رحلاتهم.",
      p2: "فريقنا من الخبراء يقدم لكم باقات مخصصة للحج والعمرة والسفر الدولي وأكثر.",
      stats: [
        { value: 10000, label: "عميل", prefix: "+", suffix: "" },
        { value: 50, label: "وجهة", prefix: "+", suffix: "" },
        { value: 5, label: "سنوات خبرة", prefix: "+", suffix: "" },
        { value: 1, label: "تطبيق في موريتانيا", prefix: "#", suffix: "" }
      ]
    },
    services: {
      title: "خدماتنا",
      learnMore: "اعرف أكثر",
      items: [
        { title: "eSIM دولي", desc: "اتصال فوري في +190 دولة، فعّل قبل سفرك، بدون تغيير شريحتك. الدفع عبر بنكيلي." },
        { title: "حجز الفنادق", desc: "أفضل الفنادق بأفضل الأسعار في جميع أنحاء العالم." },
        { title: "تذاكر الطيران", desc: "أفضل العروض لرحلاتك الجوية الدولية والمحلية." },
        { title: "تأجير السيارات", desc: "استأجر سيارة في وجهتك لحرية تنقل تامة." },
        { title: "الباقات السياحية", desc: "باقات شاملة لعطلات بدون متاعب." },
        { title: "نقل المطار", desc: "خدمات نقل خاصة من وإلى المطار، متاحة 24 ساعة." }
      ]
    },
    phoneMockup: {
      title: "حمّل التطبيق",
      subtitle: "أول تطبيق سفر في موريتانيا",
      appstore: "App Store", playstore: "Google Play",
      downloadOn: "حمّل من"
    },
    videoGallery: {
      title: "إعلاناتنا",
      videos: [
        { title: "حملة الحج 2024", tag: "الحج", url: "https://www.facebook.com/share/v/1DAUvsKzxr/" },
        { title: "عروض eSIM", tag: "الاتصال", url: "https://www.facebook.com/share/v/1CbxwPBWzE/" },
        { title: "وجهات الأحلام", tag: "رحلات", url: "https://www.facebook.com/share/r/18M2PpYJWk/" }
      ],
      playing: "الفيديو قيد التشغيل...", close: "إغلاق"
    },
    fbPosts: { title: "آخر عروضنا" },
    reviews: {
      title: "ما يقوله عملاؤنا",
      items: [
        { name: "أحمد م.", text: "خدمة ممتازة وتطبيق سهل الاستخدام جداً!" },
        { name: "فاطمة منت أحمد", text: "رحلتي إلى مكة كانت منظمة بشكل رائع." },
        { name: "محمد ولد سيدي", text: "أنصح بشدة بماستر فوياج لجميع المسافرين." },
        { name: "خديجة با", text: "فريق محترف جداً ومتجاوب. أحسنتم!" },
        { name: "إبراهيم ولد وداي", text: "أفضل تطبيق سفر في موريتانيا بلا شك." },
        { name: "مريم منت فال", text: "أسعار لا تقبل المنافسة وخدمة عملاء رائعة. ممتازة!" }
      ]
    },
    mapSection: { title: "موقعنا", address: "TVZ، مقابل الاستاد الأولمبي، NTT، نواكشوط، موريتانيا، 6560 ", phone: "+222 36 05 05 82", email: "contact@mastervoyages.mr" },
    newsletter: {
      title: "احصل على أفضل عروضنا",
      subtitle: "اشترك لتصلك عروضنا الحصرية مباشرة على بريدك الإلكتروني.",
      placeholder: "بريدك الإلكتروني",
      button: "اشترك",
      success: "شكراً! لقد تم تسجيلك بنجاح."
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "كيف أحمّل التطبيق؟", a: "متوفر على App Store وGoogle Play. ابحث عن 'Master Voyages' أو استخدم الرابط: https://onelink.to/jxdz7d" },
        { q: "كيف أشتري eSIM؟", a: "افتح التطبيق، اختر وجهتك، حدد باقة eSIM وادفع عبر بنكيلي في ثوانٍ." },
        { q: "ما الدول المشمولة بـ eSIM؟", a: "أكثر من 190 دولة مشمولة. يمكنك مراجعة القائمة الكاملة في التطبيق قبل الشراء." },
        { q: "كيف أدفع عبر بنكيلي؟", a: "في التطبيق، اختر بنكيلي كطريقة دفع. ستصلك إشعار لتأكيد الدفع." },
        { q: "هل الخدمة متاحة 24/7؟", a: "نعم، فريق الدعم متاح على مدار الساعة طوال أيام الأسبوع عبر واتساب والتطبيق." },
        { q: "كيف أتواصل مع الدعم؟", a: "عبر واتساب على الرقم +222 36 05 05 82، أو بالبريد الإلكتروني، أو مباشرة في التطبيق." }
      ]
    },
    contact: {
      title: "اتصل بنا",
      namePlaceholder: "اسمك", emailPlaceholder: "بريدك الإلكتروني",
      phonePlaceholder: "رقم هاتفك", messagePlaceholder: "رسالتك",
      subjectLabel: "الموضوع",
      subjectOptions: ["حجز", "eSIM", "الحج والعمرة", "شكوى", "أخرى"],
      submit: "إرسال الرسالة", whatsapp: "تواصل عبر واتساب",
      success: "شكراً! تم إرسال رسالتك بنجاح."
    },
    footer: {
      about: "من نحن",
      aboutText: "أول تطبيق سفر في موريتانيا. احجز، سافر، اكتشف.",
      services: "الخدمات",
      links: "روابط مفيدة",
      social: "تواصل معنا",
      backTop: "أعلى الصفحة",
      copy: "© 2026 ماستر فوياج. جميع الحقوق محفوظة."
    }
  }
};

type Language = "fr" | "ar";
type LanguageContextType = {
  lang: Language;
  t: typeof translations.fr;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const seoMeta = {
  fr: {
    title: "Master Voyages – Première App de Voyage en Mauritanie",
    description: "Master Voyages – Première application de réservation de voyages en Mauritanie. Billets, hôtels, eSIM, location voiture.",
    ogLocale: "fr_MR",
  },
  ar: {
    title: "ماستر فوياج – أول تطبيق سفر في موريتانيا",
    description: "ماستر فوياج – أول تطبيق لحجوزات السفر في موريتانيا. تذاكر، فنادق، eSIM، تأجير سيارات.",
    ogLocale: "ar_MR",
  },
};

function updateSEO(lang: Language) {
  const meta = seoMeta[lang];
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", meta.ogLocale);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", `${window.location.origin}/${lang}`);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", `${window.location.origin}/${lang}`);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const path = window.location.pathname.replace("/", "");
    if (path === "fr" || path === "ar") return path;
    return (localStorage.getItem("lang") as Language) || "fr";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    window.history.pushState(null, "", `/${lang}`);
    updateSEO(lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "fr" ? "ar" : "fr"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
