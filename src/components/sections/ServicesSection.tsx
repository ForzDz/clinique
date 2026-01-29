import { motion } from "framer-motion";
import { Stethoscope, Syringe, Sparkles, Heart, Shield, Microscope } from "lucide-react";

// Import images
import serviceConsultation from "@/assets/service-consultation-v2.png";
import serviceInjectable from "@/assets/service-injectable-v2.png";
import serviceEsthetique from "@/assets/service-esthetique-v2.png";
import serviceLaser from "@/assets/service-laser-real.jpg";
import serviceMedical from "@/assets/service-medical-real.jpg";
import serviceScreening from "@/assets/service-screening-real.jpg";

const services = [
  {
    icon: Stethoscope,
    title: "Consultation Dermatologique",
    description: "Évaluation complète et personnalisée de votre peau par nos experts.",
    features: ["Diagnostic précis", "Plan de traitement", "Suivi personnalisé"],
    image: serviceConsultation
  },
  {
    icon: Syringe,
    title: "Traitements Injectables",
    description: "Solutions avancées pour traiter rides, imperfections et rajeunissement.",
    features: ["Botox", "Acide hyaluronique", "Mésothérapie"],
    image: serviceInjectable
  },
  {
    icon: Sparkles,
    title: "Soins Esthétiques",
    description: "Hydratation profonde et revitalisation cutanée avec technologies modernes.",
    features: ["Peeling", "Microneedling", "LED thérapie"],
    image: serviceEsthetique
  },
  {
    icon: Heart,
    title: "Dermatologie Médicale",
    description: "Traitement des pathologies cutanées avec expertise et bienveillance.",
    features: ["Acné", "Eczéma", "Psoriasis"],
    image: serviceMedical
  },
  {
    icon: Shield,
    title: "Dépistage Cutané",
    description: "Surveillance préventive des lésions et grains de beauté.",
    features: ["Dermatoscopie", "Cartographie", "Suivi digital"],
    image: serviceInjectable
  },
  {
    icon: Microscope,
    title: "Laser Dermatologique",
    description: "Traitements laser de pointe pour diverses affections cutanées.",
    features: ["Épilation", "Taches pigmentaires", "Cicatrices"],
    image: serviceLaser
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif drop-shadow-lg">Nos Services</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Une gamme complète de soins dermatologiques pour votre bien-être cutané
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl group overflow-hidden p-0 border border-white/20"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 service-icon">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
