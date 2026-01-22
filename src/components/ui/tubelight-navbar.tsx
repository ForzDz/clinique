"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollToTarget = (hash: string) => {
    if (!hash.startsWith("#")) return
    // Cas accueil : remonter en haut de page
    if (hash === "#" || hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      window.setTimeout(() => {
        window.location.hash = ""
      }, 150)
      return
    }
    const target = document.querySelector(hash)
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: "smooth" })
      // Màj du hash après le scroll pour compatibilité mobile
      window.setTimeout(() => {
        window.location.hash = hash
      }, 150)
    } else {
      window.location.hash = hash
    }
  }

  const handleNavClick = (item: NavItem, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault()
    }
    setActiveTab(item.name)
    setIsMenuOpen(false)
    scrollToTarget(item.url)
  }

  return (
    <>
      {/* Barre principale "tubelight" */}
      <div
        className={cn(
          "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6 pointer-events-auto",
          className
        )}
      >
        <div className="flex items-center gap-1 md:gap-3 bg-background/80 border border-border backdrop-blur-lg py-2 px-2 rounded-full shadow-lg max-w-[95vw]">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={(e) => handleNavClick(item, e)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-4 md:px-6 py-2.5 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary"
                )}
                style={{ touchAction: "manipulation" }}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={24} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            )
          })}
        </div>
      </div>

      {/* Bouton hamburger mobile */}
      {isMobile && (
        <>
          <button
            type="button"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="fixed top-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full rounded-full bg-white transition-transform duration-200",
                  isMenuOpen ? "top-1/2 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full rounded-full bg-white transition-opacity duration-200",
                  isMenuOpen ? "top-1/2 opacity-0" : "top-1/2 opacity-100 -translate-y-1/2"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full rounded-full bg-white transition-transform duration-200",
                  isMenuOpen ? "top-1/2 -rotate-45" : "bottom-0"
                )}
              />
            </div>
          </button>

          {/* Overlay */}
          {isMenuOpen && (
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
            />
          )}

          {/* Menu déroulant mobile */}
          <motion.nav
            initial={false}
            animate={isMenuOpen ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl border border-border bg-background/95 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col divide-y divide-border/60">
              {items.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name

                return (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      onClick={(e) => handleNavClick(item, e)}
                      className={cn(
                        "flex items-center gap-3 px-5 py-4 text-lg font-medium",
                        "text-foreground/80 hover:bg-muted/80 hover:text-primary",
                        isActive && "text-primary"
                      )}
                    >
                      <Icon size={22} strokeWidth={2.2} className="text-muted-foreground" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.nav>
        </>
      )}
    </>
  )
}
