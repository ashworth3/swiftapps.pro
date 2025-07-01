'use client'

import * as React from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark" | null>(null)

  React.useEffect(() => {
    const initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  if (theme === null) {
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
      <Sun className={`h-5 w-5 transition-colors ${theme === "light" ? "text-yellow-400" : "text-gray-400"}`} />
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
      <Moon className={`h-5 w-5 transition-colors ${theme === "dark" ? "text-blue-400" : "text-gray-400"}`} />
    </div>
  )
}