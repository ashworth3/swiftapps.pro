import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Apple, Github, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4">
        <a
          href="https://github.com/ashworth3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit @ashworth3 on GitHub"
        >
          <Badge variant="secondary" className="mb-4">@ashworth3</Badge>
        </a>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Apps{" "}
          <span className="text-blue-600 dark:text-blue-400">by Andre</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Mac and iPhone apps, with more on the way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2" asChild>
            <a href="#apps">
              <Apple className="h-5 w-5" />
              View Apps
            </a>
          </Button>

          <Button variant="ghost" size="lg" className="gap-2" asChild>
            <a href="#contact">
              <Mail className="h-5 w-5" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
