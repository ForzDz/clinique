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
        
        {/* Reste du site avec fond animé flow field bleu */}
        <div className="relative">
          {/* Fond animé bleu/violet bien visible */}
          <div className="absolute inset-0 z-0">
            <NeuralBackground
              color="#818cf8"
              trailOpacity={0.08}
              particleCount={900}
              speed={0.6}
            />
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
