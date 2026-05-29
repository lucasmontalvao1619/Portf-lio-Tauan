import { AboutSection } from "@/components/sections/AboutSection";
import { DiplomaSection } from "@/components/sections/DiplomaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { QualificationsSection } from "@/components/sections/QualificationsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <GallerySection />
      <QualificationsSection />
      <AboutSection />
      <DiplomaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
