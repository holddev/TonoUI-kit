import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "../hooks/useTheme"
import { cn } from "../utils/utils"

export const SwitcherTheme = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-16 h-8 flex items-center rounded-full cursor-pointer transition-colors duration-500",
        theme === "light" ? "bg-yellow-900" : "bg-blue-900"
      )}
    >
      <div
        className={cn(
          "absolute size-6 rounded-full flex items-center justify-center transition-transform duration-500 shadow-md",
          theme === "light"
            ? "translate-x-1 bg-yellow-500 text-gray-800"
            : "translate-x-9 bg-blue-500 text-white"
        )}
      >
        {theme === "light" ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
      </div>
    </button>
  )
}