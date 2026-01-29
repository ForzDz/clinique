import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamSection from "@/components/sections/TeamSection";
import BeforeAfterGallery from "@/components/sections/BeforeAfterGallery";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AppointmentForm from "@/components/sections/AppointmentForm";
import LocationSection from "@/components/sections/LocationSection";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/sections/FloatingCTA";
import NeuralBackground from "@/components/ui/flow-field-background";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* HeroSection garde son propre fond (image) */}
        <HeroSection />
        
        {/* Reste du site avec fond animé flow field */}
        <div className="relative">
          {/* Fond animé derrière toutes les sections */}
          <div className="absolute inset-0 z-0">
            <NeuralBackground
              color="#22C55E"
              trailOpacity={0.04}
              particleCount={800}
              speed={0.5}
            />
            {/* Overlay semi-transparent pour lisibilité */}
            <div className="absolute inset-0 bg-white/70" />
          </div>
          
          {/* Contenu des sections */}
          <div className="relative z-10">
            <ServicesSection />
            <TeamSection />
            <BeforeAfterGallery />
            <TestimonialsSection />
            <AppointmentForm />
            <LocationSection />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
