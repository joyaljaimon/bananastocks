function Navbar({ isDark, onToggleTheme }) {
  return (
    <nav className="w-full bg-jungle-dark dark:bg-jungle-dark px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🍌</span>
        <span className="text-xl font-bold text-banana">BananaStocks</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex gap-6 text-banana-light text-sm">
          <a href="#" className="hover:text-banana transition-colors">
            How it works
          </a>
          <a href="#" className="hover:text-banana transition-colors">
            About
          </a>
        </div>
        <button
          onClick={onToggleTheme}
          className="text-xl hover:scale-110 transition-transform"
          aria-label="Toggle theme"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar