function Hero() {
  return (
    <div className="text-center px-4 pt-16 pb-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-heading)] mb-4">
        🍌 Understand Any Stock Like a Monkey Understands a Banana Farm
      </h1>
      <p className="text-[var(--text-body)] text-base sm:text-lg max-w-xl mx-auto">
        Search a stock ticker. We'll analyze the real numbers and explain
        them in plain, jungle-friendly language — no finance degree required.
      </p>
      <p className="hidden dark:block text-[var(--text-body)] text-xs mt-3 italic">
        🕶️ Stealth mode active — even monkeys need to stay incognito.
      </p>
    </div>
  )
}

export default Hero