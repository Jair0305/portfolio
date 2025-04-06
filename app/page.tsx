"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Layout, Lightbulb, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>

        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-gradient">Diseñando</span> experiencias digitales{" "}
                  <span className="text-gradient">memorables</span>
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Desarrollador web & diseñador UX/UI especializado en crear interfaces modernas, accesibles y de alto
                  rendimiento.
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contacto">
                    Contacto <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full">
                  <Link href="/portafolio">Ver Portafolio</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="blob h-[300px] w-[300px] md:h-[350px] md:w-[350px] bg-primary/20 animate-float"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[280px] w-[280px] md:h-[320px] md:w-[320px] rounded-full overflow-hidden border-4 border-background">
                    <Image src="/perfil.jpg" alt="Tu Nombre" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                Mis Servicios
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Lo que puedo hacer por ti</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Ofrezco soluciones digitales completas, desde el diseño hasta la implementación.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <motion.div
              className="glass-card card-hover rounded-xl p-6"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Layout className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Diseño UX/UI</h3>
              <p className="text-muted-foreground">
                Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.
              </p>
            </motion.div>
            <motion.div
              className="glass-card card-hover rounded-xl p-6"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Desarrollo Web</h3>
              <p className="text-muted-foreground">Sitios web y aplicaciones modernas con las últimas tecnologías.</p>
            </motion.div>
            <motion.div
              className="glass-card card-hover rounded-xl p-6"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Consultoría</h3>
              <p className="text-muted-foreground">Asesoramiento estratégico para optimizar tu presencia digital.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Listo para comenzar?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Contáctame para discutir cómo puedo ayudarte a llevar tu proyecto al siguiente nivel.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contacto">
                  Hablemos <Sparkles className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

