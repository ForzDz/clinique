import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <motion.a
      href="https://wa.me/213556482798"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="floating-cta md:hidden"
      aria-label="Contacter par WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
};

export default FloatingCTA;
