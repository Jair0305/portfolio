"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Mail,
  Phone,
  Globe,
  Send,
  Download,
  MapPin,
  ExternalLink,
  Calendar,
  Video,
  Clock,
  Smartphone,
  LinkIcon,
  UserPlus,
} from "lucide-react"
// Importamos los iconos oficiales de react-icons
import {
  FaWhatsapp,
  FaTelegram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitch,
  FaSpotify,
  FaSnapchatGhost,
  FaDiscord,
  FaRedditAlien,
  FaPatreon,
  FaMediumM,
  FaTiktok,
} from "react-icons/fa"
import { SiThreads, SiMastodon, SiNotion, SiSubstack, SiBuymeacoffee, SiKofi } from "react-icons/si"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé pronto.",
      })
      setName("")
      setEmail("")
      setMessage("")
      setIsSubmitting(false)
      setShowContactForm(false)
    }, 1500)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section with Profile */}
      <section className="relative pt-8 pb-12 px-4">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 right-0 h-[70vh] bg-gradient-to-b from-primary/10 via-background to-background -z-10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>

        <div className="container max-w-4xl">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-6">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-purple-600 blur opacity-70"></div>
              <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-background">
                <Image src="/1720892144589.jpg" alt="Foto de perfil" fill className="object-cover" priority />
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-2">Tu Nombre</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">Desarrollador web & diseñador UX/UI</p>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
              <MapPin className="h-4 w-4" />
              <span>Ciudad de México, México</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <SocialButton icon={<Mail />} href="mailto:tu@email.com" label="Email" />
              <SocialButton icon={<Phone />} href="tel:+123456789" label="Llamar" />
              <SocialButton icon={<Calendar />} href="https://calendly.com/tuusuario" label="Agendar" />
              <SocialButton icon={<LinkIcon />} href="#redes" label="Redes" />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button
                onClick={() => setShowContactForm(!showContactForm)}
                className="rounded-full"
                variant={showContactForm ? "secondary" : "default"}
              >
                {showContactForm ? "Cerrar formulario" : "Enviar mensaje"}
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="/tu-cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="/vcard.vcf" download>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Añadir contacto
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form (Collapsible) */}
      <AnimatePresence>
        {showContactForm && (
          <motion.section
            className="py-6 px-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container max-w-md">
              <Card className="glass-card overflow-hidden border-0 shadow-lg">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre"
                        required
                        className="rounded-lg border-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        required
                        className="rounded-lg border-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="¿En qué puedo ayudarte?"
                        rows={4}
                        required
                        className="rounded-lg border-primary/20"
                      />
                    </div>
                    <Button type="submit" className="w-full rounded-lg" disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Información de Contacto y Redes Sociales */}
      <section className="py-6 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Contacto Directo</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <ContactCard
              icon={<Phone className="h-5 w-5 text-primary" />}
              title="Teléfono"
              value="+12 345 6789"
              href="tel:+123456789"
            />
            <ContactCard
              icon={<Mail className="h-5 w-5 text-primary" />}
              title="Email"
              value="tu@email.com"
              href="mailto:tu@email.com"
            />
            <ContactCard
              icon={<FaWhatsapp className="h-5 w-5 text-[#25D366]" />}
              title="WhatsApp"
              value="+12 345 6789"
              href="https://wa.me/1234567890"
            />
            <ContactCard
              icon={<FaTelegram className="h-5 w-5 text-[#0088cc]" />}
              title="Telegram"
              value="@tuusuario"
              href="https://t.me/tuusuario"
            />
            <ContactCard
              icon={<Video className="h-5 w-5 text-[#2D8CFF]" />}
              title="Zoom"
              value="Agendar reunión"
              href="https://zoom.us/j/tuenlace"
            />
            <ContactCard
              icon={<Calendar className="h-5 w-5 text-[#00a2ff]" />}
              title="Calendly"
              value="Agendar cita"
              href="https://calendly.com/tuusuario"
            />
            <ContactCard
              icon={<MapPin className="h-5 w-5 text-[#EA4335]" />}
              title="Ubicación"
              value="Ciudad de México, México"
              href="https://maps.google.com/?q=Ciudad+de+México"
            />
            <ContactCard icon={<Clock className="h-5 w-5 text-primary" />} title="Horario" value="Lun-Vie: 9AM-6PM" />
            <ContactCard
              icon={<Smartphone className="h-5 w-5 text-[#00AFF0]" />}
              title="Skype"
              value="live:tuusuario"
              href="skype:live:tuusuario?chat"
            />
          </div>

          <h2 id="redes" className="text-2xl font-bold mb-6 text-center">
            Redes Sociales
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mb-12">
            <SocialCard
              icon={<FaLinkedinIn className="h-5 w-5 text-[#0077B5]" />}
              title="LinkedIn"
              username="@tuusuario"
              href="https://linkedin.com/in/tuusuario"
            />
            <SocialCard
              icon={<FaGithub className="h-5 w-5" />}
              title="GitHub"
              username="@tuusuario"
              href="https://github.com/tuusuario"
            />
            <SocialCard
              icon={<FaTwitter className="h-5 w-5 text-[#1DA1F2]" />}
              title="Twitter"
              username="@tuusuario"
              href="https://twitter.com/tuusuario"
            />
            <SocialCard
              icon={<FaInstagram className="h-5 w-5 text-[#E1306C]" />}
              title="Instagram"
              username="@tuusuario"
              href="https://instagram.com/tuusuario"
            />
            <SocialCard
              icon={<FaFacebookF className="h-5 w-5 text-[#1877F2]" />}
              title="Facebook"
              username="@tuusuario"
              href="https://facebook.com/tuusuario"
            />
            <SocialCard
              icon={<SiThreads className="h-5 w-5 text-black dark:text-white" />}
              title="Threads"
              username="@tuusuario"
              href="https://threads.net/@tuusuario"
            />
            <SocialCard
              icon={<FaTiktok className="h-5 w-5 text-[#000000]" />}
              title="TikTok"
              username="@tuusuario"
              href="https://tiktok.com/@tuusuario"
            />
            <SocialCard
              icon={<FaYoutube className="h-5 w-5 text-[#FF0000]" />}
              title="YouTube"
              username="@tucanal"
              href="https://youtube.com/@tucanal"
            />
            <SocialCard
              icon={<FaTwitch className="h-5 w-5 text-[#9146FF]" />}
              title="Twitch"
              username="@tuusuario"
              href="https://twitch.tv/tuusuario"
            />
            <SocialCard
              icon={<FaSpotify className="h-5 w-5 text-[#1DB954]" />}
              title="Spotify"
              username="Mi Música"
              href="https://open.spotify.com/user/tuusuario"
            />
            <SocialCard
              icon={<FaSnapchatGhost className="h-5 w-5 text-[#FFFC00]" />}
              title="Snapchat"
              username="@tuusuario"
              href="https://snapchat.com/add/tuusuario"
            />
            <SocialCard
              icon={<SiMastodon className="h-5 w-5 text-[#6364FF]" />}
              title="Mastodon"
              username="@tu@instancia.social"
              href="https://instancia.social/@tuusuario"
            />
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">Contenido y Más</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <SocialCard
              icon={<SiNotion className="h-5 w-5 text-black dark:text-white" />}
              title="Notion"
              username="Mi Blog"
              href="https://tuusuario.notion.site"
            />
            <SocialCard
              icon={<FaMediumM className="h-5 w-5 text-[#000000]" />}
              title="Medium"
              username="Artículos"
              href="https://medium.com/@tuusuario"
            />
            <SocialCard
              icon={<SiSubstack className="h-5 w-5 text-[#FF6719]" />}
              title="Substack"
              username="Newsletter"
              href="https://tuusuario.substack.com"
            />
            <SocialCard
              icon={<FaDiscord className="h-5 w-5 text-[#5865F2]" />}
              title="Discord"
              username="@usuario"
              href="https://discord.gg/tuservidor"
            />
            <SocialCard
              icon={<FaRedditAlien className="h-5 w-5 text-[#FF4500]" />}
              title="Reddit"
              username="u/tuusuario"
              href="https://reddit.com/user/tuusuario"
            />
            <SocialCard
              icon={<Globe className="h-5 w-5 text-primary" />}
              title="Sitio Web"
              username="tudominio.com"
              href="https://tudominio.com"
            />
            <SocialCard
              icon={<SiKofi className="h-5 w-5 text-[#FF5E5B]" />}
              title="Ko-fi"
              username="Apóyame"
              href="https://ko-fi.com/tuusuario"
            />
            <SocialCard
              icon={<FaPatreon className="h-5 w-5 text-[#F96854]" />}
              title="Patreon"
              username="Suscríbete"
              href="https://patreon.com/tuusuario"
            />
            <SocialCard
              icon={<SiBuymeacoffee className="h-5 w-5 text-[#FFDD00]" />}
              title="Buy Me a Coffee"
              username="Invítame un café"
              href="https://buymeacoffee.com/tuusuario"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 px-4 mt-2 mb-8">
        <div className="container max-w-2xl mx-auto">
          <Card className="bg-primary/10 glass-card overflow-hidden border-0 shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">Sobre mí</h2>
              <p className="text-muted-foreground text-center">
                Desarrollador web y diseñador UX/UI con pasión por crear experiencias digitales memorables.
                Especializado en interfaces modernas, accesibles y de alto rendimiento.
              </p>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="/portafolio">
                    Ver mi portafolio
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

// Component for social buttons at the top
function SocialButton({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-10 px-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
    >
      <span className="mr-2">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  )
}

// Component for contact cards
function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode
  title: string
  value: string
  href?: string
}) {
  const content = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">{icon}</div>
      <div className="ml-3">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </>
  )

  return (
    <Card className="glass-card overflow-hidden border-0 hover:shadow-md transition-all">
      <CardContent className="p-4 flex items-center">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full hover:text-primary transition-colors"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </CardContent>
    </Card>
  )
}

// Component for social media cards
function SocialCard({
  icon,
  title,
  username,
  href,
}: {
  icon: React.ReactNode
  title: string
  username: string
  href: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="glass-card overflow-hidden border-0 hover:bg-primary/5 hover:shadow-md transition-all">
        <CardContent className="p-4 flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">{icon}</div>
          <div className="ml-3">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">{username}</p>
          </div>
          <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
        </CardContent>
      </Card>
    </a>
  )
}

