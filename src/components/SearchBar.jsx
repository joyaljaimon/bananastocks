import { useState } from 'react'

function SearchBar() {
  const [ticker, setTicker] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!ticker.trim()) return

    // TEMPORARY: will be replaced with a real API call in Phase 4
    console.log('Searching for ticker:', ticker.toUpperCase())
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4 max-w-md mx-auto"
    >
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter a ticker (e.g. AAPL)"
        className="w-full sm:w-64 px-4 py-3 rounded-lg bg-white text-jungle-dark
                   placeholder-gray-400 outline-none focus:ring-2 focus:ring-banana"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 rounded-lg bg-banana text-jungle-dark
                   font-semibold hover:bg-banana-dark transition-colors"
      >
        🍌 Analyze
      </button>
    </form>
  )
}

export default SearchBar