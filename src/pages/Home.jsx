import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import Dashboard from '../components/Dashboard'
import LoadingSpinner from '../components/LoadingSpinner'
import { fetchStockAnalysis } from '../services/stockAPI'

function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

// Wake up the backend as soon as the page loads, so it's ready
// by the time the user starts searching (Render free tier sleeps
// after inactivity and takes 30-60s to wake up on first request)
  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050'
    fetch(`${API_BASE_URL}/api/health`).catch(() => {
      // Silently ignore - this is just a warm-up ping, not critical
    })
  }, [])

  async function handleSearch(ticker) {
    setIsLoading(true)
    setError(null)
    setData(null)

    try {
      const result = await fetchStockAnalysis(ticker)
      setData(result)
    } catch (err) {
      if (err.message.includes('fetch')) {
        setError("Couldn't reach the banana server. Is the backend running?")
      } else {
        setError(err.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Hero />
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />

      {isLoading && <LoadingSpinner />}

      {error && !isLoading && (
        <p className="text-center text-red-300 mt-6 px-4 animate-fade-in">
          🍌 {error}
        </p>
      )}

      {data && !isLoading && <Dashboard data={data} />}
    </>
  )
}

export default Home