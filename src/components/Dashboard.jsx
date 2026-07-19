function formatMoney(value) {
  if (value === null || value === undefined) return 'N/A'
  if (Math.abs(value) >= 1e9) return `$${(value / 1e9).toFixed(1)}B`
  if (Math.abs(value) >= 1e6) return `$${(value / 1e6).toFixed(1)}M`
  return `$${value.toLocaleString()}`
}

function formatPercent(value) {
  if (value === null || value === undefined) return 'N/A'
  return `${(value * 100).toFixed(1)}%`
}

function formatNumber(value, decimals = 2) {
  if (value === null || value === undefined) return 'N/A'
  return value.toFixed(decimals)
}

function Dashboard({ data }) {
  const { companyName, symbol, price, industry, analysis, banana } = data

  return (
    <div className="max-w-2xl mx-auto px-4 pb-16 pt-8 animate-fade-in">
      {/* Header */}
      <div className="bg-jungle-dark rounded-2xl p-6 mb-4">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <h2 className="text-2xl font-bold text-banana">
              {companyName} ({symbol})
            </h2>
            <p className="text-banana-light text-sm">{industry}</p>
          </div>
          <div className="text-right">
            <p className="text-banana text-2xl font-bold">${price}</p>
          </div>
        </div>
      </div>

      {/* Banana Score */}
      <div className="bg-banana rounded-2xl p-6 mb-4 text-center">
        <p className="text-jungle-dark text-sm font-semibold uppercase tracking-wide">
          Banana Score
        </p>
        <p className="text-jungle-dark text-5xl font-bold">
          {analysis.bananaScore}/10
        </p>
      </div>

      {/* AI Narrative */}
      <div className="bg-jungle-dark rounded-2xl p-6 mb-4">
        <p className="text-banana-light leading-relaxed">{banana.narrative}</p>
        <p className="text-banana font-semibold mt-4">
          🍌 Monkey Verdict: {banana.monkeyVerdict}
        </p>
      </div>

      {/* Strengths & Risks */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-jungle-dark rounded-2xl p-5">
          <p className="text-banana font-semibold mb-2">🍌 Strengths</p>
          <ul className="text-banana-light text-sm space-y-1">
            {analysis.strengths.length > 0 ? (
              analysis.strengths.map((s, i) => <li key={i}>• {s}</li>)
            ) : (
              <li>No standout strengths detected</li>
            )}
          </ul>
        </div>
        <div className="bg-jungle-dark rounded-2xl p-5">
          <p className="text-banana font-semibold mb-2">🍌 Risks</p>
          <ul className="text-banana-light text-sm space-y-1">
            {analysis.risks.length > 0 ? (
              analysis.risks.map((r, i) => <li key={i}>• {r}</li>)
            ) : (
              <li>No major risks detected</li>
            )}
          </ul>
        </div>
      </div>

      {/* Raw Financial Metrics */}
      <div className="bg-jungle-dark rounded-2xl p-5">
        <p className="text-banana font-semibold mb-3">📊 Raw Financial Metrics</p>
        <div className="grid grid-cols-2 gap-y-2 text-sm text-banana-light">
          <span>Revenue</span>
          <span className="text-right">{formatMoney(data.revenue)}</span>

          <span>Gross Profit</span>
          <span className="text-right">{formatMoney(data.grossProfit)}</span>

          <span>Net Income</span>
          <span className="text-right">{formatMoney(data.netIncome)}</span>

          <span>Revenue Growth</span>
          <span className="text-right">{formatPercent(data.revenueGrowthPct)}</span>

          <span>Gross Margin</span>
          <span className="text-right">{formatPercent(data.grossMarginPct)}</span>

          <span>Net Margin</span>
          <span className="text-right">{formatPercent(data.netMarginPct)}</span>

          <span>Debt / Equity</span>
          <span className="text-right">{formatNumber(data.debtToEquity)}</span>

          <span>Current Ratio</span>
          <span className="text-right">{formatNumber(data.currentRatio)}</span>

          <span>P/E Ratio</span>
          <span className="text-right">{formatNumber(data.peRatio)}</span>

          <span>Price / Book</span>
          <span className="text-right">{formatNumber(data.priceToBook)}</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard