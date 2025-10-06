import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Aplicá",
    description: "Completá el formulario en 2 minutos con tu información de ingresos",
  },
  {
    number: "2",
    title: "Aprobación",
    description: "Recibí tu respuesta en menos de 24 horas",
  },
  {
    number: "3",
    title: "Mudáte",
    description: "Elegí tu propiedad y firmá el contrato con tu nueva garantía",
  },
]

export function Process() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-foreground">Así de Simple</h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Large number */}
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-6">
                    <span className="text-5xl font-bold text-primary-foreground">{step.number}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-foreground mb-4">{step.title}</h3>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-accent">
                    <ArrowRight className="w-8 h-8" strokeWidth={3} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
