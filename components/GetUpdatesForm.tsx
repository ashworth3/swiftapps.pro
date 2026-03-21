"use client"

import { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const DEFAULT_STRENGTH_AI_FORM =
  process.env.NEXT_PUBLIC_FORMSPREE_STRENGTH_AI ?? "xkovadyn"
const DEFAULT_STRENGTH_AI_STORAGE = "strengthai-waitlist-joined"

export type GetUpdatesFormProps = {
  className?: string
  /** Formspree form id (from your Formspree dashboard, e.g. `abcxyz`) */
  formId?: string
  /** localStorage key so returning visitors see the success state */
  storageKey?: string
  messageOnSuccess?: string
  /** Unique id for the email input (required if multiple forms on one page) */
  emailFieldId?: string
  submitLabel?: string
}

export function GetUpdatesForm({
  className,
  formId = DEFAULT_STRENGTH_AI_FORM,
  storageKey = DEFAULT_STRENGTH_AI_STORAGE,
  messageOnSuccess = "You will receive updates related to Strength AI progress. ✅",
  emailFieldId = "get-updates-email",
  submitLabel = "Get Updates",
}: GetUpdatesFormProps) {
  const [state, handleSubmit] = useForm<{ email: string }>(formId)
  const [rememberedJoin, setRememberedJoin] = useState(false)
  const errorId = `${emailFieldId}-error`

  useEffect(() => {
    if (typeof window === "undefined") return
    if (localStorage.getItem(storageKey) === "true") setRememberedJoin(true)
  }, [storageKey])

  useEffect(() => {
    if (state.succeeded && typeof window !== "undefined") {
      localStorage.setItem(storageKey, "true")
      setRememberedJoin(true)
    }
  }, [state.succeeded, storageKey])

  if (state.succeeded || rememberedJoin) {
    return (
      <p className={cn("text-sm font-medium text-green-600 dark:text-green-400", className)}>
        {messageOnSuccess}
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
        <Label htmlFor={emailFieldId} className="sr-only">
          Email for updates
        </Label>
        <Input
          id={emailFieldId}
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          disabled={state.submitting}
          autoComplete="email"
          aria-invalid={state.errors !== null}
          aria-describedby={state.errors ? errorId : undefined}
          className="h-11 rounded-lg border-input bg-background focus-visible:ring-2"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          id={errorId}
          className="text-sm text-destructive"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={state.submitting}
        className="shrink-0 h-11 rounded-lg px-6 sm:min-w-[7rem]"
      >
        {state.submitting ? "Sending…" : submitLabel}
      </Button>
    </form>
  )
}
