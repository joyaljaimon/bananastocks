import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="min-h-screen bg-jungle flex flex-col">
      <Navbar />
      <Hero />
      <SearchBar />
    </div>
  )
}

export default App