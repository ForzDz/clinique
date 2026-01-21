"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

import testimonialBg1 from "@/assets/testimonial-bg-1.jpg"
import testimonialBg2 from "@/assets/testimonial-bg-2.jpg"
import testimonialBg3 from "@/assets/testimonial-bg-3.jpg"

const testimonials = [
  {
    quote: "Une transformation incroyable de ma peau. L'équipe est professionnelle et attentionnée.",
    author: "Marie Dupont",
    role: "Patiente depuis 2 ans",
    company: "Traitement Laser",
    image: testimonialBg1,
  },
  {
    quote: "Des résultats naturels et durables. Je recommande vivement cette clinique.",
    author: "Sophie Martin",
    role: "Patiente régulière",
    company: "Injections",
    image: testimonialBg2,
  },
  {
    quote: "Un suivi personnalisé et des soins de qualité exceptionnelle.",
    author: "Claire Bernard",
    role: "Nouvelle patiente",
    company: "Soins Esthétiques",
    image: testimonialBg3,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const numberX = useTransform(x, [-200, 200], [-20, 20])
  const numberY = useTransform(y, [-200, 200], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  // Recrée un timer à chaque changement pour éviter les chevauchements et garder une rotation fluide
  useEffect(() => {
    const timer = window.setTimeout(goNext, 6000)
    return () => window.clearTimeout(timer)
  }, [activeIndex])

  const current = testimonials[activeIndex]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Ce que disent nos patients
          </h2>
        </motion.div>

        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[550px] overflow-hidden rounded-2xl"
        >
          {/* Background Image with overlay */}
          <AnimatePresence mode="sync">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={current.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </motion.div>
          </AnimatePresence>

          {/* Oversized index number */}
          <motion.div
            style={{ x: numberX, y: numberY }}
            className="absolute -left-8 md:-left-4 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          >
            <AnimatePresence mode="sync">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 0.1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[180px] md:text-[280px] font-bold text-white leading-none"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main content */}
          <div className="relative z-10 h-full flex">
            {/* Left column - vertical text */}
            <div className="hidden md:flex flex-col items-center justify-center w-16 border-r border-white/10">
              <span
                className="text-xs tracking-[0.3em] text-white/40 uppercase"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                Témoignages
              </span>

              {/* Vertical progress line */}
              <div className="relative h-24 w-px bg-white/10 mt-8">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-primary"
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  key={activeIndex}
                />
              </div>
            </div>

            {/* Center - main content */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
              {/* Company badge */}
              <AnimatePresence mode="sync">
                <motion.div
                  key={current.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm text-white/80">{current.company}</span>
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Quote with character reveal */}
              <div className="relative mb-12">
                <AnimatePresence mode="sync">
                  <motion.blockquote
                    key={current.quote}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed"
                  >
                    {current.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.3, delay: i * 0.025, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block mr-2"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author row */}
              <div className="flex items-center justify-between">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={current.author}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex items-center gap-4"
                  >
                    {/* Animated line before name */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-px bg-gradient-to-r from-primary to-transparent"
                    />
                    <div>
                      <p className="text-white font-medium">{current.author}</p>
                      <p className="text-white/50 text-sm">{current.role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={goPrev}
                    className="group relative w-12 h-12 flex items-center justify-center"
                    aria-label="Précédent"
                  >
                    <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors" />
                    <svg
                      className="w-5 h-5 text-white/60 group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={goNext}
                    className="group relative w-12 h-12 flex items-center justify-center"
                    aria-label="Suivant"
                  >
                    <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors" />
                    <svg
                      className="w-5 h-5 text-white/60 group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom ticker */}
          <div className="absolute bottom-0 left-0 right-0 h-12 border-t border-white/10 overflow-hidden">
            <motion.div
              animate={{ x: [0, -500] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute whitespace-nowrap flex items-center h-full text-white/20 text-sm tracking-widest"
            >
              {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8">
                  {testimonials.map((t) => t.company).join(" • ")} •
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
