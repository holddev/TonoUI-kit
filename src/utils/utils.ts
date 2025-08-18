import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Palette, Themes } from "../types/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error("Failed to copy text: ", error)
    return false
  }
}

export const getTextColor = (hex: string) => {
  const cleanHex = hex.replace("#", "");

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "#090909" : "#e4e4e4";
}

export const invertTextColor = (color: string) => {

  if (color.toLowerCase() === "#090909") return "#e4e4e4";
  if (color.toLowerCase() === "#e4e4e4") return "#090909";

  return color;
}

// Conversion de colores
const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100
  const a = s * Math.min(l, 1 - l) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color).toString(16).padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

export const hexToRgba = (hex: string) => {
  const cleanHex = hex.replace("#", "")
  const r = parseInt(cleanHex.substring(0, 2), 16)
  const g = parseInt(cleanHex.substring(2, 4), 16)
  const b = parseInt(cleanHex.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, 1)`
}

export const hexToHsl = (hex: string): string => {
  // Eliminar el símbolo #
  hex = hex.replace(/^#/, '');

  // Expandir de 3 dígitos a 6 (ej: #abc → #aabbcc)
  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, '$1$1');
  }

  // Validar que tenga 6 dígitos hexadecimales
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('Formato hexadecimal inválido');
  }

  // Convertir a RGB (valores entre 0 y 1)
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;

  // Si es un tono de gris (sin saturación)
  if (max === min) {
    const lPercent = Math.round(lightness * 100);
    return `hsl(0, 0%, ${lPercent}%)`;
  }

  // Calcular saturación
  const delta = max - min;
  const saturation = lightness > 0.5
    ? delta / (2 - max - min)
    : delta / (max + min);

  // Calcular matiz (hue)
  let hue: number;
  switch (max) {
    case r:
      hue = ((g - b) / delta + (g < b ? 6 : 0)) * 60; // 60 grados por sector
      break;
    case g:
      hue = ((b - r) / delta + 2) * 60;
      break;
    case b:
      hue = ((r - g) / delta + 4) * 60;
      break;
    default:
      hue = 0;
  }

  // Asegurarse de que el matiz esté en [0, 360)
  hue = Math.round(hue);
  if (hue < 0) hue += 360;

  const sPercent = Math.round(saturation * 100);
  const lPercent = Math.round(lightness * 100);

  return `hsl(${hue}, ${sPercent}%, ${lPercent}%)`;
}

// funcion para obtener el fondo y color de texto dependiendo el tema
const getBaseColors = (h: number, mode: 'light' | 'dark') => {
  const bgLightness = mode === 'light' ? 95 : 10
  const fgLightness = mode === 'light' ? 15 : 90
  return {
    background: hslToHex(h, 10, bgLightness),
    foreground: hslToHex(h, 15, fgLightness)
  }
}






// Funcion que genera un HSL aleatorio
const randomHSL = (): [number, number, number] => {
  const h = Math.floor(Math.random() * 360)
  const s = Math.floor(Math.random() * 60) + 40
  const l = Math.floor(Math.random() * 60) + 20
  return [h, s, l]
}

// Paleta aleatoria
export const generateRandomPalette = (mode: Themes): Palette => {
  const [h, s, l] = randomHSL()
  return {
    ...getBaseColors(h, mode),
    primary: hslToHex(h, s, l),
    secondary: hslToHex((h + 40) % 360, s, l),
    accent: hslToHex((h + 120) % 360, s, l),
    muted: hslToHex(h, s - 30, l + 20)
  }
}

// Paleta complementaria
export const generateComplementaryPalette = (mode: Themes): Palette => {
  const [h, s, l] = randomHSL()
  return {
    ...getBaseColors(h, mode),
    primary: hslToHex(h, s, l),
    secondary: hslToHex((h + 180) % 360, s, l),
    accent: hslToHex((h + 180) % 360, s - 10, l + 10),
    muted: hslToHex(h, s - 30, l + 20)
  }
}

// Paleta análoga
export const generateAnalogousPalette = (mode: Themes): Palette => {
  const [h, s, l] = randomHSL()
  return {
    ...getBaseColors(h, mode),
    primary: hslToHex(h, s, l),
    secondary: hslToHex((h + 30) % 360, s, l),
    accent: hslToHex((h - 30 + 360) % 360, s, l),
    muted: hslToHex(h, s - 30, l + 20)
  }
}

// Paleta triádica
export const generateTriadicPalette = (mode: Themes): Palette => {
  const [h, s, l] = randomHSL()
  return {
    ...getBaseColors(h, mode),
    primary: hslToHex(h, s, l),
    secondary: hslToHex((h + 120) % 360, s, l),
    accent: hslToHex((h + 240) % 360, s, l),
    muted: hslToHex(h, s - 30, l + 20)
  }
}

// Paleta monocromática
export const generateMonochromaticPalette = (mode: Themes): Palette => {
  const [h, s, l] = randomHSL()
  return {
    ...getBaseColors(h, mode),
    primary: hslToHex(h, s, l),
    secondary: hslToHex(h, s - 10, l + 20),
    accent: hslToHex(h, s + 10, l - 20),
    muted: hslToHex(h, s - 30, l + 20)
  }
}

// Función principal para generar paleta según el tipo
export const generatePalette = (type: string, mode: Themes = 'light'): Palette => {
  switch (type) {
    case 'random':
      return generateRandomPalette(mode)
    case 'complementary':
      return generateComplementaryPalette(mode)
    case 'analogous':
      return generateAnalogousPalette(mode)
    case 'triadic':
      return generateTriadicPalette(mode)
    case 'monochromatic':
      return generateMonochromaticPalette(mode)
    default:
      return generateRandomPalette(mode)
  }
}

