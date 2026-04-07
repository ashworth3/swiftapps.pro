import { ThemeToggle } from "@/components/ThemeToggle"
import { NavbarMobileNav } from "@/components/navbar-mobile-nav"
import { cn } from "@/lib/utils"

const appNavLinks = [
  { href: "#apps", label: "Featured" },
  { href: "#copyboard", label: "CopyBoard" },
  { href: "#batteryclock", label: "BatteryClock" },
  { href: "#sendify", label: "Sendify" },
  { href: "#strength-ai", label: "Strength AI" },
  { href: "#hallmark-app", label: "Hallmark OC" },
] as const

const linkClass =
  "text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap shrink-0 text-sm"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 min-h-14 w-full items-center gap-2 sm:gap-3">
          <a
            href="/"
            className="flex min-w-0 shrink-0 items-center gap-2 text-base sm:text-lg font-semibold hover:text-primary transition-colors"
          >
            <img src="/favicon-32x32.png" alt="swiftapps.pro logo" className="h-7 w-7 sm:h-8 sm:w-8 shrink-0" />
            <span className="truncate max-w-[9rem] sm:max-w-none">swiftapps.pro</span>
          </a>

          {/* Desktop / tablet: inline links */}
          <div
            className={cn(
              "hidden md:flex flex-1 min-w-0 items-center justify-center gap-6 px-4",
              "overflow-x-auto",
              "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            )}
            aria-label="App shortcuts"
          >
            {appNavLinks.map(({ href, label }) => (
              <a key={href} href={href} className={linkClass}>
                {label}
              </a>
            ))}
            <a href="#contact" className={linkClass}>
              Contact
            </a>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <NavbarMobileNav />
            <div className="flex shrink-0 items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
