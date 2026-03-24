import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Apple, Github, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building fast, lightweight apps and utilities across the Apple ecosystem, designed to stay out of your way and improve your day-to-day flow.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/ashworth3" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:andre@hallmarkoc.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Apps</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#batteryclock" className="hover:text-foreground transition-colors">
                  BatteryClock
                </a>
              </li>
              <li>
                <a href="#copyboard" className="hover:text-foreground transition-colors">
                  CopyBoard
                </a>
              </li>
              <li>
                <a href="#hallmark-app" className="hover:text-foreground transition-colors">
                  Hallmark
                </a>
              </li>
              <li>
                <a href="#sendify" className="hover:text-foreground transition-colors">
                  Sendify
                </a>
              </li>
              <li>
                <a href="#strength-ai" className="hover:text-foreground transition-colors">
                  Strength AI
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:andre@hallmarkoc.com" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy/strengthai" className="hover:text-foreground transition-colors">
                  Strength AI Privacy
                </Link>
              </li>
              <li>
                <Link href="/privacy/sendify" className="hover:text-foreground transition-colors">
                  Sendify Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="underline hover:text-primary transition-colors">
              swiftapps.pro
            </a>{" "}
            | All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Made for the Apple ecosystem</span>
            <Apple className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  )
}
