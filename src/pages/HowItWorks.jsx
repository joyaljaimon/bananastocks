function HowItWorks() {
  const steps = [
    {
      emoji: '🔍',
      title: 'You search a ticker',
      body: 'Type any stock symbol, like AAPL or TSLA, and hit Analyze.',
    },
    {
      emoji: '📊',
      title: 'We pull real financial data',
      body: 'Our server fetches live revenue, profit, debt, and valuation data from a financial data provider — the same kind of numbers real analysts use.',
    },
    {
      emoji: '🍌',
      title: 'A deterministic engine scores it',
      body: 'Before any AI gets involved, plain code scores growth, profitability, debt, liquidity, and valuation on a fixed scale. This part never guesses — same data always produces the same score.',
    },
    {
      emoji: '🐒',
      title: 'BananaGPT explains it',
      body: 'An AI model takes the score and the real numbers and translates them into a fun jungle metaphor. It is only allowed to explain the numbers it is given — never invent new ones.',
    },
    {
      emoji: '✅',
      title: 'You get the full picture',
      body: 'A banana score out of 10, strengths, risks, a fun narrative, and the raw numbers underneath — so you can always see exactly what the score is based on.',
    },
  ]

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 animate-fade-in">
      <h1 className="text-3xl font-bold text-[var(--text-heading)] mb-3 text-center">
        🍌 How BananaStocks Works
      </h1>
      <p className="text-[var(--text-body)] text-center mb-10">
        Real financial data, explained through a jungle full of monkeys and bananas.
      </p>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-[var(--bg-card)] transition-colors duration-300 rounded-2xl p-5 flex gap-4"
          >
            <span className="text-3xl">{step.emoji}</span>
            <div>
              <h2 className="text-[var(--text-heading)] font-semibold mb-1">
                {step.title}
              </h2>
              <p className="text-[var(--text-body)] text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks