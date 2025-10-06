import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Particles } from "./ui/shadcn-io/particles";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Bold headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
            Tu Fianza
          </h1>

          {/* Punchy subhead */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground/90 mb-8 text-balance">
            Dejá de depender de garantes. Acá solo importa tu ingreso.
          </p>

          {/* Value prop */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Probá tu ingreso y nosotros nos convertimos en tu garante. Accedé a
            más de 120 propiedades sin pedir favores.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto font-bold"
            >
              Empezar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 h-auto font-semibold bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat Rápido
            </Button>
          </div>
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />
    </section>
  );
}
