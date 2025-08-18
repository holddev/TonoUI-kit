import { LayoutDashboardIcon, PaintBucketIcon, PaletteIcon, SparklesIcon, StoreIcon, WandSparklesIcon } from "lucide-react"
import { Header } from "../components/Header"
import { Button } from "../components/UI/Button"
import { DropdownSelect } from "../components/UI/DropdownSelect"
import { ColorCard } from "../components/ColorCard"
import { ContentSection } from "../components/ContentSection"
import { usePaletteColors } from "../hooks/usePaletteColors"
import { Dashboard } from "../components/preview/Dashboard"
import { useState } from "react"
import { Ecommerce } from "../components/preview/Ecommerce"
import type { Palette } from "../types/types"
import { LandingPage } from "../components/preview/LandingPage"
import { Icons } from "../components/Icons"
import { useTheme } from "../hooks/useTheme"

export const Home = () => {

  const options = [
    { label: "🎲 Aleatoria", value: "random" },
    { label: "🎯 Complementaria", value: "complementary" },
    { label: "🌈 Análoga", value: "analogous" },
    { label: "🔺 Triádica", value: "triadic" },
    { label: "🎨 Monocromática", value: "monochromatic" },
  ]
  const { theme } = useTheme()
  const { colors, regenerate, paletteType, setPaletteType } = usePaletteColors("random", theme)
  const [previewUI, setPreviewUI] = useState("dashboard")


  const handleGeneratePalette = () => {
    regenerate()
  }

  const onChangePreviewUI = (value: string) => setPreviewUI(value.toLocaleLowerCase())

  const getColor = (name: string) => colors.find(c => c.name === name)?.hex || "#000"

  const currentColors: Palette = {
    background: getColor("background"),
    foreground: getColor("foreground"),
    primary: getColor("primary"),
    secondary: getColor("secondary"),
    accent: getColor("accent"),
    muted: getColor("muted"),
  }

  return (
    <>
      <div className="max-w-6xl mx-auto py-2 px-4 overflow-hidden">
        <Header />
        <h1 className="w-fit mx-auto mt-24 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
          Aplica colores con <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-slate-900">Tono UI</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto text-center">
          Descubre paletas de colores increíbles para tus proyectos creativos. Genera, explora y personaliza combinaciones perfectas en segundos.
        </p>

        <ContentSection
          icon={<WandSparklesIcon className="size-4 sm:size-5 stroke-2" />}
          title="Generador de paletas"
          description="Crea paletas de colores perfectas para tus proyectos."
        >
          <div className="flex items-center justify-center gap-4">
            <DropdownSelect
              options={options}
              value={paletteType}
              onChange={setPaletteType}
              className="min-w-[180px]"
            />

            <Button
              onClick={handleGeneratePalette}
              variant="splitSlide"
              className="flex items-center gap-2" >
              <SparklesIcon className="size-4" /> Generar Nueva Paleta
            </Button>
          </div>
        </ContentSection>

        <ContentSection
          icon={<PaletteIcon className="size-4 sm:size-5 stroke-2" />}
          title="Paleta de colores">
          <ul className="flex flex-wrap gap-3">
            {colors.map((color, index) => (
              <ColorCard
                key={`${color.name}-${index}`}
                hex={color.hex}
                rgba={color.rgba}
                hsl={color.hsl}
                name={color.name}
              />
            ))}
          </ul>
        </ContentSection>

        <ContentSection
          icon={<PaintBucketIcon className="size-4 sm:size-5 stroke-2" />}
          title="Vista previa de la paleta de colores"
          description="Observa cómo se ven tus colores en diseños reales"
          className="pb-12"
        >
          <div className="flex items-center justify-center gap-4 pt-1 pb-2" >
            {
              [
                { name: 'Dashboard', icon: <LayoutDashboardIcon className="size-4" />, active: true },
                { name: 'E-commerce', icon: <StoreIcon className="size-4" /> },
                { name: 'Landing Page', icon: <SparklesIcon className="size-4" /> },
              ].map(({ name, icon }) => (
                <Button
                  key={name}
                  onClick={() => onChangePreviewUI(name)}
                  className="flex items-center gap-1"
                  variant={previewUI === name.toLowerCase() ? "default" : "outline"}
                >
                  {icon}{name}
                </Button>
              ))
            }
          </div>
          {previewUI === "dashboard" && <Dashboard colors={currentColors} />}
          {previewUI === "e-commerce" && <Ecommerce colors={currentColors} />}
          {previewUI === "landing page" && <LandingPage colors={currentColors} />}

        </ContentSection>

        <p className="text-sm text-foreground/70 flex gap-2 items-center">Desarrollado por
          <a
            href=""
            title="Ir al perfil en GitHub"
            className="border-b-1 border-primary text-primary flex gap-1 items-center"
          >
            <Icons name="github" /> holddev
          </a>
        </p>

      </div>
    </>
  )
}