const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050'

/**
 * Calls our backend to get the full banana analysis for a ticker.
 * Throws an error if the request fails, so callers can catch it.
 */
export async function fetchStockAnalysis(ticker) {
  const response = await fetch(`${API_BASE_URL}/api/stock/${ticker}`)

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(errorBody.details || errorBody.error || 'Failed to fetch stock data')
  }

  return response.json()
}