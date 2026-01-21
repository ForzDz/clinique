import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-2 font-serif">
              Clinique <span className="text-primary">Santé Plus</span>
            </h3>
            <p className="text-card/70 text-xs leading-relaxed max-w-xs">
              Votre partenaire de confiance pour des soins dermatologiques d'excellence.
            </p>
          </motion.div>

          {/* Social - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h4 className="font-semibold text-sm mb-3">Suivez-nous</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-4 border-t border-card/10 text-center text-xs text-card/50">
          <p>
            © {currentYear} Clinique Santé Plus. Tous droits réservés.
          </p>
          <p className="mt-1">
          <a href="#" className="hover:text-card transition-colors">Politique de confidentialité</a>
          {" • "}

            <a href="#" className="hover:text-card transition-colors">Créé par <span className="text-primary">YACINE</span></a>

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
