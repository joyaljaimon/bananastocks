const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050'

export async function fetchStockAnalysis(ticker) {
  const response = await fetch(`${API_BASE_URL}/api/stock/${ticker}`)

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(errorBody.details || errorBody.error || 'Failed to fetch stock data')
  }

  return response.json()
}

export async function searchTickers(query) {
  if (!query || query.trim().length < 1) return []

  const response = await fetch(`${API_BASE_URL}/api/search/${encodeURIComponent(query)}`)

  if (!response.ok) return []

  return response.json()
}