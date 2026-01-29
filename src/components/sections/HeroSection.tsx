import { motion } from "framer-motion";
import { Phone, MessageCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import NeuralBackground from "@/components/ui/flow-field-background";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Flow Field Background */}
      <div className="absolute inset-0 z-0">
        <NeuralBackground
          color="#22C55E" // Vert primaire de la clinique
          trailOpacity={0.08} // Trails plus longs pour un effet plus fluide
          particleCount={700}
          speed={0.7}
          className="opacity-90"
        />
        {/* Gradient overlay pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <Award className="w-4 h-4 text-primary" />
            <span>Clinique certifiée • Excellence médicale</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif drop-shadow-lg"
          >
            Clinique{" "}
            <span className="text-primary">Hova</span>
          </motion.h1>

          {/* Specialty */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary font-medium mb-4"
          >
            Spécialisée en Dermatologie
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Des soins professionnels en toute confiance et sécurité.
            À Oran.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="cta-primary text-lg px-8 py-6 gap-2"
              onClick={() => window.location.href = "tel:+213556482798"}
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </Button>
            <Button
              size="lg"
              className="cta-whatsapp text-lg px-8 py-6 gap-2"
              onClick={() => window.open("https://wa.me/213556482798", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
              <div className="text-xs md:text-sm text-white/70">Années d'expérience</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-primary">5000+</div>
              <div className="text-xs md:text-sm text-white/70">Patients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-xs md:text-sm text-white/70">Taux de satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
