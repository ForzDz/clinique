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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <BeforeAfterGallery />
        <TestimonialsSection />
        <AppointmentForm />
        <LocationSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
