import { Hero } from "@/components/hero"
import { ValueProps } from "@/components/value-props"
import { Process } from "@/components/process"
import { Differentiation } from "@/components/differentiation"
import { SocialProof } from "@/components/social-proof"
import { CtaBand } from "@/components/cta-band"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProps />
      <Process />
      <Differentiation />
      <SocialProof />
      <CtaBand />
      <Footer />
    </main>
  )
}
