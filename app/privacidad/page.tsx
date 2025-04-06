import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col gap-8">
        <Link href="/" className="inline-flex items-center text-sm hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>

        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Política de Privacidad</h1>
          <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString()}</p>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              Esta Política de Privacidad describe cómo se recopila, utiliza y comparte su información cuando visita
              este sitio web.
            </p>

            <h2>Información que recopilamos</h2>
            <p>
              Cuando visita el sitio, recopilamos automáticamente cierta información sobre su dispositivo, incluida
              información sobre su navegador web, dirección IP, zona horaria y algunas de las cookies que están
              instaladas en su dispositivo.
            </p>

            <h2>Cómo utilizamos su información</h2>
            <p>Utilizamos la información que recopilamos para:</p>
            <ul>
              <li>Mantener nuestro sitio web funcionando</li>
              <li>Mejorar nuestro sitio web</li>
              <li>Entender y analizar cómo utiliza nuestro sitio web</li>
              <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
            </ul>

            <h2>Compartir su información</h2>
            <p>No compartimos su información personal con terceros.</p>

            <h2>Cambios</h2>
            <p>
              Podemos actualizar esta política de privacidad de vez en cuando para reflejar, por ejemplo, cambios en
              nuestras prácticas o por otras razones operativas, legales o reglamentarias.
            </p>

            <h2>Contáctenos</h2>
            <p>
              Para más información sobre nuestras prácticas de privacidad, si tiene preguntas o si desea presentar una
              queja, contáctenos por correo electrónico a tu@email.com.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

