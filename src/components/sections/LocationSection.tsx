import { motion } from "framer-motion";
import { MapPin, Clock, Car, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicExterior from "@/assets/clinic-exterior.jpg";

const schedule = [
  { day: "Lundi - Vendredi", hours: "9h00 - 19h00" },
  { day: "Samedi", hours: "9h00 - 14h00" },
  { day: "Dimanche", hours: "Fermé" }
];

const LocationSection = () => {
  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Clinic+Hova+Oran+Algérie",
      "_blank"
    );
  };

  return (
    <section id="localisation" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title font-serif">Nous Trouver</h2>
          <p className="section-subtitle">
            Facilement accessible en transports et avec parking à proximité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left - Image + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Clinic Exterior Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={clinicExterior}
                alt="Façade de la clinique"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-6">
                <div className="text-card">
                  <h3 className="text-xl font-bold font-serif">Clinic Hova</h3>
                  <p className="text-sm opacity-90">Un espace moderne et accueillant au cœur d'Oran</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps?q=Oran+Alg%C3%A9rie&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de la clinique"
              />
            </div>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="medical-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 font-serif">Adresse</h3>
                  <p className="text-muted-foreground">
                    Avenue de l'Indépendance<br />
                    Oran 31000, Algérie
                  </p>
                  <Button
                    variant="link"
                    className="px-0 mt-2 text-primary gap-2"
                    onClick={openGoogleMaps}
                  >
                    <Navigation className="w-4 h-4" />
                    Obtenir l'itinéraire
                  </Button>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="medical-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-4 font-serif">Horaires d'ouverture</h3>
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                      >
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
