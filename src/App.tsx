import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Countdown } from "@/components/sections/Countdown";
import { WhyUs } from "@/components/sections/WhyUs";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { PhoneMockup } from "@/components/sections/PhoneMockup";
import { VideoGallery } from "@/components/sections/VideoGallery";
import { FBPosts } from "@/components/sections/FBPosts";
import { Reviews } from "@/components/sections/Reviews";
import { MapSection } from "@/components/sections/MapSection";
import { Newsletter } from "@/components/sections/Newsletter";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <Hero />
            <Countdown />
            <WhyUs />
            <About />
            <Services />
            <PhoneMockup />
            <VideoGallery />
            <FBPosts />
            <Reviews />
            <MapSection />
            <Newsletter />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster position="bottom-right" richColors />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
