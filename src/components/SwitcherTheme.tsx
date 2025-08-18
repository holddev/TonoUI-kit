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
        theme === "light" ? "bg-primary/30" : "bg-primary/80"
      )}
    >
      <div
        className={cn(
          "absolute size-6 rounded-full flex items-center justify-center transition-transform duration-500 shadow-md",
          theme === "light"
            ? "translate-x-1 text-primary bg-black/80"
            : "translate-x-9 text-blue-500 bg-black/80"
        )}
      >
        {theme === "light" ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
      </div>
    </button>
  )
}