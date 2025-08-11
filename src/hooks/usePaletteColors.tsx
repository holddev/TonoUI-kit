import { useState } from "react"
import type { Palette, PaletteColor } from "../types/types"
import { generatePalette, hexToHsl, hexToRgba } from "../utils/utils"

export function usePaletteColors(initialType = "random") {
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

  function regenerate() {
    setColors(buildPalette(generatePalette(paletteType)))
  }

  return { colors, paletteType, setPaletteType, regenerate }
}
