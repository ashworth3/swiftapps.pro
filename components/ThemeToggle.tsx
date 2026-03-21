'use client'

import * as React from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2">
        <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="w-12 h-6 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Sun className={`h-5 w-5 transition-colors ${resolvedTheme === "light" ? "text-yellow-400" : "text-gray-400"}`} />
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
          resolvedTheme === "dark" ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
            resolvedTheme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
      <Moon className={`h-5 w-5 transition-colors ${resolvedTheme === "dark" ? "text-blue-400" : "text-gray-400"}`} />
    </div>
  )
}