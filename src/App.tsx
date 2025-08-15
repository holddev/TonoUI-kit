import { ThemeProvider } from "./contexts/ThemeProvider"
import { DesignSystem } from "./pages/DesignSystem"
import { Home } from "./pages/Home"
import { Route, BrowserRouter, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ui" element={<DesignSystem />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
