"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Solución más segura para el scroll - removido el bloqueo que causaba problemas

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
        scrolled ? "bg-background/90 border-b shadow-sm" : "bg-background/70"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
            JCI
          </div>
          <span className="font-bold text-xl hidden sm:inline">Jair Chávez Islas</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6 text-sm font-medium mr-6">
            <Link href="/" className={`transition-colors hover:text-primary ${pathname === "/" ? "text-primary font-semibold" : ""}`}>
              Inicio
            </Link>
            <Link href="/contacto" className={`transition-colors hover:text-primary ${pathname === "/contacto" ? "text-primary font-semibold" : ""}`}>
              Contacto
            </Link>
            <Link href="/portafolio" className={`transition-colors hover:text-primary ${pathname === "/portafolio" ? "text-primary font-semibold" : ""}`}>
              Portafolio
            </Link>
          </nav>
          <ThemeToggle />
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-primary/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Rediseñado para mejor visibilidad y usabilidad */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="bg-background py-4">
            <nav className="container flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`p-2 rounded-md transition-colors ${pathname === "/" 
                  ? "bg-primary/20 text-primary font-semibold" 
                  : "hover:bg-muted"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/contacto" 
                className={`p-2 rounded-md transition-colors ${pathname === "/contacto" 
                  ? "bg-primary/20 text-primary font-semibold" 
                  : "hover:bg-muted"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link 
                href="/portafolio" 
                className={`p-2 rounded-md transition-colors ${pathname === "/portafolio" 
                  ? "bg-primary/20 text-primary font-semibold" 
                  : "hover:bg-muted"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Portafolio
              </Link>
            </nav>
          </div>
        </div>
      )}
    </motion.header>
  )
}

