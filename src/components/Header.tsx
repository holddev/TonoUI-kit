import { SwitcherTheme } from "./SwitcherTheme"

export const Header = () => {

  return (
    <header>
      <div className="max-w-6xl mx-auto py-4 flex items-center justify-between">
        <h2>Tono <span className="bg-orange-500 px-2 py-1 rounded-sm shadow-sm">UI</span></h2>
        <SwitcherTheme />
      </div>
    </header>
  )
}