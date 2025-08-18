import { ShowcaseButtons } from "../components/design/ShowcaseButtons"

export const DesignSystem = () => {
  return (
    <main className="max-w-6xl mx-auto p-4 text-foreground">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl">
        Bienvenido al sistema de diseño de
        <span className="pl-2 font-semibold">
          Tono <span className="bg-orange-500 px-2 rounded-sm text-white">UI</span>
        </span>
      </h2>

      <section className="space-y-2 pt-4">
        <h4 className="font-semibold  sm:text-lg md:text-xl">Botones</h4>
        <ShowcaseButtons />
      </section>

    </main>
  )
}