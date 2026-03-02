"use client"

import { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const FORM_KEY = "xkovadyn"
const STORAGE_KEY = "strengthai-waitlist-joined"

export function GetUpdatesForm({ className }: { className?: string }) {
  const [state, handleSubmit] = useForm<{ email: string }>(FORM_KEY)
  const [rememberedJoin, setRememberedJoin] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (localStorage.getItem(STORAGE_KEY) === "true") setRememberedJoin(true)
  }, [])

  useEffect(() => {
    if (state.succeeded && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "true")
      setRememberedJoin(true)
    }
  }, [state.succeeded])

  if (state.succeeded || rememberedJoin) {
    return (
      <p className={cn("text-sm font-medium text-green-600 dark:text-green-400", className)}>
        You're in ✅
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col sm:flex-row gap-2 sm:items-stretch w-full max-w-md", className)}
      noValidate
    >
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <Label htmlFor="get-updates-email" className="sr-only">
          Email for updates
        </Label>
        <Input
          id="get-updates-email"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          disabled={state.submitting}
          autoComplete="email"
          aria-invalid={state.errors !== null}
          aria-describedby={state.errors ? "get-updates-email-error" : undefined}
          className="h-11 rounded-lg border-input bg-background focus-visible:ring-2"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          id="get-updates-email-error"
          className="text-sm text-destructive"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={state.submitting}
        className="shrink-0 h-11 rounded-lg px-6 sm:min-w-[7rem]"
      >
        {state.submitting ? "Sending…" : "Get Updates"}
      </Button>
    </form>
  )
}
