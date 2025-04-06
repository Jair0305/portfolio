import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background w-full">
      <div className="container px-4 mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
          <div className="flex flex-col items-center sm:items-start space-y-3">
            <h3 className="text-lg font-semibold">Tu Nombre</h3>
            <p className="text-sm text-muted-foreground max-w-xs text-center sm:text-left">
              Desarrollador web & diseñador UX/UI. Creando experiencias digitales memorables desde 2020.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start md:items-center space-y-3">
            <h3 className="text-lg font-semibold">Enlaces</h3>
            <ul className="space-y-1 text-center sm:text-left md:text-center">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:col-span-2 md:col-span-1 md:items-end space-y-3">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-1 text-center sm:text-center md:text-right">
              <li>
                <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="w-full border-t"></div>
      
      <div className="container px-4 mx-auto">
        <div className="py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
          </div>
          <div className="text-sm text-muted-foreground">
            <span>Hecho con </span>
            <span className="text-red-500">❤️</span>
            <span> en México</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

