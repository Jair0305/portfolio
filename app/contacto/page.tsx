"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
  ChevronDown,
  ChevronUp,
  Share2,
  Copy,
  X,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [activeTab, setActiveTab] = useState("contacto")
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

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

  const handleShareProfile = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Jair Chávez Islas - Desarrollador Web",
          text: "Conecta conmigo 👋",
          url: window.location.href,
        })
      } catch (error) {
        console.error("Error al compartir:", error)
      }
    } else {
      handleCopyLink()
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    
    toast({
      title: "¡Enlace copiado!",
      description: "Ya puedes compartir mi información de contacto.",
    })
    
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section with Profile - Simplified */}
      <section className="relative py-12 px-4">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-primary/10 via-background to-background -z-10"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50 -z-10"></div>

        <div className="container max-w-4xl">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-8">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-purple-600 blur opacity-70"></div>
              <motion.div 
                className="relative h-56 w-56 md:h-56 md:w-56 rounded-full overflow-hidden border-4 border-background"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src="/1720892144589.jpg" alt="Foto de perfil" fill className="object-cover" priority />
              </motion.div>
              {mounted && (
                <motion.button
                  className="absolute bottom-3 right-0 bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-md border border-primary/20"
                  onClick={handleShareProfile}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {copied ? <Copy className="h-5 w-5 text-green-500" /> : <Share2 className="h-5 w-5 text-primary" />}
                </motion.button>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold mb-1">Jair Chávez Islas</h1>
              <p className="text-base text-muted-foreground max-w-md">
                Conéctate conmigo - Disponible para nuevas oportunidades
              </p>
              <p className="text-sm text-primary font-medium mb-2">Desarrollador Web Full Stack</p>
              
              <Badge variant="outline" className="mb-3 mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                <span>Irapuato, Gto, México</span>
              </Badge>
            </motion.div>

            {/* Main Action Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={() => setShowContactForm(!showContactForm)}
                className="rounded-full px-6 py-2 flex items-center"
                size="lg"
              >
                {showContactForm ? "Cerrar" : "Enviarme un mensaje"}
                {showContactForm ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div 
              className="grid grid-cols-5 gap-4 max-w-sm mx-auto w-full pb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <ActionButton 
                icon={<FaWhatsapp className="text-[#25D366]" />} 
                href="https://wa.me/524622459648" 
                label="WA" 
                delay={0.1}
              />
              <ActionButton 
                icon={<Phone />} 
                href="tel:+524622459648" 
                label="Llamar" 
                delay={0.2}
              />
              <ActionButton 
                icon={<Mail />} 
                href="mailto:chamaco_03@hotmail.es" 
                label="Email" 
                delay={0.3}
              />
              <ActionButton 
                icon={<UserPlus />} 
                href="/vcard.vcf" 
                download 
                label="Añadir" 
                delay={0.4}
              />
              <ActionButton 
                icon={<Download />} 
                href="/CV_Chavez-Islas-Jair.pdf" 
                download 
                label="CV" 
                delay={0.5}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form (Collapsible) */}
      <AnimatePresence>
        {showContactForm && (
          <motion.section
            className="py-4 px-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container max-w-md">
              <Card className="glass-card overflow-hidden border-primary/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Envíame un mensaje</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Respondo rápido, ¡promesa!
                  </p>
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
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Tabs for Contact Methods */}
      <section className="py-6 px-4">
        <div className="container max-w-4xl">
          <Tabs defaultValue="contacto" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-6 sticky top-16 z-30 bg-background/80 backdrop-blur-sm">
              <TabsTrigger 
                value="contacto" 
                className="data-[state=active]:bg-primary/20 px-1 sm:px-2 md:px-4 text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Contacto</span><span className="sm:hidden">Contacto</span>
              </TabsTrigger>
              <TabsTrigger 
                value="redes" 
                className="data-[state=active]:bg-primary/20 px-1 sm:px-2 md:px-4 text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Redes Sociales</span><span className="sm:hidden">Redes</span>
              </TabsTrigger>
              <TabsTrigger 
                value="contenido" 
                className="data-[state=active]:bg-primary/20 px-1 sm:px-2 md:px-4 text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Contenido</span><span className="sm:hidden">Contenido</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="contacto" className="mt-0">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ContactCard
                  icon={<Phone className="h-5 w-5 text-primary" />}
                  title="Teléfono"
                  value="+52 462 245 9648"
                  href="tel:+524622459648"
                  delay={0.1}
                />
                <ContactCard
                  icon={<Mail className="h-5 w-5 text-primary" />}
                  title="Email"
                  value="chamaco_03@hotmail.es"
                  href="mailto:chamaco_03@hotmail.es"
                  delay={0.2}
                />
                <ContactCard
                  icon={<FaWhatsapp className="h-5 w-5 text-[#25D366]" />}
                  title="WhatsApp"
                  value="+52 462 245 9648"
                  href="https://wa.me/524622459648"
                  delay={0.3}
                />
                <ContactCard
                  icon={<FaTelegram className="h-5 w-5 text-[#0088cc]" />}
                  title="Telegram"
                  value="@Jair0305"
                  href="https://t.me/Jair0305"
                  delay={0.4}
                />
                {/* <ContactCard
                  icon={<Video className="h-5 w-5 text-[#2D8CFF]" />}
                  title="Zoom"
                  value="Agendar reunión"
                  href="https://zoom.us/j/tuenlace"
                /> */}
                {/* <ContactCard
                  icon={<Calendar className="h-5 w-5 text-[#00a2ff]" />}
                  title="Calendly"
                  value="Agendar cita"
                  href="https://calendly.com/tuusuario"
                /> */}
                <ContactCard
                  icon={<MapPin className="h-5 w-5 text-[#EA4335]" />}
                  title="Ubicación"
                  value="Irapuato, Gto, México"
                  href="https://maps.google.com/?q=Irapuato+Guanajuato+Mexico"
                  delay={0.5}
                />
                <ContactCard 
                  icon={<Clock className="h-5 w-5 text-primary" />} 
                  title="Horario" 
                  value="Lun-Sab: 9AM - 9PM"
                  delay={0.6} 
                />
                {/* <ContactCard
                  icon={<Smartphone className="h-5 w-5 text-[#00AFF0]" />}
                  title="Skype"
                  value="live:tuusuario"
                  href="skype:live:tuusuario?chat"
                /> */}
              </div>
            </TabsContent>
            
            <TabsContent value="redes" className="mt-0">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <SocialCard
                  icon={<FaLinkedinIn className="h-5 w-5 text-[#0077B5]" />}
                  title="LinkedIn"
                  username="Jair Chávez Islas"
                  href="https://www.linkedin.com/in/jair-ch%C3%A1vez-islas-a4283820a/"
                  delay={0.1}
                />
                <SocialCard
                  icon={<FaGithub className="h-5 w-5" />}
                  title="GitHub"
                  username="Jair0305"
                  href="https://github.com/Jair0305"
                  delay={0.2}
                />
                <SocialCard
                  icon={<FaTwitter className="h-5 w-5 text-[#1DA1F2]" />}
                  title="Twitter"
                  username="Jair65224491"
                  href="https://x.com/Jair65224491"
                  delay={0.3}
                />
                <SocialCard
                  icon={<FaInstagram className="h-5 w-5 text-[#E1306C]" />}
                  title="Instagram"
                  username="Jairci305"
                  href="https://www.instagram.com/jairci305/"
                  delay={0.4}
                />
                <SocialCard
                  icon={<FaFacebookF className="h-5 w-5 text-[#1877F2]" />}
                  title="Facebook"
                  username="Jair Chávez Islas"
                  href="https://www.facebook.com/jair.chavezislas.79/"
                  delay={0.5}
                />
                <SocialCard
                  icon={<SiThreads className="h-5 w-5 text-black dark:text-white" />}
                  title="Threads"
                  username="Jair0305"
                  href="https://www.threads.net/@jairci305"
                  delay={0.6}
                />
                <SocialCard
                  icon={<FaTiktok className="h-5 w-5 text-[#000000]" />}
                  title="TikTok"
                  username="Jair Chávez Islas"
                  href="https://www.tiktok.com/@jairchavezislas"
                  delay={0.7}
                />
                <SocialCard
                  icon={<FaYoutube className="h-5 w-5 text-[#FF0000]" />}
                  title="YouTube"
                  username="Jair Chávez Islas"
                  href="https://www.youtube.com/@jairchavez796"
                  delay={0.8}
                />
                <SocialCard
                  icon={<FaDiscord className="h-5 w-5 text-[#5865F2]" />}
                  title="Discord"
                  username="@Jair0305"
                  delay={0.9}
                />
                {/* <SocialCard
                  icon={<FaTwitch className="h-5 w-5 text-[#9146FF]" />}
                  title="Twitch"
                  username="@tuusuario"
                  href="https://twitch.tv/tuusuario"
                /> */}
                {/* <SocialCard
                  icon={<FaSpotify className="h-5 w-5 text-[#1DB954]" />}
                  title="Spotify"
                  username="Jair Chávez Islas"
                  href="https://open.spotify.com/user/12122133948"
                /> */}
                {/* <SocialCard
                  icon={<FaSnapchatGhost className="h-5 w-5 text-[#FFFC00]" />}
                  title="Snapchat"
                  username="@tuusuario"
                  href="https://snapchat.com/add/tuusuario"
                /> */}
                {/* <SocialCard
                  icon={<SiMastodon className="h-5 w-5 text-[#6364FF]" />}
                  title="Mastodon"
                  username="@tu@instancia.social"
                  href="https://instancia.social/@tuusuario"
                /> */}
              </div>
            </TabsContent>
            
            <TabsContent value="contenido" className="mt-0">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <SocialCard
                  icon={<SiNotion className="h-5 w-5 text-black dark:text-white" />}
                  title="Notion"
                  username="Mi Blog"
                  href="https://tuusuario.notion.site"
                  delay={0.1}
                />
                <SocialCard
                  icon={<FaMediumM className="h-5 w-5 text-[#000000]" />}
                  title="Medium"
                  username="Artículos"
                  href="https://medium.com/@jairchvezislas"
                  delay={0.2}
                />
                {/* <SocialCard
                  icon={<SiSubstack className="h-5 w-5 text-[#FF6719]" />}
                  title="Substack"
                  username="Newsletter"
                  href="https://tuusuario.substack.com"
                /> */}
                <SocialCard
                  icon={<Globe className="h-5 w-5 text-primary" />}
                  title="Sitio Web"
                  username="Portafolio"
                  href="https://jair.passify.tech"
                  delay={0.3}
                />
                <SocialCard
                  icon={<SiKofi className="h-5 w-5 text-[#FF5E5B]" />}
                  title="Ko-fi"
                  username="Apóyame"
                  href="https://ko-fi.com/jairchavezislas"
                  delay={0.4}
                />
                {/* <SocialCard
                  icon={<FaPatreon className="h-5 w-5 text-[#F96854]" />}
                  title="Patreon"
                  username="Suscríbete"
                  href="https://patreon.com/tuusuario"
                /> */}
                <SocialCard
                  icon={<SiBuymeacoffee className="h-5 w-5 text-[#FFDD00]" />}
                  title="Buy Me a Coffee"
                  username="Invítame un café"
                  href="https://buymeacoffee.com/chamaco03o"
                  delay={0.5}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Mini About Section */}
      <section className="py-6 px-4 mb-8">
        <div className="container max-w-2xl mx-auto">
          <Card className="bg-primary/5 glass-card overflow-hidden border-0 shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground text-center">
                Desarrollador web y diseñador UX/UI con pasión por crear experiencias digitales memorables.
              </p>
              <div className="mt-4 flex justify-center">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full hover:bg-primary/10 transition-colors" 
                  asChild
                >
                  <Link href="/portafolio">
                    Ver mi portafolio
                    <ExternalLink className="ml-2 h-3 w-3" />
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

// Component for action buttons at the top
function ActionButton({ 
  icon, 
  href, 
  label, 
  download,
  delay = 0 
}: { 
  icon: React.ReactNode
  href: string
  label: string
  download?: boolean
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        target={download ? "_self" : "_blank"}
        rel="noopener noreferrer"
        download={download}
        className="flex flex-col items-center justify-center p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors w-full"
      >
        <div className="h-8 w-8 flex items-center justify-center text-lg mb-1">
          {icon}
        </div>
        <span className="text-xs font-medium text-center">{label}</span>
      </a>
    </motion.div>
  )
}

// Component for social buttons at the top (kept for reference)
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
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  value: string
  href?: string
  delay?: number
}) {
  const content = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">{icon}</div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
      {href && <ExternalLink className="h-4 w-4 text-muted-foreground ml-2 flex-shrink-0" />}
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -2 }}
    >
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
    </motion.div>
  )
}

// Component for social media cards
function SocialCard({
  icon,
  title,
  username,
  href,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  username: string
  href?: string
  delay?: number
}) {
  const content = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">{icon}</div>
      <div className="ml-2 flex-1 overflow-hidden">
        <p className="text-xs font-medium truncate">{title}</p>
        <p className="text-xs text-muted-foreground truncate">{username}</p>
      </div>
      {href && <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto flex-shrink-0" />}
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <Card className="glass-card overflow-hidden border-0 hover:bg-primary/5 hover:shadow-sm transition-all">
        <CardContent className="p-3 flex items-center">
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
    </motion.div>
  )
}

