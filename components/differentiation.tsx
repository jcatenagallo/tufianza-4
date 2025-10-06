import { Check } from "lucide-react"

const differences = [
  "No pedimos propiedades",
  "Respuesta en horas, no semanas",
  "Sin letras chicas",
  "Proceso 100% online",
  "Aprobación basada en ingresos reales",
  "Sin comisiones ocultas",
]

export function Differentiation() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-foreground">Por Qué Somos Diferentes</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differences.map((difference, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 border-2 border-transparent hover:border-accent transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent-foreground" strokeWidth={3} />
                </div>
                <p className="text-xl font-semibold text-foreground pt-0.5">{difference}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
