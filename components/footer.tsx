import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Contact section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6">Contactanos</h3>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>

          {/* Social media */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#" className="hover:text-accent transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Preguntas Frecuentes
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/70">
            <p>© 2025 Garantía Digital. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
