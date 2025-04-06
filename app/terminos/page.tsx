import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col gap-8">
        <Link href="/" className="inline-flex items-center text-sm hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>

        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Términos y Condiciones</h1>
          <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString()}</p>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              Estos Términos y Condiciones ("Términos") rigen su acceso y uso de nuestro sitio web. Al acceder o
              utilizar el sitio web, usted acepta estar sujeto a estos Términos.
            </p>

            <h2>Uso del sitio</h2>
            <p>
              Usted puede utilizar nuestro sitio web solo para fines legítimos y de acuerdo con estos Términos. Usted
              acepta no utilizar nuestro sitio web:
            </p>
            <ul>
              <li>De cualquier manera que viole cualquier ley o regulación aplicable.</li>
              <li>Para explotar, dañar o intentar explotar o dañar nuestro sitio web.</li>
              <li>
                Para transmitir cualquier material que sea difamatorio, obsceno, indecente, ofensivo, o de otra manera
                objetable.
              </li>
            </ul>

            <h2>Propiedad intelectual</h2>
            <p>
              El sitio web y su contenido original, características y funcionalidad son y seguirán siendo propiedad
              exclusiva del propietario del sitio y sus licenciantes.
            </p>

            <h2>Enlaces a otros sitios web</h2>
            <p>
              Nuestro sitio web puede contener enlaces a sitios web de terceros que no son propiedad ni están
              controlados por nosotros. No tenemos control ni asumimos responsabilidad por el contenido, las políticas
              de privacidad o las prácticas de los sitios web de terceros.
            </p>

            <h2>Cambios a estos términos</h2>
            <p>
              Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en
              cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso con al menos 30 días de
              anticipación antes de que entren en vigor los nuevos términos.
            </p>

            <h2>Contacto</h2>
            <p>Si tiene alguna pregunta sobre estos Términos, contáctenos en tu@email.com.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

