import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import { useTheme } from './hooks/useTheme'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-jungle flex flex-col">
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App