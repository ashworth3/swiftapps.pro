"use client"

import { useCallback, useRef, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"

/** Matches sheet `data-[state=closed]:duration-300` + overlay teardown so scroll isn’t computed while body is locked */
const SCROLL_AFTER_CLOSE_MS = 360

const mobileLinks = [
  { href: "#apps", label: "Featured" },
  { href: "#copyboard", label: "CopyBoard" },
  { href: "#batteryclock", label: "BatteryClock" },
  { href: "#sendify", label: "Sendify" },
  { href: "#strength-ai", label: "Strength AI" },
  { href: "#hallmark-app", label: "Hallmark" },
  { href: "#contact", label: "Contact" },
] as const

const itemClass =
  "flex min-h-11 w-full items-center rounded-md px-0 text-left text-base text-muted-foreground transition-colors hover:bg-accent hover:text-foreground active:bg-accent/80"

function scrollPaddingTopPx(): number {
  const raw = getComputedStyle(document.documentElement).scrollPaddingTop
  const n = parseFloat(raw)
  return Number.isFinite(n) ? n : 76
}

export function NavbarMobileNav() {
  const [open, setOpen] = useState(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scrollToHash = useCallback((hash: string) => {
    const id = hash.startsWith("#") ? hash.slice(1) : hash
    const el = document.getElementById(id)
    if (!el) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const pad = scrollPaddingTopPx()
    const top = el.getBoundingClientRect().top + window.scrollY - pad

    window.scrollTo({
      top: Math.max(0, top),
      behavior: reduceMotion ? "auto" : "smooth",
    })
    window.history.replaceState(null, "", `#${id}`)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = null
    }
    setOpen(false)
    scrollTimeoutRef.current = setTimeout(() => {
      scrollTimeoutRef.current = null
      scrollToHash(href)
    }, SCROLL_AFTER_CLOSE_MS)
  }

  return (
    <div className="flex shrink-0 items-center md:hidden">
      <Sheet
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (next && scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current)
            scrollTimeoutRef.current = null
          }
        }}
      >
        <SheetTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-10 w-10 shrink-0"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" aria-hidden />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex h-full max-h-[100dvh] w-[min(100%,20rem)] flex-col gap-0 overflow-hidden p-0"
        >
          <div className="shrink-0 border-b border-border px-6 pb-4 pt-2 pr-14">
            <SheetHeader className="space-y-0 p-0 text-left">
              <SheetTitle className="text-left text-lg leading-tight">Apps</SheetTitle>
            </SheetHeader>
          </div>
          <nav
            className="flex min-h-0 flex-1 flex-col gap-0 overflow-y-auto overscroll-contain px-6 py-4"
            aria-label="App shortcuts"
          >
            {mobileLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={cn(itemClass)}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="shrink-0 border-t border-border px-6 py-4">
            <div className="flex min-h-11 items-center">
              <ThemeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
