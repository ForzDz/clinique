import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const treatments = [
  {
    id: 1,
    title: "Traitement Anti-Âge",
    description: "Rajeunissement facial avec techniques non-invasives",
    image: beforeAfter1,
  },
  {
    id: 2,
    title: "Soins du Visage",
    description: "Amélioration de la texture et de l'éclat de la peau",
    image: beforeAfter2,
  },
  {
    id: 3,
    title: "Traitement Laser",
    description: "Correction des imperfections cutanées",
    image: beforeAfter3,
  },
];

const BeforeAfterGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleMouseLeave = () => setIsDragging(false);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % treatments.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
    setSliderPosition(50);
  };

  const currentTreatment = treatments[currentIndex];

  return (
    <section id="resultats" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
            Résultats Avant / Après
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les transformations remarquables obtenues grâce à nos traitements professionnels
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative bg-card rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Image Container with Drag Slider */}
            <div
              ref={containerRef}
              className="relative aspect-[16/10] overflow-hidden cursor-ew-resize select-none"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Full) */}
              <img
                src={currentTreatment.image}
                alt={`${currentTreatment.title} - Après`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              
              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentTreatment.image}
                  alt={`${currentTreatment.title} - Avant`}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-90"
                  style={{ 
                    width: `${10000 / sliderPosition}%`,
                    maxWidth: 'none'
                  }}
                  draggable={false}
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg z-10 pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-primary/20">
                  <div className="flex gap-0.5">
                    <ChevronLeft className="w-4 h-4 text-primary" />
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium pointer-events-none">
                Avant
              </div>
              <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium pointer-events-none">
                Après
              </div>

              {/* Hint text */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm pointer-events-none">
                Glissez pour comparer
              </div>
            </div>

            {/* Treatment Info */}
            <div className="p-6 text-center">
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                {currentTreatment.title}
              </h3>
              <p className="text-muted-foreground">{currentTreatment.description}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {treatments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Aller au traitement ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            * Les résultats peuvent varier selon les patients. Consultez nos spécialistes pour une évaluation personnalisée.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
