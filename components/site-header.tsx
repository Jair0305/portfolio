"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
        scrolled ? "bg-background/80 border-b shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
            JCI
          </div>
          <span className="font-bold text-xl">Jair Chávez Islas</span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium mr-6">
            <Link href="/" className="transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="/contacto" className="transition-colors hover:text-primary">
              Contacto
            </Link>
            <Link href="/portafolio" className="transition-colors hover:text-primary">
              Portafolio
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}

