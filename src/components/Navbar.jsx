import { Link } from 'react-router-dom'

function Navbar({ isDark, onToggleTheme }) {
  return (
    <nav className="w-full bg-[var(--bg-card)] transition-colors duration-300 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl">🍌</span>
        <span className="text-xl font-bold text-[var(--text-heading)]">
          BananaStocks
        </span>
      </Link>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex gap-6 text-[var(--text-body)] text-sm">
          <Link to="/how-it-works" className="hover:text-banana transition-colors">
            How it works
          </Link>
          <Link to="/about" className="hover:text-banana transition-colors">
            About
          </Link>
        </div>
        <button
          onClick={onToggleTheme}
          className="text-xl hover:scale-110 transition-transform"
          aria-label="Toggle Spy Monkey Night Mode"
          title={isDark ? 'Return to daylight' : 'Go into stealth mode'}
        >
          {isDark ? '☀️' : '🕶️'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar