import { useState, useEffect, useRef } from 'react'
import TickerHelp from './TickerHelp'
import { searchTickers } from '../services/stockAPI'

function SearchBar({ onSearch, isLoading }) {
  const [ticker, setTicker] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const debounceRef = useRef(null)
  const wrapperRef = useRef(null)

  // Debounced live search as the user types
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    if (!ticker.trim()) {
      setSuggestions([])
      return
    }

    debounceRef.current = setTimeout(async () => {
      const results = await searchTickers(ticker)
      setSuggestions(results)
    }, 300) // wait 300ms after typing stops before calling the API

    return () => clearTimeout(debounceRef.current)
  }, [ticker])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (!ticker.trim()) return
    setShowSuggestions(false)
    onSearch(ticker.trim().toUpperCase())
  }

  function handleSuggestionClick(symbol) {
    setTicker(symbol)
    setShowSuggestions(false)
    onSearch(symbol.toUpperCase())
  }

  return (
    <div>
      <TickerHelp />
      <div ref={wrapperRef} className="relative max-w-md mx-auto px-4 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full"
        >
          <input
            type="text"
            value={ticker}
            onChange={(e) => {
              setTicker(e.target.value)
              setShowSuggestions(true)
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Enter a ticker or company name (e.g. AAPL or Apple)"
            disabled={isLoading}
            autoComplete="off"
            className="w-full sm:w-64 px-4 py-3 rounded-lg bg-white text-jungle-dark
                       placeholder-gray-400 outline-none focus:ring-2 focus:ring-banana
                       disabled:opacity-60 transition-shadow"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-banana text-jungle-dark
                       font-semibold hover:bg-banana-dark active:scale-95 transition-all
                       disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {isLoading ? '🍌 Analyzing...' : '🍌 Analyze'}
          </button>
        </form>

        {showSuggestions && suggestions.length > 0 && (
          <ul
            className="absolute z-20 left-4 right-4 sm:left-0 sm:right-auto sm:w-64
                       mt-1 bg-[var(--bg-card)] rounded-lg shadow-lg overflow-hidden
                       animate-fade-in"
          >
            {suggestions.map((s) => (
              <li key={s.symbol}>
                <button
                  type="button"
                  onClick={() => handleSuggestionClick(s.symbol)}
                  className="w-full text-left px-4 py-2 text-sm text-[var(--text-body)]
                             hover:bg-banana hover:text-jungle-dark transition-colors"
                >
                  <span className="font-semibold text-[var(--text-heading)]">
                    {s.symbol}
                  </span>
                  {' — '}
                  {s.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SearchBar