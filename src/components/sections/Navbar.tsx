import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { RiMenuLine, RiCloseLine, RiSunLine, RiMoonLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/images/masterVoyagesLogo-removebg-previeww.png";

export function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    const sections = ["hero", "countdown", "whyus", "about", "services", "download", "videos", "posts", "reviews", "map", "newsletter", "faq", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const isHero = activeSection === "hero" && !isScrolled;

  const navLinks = [
    { id: "hero", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "reviews", label: t.nav.reviews },
    { id: "faq", label: t.nav.faq },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glassmorphism py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div>
            <img
              src={logoImg}
              alt="Logo"
              style={{ height: "60px", width: "auto" }}
              className={`object-contain transition-all duration-300 ${isHero ? "brightness-0 invert drop-shadow-md" : ""}`}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === link.id ? "text-primary" : isHero ? "text-white" : "text-foreground"
                  }`}
                data-testid={`link-nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-2 border-l border-border/50 pl-5 ms-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLang}
                className={`font-bold text-sm ${isHero ? "text-white hover:text-primary hover:bg-white/10" : ""}`}
                data-testid="button-toggle-lang"
              >
                {lang === "fr" ? "عر" : "FR"}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={isHero ? "text-white hover:text-primary hover:bg-white/10" : ""}
                data-testid="button-toggle-theme"
              >
                {theme === "light" ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
              </Button>
              <Button
                onClick={() => window.open("https://onelink.to/jxdz7d", "_blank")}
                className="bg-primary text-black hover:bg-primary/90 font-bold"
                data-testid="button-nav-download"
              >
                {t.nav.download}
              </Button>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLang}
              className={`font-bold text-sm ${isHero ? "text-white" : ""}`}
            >
              {lang === "fr" ? "عر" : "FR"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={isHero ? "text-white" : ""}
            >
              {theme === "light" ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isHero ? "text-white" : ""}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glassmorphism border-b border-border shadow-xl py-4 px-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-left text-base font-medium py-3 px-3 rounded-xl transition-colors ${activeSection === link.id ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => window.open("https://onelink.to/jxdz7d", "_blank")}
            className="w-full mt-3 bg-primary text-black hover:bg-primary/90 font-bold"
          >
            {t.nav.download}
          </Button>
        </div>
      )}
    </nav>
  );
}
