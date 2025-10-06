import { Clock, UserX, Smartphone } from "lucide-react"
import { Card } from "@/components/ui/card"

const values = [
  {
    icon: Clock,
    title: "Garantía en 24hs",
    description: "Speed is our standard",
  },
  {
    icon: UserX,
    title: "Cero Favores",
    description: "No awkward family asks",
  },
  {
    icon: Smartphone,
    title: "Totalmente Digital",
    description: "App-style experience",
  },
]

export function ValueProps() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="p-8 md:p-10 text-center border-2 hover:border-accent transition-colors">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-accent" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-lg">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
