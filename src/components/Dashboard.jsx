import InfoTooltip from './InfoTooltip'
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

const METRIC_DEFINITIONS = {
  revenue: 'Total money the company brought in from sales before any costs are subtracted.',
  grossProfit: 'Revenue minus the direct cost of making the product or service.',
  netIncome: 'The company\'s actual profit after ALL expenses, taxes, and costs are subtracted.',
  revenueGrowth: 'How much revenue grew compared to the same period last year.',
  grossMargin: 'The percentage of revenue kept after direct production costs. Higher usually means a more efficient business.',
  netMargin: 'The percentage of revenue that turns into actual profit. Higher means the company keeps more of what it earns.',
  debtToEquity: 'How much the company has borrowed compared to what it actually owns. Lower usually means less financial risk.',
  currentRatio: 'Whether the company has enough short-term assets to cover short-term bills. Above 1 is generally healthy.',
  peRatio: 'Price-to-Earnings ratio — how expensive the stock is compared to its profits. Higher can mean investors expect strong future growth.',
  priceToBook: 'Compares the stock price to the company\'s net worth on paper. Higher can mean investors are paying a premium.',
}

function Dashboard({ data }) {
  const { companyName, symbol, price, industry, analysis, banana } = data

  return (
    <div className="max-w-2xl mx-auto px-4 pb-16 pt-8 animate-fade-in">
      {/* Header */}
      <div className="bg-[var(--bg-card)] transition-colors duration-300 rounded-2xl p-6 mb-4">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-heading)]">
              {companyName} ({symbol})
            </h2>
            <p className="text-[var(--text-body)] text-sm">{industry}</p>
          </div>
          <div className="text-right">
            <p className="text-[var(--text-heading)] text-2xl font-bold">${price}</p>
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
      <div className="bg-[var(--bg-card)] transition-colors duration-300 rounded-2xl p-6 mb-4">
        <p className="text-[var(--text-body)] leading-relaxed">{banana.narrative}</p>
        <p className="text-[var(--text-heading)] font-semibold mt-4">
          🍌 Monkey Verdict: {banana.monkeyVerdict}
        </p>
      </div>

      {/* Strengths & Risks */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-[var(--bg-card)] transition-colors duration-300 rounded-2xl p-5">
          <p className="text-[var(--text-heading)] font-semibold mb-2">🍌 Strengths</p>
          <ul className="text-[var(--text-body)] text-sm space-y-1">
            {analysis.strengths.length > 0 ? (
              analysis.strengths.map((s, i) => <li key={i}>• {s}</li>)
            ) : (
              <li>No standout strengths detected</li>
            )}
          </ul>
        </div>
        <div className="bg-[var(--bg-card)] transition-colors duration-300 rounded-2xl p-5">
          <p className="text-[var(--text-heading)] font-semibold mb-2">🍌 Risks</p>
          <ul className="text-[var(--text-body)] text-sm space-y-1">
            {analysis.risks.length > 0 ? (
              analysis.risks.map((r, i) => <li key={i}>• {r}</li>)
            ) : (
              <li>No major risks detected</li>
            )}
          </ul>
        </div>
      </div>
    {analysis.dataGaps && analysis.dataGaps.length > 0 && (
    <div className="bg-[var(--bg-card)] transition-colors duration-300 rounded-2xl p-5 mb-4">
        <p className="text-[var(--text-heading)] font-semibold mb-2">
        🌫️ Data Not Available
        </p>
        <ul className="text-[var(--text-body)] text-sm space-y-1">
        {analysis.dataGaps.map((d, i) => (
            <li key={i}>• {d}</li>
        ))}
        </ul>
    </div>
    )}

    {/* Raw Financial Metrics */}
    <div className="bg-[var(--bg-card)] transition-colors duration-300 rounded-2xl p-5">
    <p className="text-[var(--text-heading)] font-semibold mb-3">
        📊 Raw Financial Metrics
    </p>
    <div className="grid grid-cols-2 gap-y-2 text-sm text-[var(--text-body)]">
        <span className="flex items-center">
        Revenue
        <InfoTooltip text={METRIC_DEFINITIONS.revenue} />
        </span>
        <span className="text-right">{formatMoney(data.revenue)}</span>

        <span className="flex items-center">
        Gross Profit
        <InfoTooltip text={METRIC_DEFINITIONS.grossProfit} />
        </span>
        <span className="text-right">{formatMoney(data.grossProfit)}</span>

        <span className="flex items-center">
        Net Income
        <InfoTooltip text={METRIC_DEFINITIONS.netIncome} />
        </span>
        <span className="text-right">{formatMoney(data.netIncome)}</span>

        <span className="flex items-center">
        Revenue Growth
        <InfoTooltip text={METRIC_DEFINITIONS.revenueGrowth} />
        </span>
        <span className="text-right">{formatPercent(data.revenueGrowthPct)}</span>

        <span className="flex items-center">
        Gross Margin
        <InfoTooltip text={METRIC_DEFINITIONS.grossMargin} />
        </span>
        <span className="text-right">{formatPercent(data.grossMarginPct)}</span>

        <span className="flex items-center">
        Net Margin
        <InfoTooltip text={METRIC_DEFINITIONS.netMargin} />
        </span>
        <span className="text-right">{formatPercent(data.netMarginPct)}</span>

        <span className="flex items-center">
        Debt / Equity
        <InfoTooltip text={METRIC_DEFINITIONS.debtToEquity} />
        </span>
        <span className="text-right">{formatNumber(data.debtToEquity)}</span>

        <span className="flex items-center">
        Current Ratio
        <InfoTooltip text={METRIC_DEFINITIONS.currentRatio} />
        </span>
        <span className="text-right">{formatNumber(data.currentRatio)}</span>

        <span className="flex items-center">
        P/E Ratio
        <InfoTooltip text={METRIC_DEFINITIONS.peRatio} />
        </span>
        <span className="text-right">{formatNumber(data.peRatio)}</span>

        <span className="flex items-center">
        Price / Book
        <InfoTooltip text={METRIC_DEFINITIONS.priceToBook} />
        </span>
        <span className="text-right">{formatNumber(data.priceToBook)}</span>
    </div>
    </div>
    </div>
  )
}

export default Dashboard