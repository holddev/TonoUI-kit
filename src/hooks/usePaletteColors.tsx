import { useEffect, useState } from "react"
import type { Palette, PaletteColor, Themes } from "../types/types"
import { generatePalette, hexToHsl, hexToRgba } from "../utils/utils"

export function usePaletteColors(initialType = "random", theme: Themes = 'light') {
  const [paletteType, setPaletteType] = useState(initialType)
  const [colors, setColors] = useState<PaletteColor[]>(() =>
    buildPalette(generatePalette(initialType))
  )

  function buildPalette(generated: Palette) {
    return Object.entries(generated).map(([name, hex]) => ({
      name,
      hex,
      rgba: hexToRgba(hex),
      hsl: hexToHsl(hex)
    }))
  }

  useEffect(() => {
    setColors(buildPalette(generatePalette(paletteType, theme)))
  }, [paletteType, theme])

  function regenerate() {
    setColors(buildPalette(generatePalette(paletteType, theme)))
  }

  return { colors, paletteType, setPaletteType, regenerate }
}
