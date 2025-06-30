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
              Swift developer focused on creating simple + powerful utilities that enhance productivity and
              user experience. All apps are open source and free to use.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/ashworth3" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:ashworthandre@gmail.com">
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
                <a href="#github-repos" className="hover:text-foreground transition-colors">
                  Repositories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://github.com/ashworth3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 <a href="#" className="underline hover:text-primary transition-colors">swiftapps.pro</a> | All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Made for</span>
            <Apple className="h-4 w-4" />
            <span>macOS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
