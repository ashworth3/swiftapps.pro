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
    // Skeleton UI while the theme is being determined
    return (
      <div className="flex items-center justify-center gap-2">
        <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="w-12 h-6 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Sun className={`h-6 w-6 ${theme === "light" ? "text-yellow-500" : "text-gray-400"}`} />
      <input
        type="checkbox"
        className="appearance-none w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <Moon className={`h-6 w-6 ${theme === "dark" ? "text-blue-500" : "text-gray-400"}`} />
    </div>
  )
}