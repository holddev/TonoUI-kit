export type PaletteColor = {
  name: string
  hex: string
  rgba: string
  hsl: string
}

export interface Palette {
  background: string
  foreground: string
  primary: string
  secondary: string
  accent: string
  muted: string
}