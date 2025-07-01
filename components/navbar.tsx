import { ThemeToggle } from "@/components/ThemeToggle"

export function Navbar() {
  return (
    <nav className="border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors">
            <img src="/favicon-32x32.png" alt="swiftapps.pro logo" className="h-8 w-8" />
            swiftapps.pro
          </a>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}