import { Button } from "@/components/ui/button"

export function CtaBand() {
  return (
    <section className="py-20 md:py-32 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent-foreground mb-8 text-balance">
          ¿Listo para tu Próxima Casa?
        </h2>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-12 py-8 h-auto font-bold"
        >
          Solicitar Garantía
        </Button>
      </div>
    </section>
  )
}
