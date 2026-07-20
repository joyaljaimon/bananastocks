import { useState } from 'react'

function TickerHelp() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="text-center mb-3">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-[var(--text-body)] text-xs underline hover:text-banana
                   transition-colors"
      >
        {isOpen ? 'Hide' : "What's a stock ticker?"} 🍌
      </button>

      {isOpen && (
        <div
          className="max-w-md mx-auto mt-3 bg-[var(--bg-card)] transition-colors
                     duration-300 rounded-xl p-4 text-sm text-[var(--text-body)]
                     text-left animate-fade-in"
        >
          <p>
            A <strong className="text-[var(--text-heading)]">ticker</strong> is
            the short code used to identify a company on the stock market —
            like a company's nickname. For example, <strong>AAPL</strong> is
            Apple, <strong>TSLA</strong> is Tesla, and <strong>MSFT</strong> is
            Microsoft.
          </p>
          <p className="mt-2">
            Just type a ticker into the search box above and hit "Analyze" to
            see the banana breakdown for that company.
          </p>
        </div>
      )}
    </div>
  )
}

export default TickerHelp