import { Hero } from "@/components/hero"
import { AppShowcase } from "@/components/app-showcase"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Hero />
      <AppShowcase />
      <Contact />
      <Footer />
    </main>
  )
}
