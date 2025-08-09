import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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

