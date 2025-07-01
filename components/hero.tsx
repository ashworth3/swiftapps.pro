import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Apple, Github, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <a href="https://github.com/ashworth3" target="_blank" rel="noopener noreferrer">
          <Badge variant="secondary" className="mb-4">@ashworth3</Badge>
        </a>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Building Essential
          <span className="text-blue-600 dark:text-blue-400"> Swift Apps</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Crafting lightweight, powerful utilities that enhance your Mac experience. Every app is designed with
          simplicity and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button size="lg" className="gap-2" asChild>
            <a href="#apps">
              <Apple className="h-5 w-5" />
              View Apps
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
            <a href="https://github.com/ashworth3" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
            <a href="#contact">
              <Mail className="h-5 w-5" />
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
