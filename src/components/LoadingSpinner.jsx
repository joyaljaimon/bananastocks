function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-5xl animate-bounce">
        <span className="dark:hidden">🍌</span>
        <span className="hidden dark:inline">🕶️🐒</span>
      </div>
      <p className="text-[var(--text-body)] mt-4 text-sm">
        <span className="dark:hidden">Sending monkeys to fetch the data...</span>
        <span className="hidden dark:inline">
          Agent Monkey is going undercover for intel...
        </span>
      </p>
    </div>
  )
}

export default LoadingSpinner