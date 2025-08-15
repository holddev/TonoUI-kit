import { useEffect, useState } from "react"
import { ThemeContext } from "./ThemeContext"
import type { Themes } from "../types/types"


interface Props {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {

  const [theme, setTheme] = useState<Themes>("dark")

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.body.classList.remove(theme);
  }

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme])


  return (
    <ThemeContext value={{
      theme,
      toggleTheme
    }

    }>
      {children}
    </ThemeContext>
  )
}