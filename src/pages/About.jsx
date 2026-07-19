function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 animate-fade-in">
      <h1 className="text-3xl font-bold text-banana mb-6 text-center">
        🍌 About BananaStocks
      </h1>

      <div className="bg-jungle-dark rounded-2xl p-6 space-y-4 text-banana-light leading-relaxed">
        <p>
          BananaStocks is a beginner-friendly stock education tool. Investing
          terms like P/E ratio, debt-to-equity, and net margin can be
          intimidating if you've never studied finance — so we translate them
          into a story about monkey tribes, banana farms, and jungle
          economics instead.
        </p>
        <p>
          The goal isn't to replace real financial research. It's to give
          beginners an intuitive first read on a company's fundamentals, so
          the real numbers feel less like a wall of jargon and more like
          something you can reason about.
        </p>
        <p>
          Under the hood, BananaStocks pulls real financial data, scores it
          with a transparent, non-AI scoring engine, and only then hands that
          score to an AI model whose sole job is to explain — not calculate —
          what the data already shows.
        </p>
      </div>
    </div>
  )
}

export default About