import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Juan",
    age: 28,
    quote: "Mejor que pedir favores a mi tío. En 24 horas tenía mi garantía aprobada.",
    rating: 5,
  },
  {
    name: "Martina",
    age: 32,
    quote: "Increíble lo fácil que fue. Solo con mi recibo de sueldo pude alquilar.",
    rating: 5,
  },
  {
    name: "Lucas",
    age: 26,
    quote: "Finalmente pude independizarme sin depender de nadie. Súper recomendado.",
    rating: 5,
  },
]

export function SocialProof() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Lo Que Dicen Nuestros Clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-2">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

              {/* Name and age */}
              <p className="font-bold text-foreground">
                {testimonial.name}, {testimonial.age}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
