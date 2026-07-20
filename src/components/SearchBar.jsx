import { useState } from 'react'
import TickerHelp from './TickerHelp'

function SearchBar({ onSearch, isLoading }) {
  const [ticker, setTicker] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!ticker.trim()) return
    onSearch(ticker.trim().toUpperCase())
  }

  return (
    <div>
      <TickerHelp />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4 max-w-md mx-auto w-full"
      >
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="Enter a ticker (e.g. AAPL)"
          disabled={isLoading}
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
    </div>
  )
}

export default SearchBar