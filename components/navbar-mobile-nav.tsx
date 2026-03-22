"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

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

export function NavbarMobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex shrink-0 items-center md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
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
        <SheetContent side="right" className="flex w-[min(100%,20rem)] flex-col gap-0 p-0">
          <div className="border-b border-border px-6 pb-4 pt-2 pr-14">
            <SheetHeader className="space-y-0 p-0 text-left">
              <SheetTitle className="text-left text-lg leading-tight">Apps</SheetTitle>
            </SheetHeader>
          </div>
          <nav className="flex flex-1 flex-col gap-0 px-6 py-4" aria-label="App shortcuts">
            {mobileLinks.map(({ href, label }) => (
              <a key={href} href={href} className={cn(itemClass)} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
